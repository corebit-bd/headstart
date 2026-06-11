# Project Kick-Off ⚽️

## 1. Project Vision 🚀

HeadStart aspires to become Bangladesh's leading ACCA-accredited digital learning institution — one that seamlessly bridges professional accounting education with modern technology. The vision is to build a unified, scalable digital ecosystem that empowers students, teachers, staff and administrators through purpose-built portals, intelligent automation and data-driven insights.

This ecosystem is not a single product; it is a phased, interconnected platform — spanning a public-facing website, a full Learning Management System (LMS) and an integrated ERP + CRM + SCM Suite — all designed to grow with HeadStart's ambition and student community.

---

## 2. Purpose

This Project Kick-Off document serves as the foundational reference for all stakeholders involved in the design and development of HeadStart's digital platform. Specifically, it aims to:

- Establish a shared understanding of the project's goals, scope and expectations.
- Define the phased delivery structure and its sequential dependencies.
- Align the development team, management and stakeholders on key decisions before execution begins.
- Serve as a living reference that can be revisited at the start of each new phase.

---

## 3. Overview Statement

HeadStart is undertaking the design and development of a multi-phase digital platform to modernise its educational and administrative operations. The platform will be delivered in three distinct phases:

| Phase     | Description                                                                                                                                                                    |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Phase 1   | Public Website — a professional, content-rich marketing and information site representing HeadStart to prospective and current students, faculty and partners.                |
| Phase 1.1 | CMS Integration — enabling HeadStart administrators to independently manage and update website content without technical assistance.                                           |
| Phase 2   | Learning Management System (LMS) — a secure, role-based platform for course delivery, student enrolment, resource management, assessments and SSLCommerz payment integration. |
| Phase 3   | ERP + CRM + SCM — an enterprise operations suite covering student lifecycle management, staff operations, supply chain and revenue reporting.                                 |

Each phase must be completed and validated before the subsequent phase commences. This sequential dependency is a hard constraint of the project.

---

## 4. Business Goals 🥅

### 4.1 Student Experience & Growth

- Increase student enrolment by providing a seamless digital onboarding and course registration experience.
- Improve student retention through structured learning paths, module-gated MCQ assessments and 24-hour forum support.
- Elevate HeadStart's brand perception as a technologically advanced ACCA learning partner.

### 4.2 Operational Efficiency

- Reduce administrative overhead by automating notice distribution, resource management and progress tracking.
- Enable real-time revenue, expense and profit visibility for administrators through integrated financial reporting.

### 4.3 Security & Compliance

- Enforce single-session login, progressive lockout and audit logging to protect user accounts and institutional data.
- Maintain compliance with ACCA Accreditation Standards through transparent record-keeping and reporting.

### 4.4 Scalability & Future Readiness

- Build a modular architecture that supports Phase 3 ERP / CRM / SCM without architectural rework.
- Integrate AI Support Agents from Phase 2 onwards to provide 24/7 student and staff assistance.

---

## 5. Business Model(s)

### 5.1  Tuition & Course Fee Revenue (Primary)

HeadStart's core revenue stream is student tuition fees for ACCA-level courses (Foundation, Knowledge, Skills, Professional) and Skill Development Trainings. Course enrollment and payment processing will be handled via SSLCommerz, Bangladesh's leading payment gateway.

### 5.2  Tiered Access Model

| User Type        | Access Permission                                                                                         |
|------------------|-----------------------------------------------------------------------------------------------------------|
| General / Public | Free access to the public website and publicly listed resources only.                                     |
| Student          | Paid enrolment grants full LMS access: dashboards, enrolled courses, private resources, forum and blogs. |
| Teacher          | Institutional role; access to assigned courses, student lists, resource management and forum.            |
| Staff            | Operational role; access to ERP, CRM, SCM, student/teacher directories and forum.                        |
| Administrator    | Full ecosystem access including financial reporting, system audit, content management and all portals.   |

### 5.3  Freemium Public Engagement

Public resources and course information are freely accessible to attract prospective students. Conversion to paid enrolment is facilitated through course listings, exam result showcases, career counselling highlights and national prize winner profiles.

---

## 6. Business Logic

### 6.1 Role-Based Access Control (RBAC)

All platform access is governed by RBAC. Roles are: General, Student, Teacher, Staff and Administrator. Every role combinations are mutually exclusive.

### 6.2 Authentication & Security

