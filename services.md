---
layout: splash
title: Services
permalink: /services/
header:
  overlay_filter: "rgba(112, 66, 20, 0.5)"
  overlay_image: /assets/images/services_hero.jpg
---

Full Path works with transit agencies of all sizes and the organizations that support them — state DOTs, regional governments, coordinating bodies, and technical assistance centers. Because we often work with organizations that have little or no IT resources, we can cover the full spectrum of service required to make a technology-involved project successful, either directly or through Full Path's trusted partners.

<div class="service-grid">
{% for service in site.data.categories %}
  {% include service-card.html service=service %}
{% endfor %}
</div>

<script>
(function () {
  document.querySelectorAll('.service-card__handle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var open = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', open ? 'false' : 'true');
      this.nextElementSibling.classList.toggle('is-open', !open);
    });
  });
}());
</script>
