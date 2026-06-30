# Initial Backlog with User Stories

> **Story Format** : `As a [role], I want to [action], so that [benefit].`

> **Priority Levels** : 🔴 Must Have &nbsp;|&nbsp; 🟡 Should Have &nbsp;|&nbsp; 🟢 Nice to Have

> **Phases** : P1 = Phase 1 &nbsp;|&nbsp; P1.1 = Phase 1.1 &nbsp;|&nbsp; P2 = Phase 2 &nbsp;|&nbsp; P3 = Phase 3

---

## 1. Phase 1 — Public Website

| ID | User Story | Priority |
|---|---|:---:|
| US-001 | As a **public visitor**, I want to view the HeadStart homepage, so that I can get an immediate sense of what HeadStart offers and whether it is credible. | 🔴 |
| US-002 | As a **public visitor**, I want to navigate using the top menu (About Us, Courses, Life at HeadStart, Students Support, Contact Us), so that I can reach any section of the website without confusion. | 🔴 |
| US-003 | As a **public visitor**, I want to read about HeadStart's mission, vision, and faculty, so that I can assess the institution's credibility before committing to enrollment. | 🔴 |
| US-004 | As a **public visitor**, I want to view HeadStart's national prize winners and alumni profiles, so that I can see evidence of student success and institutional quality. | 🔴 |
| US-005 | As a **public visitor**, I want to view HeadStart's accreditations and partnerships, so that I can verify it is a legitimate ACCA-approved institution. | 🔴 |
| US-006 | As a **public visitor**, I want to browse all ACCA course levels (Foundation, Knowledge, Skills, Professional) and their descriptions, so that I can understand which level is right for me. | 🔴 |
| US-007 | As a **public visitor**, I want to view Skill Development Training options (MS Office, AI, Bangladesh Tax & VAT), so that I can explore non-ACCA learning opportunities. | 🔴 |
| US-008 | As a **public visitor**, I want to view exam results and career counselling highlights under "Life at HeadStart", so that I can gauge HeadStart's student outcomes. | 🟡 |
| US-009 | As a **public visitor**, I want to view upcoming events, so that I can plan my visit or registration around key dates. | 🟡 |
| US-010 | As a **public visitor**, I want to access the Contact Us page with a form, phone number and map, so that I can reach HeadStart quickly if I have questions. | 🔴 |
| US-011 | As a **public visitor**, I want to access free public resources from the Students Support section, so that I can evaluate HeadStart's content quality before enrolling. | 🟡 |
| US-012 | As a **public visitor**, I want the website to load quickly and display correctly on my mobile phone, so that I can browse without frustration regardless of my device. | 🔴 |

---

## 2. Phase 1.1 — CMS Integration

| ID | User Story | Priority |
|---|---|:---:|
| US-013 | As an **administrator**, I want to log in to a secure CMS Dashboard, so that I can manage website content without needing developer assistance. | 🔴 |
| US-014 | As an **administrator**, I want to edit text, images and media on any Core Page, so that I can keep the website accurate & up to date at all times. | 🔴 |
| US-015 | As an **administrator**, I want to add, edit or remove Faculty Profiles, so that the `Our Faculty` Section always reflects current Teachers. | 🔴 |
| US-016 | As an **administrator**, I want to publish / unpublish upcoming events, so that Students & Visitors always see current Event information. | 🔴 |
| US-017 | As an **administrator**, I want to update Accreditation Badges & Partnership Logos, so that the website reflects HeadStart's current Institutional Affiliations. | 🟡 |
| US-018 | As an **administrator**, I want a preview mode before publishing changes, so that I can review edits before they go live on the public website. | 🟡 |

---

## 3. Phase 2 — Learning Management System (LMS) : Authentication & Security

| ID | User Story | Priority |
|---|---|:---:|
| US-019 | As a **registered user**, I want to log in with my email and password, so that I can securely access my portal and personal data. | 🔴 |
| US-020 | As a **registered user**, I want to sign in with my Google account (OAuth 2.0), so that I can log in without managing a separate password. | 🔴 |
| US-021 | As a **registered user**, I want my account to be challenged with reCAPTCHA after failed login attempts, so that my account is protected from automated brute-force attacks. | 🔴 |
| US-022 | As a **registered user**, I want my account to be locked after 5 consecutive failed login attempts, so that unauthorised access attempts are blocked automatically. | 🔴 |
| US-023 | As a **locked-out user**, I want to receive a self-service unlock email with a verification link, so that I can regain access without waiting for administrator intervention. | 🔴 |
| US-024 | As a **registered user**, I want the system to prevent me from logging in on a second device while I already have an active session, so that my account cannot be accessed by two people simultaneously. | 🔴 |
| US-025 | As a **registered user**, I want to enable OTP / MFA in my account settings as an optional additional security layer, so that I can further protect my account if I choose to. | 🟢 |
| US-026 | As an **administrator**, I want to be able to manually unlock a user account as a last resort, so that I can resolve account access issues when self-service unlock fails. | 🔴 |

