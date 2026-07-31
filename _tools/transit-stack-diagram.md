---
title: "Transit Stack Diagram"
layout: tool
description: "A one-page picture of every technology system your agency runs and how they connect — or don't. A free Google Drawings template and a worked example you can copy and adapt."
permalink: /tools/transit-stack-diagram/
icon: /assets/images/stack-diagram.svg
categories: [Strategy,Interoperability]
order: 7
year: 2023
client: odot
resource_groups:
  - title: "The Diagrams"
    keys: [transit-stack-diagram-template, sample-transit-stack-diagram]
  - title: "Related Resources"
    keys: [trillium-transit-stack-diagram, ncmm-typology-framework]
---

Most agencies can name their scheduling software and their farebox. Fewer can say, in one place, everything they run — the radios, the cameras, the GPS units, the spreadsheet somebody built in 2014 that the monthly report still depends on — and fewer still can say how any of it connects. That knowledge usually lives in two or three people's heads, in pieces, and it leaves when they do.

A transit stack diagram puts it all on one page. It's a Google Drawing: boxes for the systems you use, grouped into five categories — Outreach & Access, Operations, Payment, In-vehicle, and Coordination & Planning — with arrows for the connections between them. The template below is pre-loaded with the systems small and rural agencies commonly run, so building your own is mostly a matter of deleting what doesn't apply and renaming what does. Anyone can make a copy; there's nothing to install and nothing to buy.

## What the Diagram Shows

The value is in the annotations, not the inventory. Each box gets marked with who owns it — a named vendor or the agency itself — and whether it's in use, planned, or needed but absent. Each arrow gets marked with how the data actually moves: a seamless connection over a standard format, a custom integration somebody paid for, a manual connection where a person retypes or re-uploads the data, or a connection that's missing entirely.

That last distinction is what makes the exercise worth doing. Drawing the arrows forces the question nobody asks in the abstract: *how does this number get from that system into this report?* The answer is frequently a person and a spreadsheet, and seeing three of those on one page tends to reframe a technology conversation faster than any assessment narrative. The sample diagram shows what a finished one looks like, dashed lines and question marks included — an honest diagram has gaps in it.

## Where It Came From

The idea is Trillium Solutions', from a [2016 post](https://trilliumtransit.com/2016/10/10/transit-stack-diagram/) presenting transit technology as a modular stack and pointing out where standard interfaces between the layers existed and where they didn't. Full Path adapted it from an industry-level diagram into an agency-level one and refined it over several years of [technology assessments for small and rural agencies across Oregon]({{ '/projects/odot-technology-assessments/' | relative_url }}), where drawing the stack early in a site visit turned out to be one of the fastest ways to get a shared picture of an agency's technology in front of everyone in the room. The organizing categories come from the [NCMM technology typology]({{ '/tools/ncmm-technology-typology/' | relative_url }}).

## How to Use It

Make a copy of the template, then fill it in with the people who actually operate the systems — schedulers, dispatchers, the person who compiles the reports — rather than from the top down. Managers routinely learn something. Date it, because it goes stale; revisiting it annually, or after any significant procurement, keeps it useful.

Once it exists, it does two jobs. Inside the agency it's a reference: for onboarding, for budgeting, for showing a board what the technology investment actually consists of, and for pointing at a specific weak link when you want to fix one. Outside the agency it's a way to compare notes. Two agencies swapping stack diagrams get to a substantive conversation about what's working in about five minutes, which is not true of two agencies swapping vendor names.
