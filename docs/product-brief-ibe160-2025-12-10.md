# Product Brief: ibe160

**Date:** 2025-12-10
**Author:** BIP
**Context:** Greenfield Project

---

## Executive Summary

The AI CV & Job Application Assistant is a web application designed to help students and recent graduates leverage AI to create tailored CVs and application letters, analyze qualification gaps, and ultimately gain a competitive edge in the job market.

---

## Core Vision

### Problem Statement

Students and recent graduates face a significant "Confidence and Efficiency Gap" in tailoring job applications. They struggle due to a lack of understanding of recruiter expectations (low "recruiter empathy") and insufficient time/skills to effectively customize their CVs and cover letters for each job. This leads to anxiety, frustration, and a low success rate with generic applications.

### Problem Impact

The problem of ineffective job applications has a significant measurable impact. For students, it leads to prolonged job searches, increased anxiety, and lost income opportunities. For the market, an estimated Serviceable Available Market (SAM) of 32.4 million NOK (annual revenue) exists for application assistance among job-seeking students in Norway, indicating a clear economic opportunity for effective solutions.

### Why Existing Solutions Fall Short

Existing solutions, such as general online CV builders (CVMaker.no, CV-Norge.com, Novorésumé), primarily focus on document creation and template-based generation. They fall short by not providing deep, AI-driven insights into qualification gaps or hyper-personalized content tailoring to specific job descriptions, which our target users desperately need. These tools often leave the student in the "Guess & Pray" journey, whereas our solution aims for "Optimize & Send."

### Proposed Solution

The AI CV & Job Application Assistant is an AI-powered "Career Coach" web application designed to empower students and recent graduates. It leverages advanced AI (LLM) to perform a precise "Gap Analysis" between a user's CV/profile and a target job description. This insight, combined with intelligent content generation, allows users to quickly create highly tailored application materials, providing them with both confidence and efficiency in their job search.

### Key Differentiators

Our core value proposition lies in the combination of **Insight (Gap Analysis)** and **Action (Tailored Content Generation)**. Unlike generic AI writers, we act as an AI Career Coach, providing actionable insights into "why" an application might fall short, and then enabling users to "fix it" rapidly. This shifts the user journey from "Guess & Pray" to "Optimize & Send" in minutes.

---

## Target Users

### Primary Users

**University & College Students / Recent Graduates (Norway)**
- **Demographics:** Approx. 300,000 students in Norway. Concentrated in major university cities. Average age 23.5.
- **Psychographics:** High digital literacy but high anxiety regarding the job market. Value efficiency, guidance, and gaining a competitive edge.
- **Behavior:** Frequent users of online job portals (Finn.no, LinkedIn). Price-sensitive (WTP 100-300 NOK/year). Often procrastinate on applications due to "writer's block."

### Secondary Users

**University Career Services (Partners)**
- **Role:** Advisors and administrators helping students find employment.
- **Motivation:** Improving student placement rates and reducing administrative burden of basic CV reviews.
- **Potential:** Distribution channel and validation partner.

### User Journey

{{user_journey}}

---

## Success Metrics

- **Time Efficiency:** Generate a tailored application package in under 5 minutes.
- **User Adoption:** Achieve high satisfaction and engagement rates during test phases.
- **Effectiveness:** AI suggestions demonstrably improve application relevance (measured by user feedback).
- **Financial:** Capture 1-3% of SAM (~324k - 972k NOK annual revenue) within 18-24 months.


### Business Objectives

- **Market Penetration:** Establish a foothold in the Norwegian student market.
- **Brand Building:** Become the go-to AI tool for student career advice.
- **Monetization Validation:** Test willingness to pay for premium features (future).

### Key Performance Indicators

- **Monthly Active Users (MAU):** 1,000+ within 6 months.
- **Application Generation Rate:** % of sessions resulting in a downloaded application.
- **User Retention:** % of users returning for a second application.
{{/if}}

---

## MVP Scope

### Core Features

- **User Authentication:** Secure sign-up/login via Google, Microsoft, or Email (NextAuth.js).
- **CV Management:** Upload and parse CVs (PDF/DOCX/TXT).
- **Job Description Input:** Simple text area for pasting job ads.
- **Gap Analysis Engine:** AI-driven comparison of CV vs Job Description to identify missing skills.
- **Tailored Content Generation:** Auto-drafting of a cover letter highlighting relevant experience.
- **Improvement Suggestions:** Actionable tips to optimize the CV for the specific role.
- **Export:** Download generated materials as PDF/Text.

### Out of Scope for MVP

- **ATS Optimization Module:** Advanced formatting for specific ATS systems (deferred).
- **Style/Tone Customization:** User-selectable "voices" (e.g., "Formal", "Casual") - standard professional tone will be default.
- **Job Board Integration:** Direct applying via LinkedIn/Finn.no API.
- **Public Profiles:** Sharing CVs via a public link.

### Future Vision

- **ATS Optimization Module:** Advanced formatting for specific ATS systems (deferred).
- **Style/Tone Customization:** User-selectable "voices" (e.g., "Formal", "Casual") - standard professional tone will be default.
- **Job Board Integration:** Direct applying via LinkedIn/Finn.no API.
- **Public Profiles:** Sharing CVs via a public link.

---

## Market Context

The market for AI career tools is growing rapidly. In Norway, students face a specific challenge with "generic" applications. While competitors like CVMaker exist, they focus on *templates*. Our differentiation is *intelligence* (Gap Analysis). We target the "Serviceable Available Market" of ~32M NOK with a high-value, low-friction tool.

## Technical Preferences

- **Stack:** Next.js (T3 Stack) for type safety and velocity.
- **Database:** MongoDB (flexible schema for CV data).
- **AI:** Google Gemini (via Vercel AI SDK) for cost-effective intelligence.
- **Deployment:** Vercel for seamless scaling.

## Risks and Assumptions

- **AI Hallucinations:** Risk of generating incorrect advice. Mitigation: "Human-in-the-loop" review.
- **Data Privacy:** Storing CVs requires strict GDPR compliance. Mitigation: Secure storage, user ownership of data.
- **Rate Limits:** Free AI tier limits. Mitigation: Queueing/Throttling.

## Timeline

- **MVP Launch:** Target launch within 3 months to align with semester hiring cycles.
- **Testing Phase:** Beta testing with select student groups in Month 2.

## Supporting Materials

- **Market Research Report:** `docs/research-report-2025-12-01.md`
- **Brainstorming Results:** `docs/brainstorming-session-results-2025-12-01.md`
- **Architecture Decision Records:** `docs/architecture.md`

---

_This Product Brief captures the vision and requirements for ibe160._

_It was created through collaborative discovery and reflects the unique needs of this {{context_type}} project._

{{#if next_workflow}}
_Next: {{next_workflow}} will transform this brief into detailed planning artifacts._
{{else}}
_Next: Use the PRD workflow to create detailed product requirements from this brief._
{{/if}}
