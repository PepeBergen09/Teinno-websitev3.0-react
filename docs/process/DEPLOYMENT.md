# Teinno Website - Coolify Deployment Guide

This guide explains how to deploy the Teinno website to Coolify using Docker.

## Prerequisites

- Coolify instance running
- Git repository access
- Domain name (optional)

## Deployment Steps

### 1. Repository Setup

Ensure your repository contains:
- ✅ `Dockerfile` (optimized for production)
- ✅ `.dockerignore` (build optimization)
- ✅ `package.json` with build scripts
- ✅ All source code

### 2. Coolify Configuration

1. **Create New Project** in Coolify
2. **Add Application** → **Docker**
3. **Repository Settings:**
   - Repository URL: `your-git-repo-url`
   - Branch: `main` (or your deployment branch)
   - Build Pack: `Docker`

4. **Build Settings:**
   - Dockerfile Location: `./Dockerfile`
   - Build Context: `.`
   - Build Arguments: (none needed)

5. **Runtime Settings:**
   - Port: `80`
   - Health Check Path: `/health`
   - Health Check Port: `80`

### 3. Environment Variables

No environment variables are required for this static React application.

### 4. Domain Configuration

1. In Coolify, go to your application
2. Navigate to **Domains** tab
3. Add your domain name
4. Configure SSL (Let's Encrypt recommended)

### 5. Build Process

The Dockerfile uses a multi-stage build:

1. **Stage 1 (Builder):**
   - Uses Node.js 18 Alpine
   - Installs dependencies
   - Builds the React application with Vite

2. **Stage 2 (Production):**
   - Uses Nginx Alpine
   - Serves static files
   - Includes security headers
   - Handles SPA routing
   - Provides health check endpoint

## Features Included

### Performance Optimizations
- ✅ Gzip compression
- ✅ Static asset caching (1 year)
- ✅ HTML caching (1 hour)
- ✅ Multi-stage Docker build
- ✅ Optimized nginx configuration

### Security Features
- ✅ Security headers (XSS, CSRF, etc.)
- ✅ Content Security Policy
- ✅ Non-root container execution
- ✅ Minimal attack surface

### SPA Support
- ✅ Client-side routing support
- ✅ Fallback to index.html
- ✅ Proper cache headers for SPA

### Monitoring
- ✅ Health check endpoint (`/health`)
- ✅ Docker health checks
- ✅ Nginx access logs

## Local Testing

Test the Docker build locally before deploying:

```bash
# Build the image
docker build -t teinno-web .

# Run locally
docker run -p 3000:80 teinno-web

# Or use docker-compose
docker-compose up --build
```

Visit `http://localhost:3000` to test.

## Troubleshooting

### Build Issues
- Check that `npm run build` works locally
- Verify all dependencies are in `package.json`
- Check `.dockerignore` isn't excluding necessary files

### Runtime Issues
- Check health endpoint: `http://your-domain/health`
- Review Coolify logs for nginx errors
- Verify static files are being served correctly

### Performance Issues
- Monitor nginx access logs
- Check if gzip compression is working
- Verify static asset caching headers

## Production Checklist

Before deploying to production:

- [ ] Test build locally with Docker
- [ ] Verify all pages load correctly
- [ ] Test client-side routing
- [ ] Check health endpoint responds
- [ ] Verify security headers are present
- [ ] Test on mobile devices
- [ ] Configure domain and SSL
- [ ] Set up monitoring/alerts in Coolify

## Support

For deployment issues:
- Check Coolify documentation
- Review application logs in Coolify dashboard
- Test locally with the same Docker configuration

For application issues:
- Check browser console for errors
- Verify API endpoints are accessible
- Test different browsers and devices
