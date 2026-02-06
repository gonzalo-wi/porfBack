# Gonzalo Wiñazki - Backend Engineer Portfolio

A production-grade, recruiter-optimized portfolio website with an innovative "Operations Console" theme. Built to showcase backend engineering expertise through a clean, scannable, and memorable UI.

## 🎯 Features

- **Innovative "Mission Control" UI**: Console-inspired design that tells your story as a backend engineer
- **System Console Widget**: Real-time simulated metrics with live traffic animation
- **Incident Reports Section**: Unique showcase of problem-solving through real production incidents
- **Dark Mode**: Smooth theme toggle with system preference detection
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Accessibility**: WCAG compliant with proper ARIA labels, focus states, and semantic HTML
- **Performance Optimized**: Lightweight, fast loading, no heavy dependencies
- **Type-Safe**: Full TypeScript implementation
- **Easy to Customize**: All content centralized in `src/data/profile.ts`

## 🛠 Tech Stack

- **Vue 3** - Composition API + `<script setup>`
- **TypeScript** - Full type safety
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first styling with custom design system
- **Vue Router** - Smooth navigation and scroll behavior

## 📦 Installation

```bash
npm install
```

## 🚀 Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗 Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## 📝 Customization

All content is centralized in `src/data/profile.ts`. Edit this file to update:

- Personal information (name, role, bio, contact links)
- Metrics and impact numbers
- Projects with architecture diagrams
- Incident reports
- Skills and tools (playbooks)
- Work experience

### Example: Adding a New Project

```typescript
// In src/data/profile.ts
export const projects: Project[] = [
  // ...existing projects
  {
    id: 'new-project',
    title: 'Your Project Title',
    problem: 'The problem you solved',
    solution: 'Your technical solution',
    outcome: 'Measurable impact and results',
    stack: ['Tech', 'Stack', 'Used'],
    links: {
      github: 'https://github.com/...',
      live: 'https://...',
    },
    architecture: 'gateway', // or 'pipeline', 'monitoring', 'tool'
  },
];
```

## 🎨 Design System

### Colors

```javascript
// Dark mode console colors
console: {
  bg: '#0a0e17',           // Main background
  surface: '#111827',      // Card/surface background
  border: '#1f2937',       // Borders
  primary: '#3b82f6',      // Primary actions (blue)
  success: '#10b981',      // Success states (green)
  warning: '#f59e0b',      // Warning states (amber)
  error: '#ef4444',        // Error states (red)
  muted: '#6b7280',        // Muted text (gray)
}
```

## 📁 Project Structure

```
src/
├── main.ts              # App entry point
├── App.vue              # Root component
├── style.css            # Global styles + Tailwind
├── router/
│   └── index.ts         # Vue Router configuration
├── data/
│   └── profile.ts       # ALL CONTENT HERE ⭐
├── components/          # Reusable components
│   ├── Badge.vue
│   ├── ProjectCard.vue
│   ├── IncidentCard.vue
│   ├── SystemConsole.vue
│   └── ...
└── sections/            # Page sections
    ├── HeroSection.vue
    ├── MetricsSection.vue
    ├── ServicesSection.vue
    ├── IncidentsSection.vue
    ├── PlaybooksSection.vue
    ├── LogsSection.vue
    └── DeploySection.vue
```

## 🔧 System Console Widget

The System Console shows real-time simulated metrics:
- **Latency** (ms)
- **Error Rate** (%)
- **Throughput** (req/min)
- **Last Deploy** time
- **System Status** indicator

Click the **LIVE/PAUSED** button to simulate traffic and watch metrics animate smoothly!

## 🚀 Ready to ship reliable systems together!
