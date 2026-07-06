---
title: "Why I Built My Own Link Shortener (and Actually Use It Every Day)"
excerpt: "BriefLi started as an itch: I share study guides and project links constantly, and long URLs with random slugs are unmanageable. So I built a shortlink dashboard on React, Supabase, and Vercel."
coverImage: "/images/brand/blob-depth-01.svg"
date: "2026-07-01"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "Projects"
readTime: 5
tags: ["Projects", "React", "Supabase", "Side Project"]
featured: false
---

# Why I Built My Own Link Shortener

Every "should I build my own X?" article ends with "no, use an existing service." Here's the counterargument. I built my own link shortener, [BriefLi](https://s.ihmorol.cv), and it has quietly become the most-used piece of software I've ever written, because the user is me, every single day.

## The itch

I share links constantly: study packs for classmates before finals, project trackers for teammates, research repos, slide decks, drive folders. The problems compounded.

Long URLs with random slugs are unmemorable. Nobody can retype a Notion URL from a whiteboard. Generic shorteners give you `xyz.link/8fk2ql`, which tells the reader nothing and tells me nothing when I browse my own links a month later. And my links have audiences: some are for everyone, like public study guides, while some are just mine. Existing tools don't organize around that.

What I wanted was `s.ihmorol.cv/hci-final`. My domain, a slug a human can say out loud, and a dashboard that remembers everything I've ever shared.

## What BriefLi does

BriefLi is a shortlink management dashboard rather than a bare shortener.

Every new link gets a unique auto-generated 6-character code, verified against the database, or you write your own slug. Paste a destination URL and it suggests human-readable slugs, so you're never staring at a blank field. Public links are browsable by anyone, while personalized links live behind authentication. Click tracking tells me which study guide actually got read (the HCI final prep is winning). And deleted links go to a trash you can restore from, because permanently killing a link someone might still click breaks a promise.

## The stack, and why

The dashboard is React and TypeScript on Vite. The API runs on Vercel serverless functions: link CRUD, slug checks, redirects. A URL shortener is delightfully serverless-shaped, with tiny stateless handlers and spiky traffic. Storage is Supabase Postgres, with real SQL migrations checked into the repo. Links are relational data with constraints (unique slugs!), and that is exactly what Postgres is for. The slug suggestions come from the Gemini API.

The whole thing is small enough to fit in one head, which is the point. The redirect path has almost nothing to break: a request comes in, the slug gets looked up, the click gets counted, and a 302 goes out.

## What building it taught me

Uniqueness is a database problem. My first slug-collision check lived in application code; the reliable version is a unique constraint with the app handling the conflict gracefully. Race conditions don't care about your `if` statement.

Soft delete is a product decision. Shortlinks are promises. People bookmark them and print them on slides. Trash and restore is what makes the promise keepable after a mis-click.

Products you use daily get better fast. Every friction I feel, I fix that weekend. That feedback loop is tighter than any code review, and it's the strongest argument for building your own tools: you get the practice of owning a product end to end, schema to serverless to UX.

## Should you build your own?

If you want a link shortener: no, use an existing one. If you want to learn how auth, serverless APIs, relational constraints, AI integration, and a real deployment fit together in one small, finishable product: yes. Just make sure it's something you'll actually use, because a side project you depend on is the only kind that survives.
