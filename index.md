---
title: "Full Path Transit Technology"
layout: splash
header:
  overlay_filter: "rgba(112, 66, 20, 0.5)"
  overlay_image: /assets/images/hero.jpg
  hide_title: true
excerpt: "Technology strategy and tools for community transit — without the hype"
---

<section class="home-section home-intro">
Full Path helps community transportation services be successful with technology.
</section>

<section class="home-section">
<h2 class="home-section__title">Who We Help</h2>
<div class="card-grid">
{% for item in site.data.who_we_help %}
<div class="service-card" style="--service-color: {{ item.color }};">
  <div class="service-card__header">
    {% if item.icon %}
    <div class="service-card__icon-slot">
      <img src="{{ item.icon | relative_url }}" alt="">
    </div>
    {% endif %}
    <h3 class="service-card__title">{{ item.label }}</h3>
  </div>
  <div class="service-card__body">
    {% if item.children %}
    <ul class="service-card__list">
      {% for child in item.children %}<li>{{ child }}</li>{% endfor %}
    </ul>
    {% endif %}
  </div>
</div>
{% endfor %}
</div>
</section>

<section class="home-section">
<h2 class="home-section__title">Our Services</h2>
<div class="home-services">
{% for service in site.data.categories %}
<a href="/services/#{{ service.short_name | downcase }}" class="service-card__header home-service-link" style="--service-color: {{ service.colors.main }}; view-transition-name: service-{{ service.short_name | downcase }};">
<div class="service-card__icon-slot"><img src="{{ service.icon | relative_url }}" alt=""></div>
<h3 class="service-card__title">{{ service.long_name }}</h3>
</a>
{% endfor %}
</div>
<p class="home-section__more"><a href="/services/" class="btn btn--more">More Details →</a></p>
</section>

<section class="home-section">
<h2 class="home-section__title">Featured Tools</h2>
<div class="card-grid">
{% assign featured_tools = site.tools | where_exp: "t", "t.featured_order" | sort: "featured_order" %}
{% for tool in featured_tools %}{% include ticket-card.html item=tool %}{% endfor %}
</div>
<p class="home-section__more"><a href="/tools/" class="btn btn--more">More Tools →</a></p>
</section>

<section class="home-section">
<h2 class="home-section__title">Featured Projects</h2>
<div class="card-grid">
{% assign featured_projects = site.projects | where_exp: "p", "p.featured_order" | sort: "featured_order" %}
{% for project in featured_projects %}{% include ticket-card.html item=project %}{% endfor %}
</div>
<p class="home-section__more"><a href="/projects/" class="btn btn--more">More Projects →</a></p>
</section>

<section class="home-section">
<h2 class="home-section__title">Organizations We've Helped</h2>
<ul class="client-list">
{% assign _clients = site.data.partners | where: "client", true %}
{% for client in _clients %}
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

