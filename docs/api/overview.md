---
id: overview
title: API Overview
---

# Taskify API Overview

The Taskify API allows developers to integrate Taskify features into other applications and automate workflows.  
All endpoints follow the **RESTful** convention and return responses in **JSON** format.

### Base URL
https://api.taskify.app/v1

### Example Endpoints
| Endpoint | Method | Description |
|-----------|---------|-------------|
| `/tasks` | GET | Retrieve a list of tasks |
| `/tasks` | POST | Create a new task |
| `/tasks/{id}` | PUT | Update a task by ID |
| `/tasks/{id}` | DELETE | Delete a task by ID |

You’ll need an access token to authenticate API requests, as explained in the next section.
