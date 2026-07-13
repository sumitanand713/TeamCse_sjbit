# PLREPA

PLREPA is a Spring Boot + Node.js hackathon project for student study planning, exam tracking, and progress management. The main backend is the root Maven app, and the AI helper server lives in `frontend/`.

## Features

- User registration and login
- Exam and subject management through REST APIs
- Progress tracking for each user
- AI-generated study plans
- AI-generated multiple-choice quizzes
- File-based H2 database for local persistence

## Tech Stack

- Java 17
- Spring Boot 3.5.x
- Spring Data JPA
- H2 Database
- Node.js
- Express
- Google Generative AI

## Project Layout

- `src/main/java/com/example/plrepa/` - Spring Boot application, controllers, models, repositories, and services
- `src/main/resources/application.properties` - Backend database and JPA configuration
- `data/` - Local H2 database files
- `frontend/` - Node.js AI helper server and static frontend pages
- `target/` - Maven build output

## Requirements

- Java 17 or later
- Maven 3.9+ or the included Maven Wrapper
- Node.js 18+ for the `frontend/` server
- A Google Gemini API key for the AI endpoints

## Setup

### 1. Start the Spring Boot backend

From the repository root:

```bash
./mvnw spring-boot:run
```

On Windows PowerShell:

```powershell
.\mvnw.cmd spring-boot:run
```

The backend runs on `http://localhost:8080` by default.

### 2. Start the Node.js AI server

From `frontend/`:

```bash
npm install
npm start
```

The AI helper server runs on `http://localhost:3000` by default.

Before starting it, update the Gemini API key in `frontend/server.js`.

## Backend Configuration

The backend uses a file-based H2 database configured in `src/main/resources/application.properties`:

- JDBC URL: `jdbc:h2:file:./data/edupath_db`
- H2 console: `http://localhost:8080/h2-console`
- Username: `sa`
- Password: empty

## API Endpoints

### Authentication

- `POST /api/auth/register` - create a new user
- `POST /api/auth/login` - authenticate a user by email and password

### Exams

- `GET /exams` - list all exams
- `POST /exams` - create an exam
- `GET /exams/{id}` - get an exam by id
- `DELETE /exams/{id}` - delete an exam

### Progress

- `GET /api/progress/{email}` - fetch a user's progress record
- `POST /api/progress/update/{email}` - create or update progress for a user

### AI Helper Server

- `POST /api/generate-plan` - generate a 1-week study plan
- `POST /api/generate-quiz` - generate 5 multiple-choice quiz questions

## Data Models

- `User` - name, username, email, phone, password
- `Exam` - exam name and associated subjects
- `Subject` - subject name, weightage, and parent exam
- `Progress` - progress percent, quizzes taken, study plan week, and linked user

## Notes

- The backend and frontend are separate processes.
- The AI quiz endpoint expects valid JSON from the model and returns an error if parsing fails.
- The repository includes generated build artifacts and local database files; they can be removed and recreated if needed.