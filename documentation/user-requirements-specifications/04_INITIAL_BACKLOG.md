## Initial Backlog

### User Authentication & Management

| ID      | Epic / Module                         | User Story                                                                                                    | Priority | Story Points | Estimated Period | Acceptance Criteria                                                                                                                                                           |
| ------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------- | ------------ | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SYS-001 | Core User Authentication & Management | As a User, I want to register for an account , so that I can access the LMS.                                  | High     | 8            | 3-5 Days         | ・　Generate Unique User Codes (Example : HS-STD21077 for Students)<br>・　Implement Email Verification<br>・　Store User Profile Information                                 |
| SYS-002 |                                       | As a User, I want to login to the platform, so that I can access my role-specific features.                   | High     | 13           | 1-2 Weeks        | ・　Implement OTP & CAPTCHA for Login Security<br>・　Implement Profile Lock Mechansim after 2 Unsuccessful Attempts<br>・　Implement Single Active Session Management (SASM) |
| SYS-003 |                                       | As an Administrator, I want to create User Accounts for Teachers & Staff, so that they can access the System. | High     | 5            | 3-5 Days         | ・　Define User Roles & Permissions<br>・　Ability to set Initial Credentials                                                                                                 |
| SYS-004 |                                       | As a User, I want to Reset My Password if forgotten, so that I can regain access to my account.               | High     | 5            | 3-5 Days         | ・　Implement Secure Password Reset Functionality                                                                                                                             |
| SYS-005 |                                       | As a User, I want to update my Profile Information, so that my details remain current.                        | Medium   | 3            | 1-2 Days         | ・　Allow Editing Personal Information<br>・　Enable Profile Picture Uploads                                                                                                  |
| SYS-006 |                                       | As an Administrator, I want to View & Manage All User Accounts, so that I can maintain System Integrity.      | Medium   | 8            | 3-5 Days         | ・　Search & Filter User Accounts<br>・　Enable / Disable User Accounts                                                                                                       |

### Student Portal

| ID      | Epic / Module  | User Story                                                                                            | Priority | Story Points | Estimated Period | Acceptance Criteria                                                                          |
| ------- | -------------- | ----------------------------------------------------------------------------------------------------- | -------- | ------------ | ---------------- | -------------------------------------------------------------------------------------------- |
| STD-001 | Student Portal | As a Student, I want to View Available Courses, so that I can choose what to enroll in.               | High     | 5            | 3-5 Days         | ・　Display Course Catalog with Descriptions<br>・　Show Faculty Information for each Course |
| STD-002 |                | As a Student, I want to Enroll in Courses, so that I can access Learning Materials.                   | High     | 8            | 3-5 Days         | ・　Course Selection Interface<br>・　Enrollment Confirmation Process                        |
| STD-003 |                | As a Student, I want to access Course Materials, so that I can study the content.                     | High     | 13           | 1-2 Weeks        | ・　View & Download PDFs, Videos & Documents<br>・　Track Progress through Course Materials  |
| STD-004 |                | As a Student, I want to View the Notice Board, so that I can stay updated on important Announcements. | High     | 5            | 3-5 Days         | ・　Display Notices in Chronological Order<br>・　Filter Notices by Category                 |
| STD-005 |                | As a Student, I want to take Quizzes after completing Lectures, so that I can test my understanding.  | Medium   | 13           | 1-2 Weeks        | ・　MCQ Interface with Scoring<br>・　Progress Tracking with Modules                         |
| STD-006 |                | As a Student, I want to Submit Assignments, so that I can complete Course Requirements.               | Medium   | 8            | 3-5 Days         | ・　File Upload Functionality<br>・　Submission Deadline Enforcement                         |
| STD-007 |                | As a Student, I want to Practice with Past Exam Questions, so that I can prepare for Tests.           | Medium   | 13           | 1-2 Weeks        | ・　Topic-Based Practice Platform<br>・　Access to Solutions                                 |

### Teacher Portal

| ID      | Epic / Module  | User Story                                                                                           | Priority | Story Points | Estimated Period | Acceptance Criteria                                                                               |
| ------- | -------------- | ---------------------------------------------------------------------------------------------------- | -------- | ------------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| TCH-001 | Teacher Portal | As a Teacher, I want to Create & Manage Courses, so that I can Deliver Learning Content.             | High     | 13           | 1-2 Weeks        | ・　Course Creation Interface<br>・　Module & Lecture Organization Tools                          |
| TCH-002 |                | As a Teacher, I want to Upload Learning Materials, so that Students can Access Them.                 | High     | 8            | 3-5 Days         | ・　Support for Multiple File Formats<br>・　Ability to Organize Materials by Module / Lecture    |
| TCH-003 |                | As a Teacher, I want to View My Enrolled Students, so that I can Monitor Class Composition.          | High     | 5            | 3-5 Days         | ・　Student List with Basic Information<br>・　Enrollment Date Tracking                           |
| TCH-004 |                | As a Teacher, I want to Create Quizzes & Assignments, so that I can Assess Student Knowledge.        | Medium   | 13           | 1-2 Weeks        | ・　Quiz Creation Tools with MCQ Support<br>・　Assignment Creation with Instructions & Deadlines |
| TCH-005 |                | As a Teacher, I want to Track Student Progress, so that I can identify who needs Additional Support. | Medium   | 8            | 3-5 Days         | ・　View Completion Status of Materials<br>・　See Quiz & Assignment Scores                       |

