---
title: "Reading a Moving Target: The Adaptive Ensemble for Concept-Drifting Data Streams"
excerpt: "A dataset is a snapshot, but a stream keeps arriving and its meaning shifts over time. Farid et al.'s 2013 adaptive ensemble holds three weighted decision trees, focuses later trees on the cases earlier ones missed, watches its leaves for a new class, and swaps the weakest tree for a fresher one. This is how the pieces fit."
coverImage: "/images/brand/ids-recall-01.svg"
date: "2026-10-02"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "AI and Machine Learning"
readTime: 7
tags: ["Machine Learning", "Concept Drift", "Ensemble Methods", "Data Streams", "Literature Review"]
references:
  - label: "Farid et al. (2013)"
    note: "An adaptive ensemble classifier for mining concept drifting data streams. Expert Systems with Applications 40(15), 5895-5906."
  - label: "NSL-KDD dataset"
    url: "https://www.unb.ca/cic/datasets/nsl.html"
    note: "One of the paper's three benchmark datasets: network traffic with normal and intrusion classes."
featured: false
---

# Reading a Moving Target: The Adaptive Ensemble for Concept-Drifting Data Streams

Most of what I build treats a dataset as fixed. I collect the rows, split them, train, and evaluate. A data stream breaks that assumption, because new rows keep arriving and the relationship between the features and the label can change while the model sits there. Farid et al. take on that problem in their 2013 adaptive ensemble paper, which I studied for my Big Data Analytics course, and it gave me the clearest handle on concept drift I have found so far.

## Drift takes a few forms

The mix of classes can change, so a category becomes more or less common. The members of a class can start looking different from how they used to look. Or an input that looks the same can begin belonging to a different class. A spam filter trained years ago runs into all three at once: spam becomes more frequent, spammers change their vocabulary, and words that used to signal spam turn up in ordinary mail. None of that means the model broke. It means the world it learned moved.

There is a harder case on top of drift. Sometimes a class appears that did not exist in the training data at all. The old labels were not wrong, just incomplete, and the paper calls this concept evolution. Spotting it is a different job from surviving drift.

## Why one tree struggles

A decision tree is a fixed statement about how features map to labels. When that mapping changes, the tree has to be rebuilt, and on an endless stream that is not realistic. The paper's answer is not one bigger model but a small committee of three decision trees. Each tree carries a weight based on its accuracy, and the final prediction is a weighted vote, so a tree with a better record counts for more and no single tree decides alone.

Naive Bayes appears in this pipeline too, and it is easy to misread what it does. It is not one of the three voters. It runs first to give each training instance a starting weight based on how confidently the instance matches a known class, so typical examples begin heavy and ambiguous ones begin light.

After a tree is built, its mistakes stay in play. Every instance the tree classified correctly has its weight multiplied by a number like error divided by one-minus-error, while the instances it got wrong keep theirs. Once the weights are renormalized, the hard cases hold a larger share, so the next tree is trained with its attention pulled toward exactly what the previous one missed. That is the boosting idea, and it is why the three trees do not end up as near-copies of each other.

## A second opinion from the leaves

Handling a genuinely new class takes a separate mechanism. At every leaf of every tree, the method clusters the training instances that landed there, and those clusters describe what normal looked like for that branch. A new point that fits no cluster raises a flag, but one odd point is not a new class. The method also waits for an abnormal shift in how instances spread across the leaves, and it only calls novelty when the two signals agree.

The stream is cut into chunks. After each chunk the model trains a tree on recent data, scores it, and swaps it in for the weakest member of the committee if it is better. The committee stays fixed at three, so memory and prediction cost stay bounded, while its membership can change as the data does.

## What I take from it

What I get from the paper is mostly the posture. The ensemble holds a small committee that rotates, and it demands two independent signs before calling something new, which is far more careful than treating every outlier as a class. The evidence covers three benchmark datasets against two baselines, and a few of the internal thresholds are described too loosely to reproduce exactly, so I read the reported wins as promising rather than settled. As a way to think about a moving target, the rotating committee of three is still a clean template.
