---
title: "Projects"
layout: splash
header:
  compact: true
  overlay_image: /assets/images/services_hero.jpg
  overlay_filter: "rgba(112, 66, 20, 0.5)"
description: "A sampling of Full Path's project work with transit agencies, state DOTs, and mobility management programs."
permalink: /projects/
---

<div class="tool-filters" id="projects-filters" data-grid="projects-grid" role="group" aria-label="Filter by category">
  <button class="tool-filter is-active" data-filter="all">All</button>
  {% for cat in site.data.categories %}
    {% assign _cat_matches = site.projects | where_exp: "p", "p.categories contains cat.short_name" %}
    {% if _cat_matches.size > 0 %}
    <button class="tool-filter" data-filter="{{ cat.short_name | downcase }}" style="--filter-color: {{ cat.colors.main }};">{% include category-icon.html category=cat.short_name %}{{ cat.short_name }}</button>
    {% endif %}
  {% endfor %}
</div>

<div class="card-grid" id="projects-grid">
{% for project in site.projects %}
  {% include ticket-card.html item=project default_icon='/assets/images/project.svg' %}
{% endfor %}
</div>

<script src="{{ '/assets/js/filter.js' | relative_url }}"></script>
