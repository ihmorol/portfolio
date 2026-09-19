---
title: "Dynamic Programming in Practice: A Course Contest Retrospective"
excerpt: "Ten dynamic programming problems with real test data, solved during my DSA-2 course. Two recurrences worth stealing, one memset trap, and two problems I never finished. All of it still in the folder."
coverImage: "/images/brand/dsa-dp-contest-01.svg"
date: "2024-11-30"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "Algorithms and Theory"
readTime: 6
tags: ["Algorithms", "Dynamic Programming", "Competitive Programming", "C++"]
references:
  - label: "POJ 2229 Sumsets"
    url: "http://poj.org/problem?id=2229"
    note: "The parity-recurrence problem; sample: 7 -> 6."
  - label: "LightOJ problems"
    note: "Neighbor House (RGB min-cost DP; sample case 137) and String to Palindrome (interval DP; tanbirahmed -> 5)."
featured: false
---

# Dynamic Programming in Practice: A Course Contest Retrospective

During DSA-2 we got a set of ten dynamic programming problems with proper judge-style test data, and I went at them the competitive way: a personal template, `.cph` test files, the whole ritual. Looking back at that folder now, two of the recurrences are ones I still think about, one file documents a trap I narrowly avoided, and two problems I simply never finished. That mix is normal when learning DP.

## Sumsets: the recurrence with a parity argument

POJ 2229 asks: count the ways to write N as a sum of powers of two, order irrelevant. The recurrence my solution encodes is short:

```cpp
dp[1] = 1; dp[2] = 2;
if (i % 2 == 0) dp[i] = dp[i/2] + dp[i-1];
else            dp[i] = dp[i-1];
```

Why does parity decide everything? If N is odd, every partition must contain at least one 1, and removing that 1 leaves a partition of N-1. So dp[N] = dp[N-1], one line of reasoning, no summation. If N is even, split the partitions into those containing a 1 (remove it: dp[N-1]) and those with only even parts (divide everything by 2: dp[N/2]). That second move, "the whole partition is even, so shrink the universe by a factor of two," is the trick. Test 7 gives 6, and you can verify by hand: 1+1+1+1+1+1+1, 2+1+1+1+1+1, 2+2+1+1+1, 2+2+2+1, 4+1+1+1, 4+2+1.

What I like about this problem: the recurrence is O(N) with two branches, and neither branch is guessable. You have to argue it.

## Metro: grid DP with a sqrt(2) edge

The Metro problem gives a grid where moving right or down costs 100, some cells are blocked, but a diagonal step also exists at cost 100√2 ≈ 141.4. So the DP transition is a min over three predecessors:

```cpp
dp[i][j] = min(dp[i-1][j] + 100.0, dp[i][j-1] + 100.0);
if (blocked) dp[i][j] = min(dp[i][j], dp[i-1][j-1] + 100.0*1.4142135623);
```

Two details carry the post. First, the answer is floating point, and the judge wants it rounded: `round(dp[m][n])`, not truncated. A sample 3×2 grid with three blocked cells evaluates to 382.8..., and printing it raw fails while 383 passes. Second, the input reads columns before rows, which cost me a wrong answer before I noticed. Grid DP is where I learned that "the algorithm is correct" and "the submission is correct" are different claims.

## String to Palindrome: interval DP and a memset trap

Given a string, minimum insertions (or deletions, or substitutions) to make it a palindrome. My solution is memoized on (i, j): if s[i] != s[j], the cost is 1 plus the best of the three repair moves; otherwise shrink both ends. The file still has the comment where I dodged a classic:

```cpp
// memset(dp, 1e9, ...) would be wrong: 1e9 as a byte pattern is not INT_MAX
```

`memset` fills bytes, not integers. Writing 1e9 into an int array through memset produces garbage, and the correct habit is either `fill()` or a manual double loop, which is what shipped. Sample check: "tanbirahmed" needs 5 operations to become a palindrome.

## The two I didn't finish

G_Exact_Change.cpp is zero lines. H_Digit_Count.cpp reads input and stops. Both are sitting in the folder next to seven solved problems, and they will stay that way. The empty files mark where my DP toolkit ran out (digit DP, in both cases), which makes them useful study notes.

## Steal these two

If you take one thing from this set, take the Sumsets parity split: "odd means a 1 is forced; even means you can halve the universe." If you take two, add the interval-DP frame from the palindrome problem, where the state is a substring range and each mismatch pays for exactly one repair move. Both generalize far past their problem statements, which is the only real criterion for what deserves to stay in a template.
