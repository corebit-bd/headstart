# 🛡️ HeadStart Security Audit Protocol

## Overview

As a **GOLD Approved Learning Partner**, HeadStart must maintain a rigorous Security Posture. This Protocol defines the Automated & Manual Audit Gates within the CI / CD Pipeline that protect the Academic (LMS) & Advisory (ERP / CRM) Wings.

---

## 🔐 Core Security Mechanisms

The following features are "Critical-to-Quality" & must be audited on every Pull Request (PR) :

### 1. Profile Lock Mechanism (PLM)

- **Constraint** : Non-Admin Users must be locked out after **2 consecutive failed** OTP / CAPTCHA Attempts.
- **Audit Requirement** : Automated E2E Tests (Playwright) must simulate 2 Failed Attempts & verify the Account Status transitions to `LOCKED`.
- **Bypass Check** : Verify that a page refresh / session clearing does not reset the failure counter in the Backend.

### 2. Single Active Session Management (SASM)

- **Constraint** : One Active Session per User Code (Example : `HS-STD-XXXX`).
- **Audit Requirement** : The Pipeline must verify that a second login on a different "device" (Test Runner) invalidates the first Session's JWT / Token.

### 3. Portal Siloing (Access Control)

- **Constraint** : The Advisory Wing (ERP, CRM, SCM) is strictly invisible to `Student` & `Teacher` Roles.
- **Audit Requirement** : Automated "Unauthorized Access" Tests must attempt to hit `/api/v1/advisory/*` Endpoints using a Student Token & confirm a `403 Forbidden` Response.

---

## 🛠️ Automated Audit Gates (CI Pipeline)

The `ci.yaml` Workflow triggers the following `security-specific` Jobs :

| Tool                | Purpose                        | Failure Condition                                       |
| :------------------ | :----------------------------- | :------------------------------------------------------ |
| **GitGuardian**     | Secret Scanning                | Any plaintext API Key (SSL Commerz, AWS) detected.      |
| **Trivy**           | Container / OS Vulnerabilities | Detection of `HIGH` / `CRITICAL` CVEs in Docker Images. |
| **Safety (Python)** | Dependency Audit               | Known Vulnerabilities in Django / FastAPI Packages.     |
| **npm audit**       | Frontend Audit                 | Vulnerabilities in NextJS / Node Modules.               |

---

## 📝 Manual Audit Checklist (Peer Review)

Before Merging any PR tagged with `security/`, the Reviewer must verify :

- [ ] **No Plaintext Logging** : Ensure Sensitive Data (Passwords, OTPs, Payment Tokens) are not being logged to the console / file system.
- [ ] **Unique User Codes** : Verify that the Generation Logic for `HS-STD-` & `HS-ADM-` Prefixes remains Collision-Resistant.
- [ ] **CAPTCHA Integrity** : Ensure that the CAPTCHA Validation is handled Server-Side & cannot be bypassed via Frontend State Manipulation.

---

## 🚨 Incident Response & Fail-Safe

If a security gate fails in the CI Pipeline :

1. **Immediate Block** : The PR cannot be merged into `main` / `prodEnv`.
2. **Quarantine** : If a Vulnerability is found in Production, the `MAINTENANCE.md` Rollback Protocol must be initiated using the latest `backup/` Branch.

3. **Audit Log** : The Failure must be documented in the internal Security Log with the corresponding `CVE` / `User Story ID`.

---

**Last Updated** : April 08, 2026  
**Security Lead** : CoreBit Digital Lab  
**Compliance Standard** : GOLD Approved Learning Partner (ACCA)
