# API Reference

## Overview

Currently, the Teinno website is a static single-page application with no backend API. This document outlines the internal APIs (components, hooks, contexts) and planned external API integration.

## Internal APIs

### Language Context API

#### `LanguageContext`

Context for managing the application's language state.

**Location**: `src/contexts/LanguageContext.tsx`

**Interface**:
```typescript
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

type Language = 'en' | 'es' | 'no';
```

**Usage**:
```typescript
import { useLanguage } from '../contexts/LanguageContext';

function MyComponent() {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <div>
      <h1>{t.nav.home}</h1>
      <button onClick={() => setLanguage('es')}>Español</button>
    </div>
  );
}
```

**Methods**:
- `setLanguage(lang: Language)`: Updates the current language
- `t`: Current translation object based on selected language

### Translation Types

#### `Translation`

Complete translation interface for all text content.

**Location**: `src/types/language.ts`

**Structure**:
```typescript
interface Translation {
  nav: {
    home: string;
    services: string;
    projects: string;
    about: string;
    contact: string;
  };
  common: {
    learnMore: string;
    bookCall: string;
    contactUs: string;
    // ... more common strings
  };
  // ... page-specific translations
}
```

**Available Languages**:
- `en`: English
- `es`: Spanish (Español)
- `no`: Norwegian (Norsk)

## Component APIs

### SEO Component

Updates page metadata for SEO.

**Location**: `src/components/SEO.tsx`

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

**Usage**:
```typescript
<SEO
  title="Services | Teinno AS"
  description="Market entry and partnership services"
  keywords="Nordic, LATAM, market entry, partnerships"
/>
```

### PageWrapper Component

Wrapper for pages with animations and transitions.

**Location**: `src/components/PageWrapper.tsx`

**Props**:
```typescript
interface PageWrapperProps {
  children: ReactNode;
}
```

**Usage**:
```typescript
<PageWrapper>
  <YourPageContent />
</PageWrapper>
```

### LanguageToggle Component

Language switcher dropdown.

**Location**: `src/components/LanguageToggle.tsx`

**Props**: None (uses LanguageContext)

**Usage**:
```typescript
<LanguageToggle />
```

## Form APIs

### Contact Form

Form for user inquiries and contact requests.

**Location**: `src/pages/Contact.tsx`

**Form Fields**:
```typescript
interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
}
```

**Validation Rules**:
- `name`: Required, min 2 characters
- `email`: Required, valid email format
- `company`: Required, min 2 characters
- `phone`: Optional, valid phone format
- `message`: Required, min 10 characters

**Current Behavior**:
- Client-side validation only
- No backend submission yet
- Console log on submission (development)

**Future Integration**:
```typescript
// Planned API endpoint
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "phone": "+47 12345678",
  "message": "Interested in services"
}

Response: 200 OK
{
  "success": true,
  "message": "Thank you for contacting us"
}
```

## Routing API

### Routes Configuration

**Location**: `src/App.tsx`

**Available Routes**:
```typescript
const routes = [
  { path: '/', element: <Home /> },
  { path: '/services', element: <Services /> },
  { path: '/projects', element: <Projects /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> }
];
```

**Navigation**:
```typescript
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  
  const goToServices = () => {
    navigate('/services');
  };
  
  return <button onClick={goToServices}>View Services</button>;
}
```

## Planned External APIs

### Contact Form API

**Endpoint**: `/api/contact`
**Method**: POST
**Status**: Planned

**Request**:
```typescript
interface ContactRequest {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
  language: string; // Current language
}
```

**Response**:
```typescript
interface ContactResponse {
  success: boolean;
  message: string;
  ticketId?: string; // For tracking
}
```

**Error Codes**:
- `400`: Bad Request (validation error)
- `429`: Too Many Requests (rate limiting)
- `500`: Internal Server Error

### Newsletter API

**Endpoint**: `/api/newsletter`
**Method**: POST
**Status**: Future consideration

**Request**:
```typescript
interface NewsletterRequest {
  email: string;
  language: string;
}
```

### Analytics API

**Service**: Google Analytics or alternative
**Status**: Not yet integrated

**Events to Track**:
- Page views
- Service inquiries
- Calendly clicks
- Language changes
- Form submissions

## External Service Integrations

### Calendly

**Type**: Direct link integration
**URL**: `https://calendly.com/pepe-martinez-teinno`
**Usage**: Opens in new tab/window

**Future Enhancement**: Embedded widget
```typescript
import { InlineWidget } from 'react-calendly';

<InlineWidget url="https://calendly.com/pepe-martinez-teinno" />
```

## Browser Storage APIs

### LocalStorage

**Used For**: Storing language preference

**Keys**:
- `teinno-language`: Stores selected language ('en' | 'es' | 'no')

**Access**:
```typescript
// Get language preference
const savedLanguage = localStorage.getItem('teinno-language');

// Save language preference
localStorage.setItem('teinno-language', 'es');
```

## Build-Time APIs

### Vite Environment Variables

**Usage**:
```typescript
// Access build-time environment variables
const apiUrl = import.meta.env.VITE_API_URL;
const isDev = import.meta.env.DEV;
const isProd = import.meta.env.PROD;
```

**Available Variables**:
- `VITE_API_URL`: API base URL (when backend is added)
- `DEV`: Boolean indicating development mode
- `PROD`: Boolean indicating production mode
- `MODE`: Current mode ('development' or 'production')

## Error Handling

### Error Boundaries

**Status**: To be implemented

**Planned Usage**:
```typescript
<ErrorBoundary fallback={<ErrorPage />}>
  <App />
</ErrorBoundary>
```

### Form Error Handling

**Current Implementation**:
- React Hook Form validation errors
- Display inline error messages
- Prevent submission on validation failure

**Example**:
```typescript
{errors.email && (
  <span className="text-red-600 text-sm">
    {errors.email.message}
  </span>
)}
```

---

*Next: [Component Library](./05-Component-Library.md)*
