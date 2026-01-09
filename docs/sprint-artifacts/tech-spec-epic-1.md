# Epic Technical Specification: User Account & Authentication

Date: Friday, December 12, 2025
Author: BIP
Epic ID: 1
Status: Draft

---

## Overview

This epic implements the foundational user identity and authentication system for the AI CV Assistant. It enables secure registration, login, and session management using the **T3 Stack** (Next.js, tRPC, Prisma) and **NextAuth.js**. The system supports a hybrid authentication model: frictionless OAuth (Google/Microsoft) and verified Email/Password credentials.

## Objectives and Scope

**In-Scope:**
-   User registration via Email/Password.
-   User login via Email/Password.
-   OAuth integration (Google, Microsoft) - *Foundation only*.
-   Email verification flow using Resend.
-   Secure session management via JWT.
-   `User` data model persistence in MongoDB.

**Out-of-Scope:**
-   Two-factor authentication (2FA).
-   Advanced role-based access control (RBAC) - Basic roles only.
-   Profile picture upload (deferred to Epic 2).

## System Architecture Alignment

-   **Frontend:** Uses `shadcn/ui` forms for Login/Register pages.
-   **Backend:** Leverages **NextAuth.js** for auth logic and **tRPC** (`user` router) for custom registration handling.
-   **Database:** **MongoDB** via **Prisma ORM**.
-   **Services:** **Resend** for transactional emails.

## Detailed Design

### Services and Modules

| Module | Responsibility | Owner | Inputs | Outputs |
| :--- | :--- | :--- | :--- | :--- |
| `src/server/auth.ts` | NextAuth configuration (providers, callbacks, JWT strategy). | Backend | Credentials/OAuth Tokens | Session/JWT |
| `src/server/api/routers/user.ts` | Custom tRPC procedures for registration (hashing, DB creation). | Backend | Email, Password, Name | User Object |
| `src/app/(auth)/register/page.tsx` | Registration UI form. | Frontend | User Input | tRPC Mutation |
| `src/app/(auth)/login/page.tsx` | Login UI form. | Frontend | User Input | NextAuth `signIn` |

### Data Models and Contracts

**Prisma Schema (`schema.prisma`)**

```prisma
model User {
  id            String    @id @default(auto()) @map("_id") @db.ObjectId
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  password      String?   // Hashed, null for OAuth users
  image         String?
  accounts      Account[]
  sessions      Session[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model Account {
  id                String  @id @default(auto()) @map("_id") @db.ObjectId
  userId            String  @db.ObjectId
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.String
  access_token      String? @db.String
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.String
  session_state     String?
  user              User    @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}
```

### APIs and Interfaces

**tRPC Procedures (`user` router)**

-   `create`:
    -   **Input:** `{ name: string, email: string, password: string }` (Zod validated)
    -   **Logic:** Check duplicates -> Hash password (bcrypt) -> `prisma.user.create` -> Send verification email.
    -   **Output:** `{ status: 'success', userId: string }`

**NextAuth Routes**

-   `POST /api/auth/callback/credentials`: Handles login validation.
-   `POST /api/auth/callback/google`: Handles OAuth.

### Workflows and Sequencing

1.  **Registration:**
    -   User submits form -> Client calls `trpc.user.create`.
    -   Server validates -> Hashes PW -> DB Insert -> Calls Resend API.
    -   User receives email -> Clicks link -> NextAuth verifies.
2.  **Login:**
    -   User submits form -> Client calls `signIn('credentials')`.
    -   NextAuth calls `authorize()` callback -> Validates Hash -> Issues JWT.

## Non-Functional Requirements

### Performance
-   **Latency:** Login/Register actions < 500ms (p95).
-   **Throughput:** Handle 100 concurrent logins/min.

### Security
-   **Hashing:** Passwords MUST be hashed with **bcrypt** (salt rounds >= 10).
-   **Transport:** All auth traffic over HTTPS/TLS.
-   **Session:** HttpOnly, Secure cookies for JWT.
-   **Validation:** Strict Zod schema validation on all inputs.

### Reliability/Availability
-   **Email:** Resend API fallback or retry logic for failed delivery.
-   **DB:** Connection pooling via Prisma Accelerate.

### Observability
-   **Logs:** Structured JSON logs for auth failures (invalid creds, lockouts).
-   **Metrics:** Track login success/failure rates.

## Dependencies and Integrations

-   `next-auth`: ^4.x or v5 (Beta)
-   `bcryptjs`: Password hashing
-   `resend`: Email delivery
-   `zod`: Schema validation
-   `@hookform/resolvers`: Frontend form validation

## Acceptance Criteria (Authoritative)

1.  **User Registration:**
    -   Verify user can create account with unique email.
    -   Verify duplicate email returns friendly error.
    -   Verify password must meet complexity rules (min 8 chars).
2.  **User Login:**
    -   Verify user can login with valid credentials.
    -   Verify invalid credentials return generic error ("Invalid email or password").
    -   Verify OAuth login works (mocked/test account).
3.  **Session:**
    -   Verify accessing protected route redirects to login.
    -   Verify session persists on refresh.

## Traceability Mapping

| Acceptance Criterion | Design Component | Test Case ID |
| :--- | :--- | :--- |
| User Registration | `user.create` (tRPC) | `1.1-E2E-001` |
| Duplicate Email | `user.create` (unique check) | `1.1-API-002` |
| Password Rules | Zod Schema (`auth.ts`) | `1.1-API-001` |
| User Login | NextAuth `authorize` | `1.2-E2E-001` |
| Session | NextAuth Middleware | `1.2-INT-001` |

## Risks, Assumptions, Open Questions

-   **Risk:** Email delivery delay affects onboarding. **Mitigation:** Provide "Resend Email" button.
-   **Assumption:** Google/Microsoft OAuth credentials will be available for dev/prod.
-   **Question:** Do we need email verification *before* allowing login, or can they log in with "Unverified" status? (Decision: Block login until verified for security).

## Test Strategy Summary

-   **Unit:** Test password hashing and Zod validation logic.
-   **Integration:** Test tRPC `user.create` flow with mock DB.
-   **E2E:** Full registration -> email link (mocked) -> login flow using Playwright.
