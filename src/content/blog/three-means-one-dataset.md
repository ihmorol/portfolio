---
title: "Arithmetic, Geometric, and Harmonic Means: A Descriptive Statistics Study by Hand"
excerpt: "Before touching pandas, my statistics course made me compute everything on a 25-person health dataset: arithmetic, geometric and harmonic means, Pearson and Spearman correlations, and medians read off an ogive. Here's what the hand-calculation taught that the libraries hide."
coverImage: "/images/brand/stat-means-01.svg"
date: "2024-09-06"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "AI and Machine Learning"
readTime: 6
tags: ["Statistics", "Data Analysis", "Descriptive Statistics", "Correlation"]
references:
  - label: "Worked data"
    note: "25-observation table (age, BMI, cholesterol) with every statistic computed by hand: frequency tables, the three means, variance, quartiles, Pearson r, least-squares line, and Spearman ranks; plus the 100-student CGPA grouped distribution (7, 18, 35, 27, 10, 3)."
featured: false
---

# Arithmetic, Geometric, and Harmonic Means: A Descriptive Statistics Study by Hand

My probability and statistics course made me write a 25-page report on a 25-person dataset (age, BMI, cholesterol) computing every statistic by hand: frequency tables, all three means, variance, quartiles, correlation, least-squares regression, the lot. The work was repetitive, and that was the point. The formulas I can now call from a library are ones I have also bled through on paper, and three distinctions from that work still shape how I read data.

## Which mean, though?

The report computes arithmetic, geometric, and harmonic means on the same numbers, and they diverge, which is the lesson. The arithmetic mean adds values; it is the default and the right choice for additive quantities. The geometric mean multiplies and takes the root; it is the honest choice for growth rates, because averaging "grow 50%, then shrink 50%" arithmetically gives 0% while the geometric mean correctly reports a net loss of about 13% (√(1.5 × 0.5) = 0.866). The harmonic mean divides by the sum of reciprocals; it punishes small values hardest, which is why rates belong to it (average speed over equal distances is harmonic, not arithmetic) and why the F1 score is a harmonic mean of precision and recall: a classifier that aces one and flunks the other should score badly, and F1 makes it.

None of that is visible from a one-line pandas call. It becomes visible the first time you compute all three by hand and watch them order themselves AM ≥ GM ≥ HM on the same data, with the gaps growing as the data spreads.

## Reading answers off a picture

The second exercise: the CGPA distribution of 100 students, grouped into bins of 7, 18, 35, 27, 10, and 3. From that table I drew a pie chart (slice angles are just frequency × 3.6: the biggest slice is 126°), a histogram, and an ogive, the cumulative frequency curve. The ogive is the underrated one. Median, quartiles, deciles, percentiles all fall out of it graphically: run a horizontal line from N/2 on the frequency axis to the curve, drop to the x-axis, read the median.

The histogram told us the mode sat near 2.4. The ogive gave the median graphically. Then the analytical formulas (median class, the interpolation inside it) confirmed the picture. Graphical-first is not the slow way; it is the way that catches errors, because a wrong cumulative total makes a visibly broken curve, while a wrong digit in a formula fails silently.

## Pearson, Spearman, and what "relationship" means

The report's final sections compute Pearson's correlation and least-squares regression on the health variables, then Spearman's rank correlation as the alternative. The distinction I now carry: Pearson measures linear association on the raw values and is the right tool when the relationship is roughly a line and outliers behave. Spearman replaces values with ranks first, which makes it robust to outliers and able to catch any monotone relationship, linear or not. A dataset where one cholesterol reading is mis-keyed by a factor of ten will wreck one of these coefficients and barely move the other, and knowing which is which is worth more than either formula.

## Variance, squares, and why we square at all

One more thing hand computation forces you to notice: variance is in squared units. Cholesterol in mg/dL gives variance in (mg/dL)², which is why standard deviation exists (same square root everyone complains about) and why mean absolute deviation, which the report also computes, is easier to explain and almost never used. The squares are not pedantry; they are what makes variance differentiable, decomposable, and additive, the properties the entire statistical machinery downstream depends on.

## The takeaway

Libraries compute these statistics in microseconds, and you should use them. But every library call is an assertion about which statistic you meant, and the assertions are where mistakes live: mean instead of median on skewed data, Pearson where ranks were needed, F1 confusion when someone actually wanted the harmonic mean of something else. An afternoon of computing three means on 25 rows by hand is the cheapest insurance I know against those mistakes.
