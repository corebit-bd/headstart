# 🛠️ HeadStart E-Platform Maintenance Guide

This Document outlines the mandatory Workflow for maintaining the HeadStart E-Platform (PostgreSQL, Expo, NextJS, Django Stack). These protocols ensure that Automated Dependency Updates do not compromise the "GOLD Approved" Integrity, Financial Accuracy / Security Mechanisms of the Platform.

---

## 🔄 The Maintenance Loop

Maintenance is triggered by two Events :

- **Automated Dependabot PRs** : For Library & Dependency Updates.
- **Manual Infrastructure Alerts** : For Core Upgrades (Python 3.13, Node 24, PostgreSQL 15, Redis 7).

### 1. Handling Automated Updates (Dependabot)

When Dependabot opens a Pull Request (PR) with the prefix `chore/upgrade/`, the `upgrade-validation` job in CI will trigger.

#### Step A : Satisfy the "Safety Lock"

The CI will fail by default until a Backup Branch exists to protect the HeadStart Production State.

1. **Identify the Module** : (Example : `backend` / `frontend` / `mobile` / `database`).

2. **Create a Backup Branch** :

```bash
git checkout main
git checkout -b backup/pre-[module]-YYYYMMDD
git push origin backup/pre-[module]-YYYYMMDD
```

3. The CI `upgrade-validation` Job will now Pass ✅.

#### Step B : Validation & Soak Testing (CRITICAL)

Before merging any Dependency Change, you **MUST** verify the following HeadStart-Specific Business Logic :

1. **Financial Integration** : Run Playwright / Cypress Tests to ensure the SSL Commerz Payment Gateway Handshake remains intact. A failure here impacts the Advisory & Academic Revenue Streams.

2. **Gatekeeping Logic** : Verify that the **Lecture-to-MCQ-to-Module** Flow is not broken. Students must still be restricted from the next lecture until the MCQ is passed.

3. **Security Lock Protocol** : Ensure the Profile Lock Mechanism still triggers after exactly 2 Failed OTP / CAPTCHA Attempts.

4. **Logs & Coverage** : Ensure `backend-tests` (Pytest) & `frontend-tests` (Vitest) maintain the 99%+ Coverage Threshold.

### 2. Manual Infra-Structure Updates

When updating the Core Environment (defined in `.env`), the `ci.yaml` Workflow must be synchronized.

**⚠️ When a Release Alert is received for Python, Node / Postgres** :

1. Update `ci.yaml` : Modify the `env:` Block (`PYTHON_VERSION`, `NODE_VERSION`, etc.).

2. **Update Docker Images** : Update `tags` in the `services:` Section (Example : `image: postgres:15-alpine`).

3. **Local Regression** : Run `./scripts/build.sh --env development` to ensure the Container Orchestration handles the new versions without data loss in the `headstart` database.

### 3. Synchronization of Context Documents

As a "Problem-Focused" Platform, Documentation must match the Architectural Reality.

**After Every Major Upgrade** :

- `01_PROJECT_PROFILE.md` : Update Versioning if the Platform Capabilities evolve.

- **Internal System Logs** : Document any changes to the unique User Code Generation Logic (Example : `HS-STDXXXXX`).

- `PROJECT_CONTEXT.md` : Increment the Version & Update the **"Last Updated"** Timestamp to assist AI-Driven Maintenance.

## ⚠️ Emergency Rollback

If an Upgrade causes a Failure in the **Administrator Portal (ERP / CRM / SCM)** / interrupts **Student Access** :

1. **Identify the Backup** : Locate the relevant Branch (Example : `backup/pre-backend-20260406`).

2. **Revert** : Use `git revert <merge-commit-hash>` to immediately restore service.

3. **Audit** : Review the CI / CD Logs to identify why the **SSL Commerz** / **Security Lock** Tests did not catch the Regression.

---

**Last Updated** : April 06, 2026

**Jeet Z. H. Khondker**<br />
Founder, CEO & President<br />
CoreBit Digital Lab
