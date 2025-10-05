# B2B Consulting Website

A professional B2B consulting website built with modern web technologies.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **React Hook Form** - Form validation and management

## Features

- ✅ 5 pages (Home, Services, Projects, About, Contact)
- ✅ Trilingual support (English, Spanish, Norwegian)
- ✅ Responsive design (mobile-first)
- ✅ Professional Nordic B2B design
- ✅ Smooth animations with Framer Motion
- ✅ SEO optimized with meta tags
- ✅ Accessible and semantic HTML
- ✅ Fast loading and optimized build

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

## Support

For questions or issues, please contact the development team.