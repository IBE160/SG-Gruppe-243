# Product Requirements Document: AI CV & Job Application Assistant

## 1. Introduction

This document outlines the product requirements for the "AI CV & Job Application Assistant." It details the project's purpose, scope, target audience, features, and success criteria. The objective is to provide a clear and comprehensive guide for the development team to build and launch a successful product.

## 2. Executive Summary

The AI CV & Job Application Assistant is a web-based application designed to help students and recent graduates overcome the challenges of creating tailored job application materials. By leveraging a Large Language Model (LLM), the tool will analyze a user's CV against a specific job description to automatically generate a customized application letter, suggest CV improvements, and identify qualification gaps. This will save users significant time and demonstrably improve the quality and effectiveness of their job applications, giving them a competitive edge in the job market.

## 3. Context and Background

In today's competitive job market, a generic application is often overlooked. Students and job seekers frequently struggle to effectively tailor their CVs and application letters to the specific requirements of each job posting. This process is time-consuming, requires a deep understanding of industry keywords, and can be a significant barrier to securing interviews. The AI CV & Job Application Assistant will address this pain point by automating the customization process, providing data-driven insights, and empowering users to present their best selves to potential employers.

## 4. Goals and Success Criteria

### Goals
- To simplify and accelerate the job application process for students and recent graduates.
- To improve the quality and relevance of users' application materials.
- To provide actionable insights that help users identify and address skill gaps.
- To build a secure, reliable, and user-friendly web application.

### Success Criteria
- **Time Efficiency:** A user can generate a complete, tailored application package (letter and suggested CV edits) in under 5 minutes.
- **User Adoption & Engagement:** Achieve high user satisfaction and engagement rates during student test group phases.
- **Effectiveness:** AI-generated suggestions demonstrably improve the relevance and clarity of user applications, measured through user feedback and A/B testing.
- **Security:** All user data is securely encrypted, and the system is fully compliant with GDPR, with zero security breaches.

## 5. Scope

### In-Scope (Minimum Viable Product - MVP)
- **Personalized application generation:** Automatically creates a tailored application letter based on a user’s CV and a specific job posting.
- **CV improvement suggestions:** Highlights areas for improvement such as wording, structure, tone/styel and keyword alignment.
- **Qualification gap analysis:** Identifies missing or weak skills compared to job requirements.

### Out-of-Scope (Potential Future Extensions)
- **ATS optimization module:** Adjusts formatting and content to improve compatibility with automated screening systems (ATS).
- **Language and tone customization:** Allows users to select writing style, tone, and language level for different industries or regions.
- Direct integration with job boards (e.g., LinkedIn, Indeed).
- Sharing features or public profile pages.

## 6. Personas and User Stories

### Personas
- **Ambitious Amina (University Student):** A final-year computer science student aiming for an internship at a top tech company. She is tech-savvy but time-poor, juggling studies and projects. She needs a tool that is fast, efficient, and gives her a competitive edge.
- **Exploring Eric (Recent Graduate):** A recent liberal arts graduate exploring various career paths. He is unsure how to best position his skills for different industries (e.g., marketing, non-profit, sales). He needs a tool that helps him understand and articulate his transferable skills for diverse roles.

### User Stories
1. As a student, I want to upload my CV and a job posting so that I can get a customized application letter.
2. As a student, I want to see what qualifications I’m missing so I can plan skill development.

## 7. User Flows

**Flow 1:** Student entering the website for the first time.
**Entry Point:** Student lands on homepage

**1. Landing Page**
- Student views hero section explaining the concept of this web application
- Clicks on sign up button

**2. Authentication and user creation**
- Fills out form with e-mail address, first and last name and phone number
- The user will get a verification e-mail with a code that is going to be submitted to verify the user

**3. Finishing the user creation**
- After sucessful user verification the user gets the option to upload their CV

**Flow 2:** Student who already has a user enters the website
**Entry Point:** Student lands on homepage

**1. Landing Page**
- User clicks on the log in button

**2. Authentication**
- User gets the option to fill out login form

**3. Authenticated and user uses the web tool**
- Uses the tool that compares the CV and a job advertisement
  - The tool has a text box where the user pastes the job advertisement
- User gets the results of compatibility tool, where the tool shows the qualification gap analysis and CV improvement suggestions
- The user then gets the choice to get a Personalized application generated

## 8. Functional Criteria

- **FR1, FR2:** The system MUST allow users to create an account and log in securely.
- **FR3:** The system MUST allow users to upload CVs in PDF, DOC, and TXT formats.
- **FR4:** The system MUST provide a text area for users to paste a job description.
- **FR5:** The system MUST present AI-generated suggestions to the user in a clear, itemized list.
- **FR5:** Each suggestion MUST be individually approvable/rejectable by the user.
- **FR6, FR7:** The system MUST generate a downloadable application letter based on the user's CV, the job description, and the approved suggestions.
- **FR8:** The system MUST store user documents securely and associate them with the correct user profile.

## 9. Non-Functional Criteria

- **Performance:** The end-to-end analysis and generation process should take no longer than 5 minutes, with a target of under 60 seconds.
- **Security:** Implement JWT for stateless authentication, hash passwords using bcrypt, and manage all secrets via environment variables. All data in transit and at rest must be encrypted.
- **Usability:** The user interface must be intuitive, responsive, and accessible, following WCAG 2.1 guidelines.
- **Reliability:** The application should have an uptime of 99.9%.
- **Data Privacy:** The system must be fully compliant with GDPR, including clear user consent for data processing and a mechanism for users to request data deletion.

