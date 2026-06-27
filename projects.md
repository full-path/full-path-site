---
title: "Projects & Publications"
layout: single
description: "Selected publications, tools, and research on transit technology decision-making, coordination, and open-source software."
permalink: /projects/
---

Full Path's published work focuses on practical tools and frameworks for community transportation agencies — organizations that need thoughtful guidance, not vendor pitches. Most are openly available.

<div class="tool-filters" id="projects-filters" role="group" aria-label="Filter by category">
  <button class="tool-filter is-active" data-filter="all">All</button>
  {% for cat in site.data.categories %}
    <button class="tool-filter" data-filter="{{ cat.short_name | downcase }}" style="--filter-color: {{ cat.colors.main }};">{% include category-icon.html category=cat.short_name %}{{ cat.short_name }}</button>
  {% endfor %}
</div>

<div class="project-grid" id="projects-grid">
{% for project in site.projects %}
  {% include ticket-card.html item=project %}
{% endfor %}
</div>

<script>
(function () {
  var container = document.getElementById('projects-filters');
  var btns  = container.querySelectorAll('.tool-filter');
  var cards = document.querySelectorAll('#projects-grid .ticket');
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
