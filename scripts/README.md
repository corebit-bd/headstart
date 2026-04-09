# 🛠️ HeadStart Automation Scripts

This Directory contains the Automation Suite designed to streamline the Development, Validation & Deployment of the **HeadStart E-Platform**. These Scripts ensure that both the Academic (LMS) & Advisory (ERP / CRM) Wings remain synchronized & "GOLD Approved".

---

## 📁 Available Scripts

### 1. `setup.sh` - Initial Environment Provisioning

The Primary Script for configuring a new Development Workstation from Scratch.

**Usage** :

```bash
./scripts/setup.sh
```

**Workflow** :

- **✅ Prerequisite Audit** : Verifies Docker, Python 3.13 & Node 24.

- **✅ Virtualization** : Provisions the Python Virtual Environment (`venv`).

- **✅ Dependency Tree** : Installs Backend (Django / FastAPI), Frontend (NextJS) & Mobile (Expo) Packages.

- **✅ Environment Layer** : Generates `.env` Files from Secure Templates.

- **✅ Infrastructure** : Spins up PostgreSQL 15 & Redis 7 Containers.

### 2. `dev-start.sh` - Dual-Wing Development Server

The `daily-driver` Script to launch the full HeadStart Ecosystem.

**Usage** :

```bash
./scripts/dev-start.sh
```

**Access URLs** :

- Frontend : http://localhost:3000
- Backend : http://localhost:8000
- API Documentation & Specification : http://localhost:8000/swagger/
- Administrator Backend Panel : http://localhost:8000/admin/
- Design System (Storybook) : http://localhost:6006

### 3. `build.sh` - Validation & Production Preparation

The Core Utility for the CI / CD Pipeline & Local Release Testing.

**Usage** :

```bash
./scripts/build.sh --env production
```

**Key Features** :

- **🧪 Gatekeeping Validation** : Runs Tests for the MCQ Logic & Profile Lock Mechanism.

- **📊 Coverage Enforcement** : Triggers Local `pytest` & `vitest` runs to ensure Compliance with the **99% CodeCov Threshold**.

- **🏗️ Image Orchestration** : Builds Production-Optimized Docker Images for GHCR (`ghcr.io/corebit-bd/headstart`).

- **🧹 Resource Management** : Includes a `--cleanup` Flag to manage the 10GB Docker Cache Limit.

---

## 🎯 Operational Best Practices

1. **Clean Rebuilds** : If the Database Schema for the Advisory Wing changes significantly, run :

```bash
docker-compose down -v
./scripts/setup.sh
```

2. **Environment Promotion** : Always test Builds locally using `./scripts/build.sh --env staging` before pushing to GitHub to avoid Registry `403 Forbidden` Errors.

3. **Execution Permissions** : Ensure all Scripts are executable : `chmod +x scripts/*.sh`.

4. **Vulnerability Shield** : Run Scripts regularly to ensure all Local Dependencies match the Patched Security Versions (Example : `node-forge v1.4.0`).

---

## 🔐 Security & Integrity Notes

- **⚠️ Secrets** : These Scripts generate `.env` files. Ensure they are never committed to Version Control.

- **✅ Registry Safety** : Deployment Scripts are configured to use Scoped Tokens for GHCR to ensure Public Repository Safety.

- **✅ Audit** : Build Failures in the Security Phase usually indicate a Regression in the **Profile Lock** / **SASM** Logic.

---

**Maintained by CoreBit Digital Lab Version** : 0.1.0<br />
**Compliance** : GOLD Approved Learning Partner Platform
