# 🚀 HeadStart Major Version Upgrade Guide

## 🎯 Overview

This Guide covers the mandatory process for upgrading Major Framework Versions (Django, NextJS, PostgreSQL, etc.) within the HeadStart E-Platform. As a Professional Accountancy Service Provider, Platform Stability is non-negotiable.

**⚠️ CRITICAL** : Always create a **Backup Branch** before starting any major upgrade to ensure Zero-Downtime Recovery.

---

## 📋 Types of Upgrades

### 1. Backend & Advisory Logic

- **Django Version** (Example : 5.1 → 5.2)
- **Python Version** (Example : 3.12 → 3.13)
- **Impact** : Affects ERP, CRM & SCM Modules. Requires Manual Validation of the Administrator Portal.

### 2. Frontend & Student Experience

- **NextJS Version** (Example : 15 → 16)
- **NodeJS Version** (Example : 22 → 24)
- **Impact** : Affects the Student LMS & the Course Player. Requires Testing the **Gatekeeping Logic** (MCQ-to-Lecture Progression).

### 3. Database & Financial Records

- **PostgreSQL Version** (Example : 15 → 16)
- **Impact** : Affects all Tenant Data & Audit Trails. Requires a full Database Dump / Restore Dry-Run.

---

## 🔄 Complete Upgrade Workflow

### Phase 1 : Preparation (The Safety Lock)

1. **Check Current Versions** :

```bash
# Backend
cd backend
python --version
pip list | grep Django

# Frontend
cd frontend
node --version
npm list react next
```

2. **Create Backup Branch** :

```bash
git checkout main
git checkout -b backup/pre-upgrade-[module]-YYYYMMDD
git push origin backup/pre-upgrade-[module]-YYYYMMDD
```

### Phase 2 : Implementation

1. **Update Environment Files** : Modify `.env`, `backend/.env` & `.env.local` to reflect new Version Numbers.

2. **Update CI / CD Configurations** : Update `PYTHON_VERSION` & `NODE_VERSION` in `.github/workflows/ci.yaml`.

3. **Execute Upgrade** :

```bash
# Example : Updating Python Dependencies
cd backend
pip install --upgrade django
pip freeze > requirements.txt
```

### Phase 3 : HeadStart Specific Validation ✅

After the Technical Upgrade, you **MUST** manually verify the following Business-Critical "Gates" :

| Gate              | Validation Step                                       | Expected Result                                                                |
| ----------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------ |
| **Payment**       | Simulate a Course Enrollment via SSL Commerz Sandbox. | Successful Transaction & Receipt Generation.                                   |
| **Security**      | Attempt 3 Failed OTP Logins on a Test Account.        | Profile is locked after the 2nd Attempt.                                       |
| **Academic**      | Pass a Mock MCQ Quiz in the Student Portal.           | The next Lecture Module is successfully unlocked.                              |
| **Administrator** | Access the ERP Module in the Administrator Portal.    | No **`403 Forbidden`** / \*\*`500 Internal Server Error` on Financial Reports. |

---

## 🎓 Best Practices & "The Golden Rules"

**DOs ✅**

1. **Verify Caching** : Check GitHub Actions (`Actions` > `Caches`) to ensure the 10GB Limit isn't exceeded by new Dependency Layers.

2. **Test in `devEnv`**: Keep the Upgrade in the `devEnv` Branch for at least 48 Hours before Promoting to `stagingEnv`.

3. **Audit Headings** : Ensure the Montserrat (700 / 500) & Inter (400 / 600) Font Rendering remains consistent across the Platform.

**DON'Ts ❌**

1. **Simultaneous Upgrades** : Never upgrade the Backend & Frontend in the same Pull Request (PR).

2. **Ignore Warnings** : Deprecation Warnings in the Logs are "Technical Debt" that must be resolved before the next Major Version.

3. **Skip MCQ Logic** : Never assume the LMS Logic is safe; UI-Driven Progression is the most fragile part of the Platform.

---

**Last Updated** : April 07, 2026<br />
**Platform Owner** : CoreBit Digital Lab<br />
**Current Stack** : Python 3.13 | Node 24 | Postgres 15 | Redis 7
