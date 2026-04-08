# Project Context Document : HeadStart Website & E-Platform

---

## 📋 Project Information

- **Project Name** : HeadStart
- **Project Type** : EdTech & Digital Transformation (DX)
- **Organization** : CoreBit
- **Start Date** : April 08, 2026
- **Current Version** : 0.1.0
- **Production URL** : [https://headstartbd.com](https://headstartbd.com)
- **Repository** : [https://github.com/corebit-bd/headstart](https://github.com/corebit-bd/headstart)

---

## 👥 Team

### Development Team

- **Tech Lead** : Jeet Z. H. Khondker - jeetzhkhondker@gmail.com
- **Backend Lead** : Jeet Z. H. Khondker - jeetzhkhondker@gmail.com
- **Frontend Lead** : Jeet Z. H. Khondker - jeetzhkhondker@gmail.com
- **Mobile Lead** : Jeet Z. H. Khondker - jeetzhkhondker@gmail.com
- **DevOps Lead** : Jeet Z. H. Khondker - jeetzhkhondker@gmail.com

### Other Stakeholders

- **Product Manager** : Jeet Z. H. Khondker - jeetzhkhondker@gmail.com
- **QA Lead** : Jeet Z. H. Khondker - jeetzhkhondker@gmail.com
- **UI / UX Designer** : Jeet Z. H. Khondker - jeetzhkhondker@gmail.com
- **Client** : Yusha Al Khondker - yushakhondker@gmail.com

---

## 🎯 Project Overview

### Business Purpose

HeadStart is a Professional-Grade E-Platform designed for a **GOLD Approved Learning Partner**. It serves as a Dual-Purpose EcoSystem :

1. **Academic Wing (LMS)** : Delivering ACCA / CAT Courses with strict Academic Gatekeeping.

2. **Advisory Wing (ERP / CRM / SCM)** : Providing Business Optimization Services (BPO, Audit, Tax) for Corporate Clients.

### Target Users

- **General / Public Users (Website Visitors)** :
  - Access information about HeadStart & its ACCA Courses & other Services.
  - Explore Faculty Profiles & Contact Details.
  - Read Blogs featuring Testimonials, Events & Success Stories.
  - Use a Contact Form for Inquiries.
  - Register / Login for (Student / Teacher / Staff / Administrator) Access.

- **Student** :
  - View & manage enrolled courses.
  - Enroll in new courses.
  - Manage personal blogs.
  - Access the Notice Board of HeadStart (View Access Only).
  - Engage in a 24/7 interactive forum with full CRUD Access Functionality.
  - Upload & manage learning resources.
  - Make payments for courses through integrated payment processing.
  - Take quizzes & complete assignments for courses.

- **Teacher** :
  - Create courses.
  - View assigned courses & enrolled students.
  - Manage personal blogs.
  - Access the Notice Board of HeadStart (View Access Only).
  - Participate in & moderate a 24/7 interactive forum.
  - Upload & manage teaching resources.
  - Interact with students through course discussions & forums.
  - Track the academic performance of students for each courses.

- **Staff** :
  - View & manage student & teachers list.
  - Manage & Post Notices on the Notice Board of HeadStart.
  - Participate in a 24/7 interactive forum with full access.

- **Administrator** :
  - View & manage the list of students, teachers & staff.
  - Oversee & manage the courses, classrooms & blog contents of HeadStart.
  - Manage the Notice Board of HeadStart.
  - Monitor financial performance through revenue, expense & profit reports.
  - Participate in & moderate the 24/7 interactive forum.
  - Can view & manage ERP, CRM & SCM of HeadStart.

### Key Features

1. **Zero Problem Vision** : High-Reliability Software for Mission-Critical Academic & Financial Data.

2. **Academic Integrity** : Enforcing Course Progression through mandatory MCQ Gates.

3. **Security Excellence** : Protecting User Accounts with a 2-Attempt Profile Lock & Single Active Session Management (SASM) Protocols.

---

## 🏗️ Technical Stack

### Inherited from PEND Boilerplate

- ✅ Backend : Django 5.2 + FastAPI
- ✅ Frontend : NextJS 16 + TypeScript
- ✅ Mobile : React Native + Expo
- ✅ Database : PostgreSQL 15
- ✅ Cache : Redis 7
- ✅ CI / CD : GitHub Actions
- ✅ Testing : Jest, Pytest, Cypress
- ✅ Documentation : Storybook, Swagger

### Design System Specification

- **Typography** :
  - **Headers** : Montserrat (700 Bold / 500 Medium)
  - **Body** : Inter (400 Regular / 600 Semi-Bold)

- **Brand Palette** :
  - **Primary (Royal Purple)** : `#790BBE`
  - **Secondary (HeadStart Gold)** : `#FEE054`
  - **Background (Cloud Grey)** : `#F3F4F7`

### Infrastructure Features

- **CI / CD** : 7-Gate Quality Pipeline with Layered Caching (10GB Limit).

- **Deployment** : Multi-Tenant Architecture with Tenant Isolation at the Application Level.

---

## 🔐 Core Business Rules & Security

1. **Gatekeeping Logic** : Students cannot access Lecture $N+1$ until the MCQ for Lecture $N$ is passed.
2. **Profile Lock Mechanism** : Accounts transition to a `LOCKED` State after **exactly 2** Failed OTP / CAPTCHA Attempts.
3. **Single Active Session Management (SASM)** : Users are restricted to one concurrent Login - Subsequent Logins invalidate previous Sessions.
4. **Portal Siloing** : Advisory Wing Modules (ERP / CRM) are strictly hidden from Users with `Student` / `Teacher` Roles.

---

## 🔄 Document Version History

| Version | Date           | Changes                                   | Updated By          |
| :------ | :------------- | :---------------------------------------- | :------------------ |
| 0.1.0   | April 08, 2026 | Initial Scaffolding from PEND Boilerplate | Jeet Z. H. Khondker |

---

## 📝 Working with AI Assistants

### When Using This Document with AI

1. Share This Entire Document at the Start of Conversation
2. Specify What You're Working On :
   - "I'm implementing [feature name]"
   - "I'm fixing [bug/issue]"
   - "I'm reviewing [component/module]"
3. Provide Relevant Code Snippets / Error Messages
4. Reference Specific Sections :
   - "See Business Rules for Payment Processing"
   - "See Known Issues for Current Bugs"

### Keeping This Document Updated

- Update After Completing Major Features
- Update After Sprint Planning
- Update When Team Members Change
- Update When Infrastructure Changes
- Update After Incidents (Add to Known Issues)

---

## 📌 Quick Context for AI

**Copy This Block when Starting A New AI Conversation** :

```
Project : HeadStart
Type : EdTech & Advisory (DX)
Tech Stack : PEND (PostgreSQL, Expo, NextJS, Django)
Current Version : 0.1.0

Key Context : 

- Dual-Wing Platform : Academic (LMS) & Advisory (ERP / CRM).
- Security : Profile Lock after 2 Failed Attempts, SASM enabled.
- Design : Montserrat (Headers) / Inter (Body). Primary #790BBE, Secondary #FEE054.
- Infrastructure : Uses Layered GitHub Actions Caching.

Question : [Your Actual Question Here]
```

---

**Last Updated** : April 08, 2026  
**Updated By** : Jeet Z. H. Khondker  
