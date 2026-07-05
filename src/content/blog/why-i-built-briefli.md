---
title: "Why I Built My Own Link Shortener (and Actually Use It Every Day)"
excerpt: "BriefLi started as an itch: I share study guides and project links constantly, and long URLs with random slugs are unmanageable. So I built an AI-powered shortlink dashboard on React, Supabase, and Vercel."
coverImage: "/images/brand/blob-depth-01.svg"
date: "2026-07-01"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "Projects"
tags: ["Projects", "React", "Supabase", "Side Project"]
featured: false
---

# Why I Built My Own Link Shortener

Every "should I build my own X?" article ends with "no, use an existing service." Here's the counterargument: I built my own link shortener — [BriefLi](https://s.ihmorol.cv) — and it's quietly become the most-used piece of software I've ever written, because the user is me, every single day.

## The itch

I share links constantly: study packs for classmates before finals, project trackers for teammates, research repos, slide decks, drive folders. The problems compounded:

- Long URLs with random slugs are unmemorable. Nobody can retype a Notion URL from a whiteboard.
- Generic shorteners give you `xyz.link/8fk2ql` — which tells the reader nothing and me nothing when I browse my own links a month later.
- My links have audiences. Some are for everyone (public study guides), some are just mine. Existing tools don't organize around that.

What I wanted was `s.ihmorol.cv/hci-final` — my domain, a slug a human can say out loud, and a dashboard that remembers everything I've ever shared.

## What BriefLi does

BriefLi is a shortlink management dashboard, not just a shortener:

- **Collision-checked short codes.** Every new link gets a unique auto-generated 6-character code, verified against the database — or you write your own slug.
- **AI slug suggestions.** Paste a destination URL and get smart, human-readable slug ideas instead of staring at a blank field.
- **Public and personal spaces.** Public links are browsable by anyone; personalized links live behind authentication.
- **Click tracking** for every link, so I know which study guide actually got read (the HCI final prep is winning).
- **Trash & restore** — soft-delete, because permanently deleting a link someone might still click is how you break the internet's promises.

## The stack, and why

- **React + TypeScript on Vite** for the dashboard.
- **Vercel serverless functions** for the API: link CRUD, slug checks, redirects. A URL shortener is delightfully serverless-shaped — tiny stateless handlers, spiky traffic.
- **Supabase (Postgres)** for storage, with real SQL migrations checked into the repo. Links are relational data with constraints (unique slugs!) — this is exactly what Postgres is for.
- **Gemini API** for the slug suggestions.

The whole thing is small enough to fit in one head, which is the point. The redirect path — request comes in, look up slug, count the click, 302 out — has almost nothing to break.

## What building it taught me

**Uniqueness is a database problem, not an application problem.** My first slug-collision check lived in application code; the reliable version is a unique constraint with the app handling the conflict gracefully. Race conditions don't care about your `if` statement.

**Soft-delete is a product decision.** Shortlinks are promises — people bookmark them, print them on slides. Trash/restore isn't a nice-to-have; it's what makes the promise keepable after a mis-click.

**Products you use daily get better fast.** Every friction I feel, I fix that weekend. That feedback loop is tighter than any code review, and it's the strongest argument for building your own tools: not because the world needs another link shortener, but because *you* need the practice of owning a product end to end — schema to serverless to UX.

## Should you build your own?

If you want a link shortener: no, use an existing one. If you want to learn how auth, serverless APIs, relational constraints, AI integration, and a real deployment fit together in one small, finishable product — absolutely yes. Just make sure it's something you'll actually use, because a side project you depend on is the only kind that survives.
