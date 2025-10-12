---
title: 'Deployment Guide'
description: 'Deploy your Ourganize application to production'
navigation:
  title: 'Deployment'
  icon: 'i-heroicons-cloud-arrow-up'
---

# Deployment Guide

This guide covers how to deploy your Ourganize application to various hosting platforms.

## Build for Production

Before deploying, you need to build your application for production:

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Preview the production build locally (optional)
npm run preview
```

## Deployment Platforms

### Vercel (Recommended)

Vercel provides excellent support for Nuxt applications with zero configuration.

#### Deploy with Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to configure your deployment.

#### Deploy with Git Integration

1. Push your code to GitHub, GitLab, or Bitbucket
2. Connect your repository to Vercel
3. Vercel will automatically deploy on every push

#### Environment Variables

Set environment variables in your Vercel dashboard:

```bash
DATABASE_URL=your-production-database-url
NEXTAUTH_SECRET=your-production-secret
API_KEY=your-production-api-key
```

### Netlify

Netlify offers great support for static sites and serverless functions.

#### Deploy with Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod --dir=.output/public
   ```

#### Deploy with Git Integration

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.output/public`

### DigitalOcean App Platform

Deploy to DigitalOcean's managed platform.

#### App Spec Configuration

Create an `app.yaml` file:

```yaml
name: ourganize
services:
- name: web
  source_dir: /
  github:
    repo: your-username/ourganize
    branch: main
  run_command: npm start
  build_command: npm run build
  environment_slug: node-js
  instance_count: 1
  instance_size_slug: basic-xxs
  envs:
  - key: DATABASE_URL
    value: ${DATABASE_URL}
  - key: NEXTAUTH_SECRET
    value: ${NEXTAUTH_SECRET}
```

### Docker Deployment

Deploy using Docker containers.

#### Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
```

#### Docker Compose

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
    depends_on:
      - db
  
  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=ourganize
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

#### Deploy Commands

```bash
# Build the image
docker build -t ourganize .

# Run the container
docker run -p 3000:3000 ourganize

# Or use Docker Compose
docker-compose up -d
```

### AWS (Amazon Web Services)

Deploy to AWS using various services.

#### AWS Amplify

1. Connect your repository to AWS Amplify
2. Set build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .output/public
       files:
         - '**/*'
   ```

#### AWS ECS (Elastic Container Service)

1. Push your Docker image to ECR
2. Create an ECS task definition
3. Set up an ECS service
4. Configure load balancer and auto-scaling

### Self-Hosted (VPS)

Deploy to your own virtual private server.

#### Prerequisites

- Ubuntu 20.04+ or similar Linux distribution
- Node.js 18+ installed
- Nginx or Apache web server
- PM2 for process management

#### Setup Steps

1. **Install dependencies on your server:**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PM2
   sudo npm install -g pm2
   
   # Install Nginx
   sudo apt install nginx -y
   ```

2. **Deploy your application:**
   ```bash
   # Clone your repository
   git clone https://github.com/your-username/ourganize.git
   cd ourganize
   
   # Install dependencies
   npm install
   
   # Build the application
   npm run build
   
   # Start with PM2
   pm2 start npm --name "ourganize" -- start
   pm2 save
   pm2 startup
   ```

3. **Configure Nginx:**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
   
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **Set up SSL with Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx -y
   sudo certbot --nginx -d your-domain.com
   ```

## Environment Configuration

### Production Environment Variables

Set the following variables for production:

```bash
# Application
NODE_ENV=production
NUXT_APP_BASE_URL=https://your-domain.com

# Database
DATABASE_URL=postgresql://user:password@host:port/database

# Authentication
NEXTAUTH_SECRET=your-super-secret-key-here
NEXTAUTH_URL=https://your-domain.com

# API Keys
API_KEY=your-production-api-key
STRIPE_SECRET_KEY=your-stripe-secret-key

# Email
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
```

### Security Considerations

- Use strong, unique secrets for all keys
- Enable HTTPS/SSL certificates
- Set up proper CORS policies
- Configure rate limiting
- Use environment variables for sensitive data
- Regular security updates

## Performance Optimization

### Caching

Configure caching for better performance:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    storage: {
      redis: {
        driver: 'redis',
        /* redis connector options */
      }
    }
  },
  
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    
    // Product page generated on-demand, revalidates in background
    '/api/**': { isr: true },
    
    // Admin dashboard renders only on client-side
    '/admin/**': { ssr: false },
    
    // Static pages cached for 1 hour
    '/docs/**': { headers: { 'cache-control': 's-maxage=3600' } }
  }
})
```

### CDN Configuration

Set up a CDN for static assets:

1. **Cloudflare** - Easy setup with automatic optimization
2. **AWS CloudFront** - Integrates well with AWS services
3. **Vercel Edge Network** - Built-in for Vercel deployments

## Monitoring & Analytics

### Application Monitoring

Set up monitoring for production:

```typescript
// plugins/monitoring.client.ts
export default defineNuxtPlugin(() => {
  // Error tracking
  if (process.client) {
    window.addEventListener('error', (event) => {
      // Send error to monitoring service
      console.error('Client error:', event.error)
    })
  }
})
```

### Performance Monitoring

Monitor your application performance:

- **Google Analytics** for user analytics
- **Sentry** for error tracking
- **New Relic** for application performance
- **Uptime Robot** for uptime monitoring

## Deployment Checklist

Before going live, ensure you've completed:

- [ ] Environment variables configured
- [ ] Database migrations run
- [ ] SSL certificate installed
- [ ] Domain DNS configured
- [ ] Monitoring set up
- [ ] Backup strategy implemented
- [ ] Security headers configured
- [ ] Performance optimization applied
- [ ] Error tracking enabled
- [ ] Documentation updated

## Troubleshooting

### Common Issues

**Build Errors:**
```bash
# Clear build cache
rm -rf .nuxt .output
npm run build
```

**Memory Issues:**
```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

**Permission Issues on VPS:**
```bash
# Fix file permissions
sudo chown -R $USER:$USER /path/to/your/app
```

---

Need help with deployment? Check our [troubleshooting guide](/guide/troubleshooting) or join our [Discord community](https://discord.gg/yourserver) →
