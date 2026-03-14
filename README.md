# E.M.E.L.D.T - Mindset Coaching Website

A professional Angular website for E.M.E.L.D.T mindset coaching - a guided process that helps you understand your thinking patterns, break limiting beliefs, and build strong mindsets.

## Design Features

- **Professional Dark Theme**: Navy blue background with gold accents
- **Five Pillars**: HEALING • RESTORATION • TRANSFORMATION • GROWTH • THRIVING
- **Responsive Design**: Beautiful, mobile-friendly design that works on all devices
- **Modern UI**: Clean, professional interface with smooth animations

## Color Scheme

- **Primary**: Dark Navy (#1a3a52)
- **Secondary**: Darker Navy (#0d2438)
- **Accent**: Gold (#f4c542)
- **Highlight**: Green (#2ecc71)

## Pages
## Pages

- **Home**: Hero with E.M.E.L.D.T branding, five pillars, features, process overview, and stats
  - Confidentiality banner: "Sessions are private, confidential and professional"
- **About**: Coach profile, credentials, journey, and philosophy
- **Services/Packages**: Coaching packages with detailed information and comparison
- **Contact**: Contact form, information, and FAQs

## Navigation

- Home
- About
- Services
- Packages
- Contact

## Tech Stack

- **Angular 17**: Standalone components with modern Angular features
- **TypeScript**: Type-safe development
- **CSS3**: Custom styling with CSS variables and animations
- **Google Fonts**: Poppins font family

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:4200`

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build in watch mode

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navigation header
│   │   └── footer/          # Footer component
│   ├── pages/
│   │   ├── home/            # Home page
│   │   ├── about/           # About page
│   │   ├── services/        # Services page
│   │   ├── testimonials/    # Testimonials page
│   │   ├── blog/            # Blog page
│   │   └── contact/         # Contact page
│   ├── app.component.ts     # Root component
│   └── app.routes.ts        # Route configuration
├── styles.css               # Global styles
└── index.html              # HTML template
```

## Customization

### Colors

The dark blue and gold color scheme is defined in `src/styles.css`:

```css
:root {
  --primary-color: #1a3a52;    /* Dark Navy */
  --secondary-color: #0d2438;  /* Darker Navy */
  --accent-color: #f4c542;     /* Gold */
  --gold-color: #f4c542;       /* Gold */
  --green-color: #2ecc71;      /* Green (for E.M.E.L.D.T logo) */
}
```

### Branding

- Logo: "E.M.E.L.D.T" in green (#2ecc71)
- Pillars: HEALING, RESTORATION, TRANSFORMATION, GROWTH, THRIVING
- Tagline: "A guided process that helps you understand your thinking patterns..."

### Content

Update the content in each component's TypeScript file. Look for arrays containing:
- Features
- Services
- Testimonials
- Blog posts
- etc.

### Images

Replace emoji placeholders with real images by:
1. Adding images to `src/assets/`
2. Updating component templates to use `<img>` tags
3. Adjusting CSS as needed

## Deployment

Build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## License

This project is private and proprietary.

## Contact

For questions or support, contact: info@mindsetcoach.com
