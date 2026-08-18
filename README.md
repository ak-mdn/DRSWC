# The O Concept™ — Motion Studies

Candidate hero animations for **The O Concept™** (Dr SW Clinics, 77 Harley Street),
published as a private review link for the client.

**Live:** https://ak-mdn.github.io/DRSWC/

## What this is

Five directions for the hero animation, each rendered behind the real hero copy —
because the brief is *"more animation without distracting from the message"*, and an
effect judged in isolation doesn't answer that. The **Hide copy** button shows the
motion on its own; the controls under each study change speed, density and colour live.

| # | Study | Technique |
| --- | --- | --- |
| 01 | Golden cells | WebGL — analytic ray/ellipsoid intersection, biconcave red cells in a golden fibre channel |
| 02 | Stem cells | WebGL — true Snell refraction; the cords are sampled along the bent ray |
| 03 | The golden helix | Canvas — DNA as jewellery, real motion blur from an accumulation buffer |
| 04 | Cell fusion in liquid gold | WebGL — raymarched metaballs, metal shading with fresnel |
| 05 | Intertwining light strings | Canvas — torus-knot weave, depth-shaded, bokeh |

## Stack

Deliberately minimal — no Tailwind, no Three.js, no GSAP. Every scene is raw WebGL or
Canvas 2D, and every class on the page is hand-written. The whole build is ~325 KB.

- **Astro 5** (static output)
- **Fontsource** — Cormorant Garamond + Manrope, latin subsets only

## Commands

```sh
npm install
npm run dev       # local dev server
npm run build     # static build → dist/
npm run preview   # serve the production build
```

## Deployment

GitHub Pages via `.github/workflows/deploy.yml`, on every push to `main`.

`site` and `base` in `astro.config.mjs` are tied to the repo name — if the repo is
renamed, both must change or every asset 404s.

The page is `noindex, nofollow`. It is a private review link, not a public page: anyone
with the URL can view it, but search engines won't list it.

## Relationship to the main site

None. This shares no code with the client site repo — the scenes were copied here so the
review link can't be affected by work in progress, and vice versa. When a direction is
approved it gets ported into the main site properly.
