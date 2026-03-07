# Instructions: Website, Web Demo, and Desktop App

This document explains how the **website** (landing page), **web-app demo**, and **desktop app** relate—and how to work on them without mixing concerns. It’s written for a future Cursor (or human) working in this repo.

---

## What exists and what we want

- **Desktop app**  
  Electron app (Mac/Windows). Entry: `main.js` + `preload.js` + `calendar.html`.  
  Built with: `npm run build` (or `build:mac` / `build:win`). Output: `dist/`.

- **Website**  
  A **landing page** (e.g. marketing, “Try the demo”, “Download”) that will be served at the site root.  
  It should **not** be part of `npm run build`. The desktop build must remain **desktop-only**.

- **Web-app demo**  
  The same calendar experience as the desktop app, but run in the browser so visitors can try it on the site.  
  The **demo is the existing `calendar.html`** (and any assets it needs, e.g. `demo-data.json`). No separate “web build”—we serve that file as the demo.

---

## Separation rules

1. **`npm run build`**  
   - Must **only** build the **desktop app** (Electron).  
   - Must **not** build or bundle the website/landing page.  
   - Keep using `electron-builder` for the desktop app only; do not add the landing page or a “website” target to this script.

2. **Website (landing)**  
   - Lives in this repo (e.g. `index.html` at repo root, or a `website/` folder if you prefer).  
   - Static HTML/CSS/JS (and assets). No build step required for the site itself.  
   - Deployed by uploading/serving those static files (e.g. GitHub Pages, Netlify, or any static host).

3. **Web-app demo**  
   - **Is** `calendar.html` (and its dependencies like `demo-data.json`).  
   - No separate “web build”: the same file that Electron loads is the one we serve for the demo.  
   - The landing page should link to the demo (e.g. `/calendar.html` or `/calendar` depending on how you serve the site).

---

## Suggested repo layout

- **Landing page:** `index.html` at repo root (or `website/index.html` if you use a `website/` folder).
- **Web demo:** `calendar.html` (and `demo-data.json`, etc.) at repo root (or under `website/` if everything web-facing lives there).
- **Desktop app:** `main.js`, `preload.js`, and in `package.json` `build.files` list only what the Electron app needs (e.g. `calendar.html`), **not** the landing page.

When deploying the **site**, you deploy the static files (e.g. `index.html` + `calendar.html` + `demo-data.json` + any assets). No `npm run build` for the website.

---

## Local development

- **Desktop app:**  
  `npm start` (Electron) or `npm run dev` (serve current dir at port 3000, then open `calendar.html` in the app if needed).

- **Website + demo (no build):**  
  Serve the repo (or the folder that contains `index.html` and `calendar.html`) with any static server, e.g.  
  `npx serve . -p 3000`  
  Then:  
  - Landing: `http://localhost:3000/` (or `http://localhost:3000/index.html`)  
  - Demo: `http://localhost:3000/calendar.html`  

You can add a script like `"dev:site": "npx serve . -p 3000"` if you want to distinguish “running the site for landing + demo” from other dev commands—but still **do not** make `npm run build` build the website.

---

## Summary for a future Cursor/developer

- **Do not** wire the landing page or any “website” build into `npm run build`.  
- **Do** keep the web demo as “serve `calendar.html` (and its assets) on the site.”  
- **Do** add and edit the landing page as static files in this repo and deploy them separately from the desktop app build.