---

## 4. Phase 2 — Learning Management System (LMS) : Student Features

| ID | User Story | Priority |
|---|---|:---:|
| US-027 | As a **student**, I want to view a personalised Student Dashboard upon login, so that I can see my enrolled courses, progress and announcements at a glance. | 🔴 |
| US-028 | As a **student**, I want to browse the course catalogue and enroll in a new course, so that I can add new ACCA levels or Skill Development Trainings to my learning path. | 🔴 |
| US-029 | As a **student**, I want to pay my course fee securely via SSLCommerz, so that I can complete enrollment using a familiar and trusted local payment method. | 🔴 |
| US-030 | As a **student**, I want to receive a payment confirmation after a successful transaction, so that I have a record of my enrolment payment. | 🔴 |
| US-031 | As a **student**, I want to access lectures and materials within my enrolled course modules, so that I can study at my own pace. | 🔴 |
| US-032 | As a **student**, I want to complete an MCQ test after finishing a module's lectures, so that I can demonstrate understanding and unlock the next module. | 🔴 |
| US-033 | As a **student**, I want to be prevented from skipping to a later module before completing the current one's MCQ, so that my learning progression is structured and enforced. | 🔴 |
| US-034 | As a **student**, I want to download resources (notes, PDFs, practice papers) from my enrolled courses, so that I can study offline at my convenience. | 🔴 |
| US-035 | As a **student**, I want to upload and manage my own documents in the Resources section, so that I can organise and access my personal study materials within the platform. | 🟡 |
| US-036 | As a **student**, I want to access both public and private resources based on my enrollment, so that I only see content relevant to my courses. | 🔴 |
| US-037 | As a **student**, I want to view the HeadStart notice board, so that I am informed of important announcements, deadlines and institutional updates. | 🔴 |
| US-038 | As a **student**, I want to create, edit and delete my blog posts on the platform, so that I can document and share my ACCA journey with the HeadStart community. | 🟡 |
| US-039 | As a **student**, I want to view and manage my profile, so that my personal details and preferences are always current. | 🔴 |

---

## 5. Phase 2 — Learning Management System (LMS) : Teacher Features

| ID | User Story | Priority |
|---|---|:---:|
| US-040 | As a **teacher**, I want to view a personalised Teacher Dashboard upon login, so that I can see my assigned courses and key student metrics at a glance. | 🔴 |
| US-041 | As a **teacher**, I want to view the list of students enrolled in my assigned courses, so that I can monitor class composition and student engagement. | 🔴 |
| US-042 | As a **teacher**, I want to upload and organise course materials (lectures, notes, practice papers) by module, so that students can find the right resource at the right time. | 🔴 |
| US-043 | As a **teacher**, I want to manage and update resources I have uploaded, including editing or deleting them, so that course materials stay accurate and relevant. | 🔴 |
| US-044 | As a **teacher**, I want to participate in the 24-hour Forum with full read-write-update-delete access, so that I can guide students and respond to technical questions. | 🔴 |
| US-045 | As a **teacher**, I want to create and manage blog posts on the platform, so that I can share insights, study tips and professional updates with students. | 🟡 |
| US-046 | As a **teacher**, I want to view the notice board, so that I am aware of institutional announcements that may affect my teaching schedule or students. | 🔴 |

---

## 6. Phase 2 — Learning Management System (LMS) : Administrator Features

