# 🤝 Contributing to HeadStart E-Platform

## 📋 Table of Contents

- [About HeadStart](#about-headstart)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Branch Naming Convention](#branch-naming-convention)
- [Pull Request Process](#pull-request-process)
- [Commit Message Standards](#commit-message-standards)
- [Testing & Quality Gates](#testing-requirements)
- [Design System Compliance](#design-system-compliance)

---

## 🏛️ About HeadStart

HeadStart is a **GOLD Approved Learning Partner** providing a Dual-Wing pPlatform for Academic Excellence (LMS) & Professional Advisory Services (ERP / CRM). Contributions must maintain the "GOLD" Standard of Integrity, Security & Performance.

---

## 🚀 Getting Started

### Local Setup

1. **Clone the Repository** : `git clone https://github.com/corebit-bd/headstart.git`

2. **Environment Configuration** : Copy `.env.example` to `.env` & configure your local PostgreSQL & Redis Credentials.

3. **Initialize Containers** :

```bash
docker-compose up -d
./scripts/build.sh --env development
```

---

## 🖇️ Branch Naming Convention

We follow a strict Tagging System to ensure the CI / CD Pipeline correctly categorizes & Caches Builds.

**Format** : `[tag]/[username]/[user-story-id]`<br />
_Example_ : `feature/jzhk/SYS-01`

### Available Tags

- `feature/` : New Platform Functionality.
- `fix/` : Bug Fixes.
- `security/` : Critical for **Profile Lock** / **SASM** Logic.
- `documentation/` : Updates to `.md` Files.
- `style/` : UI / UX Changes (Colors / Typography).
- `refactor/` : Code Restructuring without Functional Changes.
- `data/` : Database Migrations / seed Data for ACCA Modules.
- `test/` : Adding / Modifying Tests.
- `chore/` : Maintenance, Build Scripts / Dependency Upgrades.
- `cicd/` : Changes to GitHub Actions (`ci.yaml` / `cd.yaml`).
- `performance/` : Performance Optimization Changes.
- `devEx/` : Improvements to the Developer Experience.
- `revert/` : Undoing Previous Commits.
- `miscellaneous/` : Use for anything that does not clearly fall into any of the previous Tags.

---

## 📥 Pull Request (PR) Process

1. **Safety Check** : If performing a Dependency Upgrade, you MUST create a `backup/pre-[module]-YYYYMMDD` Branch first, as per `MAINTENANCE.md`.

2. **Commit** : Use Conventional Commits (`tag : description`).

3. **Push** : Ensure your Branch passes all 7 Quality Gates in the CI Pipeline.

4. **Review** : All PRs require at least one Peer Approval.

5. **Merge** : Merges to `main` trigger the Automated Deployment to the `devEnv`.

---

## 🧪 Testing & Quality Gates

HeadStart maintains a 99%+ Test Coverage Requirement.

- **Backend** : Run `pytest` & ensure no Regressions in the SSL Commerz Logic.
- **Frontend** : Run `npm test` & verify **Montserrat / Inter** Font Rendering.
- **Security** : Verify that the **Profile Lock** triggers after 2 Failed Attempts.

---

## 🎨 Design System Compliance

All UI Contributions must adhere to the HeadStart Basic Design Specification :

- **Typography** : Headers (Montserrat 700/500), Body (Inter 400/600).

- **Colors** : Primary (`#790BBE`), Secondary Gold (`#FEE054`).

- **Accessibility** : All Interactive Elements must pass **WCAG 2.1 Level AA** Standards.

---

## 🆘 Support

If you encounter Issues with the CI / CD Pipeline / Architectural Decisions, refer to :

- [Testing Strategy](/documentation/ci-cd/STRATEGY.md)
- [Troubleshooting](/documentation/ci-cd/TROUBLESHOOTING.md)

**Thank you for helping build the future of Professional Accountancy! 🎉**

**Version** : 1.0.12<br />
**Maintainer** : CoreBit Digital Lab<br />
**Last Updated** : April 08, 2026
