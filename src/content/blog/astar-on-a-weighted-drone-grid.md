---
title: "Implementing A* Pathfinding on a Weighted Grid, With Visualization"
excerpt: "For my AI lab I built A* over a grid where every cell has a movement cost and obstacles are just -1 values, then drew the result with matplotlib. The version with weights taught me why the heuristic and the edge costs must speak the same units."
coverImage: "/images/brand/ai-astar-01.svg"
date: "2025-05-26"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "AI and Machine Learning"
readTime: 6
tags: ["Artificial Intelligence", "A*", "Search Algorithms", "Python", "Matplotlib"]
references:
  - label: "Worked example"
    note: "input.txt: 4x4 cost grid with -1 obstacles, start (0,0), goal (1,2) -> output.txt: Optimal Cost 7, path (0,0) -> (0,1) -> (1,2)."
  - label: "Hart, Nilsson & Raphael (1968)"
    note: "A Formal Basis for the Heuristic Determination of Minimum Cost Paths - the original A* paper."
featured: false
---

# Implementing A* Pathfinding on a Weighted Grid, With Visualization

The AI lab assignment said "implement A* search." The version I submitted treats the grid as terrain, not a maze: every cell carries a movement cost, obstacles are cells marked -1, and the drone moves in eight directions. It reads the map from input.txt, prints the optimal cost and path to output.txt, and renders the whole thing with matplotlib. Building it end to end settled, in one afternoon, several things I had only half-understood from slides.

## Cost lives in the cells

Most A* toy examples use uniform cost 1, and you learn nothing about the priority queue. Mine reads the cost from the map itself:

```python
new_g = g_cost[cur] + grid[neighbor[0]][neighbor[1]]
```

Walking through a "2" cell costs 2, a "3" cell costs 3. Obstacles are not special-cased in the search; they are just cells you never expand, because -1 breaks the arithmetic. The only cost logic in the program is the relaxation check: `if neighbor not in g_cost or new_g < g_cost[neighbor]`. If the new route to a cell is cheaper than the best known one, update it and push it back on the queue. That single check is Dijkstra; A* is what happens when the queue's ordering adds a heuristic to it.

## The heuristic must speak the same units as the edges

Movement is 8-directional, so the straight-line (Euclidean) distance to the goal is admissible: no path can be shorter than the direct line, and every edge costs at least the straight-line distance between its endpoints. Had I used Manhattan distance with diagonal moves allowed, the heuristic could overestimate on pure diagonal paths and A* would lose its optimality guarantee. Had I used Euclidean with only 4-directional moves, the heuristic would be too weak (always admissible, but lazy), and the search would expand more nodes than necessary.

The rule that fell out of the exercise: the heuristic is a lower bound on remaining cost, so its units and its geometry must match the edge definitions exactly. This is also why my example is a drone and not a rook: flying things move diagonally, and the 8-connected grid with Euclidean guidance is the honest model of that.

## The worked example, end to end

The input file holds a 4×4 grid with start (0,0) and goal (1,2):

```
2  3  1 -1
1 -1  4  2
1  2  3  1
3 -1  2  1
```

The output: optimal cost 7, path (0,0) → (0,1) → (1,2). It looks wrong at first glance; the direct diagonal from (0,0) to (1,1) is blocked (-1), and the "cheap" route through the left column costs more because of terrain. The chosen route pays 2 to enter (0,1), then 4 to enter the goal itself, and beats the alternatives by exactly the terrain weight the naive shortest-path-in-steps answer ignores. This is the example I show people who think A* is "BFS with extra steps": BFS minimizes steps, and here the minimum-step path is not the minimum-cost path.

## The visualization details that mattered

Matplotlib rendering sounds cosmetic, but two details carry information. The y-axis has to be flipped (`n - 1 - x` for row coordinates) or the picture is mirrored and nobody trusts it. And each cell type gets its own color: gray for obstacles, light green for the path, light blue for start, green for goal, with the title reading "Drone Path Visualization." When the picture matched the printed path and cost, I had three independent artifacts agreeing: the file, the console, the drawing. That habit (same result, three representations) has caught more bugs in my later data work than any single technique.

## The takeaway

A* is three ideas working together: best-first search over g + h, an admissible heuristic matched to the edge geometry, and a relaxation rule for updating costs. Implement it once on weighted terrain and you will never confuse it with unweighted BFS again, because the example where the two disagree is sitting right there in your output file.
