---
title: "Projects & Publications"
layout: single
description: "Selected publications, tools, and research on transit technology decision-making, coordination, and open-source software."
permalink: /projects/
---

Full Path's published work focuses on practical tools and frameworks for community transportation agencies — organizations that need thoughtful guidance, not vendor pitches. Most are openly available.

<div class="project-grid">
{% for project in site.projects %}
  {% include ticket-card.html item=project %}
{% endfor %}
</div>
