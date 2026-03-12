# Minimal Calendar → Web App & Print Studio Strategy

**Purpose:** Kickstart the next build session. Covers product strategy, technical approach, Print Studio build plan, and AI-assisted development pitfalls to avoid.

---

## 1. Product Overview

### What It Is
A **privacy-first visual year planner** that combines:
- **Linear year calendar** – entire year at a glance
- **Events** – multiple calendars, color-coded
- **Habits** – track with marked dates
- **Journals** – multiple journals with daily notes

### Positioning (Not "Another Calendar")
- **Position as:** Visualization tool / year-at-a-glance planner
- **Search for:** "year calendar," "habit calendar," "printable yearly calendar," "visual planner"
- **Taglines:** "Your year, one view" | "Visualize your year. Own your data." | "Calendar, habits, journals. One view. Your data."

---

## 2. Technical Architecture

### Data Storage: localStorage Only (Privacy-First)
- **All data stays on the user's device.** No server ever sees habits, events, journals.
- **Export/Import:** JSON backup. User downloads file, can restore anytime.
- **Why:** Personal journals and calendars contain sensitive data. "Your data never leaves your device" is a core feature.

### localStorage Keys (from `exportData()` in calendar.html ~6793)
```
habits          → JSON string of habit array
calendars       → JSON string of calendar array
events          → JSON string of event array
journals        → JSON string of journal array
currentMode     → "events" | "habits" | "journal"
habit-{id}-{year}-{month}-{day}  → "true" for marked
calendar-{calId}-{year}-{month}-{day}  → event ID for that day
journal-{journalId}-{year}-{month}-{day}  → markdown/HTML content
{year}-{month}-{day}  → legacy day notes (YYYY-M-D format)
```

### Data Format
- See `demo-data.json` for full structure.
- `exportData()` / `handleImportFile()` already handle the JSON format. **Do not change this format** – it enables future migration.

### Deployment
- **Static site:** Deploy `calendar.html` to Vercel, Netlify, or GitHub Pages.
- **No backend required** for the free product.
- Electron build is optional (desktop app).

---

## 3. Monetization: Print Studio

### Model
- **Free:** Full app – calendar, habits, journals, basic browser print.
- **Paid:** Print Studio – customizable templates, layout, colors, margins → export print-ready PDF ($7–9).

### Why This Works
- People search for "printable yearly calendar."
- Your differentiator: **their data** (habits, events, journals) already in the tool.
- Canva-style: free to use, pay for premium output.

### Print Studio Flow
1. User clicks "Design your print" or "Print Studio."
2. **Template gallery** – 5–10 visual styles (minimal, colorful, habit-focused, journal-style, etc.).
3. **Customization** – layout, colors, margins, format (wall poster, desk, A4).
4. **Live preview** – see exactly what they'll get.
5. **"Download PDF"** → Stripe Checkout ($7–9) → client-side PDF generation → download.

### Gating
- **Free to design and preview.** Pay only to export. Lets users see value before paying.

### PDF Generation: Client-Side (Privacy)
- Use **jsPDF** or **html2pdf.js** in the browser.
- Data never leaves the device.
- Stripe handles payment only; no calendar data sent.

### Current Print Implementation
- `printCalendarToPdf()` in calendar.html (~6344) builds HTML and opens print dialog.
- Electron: `main.js` has `print-html` IPC that can save to PDF.
- **Print Studio** = new page/route that wraps this logic with template selection + customization UI, then generates PDF client-side after payment.

---

## 4. Security & Privacy

### Principles
1. **No auth for free product** – zero friction.
2. **localStorage only** – no server storage of user data.
3. **Client-side PDF** – no data sent for PDF generation.
4. **Stripe for payment** – no card data on your server.

### What NOT to Do
- ❌ Anonymous cloud storage (MantleDB, JSONBin) – data would leave device, not secure for journals.
- ❌ Server-side PDF generation – would require sending data to server.
- ❌ Blocking browser print – impossible to fully block; bad UX.

### Future Auth (When Needed)
- Add Supabase/Clerk + backend.
- Migration: "Import your backup?" – user uploads exported JSON or syncs from localStorage.
- JSON format stays the same.

---

## 5. UX Principles

