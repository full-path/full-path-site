---
title: "RideSheet"
layout: tool-featured
description: "Free, open-source scheduling, dispatching, and trip coordination for small and rural demand-responsive transportation providers. Built on Google Sheets."
icon: /assets/images/ridesheet-van.svg
year: 2026
categories: [Software,Strategy,Engagement,Interoperability,Implementation]
order: 1
featured_order: 1
partners: [rtap,garnet]
permalink: /tools/ridesheet/
hero:
  name_image: /assets/images/ridesheet_name.svg
  image: /assets/images/open_road.jpg
  position: "center 70%"
  tagline: "If you've grown too big for paper but are too small for the big software systems, then RideSheet may be what you've been waiting for."
highlights:
  - icon: /assets/images/small_bus.svg
    title: "Sized for small agencies"
    text: "Designed for providers getting off paper. Kept simple, with no dedicated IT staff required."
  - icon: /assets/images/sheets.svg
    title: "Built on Google Sheets"
    text: "Runs on tools your staff already know. No servers to maintain and no new systems to learn from scratch."
  - icon: /assets/images/software-dev.svg
    title: "Open source"
    text: "No license fees and no vendor lock-in. The code is public, and agencies shape where it goes next."
---

RideSheet is a free, open-source scheduling and trip coordination system for small and rural demand-responsive transportation providers — the agencies that typically have no dedicated IT staff and no budget for expensive proprietary software.

Built on Google Sheets and Google Apps Script, RideSheet handles the full data lifecycle from the moment a person requests a ride through end-of-month reporting. It tracks every key data element, including customers, trips, runs, drivers, vehicles, and common addresses.

<div class="video-spotlight">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/weO8yjyOWzU" title="What Is RideSheet? An Overview for Small DRT Providers" allowfullscreen loading="lazy"></iframe>
  </div>
  <p class="video-embed__title">What Is RideSheet? An Overview for Small DRT Providers</p>
</div>

## Who Uses It

Initially funded by the AARP Public Policy Institute and piloted with two agencies in Lake County, Oregon, RideSheet has since been adopted across 4 states, with new agencies being added regularly.

<div class="video-grid">
  <div>
    <div class="video-embed">
      <iframe src="https://www.youtube.com/embed/vyeo6p3SFAU" title="Teamwork: Clay County's Secret to Success with New Technology" allowfullscreen loading="lazy"></iframe>
    </div>
    <p class="video-embed__title">Teamwork: Clay County's Secret to Success with New Technology</p>
  </div>
  <div>
    <div class="video-embed">
      <iframe src="https://www.youtube.com/embed/YuVxQJNfL6Q" title="How Lake County Made the Switch to RideSheet" allowfullscreen loading="lazy"></iframe>
    </div>
    <p class="video-embed__title">How Lake County Made the Switch to RideSheet</p>
  </div>
</div>

Since 2024, RideSheet has been one of the technology tools supported by the National Rural Transit Assistance Program.

## Get Started

<div class="btn-group">
  <a href="https://docs.ridesheet.org" class="btn btn--primary">Go to RideSheet Documentation</a>
  <a href="#contact-modal" class="btn btn--outline">Want a demonstration? Contact us!</a>
</div>

{% include video-grid.html series="getting-started" %}

## RideSheet University

Short training videos covering day-to-day tasks from scheduling through reporting.

{% assign university_videos = site.data.ridesheet_videos %}
{% unless university_videos %}{% assign university_videos = "" | split: "" %}{% endunless %}
{% assign university_videos = university_videos | where: "series", "university" %}
{% if university_videos.size > 0 %}
<div class="drawer-box">
  <button class="card-drawer__handle" aria-expanded="false">
    <span>Show all {{ university_videos.size }} training videos</span>
    <span class="card-drawer__chevron" aria-hidden="true"></span>
  </button>
  <div class="card-drawer">
    <div class="card-drawer__inner">
      {% include video-grid.html series="university" %}
    </div>
  </div>
</div>
{% else %}
<p><em>Videos coming soon. Check back for demonstrations and tutorials.</em></p>
{% endif %}
