---
title: "From Boolean Algebra to a 4-Bit Ripple-Carry Adder in Logisim"
excerpt: "Two XOR gates and an AND-OR pair make a full adder. Chain four of them and you can add binary numbers. I built it all in Logisim for my DLD lab, and the algebra-first workflow stuck with me."
coverImage: "/images/brand/dld-adder-01.svg"
date: "2023-06-22"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "Hardware and Embedded"
readTime: 5
tags: ["Digital Logic Design", "Boolean Algebra", "Logisim", "Adder", "DLD"]
references:
  - label: "Logisim"
    url: "https://www.cburch.com/logisim/"
    note: "The circuit simulator used for every experiment in the post."
featured: false
---

# From Boolean Algebra to a 4-Bit Ripple-Carry Adder in Logisim

My DLD lab ran on Logisim, a free circuit simulator where you drag gates onto a canvas and watch bits propagate in real time. The assignment arc went from single gates to a circuit that adds two 4-bit numbers, and the workflow it taught me (algebra first, wires second) is the same discipline I now apply to any system that has states.

## One bit at a time

A full adder takes three inputs: bits A and B, plus the carry coming in from the previous stage. The two outputs have short definitions in Boolean algebra:

SUM = A ⊕ B ⊕ Cin
Cout = (A ⊕ B)·Cin + A·B

Read the carry line as a sentence: "if exactly two of the three inputs are 1, carry out." The (A ⊕ B) term means "exactly one of A, B is set," in which case Cin decides; the A·B term covers "both set," which carries regardless. In my Logisim report the single-bit adder is literally the schematic of those two expressions: XORs feeding an OR, with an AND branch.

## Chaining the stages

The 4-bit adder is the same cell repeated: A1..A4 and B1..B4 in, Cin grounded at stage 1, each stage's Cout feeding the next stage's Cin. My lab screenshot shows the whole chain with SUM_1 through SUM_4 and the final CARRY_4, and the moment you toggle inputs and watch the carry ripple through, the name "ripple-carry adder" stops being vocabulary.

It also shows you the cost. Stage 4 cannot finish until stage 3 knows its carry, which waits on stage 2, and so on. The delay grows linearly with width, which is exactly why real processors use carry-lookahead structures. Nobody explains that trade-off better than watching your own circuit's longest path.

## Same function, two circuits

The lab's other staple: implement one Boolean function as SOP (sum of products, OR of AND-ed minterms) and as POS (product of sums, AND of OR-ed maxterms). Algebraically these are the same function; as circuits they are different shapes with different gate counts, and drawing both side by side makes the duality physical. The companion exercise, a 3-to-8 decoder built from AND and NOT gates with an enable line, shows the other direction: decoders are the hardware realization of "one-hot minterm selection," which is why they sit underneath the SOP pattern.

## From circuits to state machines

The lab's final experiment was a sequence recognizer: assert an output when a particular input pattern arrives. The workflow is the lesson. Write the state diagram, assign states to flip-flop outputs, derive the next-state equations, and only then draw gates, two D flip-flops with AND/OR/NOT logic around them in my circuit file. The flip-flops store "where am I in the pattern," the combinational logic computes "where do I go next."

That separation (memory plus a function of memory) is the whole idea of a state machine, and I have reused it far outside hardware: protocol parsers, UI wizards, any system where the correct action depends on history. D flip-flops are just the smallest possible version of a state store.

## The takeaway

Logisim is a toy, but the habit it enforced is not. Derive the Boolean expression before touching a wire, and the circuit becomes a translation exercise instead of a guessing game. Every debugging session in that lab was ultimately a session about the algebra: the wires did exactly what the expression said, and when the circuit misbehaved, the expression was always the place the truth got lost first.
