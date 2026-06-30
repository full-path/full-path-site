---
title: "Full Path Transit Technology"
layout: splash
header:
  overlay_filter: "rgba(112, 66, 20, 0.5)"
  overlay_image: /assets/images/hero.jpg
  hide_title: true
excerpt: "Technology strategy and tools for community transit without the hype"
---

<section class="home-section home-intro">
Full Path helps community transportation services be successful with technology.
</section>

<section class="home-section">
<h2 class="home-section__title">Who We Help</h2>
<div class="who-we-help">
{% for item in site.data.who_we_help %}
<div class="who-we-help__group">
  <h3 class="who-we-help__heading">
    {% if item.icon %}<img src="{{ item.icon | relative_url }}" alt="" class="who-we-help__icon">{% endif %}
    {{ item.label }}
  </h3>
  {% if item.children %}
  <ul class="who-we-help__list">
    {% for child in item.children %}<li>{{ child }}</li>{% endfor %}
  </ul>
  {% endif %}
</div>
{% endfor %}
</div>
</section>

<section class="home-section">
<h2 class="home-section__title">Overview of Services</h2>
<div class="home-services">
{% for service in site.data.categories %}
<a href="/services/#{{ service.short_name | downcase }}" class="service-card__header home-service-link" style="--service-color: {{ service.colors.main }}; view-transition-name: service-{{ service.short_name | downcase }};">
<div class="service-card__icon-slot"><img src="{{ service.icon | relative_url }}" alt=""></div>
<h3 class="service-card__title">{{ service.long_name }}</h3>
</a>
{% endfor %}
</div>
</section>

<section class="home-section">
<h2 class="home-section__title">Featured Tools</h2>
<div class="project-grid">
{% assign featured_tools = site.tools | where_exp: "t", "t.featured_order" | sort: "featured_order" %}
{% for tool in featured_tools %}{% include ticket-card.html item=tool %}{% endfor %}
</div>
<p class="home-section__more"><a href="/tools/">All Tools →</a></p>
</section>

<section class="home-section">
<h2 class="home-section__title">Featured Projects</h2>
<div class="project-grid">
{% assign featured_projects = site.projects | where_exp: "p", "p.featured_order" | sort: "featured_order" %}
{% for project in featured_projects %}{% include ticket-card.html item=project %}{% endfor %}
</div>
<p class="home-section__more"><a href="/projects/">All Projects →</a></p>
</section>

<section class="home-section">
<h2 class="home-section__title">Organizations We've Helped</h2>
<ul class="client-list">
{% for client in site.data.clients %}
<li class="client-list__item">
  {% if client.url %}<a href="{{ client.url }}" class="client-list__link">{% endif %}
  {% if client.logo %}
  <img src="{{ client.logo | relative_url }}" alt="{{ client.name }}" class="client-logo">
  {% else %}
  <span class="client-name">{{ client.name }}</span>
  {% endif %}
  {% if client.url %}</a>{% endif %}
</li>
{% endfor %}
</ul>
</section>

