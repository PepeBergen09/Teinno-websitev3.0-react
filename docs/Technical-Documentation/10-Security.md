# Security

## Security Overview

The Teinno website implements security best practices for a client-side application with plans for secure backend integration.

## Current Security Measures

### 1. TypeScript Type Safety

**Benefit**: Prevents runtime type errors and vulnerabilities

```typescript
// Strict type checking prevents errors
interface User {
  id: string;
  email: string;
}

// TypeScript catches type mismatches at compile time
function processUser(user: User) {
  // Safe to access user properties
}
```

### 2. Content Security

**XSS Prevention**:
- React automatically escapes content
- No `dangerouslySetInnerHTML` used
- All user input sanitized

```typescript
// ✅ Safe: React escapes content
<div>{userInput}</div>

// ❌ Dangerous: Avoid unless absolutely necessary
<div dangerouslySetInnerHTML={{ __html: userInput }} />
```

### 3. Dependency Security

**Practices**:
- Regular dependency updates
- No dependencies with known vulnerabilities
- Minimal third-party dependencies

**Check for vulnerabilities**:
```bash
npm audit
npm audit fix
```

### 4. Environment Variables

**Sensitive data protection**:
```typescript
// Never commit sensitive data
// Use environment variables
const apiKey = import.meta.env.VITE_API_KEY;
```

**.gitignore**:
```
.env
.env.local
.env.production
```

## HTTP Security Headers

### Nginx Configuration

```nginx
# Security headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';" always;

# HTTPS enforcement
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```

### Header Explanations

**X-Frame-Options**: Prevents clickjacking
**X-Content-Type-Options**: Prevents MIME sniffing
**X-XSS-Protection**: Enables browser XSS filter
**Referrer-Policy**: Controls referrer information
**Content-Security-Policy**: Restricts resource loading
**Strict-Transport-Security**: Forces HTTPS

## Form Security

### Input Validation

**Client-Side** (React Hook Form):
```typescript
{
  register('email', {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address'
    }
  })
}
```

**Sanitization**:
```typescript
const sanitizeInput = (input: string) => {
  return input
    .trim()
    .replace(/[<>]/g, ''); // Remove potential HTML tags
};
```

### CSRF Protection

**Future Backend Integration**:
```typescript
// Include CSRF token in requests
const csrfToken = document
  .querySelector('meta[name="csrf-token"]')
  ?.getAttribute('content');

fetch('/api/contact', {
  method: 'POST',
  headers: {
    'X-CSRF-Token': csrfToken,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
});
```

## Authentication & Authorization

### Future Implementation

**JWT Token Storage**:
```typescript
// ❌ Don't store in localStorage (XSS vulnerable)
localStorage.setItem('token', jwt);

// ✅ Use httpOnly cookies
// Set by backend, not accessible via JavaScript
```

**Protected Routes**:
```typescript
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
}
```

## Data Privacy

### GDPR Compliance

**Cookie Consent** (future):
```typescript
<CookieConsent
  location="bottom"
  buttonText="Accept"
  declineButtonText="Decline"
  enableDeclineButton
>
  We use cookies to improve your experience.
</CookieConsent>
```

**Privacy Policy**: Document data collection and usage
**Data Minimization**: Only collect necessary data
**Right to be Forgotten**: Implement data deletion

### Personal Data Handling

**Contact Form**:
- Data transmitted over HTTPS
- No storage in browser (when backend added)
- Encrypted in transit
- Secure backend storage (future)

## Third-Party Integrations

### Calendly

**Security**:
- Opens in new tab/window
- Direct link to calendly.com
- No data shared from our site
- Calendly's security policies apply

### Future Integrations

**Analytics**:
- Anonymize IP addresses
- Respect Do Not Track
- Clear privacy policy

**Payment Processing**:
- Use certified payment gateway
- PCI DSS compliance
- No card data stored locally

## API Security

### Future Backend API

**Best Practices**:
```typescript
// HTTPS only
const API_URL = 'https://api.teinno.no';

// Rate limiting
const rateLimit = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
};

// CORS configuration
const corsOptions = {
  origin: 'https://teinno.no',
  credentials: true,
  optionsSuccessStatus: 200
};
```

**Request Validation**:
```typescript
// Validate all input
const validateContactForm = (data) => {
  // Check required fields
  // Validate formats
  // Sanitize input
  // Check length limits
};
```

**Error Handling**:
```typescript
// Don't expose internal errors
try {
  // Process request
} catch (error) {
  // Log internally
  console.error(error);
  
  // Return generic message
  return res.status(500).json({
    error: 'An error occurred'
  });
}
```

## Security Checklist

### Development
- [ ] Enable strict TypeScript checking
- [ ] Use ESLint security rules
- [ ] Validate all user input
- [ ] Sanitize output
- [ ] Keep dependencies updated
- [ ] Review code for security issues

### Deployment
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Environment variables secured
- [ ] Error messages don't expose details
- [ ] Rate limiting implemented (backend)
- [ ] Monitoring and logging enabled

### Maintenance
- [ ] Regular security audits
- [ ] Monitor for vulnerabilities (npm audit)
- [ ] Update dependencies regularly
- [ ] Review access logs
- [ ] Incident response plan

## Security Testing

### Tools

**Static Analysis**:
```bash
# ESLint with security plugin
npm install --save-dev eslint-plugin-security

# npm audit
npm audit
```

**Penetration Testing**:
- OWASP ZAP
- Burp Suite
- Manual security review

### Testing Checklist
- [ ] XSS prevention
- [ ] CSRF protection
- [ ] SQL injection (when DB added)
- [ ] Authentication bypass
- [ ] Authorization flaws
- [ ] Sensitive data exposure

## Incident Response

### If Security Issue Discovered

1. **Assess**: Determine scope and impact
2. **Contain**: Stop the issue from spreading
3. **Notify**: Inform affected users if needed
4. **Fix**: Deploy security patch
5. **Review**: Analyze root cause
6. **Document**: Record lessons learned

## Resources

- **OWASP Top 10**: https://owasp.org/www-project-top-ten/
- **React Security**: https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
- **MDN Security**: https://developer.mozilla.org/en-US/docs/Web/Security

---

*This completes the Technical Documentation section.*
