---
id: setup
title: Setup Guide
sidebar_label: Setup
---

# Setup Guide

This guide helps developers set up the **Taskify** environment locally for development and testing purposes.

---

## Prerequisites

Before you begin, make sure you have the following installed:

| Tool | Minimum Version | Description |
|------|------------------|-------------|
| [Node.js](https://nodejs.org/) | 18.x or higher | Required for running frontend and backend services |
| [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) | Latest | Package manager |
| [Docker](https://www.docker.com/) | 24.x or higher | Used for containerizing microservices and databases |
| [PostgreSQL](https://www.postgresql.org/) | 14.x or higher | Database system used by Taskify |
| [Git](https://git-scm.com/) | Latest | For version control |

---

## Folder Structure

```bash
taskify/
├── client/              # Frontend (React)
├── gateway/             # API Gateway / Backend entry point
├── services/
│   ├── auth-service/    # Handles authentication
│   ├── user-service/    # Manages user data
│   └── task-service/    # Manages tasks
├── database/            # Database configuration files
├── docs/                # Documentation (Docusaurus)
└── docker-compose.yml   # Docker configuration
```
## Local Setup Steps
**1. Clone the Repository**
```bash
git clone https://github.com/your-org/taskify.git
cd taskify
```

**2. Install Dependencies**

Install dependencies for each service:
```bash
cd gateway && npm install
cd ../services/auth-service && npm install
cd ../services/user-service && npm install
cd ../services/task-service && npm install
cd ../../client && npm install
```

**3. Environment Configuration**

Each service requires its own `.env` file. Example:
```bash
# .env (for Auth Service)
PORT=5001
DATABASE_URL=postgres://user:password@localhost:5432/auth_db
JWT_SECRET=your_jwt_secret
```
Create similar `.env` files for:
- user-service
- task-service
- gateway

## Run with Dockers
If you prefer using Docker, run the entire system with one command:
```bash
docker-compose up --build
```
This will start:
- PostgreSQL container for each service
- API Gateway
- All microservices
- Frontend client

Once started, open:
- Frontend: http://localhost:3000
- Gateway API: http://localhost:4000

## Testing
Each service includes unit and integration tests. To run tests:
```bash
npm test
```
Or with coverage:
```bash
npm run test:coverage
```

## Common Issues
| Issue                 | Cause                          | Solution                                            |
| --------------------- | ------------------------------ | --------------------------------------------------- |
| `ECONNREFUSED`        | Database service not running   | Ensure PostgreSQL/Docker containers are started     |
| `Invalid JWT`         | Incorrect or missing token     | Check `.env` and make sure JWT_SECRET is consistent |
| `Port already in use` | Another process using the port | Kill the process or change port in `.env`           |