- Email + Password with reCAPTCHA triggered after failed login attempts.
- Sign in with Google (OAuth 2.0) supported.
- OTP / MFA available as optional User Settings (Post-MVP, Phase 2+).
- Single Active Session enforced — concurrent multi-device login is not permitted.
- Progressive Lockout: Exponential Backoff delays applied after failed attempts, followed by Full Account Lock at 5 consecutive failures.
- Self-Service Unlock via Email Verification Link is the primary recovery path; Administrator intervention is the fallback only.

### 6.3 Learning Logic (LMS)

- Courses are structured into Modules and Lectures.
- Students must complete a module's lectures and pass a gated MCQ Test before unlocking the next module.
- Course access is contingent on successful payment processing via SSLCommerz.
- Teachers are assigned to courses by Administrators; they cannot self-assign.

### 6.4 ID Generation

From Phase 2 onwards, the platform adopts a dual-column ID strategy that separates internal performance concerns from external readability and security.

- **Internal Primary Key - `UUID v7`** : Used as the native primary key in the database. `UUID v7`’s time-ordered structure ensures fast B-tree indexing and efficient inter-service communication across the LMS, ERP, CRM and SCM. UUIDs are never exposed in public-facing APIs or URLs.

- **External Display ID — `HS-ROLE`-Prefixed** : A separate `display_id` column carries a human-readable, HS-prefixed identifier (*Example* : `HS-STD-00042` for Students, `HS-TCH-02045` for Teachers, `HS-STF-29651` for Staff Members) per entity type. This ID is used in all API responses, URLs, receipts and user-facing communication. Per-model prefixes (Example : `HS-STD-` for Students, `HS-TCH-` for Teachers, `HS-STF-` for Staff Members) aid at-a-glance identification in support and administration contexts.

- **Security — Scoped Authorisation** : Exposing a predictable or structured ID does not constitute a security vulnerability in isolation. IDOR (Insecure Direct Object Reference) risk is mitigated through scoped querysets and role-based access checks at every data access point — not by obscuring the ID format itself. The ID format is the last line of defence, not the only one.

> Use of `UUID v7` internally for performance, expose of prefixed `display_id` externally for readability and secure everything with scoped authorization.

### 6.5 System Audit (4W Framework)

| W-Type | Description                                                                                   |
|--------|-----------------------------------------------------------------------------------------------|
| What   | Action performed — *Example* : login, logout, failed attempt, account lock, unlock, content update. |
| Who    | User ID and assigned role(s) at the time of the action.                                       |
| When   | UTC timestamp of the event.                                                                   |
| Where  | IP address and User-Agent (device / browser) at point of action.                              |

Suspicious activity flags are automatically raised for : login from an unrecognised geography, login following multiple consecutive failures and simultaneous session attempt detection. These flags are surfaced in the Administrator's audit dashboard and can trigger alert notifications.

---

## 7. Terms

| Term                | Definition                                                                                                                                        |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| ACCA                | Association of Chartered Certified Accountants — the global professional accounting body HeadStart is accredited by.                              |
| LMS                 | Learning Management System — the digital platform for course delivery, assessment, and student-teacher interaction (Phase 2).                     |
| ERP                 | Enterprise Resource Planning — the system for managing HeadStart's internal business processes (Phase 3).                                         |
| CRM                 | Customer Relationship Management — the system for managing student and prospect relationships (Phase 3).                                          |
| SCM                 | Supply Chain Management — the system for managing HeadStart's resource procurement and supply operations (Phase 3).                               |
| CMS                 | Content Management System — the tool enabling administrators to update the public website without developer involvement (Phase 1.1).              |
| SSLCommerz          | Bangladesh's leading online payment gateway, used for processing student course fee payments within the LMS.                                      |
| RBAC                | Role-Based Access Control — the permission model that governs what each user role can view and perform across the platform.                       |
| MCQ                 | Multiple Choice Questions — gated assessments students must pass to unlock the next module in the LMS.                                            |
| OAuth 2.0           | Open Authorization Standard used for Google Sign-In integration.                                                                                  |
| reCAPTCHA           | Google's bot-detection challenge, triggered during login after failed authentication attempts.                                                    |
| OTP / MFA           | One-Time Password / Multi-Factor Authentication — optional additional login security layer (Post-MVP, Phase 2+).                                  |
| Exponential Backoff | A progressive delay strategy applied after each failed login attempt, escalating wait times before allowing the next attempt.                     |
| UTC                 | Coordinated Universal Time — the standard timezone used for all system audit timestamps.                                                          |
| `HS-ROLE-` Type Prefix           | The display prefix `HS-ROLE-` prepended to all entity IDs of Students, Teachers & Staff Members from Phase 2 onwards (*Example* : `HS-STD-00042` for Students, `HS-TCH-00016` for Teachers, `HS-STF-72365` for Staff Members) for human-readable identification.                      |
| AI Agent            | HeadStart Support Center AI — an intelligent assistant / agent deployed from Phase 2 to answer student, teacher and staff queries when no personnel are available. |
| 4W Audit            | The Audit Log Framework capturing What, Who, When and Where for every significant system event.                                                  |
| Single Session      | The platform rule permitting only one active authenticated session per user at any given time.                                                    |
| Phase               | A discrete, independently deliverable stage of the HeadStart digital ecosystem, each dependent on its predecessor being complete.                 |

