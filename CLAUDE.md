# Full Path Transit Technology — Site Context for Claude Code

This file provides persistent context about the Full Path business, website architecture,
and content standards. Read it at the start of every session before making any changes.

---

## 1. The Business

**Full Path Transit Technology** (fullpath.io) is a one-person consulting firm founded and
operated by Kevin Chambers, based in the Portland, Oregon metro area. The firm provides
technology strategy, assessment, and implementation support to community transit agencies —
primarily small and rural providers, state departments of transportation, FTA-funded technical
centers, and grant-funded mobility programs.

Full Path's positioning is explicitly anti-hype. The guiding philosophy is **appropriate
technology**: the focus on simplicity, decentralization, sustainability, and empowerment of
the organizations using the technology. A working motto: *"Use technology, not too much,
mostly open"* (a riff on Michael Pollan). This is not a marketing position — it is the actual
analytical lens applied to client work.

**Slogan**
"Technology strategy and tools for community transportation"

**Target clients:**
- Small and rural transit agencies (often 5–50 staff, no dedicated IT department)
- State DOTs with transit oversight responsibilities (Oregon, Minnesota, Arizona, and similar)
- Mobility management programs and human services transportation coordinators
- Grant-funded pilot projects requiring technical oversight

**Kevin Chambers background:**
- Founder and Principal, Full Path Transit Technology (2018–present)
- Chief Technology Officer, Ride Connection, Portland OR (2010–2017) — led tech strategy,
  built four open-source software tools, managed scheduling systems and call center ops
- Oregon State University, BA Spanish, Magna Cum Laude
- Consistent focus on open-source software, data standards, and organizational capacity
  building as the path to sustainable technology adoption

---

## 2. Key Projects and Assets

### RideSheet
The flagship open-source product. RideSheet is a Google Sheets-based scheduling,
dispatching, and trip coordination tool built for small and rural demand-responsive
transportation providers. It was initially funded by the AARP Public Policy Institute and
piloted with two agencies in Lake County, Oregon (Inner Court Family Center and Lake County
Senior Center Association). As of March 2026, it is used by 7 agencies in 4 states.

Key facts about RideSheet:
- Built on Google Sheets + Google Apps Script; no software license cost
- Tracks customers, trips, and runs; manages the full data lifecycle from scheduling
  through completed-trip reporting
- Supports inter-agency trip coordination via a standardized API (based on TCRP Report 210
  Transactional Data Specification)
- Open source; Garnet Consulting provides software development support; National Rural
  Transit Assistance Program (NRTAP) provides strategic financial support (since 2024)
- Explicitly designed for organizations without dedicated IT staff or reliable broadband

**Known URLs:**
- RideSheet documentation: https://docs.ridesheet.org
- YouTube channel (RideSheet + Full Path videos): https://www.youtube.com/@fullpathtransit
- Systems Thinking eLearning course ("Thinking Strategically About Transit Technology",
  8-module course developed for the CCAM Technical Assistance Center): https://www.ccam-tac.org/strategy/

**[PLACEHOLDER — Kevin to fill in]:**
- RideSheet GitHub repository URL: `___________`

### A Framework for Making Successful Technology Decisions
A practical whitepaper published by the National Center for Applied Transit Technology
(N-CATT). Co-authored with Lara Bjork. Originally published February 2022; revised and
updated April 2025. Covers a structured, capacity-building-first approach to technology
decision-making for transit agencies. Grounded in systems thinking and design thinking.
URL: https://n-catt.org/guidebooks/a-framework-for-making-successful-technology-decisions/

### Technology Readiness and Resilience Assessment Tool
An online self-assessment tool for transit agencies, also published through N-CATT.
Co-developed with Apgar & Associates, Access Tech, and Garnet Consulting. Originally
published June 2022; revised September 2024. Rates agencies across five dimensions:
Contract Management & Organization, Systems & Culture, Performance Measurement,
Organizational Resilience, and Cybersecurity. Uses a CMMI-based maturity model (levels 1–4).
URL: https://n-catt.org/resources/technology-readiness-assessment/

