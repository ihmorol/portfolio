---
title: "Computing a Neural Network Forward Pass and Backpropagation by Hand"
excerpt: "For my Machine Learning final I re-derived everything on paper: a 2-2-1 network producing exactly 0.631, an RNN weight update worth 0.00035, a stochastic neuron at T=0, and the pseudo-labeling threshold that decides everything. The numbers are small. The understanding isn't."
coverImage: "/images/brand/ml-handpass-01.svg"
date: "2026-01-29"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "AI and Machine Learning"
readTime: 6
tags: ["Machine Learning", "Neural Networks", "Backpropagation", "Deep Learning"]
featured: false
---

# Computing a Neural Network Forward Pass and Backpropagation by Hand

My ML course's final permitted no framework, so my exam prep was a 592-line guide where every architecture got re-derived on paper. The centerpiece is a 2-2-1 network computed start to finish with real numbers. If you have trained a thousand networks in PyTorch but never evaluated one by hand, the exercise has a surprise in it: the places your intuition is fuzzy become obvious the moment you have to multiply the numbers yourself.

## The forward pass: 0.631

Inputs x1 = 1, x2 = 0. Hidden layer, two ReLU neurons, weights w11 = 0.5, w12 = -0.3, w21 = 0.8, w22 = 0.1 (row i, column j: input i into hidden unit j), biases 0.2 and -0.1:

- h1 = ReLU(1×0.5 + 0×(-0.3) + 0.2) = ReLU(0.7) = 0.7
- h2 = ReLU(1×0.8 + 0×0.1 - 0.1) = ReLU(0.7) = 0.7

Output neuron, sigmoid, weights 0.7 and -0.5, bias 0.4:

y = sigmoid(0.7×0.7 + 0.7×(-0.5) + 0.4) = sigmoid(0.49 - 0.35 + 0.4) = sigmoid(0.54) ≈ 0.631

Notice what the hand computation exposes that the framework hides. Both hidden units land on exactly 0.7, once by construction (0.5 + 0.2) and once by near-cancellation (0.8 - 0.1), and the output is a tug-of-war between them: 0.7×0.7 pushing up, 0.7×0.5 pulling down, with the bias deciding it. Shift one input from 0 to 1 and h2 flips from 0.7 to ReLU(0.9) while h1 drops to ReLU(0.4), and you can see the sigmoid's sensitivity to each weight directly in the arithmetic. "Dead ReLU" stops being a training-debugging phrase when you have watched a hidden unit's entire contribution hang on which side of zero its pre-activation lands.

## Backprop: the chain rule is the whole algorithm

The guide's backprop section derives, for the output layer, δ = -(t - a)·a(1 - a) (the error times the sigmoid derivative), and for hidden layers δ = (Wᵀδ) ⊙ σ'(z), with updates w ← w - η·δ·(a_prev). Nothing exotic. What the hand version contributes is seeing that the gradient flowing into each weight is literally three factors multiplied: the error signal coming down, the local activation, and the local derivative. Every deep-learning complication (vanishing gradients, careful initializations, gating) is a story about one of those three factors getting too small.

## The RNN update, as a four-factor product

The course defined an RNN weight update as a product: Δw = learning rate × input × error term × derivative. The exam's literal numbers: 0.01 × 0.55 × 0.497 × 0.1265 = 0.00035, so the new weight is the old one plus 0.00035. Doing this once by hand makes the learning rate's role unambiguous: it is one of four multiplicands, and three of them (input magnitude, error size, derivative) are outside your control at any given step. Tiny updates are not a bug in the optimizer; they are the arithmetic saying there was not much signal here.

## The stochastic neuron at T = 0

One exam question: a stochastic neuron with I = [2, 4, 3], W = [0.3, 0.5, 0.1], firing probability 1/(1 + exp(-2Σws/T)). At temperature T = 0: Net = 0.6 + 2.0 + 0.3 = 2.9 > 0, and the probability function collapses to a step, output 1. As T → ∞ the probability goes to 0.5 regardless of input. The temperature dial moves the neuron from deterministic to maximally random, which is precisely the annealing story (and, at small T, the LLM sampling story) in one formula.

## Pseudo-labeling: the threshold decides everything

Semi-supervised pseudo-labeling: the model labels its own unlabeled data, and confident predictions become training targets. The exam gave w = [0.4, -0.2], b = 0.5, threshold τ = 0.65, and three points scoring 0.9, 1.7, and -0.9. All three clear |score| ≥ τ, so all three become pseudo-labeled. One subtlety my guide flags: a hard pseudo-label that matches the model's own prediction produces zero perceptron error, so without the confidence threshold the model would just be rehearsing to itself. The threshold is the only thing forcing new information into the loop.

## The takeaway

Frameworks are for training models. Paper is for understanding them. The 0.631, the 0.00035, the T = 0 step, and the 0.65 threshold each took five minutes by hand and settled intuitions that months of `.backward()` calls never touched. I still do this before any architecture I am about to trust: one tiny example, computed all the way through, no framework allowed.
