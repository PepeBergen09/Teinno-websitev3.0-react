# Coolify Deployment Guide

This guide provides step-by-step instructions for deploying the Teinno Website v3.0 React application on Coolify.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Coolify Setup](#coolify-setup)
3. [Environment Configuration](#environment-configuration)
4. [Deployment Configuration](#deployment-configuration)
5. [Domain Configuration](#domain-configuration)
6. [Build and Deployment](#build-and-deployment)
7. [Monitoring and Troubleshooting](#monitoring-and-troubleshooting)
8. [Best Practices](#best-practices)

## Prerequisites

### Requirements
- Coolify instance (v4.0 or higher)
- Docker support on your server
- Domain name configured
- SSL certificate (Let's Encrypt recommended)
- Git repository access

### Server Resources
- **Minimum**: 1 vCPU, 1GB RAM, 10GB storage
- **Recommended**: 2 vCPU, 2GB RAM, 20GB storage
- **Network**: Ports 80, 443 open for web traffic

## Coolify Setup

### 1. Install Coolify (if not already installed)

```bash
# Install Coolify on your server
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

### 2. Access Coolify Dashboard
- Navigate to your Coolify dashboard
- Complete initial setup if this is a new installation
- Ensure Docker is running and Coolify is operational

## Environment Configuration

### 1. Prepare Environment Files

Create environment-specific configurations in your repository:

```bash
# Repository structure should include:
.env.example          # Template file
.env.production      # Production variables
.env.test           # Test environment variables
```

### 2. Environment Variables for Production

Configure the following environment variables in Coolify:

#### Application Settings
```bash
VITE_APP_NAME=Teinno Website
VITE_APP_VERSION=3.0.0
VITE_APP_ENV=production
VITE_APP_URL=https://yourdomain.com
VITE_APP_DOMAIN=yourdomain.com
```

#### API Configuration
```bash
VITE_API_BASE_URL=https://api.yourdomain.com/api
VITE_API_TIMEOUT=5000
```

#### Feature Flags
```bash
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DEBUG=false
VITE_ENABLE_HOT_RELOAD=false
```

#### External Services
```bash
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_CONTACT_EMAIL=info@teinno.com
VITE_SUPPORT_EMAIL=support@teinno.com
```

#### Social Media & Contact
```bash
VITE_LINKEDIN_URL=https://linkedin.com/company/teinno
VITE_COMPANY_PHONE=+1234567890
VITE_COMPANY_ADDRESS=Your Business Address
```

## Deployment Configuration

### 1. Create New Application in Coolify

1. **Login to Coolify Dashboard**
2. **Create New Resource** → **Application**
3. **Choose Git Repository** → Connect your repository
4. **Select Branch**: `main` (or your production branch)

### 2. Application Settings

#### Basic Configuration
```yaml
Application Name: teinno-website-v3
Port: 80
Build Pack: Static Site (or Node.js)
```

#### Build Configuration
```yaml
Build Command: npm run build
Build Directory: dist
Install Command: npm ci
Node Version: 18 (or latest LTS)
```

### 3. Advanced Settings

#### Health Check
```yaml
Health Check Path: /
Health Check Port: 80
Health Check Protocol: http
```

#### Resource Limits
```yaml
Memory Limit: 512MB
CPU Limit: 0.5
```

## Docker Configuration

### 1. Create Dockerfile (if not using buildpack)

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine AS production

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
```

### 2. Create nginx.conf

```nginx
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        # Security headers
        add_header X-Frame-Options "SAMEORIGIN";
        add_header X-XSS-Protection "1; mode=block";
        add_header X-Content-Type-Options "nosniff";

        # Cache static assets
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }

        # Handle client-side routing
        location / {
            try_files $uri $uri/ /index.html;
        }

        # Health check
        location /health {
            access_log off;
            return 200 "healthy\n";
            add_header Content-Type text/plain;
        }
    }
}
```

## Domain Configuration

### 1. DNS Settings

Configure your DNS to point to your Coolify server:

```
Type: A
Name: @ (or www)
Value: YOUR_SERVER_IP
TTL: 300
```

### 2. SSL Certificate

1. **In Coolify Dashboard**:
   - Go to your application settings
   - Navigate to "Domains" section
   - Add your domain
   - Enable "Generate SSL Certificate"
   - Choose "Let's Encrypt"

### 3. Domain Redirection (Optional)

Set up www to non-www redirection:
```
www.yourdomain.com → yourdomain.com
```

## Build and Deployment

### 1. Initial Deployment

1. **Verify Configuration**:
   - Check all environment variables
   - Verify build commands
   - Confirm resource allocation

2. **Deploy**:
   - Click "Deploy" in Coolify dashboard
   - Monitor build logs
   - Check deployment status

### 2. Deployment Pipeline

#### Automatic Deployment
```yaml
Trigger: Git Push to main branch
Build: Automatic
Deploy: Automatic (after successful build)
Rollback: Manual or automatic on failure
```

#### Manual Deployment
- Use Coolify dashboard
- Trigger deployment manually
- Monitor progress in real-time

### 3. Build Process Monitoring

Monitor the build process:
```bash
# Build stages you'll see:
1. Cloning repository
2. Installing dependencies (npm ci)
3. Building application (npm run build)
4. Creating Docker image
5. Deploying container
6. Health check validation
```

## Monitoring and Troubleshooting

### 1. Application Monitoring

#### Health Checks
- **Endpoint**: `/health`
- **Expected Response**: 200 OK
- **Check Interval**: 30 seconds

#### Resource Monitoring
- CPU usage
- Memory consumption
- Disk space
- Network traffic

### 2. Log Management

#### Application Logs
```bash
# In Coolify dashboard:
- Go to application logs
- Filter by date/severity
- Export logs if needed
```

#### Build Logs
```bash
# Common build issues:
- Dependency installation failures
- TypeScript compilation errors
- Environment variable issues
- Resource limitations
```

### 3. Common Issues and Solutions

#### Build Failures
```bash
# Issue: npm install fails
Solution: Check package.json and node version compatibility

# Issue: TypeScript errors
Solution: Run type-check locally first: npm run type-check

# Issue: Environment variables not loading
Solution: Verify variable names start with VITE_
```

#### Runtime Issues
```bash
# Issue: 404 errors on page refresh
Solution: Check nginx configuration for SPA routing

# Issue: Slow loading
Solution: Verify gzip compression and caching headers

# Issue: SSL certificate issues
Solution: Regenerate Let's Encrypt certificate
```

### 4. Performance Optimization

#### Build Optimization
```bash
# Enable production optimizations:
- Minification
- Tree shaking
- Code splitting
- Asset optimization
```

#### Runtime Optimization
```bash
# Server optimizations:
- Enable gzip compression
- Set appropriate cache headers
- Use CDN for static assets
- Optimize images
```

## Best Practices

### 1. Security

#### Environment Variables
- Never commit sensitive data to repository
- Use Coolify's environment variable management
- Rotate secrets regularly
- Use different values for different environments

#### SSL/TLS
- Always use HTTPS in production
- Enable HSTS headers
- Use strong cipher suites
- Monitor certificate expiration

### 2. Deployment Strategy

#### Blue-Green Deployment
```yaml
1. Deploy new version to staging slot
2. Test functionality
3. Switch traffic to new version
4. Keep old version for quick rollback
```

#### Rollback Strategy
```yaml
1. Monitor application after deployment
2. Set up alerts for errors
3. Have rollback procedure ready
4. Test rollback process regularly
```

### 3. Backup and Recovery

#### Application Backup
- Source code is in Git repository
- Environment variables backed up
- Build artifacts stored securely

#### Database Backup (if applicable)
- Regular automated backups
- Test restore procedures
- Off-site backup storage

### 4. Monitoring and Alerting

#### Set Up Alerts
```yaml
- Application downtime
- High error rates
- Resource exhaustion
- SSL certificate expiration
```

#### Performance Monitoring
```yaml
- Page load times
- Core Web Vitals
- User experience metrics
- Conversion tracking
```

## Continuous Integration/Continuous Deployment (CI/CD)

### 1. Git Workflow
```bash
# Recommended branch strategy:
main branch → Production deployment
develop branch → Staging deployment
feature/* → Feature testing
```

### 2. Automated Testing
```bash
# Add to your workflow:
1. Lint checking
2. Type checking
3. Unit tests
4. Build verification
5. Security scanning
```

### 3. Deployment Hooks
```yaml
# Pre-deployment:
- Run tests
- Check dependencies
- Validate environment

# Post-deployment:
- Health checks
- Performance testing
- Monitoring setup
```

## Support and Maintenance

### 1. Regular Maintenance
- Update dependencies monthly
- Monitor security vulnerabilities
- Review performance metrics
- Update documentation

### 2. Scaling Considerations
- Monitor resource usage
- Plan for traffic growth
- Consider CDN implementation
- Evaluate caching strategies

### 3. Disaster Recovery
- Document recovery procedures
- Test backup restoration
- Maintain emergency contacts
- Keep infrastructure documentation updated

## Conclusion

This deployment guide provides a comprehensive approach to deploying the Teinno Website v3.0 on Coolify. Following these guidelines will ensure a secure, performant, and maintainable deployment.

For additional support:
- Check Coolify documentation
- Review application logs
- Contact development team
- Monitor community forums

Remember to keep this documentation updated as your deployment evolves and new features are added.