---
title: 'Getting Started'
description: 'Learn how to get started with Ourganize'
navigation:
  title: 'Getting Started'
  icon: 'i-heroicons-rocket-launch'
---

# Getting Started

Welcome to Ourganize! This guide will help you get up and running with the platform in just a few minutes.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v18 or later)
- **npm** or **yarn** package manager
- **Git** for version control

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourorg/ourganize.git
cd ourganize
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```bash
# Database
DATABASE_URL="your-database-url"

# Authentication
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# API Keys
API_KEY="your-api-key"
```

### 4. Start Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

Your application will be available at `http://localhost:3000` 🎉

## Project Structure

Here's an overview of the project structure:

```
ourganize/
├── app/                    # Nuxt app directory
│   ├── components/         # Vue components
│   ├── composables/        # Vue composables
│   ├── layouts/           # Page layouts
│   ├── pages/             # Application pages
│   └── plugins/           # Nuxt plugins
├── content/               # Documentation content
├── public/                # Static assets
├── server/                # Server-side code
└── nuxt.config.ts         # Nuxt configuration
```

## Configuration

### Basic Configuration

The main configuration file is `nuxt.config.ts`. Here's a basic setup:

```typescript
export default defineNuxtConfig({
  // App configuration
  app: {
    head: {
      title: 'Ourganize',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },

  // Modules
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@pinia/nuxt'
  ],

  // Content configuration
  content: {
    highlight: {
      theme: 'github-dark'
    }
  }
})
```

### Styling Configuration

Ourganize uses Tailwind CSS for styling. The configuration is in `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    './app/**/*.{js,vue,ts}',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a'
        }
      }
    }
  }
}
```

## Next Steps

Now that you have Ourganize running locally, here are some recommended next steps:

::alert{type="success"}
**Congratulations!** You've successfully set up Ourganize locally.
::

### Learn the Basics

1. **[Components Overview](/components/overview)** - Explore available UI components
2. **[API Reference](/api/overview)** - Learn about the API endpoints
3. **[Deployment Guide](/guide/deployment)** - Deploy your application

### Build Your First Feature

1. Create a new page in `app/pages/`
2. Add your components to `app/components/`
3. Use composables for state management
4. Style with Tailwind CSS classes

## Need Help?

If you run into any issues:

- Check our [FAQ section](/guide/faq)
- Join our [Discord community](https://discord.gg/yourserver)
- Open an issue on [GitHub](https://github.com/yourorg/ourganize/issues)

---

Ready for the next step? Learn about [Components](/docs/components/overview) →
