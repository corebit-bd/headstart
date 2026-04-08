# 🚀 HeadStart CI / CD Pipeline Documentation

## Overview

This Directory contains the Strategic & Operational Documentation for the **HeadStart E-Platform** Continuous Integration (CI) & Continuous Deployment (CD) Infrastructure.

Our pipelines are designed to maintain the integrity of a **GOLD Approved Learning Partner** platform, ensuring that every code change undergoes rigorous validation across our Academic (LMS) & Advisory (BPO / Tax / Audit) Modules.

### Core Objectives

- **Integrity** : 7 Mandatory Validation Gates before any Production Ddeployment.

- **Security** : Automated Scanning for PII Leaks & Session Management Vulnerabilities.

- **Cost-Efficiency** : Hybrid Layered Caching to remain within GitHub's 1,672/2,000 Free-Tier Minute Envelope.

- **Reliability** : 100% Success Requirement for **SSL Commerz** Payment Simulations.

---

## 🏗️ Pipeline Architecture

The HeadStart Ecosystem utilizes a Dual-Pipeline Approach to manage the PostgreSQL-Expo-NextJS-Django Stack.

### 1. CI Pipeline (`ci.yaml`)

Triggered on every Pull Request & Push to `main`.

- **Linting & Formatting** : Ensuring Code adheres to HeadStart's Architectural Standards.

- **Security Audit** : Running `trivy` & `npm audit` to catch Vulnerabilities in the ER / CRM Modules.

- **Test Suite** : Execution of `pytest` (Backend), `vitest` (Frontend) & `expo-doctor` (Mobile).

- **Quality Gates** : Requires 99%+ Test Coverage via Codecov.

### 2. CD Pipeline (`cd.yaml`)

Triggered upon Merging to Environment-Specific Branches.

- **Development** : Automatic Deploy to the internal Testing Server.

- **Staging** : Deploy to the QA Environment for Stakeholder Review (Example : ACCA Course Material Audits).

- **Production** : Manual Approval-Gated Deployment to the live E-Platform.

---

## 📂 Documentation Roadmap

Refer to the following files for specific Operational Guidance :

| File                                                     | Purpose                                                                                         |
| :------------------------------------------------------- | :---------------------------------------------------------------------------------------------- |
| [**STRATEGY.md**](./STRATEGY.md)                         | High-Level Overview of Branch Tagging (`feature/`, `data/`, `fix/` etc.) & the Testing Pyramid. |
| [**MAINTENANCE.md**](./MAINTENANCE.md)                   | Mandatory Protocols for Dependency Upgrades & **SSL Commerz** Stability Checks.                 |
| [**GITHUB_SECRETS_SETUP.md**](./GITHUB_SECRETS_SETUP.md) | Instructions for Configuring `EXPO_TOKEN`, `CODECOV_TOKEN`, & Payment Keys.                     |
| [**TROUBLESHOOTING.md**](./TROUBLESHOOTING.md)           | Solutions for common Pipeline Failures & GitGuardian False Positives.                           |
| [**UPGRADE_GUIDE.md**](./UPGRADE_GUIDE.md)               | Step-by-step workflow for Major Version Shifts (Example, Moving to Python 3.13).                |

---

## 🛠️ Quick Start for DevOps

1. **Configure Secrets** : Ensure all Tokens from the [Secrets Guide](./GITHUB_SECRETS_SETUP.md) are added to the GitHub Repository.

2. **Branch Naming** : All Work must follow the `[tag]/[username]/[story-id]` convention (Example : `feature/jzhk/SYS-001`).

3. **Local Validation** : Before Pushing, run the local Build Script :

```bash
./scripts/build.sh --env development
```

## 🆘 Support & Contributions

For Pipeline Failures / Infrastructure Change Requests (CRs) :

- **Discussions** : [HeadStart GitHub Discussions](https://github.com/corebit-bd/headstart/discussions)
- **Issues** : Open a Ticket with the `cicd` Tag.
- **Maintainer** : CoreBit Digital Lab

**Current Version** : 0.1.0<br/>
**Last System Audit** : April 07, 2026
