---
title: "kNN and k-Means From Scratch: One Distance Function, Two Learners"
excerpt: "My AI lab's second assignment was kNN on two datasets; the third was k-means with covariance ellipses drawn around every cluster. Written back to back, they reveal something neat: the same distance function powers a supervised learner and an unsupervised one."
coverImage: "/images/brand/ai-kmeans-knn-01.svg"
date: "2025-07-03"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "AI and Machine Learning"
readTime: 6
tags: ["Machine Learning", "kNN", "k-Means", "Clustering", "Python"]
references:
  - label: "IRIS dataset"
    url: "https://archive.ics.uci.edu/dataset/53/iris"
    note: "Classification dataset: 150 samples, 3 species."
  - label: "Implementation details"
    note: "Split 70/15/15 by one random draw per row; k swept over [1, 3, 5, 10, 15] on validation; k-means reseeds empty clusters with a random data point and stops when centroids stop moving (max 500 iterations)."
featured: false
---

# kNN and k-Means From Scratch: One Distance Function, Two Learners

Two assignments in my AI lab used the same primitive: a hand-rolled Euclidean distance over feature vectors. The first applied it to kNN and got a supervised classifier and regressor. The second applied it to k-means and got clustering with covariance ellipses drawn around each group. Same function, wildly different learning. Writing both from scratch back to back is the cleanest demonstration I know of what "distance-based learning" means.

## kNN: the whole model is the dataset

My kNN came in a pair of files sharing one skeleton: classification on the IRIS dataset, regression on a diabetes dataset. The shared pipeline is small. A manual 70/15/15 train/validation/test split (one `random.random()` draw per row decides its bucket), a sweep over k in [1, 3, 5, 10, 15] scored on validation, then one final run on test with the winning k.

The only difference between the two learners is the aggregator over the k nearest neighbors:

```python
# classification: majority vote
Counter(neighbors).most_common(1)[0][0]
# regression: the mean
sum(neighbors) / k
```

Classification picks the most common label among the neighbors; regression averages their values. Everything else, the distance function, the sorting, the neighbor lookup, is identical. The main point about kNN: there is no training phase. The dataset is the model, and the work happens at prediction time. It also makes the failure modes obvious. High k smooths decisions but blurs boundaries; k=1 memorizes and inherits every outlier. The validation sweep is not decoration; it is how the bias-variance tradeoff gets measured instead of discussed.

## k-means: the same distance, but nobody tells you the answer

k-means uses the identical Euclidean distance with no labels anywhere. My implementation is plain Python: initialize k centroids by random sample from the data, assign every point to its nearest centroid, recompute each centroid as the mean of its members, repeat until the centroids stop moving (with a max_iters of 500 as the safety net).

Two edge cases taught me more than the main loop. First, the empty cluster: if some centroid attracts zero points, the mean is undefined, so my code reseeds it with a random data point and continues. Silent, pragmatic, and the standard fix. Second, convergence: comparing centroids for exact equality works here because the assignment step is discrete, but the algorithm is only guaranteed to reach a local optimum, which is why every serious usage runs k-means several times with different seeds.

## Drawing what k-means actually believes

The assignment's visual signature was confidence ellipses around each cluster. For each cluster, compute the covariance matrix of its points, clean it with a tiny jitter (`cov += np.eye(2) * 1e-6` so singular matrices don't crash the eigendecomposition), run `np.linalg.eigh` to get axes and rotation, and draw an ellipse whose width and height come from the eigenvalues (scaled by 2.2 standard deviations, floored at a minimum size so degenerate clusters stay visible).

The picture this produces is honest about k-means in a way scatter dots are not. k-means assumes roughly spherical, similarly sized clusters, and the ellipses expose exactly that: elongated ellipses show where the assumption strains, overlapping ellipses show where the "cluster" boundary is fiction. Watching those shapes appear per value of k was worth more than any accuracy number.

## The shared lesson

Both algorithms reduce to "define what 'near' means, then act on neighborhoods of it." kNN acts at prediction time using labeled neighbors; k-means acts iteratively using its own guesses until they stabilize. Once you see them as two consequences of one primitive, other members of the family (RBF kernels, DBSCAN, vector search) start reading as variations on the same theme: different neighborhoods, different actions, same geometry.

The lab code still has the scars of writing distance by hand: a `zip`-based loop that is nowhere near as fast as numpy's vectorized version, and a split done with a single random draw per row rather than stratified sampling. Both fine for learning, both worth fixing before real use. Knowing which kind of code you are looking at is half the skill.
