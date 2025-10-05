# Teinno AS - Nordic-LATAM Business Bridge Website

A professional consulting website for Teinno AS, connecting Nordic and Latin American markets through strategic partnerships and market entry services.

## Company Information

**Teinno AS** - Founded 2018  
**Founder:** Pepe Martínez Guarduola  
**Locations:** Bergen, Norway & Querétaro, Mexico  
**Email:** pepe.martinez@teinno.no  
**Phone:** +47 94251857  
**LinkedIn:** https://www.linkedin.com/company/teinno  
**Calendly:** https://calendly.com/pepe-martinez-teinno

## Website Content

### Pages (5)
1. **Home (/)** - Hero section with trust badges, problem/solution framework, timeline, and why Teinno section
2. **Services (/services)** - 3 service packages: Market Entry Sprint (€4.5k), Partnership Bridge (€12k), Full Establishment (€28k)
3. **Projects (/projects)** - 4 active projects: Mahahual Agricultural Cooperative, Cochabamba Waste Treatment, Querétaro Innovation Center, Tabasco Fishing Industry
4. **About (/about)** - Founder information, differentiators, principles, values, and company timeline
5. **Contact (/contact)** - Calendly integration, contact form, office information, business hours

### Key Features Implemented

✅ **Trilingual Support** - English, Spanish, Norwegian (fully translated)  
✅ **Real Content** - All content from Content.md integrated  
✅ **Calendly Integration** - Link to https://calendly.com/pepe-martinez-teinno  
✅ **Contact Information** - Norway & Mexico offices, phone, email, LinkedIn  
✅ **Real Projects** - 4 active projects with detailed information  
✅ **Service Packages** - 3 packages with pricing and detailed features  
✅ **Founder Bio** - Pepe Martínez background, credentials, expertise  
✅ **Brand Identity** - TEINNO logo, colors, Nordic-LATAM Bridge tagline  

### Color Scheme

- **Primary**: `#1e40af` (Professional blue)
- **Secondary**: `#3b82f6` (Accent blue for CTAs)
- **Neutral Dark**: `#1f2937` (Text)
- **Neutral Medium**: `#6b7280` (Secondary text)
- **Neutral Light**: `#f9fafb` (Backgrounds)

### Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS v4
- React Router
- Framer Motion (animations)
- React Hook Form (contact form)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Contact Form Integration

The contact form is currently set up with React Hook Form validation. To connect it to a backend:

### Option 1: Formspree (Easiest)
1. Sign up at https://formspree.io
2. Create a form and get your endpoint
3. Update the form action in `src/pages/Contact.tsx`

### Option 2: Custom Backend
Modify the `onSubmit` function in `src/pages/Contact.tsx` to POST to your API endpoint.

## Calendly Integration

Currently implemented as a link that opens Calendly in a new tab. To embed Calendly directly:

```tsx
// Install Calendly widget
npm install react-calendly

// Then use in Contact.tsx:
import { InlineWidget } from 'react-calendly';

<InlineWidget url="https://calendly.com/pepe-martinez-teinno" />
```

## Deployment

The site is ready to deploy to:
- **Vercel** (recommended): `vercel --prod`
- **Netlify**: Drag & drop `dist` folder
- **GitHub Pages**: Upload `dist` contents

### Environment Variables

No environment variables are currently required. All configuration is in the code.

## SEO

✅ Meta tags configured for Teinno AS  
✅ Open Graph tags for social sharing  
✅ Semantic HTML throughout  
✅ Alt text on images  
✅ Proper heading hierarchy  

## Performance

**Production Build:**
- CSS: ~28 KB (5.5 KB gzipped)
- JS: ~469 KB (150 KB gzipped)
- Total: ~497 KB (~156 KB gzipped)

**Lighthouse Targets:**
- Performance: >90
- Accessibility: >95
- Best Practices: >90
- SEO: 100

## Browser Support

- Chrome/Edge: Latest
- Firefox: Latest
- Safari: Latest
- Mobile: iOS Safari, Chrome Android

## Key CTAs Throughout Site

1. **Book Strategy Call** → https://calendly.com/pepe-martinez-teinno
2. **View Services** → /services
3. **Contact Form** → /contact
4. **LinkedIn** → https://www.linkedin.com/company/teinno

## Content Updates

To update content, edit the translations in:
- `src/types/language.ts` - Navigation and common translations
- Individual page files in `src/pages/` for page-specific content

## Institutional Positions

Prominently featured throughout the site:
- VP, Nordic-LATAM Chamber of Commerce
- Founder & VP, Red Global Nodo Querétaro
- Member, Bergen Chamber of Commerce

## Next Steps

1. ✅ All content integrated from Content.md
2. ✅ Trilingual support (EN/ES/NO)
3. ✅ All 5 pages with real content
4. ✅ SEO optimized
5. ✅ Production build successful

**Ready for deployment!**

## Support

For questions about the website:
- Technical: Contact your developer
- Content updates: Edit page files in `src/pages/`
- Translations: Edit `src/types/language.ts`

---

Built with React, TypeScript, Tailwind CSS, and modern web best practices.