### Staff Portal

| ID      | Epic / Module | User Story                                                                                                   | Priority | Story Points | Estimated Period | Acceptance Criteria                                                             |
| ------- | ------------- | ------------------------------------------------------------------------------------------------------------ | -------- | ------------ | ---------------- | ------------------------------------------------------------------------------- |
| STF-001 | Staff Portal  | As a Staff Member, I want to View Student & Teacher Records, so that I can Assist with Administrative Tasks. | High     | 8            | 3-5 Days         | ・　Search Functionality<br>・　Basic Record Management                         |
| STF-002 |               | As a Staff Member, I want to Post Notices on the Notice Board, so that I can Share Important Information.    | High     | 5            | 3-5 Days         | ・　Notice Creation Interface<br>・　Option to set Expiration Dates for Notices |
| STF-003 |               | As a Staff Member, I want to generate Basic Reports , so that I can provide Administrative Updates.          | Medium   | 8            | 3-5 Days         | ・　Enrollment Statistics<br>・　Course Activity Reports                        |

### Administrator Portal

| ID      | Epic / Module        | User Story                                                                                                         | Priority | Story Points | Estimated Period | Acceptance Criteria                                                     |
| ------- | -------------------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ------------ | ---------------- | ----------------------------------------------------------------------- |
| ADM-001 | Administrator Portal | As an Administrator, I want to manage Course Offerings, so that our Catalog remains Current.                       | High     | 8            | 3-5 Days         | ・　Course Approval Process<br>・　Course Modification Capabilities     |
| ADM-002 |                      | As an Administrator, I want to View Basic Financial Reports, so that I can Monitor Revenue.                        | High     | 13           | 1-2 Weeks        | ・　Course Enrollment Revenue Tracking<br>・　Basic Financial Dashboard |
| ADM-003 |                      | As an Administrator, I want to Configure System Settings, so that the Platform Operates according to our Policies. | Medium   | 8            | 3-5 Days         | ・　Global Notification Settings<br>・　Platform Behavior Configuration |

### Forum & Discussion

| ID      | Epic / Module      | User Story                                                                                             | Priority | Story Points | Estimated Period | Acceptance Criteria                                                         |
| ------- | ------------------ | ------------------------------------------------------------------------------------------------------ | -------- | ------------ | ---------------- | --------------------------------------------------------------------------- |
| FRM-001 | Forum & Discussion | As a Student, I want to Participate in Discussion Forums, so that I can Engage with Peers & Teachers.  | Medium   | 13           | 1-2 Weeks        | ・　Create, Read, Update, Delete Posts<br>・　Comment & Reply Functionality |
| FRM-002 |                    | As a Teacher, I want to moderate Forum Discussions, so that the content remains appropriate & helpful. | Medium   | 8            | 3-5 Days         | ・　Post Moderation Capabilities<br>・　Discussion Thread Management        |
| FRM-003 |                    | As a Staff Member, I want to monitor Forum Activity, so that I can assure appropriate use.             | Medium   | 5            | 3-5 Days         | ・　Overview of Forum Activity<br>・　Basic Moderation Tools                |

### Payment Integration

| ID      | Epic / Module       | User Story                                                                                           | Priority | Story Points | Estimated Period | Acceptance Criteria                                                                     |
| ------- | ------------------- | ---------------------------------------------------------------------------------------------------- | -------- | ------------ | ---------------- | --------------------------------------------------------------------------------------- |
| PYM-001 | Payment Integration | As a Student, I want to Pay for Courses Securely, so that I can Complete Enrollment.                 | High     | 21           | 1-2 Weeks        | ・　Integration with SSL Commerz Payment Gateway<br>・　Payment Confirmation & Recepits |
| PYM-002 |                     | As an Administrator, I want to View Payment Records, so that I can Reconcile Financial Transactions. | High     | 8            | 3-5 Days         | ・　Payment History Logs<br>・　Transaction Status Tracking                             |

### Notification System

| ID      | Epic / Module       | User Story                                                                                              | Priority | Story Points | Estimated Period | Acceptance Criteria                                                                  |
| ------- | ------------------- | ------------------------------------------------------------------------------------------------------- | -------- | ------------ | ---------------- | ------------------------------------------------------------------------------------ |
| NTF-001 | Notification System | As a User, I want to Receive Notifications about Relevant Activities, so that I stay Informed.          | Medium   | 13           | 1-2 Weeks        | ・　In-Platform Notifications Center<br>・　Email Notifications for Critical Updates |
| NTF-002 |                     | As an Administrator, I want to Send Broadcast Notifications , so that I can Communicate with All Users. | Medium   | 8            | 3-5 Days         | ・　Mass Notification Tools<br>・　User Group Targeting                              |
