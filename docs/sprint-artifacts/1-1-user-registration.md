# Story 1.1: User Registration

Date: Friday, December 12, 2025
Author: BIP
Status: Draft
Epic: Epic 1: User Account & Authentication

---

## User Story

As a first-time user, I want to create an account with my email and a secure password, so that I can gain access to the application and begin tailoring my job applications.

---

## Requirements & Context Summary

This story implements the user registration flow, allowing new users to create an account with an email and password. The process will leverage the foundational authentication system defined in the Architecture and Epic 1 Tech Spec, utilizing **NextAuth.js** and **tRPC** for backend logic. Password hashing will be handled by **bcrypt**, and new user accounts will require **email verification via Resend** to ensure security and valid contact information. The frontend will present a user-friendly registration form built with **shadcn/ui** components, adhering to the "Classic Professional" UX design.

### Key Requirements (from PRD / Epic)

-   FR1: The system MUST allow users to create an account and log in securely.
-   Epic 1 Tech Spec:
    -   User registration via Email/Password.
    -   Email verification flow using Resend.
    -   Secure session management via JWT.
    -   `User` data model persistence in MongoDB.
    -   Security NFRs (bcrypt, HTTPS, HttpOnly cookies, Zod validation).
    -   Performance NFRs (latency < 500ms).

---

## Acceptance Criteria

1.  **Successful Registration:** The user is able to successfully submit a registration form with a unique email and a password meeting complexity requirements.
2.  **Email Verification:** A confirmation email is sent to the provided email address, containing a link to verify the account.
3.  **Account Access:** After successful email verification, the user can log in with their newly created credentials.
4.  **Error Handling (Duplicate Email):** Attempting to register with an already existing email address displays a clear, user-friendly error message.
5.  **Error Handling (Weak Password):** Attempting to register with a password that does not meet the complexity rules displays a clear, user-friendly error message.

---

## Technical Tasks

-   **Backend (Authentication Service):**
    -   Implement tRPC procedure for user registration (`user.create`).
    -   Integrate `bcrypt` for password hashing (min 10 salt rounds).
    -   Implement logic for generating and storing email verification tokens.
    -   Integrate `Resend` for sending verification emails.
    -   Update Prisma `User` model to include `emailVerified` timestamp.
-   **Frontend (UI Components):**
    -   Create a registration form component using `shadcn/ui` inputs and buttons.
    -   Implement client-side validation using `zod` and `react-hook-form`.
    -   Handle form submission via `tRPC` mutation.
    -   Display error messages clearly (e.g., inline below fields).
    -   Redirect user to a "Verify Your Email" page upon successful registration.
-   **Email Verification Page:**
    -   Create a page to handle the email verification link, calling a tRPC endpoint to verify the token and activate the user's account.

---

## Test Cases (from Test Design Epic 1)

-   **1.1-E2E-001 (P0):** New user registers successfully (happy path).
-   **1.1-API-001 (P0):** Attempt registration with weak password.
-   **1.1-API-002 (P1):** Attempt registration with existing email.
-   **1.1-INT-001 (P1):** Confirmation email sent and contains correct link.

---

## Technical Context / Dev Notes

-   **Prisma Schema:** Ensure `User` model includes fields for email verification status (e.g., `emailVerified: DateTime?`).
-   **NextAuth.js:** Consider how email verification integrates with NextAuth's flow; likely a custom credentials provider or a separate tRPC endpoint.
-   **Zod:** All incoming data for `user.create` must be validated with Zod.
-   **Error Handling:** Follow defined global error handling patterns (NFR).
-   **Frontend Routing:** Handle redirects post-registration (e.g., to `/verify-email`).

---

## UI/UX Considerations

-   **Forms:** Utilize `shadcn/ui` form components, adhering to the "Classic Professional" theme.
-   **Feedback:** Use toast notifications for success messages, and inline error messages for form validation.
-   **Responsive:** Ensure the registration form is fully responsive across mobile, tablet, and desktop views.

---

## Change Log

-   **2025-12-12:** Initial story draft generated.