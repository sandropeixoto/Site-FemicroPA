# Project GEMINI.md - Site-FemicroPA

## 📋 Project Overview
**Femicro-PA** is a modern landing page for the Federação das Micro e Pequenas Empresas do Pará. The project aims to provide a high-performance, visually appealing interface to represent the federation and its services to the entrepreneurship community in Pará, Brazil.

- **Primary Domain:** Frontend / Landing Page
- **Main Goal:** Professional institutional representation and service showcase.
- **Language:** UI in Portuguese (PT-BR), Code/Comments in English.

---

## 🏗️ Technical Stack

- **Framework:** React 19 (Latest)
- **Build Tool:** Vite 8 (Modern ESM-first)
- **Styling:** TailwindCSS 4 (Utility-first with @theme configuration)
- **Animations:** Framer Motion (Complex UI transitions)
- **Icons:** Lucide React
- **SEO:** React Helmet Async
- **Agent Architecture:** Antigravity Kit (20+ Specialist Agents, 36+ Skills)

---

## 📂 Project Structure

```plaintext
site-femicropa/
├── .agent/              # Antigravity Kit (Agents, Skills, Workflows)
├── public/              # Static assets (favicons, persistent images)
├── src/
│   ├── assets/          # Project-specific images and logos
│   ├── components/      # Functional UI components (Navbar, Hero, etc.)
│   ├── App.jsx          # Main application layout and routing
│   ├── main.jsx         # Entry point and providers (HelmetProvider)
│   └── index.css        # Tailwind 4 configuration and global styles
└── vite.config.js       # Vite configuration with React plugin
```

---

## 🛠️ Key Commands

- **Development:** `npm run dev` (Starts Vite dev server)
- **Build:** `npm run build` (Generates optimized production build in `/dist`)
- **Linting:** `npm run lint` (Runs ESLint)
- **Validation:** `python .agent/scripts/checklist.py .` (Runs core project audits)

---

## 🎨 Development Conventions

### 1. Styling (Tailwind 4)
- Use the custom theme variables defined in `src/index.css` (`--color-primary`, `--color-secondary`, `--color-accent`).
- Prefer the `.glass-card` utility for modular UI elements.
- Theme: Navy Blue (#0A2540), Emerald Green (#10B981), Cyan Accent (#00D1FF).

### 2. Components
- Components are functional and located in `src/components/`.
- Use `framer-motion` for all section transitions and interactive elements.
- Ensure mobile responsiveness (mobile-first approach).

### 3. Agent Protocol (CRITICAL)
- **MANDATORY:** Always check `.agent/rules/gemini.md` before implementation.
- Use `frontend-specialist` for UI/UX changes.
- Use `orchestrator` for cross-cutting changes.
- Follow the **Socratic Gate** (Ask before complex builds).

### 4. Code Standards
- **SOLID & Clean Code:** Mandatory for all new components.
- **Testing:** Verify changes visually and through linting.
- **Commits:** Commit messages MUST be in English.

---

## 🚀 Deployment
The project is configured for deployment via GitHub Actions (see `.github/workflows/deploy.yml`). It uses `vite build` and deploys the static files (likely to GitHub Pages as per `CNAME` presence).

---

## 🛡️ Antigravity Kit Integration
This project features a deep integration with the **Antigravity Kit**. Before starting any major task:
1. Identify the domain (Frontend, Backend, SEO, etc.).
2. Read the corresponding agent file in `.agent/agents/`.
3. Apply the domain-specific skills from `.agent/skills/`.
4. Run `checklist.py` before finalizing any change.
