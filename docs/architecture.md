# Architecture & System Design: AI CV & Job Application Assistant

This document outlines the complete architecture and system design for the AI CV & Job Application Assistant. It serves as the technical blueprint for development.

## 1. System Architecture Overview

The system is designed as a modern web application with a clear separation between the frontend client and the backend service.

-   **Frontend:** A single-page application (SPA) built with **React**, **TypeScript**, and styled with **Tailwind CSS**. It is responsible for all user interactions and rendering the UI. It communicates with the backend via a RESTful API.

-   **Backend:** A RESTful API server built with **Node.js**, **Express.js**, and **TypeScript**. It handles business logic, including user authentication, data storage, and orchestrating calls to the external AI service.

-   **Database:** A **MongoDB** NoSQL database is used for data persistence. It stores user profiles, CV data, and the results of generated analyses. **Mongoose** will be used as the Object Data Modeling (ODM) library to interact with MongoDB.

-   **AI Service:** An external Large Language Model (LLM) is accessed via its API. The backend sends it the user's CV text and the job description, and the LLM returns the analysis (qualification gaps, improvement suggestions) and the generated application letter.

The interaction flow is as follows: The user interacts with the React frontend, which sends requests to the Node.js backend API. The backend processes these requests, reading from or writing to the MongoDB database. For analysis and generation tasks, the backend makes a further API call to the LLM and then returns the processed results to the frontend.

## 2. Architecture Diagram

```
+---------------------------------+
|      Frontend (Browser)         |
|   (React, TypeScript, Tailwind) |
+---------------------------------+
              |
              | (HTTPS/REST API)
              v
+---------------------------------+
|       Backend API Server        |
| (Node.js, Express, TypeScript)  |
+---------------------------------+
      |                 |
      | (DB Connection) | (HTTPS/REST API)
      v                 v
+-----------+     +-------------+
|  Database |     | External    |
| (MongoDB) |     | LLM Service |
+-----------+     +-------------+
```

## 3. API Design (MVP)

All endpoints requiring authentication will expect a `Authorization: Bearer <token>` header.

Error responses will follow a simple structure:
```json
{
  "error": "A brief, human-readable error message",
  "details": "Optional technical details about the error"
}
```

---

### Authentication

**Endpoint:** `POST /auth/register`
-   **Description:** Registers a new user.
-   **Authentication:** Not required.
-   **Request Body:**
    ```json
    {
      "name": "String",
      "email": "String",
      "password": "String"
    }
    ```
-   **Response Body (Success 201):**
    ```json
    {
      "message": "User registered successfully."
    }
    ```

**Endpoint:** `POST /auth/login`
-   **Description:** Logs in an existing user and returns a JWT.
-   **Authentication:** Not required.
-   **Request Body:**
    ```json
    {
      "email": "String",
      "password": "String"
    }
    ```
-   **Response Body (Success 200):**
    ```json
    {
      "token": "String (JWT)",
      "userId": "ObjectId"
    }
    ```

---

### CV Management

**Endpoint:** `POST /cv/upload`
-   **Description:** Uploads a CV file for the authenticated user. The backend will parse the file and store its text content.
-   **Authentication:** Required.
-   **Request Body:** `multipart/form-data` with a single field `cv` containing the file (PDF, DOCX, TXT).
-   **Response Body (Success 201):**
    ```json
    {
      "cvId": "ObjectId",
      "message": "CV uploaded and processed successfully."
    }
    ```

---

### Analysis & Generation

**Endpoint:** `POST /analysis`
-   **Description:** Performs a qualification gap analysis and suggests CV improvements by comparing a CV against a job description.
-   **Authentication:** Required.
-   **Request Body:**
    ```json
    {
      "cvId": "ObjectId",
      "jobDescription": "String"
    }
    ```
-   **Response Body (Success 200):**
    ```json
    {
      "analysisId": "ObjectId",
      "qualificationGaps": ["String"],
      "cvImprovementSuggestions": ["String"]
    }
    ```

**Endpoint:** `POST /application-generation`
-   **Description:** Generates a full application letter.
-   **Authentication:** Required.
-   **Request Body:**
    ```json
    {
      "analysisId": "ObjectId" // From the /analysis step
    }
    ```
-   **Response Body (Success 200):**
    ```json
    {
      "generatedLetter": "String"
    }
    ```

