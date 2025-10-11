# Styling Guide

## Overview

The Teinno website uses Tailwind CSS v4 for styling with a custom design system based on Nordic design principles.

## Design System

### Color Palette

```css
@theme {
  --color-primary: #1e40af;      /* Professional blue */
  --color-secondary: #3b82f6;    /* Accent blue */
  --color-neutral-dark: #1f2937; /* Text */
  --color-neutral-medium: #6b7280; /* Secondary text */
  --color-neutral-light: #f9fafb; /* Backgrounds */
}
```

**Usage**:
```html
<div className="bg-primary text-white">Primary background</div>
<div className="text-secondary">Accent text</div>
```

### Typography

**Font Family**: System fonts for optimal performance
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
```

**Heading Scale**:
- `h1`: 4xl (2.25rem/36px) on mobile, 5xl (3rem/48px) on desktop
- `h2`: 3xl (1.875rem/30px) on mobile, 4xl (2.25rem/36px) on desktop
- `h3`: 2xl (1.5rem/24px) on mobile, 3xl (1.875rem/30px) on desktop
- `h4`: xl (1.25rem/20px)
- `h5`: lg (1.125rem/18px)
- `h6`: base (1rem/16px)

**Body Text**:
- Regular: base (1rem/16px)
- Small: sm (0.875rem/14px)
- Large: lg (1.125rem/18px)

### Spacing

**Padding/Margin Scale**:
- `2`: 0.5rem (8px)
- `4`: 1rem (16px)
- `6`: 1.5rem (24px)
- `8`: 2rem (32px)
- `12`: 3rem (48px)
- `16`: 4rem (64px)
- `20`: 5rem (80px)

**Container**:
```css
.container-custom {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem; /* mobile */
}

@media (min-width: 768px) {
  .container-custom {
    padding: 0 2rem;
  }
}
```

### Breakpoints

```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

**Responsive Usage**:
```html
<div className="text-base md:text-lg lg:text-xl">
  Responsive text
</div>
```

## Component Styles

### Buttons

**Primary Button**:
```html
<button className="btn-primary">
  Book a Call
</button>
```

```css
.btn-primary {
  @apply bg-secondary text-white px-8 py-3 rounded-lg 
         hover:bg-blue-600 transition-all duration-300
         font-semibold shadow-lg hover:shadow-xl;
}
```

**Secondary Button**:
```html
<button className="btn-secondary">
  Learn More
</button>
```

```css
.btn-secondary {
  @apply border-2 border-primary text-primary px-8 py-3 
         rounded-lg hover:bg-primary hover:text-white 
         transition-all duration-300 font-semibold;
}
```

### Cards

**Standard Card**:
```html
<div className="bg-white rounded-lg shadow-lg p-8 
                hover:shadow-xl transition-shadow">
  <h3 className="text-2xl font-bold mb-4">Card Title</h3>
  <p className="text-neutral-medium">Card content</p>
</div>
```

**Service Card**:
```html
<div className="bg-white border-2 border-neutral-200 
                rounded-xl p-8 hover:border-primary 
                transition-colors">
  <!-- Card content -->
</div>
```

### Forms

**Input Field**:
```html
<input 
  type="text"
  className="w-full px-4 py-3 border-2 border-neutral-200 
             rounded-lg focus:border-primary focus:outline-none
             transition-colors"
  placeholder="Your name"
/>
```

**Textarea**:
```html
<textarea
  className="w-full px-4 py-3 border-2 border-neutral-200 
             rounded-lg focus:border-primary focus:outline-none
             transition-colors resize-none"
  rows={5}
/>
```

**Error State**:
```html
<input 
  className="border-red-500 focus:border-red-500"
/>
<span className="text-red-600 text-sm mt-1">
  Error message
</span>
```

### Sections

**Standard Section**:
```html
<section className="py-20 bg-neutral-light">
  <div className="container-custom">
    <!-- Section content -->
  </div>
</section>
```

**Hero Section**:
```html
<section className="pt-32 pb-20 bg-gradient-to-br 
                    from-primary to-blue-600">
  <div className="container-custom text-white">
    <!-- Hero content -->
  </div>
</section>
```

## Animation Patterns

### Hover Effects

```html
<!-- Scale on hover -->
<div className="transition-transform hover:scale-105">

<!-- Shadow on hover -->
<div className="transition-shadow hover:shadow-xl">

<!-- Color change on hover -->
<button className="transition-colors hover:bg-primary">
```

### Framer Motion

**Fade In**:
```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
```

**Slide Up**:
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

**Stagger Children**:
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
```

## Accessibility

### Focus States

Always include visible focus states:
```css
.focus-visible {
  @apply outline-2 outline-offset-2 outline-primary;
}
```

### Color Contrast

Ensure WCAG AA compliance:
- Large text (18px+): 3:1 minimum
- Normal text: 4.5:1 minimum
- UI components: 3:1 minimum

### Semantic HTML

Use appropriate HTML elements:
```html
<nav> for navigation
<main> for main content
<article> for standalone content
<section> for thematic grouping
<button> for interactive elements
<a> for links
```

## Best Practices

### Utility-First Approach

```html
<!-- ✅ Good: Utility classes -->
<div className="flex items-center gap-4 p-6 bg-white rounded-lg">

<!-- ❌ Avoid: Inline styles -->
<div style="display: flex; align-items: center; gap: 16px;">
```

### Responsive Design

Mobile-first approach:
```html
<!-- Base styles for mobile, override for larger screens -->
<div className="text-sm md:text-base lg:text-lg">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### Component Extraction

Extract repeated patterns:
```typescript
// ❌ Repeated styles
<button className="bg-primary text-white px-8 py-3...">
<button className="bg-primary text-white px-8 py-3...">

// ✅ Extracted class
<button className="btn-primary">
```

### Dark Mode Support

Prepare for future dark mode:
```html
<div className="bg-white dark:bg-gray-900 
                text-gray-900 dark:text-white">
```

## Performance Optimization

### CSS Purging

Tailwind automatically removes unused styles in production:
- Development: ~3MB CSS
- Production: ~27KB CSS (~5.4KB gzipped)

### Class Ordering

Consistent ordering improves readability:
1. Layout (display, position)
2. Box model (width, height, padding, margin)
3. Typography (font, text)
4. Visual (color, background, border)
5. Effects (shadow, opacity, transform)

Example:
```html
<div className="flex items-center w-full p-4 text-lg font-bold 
                text-white bg-primary rounded-lg shadow-lg">
```

---

*Next: [Build and Deployment](./08-Build-Deployment.md)*
