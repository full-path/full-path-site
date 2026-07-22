---
title: "GTFS Extensions for Eligibilities and Capabilities"
layout: project
description: "Development of two draft GTFS extensions to make specialized transit services — paratransit, older adult transportation, and other non-general-public services — visible and comparable in the same data ecosystem as fixed-route transit."
permalink: /projects/gtfs-eligibilities-capabilities/
year: "2021"
categories: [Interoperability,Engagement]
client: odot
published: "August 2021"
resources: [gtfs-eligibilities-capabilities]
resources_title: "The Slides"
---

Specialized transit — paratransit, older adult transportation, volunteer driver programs, Medicaid transportation — is largely invisible to the data ecosystem that has grown up around GTFS. That ecosystem includes trip planners, feed aggregators, and planning tools used by millions of riders and dozens of agencies. But because GTFS was built to describe fixed-route services available to the general public, it has no way to represent the eligibility constraints, service levels, vehicle capabilities, or booking requirements that define how specialized services actually work. A rider who needs a wheelchair lift and door-to-door assistance can't compare their options in Google Maps or any other trip planning tool — not because the data doesn't exist, but because there's no standard format for it. This project, funded through the Federal Transit Administration's Mobility for All Pilot Program and administered through ODOT's Public Transportation Division, set out to change that.

Full Path served as lead technical consultant on the project, developing two draft extensions to GTFS. GTFS-eligibilities defines who can use a service — handling age constraints, disability categories, veteran status, allowed trip purposes, and how and where eligibility is verified. GTFS-capabilities describes what a service can provide beyond the ambulatory baseline: service levels (curb-to-curb through hand-to-hand), lift and ramp specifications, mobility device space dimensions, and driver training. A third conceptual contribution — the Uniform Resource Name (URN) — gave both extensions a mechanism for creating globally unique, human-readable identifiers for eligibility types, trip purposes, and compliance standards, enabling coordination across providers and jurisdictions without requiring a central registry. The result was a set of draft proposals grounded in the actual complexity of how specialized transit operates, not a simplified approximation of it.

The project concluded with expressions of intent from key players in the GTFS ecosystem. MobilityData, the governance body for GTFS, committed to incorporating components of both extensions into their formal development roadmap. Feed producers and consumers — including Trillium Solutions, Interline, and Cambridge Systematics — indicated plans to implement support. The extensions built directly on prior work in GTFS-Flex and related proposals, extending the data model to cover the full trip lifecycle for riders who have been effectively excluded from it. Making specialized transit legible in the same formats and tools as fixed-route transit is a prerequisite for meaningful trip planning, regional coordination, and policy analysis for the populations these services exist to serve.
