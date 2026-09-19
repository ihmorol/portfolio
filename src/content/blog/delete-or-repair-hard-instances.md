---
title: "Delete or Repair? Two Hybrid Classifiers and the Problem of Hard Instances"
excerpt: "Farid's 2014 hybrid classifier deletes the instances naive Bayes gets wrong, then grows a tree on what's left. The same authors' 2016 paper reweights and repairs them instead. I traced both algorithms through one tennis dataset, and the contrast says something about noise in every dataset."
coverImage: "/images/brand/bda-delete-repair-01.svg"
date: "2026-09-18"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "AI and Machine Learning"
readTime: 7
tags: ["Machine Learning", "Literature Review", "Decision Trees", "Naive Bayes", "Concept Drift"]
references:
  - label: "Farid, Rahman, Hossain (2014)"
    note: "Hybrid decision tree and naive Bayes classifiers for multi-class classification tasks. Expert Systems with Applications 41(4), 1937-1946."
  - label: "Farid et al. (2016)"
    note: "An adaptive rule-based classifier for concept-drifting data streams. Expert Systems with Applications 64, 305-316."
  - label: "Brodley & Friedl (1999)"
    note: "Identifying and eliminating mislabeled training instances. Journal of Artificial Intelligence Research 11 - the noise-filter survey whose finding on single-algorithm filters is quoted."
featured: false
---

# Delete or Repair? Two Hybrid Classifiers and the Problem of Hard Instances

Every classifier has instances it gets wrong, and what you do with them is a design decision with a literature behind it. For my Big Data Analytics course I built a study guide around two papers by the same first author that answer the question in opposite ways. Farid et al. 2014 (hybrid decision tree + naive Bayes) deletes the instances NB misclassifies before growing a tree. Farid et al. 2016 (adaptive rule-based) reweights them, boosts, then repairs what is still wrong. Same authors, two years apart, opposite philosophies: assume noise, delete it versus assume difficulty, reclassify it.

## One tennis dataset, three trees

Both papers lean on the classic 14-instance tennis dataset (9 Yes, 5 No), so I recomputed everything on it. Entropy of the label distribution: Info(D) = 0.9403 bits. Information gains: Outlook 0.2467, Humidity 0.1518, Wind 0.0481, Temperature 0.0292. ID3 picks Outlook, no contest.

C4.5 divides each gain by its split information, and the result is instructive: Outlook drops to a gain ratio of 0.1562, nearly tied with Humidity's 0.1518. The correction exists because multi-valued attributes inflate raw gain; seeing it shrink a 63% relative lead to a 3% one on a dataset this small is the best argument for the correction I know.

Then CART, which optimizes Gini with exhaustive binary splits, and here is the fun part: its first split is {Overcast} versus {Sunny, Rain}, not ID3's four-way Outlook branch. Gini of the winning split is 0.3571 (a ΔGini of 0.1021 over the parent), and the resulting tree implies different rules than ID3's. One dataset, three defensible trees, three different first decisions. A decision tree follows its splitting rule, so the rule you choose shapes the answer.

## Paper 1: delete what NB gets wrong

The 2014 hybrid DT works like this: train naive Bayes, run it over the training set, delete every instance it misclassifies (the paper calls them troublesome), then grow a C4.5 tree on the survivors. The idea is that NB's mistakes mark genuinely confusing regions, and the tree should not spend structure learning them.

On the tennis data, NB misclassifies exactly one instance: the (Rain, Cool, Normal, Strong) day whose actual label is No. The math: with 9/5 priors and conditional frequencies, P(Yes) for that instance computes to 0.01587 against P(No) = 0.00343, so NB confidently says Yes and is wrong. The algorithm deletes it. The tree trains on 13 clean instances and the accuracy story looks great.

The cost shows up when you look at what got deleted. That instance sits inside a contradictory pair (a nearly identical day exists with the opposite label). It is not noise; it is the boundary. Deleting it doesn't remove confusion, it removes the evidence of confusion, and the tree becomes confidently wrong in exactly that region. Brodley & Friedl's noise-filtering survey had already flagged this: single-algorithm filters (delete what one model disagrees with) are the weakest filtering design, precisely because they conflate "hard" with "wrong."

## Paper 2: reweight and repair

The 2016 ARB classifier takes the opposite stance. Instances start with weight 1/N. Each iteration trains a tree on a bootstrap sample (later iterations bias toward previously misclassified, high-weight instances), with each tree seeing a random subset of features. Trees are accepted only if weighted error < 0.51, deliberately lenient: reject only what loses to a coin flip, keep the diverse weak learners that boosting needs. Correctly classified instances get their weight multiplied by error/(1 - error), then weights renormalize; as a tree's error drops toward zero, its multiplier crushes the weights it handles well, so the next iteration is dominated by whatever is still wrong. Rules are pooled from every root-to-leaf path across iterations, and a final repair pass rebuilds on the still-misclassified instances, relabeling them by weighted-similarity kNN (k = 3).

The results the paper reports: 91.66% accuracy on the BrS variant datasets against 83.33% for random forest and naive Bayes alike, and wins across 20%-noise-injected UCI datasets. But the number is less interesting than the stance: the hard instance from paper 1 is not deleted here. It gets heavier until someone explains it, and if nobody can, the repair pass relabels it with context instead of silence.

## The audit that fell out of this

Reading both papers closely meant checking the citations, which is where the study guide earned its keep. Hall (2007, Knowledge-Based Systems) had already used an identical 1/√d minimum-depth weighting for naive Bayes attributes (tree depth d, root at 1) seven years before the 2014 paper's hybrid NB algorithm, and the seed paper does not cite it. The guide also caught three published typos in the 2014 paper (a spurious 1/m in the NB equation, a wrong Gaussian exponent, Gini misattributed to ID3) and a unit inconsistency in the 2016 algorithm (a weighted count compared against the 0.51 fraction). None of that changes the papers' contributions. All of it changes how much weight each equation deserves.

## The takeaway

"Delete or repair?" is a framing decision about your data: are the hard instances noise (then deleting is cleaning) or signal (then deleting is self-deception)? The 2014 algorithm is simpler and, on clean benchmarks, looks better. The 2016 algorithm is what you want when the hard instances are real, which in my experience they usually are. Same authors, two years, one honest reversal. That progression is worth more than either algorithm alone.
