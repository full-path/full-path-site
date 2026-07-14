---
layout: splash
title: Services
permalink: /services/
header:
  overlay_filter: "rgba(112, 66, 20, 0.5)"
  overlay_image: /assets/images/services_hero.jpg
  compact: true
description: "Full Path works with transit agencies of all sizes and the organizations that support them — state DOTs, regional governments, coordinating bodies, and technical assistance centers. Because we often work with organizations without easy access to IT resources, we cover a wide spectrum of service required to make technology-involved projects successful, either directly or through Full Path's trusted partners."
---

<div class="card-grid">
{% for service in site.data.categories %}
  {% include service-card.html service=service %}
{% endfor %}
</div>
