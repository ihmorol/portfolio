---
title: "React Reconciliation and the Virtual DOM, Explained for a Handwritten Exam"
excerpt: "My Mobile App Development final is handwritten: React Native and NestJS worth 16 of 20 marks, written from memory on paper. Preparing for that format forced a clearer explanation of the virtual DOM and reconciliation than any tutorial gave me."
coverImage: "/images/brand/mad-reconciliation-01.svg"
date: "2026-06-25"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "Software Engineering"
readTime: 5
tags: ["React Native", "Virtual DOM", "NestJS", "Mobile Development"]
featured: false
---

# React Reconciliation and the Virtual DOM, Explained for a Handwritten Exam

My Mobile Application Development final has a constraint that changes how you study: the code is handwritten. One hour, 20 marks, no IDE, no autocomplete. React Native and NestJS carry 16 of the marks; Git and JS/TS fundamentals carry the rest. Preparing to write React code from memory forced me to compress the framework's mental model until it was writable, and the part that needed the clearest explanation is the one tutorials usually skip: what the virtual DOM and reconciliation actually do.

## The two-sentence version

React keeps a lightweight copy of the screen in memory: the virtual DOM. When data changes, React compares the new virtual copy with the old one and updates only the parts that changed. That comparison is reconciliation.

Every other detail is commentary on those two sentences, and the commentary writes itself once you ask the obvious questions. Why keep a copy? Because touching the real screen (native views on mobile) is expensive, and diffing an in-memory tree is cheap. Why diff at all? Because state changes are usually local, and re-rendering everything would throw away most of the work. What does "update only what changed" buy? It is the reason you can write declarative UI ("the screen should look like this") and still get imperative performance ("touch only these three nodes").

## Props, state, and who owns what

The exam's 3-mark question is always prop versus state, and the writable answer is about ownership: props are inputs passed down from a parent; the component reads them and cannot change them. State is the component's private memory; the component changes it with a setter, and every change triggers the reconciliation loop above. A reusable component is a prop-driven one: my prep notes contain a NewsCard that takes title, image, and onPress as props and renders identically for any article, which is the 4-mark "build a reusable component" answer in one screen.

The custom hook answer is the same idea applied to logic. A `useFetch` hook wraps the state/effect/loading trio so any screen can consume data without re-implementing the dance. Hooks exist because the logic inside components (fetch, subscribe, timers) wanted to be reusable the way UI had become reusable through props.

## The exam's trap: two generations of React

My course's sample code uses class components with ListView and AsyncStorage, while the exam expects functional components with hooks. My prep notes carry a loud warning about exactly this mismatch, because it is where marks die: you write `class App extends Component` when the question wanted `useState`, or you reach for `componentDidMount` when the modern answer is `useEffect(..., [])`. Knowing both dialects and when each is wanted is itself a tested skill. The mapping between them is mechanical: lifecycle methods become effects, `this.state` becomes a state pair, and ListView (which predates the virtual-DOM-friendly FlatList) becomes FlatList.

## The NestJS half: one sentence per part

The backend marks reward the same compression. The sentence my notes lead with: the controller receives the request, the service does the work, the module ties them together. Three nouns, three jobs, and everything else in NestJS (decorators, dependency injection, DTOs, pipes, guards) hangs off that skeleton. The guaranteed code question is an external-API call: a service method that fetches and returns data, and a controller that routes a GET to it. Handwritten, that is about twelve lines, and you can only write them from memory if the three-role model is solid.

## Why handwritten changes preparation

Preparing to type code lets you lean on autocomplete as a memory prosthesis. Preparing to write it exposes exactly which parts you know structurally versus which parts your fingers know. My final prep therefore ended the way my earlier exam packs do: write the to-do screen from memory once, on paper, before the exam. The first attempt is always humbling. The second one is when you find out that reconciliation, prop-vs-state, and the controller-service-module triad are actually three things you know.
