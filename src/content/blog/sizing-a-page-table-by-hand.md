---
title: "Sizing a Page Table by Hand: From Address Bits to Multi-Level Tables"
excerpt: "An OS assignment gave me a 256 MB virtual memory, 4 GB of physical memory, and 2 KB pages, then asked how big the page table is. The chain of arithmetic answers that, then explains why multi-level page tables exist."
coverImage: "/images/brand/os-pagetable-01.svg"
date: "2025-10-24"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "Computer Systems"
readTime: 5
tags: ["Operating Systems", "Memory Management", "Page Tables", "Virtual Memory"]
references:
  - label: "The derivation chain"
    note: "2 KB pages -> 11-bit offset; 256 MB VM -> 17-bit VPN; 4 GB physical -> 21-bit frame number; 4-byte PTE; 512 KB single-level table; 9-bit bottom level; (2^8 + 1) x 256 = 65,792 pages for 256 processes."
featured: false
---

# Sizing a Page Table by Hand: From Address Bits to Multi-Level Tables

My OS course's CT-3 assignment was pure memory-management arithmetic: given a virtual memory of 256 MB, physical memory of 4 GB, and 2 KB pages, derive the page table size, then redesign it as multi-level. Every answer falls out of one habit: convert every quantity to bits, then let the bits divide the address.

## The chain, one field at a time

**Offset.** A 2 KB page needs log2(2048) = 11 bits of offset. This part of every virtual address never touches the page table; the hardware just concatenates it onto the frame number.

**Virtual page number.** 256 MB of virtual space is 2²⁸ bytes, and 2²⁸ / 2¹¹ = 2¹⁷ pages, so the VPN is 17 bits.

**Page table entry.** Physical memory is 4 GB = 2³² bytes, so a frame number is 2³² / 2¹¹ = 2²¹ frames, 21 bits. A PTE must store those 21 bits plus a few flags (valid, protection, dirty); with 7 flag bits that is 28 bits, which rounds up to a 4-byte entry.

**The punchline.** One process needs 2¹⁷ entries × 4 bytes = 512 KB of page table. Per process. For a 256 MB address space, the map alone costs half a megabyte of contiguous physical memory, and it must be contiguous in the naive design, or you have swapped one external-fragmentation problem for another.

## The fix: chop the table into pages

Multi-level page tables exist to break that 512 KB into page-sized chunks, and the arithmetic of the assignment shows exactly how. A page-table page holds page_size / PTE_size = 2048 / 4 = 2⁹ = 512 entries, so one level of table consumes 9 bits of VPN. Our 17-bit VPN splits across two levels: 9 bits index the bottom level, the remaining 8 bits index the top.

Now the accounting changes. A process that uses its address space sparsely needs the top-level table (1 page) plus one second-level page per 2 MB region actually in use, instead of 256 contiguous pages up front. The assignment's closing question scaled it up: 256 processes with fully populated tables need (2⁸ + 1) × 256 = 65,792 pages of page tables, and even a minimal process pays ceil(17/9) = 2 pages. Multi-level trades one guaranteed cost for a smaller, per-region cost, and the numbers make the trade concrete instead of rhetorical.

## Translating an address, for real

The second problem made us translate hex addresses through a given page table by hand. For 0x0A10 with 256-byte pages: the offset is the low 8 bits (0x10), the VPN is the high 8 bits (0x0A = 10), the table maps VPN 10 to frame 9, and the physical address is frame 9 << 8 | 0x10. Other entries in the same table were marked invalid, and the correct answer for those is a fault, not a guess. Hand-translating three addresses is tedious and I recommend it anyway, because it makes the MMU's actual job (split, index, check valid, concatenate) impossible to misunderstand.

## What stayed with me

Three things transferred directly to later systems work. One: every memory-management quantity is a power of two, and the "why" is always division of address bits. Two: page tables are data structures living in physical memory, subject to the same size pressure as any other structure; the multi-level design is just a trie over the VPN. Three: invalid bits are as important as mappings. The sparse-space argument that justifies multi-level tables only works because most entries can be marked not-present and skipped entirely.

The whole assignment was a calculator exercise on the surface. Underneath, it was the design briefing for every virtual memory system I would ever read about.
