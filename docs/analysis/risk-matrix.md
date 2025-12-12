# Risk Matrix Analysis

This document outlines a preliminary risk matrix for the "AI CV & Job Application Assistant" project, generated during the Advanced Elicitation workflow.

| Risk Category | Risk Description | Probability | Impact | Priority | Mitigation Idea |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Technical** | Inaccurate CV parsing for complex formats leads to poor quality AI output. | High | High | **Critical** | For MVP, strictly define and enforce supported CV formats. Use robust parsing libraries. |
| **Security** | A data breach exposes sensitive user CVs, personal info, and credentials. | Medium | High | **Critical** | Implement strict data encryption (at-rest and in-transit), secure authentication (JWT), and regular security audits. |
| **AI/Quality** | The generated application letters or CV suggestions are generic or low-quality. | Medium | High | **High** | Use a state-of-the-art LLM. Implement a feedback loop for users to rate suggestion quality. |
| **Legal** | The handling of user data violates GDPR or other privacy regulations. | Medium | High | **High** | Conduct a formal GDPR compliance review. Ensure clear user consent and data management policies. |
| **User Adoption**| Users find the process too complex or don't trust the AI's suggestions. | Medium | Medium | **Medium** | Focus on a simple, intuitive UX for the MVP. Include disclaimers and explanations of how the AI works. |
| **AI/Bias** | The AI model inadvertently introduces bias (e.g., based on gender, ethnicity) into CVs. | Low | High | **Medium** | Regularly test the model for bias. Provide users with controls to override or biased suggestions. |
