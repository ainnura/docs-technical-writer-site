---
id: authentication
title: Authentication API
sidebar_label: Authentication
---

# Authentication API

The **Authentication API** allows users to securely log in, log out, and refresh their session using JWT (JSON Web Token).

---

## Overview

Taskify uses **JWT-based authentication** to verify and authorize users.  
When a user logs in successfully, the system returns a token that must be included in the header for every protected API request.

**Authorization Header:**
```text
Authorization: Bearer &lt;your_token_here&gt;
```
## Endpoint
🟢 POST /api/auth/login
Authenticate a user and return a JWT token.

**Request Body**
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```
**Response**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
```
**Example cURL**
```bash
curl -X POST https://api.taskify.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "yourpassword"}'
```

🔵 POST /api/auth/logout

Logs out the current user and invalidates their token.

**Headers**
```text
Authorization: Bearer &lt;your_token_here&gt;
```

**Response**
```json
{
  "message": "Logout successful"
}
```

## Error Responses

| Code | Message | Description |
|------|----------|-------------|
| **400** | Invalid credentials | Email or password is incorrect |
| **401** | Unauthorized | Token is missing or invalid |
| **403** | Forbidden | Access denied to the requested resource |
| **404** | Not found | The requested endpoint or resource does not exist |
| **500** | Server error | Internal server issue or unexpected failure |

## Notes

- JWT tokens usually expire within **24 hours** for security reasons.  
- Always use **HTTPS** when transmitting sensitive data such as passwords or tokens.  
- Never share your token in public repositories or client-side code.  
- Store tokens securely using `localStorage`, `sessionStorage`, or secure cookies.  
- Make sure to handle token expiration gracefully in the frontend (e.g., auto-logout or token refresh).  
- Use the `/auth/refresh` endpoint to renew tokens without asking the user to log in again.
