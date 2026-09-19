---
title: "Verifying a Critical Path Method Answer With a Python Script"
excerpt: "Studying for my Software Engineering final, I encoded an 11-task past-exam network as a Python dict and made the machine compute the critical path. Answer: 50 weeks, F → C → E → A. It matched my hand solution, and that agreement was the whole point."
coverImage: "/images/brand/se-cpm-checker-01.svg"
date: "2026-02-07"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "Software Engineering"
readTime: 5
tags: ["Software Engineering", "Critical Path Method", "Project Management", "Python", "Verification"]
references:
  - label: "The check, concretely"
    note: "An 11-task dictionary (durations 5 to 25 weeks), forward pass for ES/EF, backward pass through a reversed successor map, float = LS - ES. Output: duration 50, critical tasks A, C, E, F."
featured: false
---

# Verifying a Critical Path Method Answer With a Python Script

The Critical Path Method is a guaranteed question on my Software Engineering final: given a task network, compute earliest and latest start times, floats, project duration, and the critical path. It is worth real marks and it is pure bookkeeping, which makes it exactly the kind of answer you can get 90% right and never notice. So I wrote a 71-line Python script that solves CPM networks, encoded a past exam into it, and let the machine argue with my hand solution.

## The exam, as a dictionary

The Fall 2024 exam network has 11 tasks. In my script it is one dict: task name to (duration, predecessors). A(10), B(5), C(20), D(10), E(15), F(5), G(15), H(25), I(10), J(15), K(20), with dependencies like E before A, C before E, F before C and G. Encoding the network correctly turned out to be most of the intellectual work; the algorithm is the easy part.

## Forward pass, backward pass, one definition of critical

The forward pass computes ES/EF by repeatedly sweeping the dict until every task's earliest start accounts for all its predecessors (a fixed-point loop, because the dict is not topologically sorted; a real implementation would topologically sort first, and knowing that distinction is itself worth learning). Project duration is the maximum EF. The backward pass needs successors, so the script builds a reversed map, then computes LF/LS. Float is LS - ES, and the definition does the classifying for you:

```python
if ls - es == 0: critical
```

Zero float means "this task cannot slip without slipping the project." No heuristics, no vibes.

## The verdict

Duration: 50. Critical tasks: A, C, E, F, forming the path F → C → E → A (5 + 20 + 15 + 10 = 50). That matched my hand-computed answer exactly, and exactly is the operative word: the script also prints every task's float, so near-misses would have been visible. A hand solution that agrees in duration but disagrees on one float would have exposed an arithmetic slip the duration alone hides.

Was this circular? Could the script have inherited my mistake? Only if the bug sat in the encoding, which is why I transcribed the network from the exam paper directly and re-read it once against the original. Beyond that, the algorithm and my by-hand procedure are independent implementations of the same definition, and agreement between two derivations is how you get confidence in either. It is the same principle as two numerical solvers agreeing to 1e-11: neither one is proof, the agreement is.

## The pattern behind the script

This is the second time course content drove me to code. For a design-patterns exam I wrote all seven patterns as runnable Java files (singleton, factory, abstract factory, adapter, decorator, strategy, state) because re-reading pattern diagrams proves nothing about whether you can instantiate the idea. The strategy file even contains a small honest quirk: an `OpContext` that selects addition, subtraction, or multiplication by inspecting operand magnitudes, which is strategy selection by heuristic, exactly the shape real systems use when the client cannot know the best algorithm up front.

The general habit: any exam answer that is a computation deserves a second, mechanical derivation. The script took about 40 minutes to write, checked an 8-mark answer, and doubled as the best CPM study aid I had, because implementing the float calculation teaches the definition more reliably than memorizing it.

The script is still in my SE folder, next to the PDF text extractor I wrote to pull official solutions apart. Neither is glamorous. Both changed how I study: if the subject can be computed, compute it twice.
