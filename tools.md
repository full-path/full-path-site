---
title: "Tools"
layout: splash
permalink: /tools/
header:
  compact: true
  overlay_image: /assets/images/services_hero.jpg
  overlay_filter: "rgba(112, 66, 20, 0.5)"
description: "The tools listed here are free to use — no software license, no subscription, no vendor relationship required. Each was developed with and for small and rural transit agencies, and is designed to be adopted and maintained without dedicated IT staff."
---

{% assign sorted_tools = site.tools | where_exp: "t", "t.order" | sort: "order" %}
<div class="tool-filters" id="tools-filters" role="group" aria-label="Filter by category">
  <button class="tool-filter is-active" data-filter="all">All</button>
  {% for cat in site.data.categories %}
    <button class="tool-filter" data-filter="{{ cat.short_name | downcase }}" style="--filter-color: {{ cat.colors.main }};">{% include category-icon.html category=cat.short_name %}{{ cat.short_name }}</button>
  {% endfor %}
</div>

<div class="project-grid" id="tools-grid">
{% for tool in sorted_tools %}
  {% include ticket-card.html item=tool %}
{% endfor %}
</div>

<script>
(function () {
  var container = document.getElementById('tools-filters');
  var btns  = container.querySelectorAll('.tool-filter');
  var cards = document.querySelectorAll('#tools-grid .ticket');
  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = this.dataset.filter;
      btns.forEach(function (b) { b.classList.remove('is-active'); });
      this.classList.add('is-active');
      cards.forEach(function (card) {
        var cats = (card.dataset.categories || '').split(' ');
        card.hidden = filter !== 'all' && !cats.includes(filter);
      });
    });
  });
}());
</script>
