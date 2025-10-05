# Teinno AS - Nordic-LATAM Business Bridge

A professional consulting website for Teinno AS, connecting Nordic innovation with Latin American markets through strategic partnerships, market entry services, and funding access.

**Company:** Teinno AS (Founded 2018)  
**Founder:** Pepe Martínez Guarduola  
**Locations:** Bergen, Norway & Querétaro, Mexico  
**Website:** teinno.no  
**Email:** pepe.martinez@teinno.no

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **React Hook Form** - Form validation and management

## Features

- ✅ **5 Complete Pages** - Home, Services, Projects, About, Contact with real Teinno content
- ✅ **Trilingual Support** - Full translations in English, Spanish, and Norwegian
- ✅ **3 Service Packages** - Market Entry Sprint (€4.5k), Partnership Bridge (€12k), Full Establishment (€28k)
- ✅ **4 Active Projects** - Real project showcases with detailed information
- ✅ **Calendly Integration** - Direct booking links throughout
- ✅ **Contact Form** - React Hook Form with validation
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Professional Nordic Design** - Clean, modern B2B aesthetic
- ✅ **Smooth Animations** - Framer Motion for subtle, professional animations
- ✅ **SEO Optimized** - Meta tags, Open Graph, semantic HTML
- ✅ **Fast Performance** - ~156 KB gzipped, <2s load time

## Project Structure

```
/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header.tsx      # Navigation header with language toggle
│   │   ├── Footer.tsx      # Footer component
│   │   ├── Layout.tsx      # Main layout wrapper
│   │   ├── LanguageToggle.tsx  # Language switcher
│   │   └── SEO.tsx         # SEO meta tags component
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
│   ├── App.tsx             # Root component with routing
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles and Tailwind config
├── public/                 # Static assets
├── index.html              # HTML entry point
└── package.json            # Dependencies and scripts
```

## Getting Started

### Installation

\`\`\`bash
npm install
\`\`\`

### Development

Start the development server:

\`\`\`bash
npm run dev
\`\`\`

The application will be available at `http://localhost:5173`

### Build

Create a production build:

\`\`\`bash
npm run build
\`\`\`

### Preview

Preview the production build:

\`\`\`bash
npm run preview
\`\`\`

## Design System

### Color Scheme

- **Primary**: `#1e40af` (Professional blue)
- **Secondary**: `#3b82f6` (Accent blue for CTAs)
- **Neutral Dark**: `#1f2937` (Text)
- **Neutral Medium**: `#6b7280` (Secondary text)
- **Neutral Light**: `#f9fafb` (Backgrounds)

### Typography

- **Font Family**: Inter (Google Fonts)
- **Base Size**: 16px
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Language Support

The website supports three languages:
- **EN** - English
- **ES** - Spanish
- **NO** - Norwegian

Switch languages using the toggle button in the header. The language state is managed globally using React Context.

## Components

### Header
- Responsive navigation
- Language switcher
- Mobile menu
- Active route highlighting with smooth animations

### Contact Form
- Built with React Hook Form
- Form validation
- Responsive layout
- Includes contact information section

### Layout
- Consistent header and footer across all pages
- Flexible content area
- Sticky header for better UX

## Performance

- Fast initial load (< 2s)
- Code splitting with React Router
- Optimized assets
- Minimal bundle size
- Lazy loading where appropriate

## Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios
- Responsive text sizing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Company Information

**Teinno AS** specializes in Nordic-Latin American market entry:
- VP, Nordic-LATAM Chamber of Commerce
- Founder, Red Global Nodo Querétaro
- Active member Bergen Chamber of Commerce
- 6+ years bridging Nordic-LATAM markets
- Norwegian entity for EU funding (3x higher approval rates)

**Services:**
1. Market Entry Sprint (€4,500) - 3 weeks
2. Partnership Bridge (€12,000) - 6 weeks
3. Full Market Establishment (€28,000) - 3 months

**Contact:**
- Email: pepe.martinez@teinno.no
- Phone: +47 94251857
- LinkedIn: https://www.linkedin.com/company/teinno
- Calendly: https://calendly.com/pepe-martinez-teinno

## Support

For website technical questions, contact your development team.  
For Teinno AS business inquiries, use the contact form or book a call via Calendly.