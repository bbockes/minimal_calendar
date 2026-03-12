# UX & Visualization Features

**Purpose:** Features and UX changes to reframe the app as a visualization tool with print as the hero. Prioritized for pre-launch vs. post-launch.

---

## Strategy: Deploy First, Refine Later

**Recommendation:** Ship with the current UI. Don't block launch on these changes.

**Why:**
- Validate the core concept with real users before investing in a full reframe
- The app works today – the reframe is about positioning, not fixing broken flows
- Print Studio (Phase 2) is when you'll do a bigger UI pass anyway
- You can iterate quickly – labels and copy can change post-launch

---

## Pre-Launch (Do Before Deploy)

*Low-effort changes that improve positioning without blocking launch.*

### 1. Page Title & Meta

**What:** Update `<title>` and meta description to use visualization language.

**How:**
- In `calendar.html` `<head>`: Change title from "Interactive Calendar 2026" to something like "Year-at-a-Glance Planner" or "Your Year, One View"
- Add `<meta name="description" content="...">` with copy like: "Visualize your year with habits, events, and journals. Privacy-first. Print when you're ready."

**Why:** First thing users see; affects search and shares.

---

### 2. Export/Import Prominence

**What:** Ensure Export and Import are easy to find.

**How:**
- They're already in the ⋮ menu – verify the menu is discoverable
- Consider adding a subtle hint on first visit: "Export your data anytime – it stays on your device" (dismissible, or in a tooltip)
- Or add "Export" as a secondary link in the header if space allows

**Why:** Privacy-first positioning; users need to know they can backup.

---

### 3. Print Button (Optional Quick Win)

**What:** Slightly elevate or rename the Print button.

**How:**
- Rename "Print" → "Print your year" (more action-oriented)
- Or give it a primary-style treatment (e.g. filled background vs. outline for other buttons)
- Keep it in the same location for now – no layout overhaul

**Why:** Signals that print is a key outcome; minimal effort.

---

## Post-Launch (Defer Until After Deploy)

*Larger changes to implement once you have traffic and feedback.*

### 4. Elevate Print as Primary CTA

**What:** Make "Design your print" the main action, not one of several buttons.

**How:**
- Move Print to top-right near the year, or give it a dedicated primary button
- When Print Studio exists: "Design your print" as hero CTA; "Quick print" (browser print) as secondary
- Visual hierarchy: Print should feel like the natural next step after building your year

**Why:** Print is the monetization and differentiator; it should feel central.

---

### 5. Reframe the Mode Switcher

**What:** Change "Events / Habits / Journal" to feel like layers of a visualization, not calendar modes.

**How:**
- Change dropdown label from mode name to "What to show" or "Layers"
- Update item copy:
  - "Events" → "Events" (keep) with subtext "Add events to your year"
  - "Habits" → "Habits" with subtext "Track habits on your year"
  - "Journal" → "Journal" with subtext "Add notes to days"
- Or use a simpler label: "View: Events | Habits | Journal"

**Why:** Shifts mental model from "calendar app" to "visualization you're building."

---

### 6. Reorganize Secondary Controls

**What:** Move At a Glance and Stats into a secondary menu so Print stands out.

**How:**
- Add a "View" or "More" dropdown (or expand the existing ⋮ menu)
- Move "At a Glance" and "Stats" into that menu
- Rename "At a Glance" → "Event list" or "List view" (less calendar-y)
- Keep "Weekends" and "Clear All" visible if they're used often, or move to same menu

**Why:** Reduces visual clutter; Print and mode switcher become the primary controls.

---

### 7. Combined View

**What:** Show habits + events (and optionally journal indicators) in one view.

**How:**
- Add a "Combined" or "All layers" option to the mode switcher
- When selected: render habits as colored day backgrounds, events as dots or badges, journal as a small indicator (e.g. dot) on days with entries
- Requires merging the rendering logic from habits, events, and journal modes
- May need a legend/key for colors

**Why:** The year becomes one unified visualization instead of separate modes.

---

### 8. Style Preview (Pre-Print Studio)

**What:** Let users preview 2–3 visual styles in the main view before opening Print Studio.

**How:**
- Add a "Style" dropdown or toggle: "Minimal" | "Colorful" | "Compact"
- Each style = different CSS (font size, spacing, color intensity)
- Persist choice in localStorage
- Reuse these styles later in Print Studio templates

**Why:** Gives a taste of customization; bridges to Print Studio.

---

### 9. Print Preview Mode

**What:** Toggle that shows the layout as it would appear on paper.

**How:**
- Add "Print preview" toggle
- When on: apply print-specific CSS (margins, page breaks, hide non-print elements)
- Show a subtle page outline or frame
- User can see exactly what they'll get before hitting Print

**Why:** Reduces surprise; aligns with "design your output" framing.

---

### 10. Empty State / First-Run

**What:** Lead new users with "Design your year, then print it."

**How:**
- Detect empty state (no habits, no calendars, no journals)
- Show a short message: "Add events, habits, or journals to build your year. When you're ready, print it."
- Optional: "Try with sample data" button that loads demo data and highlights Print

**Why:** Sets expectations; guides toward the print outcome.

---

## Implementation Order (Post-Launch)

When you're ready to implement the deferred items:

1. **Elevate Print** – Quick win; sets the tone
2. **Reframe mode switcher** – Copy change; low risk
3. **Reorganize controls** – Move At a Glance, Stats into menu
4. **Combined view** – More complex; requires merged rendering
5. **Style preview** – 2–3 CSS variants; reusable for Print Studio
6. **Print preview mode** – Toggle + print CSS
7. **Empty state** – Conditional messaging

---

## Quick Reference

| Feature | When | Effort |
|---------|------|--------|
| Page title & meta | Pre-launch | Low |
| Export/Import prominence | Pre-launch | Low |
| Print button rename/style | Pre-launch (optional) | Low |
| Elevate Print as CTA | Post-launch | Medium |
| Reframe mode switcher | Post-launch | Low |
| Reorganize controls | Post-launch | Low |
| Combined view | Post-launch | High |
| Style preview | Post-launch | Medium |
| Print preview mode | Post-launch | Medium |
| Empty state | Post-launch | Low |
