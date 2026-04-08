# 🏛️ HeadStart Backend - Django Core

## 📋 Overview

The HeadStart Backend is a Robust, High-Security Engine built on **Django 5.2+**. It serves as the Centralized Intelligence for both the **Academic Wing** (LMS) & the **Advisory Wing** (ERP / CRM / SCM).

As a **GOLD Approved Learning Partner** Platform, the Backend is engineered for Financial Accuracy, Strict Session Security & Multi-Tenant Isolation.

---

## 🏗️ Architecture & Technical Stack

### Core Technologies

- **Django 5.2+ / Python 3.13** - Primary Application Framework.
- **Django REST Framework 3.16** - RESTful API for Student & Teacher Portals.
- **Graphene-Django 3.2.3** - GraphQL API for Complex Administrative Data Fetching.
- **FastAPI 0.119** - Edge Services for High-Performance Financial Reporting.
- **PostgreSQL 15** - Primary Database with Tenant-Aware Schemas.
- **Redis 7** - Caching, Task Queue & **SASM** (Single Active Session Management) Tracking.
- **Celery 5.5.3** - Asynchronous Processing for Email / OTP & Report Generation.

### Domain-Specific Logic

- **LMS Gatekeeping** : Implements Logic where Lecture $N+1$ remains locked until an MCQ Quiz for Lecture $N$ is passed.

- **Administrative Silo** : The ERP, CRM & SCM Modules are architecturally restricted to the Administrator Portal.
- **Payment Integration** : Native Integration with **SSL Commerz** for Secure Course Enrollments.

---

## 📁 Directory Structure

```text
backend/
├── core/                     # Django Project Settings
│   ├── settings/             # Environment-Specific (Dev/Staging/Prod)
│   └── urls.py               # Main Routing (REST & GraphQL)
├── apps/
│   ├── authentication/       # SASM & Profile Lock (2-Attempt Limit)
│   ├── tenants/              # Organization & Gold Partner Metadata
│   ├── lms/                  # Courses, MCQ Gatekeeping & Lectures
│   ├── advisory/             # ERP, CRM & SCM Logic (Admin Only)
│   └── payments/             # SSL Commerz Handshake & IPN
├── scripts/                  # Maintenance & Database Seeding
└── requirements.txt          # Production Dependencies
```

---

## 🔐 Security Standards

All Backend Contributions must adhere to the following :

1. **Profile Lock** : Any User (except Admins) must be locked out after 2 unsuccessful OTP / CAPTCHA Attempts.

2. **SASM**: Only One Active Session is allowed per User. New Logins must invalidate previous Tokens via Redis.

3. **Audit Trails** : Every Financial Transaction & Grade Change must be logged in the `audit` Schema.

---

## 🎨 Design System Compliance (Data-Layer)

When generating Responses for the Frontend :

- **Accuracy** : Financial Data must be returned with exact Decimal Precision for Advisory Reports.

- **Typographic Context** : Ensure API Documentation & System-Generated Emails use Montserrat (Headings) & Inter (Body) Font Stacks.

- **Brand Colors** : System-Generated HTML Emails must utilize **`#790BBE`** (Royal Purple) & **`#FEE054`** (HeadStart Gold).

---

## 🚀 Development Workflow

1. **Environment** : Ensure `backend/.env` is configured.

2. **Setup** :

```bash
docker-compose up -d postgres redis
python manage.py migrate
python manage.py loaddata initial_system_config
```

3. **Testing** : `pytest` (Mandatory 99%+ Coverage).

---

Built by CoreBit Digital Lab<br />
**Version** : 0.1.0<br />
**Status** : GOLD Approved Compliance Ready
