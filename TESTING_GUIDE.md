# 🧪 Quick Testing Guide - Dual Mode System

## How to Test (Step-by-Step)

### 🌐 Open the Application
1. Open browser at: **http://localhost:5175/**
2. The app should load with default **Tech Lead View**

---

## ✅ Test Sequence

### Test 1: View Toggle Button
- [ ] **Locate** the toggle button in the header (looks like arrows with "Tech Lead" or "Recruiter" text)
- [ ] **Click** the toggle button
- [ ] **Verify** button text changes between "Tech Lead" ↔ "Recruiter"
- [ ] **Verify** icon rotates 180 degrees when toggling

---

### Test 2: Hero Section Changes
**Location:** Top of page, after header

#### In Tech Lead View:
- [ ] Tagline: "I build systems that don't break."
- [ ] Bio: Mentions "Backend engineer specializing..."

#### In Recruiter View:
- [ ] Tagline: "Backend Developer focused on building reliable systems."
- [ ] Bio: Mentions "I design and build APIs, automate workflows..."

**How to test:** Toggle view and watch the text change instantly.

---

### Test 3: Metrics Section
**Location:** Scroll down to "Impact Metrics" section

#### In Tech Lead View:
- [ ] Title: "Impact Metrics"
- [ ] Icons: ⚡ 🚀 🔗 ✓
- [ ] Cards show: "~80% Time Saved", "12+ APIs Shipped", "8+ Systems Integrated", "99.9% Uptime Focus"

#### In Recruiter View:
- [ ] Title: "Impact & Results"
- [ ] Icons: 🤖 ✅ 🔗 📦
- [ ] Cards show: "80% Time Saved", "12+ Processes Automated", "8+ Systems Connected", "15+ Projects Delivered"

**How to test:** Toggle view and watch the entire section change (title, icons, values, descriptions).

---

### Test 4: Projects Section
**Location:** "Projects" section

#### In Tech Lead View:
- [ ] Section title: "Projects"
- [ ] Cards show: "Problem", "Solution", "Outcome"
- [ ] **Architecture diagrams/notes VISIBLE** (if project has them)
- [ ] Technical language: "JWT validation", "Redis-backed", "p99 latency"

#### In Recruiter View:
- [ ] Section title: "Key Projects"
- [ ] Cards show: "Challenge", "What I Did", "Technologies", "Result"
- [ ] **Architecture diagrams/notes HIDDEN**
- [ ] Simple language: "secure way to communicate", "handles authentication"

**How to test:** 
1. Toggle to Recruiter view
2. Verify "Architecture" section disappears from project cards
3. Toggle to Tech Lead view
4. Verify "Architecture" section reappears (if available)

---

### Test 5: Incidents Section
**Location:** Scroll to "Incident Reports" / "Challenges Solved" section

#### In Tech Lead View:
- [ ] Section title: "Incident Reports"
- [ ] Description mentions: "production incidents", "debug and resolve"
- [ ] Cards show **SEV-1, SEV-2, SEV-3 badges** (colored: red, orange, yellow)
- [ ] Structure: "Symptom", "Root Cause", "Fix", "Prevention"
- [ ] Technical terms: "rate limits", "timezone handling", "memory leak"

#### In Recruiter View:
- [ ] Section title: "Challenges Solved"
- [ ] Description mentions: "real problems", "identified and resolved"
- [ ] **NO severity badges**
- [ ] Structure: "Situation", "What I Did", "Result"
- [ ] Simple language: "payments were failing", "system was not releasing connections"

**How to test:**
1. Look at incident cards in Tech Lead view - count SEV badges (should see 4)
2. Toggle to Recruiter view
3. Verify ALL severity badges disappear
4. Verify content structure changes completely

---

### Test 6: Spanish Language Test
**Location:** Header - language toggle (EN/ES)

- [ ] Click "ES" button to switch to Spanish
- [ ] Verify all content translates to Spanish
- [ ] Toggle between Recruiter and Tech Lead views
- [ ] Verify dual-mode content works in Spanish too:
  - [ ] Hero taglines change
  - [ ] Metrics change
  - [ ] Projects show Spanish recruiter/tech versions
  - [ ] Incidents show Spanish recruiter/tech versions

---

### Test 7: Persistence Test
- [ ] Toggle to Recruiter view
- [ ] Refresh the page (F5 or Cmd+R)
- [ ] Verify view mode persists (should stay in Recruiter view)
- [ ] Toggle back to Tech Lead view
- [ ] Refresh again
- [ ] Verify it persists as Tech Lead view

---

## 🔍 What to Look For

### ✅ CORRECT Behavior:
- Content changes **instantly** when toggling
- Different **text content** (not just styling)
- Architecture sections appear/disappear
- Severity badges appear/disappear
- Metrics show different icons and values
- Section titles change
- Layout remains consistent and professional

### ❌ INCORRECT Behavior:
- Content doesn't change when toggling
- Only colors/styling change (content stays same)
- Layout breaks or looks weird
- Console errors appear
- Toggle button doesn't work
- Text is cut off or overlapping

---

## 📸 Screenshot Checklist

Take screenshots of:
1. **Tech Lead View** - Full page
2. **Recruiter View** - Full page
3. **Metrics section** - Both views side by side
4. **Project card** - Both views showing architecture visibility difference
5. **Incident card** - Both views showing severity badge difference

---

## 🐛 If Something Doesn't Work

### Check Browser Console:
1. Open browser DevTools (F12 or Cmd+Option+I)
2. Go to Console tab
3. Look for errors (red text)
4. Report any errors you see

### Common Issues:
- **Content not changing:** Make sure you're clicking the ViewToggle button (not theme or language toggle)
- **Layout broken:** Try different screen sizes (mobile, tablet, desktop)
- **Spanish not working:** Make sure both toggles work independently

---

## ✅ Success Criteria

All tests pass when:
- ✅ Toggle button works smoothly
- ✅ Hero section shows different taglines
- ✅ Metrics show different icons and values
- ✅ Project cards hide/show architecture
- ✅ Incident cards hide/show severity badges
- ✅ Content is truly different (not just styled)
- ✅ Works in both English and Spanish
- ✅ View mode persists after refresh
- ✅ No console errors
- ✅ Layout looks professional in both modes

---

## 📊 Expected Results

**You should see REAL content differences, like:**

### Example: API Gateway Project

**Tech Lead:**
```
Problem: Multiple internal services needed unified authentication,
rate limiting, and request routing without duplicating logic.

Solution: Built a centralized API gateway in Go with JWT validation,
Redis-backed rate limiting, and dynamic routing configuration.

[Architecture diagram shown]
```

**Recruiter:**
```
Challenge: Multiple systems needed a secure way to communicate
without repeating security code in each one.

What I Did: Built a central security gateway that handles
authentication and manages traffic for all internal services.

Technologies: Go, Redis, Docker, SQL

[NO Architecture diagram]
```

---

**Happy Testing! 🎉**

If everything works as described above, the implementation is complete and ready for production!
