# Student Portfolio

A premium, minimal, and timeless student portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Premium Design**: Luxury-tech aesthetic with minimal content, bold typography, and generous whitespace
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Smooth Animations**: Framer Motion animations with reduced-motion support
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessible**: WCAG AA/AAA compliant with semantic HTML and ARIA labels
- **Performance Optimized**: Lighthouse scores ≥95 on Performance/Accessibility/Best Practices/SEO

## Tech Stack

- **Framework**: Next.js 13.5.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: React Icons (Feather set)
- **Typography**: Inter (body) + Playfair Display (headings)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Update content in `/lib/data/`:
   - `constants.ts` - Site owner info and config
   - `experience.ts` - Work experience
   - `education.ts` - Education history
   - `projects.ts` - Project portfolio
   - `skills.ts` - Technical skills
   - `roles.ts` - Hero section rotating roles

3. Update Formspree form ID in `components/Contact.tsx` (line 49)

4. Run development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
npm start
```

## Design System

### Color Palettes

**Light Theme:**
- Primary: Indigo (#4F46E5)
- Accent: Emerald (#10B981)
- Background: White (#FFFFFF)
- Surface: Light Gray (#F9FAFB)

**Dark Theme:**
- Primary: Indigo (#6366F1)
- Accent: Emerald (#10B981)
- Background: Near Black (#09090B)
- Surface: Dark Gray (#18181B)

### Typography

- **Display**: Playfair Display, 5xl-7xl, semibold
- **Headings**: Playfair Display, 2xl-5xl, semibold
- **Body**: Inter, base-lg, regular
- **Lead**: Inter, lg-xl, regular
- **Caption**: Inter, sm, regular

### Spacing Scale

8px base unit: xs (4px), sm (8px), md (16px), lg (24px), xl (32px), 2xl (48px), 3xl (64px), 4xl (80px), 5xl (96px)

## Customization

### Editing Content

All content is centralized in `/lib/data/`:
- Update `SITE_OWNER` in `constants.ts` with your information
- Modify arrays in respective data files
- All changes are type-safe with TypeScript

### Theming

Colors are defined as CSS variables in `app/globals.css`:
- Light theme: `:root`
- Dark theme: `.dark`
- Update hex values to customize palette

### Components

Components are in `/components/`:
- `Navbar.tsx` - Navigation with scroll-spy
- `Hero.tsx` - Hero section with role rotator
- `About.tsx` - About section with skills
- `Timeline.tsx` - Reusable timeline component
- `Experience.tsx` - Work experience timeline
- `Education.tsx` - Education timeline
- `Projects.tsx` - Project grid
- `Contact.tsx` - Contact form with validation
- `SectionDivider.tsx` - Section dividers (wave/angled)
- `ScrollProgress.tsx` - Scroll progress indicator
- `Footer.tsx` - Footer

## Performance

- Image optimization with Next.js Image component
- Font optimization with `display: swap`
- Code splitting by route
- Reduced motion support
- Lighthouse targets:
  - CLS < 0.05
  - TBT < 150ms
  - LCP < 2.5s

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus-visible states
- Color contrast (WCAG AA/AAA)
- Screen reader friendly

## License

© 2024 [Your Name]. All rights reserved.

