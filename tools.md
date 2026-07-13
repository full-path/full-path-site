---
title: "Tools"
layout: splash
permalink: /tools/
header:
  compact: true
  overlay_image: /assets/images/services_hero.jpg
  overlay_filter: "rgba(112, 66, 20, 0.5)"
description: "The tools listed here are free to use — no software license, no subscription, no vendor relationship required. Each was developed with and for small and rural transit agencies."
---

{% assign sorted_tools = site.tools | where_exp: "t", "t.order" | sort: "order" %}
<div class="tool-filters" id="tools-filters" data-grid="tools-grid" role="group" aria-label="Filter by category">
  <button class="tool-filter is-active" data-filter="all">All</button>
  {% for cat in site.data.categories %}
    <button class="tool-filter" data-filter="{{ cat.short_name | downcase }}" style="--filter-color: {{ cat.colors.main }};">{% include category-icon.html category=cat.short_name %}{{ cat.short_name }}</button>
  {% endfor %}
</div>

<div class="card-grid" id="tools-grid">
{% for tool in sorted_tools %}
  {% include ticket-card.html item=tool %}
{% endfor %}
</div>

<script src="{{ '/assets/js/filter.js' | relative_url }}"></script>
