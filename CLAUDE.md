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
  Transit Assistance Program (NRTAP) provides strategic financial support
- Explicitly designed for organizations without dedicated IT staff or reliable broadband

**[PLACEHOLDER — Kevin to fill in]:**
- RideSheet documentation URL: `___________`
- RideSheet GitHub repository URL: `___________`
- YouTube channel URL/handle for RideSheet videos: `___________`
- Systems Thinking eLearning course URL: `___________`

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
File: `assets/downloads/RFIs-as-Tools.pdf`

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
- **Generator:** Jekyll
- **CSS:** Custom SCSS via Jekyll's native `jekyll-sass-converter`. No Node.js build step.
  File structure: `_sass/_tokens.scss`, `_base.scss`, `_layout.scss`, `_components.scss`
  imported by `assets/css/main.scss`.
- **CMS:** Decap CMS (formerly Netlify CMS) at `/admin` — browser-based editor for blog posts
- **Hosting:** GitHub Pages or Netlify (TBD; either works with this stack)
- **Repo:** https://github.com/keviniano/full-path-site

### Page Structure
```
/               Home — hero, company overview, three feature cards, link to projects
/tools/         Listing of all tools (free, usable now); filterable by category
/tools/ridesheet/          RideSheet dedicated page
/tools/framework/          Framework whitepaper dedicated page
/tools/readiness-assessment/  Assessment Tool dedicated page
/projects/      Full listing of past client/published work
/projects/ridesheet-aarp-report/
/projects/hopelink-one-call/
/projects/rural-incubator/
/services/      What Full Path offers
/about/         Kevin Chambers bio
/contact/       Contact form (footer nav only — not in header)
/blog/          Blog archive; no posts on home page
```

### Source File Organization
```
tools/
  ridesheet.md             → /tools/ridesheet/
  framework.md             → /tools/framework/
  readiness-assessment.md  → /tools/readiness-assessment/
tools.md                   → /tools/
projects/
  ridesheet-aarp-report.md
  hopelink-one-call.md
  rural-incubator.md
projects.md                → /projects/
assets/
  downloads/               downloadable PDFs and other files for visitors
  images/
  css/
```

### Navigation
Header nav is driven by `_data/navigation.yml`. Items with `footer_only: true` are
suppressed from the header but still appear in the footer. Contact is currently footer-only.

### Data Files
Dynamic content is managed via `_data/` YAML files, not API calls:

**`_data/tools.yml`** — Tools page listing and cards
```yaml
- title: "Tool name"
  description: "One or two sentence description."
  permalink: "/tools/slug/"   # or direct URL for downloads/external links
  category: "Guidance"        # Guidance | Software | Assessment
  cta: "Learn more"           # optional; defaults to "Learn more"
  newtab: true                # optional; adds target="_blank" to the card button
```

**`_data/ridesheet_videos.yml`** — YouTube video grid on /tools/ridesheet/
```yaml
- id: "YOUTUBE_VIDEO_ID"
  title: "Video title"
  date: "YYYY-MM-DD"
```

**`_data/linkedin_posts.yml`** — Curated LinkedIn activity section
```yaml
- title: "Post title or topic"
  date: "YYYY-MM-DD"
  url: "https://www.linkedin.com/posts/..."
  excerpt: "One or two sentence summary."
```

Update these files manually when new content is published. Do not introduce YouTube
Data API calls or LinkedIn scraping — both create fragile dependencies with no meaningful
benefit for a site of this scale.

### LinkedIn Strategy
LinkedIn does not expose a usable public feed API. The correct approach is:
1. Write substantive posts on the Jekyll site (canonical record)
2. Share the link on LinkedIn (distribution)
3. Maintain `_data/linkedin_posts.yml` for curated LinkedIn-only posts worth surfacing on-site

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
- Do not modify `_posts/` content without explicit instruction; existing posts migrate as-is
- Decap CMS config lives at `admin/config.yml` — keep it in sync with `_config.yml`
- Downloadable files go in `assets/downloads/`
- Tool pages go in `tools/`; project pages go in `projects/`

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
--color-accent:         #1a5276  (used for Software category badges)
--color-text-primary:   #1c1208  (warm near-black)
--color-text-secondary: #5c4f3d  (warm medium gray)
--color-bg:             #faf8f5  (warm off-white)
--color-bg-secondary:   #f0ece6  (slightly darker warm surface)
--color-border:         #ddd5c8  (warm light border)
```

### Typography
- **Body:** `system-ui, sans-serif` — 19px / 1.7 line-height
- **Headings (h1–h4):** `Raleway, system-ui, sans-serif` — weight 800 — loaded from Google Fonts
- **UI/meta (buttons, badges, labels):** `system-ui, sans-serif`
- Raleway is already loaded globally for the SVG logo; no extra network cost for headings

### Spacing scale
Use multiples of 8px. Key values: 8 16 24 32 48 64 96

### Max content width
Prose: 68ch
Page container: min(90vw, 1100px), centered

### Tool category badges
Three defined categories with distinct colors:
- `Guidance` — brand red tint
- `Software` — accent blue tint
- `Assessment` — secondary text tint

Add new categories by adding a `.tool-category--[slug]` rule in `_sass/_components.scss`
and using the matching category string in `_data/tools.yml`.
