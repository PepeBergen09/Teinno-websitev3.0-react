# Setup and Installation

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher (comes with Node.js)
- **Git**: Latest version

### Verify Prerequisites

```bash
node --version  # Should be v18.0.0 or higher
npm --version   # Should be v9.0.0 or higher
git --version   # Any recent version
```

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/PepeBergen09/Teinno-websitev3.0-react.git
cd Teinno-websitev3.0-react
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies defined in `package.json`:
- React 19 and React DOM
- React Router v7
- TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- React Hook Form
- Development tools (ESLint, TypeScript, etc.)

### 3. Start Development Server

```bash
npm run dev
```

The development server will start at `http://localhost:5173` (or another port if 5173 is busy).

### 4. Verify Installation

Open your browser and navigate to `http://localhost:5173`. You should see the Teinno website homepage.

## Available Scripts

### Development

```bash
npm run dev
```
Starts the Vite development server with hot module replacement (HMR).
- **URL**: http://localhost:5173
- **Features**: Fast refresh, instant updates, detailed error overlay

### Build

```bash
npm run build
```
Creates an optimized production build in the `dist/` directory.
- Compiles TypeScript
- Bundles and minifies JavaScript
- Processes and optimizes CSS
- Optimizes assets

### Preview

```bash
npm run preview
```
Preview the production build locally before deployment.

### Lint

```bash
npm run lint
```
Runs ESLint to check code quality and catch potential issues.

## Environment Setup

### Editor Configuration

#### VS Code (Recommended)
Install these extensions for the best development experience:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

#### Settings
Add to your `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

### TypeScript Configuration

The project uses three TypeScript configuration files:

- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - Application-specific settings
- `tsconfig.node.json` - Node.js tooling configuration

Key settings:
- `verbatimModuleSyntax: true` - Requires explicit type-only imports
- `strict: true` - Enables all strict type-checking options
- `skipLibCheck: true` - Skips type checking of declaration files

## Project Structure After Installation

```
Teinno-websitev3.0-react/
├── node_modules/           # Installed dependencies (gitignored)
├── public/                 # Static assets
├── src/                    # Source code
├── dist/                   # Production build (created after build)
├── docs/                   # Documentation
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── eslint.config.js        # ESLint configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # Project overview
```

## Common Issues and Solutions

### Issue: Port Already in Use

**Problem**: Development server fails to start because port 5173 is already in use.

**Solution**: 
```bash
# Kill the process using the port
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

### Issue: Node Version Mismatch

**Problem**: Errors related to Node.js version.

**Solution**: Use Node Version Manager (nvm):
```bash
nvm install 18
nvm use 18
```

### Issue: Dependency Installation Fails

**Problem**: `npm install` fails with errors.

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: TypeScript Errors on Import

**Problem**: Error about `verbatimModuleSyntax` and type imports.

**Solution**: Use type-only imports for types:
```typescript
// ❌ Wrong
import { ReactNode } from 'react';

// ✅ Correct
import type { ReactNode } from 'react';
```

## Next Steps

After successful installation:

1. **Explore the Code**: Start with `src/App.tsx` and understand the routing
2. **Run the Development Server**: See changes in real-time
3. **Read Component Documentation**: Understand reusable components
4. **Check Styling Guide**: Learn about Tailwind CSS usage
5. **Review Language System**: Understand trilingual support

---

*Next: [Tech Stack](./03-Tech-Stack.md)*