### RFIs as Tools in Transit Technology Procurements
A two-page practical guide (Version 3, December 2021) funded by Oregon DOT. Explains how
to use Requests for Information as a deliberate procurement tool — for gathering market
intelligence, building vendor relationships, and reducing risk before issuing an RFP.
Includes a Dos/Don'ts section and a reusable RFI outline.
File: `assets/downloads/RFIs-as-Tools.pdf` · Page: `/tools/rfis-as-tools/`

### Selected Other Published Work
- *RideSheet: Rural Transportation Benefits from New Coordination Technology*, AARP, March 2021
  https://www.aarp.org/content/dam/aarp/ppi/2021/03/ridesheet-rural-transportation-benefits-new-coordination-technology.doi.10.26419-2Fppi.00131.001.pdf
- *One-Call/One-Click Business Plan*, King County Mobility Coalition (via Hopelink), January 2020
  https://irp-cdn.multiscreensite.com/c86a044e/files/uploaded/KCMC%20One-Call_One-Click%20Business%20Plan%20-%20FINAL_6H7oY39qTdyGyaFD9IgL.pdf
- *Technology Support for the Rural Transportation Incubator*, Age Friendly Arizona / MAG, March 2020
  https://www.agefriendlyaz.org/Portals/4/Technology-Support-for-the-Rural-Transportation-Incubator.pdf

---

## 3. Site Architecture

### Stack
- **Generator:** Jekyll (kramdown, jekyll-feed)
- **CSS:** Custom SCSS via Jekyll's native `jekyll-sass-converter`. No Node.js build step.
  File structure: `_sass/_tokens.scss`, `_base.scss`, `_layout.scss`, `_components.scss`
  imported by `assets/css/main.scss`.
- **Hosting:** GitHub Pages or Netlify (TBD; either works with this stack)
- **Repo:** https://github.com/keviniano/full-path-site
- No CMS. Content is edited directly in the repo. (Decap CMS was once planned; it was
  never set up and is no longer intended.)

### Page Structure
```
/               Home — hero, intro, Who We Help, services, featured tools/projects,
                client logos, closing contact band
/services/      Service categories with drawer cards
/tools/         Listing of all tools (ticket cards, filterable by category)
/tools/ridesheet/            RideSheet promo page (featured-tool layout: hero image,
                             wordmark, highlight cards, videos, training drawer)
/tools/framework/            Framework whitepaper
/tools/readiness-assessment/ Assessment Tool
/tools/rfis-as-tools/        RFI guide (links to the PDF download)
/projects/      Listing of past client/published work
/projects/ridesheet-aarp-report/   /projects/find-a-ride/   /projects/rural-incubator/
/about/         Kevin bio, stats, tech skills, trusted partners (Garnet, Access Tech),
                memberships
/blog/          Blog archive; no posts on home page
Contact         A :target-based modal on every page (#contact-modal), opened from the
                nav/footer and CTA buttons. No standalone contact page in the nav.
```

### Source File Organization
```
_tools/         Tool pages (Jekyll collection, output: true)
_projects/      Project pages (Jekyll collection, output: true)
_posts/         Blog posts (migrated as-is; do not edit without instruction)
_layouts/       default (root) · splash (hero pages) · about (splash + <article>)
                tool · tool-featured (RideSheet-style promo) · project · single
                (posts/legal) · archive (blog listing)
_includes/      navigation, footer, contact-modal, ticket-card, service-card,
                partner-card, card-drawer-content, resource-list, video-grid,
                category-icon
_data/          see Data Files below
assets/
  downloads/    downloadable PDFs and other files for visitors
  images/       (resource thumbnails go in assets/images/resources/)
  css/
tools.md → /tools/    projects.md → /projects/    index.md, services.md, about.md, blog.html
```

Layout inheritance: everything extends `default.html`; `about.html` extends `splash.html`.
Tools/projects reference partners and clients by key; layouts resolve them against
`_data/partners.yml`.

### Navigation
Header nav is driven by `_data/navigation.yml`. Items with `footer_only: true` are
suppressed from the header but still appear in the footer (currently Blog and Contact).
The Contact item links to `#contact-modal`, not a page.

