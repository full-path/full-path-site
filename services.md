---
layout: splash
title: Services
permalink: /services/
seo_description: "Technology strategy, implementation, and software support for public transit agencies, from small rural bus systems up, and the state DOTs that support them."
header:
  overlay_filter: "rgba(112, 66, 20, 0.5)"
  overlay_image: /assets/images/services_hero.jpg
  compact: true
description: "Full Path works with public transit agencies of all sizes, from small rural bus systems to regional providers, and the organizations that support them — state DOTs, regional governments, coordinating bodies, and technical assistance centers. Because we often work with organizations without easy access to IT resources, we cover a wide spectrum of service required to make technology-involved projects successful, either directly or through Full Path's trusted partners."
---

<div class="card-grid">
{% for service in site.data.categories %}
  {% include service-card.html service=service %}
{% endfor %}
</div>
