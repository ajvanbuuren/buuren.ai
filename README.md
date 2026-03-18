# Buuren.AI

Landing page for **Buuren.AI** — independent AI consulting and strategic guidance for SMEs (MKB) in the Netherlands.

Built with React, TypeScript, Vite, and Tailwind CSS v4.

## Features

- Animated hero, value proposition, and section transitions via [Motion](https://motion.dev)
- AI Opportunity Scan — interactive multi-step questionnaire that surfaces relevant AI use cases
- AI Kansenkaart — visual map of AI opportunities across business functions
- FAQ accordion
- Dutch language throughout
- Responsive design

## Getting Started

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy the environment example and fill in your values:
   ```bash
   cp .env.example .env.local
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The app runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                        |
|-----------------|------------------------------------|
| `npm run dev`   | Start dev server on port 3000      |
| `npm run build` | Production build to `dist/`        |
| `npm run lint`  | Type-check with TypeScript         |
| `npm run preview` | Preview the production build     |

## Project Structure

```
src/
  App.tsx                  # Main page layout and all page sections
  translations.tsx         # Dutch copy and i18n context
  index.css                # Tailwind theme, custom utilities, animations
  main.tsx                 # React entry point
  components/
    AIOpportunityScan.tsx  # Interactive AI scan questionnaire
    VisualStorytelling.tsx # AI Kansenkaart (opportunity map)
    Quiz.tsx               # Quick AI readiness quiz
```

## Contact

[info@buuren.ai](mailto:info@buuren.ai) · [+31 6 40 85 99 62](tel:+31640859962)
