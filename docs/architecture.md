# ibe160 Architecture

## Executive Summary

The AI CV & Job Application Assistant is a web application designed to empower students and recent graduates in the competitive job market. By leveraging AI to analyze CVs against job descriptions, it automates the customization of application materials, identifying qualification gaps and generating tailored cover letters. The primary goal is to save users time while significantly improving the quality and effectiveness of their applications.

## Guiding Principles

- **Product over Plumbing:** We prioritize features that deliver user value over complex custom infrastructure.
- **Velocity via Standardization:** We use standard, opinionated tools (T3 Stack) to avoid configuration fatigue.
- **Safety by Design:** We leverage TypeScript and Type Safety to prevent entire classes of bugs.

{{project_initialization_section}}

## 2. Project Initialization

### 2.1 Starter Template Decision

**Decision:** Modern Unified Approach (Next.js) with T3 Stack (create-t3-app)

**Rationale:** This approach leverages a robust, modern, and type-safe full-stack framework that aligns with project goals for efficiency and scalability. It simplifies development and deployment compared to a split MERN stack, while still utilizing React, Node.js (via Next.js API Routes), TypeScript, and offering strong database integration (Prisma for MongoDB).

**Initialization Command:** `npm create t3-app@latest`

**Key Decisions Provided by Starter (T3 Stack):**
- **Framework:** Next.js
- **Language:** TypeScript
- **Full-stack RPC:** tRPC
- **ORM:** Prisma
- **Authentication:** NextAuth.js
- **Styling:** Tailwind CSS
- **Code Quality:** ESLint, Prettier (typically integrated)
- **Testing:** Jest (can be integrated)
- **Project Structure:** Opinionated, feature-based or layer-based.

{{starter_template_decision}}

## Decision Summary

| Category | Decision | Version | Affects Epics | Rationale |
| -------- | -------- | ------- | ------------- | --------- |

{{decision_table_rows}}

## Project Structure

```
.
├── src/
│   ├── env/                      # Environment variables handling
│   ├── server/                   # Backend logic (tRPC, Auth, DB)
│   │   ├── auth.ts               # NextAuth.js configuration
│   │   ├── api/                  # tRPC API routers
│   │   │   ├── root.ts           # Main tRPC router
│   │   │   ├── routers/          # Individual feature routers
│   │   │   │   ├── user.ts       # User account & auth (Epic 1)
│   │   │   │   ├── cv.ts         # CV management (Epic 2)
│   │   │   │   ├── job.ts        # Job description (Epic 2)
│   │   │   │   └── ai.ts         # AI integration (Epic 3)
│   │   │   └── _app.ts           # tRPC context setup
│   │   ├── db.ts                 # Prisma Client setup for MongoDB
│   │   └── common.ts             # Shared types/helpers
│   ├── app/ (or pages/)          # Next.js App Router (recommended by T3)
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Home page
│   │   └── api/                  # Next.js API routes (e.g., NextAuth catch-all)
│   │       └── auth/[...nextauth]/route.ts # NextAuth.js API route
│   ├── components/               # Reusable UI components
│   ├── styles/                   # Tailwind CSS setup
│   ├── utils/                    # General utilities (e.g., FileStorageService.ts)
│   └── trpc/                     # tRPC client-side utilities
├── prisma/                       # Prisma schema and migrations
│   └── schema.prisma             # Database schema definition
├── public/                       # Static assets
├── .env                          # Environment variables
├── package.json                  # Project dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── next.config.js                # Next.js configuration
└── ...
```

## Epic to Architecture Mapping

| Epic (from epics.md) | Architectural Component(s) |
| :-------------------- | :-------------------------- |
| **Epic 1: User Account & Authentication** | `src/server/auth.ts`, `src/app/api/auth/[...nextauth]/route.ts` (or `pages/api`), MongoDB `users` collection |
| **Epic 2: CV Management & Job Description Input** | `src/server/api/routers/cv.ts`, `src/server/api/routers/job.ts`, `src/utils/FileStorageService.ts`, MongoDB `cvs` collection |
| **Epic 3: AI-Powered Application Generation & Feedback** | `src/server/api/routers/ai.ts`, `src/utils/ai.ts` (Gemini integration), MongoDB `generatedApplications` collection |
| **Epic 4: Output & Download** | `src/server/api/routers/output.ts` |

