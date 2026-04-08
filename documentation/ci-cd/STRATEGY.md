# 🎯 HeadStart CI / CD Pipeline Strategy

## Overview

This Document defines the **Hybrid Testing Strategy** for the HeadStart E-Platform. Our goal is to maintain a "GOLD Approved" Standard of Software Quality while optimizing for GitHub's Free Tier (2,000 Minutes / Month & 10GB Cache Storage).

---

## 🔄 Git Workflow Integration

### Branch Structure

The HeadStart repository follows a Promotion-Based Environment Strategy to ensure that the **Administrator Portal (ERP / CRM / SCM)** & **Student LMS** remain stable.

```bash
[relevant-tag]/[dev-username]/[user-story-id]
    ↓ (Pull Request & Peer Review)
  main (Stable Integration Point - CI Passes Required)
    ↓ (Environment Promotion)
  devEnv (Development / Sandbox Deployment)
    ↓ (Stakeholder UAT / Internal Audit)
  stagingEnv (QA / Pre-Production Deployment)
    ↓ (Final Approval)
  prodEnv (Production Live Platform)
```

### Relevant Branch Tags

- **`feature/`** : Indication of New Feature or Functionality or a significant enhancement into the system

- **`fix/`** : Signifies Bug or Error Fixes in the system

- **`documentation/`** : Changes to the Documentation File(s)

- **`style/`** : Addition / Changes to Design Styles of the Application UI / UX

- **`refactor/`** : Code Refactoring (Variable Renaming / Code Restructuring or Formatting) that doesn't affect Functionality

- **`data/`** : Used for Database, Information & Data Manipulation

- **`test/`** : Adding, Fixing or Modifying Tests; No Production Code Change

- **`chore/`** : Updating Build Scripts / Upgrading Dependencies, Maintenance & Changes in Tools; No Production Code Change

- **`cicd/`** : Changes to CI / CD Configuration or Scripts

- **`performance/`** : Performance Improvements / Optimization Changes

- **`devEx/`** : Developers' Experience : Use for Improvement of Developers' Experience

- **`revert/`** : Undoing the Changes made by a Previous Commit

- **`miscellaneous/`** : Use for anything that does not clearly fall into any of the previous categories

---

## 🛡️ The 7 Gates of Quality

Before any code reaches the `prodEnv`, it must pass through these mandatory Validation Gates :

1. **Static Analysis** : Linting for TypeScript (ESLint) & Python (Flake8).

2. **Security Audit** : Automated Scanning via `trivy` & `GitGuardian` for PII / API Key Leaks.

3. **Unit Testing** : 99%+ Coverage Requirement for Core Financial Logic (Revenue / Expense / Profit).

4. Integration Testing : Verification of the **SSL Commerz** Payment Handshake.

5. **Security Gatekeeping** : Automated Verification that the Profile Lock triggers after exactly 2 Failed Attempts.

6. **Visual Regression** : Chromatic Check to ensure UI Components match the HeadStart Design Specification.

7. **Gatekeeping Logic Check** : Verification that MCQ Pass-Requirements correctly unlock subsequent Course Modules.

---

## ⚡ Cost-Optimized Testing Approach

To stay within the 2,000-Minute Threshold, we employ a Layered Caching Strategy :

| Layer                | Cache Strategy                                | Invalidation Trigger                               |
| -------------------- | --------------------------------------------- | -------------------------------------------------- |
| **System Layer**     | GitHub Actions Virtual Environment            | Change in `ci.yaml`                                |
| **Dependency Layer** | Pre-Installed `node_modules` & `pip` Packages | Change in `package-lock.json` / `requirements.txt` |
| **Build Layer**      | NextJS `.next/cache` & Django Staticfiles     | Every successful commit to `main`                  |

**Storage Management** : We cap total Cache Usage at 10GB. Old Caches for stale Feature Branches are automatically purged to prioritize the `main` & `prodEnv` Branches.

---

## 🎓 Monitoring & Compliance

**Usage Tracking** :

- Monitor via `Settings` → `Billing` → `Actions`.

- **Alert Level** : 75% Usage triggers an immediate Audit of the `MAINTENANCE.md` Cleanup Tasks.

**Documentation Compliance** :

- Every PR must update the internal `PROJECT_CONTEXT.md` if there are Changes to the Core Architecture.

- Any change to the **Unique User Code** Generation (Example : `HS-STDXXXXX`) must be manually peer-reviewed by the Lead Architect.

---

**Last Updated** : April 07, 2026<br />
**Version** : 0.1.0<br />
**Approved By** : CoreBit Digital Lab
