---
title: "BCNF Decomposition by Hand: Lossless Joins and Dependency Preservation"
excerpt: "A 28-page handwritten DBMS assignment taught me the part of normalization the diagrams skip: BCNF decomposition is always lossless, sometimes dependency-preserving, and you only find out which by computing it. Worked example included."
coverImage: "/images/brand/dbms-bcnf-01.svg"
date: "2025-07-04"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "Computer Systems"
readTime: 6
tags: ["Databases", "Normalization", "BCNF", "DBMS", "Functional Dependencies"]
references:
  - label: "The worked relation"
    note: "R(A,B,C,D,E) with F = {A -> E, BC -> A, DE -> B}: A+ = AE fails BCNF; the decomposition R1(A,E), R2(A,B,C,D) is lossless via A+ and does not preserve DE -> B."
featured: false
---

# BCNF Decomposition by Hand: Lossless Joins and Dependency Preservation

My DBMS final assignment was 28 handwritten pages of the stuff diagrams don't teach: functional-closure computations, candidate keys, minimal covers, a full BCNF decomposition, B+ tree splits, extendible hashing. The single most valuable piece was one decomposition that ends in a trade-off instead of a happy answer. Here is that example, worked the way I worked it then.

## The setup

Take R(A, B, C, D, E) with functional dependencies F = {A → E, BC → A, DE → B}. Is it in BCNF? For every nontrivial FD X → Y, X must be a superkey. So compute the closure of the left sides:

A⁺ = {A, E}

A determines E and nothing else. A is not a superkey of R, so A → E violates BCNF and the relation must be decomposed.

## The split, and the lossless check

Split off the violating dependency: R1(A, E) holds A → E; the remainder R2(A, B, C, D) keeps the rest. Now the question every decomposition must answer: can we join R1 and R2 back and recover the original rows exactly?

The test is the closure of the intersection. R1 ∩ R2 = {A}, and A⁺ = {A, E} ⊇ R1's attributes, so the intersection is a superkey of R1. That certifies the join is lossless. This always works out for BCNF decomposition, which is why BCNF is the normal form people want: it is reachable, and it never invents or loses tuples.

## What it breaks instead

The remainder R2 carries the dependency DE → B. Compute D⁺ and E⁺ inside R2: neither left side's closure stays within a single decomposed relation, so DE → B is not preserved. Enforcing it now requires a join at insert time. This is the punchline of the whole exercise: BCNF decomposition is always lossless, and sometimes dependency-preserving, and you cannot know which until you compute it. When preservation fails, the standard move is to settle for 3NF (via a minimal cover / synthesis approach), which is guaranteed to give both losslessness and preservation, at the cost of possibly leaving some relations not in BCNF.

No diagram shows that trade-off. It only became real when my own example refused to satisfy both properties.

## Candidate keys by closure, not by vibes

The same assignment asked for candidate keys of another schema: R with F = {AB → CD, A → B, B → C, C → E, BD → A, BD → C}. Attributes that appear in no right-hand side must be in every key; here everything appears somewhere, so you hunt by closure:

- A⁺ = {A, B, C, D, E}: A alone is a key.
- B⁺ = {B, C, E}: no. C⁺ = {C, E}: no.
- BD⁺ = {B, D, A, C, E}: BD is also a key.

Candidate keys: {A} and {BD}. The method generalizes: start from attributes never determined, extend with attributes whose closure falls short, and stop when the closure reaches everything. What always-always trips students (including past me) is forgetting that a key's closure must contain all attributes, not most of them.

## Minimal cover: making F as small as the truth allows

The minimal-cover procedure came up too: split right sides into single attributes, then try to drop each left-side attribute by checking whether the closure of the shortened side still derives it, then drop redundant FDs. On this F the work goes: AB → CD splits into AB → C and AB → D; B⁺ = {B, C, E} shows B is extraneous in AB → D (A → D survives); D⁺ = {D} shows D is extraneous in BD → A; and the redundant BD → C drops once A → B and B → C chain together. The end state: F_min = {A → B, B → C, C → E, A → D}. Every FD in it is load-bearing, which is the entire definition.

## The takeaway

Normalization exercises look like rule-following, and they are, but the rules are computations: closures, intersections of decompositions, extraneous-attribute tests. Do them by hand once and the later intuitions (why BCNF can cost you preservation, why minimal covers matter for schema synthesis, why "just add an index" is not a design) come from having watched the trade-off happen in your own handwriting.
