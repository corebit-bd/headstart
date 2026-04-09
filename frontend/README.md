# 🌐 HeadStart Frontend - NextJS Platform

## 📋 Overview

The HeadStart Frontend is a High-Performance, Type-Safe Web Application built with **NextJS 16**. It provides a "Professional Academic Excellence" User Experience (UX), catering to both the **Academic Wing** (Students / Teachers) & the **Advisory Wing** (Staff / Administrators).

As a **GOLD Approved Learning Partner**, the interface is optimized for long-form study, complex financial reporting & strict secure access.

## 🏗️ Architecture & Technical Stack

### Core Technologies

- **NextJS 16** - App Router with Server Components.
- **TypeScript 6.0** - Strict Type Safety for Financial & Academic Data.
- **Tailwind CSS v4.2** - Utility-First Styling with HeadStart Design System Integration.
- **Redux Toolkit** - Global State Management for User Sessions & LMS Progress.
- **Zod & React Hook Form** - Schema-Based Validation for Secure OTP & Enrollment Forms.
- **Storybook 10.3** - Component-Driven Development for the HeadStart UI Library.
- **Vitest & Playwright** - Unit & E2E Testing for the **Gatekeeping (MCQ)** Logic.

### Infrastructure & Linting

- **ESLint 10 (Flat Configuration)** : Migrated to the modern Flat Configuration System using `@eslint/js` & `typescript-eslint`.
- **Quality Gates** : Integrated with **CodeCov** for Automated Coverage Tracking (99% Threshold).
- **Registry** : Automated Container Builds pushed to **GHCR** (GitHub Container Registry).

### Design System Implementation

- **Typography** :
  - **Montserrat** : Brand Messaging, `H1` & `H2` HTML Tag Elements (Bold 700 / Medium 500).
  - **Inter** : Primary UI Text, Data Tables & Study Materials (Regular 400 / Semi-Bold 600).

- **Color Palette** :
  - **Primary** : Royal Purple (`#790BBE`) for Navigation & Main Actions.
  - **Secondary** : HeadStart Gold (`#FEE054`) for High-Impact CTAs ("Enroll Now").
  - **Neutral** : Cloud Grey (`#F3F4F7`) for Workspace Backgrounds.

## 📁 Directory Structure

```text
frontend/
├── src/
│   ├── app/                         # NextJS App Router (Montserrat / Inter Configuration)
│   │   ├── (student)/               # Student Portal & LMS Player
│   │   ├── (admin)/                 # ERP, CRM & SCM Modules (Restricted)
│   │   ├── (auth)/                  # OTP, CAPTCHA & Profile Lock UI
│   │   └── layout.tsx               # Root Layout with Font Providers
│   ├── components/
│   │   ├── ui/                      # Base HeadStart UI Components (Custom-Built)
│   │   └── shared/                  # Reusable Layout Elements
│   ├── lib/
│   │   ├── api/                     # Axios/GraphQL Clients for HeadStart Portal API
│   │   └── validations/             # Zod Schemas for Registration / Payments
│   └── store/                       # Redux Slices (Auth, LMS, Navigation)
```

---

## 🔐 Frontend Security Protocols

The Frontend must enforce the following Project-Specific Constraints :

1. **Security Lock UI** : Implement a clear "Account Locked" State after the **2nd Failed OTP Attempt**.

2. **Gatekeeping Logic** : Prevent Manual URL Navigation to lectures if the Prerequisite MCQ Status is not marked as `passed` in the Redux State.

3. **Session Awareness** : Handle **Single Active Session Management (SASM)** by detecting Token Invalidation & redirecting to the Login Screen with a clear Notification.

4. **Vulnerability Shield** : Active Monitoring of Frontend Dependencies (Example : `@standard-schema/spec` & ReactJS 19 Compatibility).

---

## ⚙️ CI / CD & Quality Gates

The Frontend is protected by a High-Integrity Pipeline :

- **Mandatory 99% Coverage** : Enforced via CodeCov.
- **Flat Configuration Linting** : Every PR is validated against the **ESLint 10** Standards.
- **Storybook Audit** : Visual Regressions are checked during the CI Process.

---

## 🚀 Development Workflow

1. **Environment** : Ensure `.env.local` is configured with the correct `NEXT_PUBLIC_API_URL`.

2. **Installation** :

```bash
npm install
```

3. **Component Development** :

```bash
npm run storybook
```

4. **Validation** :

```bash
npm run lint          # Linting
npm run type-check    # TypeScript Validation
npm test              # Unit Tests (Vitest)
```

---

## 🎨 Branding Guidelines

When building new Features :

- Use **`#790BBE`** for all Primary Buttons & Active Navigation States.

- All "Enroll" / "Purchase" Buttons **MUST** use the **`#FEE054`** (Gold) Accent.

- Ensure all Financial Data is rendered using the **Inter** Font for maximum legibility.

---

**Developed by CoreBit Digital Lab Version** : 0.1.0

**Status** : Production Ready | GOLD Compliance Verified
