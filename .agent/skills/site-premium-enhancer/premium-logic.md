# Premium Logic (Site-FemicroPA Standard)

## 🎨 Visual Identity

| Element | Specification | Tailwind Classes |
|---------|---------------|------------------|
| **Background** | Deep Midnight Blue | `bg-[#0a0f1e]` |
| **Glass Card** | Blur + Transparent White | `backdrop-blur-md bg-white/5 border border-white/10` |
| **Gradients** | Subtle slate/navy | `bg-slate-950/20`, `from-slate-900 via-[#0a0f1e] to-slate-900` |
| **Primary Accents** | Emerald or Cyan | `text-emerald-400`, `bg-cyan-500` |
| **No Purple** | 🚫 **BANNED** | No `#8B5CF6`, `bg-purple-*`, `text-violet-*` |

## 📐 Layout & Structure

1. **Sticky Navbar**: Must have `backdrop-blur-md` and `bg-slate-950/80`.
2. **Hero Section**:
   - Dynamic headline with `framer-motion`.
   - Clear CTAs with hover lifting effect (`hover:-translate-y-1`).
   - Image overlay with custom gradient to ensure text readability.
3. **Typography**:
   - `font-inter` (or any modern Sans-serif).
   - High contrast for accessibility.
   - Generous tracking for headings.

## 🛠️ Performance & SEO

- **Lazy Loading**: Use `loading="lazy"` for all images.
- **Alt Tags**: Mandatory for all images.
- **Semantic HTML**: `<header>`, `<main>`, `<footer>`, `<section>`, `<article>`.
- **Core Web Vitals**: Minimize CLS by setting fixed height/width on image containers.
