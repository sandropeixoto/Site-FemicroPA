---
name: site-premium-enhancer
description: Automatic premium site enhancement based on the Site-FemicroPA standard. Scans, improves, and suggests UI/UX and technical refinements.
skills: [frontend-design, tailwind-patterns, clean-code]
---

# Site Premium Enhancer (Site-FemicroPA Standard)

> **Philosophy:** High performance meets premium aesthetic. Glassmorphism, dark themes, and buttery-smooth animations are mandatory.

## 🎯 Selective Reading Rule

| File | Status | When to Read |
|------|--------|--------------|
| [premium-logic.md](premium-logic.md) | 🔴 **REQUIRED** | Core enhancement rules |
| [animation-presets.md](animation-presets.md) | ⚪ Optional | Specific Framer Motion configs |

---

## 🛠️ Automated Workflow: "The Premium Sweep"

When this skill is activated, you MUST follow these steps autonomously:

### 1. Analysis & Scan (The "Sweep")
Scan the codebase to identify the current stack and structure:
- Check `package.json` for dependencies (Vite, React, Framer Motion, Tailwind, Lucide).
- Identify entry points: `index.html`, `src/App.jsx`, `src/main.jsx`.
- Map components in `src/components/`.
- Check for styling in `src/index.css` or `tailwind.config.js`.

### 2. Premium Audit (The "Gap Analysis")
Compare the current state against the **Site-FemicroPA Premium Standard**:

| Requirement | Standard | Priority |
|-------------|----------|----------|
| **Theme** | Dark Premium (#0a0f1e) | High |
| **Glassmorphism** | `backdrop-blur`, `bg-white/5`, `border-white/10` | High |
| **Animations** | `framer-motion` (stagger, float, whileInView) | High |
| **Icons** | Lucide React | Medium |
| **Colors** | No Purple/Violet. Emerald/Cyan accents. | CRITICAL |
| **Responsiveness** | Mobile-first, container queries. | High |
| **SEO** | Meta tags, semantic HTML. | Medium |

### 3. Implementation (The "Enhancement")
Apply the improvements directly to the code:
- Update CSS utilities for glass-card and premium gradients.
- Inject `framer-motion` into components.
- Fix color choices to align with the "No Purple" rule.
- Ensure 100% responsiveness.

### 4. Continuous Improvement (The "Suggestions")
Generate or update `SUGGESTIONS.md` in the root directory.
This file MUST contain:
- Further UX/UI ideas.
- Performance optimization tips.
- Content improvement suggestions (SEO/Copywriting).
- Technical debt warnings.

---

## 🎨 Design Tokens (Site-FemicroPA)

### Glass Card Utility (Example for `index.css`)
```css
.glass-card {
  @apply backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-xl;
}
```

### Premium Gradient
```css
.premium-gradient {
  @apply bg-gradient-to-br from-slate-900 via-[#0a0f1e] to-slate-900;
}
```

### Framer Motion Presets
- **FadeInDown:** `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}`
- **Floating:** `animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4 }}`

---

## 🚦 Activation Prompt
"Use a skill de site-premium-enhancer para auditar e melhorar o site atual."
*The agent should immediately start the 4-step workflow.*
