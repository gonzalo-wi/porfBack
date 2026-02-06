# Portfolio Customization Guide

## Quick Start

1. **Update Your Personal Info**
   - Open `src/data/profile.ts`
   - Change `name`, `nickname`, `role`, `tagline`, `bio`
   - Update `contact` links (email, GitHub, LinkedIn)

2. **Update Metrics**
   - Edit the `metrics` array
   - Change values and descriptions to match your achievements

3. **Add Your Projects**
   - Modify the `projects` array
   - Each project has: problem, solution, outcome, stack, links
   - Architecture types: `gateway`, `pipeline`, `monitoring`, `tool`

4. **Customize Incidents**
   - Real production problems you've solved
   - Format: SEV-1 (critical) to SEV-3 (minor)
   - Include: symptom, root cause, fix, prevention

5. **Update Skills (Playbooks)**
   - Group your skills by category
   - Add tools you use

6. **Add Work Experience**
   - Update `experiences` array
   - Include responsibilities and impact

## Content Writing Tips

### For Recruiters
- Lead with outcomes, not just technologies
- Use metrics where possible (%, time saved, requests/min)
- Be specific but concise
- Show problem-solving thinking

### Project Descriptions
**Bad**: "Built an API"
**Good**: "Built Go API gateway handling 10K+ req/min with <50ms p99 latency"

### Incident Reports
- This is your differentiator!
- Show you think about production systems
- Demonstrate debugging and prevention mindset
- Use real scenarios (anonymized if needed)

## Design Customization

### Change Primary Color
Edit `tailwind.config.js`:
```javascript
colors: {
  console: {
    primary: '#your-color',
  },
}
```

### Change Fonts
1. Import in `src/style.css`
2. Update `tailwind.config.js` font families

### Add Your Photo/Logo
1. Add image to `public/` folder
2. Reference in Hero section or Header

## SEO Tips

1. Update `index.html` meta tags:
   - Title: "Your Name - Backend Engineer"
   - Description: Your tagline
   - Keywords: Your key skills

2. Add Open Graph tags for social sharing

3. Generate and add a favicon

## Deployment Checklist

- [ ] Update all personal information in `profile.ts`
- [ ] Replace placeholder links with real ones
- [ ] Test all sections on mobile
- [ ] Check dark mode toggle works
- [ ] Test contact form validation
- [ ] Try System Console animation
- [ ] Verify all external links open in new tabs
- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview`

## Common Customizations

### Remove a Section
Comment out or delete from `App.vue`:
```vue
<!-- <IncidentsSection /> -->
```

### Reorder Sections
Just reorder in `App.vue`:
```vue
<MetricsSection />
<ServicesSection />
<PlaybooksSection />
```

### Change Color Scheme
Light mode by default? Remove dark mode classes or invert them.

### Add Analytics
Add Google Analytics or Plausible script to `index.html`

## Need Help?

The code is heavily commented. Each component is self-contained and easy to understand.

Key files:
- `src/data/profile.ts` - All content
- `src/App.vue` - Page structure
- `tailwind.config.js` - Design system
- `src/style.css` - Global styles

Good luck! 🚀
