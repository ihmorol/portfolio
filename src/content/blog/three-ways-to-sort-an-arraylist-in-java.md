---
title: "Sorting an ArrayList in Java: Anonymous Classes, Lambdas, and Reversed Comparators"
excerpt: "My OOP lab file sorts the same student list three ways: anonymous inner class, lambda, reversed comparator. That progression is the whole story of Java comparators, including the one rule nobody explains."
coverImage: "/images/brand/oop-arraylist-01.svg"
date: "2023-04-04"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "Software Engineering"
readTime: 5
tags: ["Java", "OOP", "Collections", "Comparators"]
featured: false
---

# Sorting an ArrayList in Java: Anonymous Classes, Lambdas, and Reversed Comparators

One of my OOP lab files loads students from a text file and sorts the same list three different ways, one after another. I did not plan it as a lesson; the lab kept asking for "now sort by this instead." Rereading it, the file is a complete tour of Java comparators, including the sign rule that textbooks state once and never explain.

## Way 1: the anonymous class

The first sort is by CGPA, written the long way:

```java
students.sort(new Comparator<Student>() {
    public int compare(Student s1, Student s2) {
        return Double.compare(s1.getCgpa(), s2.getCgpa());
    }
});
```

An anonymous inner class exists for exactly one use site. It is verbose, but it makes the mechanics visible: sorting is just calling a two-argument function repeatedly, and you are the one supplying it. My lab notes in the file say the important part out loud: "if a negative value is returned, s1 goes before s2." Everything else about comparators is consequences of that sentence.

## Way 2: the lambda

The second sort is the same logic as a lambda:

```java
students.sort((Student s1, Student s2) -> { ... });
```

Same behavior, no ceremony. The useful part of having both in one file is seeing what the lambda version removes: a type declaration, a method name, an object identity. None of it mattered. This is the moment most students actually understand what "behavior as a value" means, because the anonymous class version is sitting right above it as the before picture.

## Way 3: the reversed comparator

The third sort wants names in descending order, and the trick is delightful:

```java
n2.compareTo(n1)
```

Swap the operands and the sign of every comparison flips, so the same natural ordering now sorts backwards. No negation, no special API, no `Comparator.reverseOrder()` wrapper needed. My file uses it for descending-by-name after ascending-by-CGPA, and once you see the operand-swap trick, every "sort descending" question on an exam becomes free.

The lab also had me graduate from all of this to named classes (`sortByID`, `sortByIDName` implementing `Comparator<Student>`), which is the right move once a comparison expresses a real domain rule instead of a one-off ordering. Anonymous classes for the moment, lambdas for the simple cases, named comparators for the rules that earn a name.

## What the same lab taught about files

The same course folder holds the file-I/O pair that fed the student list. Two gotchas live there. The first is append mode: `new FileWriter(path)` truncates the file, `new FileWriter(path, true)` appends, and the difference between them once wiped a test dataset I had spent an afternoon building. The second is writer stacking: `PrintWriter` around `BufferedWriter` around `FileWriter` looks redundant until you want println convenience and buffered throughput at the same time. Java I/O rewards knowing which layer provides which feature.

## The lab's other quiet lesson

The Employee problem in the same course (an array of `Employee` objects, each holding an `int[] score`) sneaks in two ideas that sound advanced but are just OOP done carefully: aggregation (the department computes `averageScore()` by iterating its employees) and defensive copying (`this.score = new int[score.length]`, so the object owns its array instead of aliasing the caller's). Business rules like `bonusEligibility()` (ten years' experience and a salary under a threshold) then become one-line methods that read like the requirement they implement.

That is what I took from the whole OOP sequence: the design-pattern catalog gets all the attention, but the day-to-day skill is smaller and more frequent. Know what a comparator is really returning, know which I/O layer does what, and let objects own their data. The competition projects are just these habits with a UI bolted on.
