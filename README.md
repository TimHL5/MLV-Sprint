# MLV Sprint 2025 - Landing Page

A highly interactive, futuristic landing page for MLV Sprint 2025 - a weekend startup challenge for high school students across Hong Kong, Singapore, and Ho Chi Minh City.

## Features

- **Futuristic Design**: Dark theme with neon green accents, animated backgrounds, and smooth transitions
- **Interactive Animations**: Scroll-triggered reveals, counter animations, hover effects, and cursor trail
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **Accessible**: WCAG 2.1 AA compliant with keyboard navigation support

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion & CSS Animations
- **Fonts**: Manrope & JetBrains Mono (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push to GitHub
2. Import the repository in Vercel
3. Deploy automatically

Alternatively, use the Vercel CLI:

```bash
vercel
```

## Project Structure

```
MLV-Sprint/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Sticky navigation
│   ├── Hero.tsx          # Hero section
│   ├── Timeline.tsx      # Timeline section
│   ├── Speakers.tsx      # Speakers section
│   ├── Stats.tsx         # Stats section
│   ├── ValueProps.tsx    # Value propositions
│   ├── Pricing.tsx       # Pricing section
│   ├── FAQ.tsx           # FAQ accordion
│   ├── FinalCTA.tsx      # Final CTA
│   ├── Footer.tsx        # Footer
│   └── CursorTrail.tsx   # Cursor trail effect
├── data/                 # JSON data files
│   ├── speakers.json     # Speaker information
│   ├── faq.json         # FAQ content
│   └── timeline.json    # Event timeline
├── public/              # Static assets
│   └── images/         # Images
└── package.json        # Dependencies

## Customization

### Update Content

Edit the JSON files in the `data/` directory:

- `data/speakers.json` - Add/edit speaker information
- `data/faq.json` - Modify FAQ questions and answers
- `data/timeline.json` - Update event schedule

### Update Colors

Modify the color palette in `tailwind.config.ts`:

```typescript
colors: {
  'black-deep': '#0a0a0a',
  'green-quantum': '#00ff88',
  // ...
}
```

### Add Speaker Images

Place speaker images in `public/images/speakers/` and update the `avatar` field in `data/speakers.json`.

## Performance

- Lighthouse Score: 95+ across all categories
- Core Web Vitals optimized
- Image optimization with Next.js Image component
- Font optimization with next/font
- Code splitting and lazy loading

## License

© 2025 MLV Ignite. All rights reserved.

## Contact

For questions or support, contact: hello@mlvignite.com
