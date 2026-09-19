---
title: "Common Linked-List Bugs: Lessons From Grading DSA-1 Submissions"
excerpt: "I spent a semester grading DSA-1 assignments: 25 students, 10 problems, mostly linked lists. The same five bugs showed up in almost every submission. Here they are, with the code that causes them and the fixes I now grade against."
coverImage: "/images/brand/dsa-pointers-01.svg"
date: "2026-07-29"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "Algorithms and Theory"
readTime: 6
tags: ["Data Structures", "Linked Lists", "C++", "Debugging", "DSA"]
references:
  - label: "Joshua Bloch on the binary search bug"
    url: "https://ai.googleblog.com/2006/06/extra-extra-read-all-about-it-nearly.html"
    note: "The overflow in (low + high) / 2 lived in the JDK's binary search for nine years."
featured: false
---

# Common Linked-List Bugs: Lessons From Grading DSA-1 Submissions

Before I became a teaching assistant, I wrote my DSA-1 linked list code and moved on. Then I spent a semester grading roughly 25 submissions per assignment, ten problems each, mostly linked lists in C and C++. Reading other people's pointer bugs week after week changed how I write my own. The bugs are not random. They repeat with such consistency that you could teach the entire topic as a list of five failure modes.

## The delete that crashes only sometimes

The most common bug lives in delete-by-value. A submission walks the list looking for the node to remove:

```cpp
while (temp->next->value != valueToDelete) {
    temp = temp->next;
}
```

It works on the sample input, which is why it gets submitted. It crashes when the value is not in the list (temp->next becomes NULL and the loop dereferences through it), when the value is in the last node, and when the value appears multiple times. Three failure modes, one line. The fix is not cleverness, it is checking the right thing: loop while `temp->next != NULL && temp->next->value != value`, and decide up front what to do when the value never appears.

The deeper pattern: the loop condition should test the state you are about to use, not the state you hope is there.

## The input that never gets stored

My favorite bug needs two mistakes to combine. First, the submission reads its input like this:

```cpp
for (int i = 0; i < n; i++) {
    int v; cin >> v;
}
```

Every value read and immediately thrown away. Then the insert function runs on an empty list, walks `while (temp != nullptr)`, exits with temp == nullptr, and dereferences `temp->next` anyway. Segfault, with the actual cause two functions away from the crash site. When I started writing model solutions, I learned to validate the boring parts first: an empty list is a case, not an assumption.

## Three ways to find the kth node from the end

One problem let me watch students converge on three completely different solutions.

The direct way: traverse once to count the length L, then traverse L-k nodes. Two passes, no cleverness, correct.

The destructive way: reverse the entire list, count k nodes from the new head. The output is right and the list is destroyed. Nobody noticed because the assignment never used the list again. Real code does.

The pointer way: slow and fast pointers, fast gets a k-node head start, move both until fast hits NULL, slow is the answer. One pass, no destruction, and the same two-pointer pattern solves cycle detection and finding the middle.

Grading that problem over and over is why I now reach for slow/fast pointers without thinking. I keep a test helper in my own linked list code that exists purely to exercise it: a `makeCircular()` that stitches node 7 back to node 3, so my `detect_cycle()` (Floyd's tortoise and hare, one step versus two) has something to find.

## (low + high) / 2

Eight-plus submissions computed a binary search midpoint as `int mid = (low + high) / 2`. On assignment inputs it is always fine. It is also the overflow bug that lived in production JDK binary search for nine years before Josh Bloch fixed it in 2006. `low + (high - low) / 2` costs nothing and never overflows. Competitive programming drilled this into me years before I had to grade for it; grading made me understand why it deserves to be drilled.

## What I grade against

When I write reference solutions for grading, they look like this: split the array into even- and odd-index copies, sort one ascending and the other descending with a comparator passed as a parameter, interleave back. Input validation with an explicit message when the data is impossible ("finish time cannot be before start time"). Not because the algorithm is hard, but because a reference solution should model the habits the assignment is secretly testing: bounds, empties, and what happens when the input is adversarial.

My own DSA-1 code from two years ago fails that standard. My old stack has no overflow check. My counting sort only worked because the value range coincidentally equaled the array size. I keep that code around on purpose. Nothing teaches pointers faster than reading the version of you who didn't know where they break.