---

## 8. Project Scope

### 8.1 In Scope

- **Phase 1** : Full public website with Top Menu navigation and all six Core Pages (Home, About Us, Courses, Life at HeadStart, Students Support, Contact Us).
  - **Phase 1.1** : CMS integration enabling HeadStart administrators to manage website content independently.

- **Phase 2** : LMS including Student Portal, Teacher Portal, Administrator Portal, Course Management, SSLCommerz Payment Integration, Module-Gated MCQ Assessments, Forum, Resource Management, Notice Board, Blogs, & AI Support Agent.

- **Phase 3** : ERP + CRM + SCM Suite with Staff Portal, Administrator Financial Reporting, Student Lifecycle Management and full operational dashboards.

- Authentication System (Email + Password, Google OAuth 2.0) with `reCAPTCHA`, Single-Session enforcement, progressive lockout, and self-service unlock.

- System Audit logging using the 4W Framework with suspicious activity flagging.

- `HS-ROLE-` type prefixed ID generation for all entities of Students, Teachers & Staff Members from Phase 2 onwards.

- Email Newsletter System.

#### Future Scope

- Mobile Native Application (iOS / Android) for HeadStart.

- Live video streaming or synchronous online classroom functionality.

### 8.2 Out of Scope

- 3rd Party LMS / ERP integrations beyond those explicitly specified.

- OTP / MFA implementation is explicitly deferred to Post-MVP of Phase 2 and Phase 3.

- Any hardware procurement, physical infrastructure or on-premise server setup.

### 8.3 Assumptions

1. HeadStart will provide all content (course descriptions, faculty bios, images, accreditation details) required for Phase 1 in a timely manner.

2. SSLCommerz merchant credentials and sandbox access will be provided before Phase 2 payment integration begins.

3. Google OAuth 2.0 credentials (Client ID and Secret) will be provisioned by HeadStart prior to Phase 2 development.

4. A production-grade cloud infrastructure environment will be provisioned before Phase 1 goes live.

5. Each phase will be signed off by HeadStart management before the next phase commences.

---

## 9. High-Level Features List

### 9.1 Phase 1 — Public Website

- **Responsive Multi-Page Website** : Home, About Us, Courses, Life at HeadStart, Students Support, Contact Us.
- **About Us — Tabbed Sections** : Introduction, Mission & Vision, Faculty, National Prize Winners, Alumni, Accreditations, Partnerships.
- **Courses** — ACCA levels (Foundation, Knowledge, Skills, Professional) and Skill Development Trainings (MS Office, AI, Bangladesh Tax & VAT).
- **Life at HeadStart** — Exam Results, ACCA Connect, Career Counselling, Training Sessions, Extracurricular Activities, Upcoming Events.
- **Students Support** — Job Placement, Resources (Public Tier), Blogs, Forum.

### 9.2 Phase 1.1 — CMS

- Administrator Portal to manage and update all website content.
- Content editor for text, images and media across all Core Pages.

### 9.3 Phase 2 — LMS

- **Role-based Portals** : Student Dashboard, Teacher Dashboard, Administrator Dashboard.
- Course Enrolment, Course Catalogue and SSLCommerz Payment Processing.
- Module and Lecture Management with MCQ-gated progression.
- **Resource Management** : Upload, Manage and Access documents / files by role and enrollment.
- 24-hour Forum with full CRUD access for Students, Teachers, Staff and Administrators.
- Blog management for Students and Teachers.
- **Notice Board** : Managed by Staff and Administrators, visible to all registered users.
- `HS-ROLE-` type prefixed auto-generated IDs for all entities of Students, Teachers & Staff Members.
- **Authentication** : Email + Password with `reCAPTCHA`, Google OAuth 2.0, Single-Session enforcement.
- Progressive lockout (Exponential Backoff + Full Lock) with email-based self-service unlock.
- System Audit Log (4W) with suspicious activity flagging — visible to Administrators.
- AI Support Agent for 365 days 24/7 query resolution.
- Email Newsletter System.

