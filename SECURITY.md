# 🔐 HeadStart Security Policy

## 🛡️ Our Commitment to Security

The HeadStart Team is committed to maintaining the highest Security Standards for our **GOLD Approved Learning Partner** Platform. We protect both the Academic Integrity of our LMS & the Financial Confidentiality of our Advisory Wing.

---

## 📋 Supported Versions

We provide Security Updates for the following Active Versions :

| Version | Supported          | Status            |
| ------- | ------------------ | ----------------- |
| 1.0.x   | :white_check_mark: | Active Production |
| < 1.0   | :x:                | End of Life (EOL) |

---

## 🔒 Security Features

### 🏛️ Backend Security (Django Core)

- ✅ **Profile Lock Mechanism** : Automated Account Locking after **2 Failed OTP / CAPTCHA Attempts** to prevent Brute-Force Attacks.
- ✅ **Single Active Session Management (SASM)** : Prevents concurrent Account Usage to ensure Seat-License Integrity.
- ✅ **JWT Authentication** : Secured with `RSA256` Encryption.
- ✅ **Portal Siloing** : Strict RBAC ensuring the Advisory (ERP / CRM) Wing is inaccessible to Student / Teacher Roles.
- ✅ **Audit Logging** : Comprehensive Logging for all Financial Transactions & Grade Changes.

### 🌐 Frontend Security (NextJS)

- ✅ **Middleware Protection** : Route-Level Guards for Student vs. Administrator Portals.
- ✅ **LMS Gatekeeping** : Client-Side & Server-Side Verification to ensure Lectures remain locked until MCQ Prerequisites are met.
- ✅ **CSP Headers** : Strict Content Security Policy (CSP) to prevent XSS & Data Injection.
- ✅ **Input Validation** : Schema-Based Validation using Zod for all Payment & Registration Forms.

### 🚀 Infrastructure & CI/CD

- ✅ **Secret Scanning** : Automated GitGuardian Scans on every Push.
- ✅ **Vulnerability Audits** : Trivy & `npm audit` integrated into the CI Pipeline.
- ✅ **Immutable Backups** : Mandatory `backup/` Branch Protocol for all Dependency Upgrades to ensure rapid Rollback.

---

## 🛑 Reporting a Vulnerability

If you discover a Security Vulnerability, please report it immediately. **Do not open a public GitHub Issue.**

### Reporting Channels

- **Email** : [security@headstart-bd.com](mailto:security@headstart-bd.com)
- **Response Time** : You will receive an initial Acknowledgment within 24 Hours.
- **Disclosure** : We follow a coordinated Disclosure Policy (90-Day Window).

---

## 📝 Version History

- **v1.0** (April 08, 2026)
  - Added Profile Lock, SASM & LMS Gatekeeping protocols.
  - Added Infrastructure Availability Patterns (CI / CD Cache Optimization).
  - Initial Security Policy.

---

## ⚖️ Legal

### Responsible Disclosure Policy

By reporting a Vulnerability, you agree to :

- Allow us reasonable time to fix the Issue before Public Disclosure.
- Not exploit the Vulnerability beyond what is necessary for a Proof of Concept (PoC).
- Not Access / Modify User Data without Permission.

**Last Updated** : April 08, 2026  
**HeadStart Version** : 0.1.0  
**Maintainer** : CoreBit Digital Lab
