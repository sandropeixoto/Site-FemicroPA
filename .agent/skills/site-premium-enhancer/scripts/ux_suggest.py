import os
import re

def audit_project(root_dir):
    suggestions = []
    
    # 1. Check for SEO
    if not os.path.exists(os.path.join(root_dir, 'src', 'components', 'SEO.jsx')):
        suggestions.append("- [SEO] Falta um componente dedicado para Meta Tags (React Helmet).")
    
    # 2. Check for Framer Motion usage in components
    components_dir = os.path.join(root_dir, 'src', 'components')
    if os.path.exists(components_dir):
        for file in os.listdir(components_dir):
            if file.endswith('.jsx'):
                with open(os.path.join(components_dir, file), 'r') as f:
                    content = f.read()
                    if 'framer-motion' not in content:
                        suggestions.append(f"- [UX] O componente `{file}` não utiliza animações do `framer-motion`.")

    # 3. Check for image alt tags
    src_dir = os.path.join(root_dir, 'src')
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith('.jsx'):
                with open(os.path.join(root, file), 'r') as f:
                    content = f.read()
                    # Simple regex to find <img> without alt
                    if '<img' in content and 'alt=' not in content:
                         suggestions.append(f"- [Acessibilidade] Detectadas imagens sem atributo `alt` em `{file}`.")

    # 4. Check for Dark Theme in index.css
    css_file = os.path.join(root_dir, 'src', 'index.css')
    if os.path.exists(css_file):
        with open(css_file, 'r') as f:
            content = f.read()
            if '#0a0f1e' not in content:
                suggestions.append("- [UI] O fundo `#0a0f1e` (Site-FemicroPA Standard) não foi detectado no `index.css`.")

    return suggestions

if __name__ == "__main__":
    current_dir = os.getcwd()
    results = audit_project(current_dir)
    
    with open('SUGGESTIONS.md', 'w') as f:
        f.write("# 🚀 Sugestões de Melhoria Premium\n\n")
        f.write("Esta auditoria automática identificou os seguintes pontos para elevar o nível do site:\n\n")
        if results:
            for s in results:
                f.write(f"{s}\n")
        else:
            f.write("✅ Tudo em conformidade com o padrão Site-FemicroPA Premium!\n")
        
    print("Audit details written to SUGGESTIONS.md")