## Technology Stack Details

### Core Technologies

{{core_stack_details}}

### AI Integration

**Decision:** Google Gemini (1.5 Flash/Pro) via Vercel AI SDK

**Rationale:**
- **Cost-effectiveness:** Leverages Google's generous free tier for Gemini, crucial for student project budget. (Primary driver)
- **Unified Architecture:** Maintains a pure Next.js/TypeScript stack, avoiding complexities of a multi-language backend (e.g., Python).
- **Streaming UI:** Vercel AI SDK provides seamless streaming responses (word-by-word generation) for enhanced user experience.
- **Ease of Integration:** Designed for Next.js, simplifying LLM integration and abstracting API complexities.

**Usage Patterns:**
- **Analysis Mode:** For CV and Job Description parsing (e.g., skill extraction, gap identification). Will leverage **Structured Outputs (JSON mode)** to ensure precision and reduce hallucinations.
- **Generation Mode:** For crafting personalized cover letters and CV improvement suggestions.

**API Route:** `/api/generate` (POST)
**Input:** CV text, Job Description text.
**Process:** System Prompt -> User Prompt -> Streaming Output.

**Mitigation Strategies (AI Specific Risks):**
- **Rate Limiting:** Implement robust client-side and server-side error handling for "Rate Limit Exceeded" responses. Provide clear user feedback to retry later.
- **Quality Control:** Implement 'human-in-the-loop' editing for all AI-generated output. Always present generated text in an editable format for user review and approval.
- **Future-Proofing:** Code LLM interactions using Vercel AI SDK abstractions to allow for easy model switching (e.g., to OpenAI) if budget or quality requirements change.

### Integration Points

- **Frontend <-> Backend (API):** tRPC for type-safe RPC calls.
- **Backend <-> Database:** Prisma ORM (via Prisma Accelerate) for MongoDB interactions.
- **Backend <-> LLM:** Vercel AI SDK for Google Gemini integration.
- **Backend <-> Email Service:** Resend API for transactional emails.
- **Authentication:** NextAuth.js for OAuth and local authentication flows.

{{novel_pattern_designs_section}}

## Implementation Patterns

These patterns ensure consistent implementation across all AI agents:

### Date/Time Patterns

**Decision:** Store UTC ISO 8601, display in user's local timezone.

**Rationale:**
- **Consistency:** UTC storage eliminates timezone ambiguity in the database.
- **User Experience:** Displaying in local time is intuitive for users.
- **Simplicity:** For MVP, avoids complex user-configurable timezone settings.

**Implementation Strategy:**
- Store all `Date` objects in MongoDB as ISO 8601 strings in UTC.
- Frontend will use browser's `Intl.DateTimeFormat` or a library like `date-fns` to format dates to the user's local timezone.
- Avoid storing raw Unix timestamps or local time without timezone info.

{{implementation_patterns}}

## Consistency Rules

### Naming Conventions

{{naming_conventions}}

### Code Organization

{{code_organization_patterns}}

### Error Handling

**Decision:** Centralized Error Handling

**Rationale:**
- **Consistency:** Ensures a uniform approach to error management across the application, improving user experience and developer debugging.
- **Robustness:** Prevents uncaught exceptions from crashing the application.
- **Maintainability:** Easier to manage, update, and monitor error logic from a single point.

**Implementation Strategy:**
- For UI (Frontend): Implement React Error Boundaries to catch errors in components and display fallback UIs.
- For API Routes (Backend): Implement global error handling middleware in Next.js API routes to catch and format API errors.
- Error messages for users should be clear and non-technical.
- Technical error details should be logged internally.

### Logging Strategy

**Decision:** Structured Logging (JSON format)

