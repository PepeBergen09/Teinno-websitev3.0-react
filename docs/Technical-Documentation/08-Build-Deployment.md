# Build and Deployment

## Build Process

### Development Build

```bash
npm run dev
```

**Features**:
- Fast startup (< 1 second)
- Hot Module Replacement (HMR)
- Source maps for debugging
- Detailed error overlay
- Runs on port 5173

### Production Build

```bash
npm run build
```

**Process**:
1. TypeScript compilation (`tsc -b`)
2. Vite production build
3. Asset optimization
4. Code minification
5. CSS purging
6. Output to `dist/` directory

**Output Structure**:
```
dist/
├── assets/
│   ├── index-[hash].js      # Main JavaScript bundle
│   ├── index-[hash].css     # Optimized CSS
│   └── *.png                # Optimized images
├── index.html               # Entry HTML
└── favicon files
```

**Build Metrics**:
- Build time: ~2-3 seconds
- CSS: ~27 KB (~5.4 KB gzipped)
- JS: ~467 KB (~150 KB gzipped)
- Total: ~496 KB (~156 KB gzipped)

### Preview Production Build

```bash
npm run preview
```

Tests the production build locally on port 4173.

## Deployment Options

### Option 1: Coolify (Recommended)

**Platform**: Self-hosted PaaS

**Steps**:
1. Push code to Git repository
2. Connect repository to Coolify
3. Configure build settings:
   - Build command: `npm run build`
   - Dockerfile: `./Dockerfile`
   - Port: 80
4. Deploy

**Dockerfile**:
```dockerfile
# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Environment Variables**: None required (static site)

### Option 2: Vercel

**Platform**: Serverless platform

**Steps**:
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Follow prompts

**Configuration** (`vercel.json`):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Option 3: Netlify

**Platform**: Static hosting

**Steps**:
1. Build locally: `npm run build`
2. Drag & drop `dist/` folder to Netlify
3. Or configure continuous deployment

**Configuration** (`netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 4: GitHub Pages

**Platform**: Static hosting

**Steps**:
1. Build: `npm run build`
2. Install gh-pages: `npm i -D gh-pages`
3. Add script to `package.json`:
   ```json
   "deploy": "gh-pages -d dist"
   ```
4. Run: `npm run deploy`

## CI/CD Pipeline

### GitHub Actions Example

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test # When tests are added
        
      - name: Build
        run: npm run build
        
      - name: Deploy to production
        run: # Your deployment command
```

## Environment Configuration

### Environment Variables

**Development** (`.env.development`):
```bash
VITE_API_URL=http://localhost:3000
VITE_ENV=development
```

**Production** (`.env.production`):
```bash
VITE_API_URL=https://api.teinno.no
VITE_ENV=production
```

**Usage**:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Deployment Checklist

### Pre-Deployment
- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run build` - successful
- [ ] Test production build with `npm run preview`
- [ ] Verify all pages load correctly
- [ ] Test responsive design on multiple devices
- [ ] Check browser console for errors
- [ ] Verify meta tags and SEO
- [ ] Test form validation
- [ ] Check all external links (Calendly, LinkedIn)

### Post-Deployment
- [ ] Verify site is accessible
- [ ] Test all pages in production
- [ ] Check SSL certificate (HTTPS)
- [ ] Verify security headers
- [ ] Test performance (Lighthouse)
- [ ] Monitor error logs
- [ ] Verify analytics tracking (when added)

## Troubleshooting

### Build Failures

**Issue**: TypeScript errors
```bash
# Solution: Check tsconfig files
npm run build -- --mode development
```

**Issue**: Out of memory
```bash
# Solution: Increase Node memory
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

### Deployment Issues

**Issue**: 404 on page refresh (SPA routing)
```nginx
# Solution: Add to nginx.conf
location / {
  try_files $uri $uri/ /index.html;
}
```

**Issue**: Assets not loading
- Check base path in `vite.config.ts`
- Verify asset paths are relative
- Check CORS headers

### Performance Issues

**Issue**: Large bundle size
- Analyze with: `npm run build -- --analyze`
- Consider code splitting
- Lazy load heavy components

**Issue**: Slow initial load
- Enable compression (gzip/brotli)
- Use CDN for static assets
- Optimize images

## Monitoring

### Health Check

**Endpoint**: `/health` (if configured)

**Nginx Configuration**:
```nginx
location /health {
  return 200 "OK";
  add_header Content-Type text/plain;
}
```

### Error Tracking

**Future Integration**: Sentry or similar

```typescript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_DSN",
  environment: import.meta.env.MODE,
});
```

### Performance Monitoring

**Tools**:
- Google Lighthouse
- WebPageTest
- Chrome DevTools Performance tab

**Metrics to Track**:
- First Contentful Paint (FCP)
- Time to Interactive (TTI)
- Total Blocking Time (TBT)
- Cumulative Layout Shift (CLS)

## Rollback Strategy

### Quick Rollback
1. Revert Git commit
2. Redeploy previous version
3. Monitor for issues

### Zero-Downtime Deployment
- Use blue-green deployment
- Deploy to staging first
- Gradual traffic shifting

---

*Next: [Performance Optimization](./09-Performance-Optimization.md)*
