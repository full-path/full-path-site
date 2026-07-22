---
layout: about
header:
  compact: true
  overlay_image: /assets/images/services_hero.jpg
  overlay_filter: "rgba(112, 66, 20, 0.5)"
title: About Full Path
permalink: /about/
---
<div class="about-intro" markdown="1">

## Full Path Transit Technology is a one-person consulting firm.

I'm Kevin Chambers, and I work with a wide range of organizations to help community transit organizations — primarily rural, small urban, and urban specialized providers — be smart and effective with their technology investments.

<a href="https://www.linkedin.com/in/keviniano" class="btn btn--linkedin" target="_blank" rel="noopener">Find me on LinkedIn</a>

</div>

## At a Glance
 * **25+ years** supporting small organizations around data and technology
 * **15+ years** focused on supporting community transit to be successful with technology
 * **Grounded in operations:** Led technology at a Portland-area transit nonprofit for 7 years before founding Full Path
 * **Highly effective communicator:** Bilingual in Spanish, with experience in mediation and cross-cultural communication
 * **Systems thinker:** Skilled in identifying root causes and organizational patterns, not just symptoms
 * **Shaping the field, not just following it:** Contributor to national transit data standards; published author on transit technology strategy

## Tech Skills
   * **Languages:** SQL, Javascript, Ruby, Python, Visual Basic
   * **Database Tools:** PostgreSQL, MS SQL Server, MS Reporting Services, MySQL, MS Access
   * **Web:** HTML5, CSS, JavaScript
   * **Product Platforms:** Google Workspace, Google Cloud, Ruby on Rails
   * **Transit data standards development and implementation:**
     * Transactional Data Standard for Demand Responsive Transit (TDS-DRT)
     * GTFS-Flex

## Memberships
   * [MobilityData](https://mobilitydata.org/)
   * [Oregon Transit Association](https://www.oregontransit.com)
   * Cosignatory to the [Mobility Data Interoperability Principles](https://interoperablemobility.org)

## Trusted Partners

{% assign trusted_partners = site.data.partners | where: "trusted_partner", true %}
{% for partner in trusted_partners %}{% include partner-card.html partner=partner %}{% endfor %}
