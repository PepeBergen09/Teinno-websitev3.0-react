# State Management

## Overview

The Teinno website uses a lightweight state management approach primarily based on React Context API for global state and component-level state for local concerns.

## Global State

### Language Context

**Purpose**: Manage application-wide language selection

**Implementation**: `src/contexts/LanguageContext.tsx`

**State Structure**:
```typescript
interface LanguageContextType {
  language: Language; // 'en' | 'es' | 'no'
  setLanguage: (lang: Language) => void;
  t: Translation; // Current translation object
}
```

**Provider Setup**:
```typescript
<LanguageProvider>
  <App />
</LanguageProvider>
```

**Consuming Context**:
```typescript
import { useLanguage } from '../contexts/LanguageContext';

function MyComponent() {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <div>
      <p>Current: {language}</p>
      <p>{t.nav.home}</p>
      <button onClick={() => setLanguage('es')}>
        Switch to Spanish
      </button>
    </div>
  );
}
```

**State Persistence**:
- Saved to `localStorage` on language change
- Restored from `localStorage` on app load
- Falls back to 'en' if no saved preference

## Component State

### Form State

**Managed by**: React Hook Form

**Example**: Contact form in `src/pages/Contact.tsx`

```typescript
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
}
```

### UI State

**Local Component State**: For temporary UI concerns

```typescript
import { useState } from 'react';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle Menu
      </button>
      {isOpen && <MobileMenuContent />}
    </>
  );
}
```

## Routing State

**Managed by**: React Router

**Current Route Access**:
```typescript
import { useLocation, useNavigate } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isActive = location.pathname === '/services';
  
  return (
    <button onClick={() => navigate('/contact')}>
      Contact Us
    </button>
  );
}
```

## State Flow Diagram

```
User Action
    │
    ▼
Component Event Handler
    │
    ├─► Local State Update (useState)
    │   └─► Re-render Component
    │
    ├─► Context State Update (useContext)
    │   └─► Re-render All Consumers
    │
    └─► Form State Update (React Hook Form)
        └─► Validate & Update Form
```

## State Management Best Practices

### When to Use Local State
- UI-only state (modals, dropdowns, toggles)
- Temporary form input
- Animation states
- Component-specific flags

### When to Use Context
- User preferences (language, theme)
- Authentication state (future)
- Global UI state (notifications)
- Shared data across many components

### When to Use External State Management
Not currently needed, but consider for:
- Complex data fetching patterns
- Extensive client-side caching
- Complex state interactions
- Need for time-travel debugging

## Performance Optimization

### Avoiding Unnecessary Re-renders

**Problem**: Context updates cause all consumers to re-render

**Solutions**:

1. **Split Contexts**:
```typescript
// Instead of one large context
<LanguageContext>
<ThemeContext>
<UserContext>
```

2. **Memoization**:
```typescript
const MemoizedComponent = React.memo(MyComponent);
```

3. **Context Value Memoization**:
```typescript
const value = useMemo(
  () => ({ language, setLanguage, t }),
  [language, t]
);

return (
  <LanguageContext.Provider value={value}>
    {children}
  </LanguageContext.Provider>
);
```

### Form Performance

**React Hook Form Benefits**:
- Minimal re-renders (uncontrolled components)
- Isolated field updates
- Performance-optimized validation

**Best Practice**:
```typescript
// ✅ Good: Uncontrolled with ref
<input {...register('email')} />

// ❌ Avoid: Controlled with state (unnecessary re-renders)
<input value={email} onChange={e => setEmail(e.target.value)} />
```

## State Debugging

### React DevTools

**View Context Values**:
1. Install React DevTools
2. Select component
3. View "hooks" section
4. Inspect Context values

### Console Logging

```typescript
useEffect(() => {
  console.log('Language changed to:', language);
}, [language]);
```

### State Debugging Checklist
- [ ] Is state initialized correctly?
- [ ] Are state updates batched?
- [ ] Is state causing unnecessary re-renders?
- [ ] Is state properly cleaned up?
- [ ] Are side effects synchronized with state?

## Future State Management

### Planned Additions

**User Authentication**:
```typescript
interface AuthContextType {
  user: User | null;
  login: (credentials: Credentials) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}
```

**Notification System**:
```typescript
interface NotificationContextType {
  notifications: Notification[];
  addNotification: (message: string, type: 'success' | 'error') => void;
  removeNotification: (id: string) => void;
}
```

**Shopping Cart** (if e-commerce features added):
```typescript
interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  total: number;
}
```

## Migration Path

If state management needs scale to Redux or Zustand:

**Current Context Pattern**:
```typescript
const { language, setLanguage } = useLanguage();
```

**Redux Pattern**:
```typescript
const language = useSelector(state => state.language);
const dispatch = useDispatch();
dispatch(setLanguage('es'));
```

**Zustand Pattern**:
```typescript
const { language, setLanguage } = useStore();
setLanguage('es');
```

---

*Next: [Styling Guide](./07-Styling-Guide.md)*
