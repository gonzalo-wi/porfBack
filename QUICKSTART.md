# 🚀 Quick Start - 3 Minutes to Personalize

## Step 1: Update Your Info (2 minutes)

Open `src/data/profile.ts` and update:

```typescript
export const profile: Profile = {
  name: 'Gonzalo Wiñazki',        // ✅ Already set!
  nickname: 'Gonza',              // ✅ Already set!
  role: 'Backend Developer / IT Systems Analyst',
  tagline: 'I build systems that don\'t break.',
  bio: 'Your bio here...',
  stack: ['Java', 'Spring Boot', 'Go', ...],
  contact: {
    email: 'your.email@example.com',           // ⚠️ UPDATE THIS
    github: 'https://github.com/yourusername', // ⚠️ UPDATE THIS
    linkedin: 'https://linkedin.com/in/you',   // ⚠️ UPDATE THIS
  },
};
```

## Step 2: Deploy (1 minute)

### Option A: Vercel (Recommended - Easiest)
```bash
npm install -g vercel
vercel
```
Follow prompts. Done! ✅

### Option B: Netlify
```bash
npm run build
```
Then drag `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Option C: GitHub Pages
```bash
npm run build
```
Push `dist/` to `gh-pages` branch

## Step 3: Share!

Your portfolio is live! Share it with:
- Recruiters on LinkedIn
- Add to your resume
- GitHub profile README
- Email signature

## Want to Customize More?

See `CUSTOMIZATION.md` for detailed guides on:
- Adding your real projects
- Creating incident reports
- Updating skills
- Changing colors
- Adding photos

## Test Checklist

Before deploying:
- [ ] Click "LIVE" button on System Console - numbers should animate
- [ ] Toggle dark/light mode - should work smoothly
- [ ] Fill out contact form - validation should work
- [ ] Test on mobile - should be responsive
- [ ] Check all links - update placeholders with real links

## Need Help?

All code is commented and organized. Key files:
- `src/data/profile.ts` - All content
- `src/App.vue` - Page structure
- `tailwind.config.js` - Colors/design

You've got this! 🚀

---

**Currently running at**: http://localhost:5173
**Ready to deploy**: Yes! ✅
