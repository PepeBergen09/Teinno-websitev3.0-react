# Component Library

## Overview

The Teinno website uses a component-based architecture with reusable components organized by function.

## Layout Components

### Header
**Location**: `src/components/Header.tsx`

Navigation header with responsive menu and language toggle.

**Features**:
- Responsive navigation (desktop/mobile)
- Active route highlighting
- Mobile hamburger menu
- Language toggle integration
- Smooth animations

**Props**: None (uses contexts internally)

### Footer
**Location**: `src/components/Footer.tsx`

Site footer with company information and links.

**Features**:
- Company contact information
- Social media links
- Copyright notice
- Responsive layout

**Props**: None

### Layout
**Location**: `src/components/Layout.tsx`

Main layout wrapper that includes Header and Footer.

**Usage**:
```typescript
<Layout>
  <YourPageContent />
</Layout>
```

## Utility Components

### SEO
**Location**: `src/components/SEO.tsx`

Manages page metadata for search engine optimization.

**Props**:
```typescript
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}
```

**Default Values**: Teinno AS branding and description

### PageWrapper
**Location**: `src/components/PageWrapper.tsx`

Wrapper for page content with entrance animations.

**Features**:
- Fade-in animation on mount
- Slide-up effect
- Consistent page transitions

### LanguageToggle
**Location**: `src/components/LanguageToggle.tsx`

Dropdown for switching between languages.

**Features**:
- Current language display
- Dropdown with all languages
- Persists selection to localStorage
- Flag icons (optional enhancement)

## Page Components

### Home
**Location**: `src/pages/Home.tsx`

Landing page with hero section and key features.

**Sections**:
- Hero with CTA buttons
- Trust badges
- Problem/solution framework
- Timeline
- Why Teinno section

### Services
**Location**: `src/pages/Services.tsx`

Service offerings and packages.

**Features**:
- 3 service packages with pricing
- Detailed feature lists
- CTA buttons
- Package comparison

### Projects
**Location**: `src/pages/Projects.tsx`

Portfolio of active projects.

**Features**:
- 4 project showcases
- Project details (location, status, partners)
- Role descriptions
- Institutional network section

### About
**Location**: `src/pages/About.tsx`

Company and founder information.

**Sections**:
- Founder biography
- Company differentiators
- Principles and values
- Company timeline

### Contact
**Location**: `src/pages/Contact.tsx`

Contact form and information.

**Features**:
- Contact form with validation
- Calendly integration
- Office information
- Business hours
- Map location (future)

## Styling Patterns

### Container
```typescript
<div className="container-custom">
  {/* Content */}
</div>
```

### Section Spacing
```typescript
<section className="py-20">
  {/* Section content */}
</section>
```

### Buttons
```typescript
// Primary button
<button className="btn-primary">
  Book a Call
</button>

// Secondary button
<button className="btn-secondary">
  Learn More
</button>
```

### Cards
```typescript
<div className="bg-white rounded-lg shadow-lg p-8">
  {/* Card content */}
</div>
```

## Animation Patterns

### Page Entrance
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

### Staggered Children
```typescript
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }}
  initial="hidden"
  animate="show"
>
  {items.map(item => (
    <motion.div variants={itemVariants} key={item.id}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Hover Effects
```typescript
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

## Component Guidelines

### Best Practices
1. **Keep components focused**: Single responsibility
2. **Use TypeScript**: Strong typing for props
3. **Leverage composition**: Combine small components
4. **Avoid prop drilling**: Use contexts for global state
5. **Memoize when needed**: Use React.memo for expensive renders

### Naming Conventions
- **PascalCase**: Component files and names
- **camelCase**: Functions and variables
- **UPPER_SNAKE_CASE**: Constants

### File Organization
```
ComponentName.tsx
├── Imports
├── Types/Interfaces
├── Constants
├── Component Definition
└── Export
```

---

*Next: [State Management](./06-State-Management.md)*