**Rationale:**
- **Analyzability:** Enables efficient searching, filtering, and analysis of logs by tools and systems (e.g., Vercel's built-in logs, external logging services).
- **Consistency:** Provides a uniform format for log messages across the application, improving debuggability.
- **Scalability:** Better suited for large-scale applications where logs are aggregated and processed automatically.

**Implementation Strategy:**
- Implement a logging utility that outputs log messages in JSON format to `stdout`/`stderr`.
- Start with basic console-based JSON logging.
- Ensure key fields (timestamp, log level, message, context, error details) are always present.

## Testing Strategy

### Testing Strategy

**Decision:** Traditional Testing (Unit, Integration, End-to-End)

**Rationale:**
- **PRD Alignment:** Directly implements the testing frameworks and levels outlined in the Product Requirements Document.
- **Maintainable Quality:** Ensures a high-quality and reliable application through comprehensive test coverage across different layers.
- **Beginner-Friendly:** Provides a clear and straightforward path for a new team to establish testing practices without the initial overhead of TDD/BDD methodologies.

**Implementation Strategy:**
- **Frontend (Unit/Component):** Use Jest and React Testing Library for React components.
- **Backend (Unit/Integration):** Use Jest and Supertest for API endpoints and business logic.
- **End-to-End (E2E):** Use Cypress or Playwright for simulating full user journeys.

{{logging_approach}}

## Data Architecture

### Data Persistence

**Decision:** MongoDB with Prisma ORM + Prisma Accelerate

**Rationale:**
- **MongoDB:** Matches PRD requirement. Flexible schema fits the evolving nature of CV parsing results.
- **Prisma ORM:** Provides type-safe database access (end-to-end TypeScript).
- **Prisma Accelerate:** Critical for Vercel deployment. It manages connection pooling to prevent "too many connections" errors in serverless functions and offers edge caching for performance.

**Connection Strategy:**
- Use `DATABASE_URL` for Prisma Accelerate connection string.
- Enable connection pooling.
- Use `directUrl` for migrations if needed.

### Data Models and Relationships

**User**
- Standard NextAuth.js User model (name, email, image)
- Relations: hasMany CVs, hasMany Applications

**CV**
- Stores uploaded CV data
- Fields: `content` (BinData), `filename`, `parsedText` (String)
- Relations: belongsTo User

**Application**
- Stores the generation context and result
- Fields: `jobDescription` (Text), `generatedLetter` (Text), `status` (Draft/Completed)
- Relations: belongsTo User, references CV

**Prisma Schema Concept:**
```prisma
model User {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  email     String   @unique
  cvs       CV[]
  apps      Application[]
  // ... NextAuth fields
}

model CV {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  userId    String   @db.ObjectId
  user      User     @relation(fields: [userId], references: [id])
  content   Bytes    // File storage
  filename  String
  createdAt DateTime @default(now())
}

model Application {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  userId    String   @db.ObjectId
  user      User     @relation(fields: [userId], references: [id])
  cvId      String   @db.ObjectId
  jobDesc   String
  letter    String?
  status    String   @default("DRAFT")
}
```

### Email Service

**Decision:** Resend with React Email

**Rationale:**
- **Cost-effectiveness:** Resend offers a free tier (3,000 emails/month) sufficient for MVP needs.
- **Developer Experience:** Integrates seamlessly with Next.js/T3 Stack using `react-email`, allowing email templates to be built with React components, aligning with frontend technology.
- **Deliverability:** Specializes in transactional emails, ensuring high deliverability for critical messages like registration confirmations.

## API Contracts

{{api_specifications}}

## Security Architecture

### Authentication

**Decision:** NextAuth.js with Google/Microsoft OAuth and Conditional Email Verification

**Rationale:**
- **User Experience:** Offers frictionless sign-up via familiar OAuth providers.
- **Security & Abuse Prevention:** OAuth provides verified identities, reducing bot abuse. Email verification for local accounts ensures valid contact.
- **Integration:** Leverages NextAuth.js (part of T3 Stack) for robust, flexible authentication.
- **Cost-effectiveness:** Minimizes Resend usage to only "local" accounts, aligning with free-tier objectives.

**Implementation Strategy:**
- Integrate NextAuth.js with Google and Microsoft OAuth providers.
- Implement email/password login for "local" accounts.
- Utilize Resend for email verification exclusively for "local" accounts.

{{security_approach}}

## Performance Considerations

{{performance_strategies}}

## Deployment Architecture

## 15. Deployment Architecture

**Decision:** Vercel

**Rationale:** Optimal for Next.js applications, providing seamless deployment, global CDN, serverless functions, and excellent developer experience. Aligns with goals for efficiency and performance.

## Development Environment

### Prerequisites

{{development_prerequisites}}

### Setup Commands

```bash
{{setup_commands}}
```

## 16. Risk Assessment (Architecture)

**Identified Risks & Mitigations:**

| Risk | Impact | Mitigation Strategy |
| :--- | :--- | :--- |
| **Learning Curve (tRPC/Next.js)** | High | **CRITICAL:** Rely heavily on T3 documentation and standard patterns. Avoid complex customizations initially. |
| **Vendor Lock-in (Vercel)** | Medium | Avoid Vercel-proprietary features (Edge Config, KV) unless necessary. Stick to standard Next.js API routes to maintain portability. |
| **Complexity Overload** | Medium | Start simple. Use the default T3 setup without adding extra libraries until required. |

## 18. Serverless Database Strategy

**Risk Mitigation for Vercel + MongoDB:**

- **Connection Pooling:** We MUST use a connection pooling strategy (e.g., Prisma Accelerate or MongoDB Atlas Data API) to prevent serverless functions from exhausting database connections.
- **Cost Controls:** Vercel Spend Management alerts will be configured at $5/month threshold.
- **Edge Compatibility:** Auth and simple reads will use Edge-compatible patterns where possible to reduce cold starts.

## Architecture Decision Records (ADRs)

| ID | Decision | Status | Context | Consequence |
| :--- | :--- | :--- | :--- | :--- |
| **ADR-001** | **Next.js T3 Stack** | Accepted | Need rapid, type-safe full-stack dev. | High velocity, Vercel lock-in accepted. |
| **ADR-002** | **Vercel Deployment** | Accepted | Best DX for Next.js. | Optimized performance, potential cost at scale. |
| **ADR-003** | **MongoDB + Prisma** | Accepted | Flexible schema needed for CVs. | Requires connection pooling (Accelerate). |
| **ADR-004** | **Gemini + Vercel AI** | Accepted | Zero-cost constraint. | Rate limits handled via UI; JSON mode for quality. |
| **ADR-005** | **MongoDB File Storage** | Accepted | Avoid S3 complexity/cost for MVP. | Database bloat risk long-term; abstracted via FileService. |
| **ADR-006** | **Resend Email** | Accepted | Free tier, easy integration. | Reliable transactional emails. |
| **ADR-007** | **Hybrid Auth** | Accepted | Balance friction vs security. | Google/Microsoft OAuth + Verified Local Auth. |

## 17. Strategic Rationale (SWOT)

**Why T3 Stack?**

| Strength | Weakness | Opportunity | Threat |
| :--- | :--- | :--- | :--- |
| **Type Safety:** End-to-end TypeScript prevents bugs. | **Complexity:** Steeper learning curve than plain Express. | **Scale:** Easy serverless scaling. | **Lock-in:** High dependence on Vercel ecosystem. |
| **Velocity:** Rapid scaffolding with `create-t3-app`. | **Abstraction:** 'Magic' can hide details. | **Market:** High demand for Next.js skills. | **Cost:** Serverless limits. |

**Verdict:** The trade-off of **portability** for **velocity and safety** is accepted to meet the "Time Efficiency" goal.

---

_Generated by BMAD Decision Architecture Workflow v1.0_
_Date: 2025-12-10_
_For: BIP_