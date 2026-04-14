# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the website for **Urban | Rural Design** (`urbanruralarch.com`), an architecture firm. It's a Jekyll 3 static site managed via CloudCannon CMS, using Compass/SASS for styles and Gulp 3 as the build tool.

## Setup

```bash
bundle install   # install Ruby gems
npm install      # install Node packages
```

## Development Commands

```bash
gulp             # compile SASS (via Compass), build Jekyll, start BrowserSync with live reload
jekyll build     # build site to _site/ without serving
```

For deployment:
```bash
gulp deploy      # runs jekyll-build + sass-deploy (minified CSS)
```

There are no tests.

## Architecture

### Collections & Content

Content is organized into Jekyll collections defined in `_config.yml`:

- **`_projects/`** — architecture project pages, each with front matter: `sort_order`, `title`, `image_path`, `featured_project`, `location`, `categories`, `secondary_categories`, `images[]`. Use `_projects/_defaults.md` as a template.
- **`_sort_order/`** — standalone markdown files whose `title` field is a number (1–21); used to control project display order via the `sort_order` array in project front matter.
- **`_testimonials/`** — testimonial entries (not output as pages).
- **`pages/`** — static pages (about, contact, press, projects, services, testimonials).

### Categories

Primary categories (defined in `_config.yml`): Commercial, Residential, Historic Preservation, On The Boards.  
Secondary categories: Restaurant, Education, Passive Design, Mountain.

### Layouts & Includes

Layouts in `_layouts/`: `default.html`, `page.html`, `projects.html`, `project-view.html`, `category.html`, `tag.html`, `press.html`, `testimonials.html`, `service.html`, `subpage.html`, `front.html`, `default-front.html`, `page-sidebar.html`, `confirm.html`, `contact.html`.

Shared partials in `_includes/`: `head.html`, `header.html`, `nav.html`, `footer.html`, `sidebar.html`, `contact-form.html`, `scripts.html`, `comments.html`, `browserupgrade.html`.

Navigation is data-driven via `_data/menu.yml`.

### Styles

SASS source lives in `assets/sass/` (entry points: `style.scss`, `print.scss`) with partials in `assets/sass/partials/`. Compass compiles these to `assets/css/`. The Gulp `compass` task uses Singularity GS (grid), Breakpoint, and Toolkit SASS libraries.

### JavaScript

Source JS in `assets/js/dev/` is uglified to `assets/js/prod/` by the `scripts` Gulp task.

### Images

Images are served via Cloudinary (`https://res.cloudinary.com/doe2cfi2y`). The CloudCannon uploads directory is `assets/images/`.

## CloudCannon CMS Notes

- This site is managed through CloudCannon; front matter fields in `_projects/` map to editable CMS fields.
- Do not set `timezone` in `_config.yml` (CloudCannon compatibility issue — documented in the config).
- `strict_front_matter: true` and `liquid.error_mode: strict` are enabled; Liquid template errors will fail the build.
- `robots.txt` currently disallows all crawlers. Before launch, replace it with `USE-WHEN-live--robots.txt`.
- 301 redirects are managed in `301.txt`.