| ID | User Story | Priority |
|---|---|:---:|
| US-047 | As an **administrator**, I want to view a comprehensive Administrator Dashboard, so that I can monitor the full state of the Learning Management System (LMS) — enrollments, payments, users and activity — in one place. | 🔴 |
| US-048 | As an **administrator**, I want to view and manage the full student, teacher and staff directory, so that I have complete oversight of all registered users. | 🔴 |
| US-049 | As an **administrator**, I want to assign teachers to courses, so that course ownership and responsibility are clearly defined in the system. | 🔴 |
| US-050 | As an **administrator**, I want to create, edit, and manage all courses and their modules, so that the course catalogue remains accurate and complete. | 🔴 |
| US-051 | As an **administrator**, I want to manage and moderate blogs and forum posts, so that content quality and community standards are maintained across the platform. | 🔴 |
| US-052 | As an **administrator**, I want to create and manage the notice board for all registered users, so that institutional communications are centralised and reliable. | 🔴 |
| US-053 | As an **administrator**, I want to view the System Audit Log (4W: What, Who, When, Where) for all significant system events, so that I can maintain security oversight and institutional accountability. | 🔴 |
| US-054 | As an **administrator**, I want to receive alerts when suspicious activity is detected (e.g., login from a new geography, login after multiple failures, simultaneous session attempt), so that I can investigate and act before a security incident escalates. | 🔴 |
| US-055 | As an **administrator**, I want to manually unlock a user account when self-service unlock fails, so that no student or staff member is permanently locked out due to a system or email issue. | 🔴 |
| US-056 | As an **administrator**, I want to manage the Email Newsletter, so that I can send targeted communications to students, teachers and staff. | 🟡 |
| US-057 | As an **administrator**, I want the AI Support Agent to be configurable, so that I can update its knowledge base and response scope as HeadStart's offerings evolve. | 🟡 |

---

## 7. Phase 2 — Learning Management System (LMS) : Forum, Blogs & Notice Board

| ID | User Story | Priority |
|---|---|:---:|
| US-058 | As a **student**, I want to post a question or problem in the 24-hour Forum, so that I can get help from teachers, staff or other students at any time of the day. | 🔴 |
| US-059 | As a **registered user**, I want to reply to forum threads, so that I can contribute answers and support to the community. | 🔴 |
| US-060 | As a **registered user**, I want to edit or delete my own forum posts, so that I can correct mistakes or remove outdated content. | 🔴 |
| US-061 | As a **registered user**, I want to search and filter forum threads by topic or keyword, so that I can quickly find relevant discussions without scrolling through all posts. | 🟡 |
| US-062 | As a **student or teacher**, I want to create and publish blog posts visible to the HeadStart community, so that I can share knowledge, study insights, or professional updates. | 🟡 |
| US-063 | As a **student**, I want to view the notice board immediately after logging in, so that I never miss an important announcement from HeadStart. | 🔴 |
| US-064 | As a **staff member or administrator**, I want to post, edit and remove notices on the notice board, so that all users receive accurate and timely institutional communications. | 🔴 |

---

## 8. Phase 3 — Enterprise Resource Planning (ERP) + Customer Relationship Management (CRM) + Supply Chain Management (SCM)

| ID | User Story | Priority |
|---|---|:---:|
| US-065 | As a **staff member**, I want to view a Staff Dashboard with key operational metrics, so that I can manage my daily responsibilities from one centralised portal. | 🔴 |
| US-066 | As a **staff member**, I want to view the full student directory with enrollment status and contact details, so that I can support students effectively without needing to ask other departments. | 🔴 |
| US-067 | As a **staff member**, I want to view the full teacher directory, so that I can coordinate scheduling and communication with faculty efficiently. | 🔴 |
| US-068 | As an **administrator**, I want to view a real-time Revenue, Expense and Profit report, so that I can make informed financial and operational decisions without waiting for manually compiled reports. | 🔴 |
| US-069 | As an **administrator**, I want to export financial reports in standard formats (PDF / Excel), so that I can share them with stakeholders or use them for external compliance purposes. | 🟡 |
| US-070 | As an **administrator**, I want to manage the full student lifecycle (enrollment, active, deferred, graduated, withdrawn) within the Customer Relationship Management (CRM), so that student records are always accurate and actionable. | 🔴 |
| US-071 | As a **staff member**, I want to manage supply chain and resource procurement through the Supply Chain Management (SCM) module, so that operational supply needs are tracked and fulfilled without manual processes. | 🟡 |
| US-072 | As an **administrator**, I want all data (enrollments, payments, completions) from the Learning Management System (LMS) to flow automatically into the Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM), so that there is a single source of truth across all systems. | 🔴 |
| US-073 | As an **administrator**, I want the AI Support Agent to continue operating in Phase 3, covering Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) query resolution for staff, so that 24/7 support extends to operational roles. | 🟡 |
| US-074 | As an **administrator**, I want the System Audit Log to extend into Phase 3, capturing all Enterprise Resource Planning (ERP), Customer Relationship Management (CRM) and Supply Chain Management (SCM) actions, so that full institutional accountability is maintained across all platform modules. | 🔴 |