## 4. Database Schema (Mongoose)

### `users` Collection

```javascript
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address.']
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
    minlength: [8, 'Password must be at least 8 characters long.']
  }
}, { timestamps: true });
```

### `cvs` Collection

```javascript
const cvSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  originalFilename: {
    type: String,
    required: true
  },
  storagePath: { // Path to the locally stored file (e.g., 'backend/uploads/cv/unique-filename.pdf')
    type: String,
    required: true
  },
  extractedText: {
    type: String,
    required: true
  }
}, { timestamps: true });
```

### `generatedApplications` Collection

```javascript
const generatedApplicationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  cvId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cv',
    required: true
  },
  jobDescription: {
    type: String,
    required: true
  },
  analysisResults: {
    qualificationGaps: [{ type: String }],
    cvImprovementSuggestions: [{ type: String }]
  },
  generatedLetter: {
    type: String
  }
}, { timestamps: true });
```

## 5. Frontend Page Map

-   **Landing Page (`/`)**
    -   **Purpose:** Introduce the application to new users and provide a clear call-to-action.
    -   **UI Elements:** Navigation bar, hero section with headline and sub-headline, "Sign Up" button, "Log In" link.
    -   **Interactions:** Clicking "Sign Up" navigates to the Register page. Clicking "Log In" navigates to the Login page.

-   **Register Page (`/register`)**
    -   **Purpose:** Allow new users to create an account.
    -   **UI Elements:** Registration form (name, email, password), "Register" button, link to Login page.
    -   **Interactions:** On form submission, a request is sent to `POST /auth/register`. On success, the user is redirected to the Login page.

-   **Login Page (`/login`)**
    -   **Purpose:** Allow existing users to sign in.
    -   **UI Elements:** Login form (email, password), "Log In" button, link to Register page.
    -   **Interactions:** On form submission, a request is sent to `POST /auth/login`. On success, the user is redirected to the Dashboard.

-   **Dashboard (`/dashboard`)**
    -   **Purpose:** The main hub for authenticated users. Provides access to core features.
    -   **UI Elements:** Welcome message, list of previously uploaded CVs, button to "Start New Analysis".
    -   **Interactions:** Clicking "Start New Analysis" navigates to the CV Upload / Analysis page.

-   **CV Upload & Analysis Page (`/analysis/new`)**
    -   **Purpose:** To upload a CV and provide a job description for analysis.
    -   **UI Elements:** File upload input for CV, text area for job description, "Analyze" button.
    -   **Interactions:** User uploads a file (triggers `POST /cv/upload`), pastes text, and clicks "Analyze" (triggers `POST /analysis`). The user is then redirected to the Analysis Results page.

-   **Analysis Results Page (`/analysis/results/:analysisId`)**
    -   **Purpose:** Display the results of the CV vs. job description analysis.
    -   **UI Elements:** Sections for "Qualification Gaps" and "CV Improvement Suggestions", a "Generate Application Letter" button.
    -   **Interactions:** Clicking the "Generate Application Letter" button triggers `POST /application-generation` and redirects the user to the Application Generator page.

-   **Application Generator Page (`/application/view/:analysisId`)**
    -   **Purpose:** Display the final, AI-generated application letter.
    -   **UI Elements:** A text box containing the generated letter, a "Copy to Clipboard" button.
    -   **Interactions:** User can copy the text to use elsewhere.

## 6. Implementation Readiness Checklist

-   [x] **What is ready:**
    -   The product requirements are clearly defined in the PRD.
    -   The core features for the MVP are prioritized.
    -   The high-level system architecture and technology stack are chosen.
    -   The API endpoints for the MVP are defined.
    -   The database schema is designed.
    -   The frontend user flow and page structure are mapped out.

-   [x] **Resolved Decisions:**
    -   **LLM API Key Management:** The LLM API key will be stored locally in a `.env` file in the backend, loaded via `process.env`. This is sufficient for local development.
    -   **File Storage Solution:** Uploaded CVs will be stored on the local filesystem in the `backend/uploads/cv/` directory. The `storagePath` in the database will point to this local file path.
    -   **Error Handling Strategy:** A simple, centralized error-handling middleware will be used in Express. Controllers will use `try/catch` blocks, and errors will be logged to the console.

The system is now **100% ready** for backend implementation to begin.
