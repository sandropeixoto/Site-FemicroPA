# 🧠 Template de Prompt — Site Institucional Premium

> Use este template para solicitar a uma IA a criação de um site com o mesmo stack, estilo e qualidade do Site-FemicroPA.
> Substitua todos os campos `[ENTRE COLCHETES]` antes de enviar.

---

````markdown
Crie um site institucional premium para [NOME DA ORGANIZAÇÃO].

## Stack Técnica
- Vite + React (JSX)
- Tailwind CSS com utilities customizadas (glass-card, gradientes)
- Framer Motion para animações
- Lucide React para ícones
- Deploy configurado para GitHub Pages via `gh-pages`

## Estilo Visual (obrigatório)
- Tema **dark premium** com fundo `#0a0f1e` (azul-noite profundo)
- Efeito **glassmorphism**: cards com `backdrop-blur`, `bg-white/5`, `border border-white/10`
- **Gradientes sutis** em seções alternadas (ex: `bg-slate-950/20`)
- Paleta: primária escura + cor de destaque em `emerald/secondary` + `cyan/accent`
- Tipografia moderna (Inter ou similar via Google Fonts)
- Sem cores roxas/violetas

## Animações (obrigatório)
- `framer-motion` com `initial/animate/whileInView` em todos os cards
- Elementos flutuantes com `animate={{ y: [0, -20, 0] }}` loop infinito
- `transition={{ delay: idx * 0.1 }}` para efeito stagger em listas
- Hover effects com `group` + `group-hover:` no Tailwind

## Seções Necessárias
1. **Navbar** – sticky com blur, logo + links âncora, CTA button
2. **Hero** – fullscreen, imagem de fundo com overlay gradient, headline + subheadline + 2 CTAs, card glass lateral com elemento de destaque
3. **Serviços** – grid responsivo de cards glass com ícone, título e descrição
4. **Parceiros** – logos em grid ou carrossel
5. **Sobre** – texto + stats numéricos animados + imagem
6. **Materiais/Recursos** – cards de download ou links externos
7. **Social/Instagram** – embed de posts recentes
8. **Contato** – formulário funcional com validação
9. **Footer** – links, redes sociais, copyright

## Informações da Organização
- Nome: [NOME]
- Missão: [MISSÃO EM 1 FRASE]
- Público-alvo: [QUEM SÃO]
- Cores institucionais preferidas: [COR 1, COR 2]
- Logo: [DESCREVER OU ANEXAR]
- Links sociais: [INSTAGRAM, FACEBOOK, etc.]

## Requisitos Técnicos
- 100% responsivo (mobile-first)
- SEO básico (meta tags, títulos semânticos)
- Estrutura de componentes separados em `src/components/`
- Assets em `src/assets/`
- `vite.config.js` com `base: '/NOME-DO-REPO/'` para GitHub Pages
- Script `deploy` no `package.json` usando `gh-pages -d dist`
- Commits em inglês seguindo Conventional Commits
````

---

## 💡 Dicas de Uso

1. **Quanto mais contexto, melhor** — preencha todos os campos de "Informações da Organização"
2. **Anexe a logo** se possível, ou descreva cores e formato
3. **Liste as seções que NÃO precisa** para o agente não criá-las desnecessariamente
4. **Referencie este projeto** dizendo: *"use o Site-FemicroPA como referência de estilo"*
