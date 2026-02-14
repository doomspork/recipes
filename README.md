# Recipes

A personal recipe collection built with [Astro](https://astro.build) and deployed to GitHub Pages.

Recipes are defined as YAML front matter in Markdown files and validated at build time with a Zod schema. Adding a new recipe is as simple as creating a new `.md` file in `src/data/recipes/`.

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:4321/recipes/`.

## Building

```bash
npm run build
npm run preview
```

## Adding a Recipe

Create a new `.md` file in `src/data/recipes/`. The YAML front matter schema:

```yaml
---
title: "Recipe Name"
servings: "4 Servings"
prep_time: "10 minutes"
cook_time: "30 minutes"
total_time: "40m"
method: "Stovetop"
ingredients:
  - amount: "1 cup"
    name: "ingredient name"
  - name: "ingredient without a measured amount"
directions:
  - "Step one."
  - "Step two."
---
```

Optional fields: `prep_time`, `cook_time`, `rest_time`. Use `ingredient_groups` instead of `ingredients` for recipes with sub-sections (see `chicken-and-dumplings.md` for an example).

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.

## License

This project is licensed under the [MIT License](LICENSE).
