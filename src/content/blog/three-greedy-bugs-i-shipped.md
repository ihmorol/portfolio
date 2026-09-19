---
title: "Three Greedy Algorithm Bugs That Passed Every Sample Test"
excerpt: "An integer-division comparator that passed every sample, a greedy coin change that works until it doesn't, and a one-line union-find bug that corrupts sets silently. All three are mine, all three survived testing."
coverImage: "/images/brand/dsa-greedy-bugs-01.svg"
date: "2024-07-14"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "Algorithms and Theory"
readTime: 6
tags: ["Algorithms", "Greedy Algorithms", "Union-Find", "C++", "Debugging"]
references:
  - label: "Sample data"
    note: "Two-knapsack marks problem: capacities 120 + 20 over five tasks (20/10, 20/5, 30/5, 30/6, 20/40) -> 88 alone, 107 using the friend's capacity. Kruskal's MST prints each accepted edge as u,v--->w."
featured: false
---

# Three Greedy Algorithm Bugs That Passed Every Sample Test

Grading other people's code is humbling; rereading your own lab solutions is worse. My DSA-2 lab folder is full of greedy and graph problems, and three of my solutions contain bugs worth writing down, because each one passes every sample test and each one teaches something a textbook sentence cannot.

## Bug 1: the comparator that used integer division

"Maximize your marks": two knapsacks, my remaining study time (capacity 120) and a friend's (capacity 20), five tasks worth marks per unit time, maximize total. Fractional knapsack, so sort by value density. My comparator:

```cpp
return x.first / x.second > y.first / y.second;
```

Both fields are integers. Integer division truncates, so 7/2 and 7/3 both compare as 3, and tasks with genuinely different densities tie at random. On the given data (20/10, 20/5, 30/5, 30/6, 20/40) the answer came out right anyway, 88 alone and 107 with the friend's capacity, even with the broken comparator. A few lines later in the same file I wrote `(float)a[i].first / a[i].second` somewhere else, meaning I half-knew the rule and didn't apply it consistently.

The general lesson is not "use floating point." It is that a comparator bug does not fail loudly. It produces a valid-looking greedy order, and unless you test against a brute force on adversarial data, you ship a solution that is correct on samples and wrong in general.

## Bug 2: greedy coin change, the algorithm that lies politely

The classic lab exercise: minimum coins, greedy, largest denomination first. On canonical coin systems (like 1, 5, 10, 25) greedy is provably optimal. On the system in some lab variants, or any made-up set like 1, 3, 4, it is not: greedy makes 6 as 4+1+1 (three coins) when 3+3 uses two.

My coin change file is correct for the lab's currency and silently wrong in general. The fix everyone learns is dynamic programming over amounts. But the deeper point I took from it: greedy algorithms are theorems, not templates. Each one carries a proof obligation about the structure of the problem (exchange arguments, matroid structure, whatever applies). If you cannot state why taking the locally best choice never blocks a globally better outcome, the algorithm is not proven yet.

The same folder also contains an inversion-counting solution where I kept the merge-sort skeleton but reset the inner pointer (`j = 0`) during the count, which quietly makes the merge step O(n²) and defeats the entire point of the algorithm. Correct output. Wrong complexity. Nobody would ever notice without a stress test.

## Bug 3: the union-find line that attaches the wrong node

Kruskal's MST from scratch: make_set, find_set with path compression, union by rank. My `disjoint_set_02.cpp` has this in the union:

```cpp
else
    p[x] = y;   // attaches the query node, not the root
```

The variables in scope were the roots `a` and `b` after two find operations; `x` and `y` were the original query nodes. Attaching `p[x] = y` hangs a query node under the other root instead of merging the two trees at their roots. Sets silently split. Every sample test I ran produced a valid spanning tree with a plausible weight, because a corrupted forest is still a forest.

The reason this bug is worth a post: union-find's correctness is entirely about who the representative is. Path compression and union by rank are optimizations on top of the invariant "p[root] == root." Break the invariant and nothing crashes, nothing prints wrong immediately, and the error propagates only when two elements that should share a set compare different roots. I now write union-find in one sitting, immediately after stating the invariant, because the bug only exists in the gap between writing the code and restating what it must maintain.

## Why I keep these files

Every one of these was submitted, accepted, and graded, which is exactly why they are valuable. A bug that fails loudly teaches you to read error messages. A bug that passes teaches you to distrust the pass. My grading rubric for student work now has a standing question attached to every greedy or union-find solution: what would an adversarial input do to this? I learned to ask it by being wrong in a file that still has my name in the header comment.