### Data Files
Dynamic content is managed via `_data/` YAML files, not API calls:

- **`categories.yml`** — the five service/tool categories (Strategy, Implementation,
  Software, Engagement, Interoperability): short/long names, icon, color, description,
  bullets. Drives the services page, category badges (`--cat-color`), and filters.
- **`partners.yml`** — partners and clients, keyed. Flags: `client: true` (home page logo
  list), `trusted_partner: true` (About page partner cards with `about`/`relationship`
  paragraph arrays).
- **`who_we_help.yml`** — audience cards on the home page.
- **`resources.yml`** — shared "Related Resources" entries (key, name, year, type, url,
  optional thumbnail, description). Pages opt in via front matter
  `resources: [key-one, key-two]`; works on tools, projects, and posts. Schema is
  documented in the file's comments.
- **`resource_types.yml`** — maps resource `type` (lowercase; matched case-insensitively)
  to a default icon in `assets/images/resource-types/`, shown when a resource has no
  thumbnail. Unmapped types get a text-only placeholder.
- **`ridesheet_videos.yml`** — videos on /tools/ridesheet/, with `series:
  getting-started` (Get Started section) or `series: university` (collapsed drawer),
  plus optional `order`. Schema in file comments.
- **`authors.yml`** — post author metadata.

Update these files manually when new content is published. Do not introduce YouTube
Data API calls or LinkedIn scraping — both create fragile dependencies with no meaningful
benefit for a site of this scale. (To fetch YouTube titles one-off, the oEmbed endpoint
and playlist RSS feeds work without an API key.)

### Relationships Between Tools, Projects, Resources, and Partners
Tool and project pages connect to each other and to shared data through four
mechanisms. Each has a specific job — don't blur them together:

- **Resources** — reuse a `_data/resources.yml` key across multiple pages when they
  genuinely reference the same underlying document, tool, or webpage (e.g.
  `ncmm-typology-framework` is used by three tool pages that all meaningfully discuss
  the NCMM typology). This is expected and correct: one entry, one name/description/
  thumbnail, reused everywhere it applies. Before adding a new resource entry, check
  for an existing one with the same URL to avoid two near-duplicate cards describing
  the same thing. Once something is registered as a resource, don't also add a second,
  bespoke front-matter field pointing at the same URL (e.g. a one-off `report_url:`) —
  reference the resource key everywhere instead.
- **Partners/clients** — always write `client:` and `partners:` as YAML arrays, even
  for a single value (`client: [odot]`, not `client: odot`); both layouts iterate
  these as lists regardless, so the array form is the one true shape. If a partner's
  `about`/`relationship` blurb in `partners.yml` would link to something that also has
  its own Full Path tool or project page, link to the internal page rather than the
  partner's external one.
- **Prose links** — link from a tool/project's body content to another internal
  tool/project page when the connection is actually being discussed in that sentence.
  Always use `{{ '/tools/slug/' | relative_url }}` (or `/projects/slug/`), never a bare
  path. Prose links explain *why* two pages relate; they don't need to be reciprocal
  and aren't the primary way a relationship should be discoverable — that's `related:`.
