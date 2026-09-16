# 🚀 HeadStart CI / CD Pipeline Documentation

## Overview

This Directory contains the Strategic & Operational Documentation for the **HeadStart E-Platform** Continuous Integration (CI) & Continuous Deployment (CD) Infrastructure.

Our pipelines are designed to maintain the integrity of a **GOLD Approved Learning Partner** platform, ensuring that every code change undergoes rigorous validation across our Academic (LMS) & Advisory (BPO / Tax / Audit) Modules.

### Core Objectives

- **Integrity** : 7 Mandatory Validation Gates before any Production Ddeployment.

- **Security** : Automated Scanning for PII Leaks & Session Management Vulnerabilities, Dependency Patches (Example : `node-forge`).

- **High-Integrity Strategy** : Shifted from Cost-Optimization to a High-Integrity Model to support Public Repository Safety & Full Auditability.

- **Reliability** : 100% Success Requirement for **SSL Commerz** Payment Simulations & 99% Code Coverage.

---

## 🏗️ Pipeline Architecture

The HeadStart Ecosystem utilizes a Dual-Pipeline Approach to manage the PostgreSQL-Expo-NextJS-Django Stack.

### 1. CI Pipeline (`ci.yaml`)

Triggered on every Pull Request & Push to `main` & `devEnv`.

- **Linting & Formatting** : Enforces **ESLint 10 Flat Configuration** & strict TypeScript 6.0 Standards.

- **Security Audit** : Running `trivy` & `npm audit` to catch Vulnerabilities in the ERP / CRM Modules.

- **Test Suite** : Execution of `pytest` (Backend), `vitest` (Frontend) & `expo-doctor` (Mobile).

- **Quality Gates** : Requires 99%+ Test Coverage via CodeCov. PRs are blocked if Coverage drops below this Threshold.

### 2. CD Pipeline (`cd.yaml`)

Triggered upon Merging to Environment-Specific Branches : `devEnv`, `stagingEnv`, `prodEnv`.

- **Registry Orchestration** : Builds & Pushes Production-Optimized Docker Images to **GHCR** (GitHub Container Registry).

- **Scoped Permissions** : Utilizes Dedicated Registry Tokens to resolve `403 Forbidden` Errors & ensure Secure Public Hosting.

- **Automated Deployment** : Synchronizes Containers with the Target Environment after passing all CI Gates.

---

## 📂 Documentation Roadmap

Refer to the following files for specific Operational Guidance :

| File                                                           | Description                                                                   |
| :------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| [**STRATEGY.md**](./STRATEGY.md)                               | The "High-Integrity" Roadmap, 99% Coverage Mandate & Registry Security.       |
| [**MAINTENANCE.md**](./MAINTENANCE.md)                         | Protocols for Dependency Upgrades, Cache Management & SSL Commerz Stability.  |
| [**SECURITY_AUDIT_PROTOCOL.md**](./SECURITY_AUDIT_PROTOCOL.md) | Logic Validation for **Profile Lock** (2-Attempt Limit) & **SASM** Integrity. |
| [**GITHUB_SECRETS_SETUP.md**](./GITHUB_SECRETS_SETUP.md)       | Instructions for configuring `CODECOV_TOKEN`, `GHCR_TOKEN` & Payment Keys.    |
| [**TROUBLESHOOTING.md**](./TROUBLESHOOTING.md)                 | Solutions for Registry Permission Errors & Docker Cache (10GB) Limit Issues.  |

---

## 🛠️ Quick Start for DevOps

1. **Configure Secrets** : Ensure the `CODECOV_TOKEN` & GHCR Scoped Tokens are added to the GitHub Repository Secrets.

2. **Local Validation** : Before Pushing, run the Automation Script to verify Coverage :

```bash
./scripts/build.sh --env development
```

3. **Vulnerability Shield** : Regularly audit the Pipeline Logs for Dependency Warnings to maintain the "Zero Vulnerability" Status.

## 🆘 Support & Contributions

For Pipeline Failures / Infrastructure Change Requests (CRs) :

- **Discussions** : [HeadStart GitHub Discussions](https://github.com/corebit-bd/headstart/discussions)
- **Issues** : Open a Ticket with the `cicd` Tag for Registry / Coverage Threshold Adjustments.
- **Maintainer** : CoreBit Digital Lab

**Current Version** : 0.1.0<br/>
**Last System Audit** : April 09, 2026
