---
title: "Grammar Ambiguity, Chomsky Normal Form, and a Seven-State DFA"
excerpt: "Three assignments from my Theory of Computation course, solved by hand: proving a grammar ambiguous (and another one not), converting to Chomsky Normal Form with fresh terminals, and a DFA that tracks three string conditions at once."
coverImage: "/images/brand/toc-grammars-01.svg"
date: "2024-05-14"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "Algorithms and Theory"
readTime: 6
tags: ["Theory of Computation", "Automata", "Formal Languages", "CFG", "DFA"]
references:
  - label: "Course reference"
    note: "Sipser, Introduction to the Theory of Computation - ambiguity, epsilon and unit production removal, and Chomsky Normal Form."
featured: false
---

# Grammar Ambiguity, Chomsky Normal Form, and a Seven-State DFA

Theory of Computation was the course where I wrote the most pages by hand. Three of its assignments stuck with me because each one replaces a vague intuition with a mechanical procedure: what "ambiguous" provably means, how a grammar gets forced into normal form, and how a DFA holds three conditions in its head at once.

## Proving ambiguity, in both directions

The exam asked about the classic expression grammar, E → E+E | E*E | (E) | id, and the question came in two halves. The first half: show the grammar is ambiguous. The procedure is constructive, pick a string with two structures (something like id+id*id) and write two different leftmost derivations for it. Two derivations, two parse trees, ambiguity proven. No interpretation needed; the definition is syntactic.

The second half is the one people find stranger: prove a grammar is NOT ambiguous. You cannot try every string. My solution argued structurally: for the grammar in question, I traced that the only derivations of the target string force the same parse shape, and that a particular candidate string is rejected outright by the grammar, so no second tree can exist. The honest framing matters here: non-ambiguity proofs are per-grammar arguments about the derivation structure, not a certificate you can generate mechanically. That asymmetry (easy to confirm ambiguity, hard to refute it) is a real property of the problem, and the course smuggled a computability lesson into a grammar exercise.

## CNF: a normal form is a checklist, not an idea

Converting a CFG to Chomsky Normal Form (every rule is A → BC or A → a) is pure procedure, and my final assignment ran the full pipeline by hand. The steps, in order: add a new start symbol; eliminate epsilon productions; eliminate unit pairs (A → B chains that do nothing but rename); replace terminals inside longer right-hand sides with fresh non-terminals; and binarize any rule longer than two symbols.

The fresh-terminal step is where the bookkeeping got fun. A rule mixing terminals and variables, something like S → 2S3, cannot appear in CNF, so the terminals get their own non-terminals (T → 2, T → 3 in my notes) and the rule rewrites through them. By the end, every single rule is either one terminal or exactly two variables, which is precisely the shape the CYK parsing algorithm consumes. That is the "why" of CNF: it is not aesthetics, it is pre-processing for a parser that needs the grammar in two shapes only.

## One DFA, three conditions

My favorite construction from the class tests: build a DFA over {x, y, z} accepting strings that start with y, contain xyz as a substring, and end with xz. Three constraints, one machine.

The design has to track progress toward the substring while simultaneously remembering the first symbol and the trailing characters. My solution used seven states plus a dead state: a small chain remembering "started with y," progress counters for how much of "xyz" has matched, and suffix memory for whether the string currently ends in x or xz. The dead state exists for strings that forfeit the y-start. What makes the exercise instructive is that no single condition is hard; the difficulty is that the DFA's state is the product of all three. Each condition contributes a small amount of memory, and the machine's state space is roughly their combination, which is exactly how you reason about any automaton that must respect several properties simultaneously.

## Why hand-constructing still matters

None of this is useful day-to-day in industry, and I will not pretend otherwise. What it trains is the habit of turning a fuzzy property ("this string is malformed") into a finite, checkable structure. Parsers, linters, protocol validators, regex engines: every one of them is a state machine or a grammar transformed into one. The course's real content was not the constructions themselves but the assurance that any property you can state precisely, you can compile into a machine that never gets tired or disagrees with itself.
