# Service Blueprint: Generate Customized Application Letter

This Service Blueprint visualizes the end-to-end process for a student generating a customized application letter, based on User Story 1.

| **Customer Actions** | **Frontstage (User Interface)** | **Backstage (API/System)** | **Support Processes** |
| :------------------- | :------------------------------ | :------------------------- | :--------------------- |
| 1. Arrives at App | Landing page, Login/Signup prompt | (Authentication Microservice readiness) | N/A |
| 2. Logs In / Signs Up | Login/Signup forms, Dashboard | Auth Microservice: Verifies credentials, Establishes user session (JWT) | User support for authentication issues |
| 3. Navigates to "New Application" | "New Application" button/page on dashboard | Frontend routing to application generation module | N/A |
| 4. Uploads CV File (PDF/DOC/TXT) | File upload component, displays file name | Backend Service (Upload/Storage): Receives file, Stores in secure object storage (e.g., S3), Initiates virus scan | Admin: Monitors storage capacity, Ensures data integrity & backups |
| 5. Pastes Job Description | Rich text area for Job Description input | Backend Service (JD Processing): Receives and stores JD text, Cleans/sanitizes input | N/A |
| 6. Clicks "Generate Application" | Primary action button | Backend Service (Orchestration): Triggers sequence of AI-related tasks | N/A |
| 7. (Waits for generation) | Loading spinner, Progress indicator, Estimated time | **AI Orchestration Service:** <br> a) **CV Parsing:** Calls parsing module (e.g., `pdf-parse`, `mammoth`) to extract text from stored CV. <br> b) **NLP Analysis:** Analyzes parsed CV text and JD text for keywords, skills, tone. <br> c) **LLM Call:** Interacts with LLM API to generate draft application letter based on analysis. <br> d) **Store Results:** Saves generated letter, CV improvement suggestions, and qualification gaps to MongoDB. | Monitoring AI service performance, Cost tracking, LLM API rate limiting management |
| 8. Views Generated Letter & Suggestions | Displays editable application letter, CV improvement suggestions, Qualification gap analysis (UI feedback on alignment) | Backend Service (Retrieval): Fetches generated letter and analysis from MongoDB | User support for understanding results, AI explanation prompts |
| 9. Edits Letter (Optional) | Integrated text editor for modifications | Backend Service (Update): Saves user's edited version to MongoDB | N/A |
| 10. Downloads Final Letter | "Download" button (PDF/DOCX/TXT options) | Frontend: Initiates download process, potentially converts to desired format (e.g., client-side PDF generation) | User support for download issues |