### 9.4 Phase 3 — ERP + CRM + SCM

- Staff Portal with Staff Dashboard, Student and Teacher Directory Access.
- **Administrator Financial Reporting** : Revenue, Expense and Profit Dashboards.
- Full ERP, CRM and SCM Operational Modules for HeadStart's internal business processes.
- Continuation of AI Support Agent, Audit and Newsletter capabilities.

---

## 10. Key Deliverables

| #  | Phase     | Deliverable                                                                       | Acceptance Condition                                                                  |
|----|-----------|-----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| 1  | Phase 1   | Fully responsive public website with all 6 Core Pages and tabbed sections.        | All pages render correctly; content matches HeadStart-approved copy.                  |
| 2  | Phase 1   | Top Menu navigation with correct routing and active states.                       | All 5 menu items navigate to correct pages; mobile menu functional.                   |
| 3  | Phase 1.1 | CMS integration with Administrator login and full content management capability.  | Admin can log in, edit and publish changes to all Core Pages independently.          |
| 4  | Phase 2   | Student Portal — Dashboard, enrolment, course access, resources, forum, blogs.    | Student can enrol, pay via SSLCommerz, access content, post and manage resources.    |
| 5  | Phase 2   | Teacher Portal — Dashboard, assigned courses, student lists, resources, forum.    | Teacher can view assignments, manage resources and engage via forum.                 |
| 6  | Phase 2   | LMS MCQ-gated module progression.                                                 | Students cannot access Module N+1 until MCQ for Module N is passed.                   |
| 7  | Phase 2   | Authentication System — Email + Password, Google OAuth, `reCAPTCHA`, lockout, unlock. | All auth flows function correctly; lockout triggers at 5 failures; unlock email sent. |
| 8  | Phase 2   | System Audit Log (4W) with suspicious activity detection.                         | All login events logged with correct 4W data; flags raised on suspicious patterns.    |
| 9  | Phase 2   | AI Support Agent deployed and responsive.                                         | Agent correctly responds to common queries when no human is online.     |
| 10 | Phase 3   | Staff Portal — Dashboard, student/teacher directories, notice board, forum.       | Staff can navigate all assigned sections; directory data is accurate and current.     |
| 11 | Phase 3   | Administrator financial reporting — Revenue, Expense, Profit.                     | Reports reflect accurate data; exportable; accessible only to Administrators.         |
| 12 | Phase 3   | Full ERP + CRM + SCM modules operational.                                         | All modules functional; data flows correctly between LMS and ERP / CRM / SCM.             |

---

### 11. Success Criteria ✅

#### 11.1 Phase 1 & Phase 1.1

- All 6 Core Pages and their respective tabs / sections are live, responsive and content-complete.
- CMS is operational and the Administrator can update all website content without developer assistance within 15 minutes of training.
- Website achieves a Lighthouse performance score of 90+ on desktop and 85+ on mobile.

#### 11.2 Phase 2

- All 5 user roles can authenticate, access their designated portals and perform their permitted actions without error.
- End-to-end course enrolment flow — from course selection through SSLCommerz payment to course access — completes successfully.
- MCQ gating correctly prevents module skipping in 100% of tested scenarios.
- Account lockout triggers correctly at 5 failed attempts; self-service unlock email is received within 2 minutes.
- Single Active Session enforcement prevents a second device login while a session is active.
- Audit Log captures all 4W data for every login, logout and failed attempt event.
- AI Support Agent successfully resolves at least 70% of common queries in UAT testing without human escalation.

#### 11.3 Phase 3

- Staff and Administrator portals are fully functional with accurate, real-time data from the LMS.
- Financial reports (Revenue, Expense, Profit) are accurate to the cent and reflect all LMS transactions.
- All ERP, CRM and SCM modules pass functional acceptance testing with zero critical defects at go-live.

#### 11.4 Cross-Phase Quality Standards

- Zero critical (P1) security vulnerabilities in penetration testing prior to each phase go-live.
- All phases adhere to the defined sequential delivery order — no phase is launched before its predecessor is signed off.
- System uptime of 99.5% or above measured across a 30-day post-launch window per phase.
- HeadStart management sign-off obtained and documented before each phase transition.