### Free Product
- **Zero friction** – no signup, use immediately.
- **Export prominent** – "Download backup" in menu. Remind users to backup when switching devices.
- **Browser print** – always available (Cmd/Ctrl+P). Don't block it.

### Print Studio
- **Try before buy** – full customization and preview before payment.
- **Clear value** – "Print-ready PDF: optimized layout, proper margins, no cuts."
- **One price** – $7–9 per PDF. No credits.

### Copy to Emphasize
- "Privacy-first – your data stays on your device"
- "Export anytime – you own your data"
- "No accounts, no cloud, no lock-in"

---

## 6. Practical Build Plan

### Phase 1: Web Deployment (Minimal)
1. Deploy `calendar.html` as static site (Vercel/Netlify).
2. Ensure Export/Import are prominent in UI.
3. Add privacy-focused copy to landing/marketing.

### Phase 2: Print Studio
1. **New route/page:** `print-studio.html` or `#print-studio` within calendar.html.
2. **Entry point:** Add "Design your print" button (e.g. next to existing Print button).
3. **Data source:** Read from `localStorage` – same keys as main app. Use `exportData()` logic to gather data.
4. **Template system:** CSS/layout variants. Each template = different `@media print` styles + structure.
5. **Customization UI:** Color pickers, margin sliders, format selector (wall/desk/A4).
6. **Preview:** Render in hidden div or iframe with print styles.
7. **Payment:** Stripe Checkout (one-time). No account required.
8. **PDF:** After successful payment, run jsPDF/html2pdf on the preview DOM. Trigger download.

### Key Files to Modify
- `calendar.html` – add Print Studio entry point, possibly new section or link.
- New: `print-studio.html` (or embedded section) – template gallery, customization, preview, payment flow.
- New: Stripe integration (Checkout session, success redirect).

### Existing Code to Reuse
- `printCalendarToPdf()` – HTML structure, print styles, data gathering.
- `exportData()` – data key patterns.
- `getJournalKey()`, `parseMarkdown()`, `escapeHtml()` – utilities.

---

## 7. AI-Assisted Development Pitfalls (Cursor, etc.)

### Avoid Over-Engineering
- **Do not** add auth "just in case."
- **Do not** add a database or backend for the free product.
- **Do not** introduce React/Vue "for structure" – the app is vanilla JS and works.

### Avoid Privacy Regressions
- **Do not** suggest third-party storage (MantleDB, Firebase, etc.) for user data.
- **Do not** send calendar/journal data to any server except for payment (and Stripe doesn't need it).
- **Do not** add analytics that track journal content or event names.

### Avoid Breaking the Data Model
- **Do not** change the localStorage key structure without a migration path.
- **Do not** change the JSON export format – it's the migration format for future auth.
- **Do not** rename `habits`, `calendars`, `events`, `journals` keys.

### Avoid UX Anti-Patterns
- **Do not** try to disable browser print (Ctrl/Cmd+P). You can't fully block it; don't try.
- **Do not** gate the Print Studio page entirely – allow free design + preview, pay to export.
- **Do not** add unnecessary modals or steps to Export/Import.

### When AI Suggests Something
- **Ask:** "Does this send user data to a server?" If yes, reject for free product.
- **Ask:** "Does this add auth/accounts?" If yes, defer unless explicitly building auth.
- **Ask:** "Does this change the localStorage/JSON format?" If yes, ensure migration.

---

## 8. Quick Reference

| Decision | Choice |
|----------|--------|
| Storage | localStorage only |
| Auth | None for free product |
| PDF generation | Client-side (jsPDF/html2pdf) |
| Payment | Stripe Checkout, one-time |
| Monetization | Print Studio PDF export ($7–9) |
| Positioning | Visualization tool, privacy-first |
| Export/Import | Keep prominent, JSON format |

---

## 9. Next Session Kickstart

**To resume:** Read this file, then:
1. Confirm deployment target (Vercel/Netlify).
2. Decide: Print Studio as separate page or section within calendar.html.
3. Set up Stripe (test mode) for Checkout.
4. Implement template system (start with 2–3 templates).
5. Add client-side PDF generation after payment success.

**Reference files:** `calendar.html` (exportData, printCalendarToPdf, localStorage keys), `demo-data.json` (data structure).
