# Story 1.2: User Login

Date: Friday, December 12, 2025
Author: BMad Agent
Status: Draft
Epic: Epic 1: User Account & Authentication

---

## User Story

As a registered user, I want to log in securely using my email and password, so that I can access my personalized dashboard and saved application data.

---

## Requirements & Context Summary

This story implements the secure login functionality for registered users. Building upon the registration flow (Story 1.1), this feature allows users to authenticate against the stored credentials. The system will verify the password using **bcrypt** and establish a secure session using **JSON Web Tokens (JWT)** (via NextAuth.js or custom implementation as defined in architecture) stored in an **HttpOnly cookie**.

### Key Requirements (from PRD / Epic)

-   FR2: The system MUST allow registered users to log in.
-   Epic 1 Tech Spec:
    -   Authentication via Email/Password credentials.
    -   Secure password verification (bcrypt).
    -   Session management via JWT/Cookies.
    -   Protection against common attacks (Brute-force protection - optional for MVP but good to note).
    -   Performance: Login response < 500ms.

---

## Acceptance Criteria

1.  **Successful Login:** A user with valid credentials can successfully log in and is redirected to the main dashboard.
2.  **Invalid Credentials:** Entering an incorrect email or password results in a generic "Invalid email or password" error message (to prevent user enumeration).
3.  **Form Validation:** The login form validates that email and password fields are not empty before submission.
4.  **Session Persistence:** Upon successful login, the user remains logged in across page refreshes (session cookie is set).
5.  **Unverified Account:** (If applicable from Story 1.1) Users who have not verified their email cannot log in and are prompted to verify.

---

## Technical Tasks

-   **Backend (Authentication Service):**
    -   Implement/Configure `authorize` callback in NextAuth.js (or tRPC `user.login`).
    -   Verify email existence and fetch user data (including hashed password).
    -   Compare provided password with stored hash using `bcrypt`.
    -   Check `emailVerified` status (if enforced).
    -   Return session token/user object upon success.
-   **Frontend (UI Components):**
    -   Create a Login form component using `shadcn/ui`.
    -   Implement client-side validation (Zod) for email format and required password.
    -   Integrate with `signIn` method (from NextAuth.js) or tRPC mutation.
    -   Handle error states (display generic error for invalid auth).
    -   Implement redirect logic to Dashboard on success.

---

## Test Cases

-   **1.2-E2E-001 (P0):** Registered user logs in successfully.
-   **1.2-API-001 (P1):** Login with incorrect password returns 401/Error.
-   **1.2-API-002 (P1):** Login with non-existent email returns 401/Error.
-   **1.2-INT-001 (P0):** specific "Unverified Email" error if account is not active (if implemented).

---

## Technical Context / Dev Notes

-   **NextAuth.js:** Leverage the `CredentialsProvider` for this flow.
-   **Security:** Ensure error messages do not leak whether the email exists in the database. Use generic messages.
-   **Routing:** Ensure protected routes redirect to `/login` if no session exists.

---

## UI/UX Considerations

-   **Design:** Match the "Classic Professional" theme (shadcn/ui).
-   **Accessibility:** Ensure form fields have proper labels and focus states.
-   **Links:** Include a "Forgot Password?" link placeholder (even if functionality is not in this story, the UI element might be needed) and a "Register" link for new users.

---

## Change Log

-   **2025-12-12:** Initial story draft generated.
