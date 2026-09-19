---
title: "Defending a Thesis With Zero Trained Models: Our FYDP-I Defense"
excerpt: "Our final-year thesis defense had one awkward problem: we hadn't trained a single neural network yet. Here's how we defended a verified baseline instead, and the exact prep system we used."
coverImage: "/images/brand/cover-defending-our-fydp-thesis.svg"
date: "2026-06-20"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "Research"
readTime: 7
tags: ["Research", "FYDP", "Thesis Defense", "Machine Learning"]
featured: true
---

# Defending a Thesis With Zero Trained Models: Our FYDP-I Defense

On June 15, 2026, my team (Team Paradox) walked into our FYDP-I defense with a machine learning thesis, *Solving the Lorenz ODE System Using Optimal ANN Architectures*, supervised by Dr. Muhammad Nomani Kabir. We had exactly zero trained neural networks to show for it.

That sounds like a disaster. It wasn't. It was the plan. And preparing to defend that plan taught me more about research communication than anything else in my degree.

## The project in 60 seconds

Many real systems are described by differential equations with no clean solution. The standard fix is a numerical solver, but solvers redo all their work for every new query. A trained neural network could act as a fast stand-in, a *surrogate*.

Most approaches lean on physics-informed tricks (PINNs). We asked a simpler question: can a plain, data-only network learn a hard coupled system like Lorenz-1960, and which architecture does it best? Phase one built and verified the reference data. Phase two runs a controlled 69-experiment search over depth, width, activation, and optimizer.

## Lesson 1: A trustworthy baseline is a result

The hardest part of any ML study isn't training models. It's having ground truth you can trust. If the reference data is shaky, every later number is meaningless.

So phase one was entirely about the foundation. We implemented RK4 ourselves, cross-checked it against SciPy's DOP853 solver, and got the two independent methods to agree to an RMSE of about 1.3×10⁻¹¹, an order of magnitude better than our target. When two solvers from completely different families agree that closely, the agreement is the true solution rather than a shared bug.

When a panelist asks "you haven't trained anything, so what did you actually do?", that's the answer: a narrow question, a gap identified from 17 papers, a locked experimental design, and a baseline two solvers agree on. Say it with confidence, because it's true.

## Lesson 2: Know your numbers cold

We kept a single list of numbers every team member had to be able to recite without looking: the system's equations and constants, the solver settings, the train/validation split, the seed, the optimizer and learning rate, the size of the experiment grid, and above all the one headline result and what it means.

The subtle trap in ours: our slide said "MSE 1.8×10⁻²²" while our error plot showed values around 10⁻¹¹. A sharp examiner will ask which one is right. The answer is both. MSE is the square of the error, so an MSE of 1.8e-22 is an RMSE of about 1.3e-11. We rehearsed that answer specifically. Know how your own metrics relate to each other, because "the same fact stated two ways" is exactly where panels test whether you understand your own work.

## Lesson 3: Rehearse the trap questions

The friendly questions ("explain your project") take care of themselves. What we drilled were the sharp ones:

"RK4 already solves this fast and perfectly. Why a neural network at all?" Be honest: we won't beat RK4 here. The value is the lesson. We want to know whether a plain network can learn a coupled nonlinear system at all, and which shape does it best. That carries to larger systems where a trained surrogate answers instantly.

"Why not just build a PINN, since they work better?" Scope. PINNs are well studied, and we benchmark against their published numbers. Keeping physics out of the loss isolates the effect of architecture, which is the actual research question.

"Is this the famous chaotic Lorenz attractor?" No, and precision matters here. The 1960 "maximum simplification" system is bounded and quasi-periodic, unlike the chaotic 1963 one. We even caught places where our own report used "chaotic" loosely and prepared to own the correction before the panel found it.

That last point generalizes: audit your own report for weak wording and typos before the panel does. Nothing defuses a "gotcha" like calmly saying "that's loose wording on our side; here's the precise statement."

## Lesson 4: Decide who answers what, in advance

With five team members, the worst defense moment is silence while everyone waits for someone else to answer. We assigned every topic area a primary and a backup: the math, the literature, the methodology, the baseline numbers, the future work. Whoever owns a question answers first. One teammate may add a single sentence, then stop.

For the questions nobody can answer, we agreed on graceful fallbacks: *"We haven't tested that yet, but it fits into phase two. Here's how we'd approach it."* Never invent a number. A calm "we'll confirm and follow up" reads as maturity. A wrong figure reads as fabrication.

## Lesson 5: Have a list of things you will NOT say

Our "do not say" list was as important as the prep sheet:

- Don't claim accuracy results for models you haven't trained.
- Don't promise you'll beat the classical method when you won't.
- Don't call your solver agreement "machine precision" when it's several orders above it.
- Don't guess tool versions or figures you're unsure of.

Overselling in a defense is a loan the Q&A makes you repay with interest.

## The takeaway

A defense is a test of whether you understand your own work, including its limits. Build a foundation you can stand on, memorize the numbers that matter, rehearse the traps, route the questions, and be scrupulously honest about scope.

We walked out with FYDP-I defended and a clean runway into phase two: 69 experiments, now underway. If you're heading into your own defense, steal this system. It works.
