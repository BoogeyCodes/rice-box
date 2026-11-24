# Rice Box — Explosive Flavour in Every Bite

A premium, fully-responsive restaurant website for **Rice Box** — a Chinese & Thai kitchen in Park View City, Lahore. Built as an Asian neon night-market experience: orange + jade neon on black, flickering signage, rising-steam background, and an accordion menu with real Half/Full price chips.

**Live:** https://boogeycodes.github.io/rice-box/

## Features
- Full menu from the real card — Afghani Rice, 15 Chinese main-course gravies (Half/Full), Thai gravies, seafood, fried rice, noodles, chop suey, momos, starters, pasta, soups, beverages
- Accordion menu interaction with Half/Full price chips
- Item customizer (sides add-ons, special instructions, quantity)
- Shopping cart with localStorage persistence
- WhatsApp checkout — collects name & address, sends a clean plain-text order to the branch
- Cursor-reactive 3D tilt effects and a canvas rising-steam animated background
- Fully responsive, theme-pinned (device dark mode won't alter brand colours)

## Tech
React 18 · Vite 5 · Tailwind CSS 3

## Develop
```bash
npm install
npm run dev
```

## Build
```bash
npm run build      # root base, for Railway / custom domain
VITE_BASE_PATH=/rice-box/ npm run build   # GitHub Pages sub-path
```

Deployment to GitHub Pages is automated via `.github/workflows/deploy.yml` on every push to `main`.
