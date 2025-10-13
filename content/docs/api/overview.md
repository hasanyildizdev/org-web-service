---
title: 'API Overview'
description: 'Comprehensive API reference for the Ourganize digital transformation platform'
navigation:
  title: 'API Overview'
  icon: 'i-heroicons-code-bracket'
---

# Ourganize API Overview

The Ourganize API provides comprehensive programmatic access to all platform modules including PMS, CRM, ERP, HR, IMS, and Social Collaboration features. Built with modern REST principles and enhanced with AI-powered capabilities.

## Base URL

```
https://api.ourganize.com/v1
```

For local development:
```
http://localhost:3000/api
```

## Platform Architecture

The API is organized around the core business modules:

::card-group
  ::card
  ---
  title: Project Management API
  icon: i-heroicons-clipboard-document-list
  ---
  `/api/v1/pms/` - Projects, tasks, workflows, time tracking, and team management
  ::

  ::card
  ---
  title: CRM API
  icon: i-heroicons-user-group
  ---
  `/api/v1/crm/` - Contacts, deals, pipelines, customer journeys, and sales automation
  ::

  ::card
  ---
  title: ERP API
  icon: i-heroicons-building-office
  ---
  `/api/v1/erp/` - Finance, inventory, procurement, and business operations
  ::

  ::card
  ---
  title: HR API
  icon: i-heroicons-identification
  ---
  `/api/v1/hr/` - Employee management, performance tracking, and auto-CV generation
  ::
::

## Authentication & Security

All API requests require authentication using JWT tokens or API keys with role-based access control.

### API Key Authentication

Include your API key in the Authorization header:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.ourganize.com/v1/projects
```

### JWT Authentication

For user-specific requests, use JWT tokens:

```bash
curl -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  https://api.ourganize.com/v1/user/profile
```

## Rate Limiting

API requests are rate limited to ensure fair usage:

- **Free tier**: 1,000 requests per hour
- **Pro tier**: 10,000 requests per hour
- **Enterprise**: Unlimited

Rate limit headers are included in all responses:

```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
```

## Response Format

All API responses follow a consistent format:

### Success Response

```json
{
  "success": true,
  "data": {
    // Response data
  },
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request data is invalid",
    "details": [
      {
        "field": "email",
        "message": "Email is required"
      }
    ]
  }
}
```

## Core Resources

### Projects

Manage projects and their settings.

- **GET** `/projects` - List all projects
- **POST** `/projects` - Create a new project
- **GET** `/projects/:id` - Get project details
- **PUT** `/projects/:id` - Update project
- **DELETE** `/projects/:id` - Delete project

### Tasks

Handle task management within projects.

- **GET** `/projects/:id/tasks` - List project tasks
- **POST** `/projects/:id/tasks` - Create a new task
- **GET** `/tasks/:id` - Get task details
- **PUT** `/tasks/:id` - Update task
- **DELETE** `/tasks/:id` - Delete task

### Users

User management and profiles.

- **GET** `/users` - List users (admin only)
- **GET** `/user/profile` - Get current user profile
- **PUT** `/user/profile` - Update user profile
- **POST** `/users/invite` - Invite new user

## Example Requests

### Create a Project

```bash
curl -X POST \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "My New Project",
    "description": "A sample project",
    "settings": {
      "isPublic": false,
      "allowComments": true
    }
  }' \
  https://api.ourganize.com/v1/projects
```

### List Tasks

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.ourganize.com/v1/projects/123/tasks?status=active&limit=10"
```

### Update Task Status

```bash
curl -X PUT \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "status": "completed",
    "completedAt": "2024-01-15T10:30:00Z"
  }' \
  https://api.ourganize.com/v1/tasks/456
```

## Error Codes

| Code | Description |
|------|-------------|
| `400` | Bad Request - Invalid request data |
| `401` | Unauthorized - Invalid or missing authentication |
| `403` | Forbidden - Insufficient permissions |
| `404` | Not Found - Resource doesn't exist |
| `422` | Unprocessable Entity - Validation failed |
| `429` | Too Many Requests - Rate limit exceeded |
| `500` | Internal Server Error - Server error |

## SDKs & Libraries

Official SDKs are available for popular programming languages:

- **JavaScript/TypeScript**: `npm install @ourganize/sdk`
- **Python**: `pip install ourganize-sdk`
- **PHP**: `composer require ourganize/sdk`
- **Go**: `go get github.com/ourganize/sdk-go`

### JavaScript SDK Example

```javascript
import { OurganizeClient } from '@ourganize/sdk'

const client = new OurganizeClient({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'https://api.ourganize.com/v1'
})

// Create a project
const project = await client.projects.create({
  name: 'My Project',
  description: 'A new project'
})

// List tasks
const tasks = await client.tasks.list(project.id, {
  status: 'active',
  limit: 10
})
```

## Webhooks

Set up webhooks to receive real-time notifications about events in your account.

### Supported Events

- `project.created`
- `project.updated`
- `task.created`
- `task.updated`
- `task.completed`
- `user.invited`

### Webhook Configuration

```json
{
  "url": "https://your-app.com/webhooks/ourganize",
  "events": ["task.completed", "project.updated"],
  "secret": "your-webhook-secret"
}
```

---

Need more details? Check out the [detailed API reference](/api/reference) →
