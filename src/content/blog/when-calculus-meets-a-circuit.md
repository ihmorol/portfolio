---
title: "Maximum Power Delivery in an RC Circuit: Differentiating and Integrating by Hand"
excerpt: "An electrical circuits assignment asked for the moment of maximum power delivery from a voltage and current that decay exponentially. The answer required differentiating a product, rejecting a negative root, and integrating by parts."
coverImage: "/images/brand/ec-power-01.svg"
date: "2023-11-08"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "Hardware and Embedded"
readTime: 4
tags: ["Electrical Circuits", "Calculus", "Power", "Problem Solving"]
references:
  - label: "Worked values"
    note: "v(t) = (16000t + 20)e^(-1600t), i(t) = (128t + 0.16)e^(-1600t): p(0) = 3.2 W; the derivative's second root t = -1.25e-3 s is rejected as pre-circuit; energy by integration by parts."
featured: false
---

# Maximum Power Delivery in an RC Circuit: Differentiating and Integrating by Hand

My favorite assignment from Electrical Circuits had no circuit in it. It gave two time-domain expressions, a voltage and a current, and asked for the instant of maximum power and the total energy delivered. Solving it end to end used more calculus than circuits, which turns out to be the point: the electrical content was one formula, p = vi, and everything after that was mathematics that had to be done carefully.

## The setup

The element's voltage and current are

v(t) = (16000t + 20)e^(-1600t)
i(t) = (128t + 0.16)e^(-1600t)

Both decay exponentially, so power flows, peaks somewhere near t = 0, and dies away. Instantaneous power is the product:

p(t) = vi = (16000t + 20)(128t + 0.16)e^(-3200t)

A quadratic times an exponential. Maximizing it is first-semester calculus: differentiate, set to zero, solve.

## The root you must refuse

The derivative dp/dt is where the assignment got interesting, because it has two candidate answers and only one is physical. Setting the derivative to zero and solving the resulting quadratic gives t = 0 and t = -1.25 × 10⁻³ s.

The negative root is mathematically valid and physically meaningless: it sits before the circuit existed. My written solution keeps the rejection explicit, "t can't be negative," and it is worth keeping because this is exactly the step students skip. The mathematics offers two roots; the model of the situation (time starts at zero) eliminates one. A solver that reports "maximum at t = -1.25 ms" has done the calculus correctly and the physics entirely wrong.

Evaluating at the surviving root: p(0) = 20 × 0.16 = 3.2 W. The maximum power delivered is 3.2 watts, at the first instant.

## The energy, by parts

Total energy means integrating power over all time:

w = ∫ p(t) dt from 0 to ∞

With the quadratic-times-exponential integrand, integration by parts is unavoidable, twice, and the exponential's decay is what makes the boundary terms vanish at infinity. The e^(-3200t) factor decays fast enough to kill both the polynomial growth and the boundary terms, which is why the answer converges at all. The final number is modest (joules, not kilojoules), which is a nice sanity check: a system whose peak power is 3.2 W and whose pulses die in microseconds should not have delivered much energy.

## What the exercise actually taught

Three habits transferred directly into later work. First, dimensions and time domains: an exponential with -1600t in the exponent has units of 1/time, and forgetting that produces confidently wrong algebra. Second, physical plausibility as a verification step: negative time and infinite energy are both "correct math, wrong model," and catching them is a skill separate from calculation. Third, respect for the product rule and parts as everyday tools rather than exam topics.

Circuits courses are secretly applied calculus courses. The physical law is often one line; the discipline is in the mathematics you do with it and the sanity checks you run on your own answer.
