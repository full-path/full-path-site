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
{% assign drawer_tools = "" | split: "" %}
{% assign drawer_projects = "" | split: "" %}
{% for slug in item.related %}
  {% assign _related_tool = site.tools | where: "slug", slug | first %}
  {% if _related_tool %}
    {% assign drawer_tools = drawer_tools | push: _related_tool %}
  {% else %}
    {% assign _related_project = site.projects | where: "slug", slug | first %}
    {% if _related_project %}{% assign drawer_projects = drawer_projects | push: _related_project %}{% endif %}
  {% endif %}
{% endfor %}
{% assign drawer_count = drawer_tools.size | plus: drawer_projects.size %}
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
  {% if drawer_count > 0 %}
  <button class="card-drawer__handle" aria-expanded="false">
    <span>Examples</span>
    <span class="card-drawer__chevron" aria-hidden="true"></span>
  </button>
  <div class="card-drawer">
    <div class="card-drawer__inner">
      {% include card-drawer-content.html drawer_tools=drawer_tools drawer_projects=drawer_projects %}
    </div>
  </div>
  {% endif %}
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
{% for tool in featured_tools %}{% include ticket-card.html item=tool default_icon='/assets/images/tool.svg' %}{% endfor %}
</div>
<p class="home-section__more"><a href="/tools/" class="btn btn--more">More Tools →</a></p>
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

<section class="home-contact-band">
<p class="home-contact-band__lead">Interested in working with us? We'd love to hear from you!</p>
<a href="#contact-modal" class="btn btn--primary"><img src="{{ '/assets/images/message.svg' | relative_url }}" alt="" class="btn__icon">Get in touch</a>
</section>

