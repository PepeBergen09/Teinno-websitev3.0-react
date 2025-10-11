# Tech Stack

## Overview

The Teinno website is built with modern web technologies focused on performance, developer experience, and maintainability.

## Core Technologies

### React 18
- **Purpose**: UI library for building component-based interfaces
- **Version**: 19.1.1
- **Why React**: 
  - Component reusability
  - Virtual DOM for performance
  - Large ecosystem and community
  - Excellent TypeScript support
  - Concurrent rendering features

**Key Features Used**:
- Functional components with hooks
- Context API for state management
- React Router for navigation
- Suspense for code splitting (future)

### TypeScript
- **Purpose**: Type-safe JavaScript
- **Version**: ~5.9.3
- **Why TypeScript**:
  - Catch errors at compile time
  - Better IDE support and autocomplete
  - Self-documenting code
  - Refactoring confidence
  - Better team collaboration

**Configuration Highlights**:
```typescript
{
  "strict": true,
  "verbatimModuleSyntax": true,
  "noUncheckedIndexedAccess": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true
}
```

### Vite
- **Purpose**: Build tool and development server
- **Version**: 7.1.7
- **Why Vite**:
  - Lightning-fast cold starts
  - Instant hot module replacement (HMR)
  - Optimized production builds
  - Native ES modules support
  - Simple configuration

**Features**:
- Development server with HMR
- Production build optimization
- Asset handling (images, fonts, etc.)
- Plugin ecosystem

## UI and Styling

### Tailwind CSS v4
- **Purpose**: Utility-first CSS framework
- **Version**: 4.1.14
- **Why Tailwind**:
  - Rapid development
  - Consistent design system
  - Small production bundle (unused styles purged)
  - Responsive design utilities
  - Customizable via configuration

**Custom Theme**:
```css
@theme {
  --color-primary: #1e40af;
  --color-secondary: #3b82f6;
  /* ... more custom values */
}
```

### Framer Motion
- **Purpose**: Animation library
- **Version**: 12.23.22
- **Why Framer Motion**:
  - Declarative animations
  - Smooth, performant animations
  - Advanced features (gestures, variants)
  - React-first API

**Used For**:
- Page transitions
- Element entrance animations
- Interactive hover effects
- Mobile menu animations

## Routing and Navigation

### React Router
- **Purpose**: Client-side routing
- **Version**: 7.9.3
- **Why React Router**:
  - Industry standard for React routing
  - Declarative routing
  - Nested routes support
  - Dynamic route matching
  - Browser history management

**Routes**:
- `/` - Home
- `/services` - Services
- `/projects` - Projects
- `/about` - About
- `/contact` - Contact

## Form Handling

### React Hook Form
- **Purpose**: Form state management and validation
- **Version**: 7.64.0
- **Why React Hook Form**:
  - Minimal re-renders
  - Simple API
  - Built-in validation
  - TypeScript support
  - Small bundle size

**Features Used**:
- Form state management
- Field validation
- Error handling
- Form submission

## Development Tools

### ESLint
- **Purpose**: JavaScript/TypeScript linter
- **Version**: 9.36.0
- **Configuration**:
  - React hooks rules
  - React refresh rules
  - TypeScript ESLint rules

### PostCSS
- **Purpose**: CSS processing
- **Version**: 8.5.6
- **Plugins**:
  - Tailwind CSS
  - Autoprefixer

### Autoprefixer
- **Purpose**: Add vendor prefixes automatically
- **Version**: 10.4.21
- **Target Browsers**: Last 2 versions of major browsers

## Build Output

### Production Build Size
```
CSS:  ~27 KB (~5.4 KB gzipped)
JS:   ~467 KB (~150 KB gzipped)
HTML: ~2.2 KB (~0.8 KB gzipped)
──────────────────────────────
Total: ~496 KB (~156 KB gzipped)
```

### Performance Targets
- **Time to Interactive**: < 3 seconds on 3G
- **First Contentful Paint**: < 1.5 seconds
- **Total Bundle Size**: < 500 KB
- **Gzipped Size**: < 160 KB

## Deployment Stack

### Containerization
- **Docker**: Multi-stage build for optimized images
- **Base Image**: node:18-alpine (build), nginx:alpine (production)

### Web Server
- **Nginx**: Serves static files in production
- **Configuration**: 
  - Gzip compression
  - Security headers
  - SPA fallback routing
  - Health check endpoint

### Hosting Options
- **Coolify**: Self-hosted PaaS (primary)
- **Vercel**: Serverless platform (alternative)
- **Netlify**: Static hosting (alternative)

## Browser Support Matrix

| Browser | Version | Support Level |
|---------|---------|---------------|
| Chrome | Latest 2 | ✅ Full |
| Edge | Latest 2 | ✅ Full |
| Firefox | Latest 2 | ✅ Full |
| Safari | Latest 2 | ✅ Full |
| iOS Safari | Latest 2 | ✅ Full |
| Chrome Android | Latest | ✅ Full |
| IE11 | - | ❌ Not Supported |

## Dependencies Overview

### Production Dependencies
```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router-dom": "^7.9.3",
  "framer-motion": "^12.23.22",
  "react-hook-form": "^7.64.0"
}
```

### Development Dependencies
```json
{
  "vite": "^7.1.7",
  "typescript": "~5.9.3",
  "eslint": "^9.36.0",
  "tailwindcss": "^4.1.14",
  "@vitejs/plugin-react": "^5.0.4",
  // ... more dev dependencies
}
```

## Third-Party Services

### Calendly
- **Purpose**: Meeting scheduling
- **Integration**: Direct links to booking page
- **URL**: https://calendly.com/pepe-martinez-teinno

### External Links
- **LinkedIn**: Company profile
- **Email**: Contact form integration (future: backend service)

## Future Technology Considerations

### Planned Additions
- **Backend API**: Node.js/Express or serverless functions
- **Database**: For storing contact form submissions
- **CMS**: Headless CMS for content management
- **Analytics**: Google Analytics or privacy-focused alternative
- **Monitoring**: Error tracking (e.g., Sentry)
- **Testing**: Jest + React Testing Library

### Under Consideration
- **i18n Library**: For more advanced translation features
- **State Management**: Redux/Zustand if complexity increases
- **GraphQL**: If complex data fetching is needed

---

*Next: [API Reference](./04-API-Reference.md)*
