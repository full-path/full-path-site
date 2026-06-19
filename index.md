---
title: "Full Path Transit Technology"
layout: splash
header:
  overlay_color: "#fff"
  overlay_filter: "rgba(112, 66, 20, 0.5)"
  overlay_image: /assets/images/hero.jpg
  cta_url: /services/
  cta_label: "See what we do"
excerpt: "Wholistic Thinking and Tools for Community Transportation"
feature_row:
  - image_path: /assets/images/christopher-robin-ebbinghaus-681475-unsplash.jpg
    alt: "RideSheet scheduling tool"
    title: "RideSheet"
    excerpt: "Open-source scheduling and trip coordination for small and rural demand-responsive transportation providers."
    url: "/ridesheet/"
    btn_label: "Learn about RideSheet"
    btn_class: "btn--primary"
  - image_path: /assets/images/aaron-burden-151465-unsplash.jpg
    alt: "Published projects and whitepapers"
    title: "Projects & Publications"
    excerpt: "Whitepapers, assessment tools, and research on transit technology decision-making and readiness."
    url: "/projects/"
    btn_label: "View projects"
    btn_class: "btn--primary"
  - image_path: /assets/images/tim-graf-229428-unsplash.jpg
    alt: "Transit technology consulting services"
    title: "Services"
    excerpt: "Technology assessment, planning, and implementation support for transit agencies and state DOTs."
    url: "/services/"
    btn_label: "See what we do"
    btn_class: "btn--primary"
---

{% include feature_row id="feature_row" type="grid" %}

## Recent Articles
{% for post in site.posts limit:3 %}
  {% include archive-single.html %}
{% endfor %}

---
Find older posts in the [blog archive]({{ "blog" | relative_url }})
