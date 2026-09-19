---
title: "Building a Multithreaded TCP Chat Server in Plain Java"
excerpt: "For my AOOP socket assignment I built a chat server with no frameworks: a ServerSocket, one thread per client, a registry HashMap, broadcast that skips the sender, and message history replayed on join. Every part explained."
coverImage: "/images/brand/aoop-chat-server-01.svg"
date: "2023-12-13"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "Software Engineering"
readTime: 6
tags: ["Java", "Networking", "Concurrency", "Sockets", "Projects"]
featured: false
---

# Building a Multithreaded TCP Chat Server in Plain Java

My Advanced OOP course had a socket programming assignment: build a chat system with nothing but the JDK. No Netty, no Spring, no WebSocket library. The server I shipped is about as small as a correct one can be, and it ended up doing double duty as the messaging layer of our team's Java Swing e-learning project, IELTS Paradox. Here is what each moving part does and why it exists.

## The skeleton: accept loop plus one thread per client

The server listens on port 8080. Every accepted socket gets its own `ServerThread`, and the thread is registered in a shared structure before anything else happens:

```java
static HashMap<String, ServerThread> clients = new HashMap<>();
```

That map is the room. When a client sends a message, the server iterates the registry and writes the payload to every socket except the sender's. Broadcast-that-skips-the-sender is the whole difference between a chat and an echo server, and it is one `if` statement.

One thread per connection is not the fastest design (a real deployment would use a selector or async I/O), but it is the honest design for learning: each client's blocking reads live on their own thread, nobody's slow connection stalls the room, and the concurrency surface is small enough to hold in your head.

## The DTO: one class that made everything cleaner

Messages are not bare strings. They travel as a `Message` object implementing `Serializable`, sent through object streams. This one decision cleaned up the entire protocol: a message carries its sender, its text, and its type, and the client deserializes a typed object instead of parsing ad-hoc strings with delimiters. It is also the first place I understood why DTOs exist. The wire needs a contract, and a serializable class is the simplest contract Java offers.

The client side mirrors the server: `ReaderThread` is a `Runnable` whose only job is a blocking read loop, deserializing whatever arrives and handing it to the UI. The main thread stays free for user input. Two threads, one socket, no shared mutable state beyond the streams themselves.

## History replay: the feature that taught me about state

The assignment's most interesting requirement was self-inflicted: when a new client joins, it should see the messages it missed. The server keeps a global `List<Message>`, and on join it replays the history down the new connection before joining the live broadcast loop.

It sounds trivial and it is, once you see it. But it makes the architecture click: the server is not just a switchboard, it is the source of truth for the conversation. Every chat system you have ever used is this pattern with persistence, ordering guarantees, and fan-out at scale bolted on. The join-time replay also forced a subtle ordering rule that later bit me in other projects: replay first, register for broadcast second, or the new client sees a message twice (once from history, once live).

## The handshake

Clients number themselves through a small protocol: the client sends a `readInt()` handshake on connect, the server responds with the client's index, and from then on everything is object messages. Handshakes feel like over-engineering until the day you need versioning or authentication, at which point you are grateful the first bytes of a connection already have a defined meaning.

## What plain Java teaches that frameworks hide

Building this in the JDK means you meet every concept a framework would have hidden: the accept loop, the thread-per-connection model, serialization as a wire format, broadcast as iteration, history as server-side state. When I later used socket libraries in bigger projects (the e-learning platform I maintain today streams video and chat over managed infrastructure), the mapping was one-to-one, because I had already built the naive version and knew which problems each layer exists to solve.

The full source zip still sits in my AOOP folder. If you are learning concurrency, I recommend the same exercise with the same constraint: standard library only. The constraint is what turns it from a tutorial into a lesson.
