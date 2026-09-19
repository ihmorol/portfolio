---
title: "Solving the Lorenz-1960 ODE With a Physics-Informed Neural Network"
excerpt: "Our FYDP-II model solves the Lorenz-1960 system to five decimal places, trained on the equations alone. Here is the setup, the honest numbers, and two findings the loss curve never showed us."
coverImage: "/images/brand/pinn-residual-01.svg"
date: "2026-09-09"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "AI and Machine Learning"
readTime: 6
tags: ["Machine Learning", "PINN", "Physics-Informed Neural Networks", "PyTorch", "FYDP"]
featured: false
---

# Solving the Lorenz-1960 ODE With a Physics-Informed Neural Network

Back in June I wrote about defending our FYDP-I thesis with zero trained models. This is the sequel: we trained one. The rule we set for ourselves was strict. The reference solution from SciPy's solver is used only to score the network after training. During training, the network sees the differential equation and nothing else.

The system is Lorenz's 1960 "maximum simplification", not the famous chaotic 1963 attractor. Three variables, each one's rate of change depends on the other two:

- dx/dt = -0.10·yz
- dy/dt = 1.60·xz
- dz/dt = -0.75·xy

Starting from (0.5, 0.75, 1.0), we want the solution over t in [0, 1]. There is no closed form, so you either compute it step by step or, our bet, train a network to be the solution.

## The loss function is the physics

A physics-informed neural network replaces the usual "compare against labeled data" loss with a physics residual. The network N(t) outputs a guess for (x, y, z) at any time t. Differentiate the guess, plug it into the equations, and measure how badly it violates them:

r(t) = du/dt - f(u)

That derivative comes from automatic differentiation, not finite differences, so it is exact to machine precision. The loss is the mean squared residual over 3,000 collocation points sampled by Latin hypercube. No labels anywhere. Training means "make the equations hold at 3,000 random times."

One subtlety worth its own paragraph: the loss divides by 3·Nc, not Nc, because the residual has three components at each of the 3,000 points. Our supervisor caught us being vague about this in a feedback note, and the answer (it is a mean over an (Nc, 3) tensor) is now written down in the repo with a test that recomputes the loss from per-point data to eight significant figures.

## Pin the initial condition instead of penalizing it

The starting values have to hold exactly, and there are two ways to get that. The soft way adds an initial-condition penalty to the loss and hopes the optimizer pushes it down. The hard way builds the condition into the output formula:

u_T(t) = u0 + g(t)·N(t), where g(t) = (t - t0)/(tf - t0)

Since g(0) = 0, the network returns exactly u0 at t = 0 no matter what its weights are. The loss then contains only the ODE residual, and the network spends its full capacity learning the shape of the curve away from the anchor. We kept a soft-penalty variant in the code for comparison, but every reported run uses the hard form.

## The numbers

The network is small: 4 hidden layers of 60 tanh units, 11,283 parameters, trained 20,000 Adam iterations with the learning rate sliding from 1e-3 to 1e-4. On a CPU.

Against the DOP853 reference (rtol 1e-10), the combined RMSE is 1.73×10⁻⁵ and the worst single point error is 2.60×10⁻⁵. The state values span roughly 0.5 to 1.6, so the solution is right to about five decimal places, derived from the equations alone. The training loss fell from 2.17×10⁻¹ to 6.82×10⁻⁹, seven and a half orders of magnitude. Rerunning the whole thing from scratch reproduces every metric to the last digit.

Our two favorite checks never touch the reference solution at all. The residual measured on a dense grid of times the network never trained on comes out within 0.85% of the training residual, so the network learned the equation rather than memorizing 3,000 points. And the system has a conserved quantity: the PINN drifts from it by 2.1×10⁻⁵ to 1.3×10⁻⁴ across our runs, while the classical solver drifts by at most 5.6×10⁻¹¹. The drift is the network's, not a measurement artifact.

## Finding 1: our architecture sweep measured luck

We swept nine architectures, depth 3 to 5 crossed with width 50 to 70, one seed each. The spread was 13.4× from best to worst, and completely unordered. The 3×60 network was seven times worse than the smaller 3×50. Rank correlation between accuracy and size was negative but nowhere near significant at n = 9.

That non-monotonic pattern is what optimization noise looks like, so we reran two cells with more seeds. Within one architecture, seed-to-seed spread was 3 to 5×, which is larger than the gap between the cells we re-ran. The differences we were testing sit below the noise. A single-seed sweep cannot rank architectures on this problem, full stop.

We also kept the run of record at 4×60 rather than switching to the seed-0 winner (4×50). Moving the headline to whichever cell happened to win one seed draw is fitting to luck, and it is the kind of thing that only gets caught if someone reruns you.

## Finding 2: the network's hardest point is t = 0, and the loss can't see it

We added per-point telemetry to training: every few epochs, snapshot the residual at each of the 3,000 collocation points. It costs about 12 ms per snapshot because the tensors already exist inside the training step. That telemetry showed something the scalar loss curve hides completely.

In seven of nine runs, the twenty worst residuals sit at t between 0.0003 and 0.0065, the very start of the interval. The reason is structural, not a training failure. The hard-constraint trick pins the value of u at t = 0 exactly, but the derivative there, du_T/dt = N(0), is unconstrained by the construction. And near the origin, g(t) approaches zero, which suppresses the gradient signal that would teach the network that derivative. The formulation itself makes t = 0 the hardest place to learn.

A one-number loss will never show you this. Aggregate metrics say the model converged. The per-point table shows where it did not: the first half a percent of the domain, for a reason you can derive on paper.

## What this PINN cannot do

Honesty section. Training runs in float32, which likely sets an error floor around 1e-5 to 1e-6, so more epochs would not have helped much. The solution is for one initial condition and one time window; change the initial condition and you retrain. And on this small problem, RK4 is much cheaper and more accurate than our network. The point was never to beat the solver. It was to build the cleanest possible baseline for the phase where we compare network designs, and to learn the method on a system where the truth is knowable.

## The takeaway

A PINN trades data for equations: no labels, but a loss that demands the physics holds. The two lessons that will carry into everything we train next are that single-seed comparisons are stories, not results, and that per-point telemetry is cheap enough that skipping it is a choice. The loss curve tells you the model converged. Only the per-point table tells you where it didn't.
