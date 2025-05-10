# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repository contains a personal portfolio website built with Hugo, using the Blowfish theme. It's a multilingual static site (French and English) deployed to GitHub Pages.

## Technology Stack

- **Static Site Generator**: Hugo (version 0.123.8 with extended features)
- **Theme**: Blowfish (installed as a submodule)
- **Deployment**: GitHub Pages via GitHub Actions
- **Languages**: Multilingual with French (primary) and English
- **Assets**: Custom CSS/JS for animations and styling

## Common Commands

### Local Development

```bash
# Install Hugo (if not already installed)
# macOS
brew install hugo

# Ubuntu/Debian
sudo apt-get install hugo

# Start local development server with live reload
hugo server -D

# Build site for production (outputs to ./public/)
hugo --minify
```

### Content Management

```bash
# Create a new post (French)
hugo new content/projets/new-project/index.md

# Create corresponding English version
hugo new content/projets/new-project/index.en.md
```

## Project Structure

- **config/_default/**:
  - `hugo.toml`: Main Hugo configuration
  - `params.toml`: Theme/site parameters
  - `languages.*.toml`: Multilingual settings
  - `menus.*.toml`: Navigation menus by language

- **content/**: Site content organized by sections
  - Content is bilingual with `.md` (French) and `.en.md` (English) files

- **assets/**: Custom CSS/JS and images
  - `css/`: Custom styling (animations, profiles, projects)
  - `js/`: UI enhancements (animations, typing effects, theme switcher)
  - `img/`: Images including profile picture and project screenshots

- **layouts/partials/**: Custom layout overrides

- **public/**: Generated site (deployment output)

## Deployment Process

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch:

1. GitHub Actions workflow is triggered on push to main
2. Hugo builds the site with the `--minify` flag
3. Built site is deployed to the gh-pages branch

The workflow file is located at `.github/workflows/gh-pages.yml`.

## Adding New Content

When adding a new project:

1. Create a new directory under `content/projets/`
2. Add `index.md` (French) and `index.en.md` (English) files with proper front matter:

```yaml
---
title: "Project Title"
description: "Brief description of the project"
date: 2023-04-15
draft: false
tags: ["tag1", "tag2"]
categories: ["category"]
series: ["series-name"]
---

Content goes here...
```

3. Add project images to `assets/img/projets/`

## Site Customization

- **Theme settings**: Modify `config/_default/params.toml`
- **CSS customization**: Edit files in `assets/css/`
- **JS functionality**: Modify files in `assets/js/`