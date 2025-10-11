# Architecture Overview

## System Architecture

The Teinno website is a modern single-page application (SPA) built with React and TypeScript, following a component-based architecture.

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     Client Browser                       │
│  ┌───────────────────────────────────────────────────┐  │
│  │              React Application                    │  │
│  │  ┌────────────────────────────────────────────┐  │  │
│  │  │          Router (React Router)             │  │  │
│  │  └────────────────────────────────────────────┘  │  │
│  │  ┌────────────────────────────────────────────┐  │  │
│  │  │         Context Providers                  │  │  │
│  │  │      (Language, Theme, etc.)               │  │  │
│  │  └────────────────────────────────────────────┘  │  │
│  │  ┌────────────────────────────────────────────┐  │  │
│  │  │            Page Components                 │  │  │
│  │  │  (Home, Services, Projects, About, etc.)   │  │  │
│  │  └────────────────────────────────────────────┘  │  │
│  │  ┌────────────────────────────────────────────┐  │  │
│  │  │         Reusable Components                │  │  │
│  │  │  (Header, Footer, SEO, Forms, etc.)        │  │  │
│  │  └────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                    Static Assets                         │
│           (Images, Fonts, Favicon, etc.)                 │
└─────────────────────────────────────────────────────────┘
```

## Directory Structure

```
/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Footer component
│   │   ├── Layout.tsx      # Main layout wrapper
│   │   ├── LanguageToggle.tsx  # Language switcher
│   │   ├── SEO.tsx         # SEO meta tags component
│   │   └── PageWrapper.tsx # Page wrapper with animations
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Landing page
│   │   ├── Services.tsx    # Services listing
│   │   ├── Projects.tsx    # Project showcases
│   │   ├── About.tsx       # About page
│   │   └── Contact.tsx     # Contact form
│   ├── contexts/           # React contexts
│   │   └── LanguageContext.tsx  # Multi-language state
│   ├── types/              # TypeScript types
│   │   └── language.ts     # Language types and translations
│   ├── hooks/              # Custom React hooks
│   ├── assets/             # Static assets
│   ├── App.tsx             # Root component with routing
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles and Tailwind config
├── public/                 # Static assets served as-is
├── docs/                   # Documentation
└── dist/                   # Production build output
```

## Component Hierarchy

```
App
├── LanguageProvider
│   └── Router
│       └── Layout
│           ├── SEO (per page)
│           ├── Header
│           │   └── LanguageToggle
│           ├── PageWrapper
│           │   └── [Page Component]
│           │       └── [Page-specific components]
│           └── Footer
```

## Data Flow

### Language Management
1. `LanguageContext` provides current language state
2. Components consume context via `useLanguage` hook
3. All text content comes from typed translations in `language.ts`
4. Language toggle updates context, triggering re-render

### Routing
1. React Router manages client-side navigation
2. Routes defined in `App.tsx`
3. SEO component updates meta tags per route
4. Smooth transitions via Framer Motion

### Form Handling
1. React Hook Form manages form state
2. Validation rules defined per field
3. Form submission handled with error states
4. Integration points for backend services (future)

## Key Design Patterns

### Context Pattern
- Used for global state (language)
- Provides type-safe access via custom hooks
- Minimal re-renders through proper context structure

### Component Composition
- Small, focused components
- Props-based customization
- Reusable across pages

### Type Safety
- Strict TypeScript configuration
- Type-only imports where required
- Comprehensive type definitions

## External Dependencies

### Core
- React 18+ (UI library)
- React DOM (rendering)
- React Router v7 (routing)

### UI & Styling
- Tailwind CSS v4 (utility-first CSS)
- Framer Motion (animations)

### Forms
- React Hook Form (form state management)

### Build & Dev Tools
- Vite (build tool, dev server)
- TypeScript (type checking)
- ESLint (linting)

## Performance Considerations

### Code Splitting
- Lazy loading for route-based code splitting
- Dynamic imports for heavy components

### Bundle Size
- Tree-shaking enabled
- Production builds minified
- CSS purged of unused styles

### Runtime Performance
- Virtual DOM for efficient updates
- Memoization where appropriate
- Optimized re-renders through proper state design

## Security Features

### Type Safety
- TypeScript prevents runtime type errors
- Strict mode enabled

### Content Security
- No inline scripts in production
- Proper escaping of user content
- Secure headers in production deployment

## Deployment Architecture

```
Developer
    │
    ▼
Git Repository (GitHub)
    │
    ▼
CI/CD Pipeline (Coolify/Manual)
    │
    ├─► Build (npm run build)
    ├─► Run Tests (future)
    └─► Deploy to Production
            │
            ▼
    Static File Server (Nginx)
            │
            ▼
        End Users
```

## Browser Support

- **Chrome/Edge**: Latest versions
- **Firefox**: Latest versions  
- **Safari**: Latest versions
- **Mobile**: iOS Safari, Chrome Android

---

*Next: [Setup and Installation](./02-Setup-Installation.md)*
