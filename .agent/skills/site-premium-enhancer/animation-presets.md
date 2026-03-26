# Animation Presets (Framer Motion)

Use these variants for a consistent premium feel.

## 📦 Container Variants (Stagger)

```javascript
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};
```

## 📄 Item Variants (FadeInUp)

```javascript
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};
```

## 🎈 Floating Effect

```javascript
export const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
  },
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};
```

## 🖱️ Hover Effects

- **Scale & Lift**: `whileHover={{ scale: 1.05, y: -5 }}`
- **Glow transition**: Use Tailwind `transition-all duration-300` + `hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]` (for emerald).
