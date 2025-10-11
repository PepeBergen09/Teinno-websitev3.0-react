# Technical Documentation

## Overview
Technical documentation for Teinno Website v3.0 React application.

## Contents

1. [Architecture Overview](./architecture.md)
2. [Development Setup](./development-setup.md)
3. [API Documentation](./api-documentation.md)
4. [Database Schema](./database-schema.md)
5. [Security Guidelines](./security.md)
6. [Performance Optimization](./performance.md)
7. [Troubleshooting](./troubleshooting.md)

## Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: CSS Modules, Responsive Design
- **State Management**: React Context API
- **Internationalization**: Custom i18n implementation
- **Build Tool**: Vite
- **Package Manager**: npm
- **Deployment**: Plesk with Node.js

## Quick Links

- [Installation Guide](./development-setup.md#installation)
- [Build Process](./development-setup.md#build-process)
- [Environment Configuration](./development-setup.md#environment-setup)

# Architecture Overview

## System Architecture

### Frontend Architecture
```
src/
├── components/           # Reusable UI components
├── contexts/            # React Context providers
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── assets/             # Static assets
└── types/              # TypeScript type definitions
```

### Component Structure
- **PageWrapper**: Main layout wrapper with navigation
- **LanguageContext**: Internationalization management
- **Responsive Design**: Mobile-first approach

### Key Technologies

#### React 18
- Functional components with hooks
- Context API for state management
- Strict TypeScript implementation

#### Vite Build System
- Fast development server
- Optimized production builds
- Hot module replacement (HMR)

#### TypeScript Configuration
- Strict type checking enabled
- `verbatimModuleSyntax` for better module handling
- Path mapping for clean imports

### Data Flow
1. User interacts with UI components
2. Components communicate through Context API
3. Language switching updates global state
4. Responsive design adapts to screen sizes

### Performance Considerations
- Code splitting at route level
- Lazy loading of components
- Optimized asset bundling
- Minimal runtime dependencies