# AI StudyBuddy API

Backend project using Node.js, Express, MongoDB, Postman and an AI API key.

## Setup

1. Install Node.js LTS.
2. Open this folder in VS Code.
3. Open the terminal.
4. Run:
   npm install
5. Create a `.env` file from `.env.example`.
6. Add your MongoDB connection string and API key.
7. Run:
   npm run dev

Server:
http://localhost:5000

## Main APIs

POST /api/auth/register
POST /api/auth/login

POST /api/study-plans
GET /api/study-plans
GET /api/study-plans/:id
PUT /api/study-plans/:id
DELETE /api/study-plans/:id

POST /api/study-sessions
GET /api/study-sessions

POST /api/ai/ask
POST /api/ai/study-plan
