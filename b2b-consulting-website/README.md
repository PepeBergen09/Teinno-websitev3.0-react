# B2B Consulting Website

A professional, responsive B2B consulting website built with modern web technologies.

## 🚀 Features

- **Modern Tech Stack**: React 18 + Vite + TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Multi-language Support**: English, Spanish, and Norwegian
- **Smooth Animations**: Framer Motion for subtle, professional animations
- **Form Handling**: React Hook Form with validation
- **SEO Optimized**: Meta tags, semantic HTML, and accessibility compliant
- **Fast Loading**: Optimized for performance with Vite

## 🎨 Design

- **Color Scheme**: Professional blue (#1e40af) with clean grays
- **Typography**: Inter font family for modern, readable text
- **Style**: Nordic-inspired, clean B2B aesthetic
- **Responsive**: Works perfectly on all device sizes

## 📱 Pages

1. **Home** (`/`) - Hero section with company overview and features
2. **Services** (`/services`) - Detailed service offerings and process
3. **Projects** (`/projects`) - Case studies and success stories
4. **About** (`/about`) - Company story, team, and values
5. **Contact** (`/contact`) - Contact form and company information

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Heroicons (via SVG)

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Language Support

The website supports three languages:
- **English** (EN) 🇺🇸
- **Spanish** (ES) 🇪🇸  
- **Norwegian** (NO) 🇳🇴

Language preference is saved in localStorage and persists across sessions.

## 📁 Project Structure

```
src/
├── components/
│   └── Layout.tsx          # Main layout with navigation
├── contexts/
│   └── LanguageContext.tsx # Language management
├── pages/
│   ├── Home.tsx           # Homepage
│   ├── Services.tsx       # Services page
│   ├── Projects.tsx       # Projects page
│   ├── About.tsx          # About page
│   └── Contact.tsx        # Contact page
├── types/
│   └── index.ts           # TypeScript type definitions
├── App.tsx                # Main app component
├── main.tsx              # Entry point
└── index.css             # Global styles with Tailwind
```

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Optimized for all screen sizes

### Performance
- Fast loading with Vite
- Optimized images and assets
- Minimal bundle size
- Lazy loading where appropriate

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast ratios
- Screen reader friendly

### SEO
- Meta tags for search engines
- Open Graph tags for social sharing
- Twitter Card support
- Semantic HTML structure
- Fast loading times

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom primary colors
      }
    }
  }
}
```

### Content
All text content is managed through the `LanguageContext.tsx` file. Add new languages or modify existing content there.

### Styling
The website uses Tailwind CSS utility classes. Custom styles can be added in `src/index.css` using the `@layer` directive.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact us through the website's contact form.