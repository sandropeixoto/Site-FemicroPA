# Femicro-PA: O Futuro do Empreendedorismo Paraense

Este é o site institucional da **Femicro-PA** (Federação das Micro e Pequenas Empresas do Pará), desenvolvido para fortalecer a presença digital da federação e facilitar o processo de associação de micro e pequenos empreendedores no estado.

## 🚀 Tecnologias Utilizadas

Este projeto utiliza o que há de mais moderno no ecossistema frontend:

- **React 19:** Última versão estável para uma interface reativa e performática.
- **Vite 8:** Build tool ultra-rápida.
- **Tailwind CSS 4:** Estilização baseada em utilitários com as novas funcionalidades de tema.
- **Framer Motion:** Animações fluidas e interações premium.
- **React Hook Form + Zod:** Validação de formulários robusta e tipada.
- **Lucide React:** Conjunto de ícones consistentes e leves.
- **Mail Proxy:** Integração segura para envio de e-mails via API proxy.

## ✨ Funcionalidades

- **Design Premium:** Interface moderna com efeito Glassmorphism.
- **Responsividade Total:** Otimizado para dispositivos móveis, tablets e desktops.
- **Formulário de Associação:** Sistema de pedido de associação com:
  - Máscaras dinâmicas de CNPJ e Telefone.
  - Validação em tempo real.
  - Feedback visual de carregamento, sucesso e erro.
- **SEO Otimizado:** Uso de `react-helmet-async` para metadados e indexação.
- **Arquitetura Antigravity Kit:** Estrutura modular de agentes e skills para manutenção assistida por IA.

## 🛠️ Comandos Disponíveis

No diretório do projeto, você pode executar:

| Comando | Descrição |
| :--- | :--- |
| `npm install` | Instala todas as dependências do projeto. |
| `npm run dev` | Inicia o servidor de desenvolvimento em `localhost`. |
| `npm run build` | Cria a versão de produção na pasta `dist/`. |
| `npm run lint` | Executa o ESLint para verificar a qualidade do código. |
| `npm run preview` | Visualiza localmente o build de produção. |

## 📁 Estrutura do Projeto

```plaintext
src/
├── assets/          # Imagens, logotipos e vetores.
├── components/      # Componentes UI reutilizáveis (Hero, Navbar, Contact, etc.).
├── App.jsx          # Componente principal e layout.
├── main.jsx         # Ponto de entrada da aplicação.
└── index.css        # Configurações globais do Tailwind 4.
```

## 🌐 Deployment

O deploy é realizado automaticamente via **GitHub Actions** sempre que um push é feito na branch `main`. O site é hospedado no GitHub Pages sob o domínio:
👉 [femicropa.com.br](https://femicropa.com.br)

## 📄 Licença

Este projeto é de uso exclusivo da Federação das Micro e Pequenas Empresas do Pará (Femicro-PA).

---
Desenvolvido com foco no fortalecimento do empreendedorismo paraense. 🇧🇷
