---
layout: splash
header:
  compact: true
  overlay_image: /assets/images/services_hero.jpg
  overlay_filter: "rgba(112, 66, 20, 0.5)"
title: About Full Path
permalink: /about/
description: Full Path Transit Technology is a one-person consulting firm. I'm Kevin Chambers, and I work with a wide range of organizations to help community transit agencies — primarily small urban, rural, and urban specialized providers — be smart and effective with their technology investments.
---

<a href="https://www.linkedin.com/in/keviniano" class="btn btn--linkedin" target="_blank" rel="noopener">Find me on LinkedIn</a>

## Stats
 * Bachelor of Arts in Spanish and Latin American Studies from Oregon State University, magna cum laude
 * 25+ years supporting small organizations around data and technology
 * 15+ years focused on supporting community transit to be successful with technology

## Some of the technology I've worked with a lot
   * **Languages:** SQL, Javascript, Ruby, Python, Visual Basic
   * **Database Tools:** PostgreSQL, MS SQL Server, MS Reporting Services, MySQL, MS Access
   * **Web:** HTML5, CSS, JavaScript
   * **Product Platforms:** Google Workspace, Google Cloud, Ruby on Rails
   * **Transit data standards development:** GTFS-Flex, the Transactional Data Standard for Demand Responsive Transit (TDS-DRT)

## Trusted Partners

{% assign trusted_partners = site.data.partners | where: "trusted_partner", true %}
{% for partner in trusted_partners %}{% include partner-card.html partner=partner %}{% endfor %}

## Memberships
   * [MobilityData](https://mobilitydata.org/)
   * [Oregon Transit Association](https://www.oregontransit.com)
   * Cosignatory to the [Mobility Data Interoperability Principles](https://interoperablemobility.org)
