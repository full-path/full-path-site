---
title: "Projects"
layout: splash
header:
  compact: true
  overlay_image: /assets/images/services_hero.jpg
  overlay_filter: "rgba(112, 66, 20, 0.5)"
description: "Full Path's published work focuses on practical tools and frameworks for community transportation agencies — organizations that need thoughtful guidance, not vendor pitches. Most are openly available."
permalink: /projects/
---

<div class="tool-filters" id="projects-filters" data-grid="projects-grid" role="group" aria-label="Filter by category">
  <button class="tool-filter is-active" data-filter="all">All</button>
  {% for cat in site.data.categories %}
    <button class="tool-filter" data-filter="{{ cat.short_name | downcase }}" style="--filter-color: {{ cat.colors.main }};">{% include category-icon.html category=cat.short_name %}{{ cat.short_name }}</button>
  {% endfor %}
</div>

<div class="card-grid" id="projects-grid">
{% for project in site.projects %}
  {% include ticket-card.html item=project %}
{% endfor %}
</div>

<script src="{{ '/assets/js/filter.js' | relative_url }}"></script>