- **`related:` front matter** — the structural, always-visible way to connect two
  tool/project pages, e.g. `related: [ncmm-technology-typology, systems-thinking-course]`
  (values are the target page's filename slug). Rendered by `_includes/related-pages.html`
  as a plain "Related" list near the bottom of the page, independent of whether the
  connection is also mentioned in prose. Add it in both directions when two pages have
  a substantive, standalone connection a reader would want to explore — not
  automatically just because two pages happen to share a resource or partner key.

### LinkedIn Strategy
LinkedIn does not expose a usable public feed API. The correct approach is:
1. Write substantive posts on the Jekyll site (canonical record)
2. Share the link on LinkedIn (distribution)
3. If LinkedIn-only posts are ever worth surfacing on-site, curate them manually in a
   data file (none exists yet)

Do not attempt to automate pulling from LinkedIn. If asked to do so, decline and explain why.

---

## 4. Voice and Content Standards

### Writing Voice
Full Path's published writing is direct, opinionated, and grounded in field experience.
It does not hedge unnecessarily, does not inflate small points into bullet lists, and does
not use consultant-speak ("leverage," "solutions," "stakeholder alignment"). It takes
positions and defends them. It acknowledges complexity without using complexity as an
excuse to avoid conclusions.

The audience is transit professionals — often non-technical managers, program officers,
and agency directors — who are smart but time-constrained and skeptical of hype.
Avoid jargon they'd have to decode (e.g., "enterprise software" → "the big software
vendors").

**Stylistic markers from existing blog posts:**
- Willing to call out industry failures directly ("barbarian hordes from Silicon Valley")
- Uses apt analogies and occasional wit without sacrificing clarity
- Mixes strategic framing with concrete operational detail
- First-person ("I", "we") for blog posts; second-person ("your agency") for instructional content

### Content to Avoid
- Promotional language that doesn't connect to substance
- Implying certainty where Kevin has expressed appropriate caution in his published work
  (e.g., RideSheet is not a silver bullet — say so where relevant)
- Overstating the size or scope of Full Path (it is a solo consultancy with a clear niche)
- Tech optimism for its own sake — Full Path's value proposition is skeptical rigor, not
  enthusiasm for any particular technology

### Terminology
- "Community transit" or "community transportation" — not "public transit" generically
- "Demand-responsive transportation" — not "on-demand transit" (which has rideshare connotations)
- "Small and rural agencies" — primary client descriptor
- "Open-source" — Full Path consistently advocates for and builds open-source tools
- "Appropriate technology" — core philosophical term; use it when relevant, don't overuse it

---

## 5. Development Conventions

- Run `bundle exec jekyll build` to verify output before committing changes
- Keep Liquid templates readable; comment non-obvious logic
- `_data/` files are the source of truth for dynamic content — don't hardcode content
  that belongs in a data file
- Liquid gotcha: a `_data/*.yml` file containing only comments parses to `false`, and
  `where`/`sort` filters crash on it. Guard with
  `{% unless x %}{% assign x = "" | split: "" %}{% endunless %}` (see resource-list.html,
  video-grid.html)
- Do not modify `_posts/` content without explicit instruction; existing posts migrate as-is
- Downloadable files go in `assets/downloads/`
- Tool pages go in `_tools/`; project pages go in `_projects/`

---

## 6. Design Tokens

### Color
Brand accent (logo color): #b12d00
Use for: nav logo, link underlines on hover, active state indicators, filter button active
state. Not for large backgrounds — too dark and saturated.

```
--color-brand:          #b12d00
--color-brand-dark:     #4a1200
--color-brand-light:    #d86f3e
--color-accent:         #1a5276
--color-text-primary:   #1c1208  (warm near-black)
--color-text-secondary: #5c4f3d  (warm medium gray)
--color-bg:             #faf8f5  (warm off-white)
--color-bg-secondary:   #f0ece6  (slightly darker warm surface)
--color-border:         #ddd5c8  (warm light border)
```

### Typography
- **Body:** `system-ui, sans-serif` — 1.2rem / 1.7 line-height
- **Headings (h1–h6):** `Raleway, system-ui, sans-serif` — weight 800 — loaded from Google Fonts
- **UI/meta (buttons, badges, labels):** `system-ui, sans-serif`
- **Display headings are fluid** via `clamp()`: splash hero h1, home intro, home section
  titles, tool page header, blog post hero. Rule of thumb: clamp earns its keep above
  ~2rem; content headings (article h2 and below) stay fixed.

### Spacing scale
Multiples of 8px via `--space-*` tokens (`--space-1: 0.5rem` … `--space-12: 6rem`).

### Max content width
Prose: 68ch (`--max-width-prose`)
Page container: min(90vw, 1100px) (`--max-width-page`), centered

### Category badges and colors
Categories are defined in `_data/categories.yml`, each with its own `colors.main`.
Badges and filter buttons take the color via the `--cat-color` / `--filter-color`
custom properties set inline from the data file — there are no per-category CSS
classes to maintain. To add a category, add an entry (with icon + color) to
`categories.yml`.
