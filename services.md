---
layout: splash
title: Services
permalink: /services/
header:
  overlay_filter: "rgba(112, 66, 20, 0.5)"
  overlay_image: /assets/images/services_hero.jpg
---

Full Path works with transit agencies of all sizes and the organizations that support them — state DOTs, regional governments, technical assistance centers — on technology strategy, assessment, and implementation.

<div class="service-grid">
{% for service in site.data.services %}
  {% include service-card.html service=service %}
{% endfor %}
</div>
