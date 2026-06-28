# Basic Design Specification

## Table of Contents

1. [Design Principles](#1-design-principles)
2. [Base Color System Specification](#2-base-color-system-specification)
3. [Variants Color System Specification](#3-variants-color-system-specification)
4. [Color Usage Guidelines](#4-color-usage-guidelines)
5. [Typography](#5-typography)
6. [Spacing & Grid System](#6-spacing--grid-system)
7. [Iconography](#7-iconography)
8. [Elevation & Border Radius](#8-elevation--border-radius)
9. [Accessibility Standards](#9-accessibility-standards)

---

## 1. Design Principles

HeadStart's visual Design System is guided by the following core principles, ensuring consistency across the Website (Phase 1), LMS (Phase 2) and ERP + CRM + SCM (Phase 3) : 

- **Clarity First** — Every interface element should communicate its purpose without ambiguity, especially for users with varying levels of digital literacy (Example : Parents, First-Time Visitors).
- **Trust Through Consistency** — Consistent application of color, type and spacing reinforces HeadStart's credibility as an ACCA Approved Learning Partner.
- **Accessible by Default** — All design decisions account for readability, color contrast and usability across devices and abilities.
- **Scalable Across Phases** — The system is built to extend cleanly from a Marketing Website to a full LMS and ERP + CRM + SCM Suite without redesign.

---

## 2. Base Color System Specification

| Category                        | Base HEX Code | Purpose & Application                                                          |
| ------------------------------- | ------------- | ------------------------------------------------------------------------------ |
| Primary / Brand (Royal Purple)  | `#790BBE`       | Global Headers, Primary Buttons, Branding & Active States.                     |
| Secondary (HeadStart Gold)      | `#FEE054`       | High-Impact Call-to-Actions (CTAs) ("Apply Now"), Highlight Badges & Accents. |
| Tertiary / Neutral (Cloud Grey) | `#F3F4F7`       | Main Platform Backgrounds, Section Dividers & Workspace Areas.                 |

### 2.1 Alerts / Notifications

| Category             | Base HEX Code | Purpose & Application                                                                                           |
| -------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------- |
| Information (Cobalt) | `#3F51B5`       | Forum Updates, General Notices & Platform Tips.                                                       |
| Success (Emerald)    | `#2D8A5B`       | Represents Growth & Completion. Enrollment Success, Payment Confirmation (via SSL Commerz), Grade Achievements. |
| Warning (Amber)      | `#F9A825`       | Deadline Alerts, Pending Verification & Cautionary Notices.                                                    |
| Error (Crimson)      | `#D32F2F`       | Failed Login Attempts, Profile Locks & System Errors.                                                 |

---

## 3. Variants Color System Specification

Based on the Base Color System Specification, Variants Color System Specification has been designed to provide a visual aesthetic hierarchy in HeadStart.

| Category                        | Value - Key Name | Variants HEX Code |
| -------------------------------- | ----------------- | ------------------ |
| Primary / Brand (Royal Blue)    | 1000 - Base      | `#790BBE`           |
|                                  | 900               | `#8522C4`           |
|                                  | 800               | `#913AC9`           |
|                                  | 700               | `#9E51CF`           |
|                                  | 600               | `#AA68D5`           |
|                                  | 500 - Neutral     | `#B67FDA`           |
|                                  | 400               | `#C297E0`           |
|                                  | 300               | `#CEAEE6`           |
|                                  | 200               | `#DBC5EC`           |
|                                  | 100               | `#E7DDF1`           |
|                                  | 50                | `#EDE8F4`           |
| Secondary (HeadStart Gold)      | 1000 - Base      | `#FEE054`           |
|                                  | 900               | `#FDE264`           |
|                                  | 800               | `#FCE475`           |
|                                  | 700               | `#FBE685`           |
|                                  | 600               | `#FAE895`           |
|                                  | 500 - Neutral     | `#F8EAA5`           |
|                                  | 400               | `#F7ECB6`           |
|                                  | 300               | `#F6EEC6`           |
|                                  | 200               | `#F5F0D6`           |
|                                  | 100               | `#F4F2E7`           |
|                                  | 50                | `#F4F3EF`           |
| Tertiary / Neutral (Cloud Grey) | 1000 - Base      | `#F3F4F7`           |
|                                  | 900               | `#F4F5F8`           |
|                                  | 800               | `#F5F6F9`           |
|                                  | 700               | `#F7F7F9`           |
|                                  | 600               | `#F8F8FA`           |
|                                  | 500 - Neutral     | `#F9F9FB`           |
|                                  | 400               | `#FAFBFC`           |
|                                  | 300               | `#FBFCFD`           |
|                                  | 200               | `#FDFDFD`           |
|                                  | 100               | `#FEFEFE`           |
|                                  | 50                | `#FEFEFF`           |

### 3.1 Alerts / Notifications

| Category             | Value - Key Name | Variants HEX Code |
| --------------------- | ----------------- | ------------------ |
| Information (Cobalt) | 1000 - Base      | `#3F51B5`           |
|                       | 900               | `#5161BC`           |
|                       | 800               | `#6372C2`           |
|                       | 700               | `#7582C9`           |
|                       | 600               | `#8792CF`           |
|                       | 500 - Neutral     | `#99A2D6`           |
|                       | 400               | `#ABB3DD`           |
|                       | 300               | `#BDC3E3`           |
|                       | 200               | `#CFD3EA`           |
|                       | 100               | `#E1E4F0`           |
|                       | 50                | `#EAECF4`           |
| Success (Emerald)    | 1000 - Base      | `#2D8A5B`           |
|                       | 900               | `#41956B`           |
|                       | 800               | `#559F7A`           |
|                       | 700               | `#68AA8A`           |
|                       | 600               | `#7CB499`           |
|                       | 500 - Neutral     | `#90BFA9`           |
|                       | 400               | `#A4CAB9`           |
|                       | 300               | `#B8D4C8`           |
|                       | 200               | `#CBDFD8`           |
|                       | 100               | `#DFE9E7`           |
|                       | 50                | `#E9EFEF`           |
| Warning (Amber)      | 1000 - Base      | `#F9A825`           |
|                       | 900               | `#F8B03A`           |
|                       | 800               | `#F8B74F`           |
|                       | 700               | `#F7BF64`           |
|                       | 600               | `#F7C679`           |
|                       | 500 - Neutral     | `#F6CE8E`           |
|                       | 400               | `#F5D6A3`           |
|                       | 300               | `#F5DDB8`           |
|                       | 200               | `#F4E5CD`           |
|                       | 100               | `#F4ECE2`           |
|                       | 50                | `#F3F0EC`           |
| Error (Crimson)      | 1000 - Base      | `#D32F2F`           |
|                       | 900               | `#D64343`           |
|                       | 800               | `#D95657`           |
|                       | 700               | `#DD6A6B`           |
|                       | 600               | `#E07E7F`           |
|                       | 500 - Neutral     | `#E39193`           |
|                       | 400               | `#E6A5A7`           |
|                       | 300               | `#E9B9BB`           |
|                       | 200               | `#EDCDCF`           |
|                       | 100               | `#F0E0E3`           |
|                       | 50                | `#F1EAED`           |

---

## 4. Color Usage Guidelines

The following guidance governs how the Base and Variants Color Systems are applied consistently across the HeadStart Platform : 

| Use Case | Recommended Token |
|---|---|
| Primary Navigation Bar, Primary Buttons | Primary / Brand — 1000 (Base) `#790BBE` |
| Hover State on Primary Buttons | Primary / Brand — 900 `#8522C4` |
| Disabled Primary Buttons | Primary / Brand — 300 or 200 |
| "Apply Now" / High-Impact CTAs | Secondary (HeadStart Gold) — 1000 (Base) `#FEE054` |
| Highlight Badges (Example : "National Prize Winner") | Secondary — 1000 (Base) or 900 |
| Page Backgrounds, Section Dividers | Tertiary / Neutral — 1000 (Base) `#F3F4F7` |
| Card Backgrounds within a Section | Tertiary / Neutral — 500 to 100 (lighter tints) |
| Forum Updates, General Notices, Platform Tips | Information (Cobalt) — 1000 (Base) `#3F51B5` |
| Enrollment Success, Payment Confirmation, Grade Achievements | Success (Emerald) — 1000 (Base) `#2D8A5B` |
| Deadline Alerts, Pending Verification | Warning (Amber) — 1000 (Base) `#F9A825` |
| Failed Login Attempts, Profile Locks, System Errors | Error (Crimson) — 1000 (Base) `#D32F2F` |
| Subtle Background Tint for Alert Banners | Corresponding Alert Color — 100 or 50 |

---

## 5. Typography

### 5.1 Font Pairing

| Font | Role | Usage |
|---|---|---|
| **Montserrat** | Display / Heading Font | Page Titles, Section Headers, Navigation Labels, Hero Statements, CTA Button Text |
| **Inter** | Body / UI Font | Paragraph Text, Form Labels, Table Content, Descriptions, Forum Posts, Dashboard Data |

> **Rationale** : Montserrat's geometric, confident letterforms suit HeadStart's brand-forward moments (headlines, CTAs, marketing surfaces), while Inter's high legibility at small sizes makes it ideal for dense, data-heavy interfaces such as the LMS dashboards, ERP reports and forum threads.

### 5.2 Type Scale

| Token | Font | Weight | Size (px) | Line Height | Usage |
|---|---|---|---|---|---|
| Display | Montserrat | Bold (700) | 48 | 56 | Hero Banners, Landing Page Headlines |
| H1 | Montserrat | Bold (700) | 36 | 44 | Page Titles |
| H2 | Montserrat | SemiBold (600) | 28 | 36 | Section Headers |
| H3 | Montserrat | SemiBold (600) | 22 | 30 | Sub-Section Headers, Card Titles |
| H4 | Montserrat | Medium (500) | 18 | 26 | Tab Labels, Widget Titles |
| Body Large | Inter | Regular (400) | 16 | 24 | Primary Paragraph Text |
| Body | Inter | Regular (400) | 14 | 22 | Standard UI Text, Table Cells, Descriptions |
| Body Small | Inter | Regular (400) | 12 | 18 | Captions, Helper Text, Metadata |
| Label | Inter | Medium (500) | 12 | 16 | Form Labels, Badges, Tags |
| Button Text | Montserrat | SemiBold (600) | 14 | 20 | All Button Labels |

### 5.3 Font Weights Reference

| Font | Available Weights |
|---|---|
| Montserrat | Regular (400), Medium (500), SemiBold (600), Bold (700) |
| Inter | Regular (400), Medium (500), SemiBold (600) |

### 5.4 Typography Application by Context

| Context | Heading Font | Body Font |
|---|---|---|
| Phase 1 — Public Website | Montserrat (H1–H3) | Inter (Body) |
| Phase 1.1 — CMS Dashboard | Montserrat (H3–H4) | Inter (Body, Body Small) |
| Phase 2 — LMS Dashboards | Montserrat (H2–H4) | Inter (Body, Label) |
| Phase 2 — Forum & Blogs | Montserrat (H4, Post Titles) | Inter (Body — Post Content) |
| Phase 3 — ERP + CRM + SCM Reports | Montserrat (H3–H4) | Inter (Body, Body Small — Tabular Data) |

---

## 6. Spacing & Grid System

### 6.1 Base Spacing Unit

HeadStart's Spacing System uses a **4px Base Unit**, scaled in consistent multiples to maintain visual rhythm across all surfaces.

| Token | Value (px) | Usage |
|---|---|---|
| `space-0` | 0 | No Spacing / Reset |
| `space-1` | 4 | Icon-to-Text Gaps, Tight Inline Spacing |
| `space-2` | 8 | Form Field Padding, Badge Padding |
| `space-3` | 12 | Default Gap between related Elements |
| `space-4` | 16 | Card Padding, Standard Component Spacing |
| `space-5` | 24 | Spacing between Components within a Section |
| `space-6` | 32 | Spacing between distinct Sections |
| `space-7` | 48 | Spacing between major Page Sections |
| `space-8` | 64 | Hero Section Vertical Padding |

### 6.2 Grid System

| Breakpoint | Viewport Width | Columns | Gutter | Margin |
|---|---|---|---|---|
| Mobile | < 600px | 4 | 16px | 16px |
| Tablet | 600px – 1024px | 8 | 24px | 24px |
| Desktop | > 1024px | 12 | 24px | 64px |

> This 12-Column Grid (collapsing responsively to 8 and 4 Columns) applies uniformly across the Public Website, LMS portals and ERP + CRM + SCM Dashboards to ensure layout consistency across all phases.

---

## 7. Iconography

| Property | Specification |
|---|---|
| Icon Style | Outlined (Stroke-Based), 2px Stroke Weight |
| Default Size | 24px × 24px |
| Small Size | 16px × 16px (Inline with Body Small / Label Text) |
| Large Size | 32px × 32px (Dashboard Widgets, Empty States) |
| Default Color | Tertiary / Neutral — 1000 (Base) Text-equivalent or Primary / Brand for Active States |
| Alert Icons | Match corresponding Alert Color (Information, Success, Warning, Error) |

**Usage Notes** : 
- Icons must always pair with a text label in primary navigation to support users with lower digital literacy (Example : the General / Public Persona).
- Status Icons (Success, Warning, Error) must use the corresponding Base Color from Section 2, never a custom color.

---

## 8. Elevation & Border Radius

### 8.1 Border Radius

| Token | Value (px) | Usage |
|---|---|---|
| `radius-sm` | 4 | Input Fields, Badges, Tags |
| `radius-md` | 8 | Buttons, Cards |
| `radius-lg` | 16 | Modals, Dialog Boxes |
| `radius-full` | 9999 | Pills, Avatar Images, Circular Icons |

### 8.2 Elevation (Shadow Levels)

| Token | Usage | Shadow Specification |
|---|---|---|
| `elevation-0` | Flat Elements, Dividers | None |
| `elevation-1` | Cards, List Items | `0px 1px 2px rgba(0,0,0,0.06)` |
| `elevation-2` | Dropdowns, Popovers | `0px 4px 8px rgba(0,0,0,0.08)` |
| `elevation-3` | Modals, Dialogs | `0px 8px 24px rgba(0,0,0,0.12)` |

---

## 9. Accessibility Standards

- **Contrast Ratio** : All text and background color pairings must meet **WCAG 2.1 AA** minimum contrast ratios — 4.5:1 for body text, 3:1 for large text (18px+ bold or 24px+ regular), per **Success Criterion 1.4.3 (Contrast Minimum)**.
- **Alert Colors** : Information, Success, Warning and Error colors must never be the sole means of conveying meaning — always pair with an icon or text label, per **Success Criterion 1.4.1 (Use of Color)**.
- **Non-Text Contrast** : UI Components (Buttons, Input Borders, Icons conveying state) must maintain a minimum 3:1 contrast ratio against adjacent colors, per **Success Criterion 1.4.11 (Non-text Contrast)**.
- **Focus States** : All interactive elements must display a visible focus ring using Primary/Brand — 1000 (Base) `#790BBE` at 2px width, per **Success Criterion 2.4.7 (Focus Visible)**.
- **Minimum Tap Target** : All interactive elements on mobile devices must maintain a minimum tap target size of 44px × 44px, regardless of visual Icon / Button size, per **Success Criterion 2.5.5 (Target Size)**.
- **Font Scaling** : Typography must remain legible and layouts must not break when browser-level text scaling is increased up to 200%, per **Success Criterion 1.4.4 (Resize Text)**.
- **Headings & Labels** : All Headings and Form Labels must clearly describe topic or purpose, per **Success Criterion 2.4.6 (Headings and Labels)**.

### 9.1 Verified Color Contrast Compliance

Each Base Color was tested against pure white (`#FFFFFF`) and pure black (`#000000`) to confirm WCAG 2.1 AA Conformance (4.5:1 for normal text, 3:1 for large text / icons). The table below documents actual measured ratios — **not assumptions** — and defines the only conforming usage for each color.

| Color | HEX | Contrast vs. White | Contrast vs. Black | AA Conformance | **Permitted Usage** |
|---|---|---|---|---|---|
| Primary / Brand (Royal Purple) | `#790BBE` | 8.06:1 ✅ | 2.60:1 ❌ | Passes as **text / åicon on white**, or **background with white text** | Use as text / icon color on light backgrounds, OR as a background fill with white (`#FFFFFF`) text / icons only. **Never** pair with black text. |
| Secondary (HeadStart Gold) | `#FEE054` | 1.31:1 ❌ | 16.00:1 ✅ | Passes only as **background with black / dark text** | Use **only** as a background fill with dark text (Tertiary Neutral dark equivalent or black). **Never** use as text color on white, and **never** place white text on it. |
| Tertiary / Neutral (Cloud Grey) | `#F3F4F7` | 1.10:1 ❌ | 19.09:1 ✅ | Passes only as a **background**, never as text | Use exclusively as a background/surface color. **Never** use as a text or icon color. |
| Information (Cobalt) | `#3F51B5` | 6.87:1 ✅ | 3.06:1 ⚠️ (large text / icons only) | Passes as **text / icon on white** | Use as text or icon color on white / light backgrounds. As a background, pair only with white text — black text fails at large-text threshold only and fails normal text entirely. |
| Success (Emerald) | `#2D8A5B` | 4.29:1 ❌ (fails normal text by a small margin) | 4.90:1 ✅ | Passes only at **large-text / icon size (3:1)** on white; fails normal body text on white | **Do not** use as small body text on white. Permitted as : <br />(a) an icon/badge color<br /> (b) large / bold text (18px+ bold or 24px+ regular), or <br />(c) a background fill with white text. |
| Warning (Amber) | `#F9A825` | 1.97:1 ❌ | 10.66:1 ✅ | Passes only as **background with black / dark text** | Use **only** as a background fill (Badges, Banners, Alert Chips) with dark text. **Never** use as text color on a white background. |
| Error (Crimson) | `#D32F2F` | 4.98:1 ✅ | 4.22:1 ❌ | Passes as **text / icon on white** | Use as text or icon color on white / light backgrounds. As a background, pair only with white text. |

### 9.2 Mandatory Constraints Arising from Verified Contrast

The following constraints are **non-negotiable** for WCAG 2.1 AA conformance and must be enforced in implementation (Component Libraries, CMS Rich-Text Rules and Design Tooling alike) : 

1. **Secondary (HeadStart Gold) `#FEE054` and Warning (Amber) `#F9A825` must never be used as text color directly on a white or light-neutral background.** Both fail Success Criterion 1.4.3 at this pairing (1.31:1 and 1.97:1 respectively, far below the 3:1 floor even for large text). They are background-fill colors only, always paired with dark / black text.

2. **Success (Emerald) `#2D8A5B` must not be used for small body text on white.** At 4.29:1 it narrowly fails the 4.5:1 normal-text threshold. It is conformant only as large / bold text, an icon color, or a background fill with white text (Example : the "Payment Confirmation" Success Banner Pattern).

3. **Tertiary / Neutral (Cloud Grey) `#F3F4F7` must never be used as a text or icon color.** It is a surface / background token exclusively; at 1.10:1 against white it would be functionally invisible as foreground content.

4. **Primary / Brand (Royal Purple) `#790BBE` must never be paired with black text when used as a background fill.** At 2.60:1 this combination fails even the large-text 3:1 floor. White text/icons are required on Primary Brand backgrounds.

5. **All Variant tints (the 50–900 scale in Section 3) inherit the same constraint logic as their Base color.** Lighter variants (Example : 100, 50) move closer to white and lose contrast rapidly — they are intended for **background tints and subtle fills only**, never for text, regardless of the parent category.

6. **Any deviation from the above must be re-tested with a contrast calculator before implementation.** No color combination in this specification may be assumed conformant; it must be verified against the formula defined in WCAG 2.1 (`(L1 + 0.05) / (L2 + 0.05)`).