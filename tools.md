---
title: "Tools"
layout: single
permalink: /tools/
description: "Free tools for community transit agencies — no license cost, no vendor lock-in."
---

The tools listed here are free to use — no software license, no subscription, no vendor relationship required. Each was developed with and for small and rural transit agencies, and is designed to be adopted and maintained without dedicated IT staff.

{% assign sorted_tools = site.tools | where_exp: "t", "t.order" | sort: "order" %}
{% assign categories = sorted_tools | map: "category" | uniq | sort %}
<div class="tool-filters" role="group" aria-label="Filter by category">
  <button class="tool-filter is-active" data-filter="all">All</button>
  {% for cat in categories %}
    <button class="tool-filter" data-filter="{{ cat | downcase }}">{% include category-icon.html category=cat %}{{ cat }}</button>
  {% endfor %}
</div>

<div class="project-grid" id="tools-grid">
{% for tool in sorted_tools %}
  {% include ticket-card.html item=tool %}
{% endfor %}
</div>

<script>
(function () {
  var btns  = document.querySelectorAll('.tool-filter');
  var cards = document.querySelectorAll('#tools-grid [data-category]');
  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = this.dataset.filter;
      btns.forEach(function (b) { b.classList.remove('is-active'); });
      this.classList.add('is-active');
      cards.forEach(function (card) {
        card.hidden = filter !== 'all' && card.dataset.category !== filter;
      });
    });
  });
}());
</script>
