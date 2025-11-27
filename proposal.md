## Case Title

AI CV & Job Application Assistant

## Background

Students and job seekers often struggle to tailor their applications and CVs to specific job postings. Creating a compelling CV and application letter that matches the required skills and tone takes time and experience. An AI-powered assistant can simplify this process and provide valuable insights into strengths, weaknesses, and missing qualifications.

## Purpose

The application aims to help students generate customized job applications using their existing CVs,previous applications, key words, and target job descriptions. It improves application quality by suggesting edits to both the CV and the application letter, identifying missing qualifications, and optimizing for Applicant Tracking Systems (ATS).

## Target Users

- University and college students seeking internships or entry-level positions
- Recent graduates looking to improve job application materials

## Core Functionality

### Must Have (MVP)

- **Personalized application generation:** Automatically creates a tailored application letter based on a user’s CV and a specific job posting.
- **CV improvement suggestions:** Highlights areas for improvement such as wording, structure, tone/styel and keyword alignment.
- **Qualification gap analysis:** Identifies missing or weak skills compared to job requirements.

### Nice to Have (Optional Extensions)

- **ATS optimization module:** Adjusts formatting and content to improve compatibility with automated screening systems (ATS).
- **Language and tone customization:** Allows users to select writing style, tone, and language level for different industries or regions.

## Data Requirements

- **Users:** Name, email, login credentials (securely stored)
- **Documents:** CVs (PDF/DOC/TXT), job postings, past applications
- **Application Data:** Keywords, desired tone/style, AI-generated outputs (application letters, improvement suggestions)

## User Stories

1. As a student, I want to upload my CV and a job posting so that I can get a customized application letter.
2. As a student, I want to see what qualifications I’m missing so I can plan skill development.

## User Flows

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

## Technical Constraints

- Must support secure login and encrypted data storage.
- Must process PDF, DOC, and TXT files.
- Internet access required for AI-based generation.
- Must comply with GDPR and privacy best practices.

## Platform and Architecture

- **Platform:** Web Application
- **Frontend:** React with TypeScript and Tailwind CSS, for a highly customizable and responsive user interface.
- **Backend:** Node.js with Express.js and TypeScript, providing a RESTful API for handling user authentication, document processing, and communication with the AI service.
- **Database:** MongoDB, a NoSQL database, for flexible storage of user profiles, CVs, and generated application materials.
- **AI Integration:** The backend will integrate with a powerful Large Language Model (LLM) via its API to provide the core functionality of application generation and CV analysis.

## Testing Strategy

To ensure a high-quality and reliable application, the following testing strategies will be implemented:

- **Frontend (Unit and Component Testing):** **Jest** and **React Testing Library** will be used to write unit and component tests for all React components, ensuring they behave as expected in isolation.
- **Backend (Unit and Integration Testing):** **Jest** and **Supertest** will be used to test the backend API. Unit tests will cover individual functions and modules, while integration tests will validate the API endpoints and their interaction with the database.
- **End-to-End (E2E) Testing:** **Cypress** or **Playwright** will be used for E2E testing, simulating real user scenarios to ensure the entire application flow works correctly.

## Security

Security is a top priority. The following measures will be implemented to protect user data:

- **Authentication:** **JSON Web Tokens (JWT)** will be used for stateless authentication, ensuring that only authenticated users can access their data.
- **Password Hashing:** User passwords will be securely hashed using a strong algorithm like **bcrypt** before being stored in the database.
- **Secret Management:** All sensitive information, such as API keys and database credentials, will be stored as environment variables and will not be hard-coded in the application.
- **Input Validation:** All user input will be validated on both the frontend and backend to prevent common vulnerabilities like Cross-Site Scripting (XSS) and SQL injection.

## CV Parsing

The application will need to parse CVs in various formats (PDF, DOCX, TXT). The following approach will be used:

- **Libraries:** We will use libraries like **`pdf-parse`** for parsing PDF files and **`mammoth`** for converting DOCX files to HTML, which can then be parsed for text.
- **Complexity:** We acknowledge that parsing documents with complex layouts can be challenging. For the MVP, we will focus on parsing standard, single-column CV formats. More advanced parsing capabilities can be explored as an extension.

## Database Schema

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

## Success Criteria

- Users can generate tailored applications in less than 5 minutes.
- Stored data is securely encrypted and accessible only by authorized users.
- AI suggestions demonstrably improve the relevance and clarity of applications.
- High user satisfaction and engagement from student test groups.
