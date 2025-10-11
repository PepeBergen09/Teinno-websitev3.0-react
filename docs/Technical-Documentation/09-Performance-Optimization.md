# Performance Optimization

## Current Performance Metrics

### Production Build Size
- **CSS**: ~27 KB (~5.4 KB gzipped)
- **JavaScript**: ~467 KB (~150 KB gzipped)
- **HTML**: ~2.2 KB (~0.8 KB gzipped)
- **Total**: ~496 KB (~156 KB gzipped)

### Loading Performance
- **Time to Interactive**: < 2 seconds on 3G
- **First Contentful Paint**: < 1.5 seconds
- **Total Load Time**: < 3 seconds

### Lighthouse Targets
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: 100

## Optimization Strategies

### 1. Code Splitting

**Route-Based Splitting**:
```typescript
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Suspense>
  );
}
```

**Component-Level Splitting**:
```typescript
const HeavyComponent = lazy(() => import('./HeavyComponent'));

// Only load when needed
{showHeavy && (
  <Suspense fallback={<Spinner />}>
    <HeavyComponent />
  </Suspense>
)}
```

### 2. Asset Optimization

**Images**:
- Use WebP format with fallbacks
- Implement lazy loading
- Serve responsive images
- Compress with tools like ImageOptim

```html
<img 
  src="image.webp" 
  alt="Description"
  loading="lazy"
  srcSet="image-320.webp 320w, image-640.webp 640w"
  sizes="(max-width: 768px) 320px, 640px"
/>
```

**Fonts**:
- Use system fonts (current approach)
- Or use `font-display: swap` for custom fonts
- Preload critical fonts

```html
<link 
  rel="preload" 
  href="/fonts/custom-font.woff2" 
  as="font" 
  type="font/woff2" 
  crossorigin
/>
```

### 3. React Optimization

**Memoization**:
```typescript
import { memo, useMemo, useCallback } from 'react';

// Memoize expensive components
const ExpensiveComponent = memo(({ data }) => {
  return <div>{/* Expensive render */}</div>;
});

// Memoize expensive calculations
const sortedData = useMemo(
  () => data.sort((a, b) => a.value - b.value),
  [data]
);

// Memoize callbacks
const handleClick = useCallback(() => {
  // Handle click
}, [dependencies]);
```

**Avoid Inline Functions**:
```typescript
// ❌ Bad: Creates new function on every render
<button onClick={() => handleClick(id)}>

// ✅ Good: Stable reference
const onClick = useCallback(() => handleClick(id), [id]);
<button onClick={onClick}>
```

### 4. Bundle Optimization

**Tree Shaking**:
```typescript
// ✅ Import only what you need
import { map } from 'lodash-es';

// ❌ Avoid importing entire library
import _ from 'lodash';
```

**Dynamic Imports**:
```typescript
// Load heavy libraries only when needed
const loadChartsLib = async () => {
  const Charts = await import('charts-library');
  return Charts;
};
```

### 5. CSS Optimization

**Tailwind Purging** (automatic):
- Removes unused CSS in production
- Reduces CSS from ~3MB to ~27KB

**Critical CSS**:
```html
<!-- Inline critical CSS for above-the-fold content -->
<style>
  .hero { /* Critical styles */ }
</style>
```

### 6. Network Optimization

**Compression**:
```nginx
# Nginx configuration
gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_min_length 1000;
```

**Caching Headers**:
```nginx
location /assets/ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}
```

**HTTP/2**:
- Enable HTTP/2 on server
- Multiplexing reduces latency
- Server push for critical resources

### 7. Rendering Optimization

**Avoid Layout Thrashing**:
```typescript
// ❌ Bad: Multiple reflows
elements.forEach(el => {
  const height = el.offsetHeight; // Read
  el.style.height = height * 2 + 'px'; // Write
});

// ✅ Good: Batch reads and writes
const heights = elements.map(el => el.offsetHeight);
elements.forEach((el, i) => {
  el.style.height = heights[i] * 2 + 'px';
});
```

**Virtual Scrolling**:
For long lists:
```typescript
import { FixedSizeList } from 'react-window';

<FixedSizeList
  height={600}
  itemCount={1000}
  itemSize={50}
>
  {({ index, style }) => (
    <div style={style}>Item {index}</div>
  )}
</FixedSizeList>
```

### 8. Animation Performance

**Use CSS Transforms**:
```css
/* ✅ GPU-accelerated */
.animated {
  transform: translateX(100px);
  will-change: transform;
}

/* ❌ Triggers layout */
.animated {
  left: 100px;
}
```

**Framer Motion Optimization**:
```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }} // Keep animations short
  layoutId="unique-id" // Enable layout animations
/>
```

### 9. State Management Performance

**Avoid Large Context Values**:
```typescript
// ❌ Bad: Large object causes wide re-renders
const value = { user, settings, preferences, data };

// ✅ Good: Split into multiple contexts
<UserContext.Provider value={user}>
<SettingsContext.Provider value={settings}>
```

**Optimize Context Consumers**:
```typescript
// ✅ Only consume what you need
const { language } = useLanguage();

// Not the entire context
```

## Performance Monitoring

### Tools

1. **Chrome DevTools**:
   - Network tab: Load times
   - Performance tab: Runtime analysis
   - Lighthouse: Comprehensive audit

2. **Bundle Analyzer**:
```bash
npm install --save-dev rollup-plugin-visualizer
```

```typescript
// vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';

export default {
  plugins: [
    visualizer({ open: true })
  ]
};
```

3. **Real User Monitoring**:
```typescript
// Future: Web Vitals
import { getCLS, getFID, getFCP } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
```

### Performance Budget

**Targets**:
- JavaScript: < 200 KB gzipped
- CSS: < 10 KB gzipped
- Images: < 500 KB total
- Fonts: < 100 KB
- Total Page Weight: < 1 MB

**Monitoring**:
```json
{
  "budget": [
    {
      "path": "dist/assets/*.js",
      "maxSize": "200kb"
    },
    {
      "path": "dist/assets/*.css",
      "maxSize": "10kb"
    }
  ]
}
```

## Best Practices

### Development
- [ ] Use React DevTools Profiler
- [ ] Monitor bundle size in CI/CD
- [ ] Set performance budgets
- [ ] Test on real devices
- [ ] Profile before optimizing

### Production
- [ ] Enable compression (gzip/brotli)
- [ ] Set proper cache headers
- [ ] Use CDN for static assets
- [ ] Monitor Core Web Vitals
- [ ] Set up alerts for regressions

---

*Next: [Security](./10-Security.md)*
