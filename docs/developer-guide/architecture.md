---
id: authentication
title: Authentication
---

# API Authentication

Taskify API uses **Bearer Token Authentication** to secure every request.

### Obtain an Access Token
1. Log in through the `/auth/login` endpoint.  
2. The response will include an access token in JSON format.

Example response:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR..."
}
