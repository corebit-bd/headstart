# 🏛️ HeadStart E-Platform

**PostgreSQL · ReactJS Native (Expo) · NextJS 16 · Django 5.2**

HeadStart is a Professional, High-Security E-Platform designed for a **GOLD Approved Learning Partner**. It features a unique Dual-Wing Architecture that integrates an **Academic LMS** (ACCA / CAT Training) with an **Advisory ERP / CRM** (BPO / Audit / Tax Services) into a Single, Cohesive EcoSystem.

[![CI Pipeline](https://github.com/corebit-bd/headstart/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/corebit-bd/headstart/actions/workflows/ci.yaml)
[![Security Policy](https://img.shields.io/badge/Security-Policy-blue.svg)](SECURITY.md)
[![Vulnerabilities](https://img.shields.io/badge/Vulnerabilities-0-brightgreen.svg)](https://github.com/corebit-bd/headstart/security)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![codecov](https://codecov.io/gh/corebit-bd/headstart/branch/main/graph/badge.svg)](https://codecov.io/gh/corebit-bd/headstart)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Core Wings](#core-wings)
- [Tech Stack](#tech-stack)
- [Design System](#design-system)
- [Security Gates](#security-gates)
- [Infrastructure & CI / CD](#infrastructure--ci--cd)
- [Quick Start](#quick-start)
- [Documentation](#documentation)

---

## Overview

HeadStart merges the prestige of a Top-Tier Accountancy firm with a modern, Data-Driven Learning Experience. It serves four Primary User Roles : **Students, Teachers, Staff & Administrators**, providing each with a tailored Portal to manage Academic Progress / Business Operations.

## Core Wings

### 1. Academic Wing (LMS)

- **ACCA / CAT Modules** : Comprehensive Resource Management & Lecture Delivery.
- **Gatekeeping Logic** : Automated Progression where Students must pass an MCQ Quiz to unlock the next Module.
- **Student Portal** : Interactive Dashboard for Progress Tracking & Forum Discussions.

### 2. Advisory Wing (ERP / CRM / SCM)

- **Business Optimization** : Tools for BPO, Taxation & Audit Consultancy.
- **Financial Reporting** : Accurate Revenue, Expense & Profit Tracking for Decision-Makers.
- **Resource Outsourcing** : Managing Consultancy Pipelines & Client Records.

---

## Tech Stack

- **Backend** : Django 5.2 (REST & GraphQL), FastAPI (Edge Services), Celery (Asynchronous Tasks).
- **Frontend** : NextJS 16 (App Router), TypeScript 6.0, Tailwind CSS v4.2.
- **Mobile** : ReactJS Native with Expo (Cross-Platform Student Application).
- **Linting** : Strict ESLint 9 Flat Configuration ensuring Code Quality across the Monorepo.
- **Infrastructure** : PostgreSQL 15, Redis 7, Docker Orchestration, GitHub Container Registry (GHCR).

---

## Design System

The Platform utilizes a "**Professional Academic Excellence**" Visual Strategy :

- **Primary Color** : Royal Purple (`#790BBE`)
- **Accent Color** : HeadStart Gold (`#FEE054`)
- **Typography** :
  - **Montserrat** : Headers (Bold 700 / Medium 500)
  - **Inter** : Body & Data (Regular 400 / Semi-Bold 600)

---

## Security Gates

HeadStart implements Enterprise-Grade Security Patterns :

1. **Profile Lock** : Accounts are locked after **2 Failed OTP / CAPTCHA Attempts**.
2. **SASM** : Single Active Session Management to prevent Account Sharing.
3. **Portal Siloing** : Strict Role-Based Access Control (RBAC) ensuring Advisory Modules are invisible to Non-Admins.
4. **Payment Integrity** : Secure **SSL Commerz** Integration with 100% Transaction Verification.
5. **High-Integrity CI / CD** : 100% Test Coverage Requirement for Security-Critical Modules.
6. **Vulnerability Shield** : Active Monitoring & Patching of Core Dependencies (Example : `node-forge`).

---

## Infrastructure & CI / CD

The Repository utilizes a **High-Integrity Pipeline** designed for Public Repository Safety :

- **Automated Audits** : Every Rush to `devEnv`, `stagingEnv` & `main` triggers a full Security & Logic Audit.
- **Coverage Tracking** : Integrated with **CodeCov** to enforce a 99% Coverage Threshold.
- **Containerization** : Automated Builds pushed to GHCR with Scoped Registry Tokens for Secure Deployment.

---

## Quick Start

```bash
# 1. Clone the Repository
git clone https://github.com/corebit-bd/headstart.git

# 2. Setup Environment
cp .env.example .env

# 3. Build & Launch (Development)
./scripts/build.sh --env development
```

---

## Documentation

- [CI / CD Strategy](/documentation/ci-cd/STRATEGY.md)
- [Maintenance Protocol](/documentation/ci-cd/MAINTENANCE.md)
- [Security Audit Protocol](/documentation/ci-cd/SECURITY_AUDIT_PROTOCOL.md)
- [Contributing Guidelines](/CONTRIBUTING.md)

---

**Built by CoreBit Digital Lab Version** : 0.1.0<br />
**Status** : GOLD Approved Compliance Ready