## 10. Design and Architecture

- **Platform:** Web Application
- **Frontend:** React with TypeScript and Tailwind CSS, for a highly customizable and responsive user interface.
- **Backend:** Node.js with Express.js and TypeScript, providing a RESTful API for handling user authentication, document processing, and communication with the AI service.
- **Database:** MongoDB, a NoSQL database, for flexible storage of user profiles, CVs, and generated application materials.
- **AI Integration:** The backend will integrate with a powerful Large Language Model (LLM) via its API to provide the core functionality of application generation and CV analysis.

## 11. Testing Strategy

To ensure a high-quality and reliable application, the following testing strategies will be implemented:

- **Frontend (Unit and Component Testing):** **Jest** and **React Testing Library** will be used to write unit and component tests for all React components, ensuring they behave as expected in isolation.
- **Backend (Unit and Integration Testing):** **Jest** and **Supertest** will be used to test the backend API. Unit tests will cover individual functions and modules, while integration tests will validate the API endpoints and their interaction with the database.
- **End-to-End (E2E) Testing:** **Cypress** or **Playwright** will be used for E2E testing, simulating real user scenarios to ensure the entire application flow works correctly.

## 12. Security

Security is a top priority. The following measures will be implemented to protect user data:

- **Authentication:** **JSON Web Tokens (JWT)** will be used for stateless authentication, ensuring that only authenticated users can access their data.
- **Password Hashing:** User passwords will be securely hashed using a strong algorithm like **bcrypt** before being stored in the database.
- **Secret Management:** All sensitive information, such as API keys and database credentials, will be stored as environment variables and will not be hard-coded in the application.
- **Input Validation:** All user input will be validated on both the frontend and backend to prevent common vulnerabilities like Cross-Site Scripting (XSS) and SQL injection.

## 13. CV Parsing

The application will need to parse CVs in various formats (PDF, DOCX, TXT). The following approach will be used:

- **Libraries:** We will use libraries like **`pdf-parse`** for parsing PDF files and **`mammoth`** for converting DOCX files to HTML, which can then be parsed for text.
- **Complexity:** We acknowledge that parsing documents with complex layouts can be challenging. For the MVP, we will focus on parsing standard, single-column CV formats. More advanced parsing capabilities can be explored as an extension.

## 14. Database Schema

The project will use MongoDB. The schema will be organized into three main collections:

**1. `users` Collection**
Stores essential user information for authentication and identification.

```json
{
  "_id": "ObjectId",
  "name": "String",
  "email": "String (unique)",
  "password": "String (hashed)",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

**2. `cvs` Collection**
Stores the CVs uploaded by a user. A user can have many CVs.

```json
{
  "_id": "ObjectId",
  "userId": "ObjectId (references a user)",
  "originalFilename": "String",
  "storagePath": "String (path to the stored file, e.g., on S3)",
  "extractedText": "String (the parsed text from the CV)",
  "createdAt": "Date"
}
```

**3. `generatedApplications` Collection**
Stores the results of each analysis, linking a user, a CV, and a job description.

```json
{
  "_id": "ObjectId",
  "userId": "ObjectId (references a user)",
  "cvId": "ObjectId (references a cv)",
  "jobDescription": "String",
  "generatedLetter": "String (the tailored cover letter)",
  "analysisResults": {
    "qualificationGaps": ["String"],
    "cvImprovementSuggestions": ["String"],
    "atsKeywordsFound": ["String"]
  },
  "createdAt": "Date"
}
```

## 15. Dependencies

- **External LLM API:** The core functionality is dependent on a third-party Large Language Model API (e.g., from OpenAI, Google, or Anthropic). API availability, cost, and terms of service are external dependencies.
- **Cloud Hosting Provider:** The application will be hosted on a cloud platform (e.g., AWS, Vercel, Azure).
- **NPM Packages:** The project relies on various open-source NPM packages for both frontend and backend development.

## 16. Risks

| Risk Description | Probability | Impact | Mitigation Strategy |
| :--- | :--- | :--- | :--- |
| Inaccurate CV parsing for complex formats leads to poor AI output. | High | High | For MVP, strictly define and enforce supported CV formats. Provide clear guidance to users on best formats. |
| A data breach exposes sensitive user CVs and personal info. | Medium | High | Implement strict data encryption, secure authentication (JWT), regular security audits, and follow security best practices. |
| The generated application letters or CV suggestions are generic or low-quality. | Medium | High | Utilize a state-of-the-art LLM. Implement a feedback loop for users to rate suggestion quality. Use a benchmarking framework to test and improve prompt engineering. |
| The cost of the LLM API becomes unsustainable. | Medium | High | Implement cost monitoring from day one. Explore different models and pricing tiers. Cache results where possible. |
| A major platform (e.g., LinkedIn) integrates a similar feature for free. | Low | High | Focus on a superior user experience and higher quality, more trustworthy suggestions. Build a strong brand and community. |

## 17. Timeline

The detailed project timeline, including sprints and milestones, is to be defined during the project planning phase. This PRD will serve as the primary input for that planning process.
