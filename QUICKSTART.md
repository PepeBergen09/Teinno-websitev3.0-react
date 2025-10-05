# Quick Start Guide

## Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the website.

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Overview

### Pages (5)
1. **Home** (`/`) - Hero section with CTAs and feature highlights
2. **Services** (`/services`) - Service offerings with icons and descriptions
3. **Projects** (`/projects`) - Portfolio of completed projects
4. **About** (`/about`) - Company mission, values, and team
5. **Contact** (`/contact`) - Contact form with company information

### Key Features

✅ **Trilingual Support** - Switch between English, Spanish, and Norwegian using the header toggle

✅ **Responsive Design** - Mobile-first approach with breakpoints at 768px and 1024px

✅ **Animations** - Smooth transitions using Framer Motion on:
   - Page elements (fade in, slide up)
   - Navigation active state
   - Buttons (hover, tap)
   - Mobile menu

✅ **Form Handling** - Contact form with React Hook Form validation

✅ **SEO Optimized** - Meta tags, semantic HTML, and Open Graph tags

### Design System

**Colors:**
- Primary: `#1e40af` (blue-700)
- Secondary: `#3b82f6` (blue-500)
- Neutral Dark: `#1f2937` (gray-800)
- Neutral Medium: `#6b7280` (gray-500)
- Neutral Light: `#f9fafb` (gray-50)

**Typography:**
- Font: Inter from Google Fonts
- Base size: 16px
- Weights: 400, 500, 600, 700

### Component Structure

```
Layout (Header + Footer)
  └── Header
      ├── Logo
      ├── Navigation (Desktop + Mobile)
      └── LanguageToggle
  └── Page Content
  └── Footer
```

### Language Context

The language system is managed through React Context:
- Current language state
- Translation object (`t`)
- Language setter function

Access it in any component:
```tsx
import { useLanguage } from '../contexts/LanguageContext';

const MyComponent = () => {
  const { language, setLanguage, t } = useLanguage();
  return <h1>{t.nav.home}</h1>;
};
```

## Customization

### Adding New Translations

Edit `src/types/language.ts` to add new translation keys:

```typescript
export interface Translation {
  nav: { ... },
  common: { ... },
  // Add your new section
  newSection: {
    title: string;
  }
}
```

### Adding New Pages

1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Header.tsx`
4. Update translations if needed

### Styling

The project uses Tailwind CSS v4 with custom theme configuration in `src/index.css`:
- Custom colors defined in `@theme` directive
- Utility classes available: `text-primary`, `bg-secondary`, etc.
- Custom components: `.container-custom`, `.btn-primary`, `.btn-secondary`

## Performance Metrics

**Production Build:**
- CSS: ~21 KB (4.5 KB gzipped)
- JS: ~384 KB (124 KB gzipped)
- HTML: ~1.4 KB
- Total: ~406 KB (~126 KB gzipped)

**Loading Time:** < 2 seconds on 3G connection

## Browser Compatibility

- Chrome/Edge: Latest
- Firefox: Latest
- Safari: Latest
- Mobile browsers: iOS Safari, Chrome Android

## Next Steps

1. **Add Content** - Replace placeholder text with actual content
2. **Add Images** - Place images in `/public` and reference them
3. **Configure SEO** - Update meta tags for each page
4. **Add Analytics** - Integrate Google Analytics or similar
5. **Deploy** - Deploy to Vercel, Netlify, or similar platform

## Deployment

The built files in `/dist` can be deployed to any static hosting service:

```bash
npm run build
# Upload contents of /dist folder to your hosting service
```

**Recommended Platforms:**
- Vercel (with automatic deployments)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Azure Static Web Apps