---
title: "The Accuracy Paradox in Intrusion Detection: Class Imbalance on UNSW-NB15"
excerpt: "Our intrusion detection baseline scored 87% binary accuracy and detected exactly none of the 44 Worms samples. A controlled 18-experiment study shows what class weighting fixes, what it costs, and what it can't fix at all."
coverImage: "/images/brand/ids-recall-01.svg"
date: "2026-03-06"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "AI and Machine Learning"
readTime: 6
tags: ["Machine Learning", "Class Imbalance", "Intrusion Detection", "XGBoost", "Security"]
references:
  - label: "Dataset: UNSW-NB15"
    note: "Moustafa & Slay, 2015 (ACCS). The partitioned set used here contains 44 Worms, 378 Shellcode, 583 Backdoor, and 677 Analysis samples."
  - label: "Verification"
    note: "Every number in the post comes from the experiment's metrics tables. The Friedman test (chi-squared 29.44, p = 0.00027) and bootstrap confidence intervals are recomputable from the committed configs and seed (42)."
featured: false
---

# The Accuracy Paradox in Intrusion Detection: Class Imbalance on UNSW-NB15

The baseline models in our intrusion detection study scored 87% binary accuracy. On the Worms attack category, 44 samples in our data, their recall was 0.0%. They did not miss most of the worms. They missed every single one, and the accuracy metric described the models as excellent.

That gap between the aggregate number and the per-class reality is the whole paper we wrote. It is under review now, and this post is the technical tour: the experiment grid, what cost-sensitive learning bought, what it cost, and the one failure it cannot fix.

## Why accuracy hides the failure

UNSW-NB15 is heavily skewed. In the data we trained on, Worms appear 44 times, Shellcode 378, Backdoor 583, Analysis 677, against hundreds of thousands of normal and common-attack flows. A classifier can score those rare categories at zero recall and still lose almost no accuracy, because getting them wrong barely dents the total. The literature calls this the accuracy paradox, and once you have seen it in your own results table you never look at a single accuracy figure the same way.

So we report three metrics that treat classes more fairly. G-Mean, the square root of sensitivity times specificity, punishes collapse on any class. Macro-F1 averages F1 across classes unweighted, so a zero-recall class drags it down visibly. And per-class recall, reported for every category, which is where uncomfortable numbers live.

## The study design

The grid is deliberately boring: 2 tasks (binary and 10-class multiclass) × 3 models (logistic regression, random forest, XGBoost) × 3 imbalance strategies. That is 18 experiments, later extended to 24 for the analysis sections. The strategies are the standard three:

- S0, nothing, the baseline
- S1, cost-sensitive learning: class weights set to inverse frequency, so misclassifying a rare attack costs more during training
- S2a, random oversampling of minority classes, applied to training data only

Fixed hyperparameters everywhere, one seed (42), and a preprocessing protocol with leakage prevention built in: identifiers, ports, and timestamps dropped from the feature set, and every scaler or imputer fit on training data only. We chose classical models on purpose. With fixed features and fixed settings, any performance difference is attributable to the imbalance strategy, which is the thing being studied.

## What class weighting buys

The headline table, XGBoost with class weighting (S1) versus baseline (S0):

| Class | Support | Recall, S0 | Recall, S1 |
|---|---|---|---|
| Worms | 44 | 0.0% | 84.1% |
| Shellcode | 378 | 0.0% | 94.2% |
| Backdoor | 583 | 0.0% | 60.5% |
| Analysis | 677 | 0.7% | 25.4% |

Binary macro-F1 rises from 0.868 to 0.902. The multiclass result is the more interesting teaching case: accuracy goes *down* from 76.8% to 68.6% when you rebalance, while G-Mean goes up from 0.725 to 0.795. Both numbers are correct. The model trades some easy majority-class correctness for the ability to see rare attacks at all. If your metric punishes that trade, your metric is part of the problem.

The Friedman test across the per-class results gives χ² = 29.44, p = 0.00027: the imbalance-handled configurations dominate the baseline across the attack taxonomy.

## What it costs

Recall does not come free. With class weighting, Shellcode precision lands at 0.23, meaning roughly four in five Shellcode alerts are false alarms. In an operations context that is the alert fatigue problem: a detector that cries wolf 77% of the time gets ignored, which quietly returns you to zero recall by other means. The honest framing is that class weighting sets the operating point, it does not remove the trade-off. High-sensitivity and low-noise deployments want different points on that curve, and we say so in the paper rather than picking a winner.

## The part weighting can't fix

The deepest result in the study is a confound, not a win. Even after rebalancing, the Analysis and Backdoor categories confuse each other heavily: the confusion ratio between them is 2.37. Analysis recall reaches only 25.4% under the best strategy.

The reason, when we dug into the feature space, is that these two attack types overlap in the flow statistics the dataset provides. Cost-sensitive learning adjusts how much errors cost. It cannot adjust what the features can and cannot distinguish. Two categories that look alike in feature space will stay entangled no matter how you reweight the loss; fixing that needs new features (behavioural, temporal, payload-level), not distribution adjustments.

This is why "just handle imbalance" is a necessary but not sufficient answer for rare-class detection. We can now say precisely which part of the problem it solves and which part it cannot touch.

## The takeaway

Report per-class recall on your rarest categories, always, because aggregate accuracy can sit at 87% while an entire attack family scores zero. Class weighting is a cheap, effective first move that trades precision for recall, and oversampling behaves similarly. But the ceiling is set by your features. When two classes overlap in feature space, no loss function will pull them apart, and knowing that boundary is worth more than another point of accuracy.
