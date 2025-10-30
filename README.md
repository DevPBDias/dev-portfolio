## Portfólio — Next.js, React 19 e Tailwind CSS

Aplicação de portfólio moderna, responsiva e performática construída com Next.js 15, React 19 e Tailwind CSS 4. O projeto traz seções de apresentação inicial, sobre, projetos em destaque, outros projetos e contato, além de temas visuais com animações sutis e componentes reutilizáveis.

### Demonstração ao vivo

A aplicação foi hospedada na Vercel e o link do portfolio é este: `https://portfolio-v-final-plum.vercel.app`.

---

### Principais recursos

- **Temas dinâmicos**: `ForestMoon`, `SeaSky`, `CyberCity`, com context de tema e transições suaves.
- **UI moderna**: Tailwind CSS, animações com Framer Motion e microinterações.
- **Seção de Projetos**: cartões de projetos em destaque e outros projetos, com links para demo e código.
- **Acessibilidade e responsividade**: imagens otimizadas com `next/image`, design responsivo e foco em LCP.
- **Arquitetura organizada**: componentes modulares em `src/_components` e dados em `src/constants`.

---

### Stack

- **Framework**: Next.js `15.5.6` (App Router)
- **Linguagem**: TypeScript `^5`
- **UI**: Tailwind CSS `^4`, `tailwindcss-animate`, `tailwind-merge`
- **Animações**: `framer-motion` e `motion`
- **Ícones**: `lucide-react`
- **React**: `19.1.0`

Requisitos recomendados: Node.js `>= 18.17`.

---

### Estrutura do projeto

```
src/
  app/                 # App Router (layout, página inicial, estilos globais)
  _components/         # Componentes de UI por seção
    _hero/             # Hero (títulos, CTAs, orbit techs, etc.)
    about/             # Sobre (skills, valores, estatísticas, etc.)
    projects/          # Projetos (cards e grids)
    contact/           # Contato (redes, info)
    floating-navbar/   # Navbar/flutuantes e tema
    main-page/         # Conteúdo e fundos por tema
  components/ui/       # Componentes base (ex.: carousel)
  constants/           # Dados de contato, techs e projetos
  context/             # Contexto de tema (ThemeContext)
  themes/              # Implementações visuais de temas
  lib/                 # Utilitários
public/                # Imagens, ícones, sons e arquivos estáticos
```

---

### Instalação e uso

1. Instalar dependências (recomendado usar `npm ci` para lockfile determinístico):

```bash
npm ci
```

2. Ambiente de desenvolvimento:

```bash
npm run dev
```

Abra `http://localhost:3000`.

3. Build de produção:

```bash
npm run build
```

4. Servir o build de produção localmente:

```bash
npm start
```

5. Lint:

```bash
npm run lint
```

### Dados e conteúdo

- Os projetos e tecnologias são definidos em `src/constants/projects-data.ts` e `src/constants/techs-data.tsx`.
- Ícones e imagens estão em `public/icons` e `public/images`.
- O currículo está em `public/cv/PauloBruno_CV.pdf`.

---

### Licença

Uso livre para fins pessoais/portfólio. Para uso comercial, adapte conforme necessário e inclua créditos de terceiros (ícones, imagens) quando aplicável.

---

### Créditos

- Ícones: `lucide-react`.
- Tecnologias e imagens diversas: pasta `public/`.
- Framework e ferramentas: Next.js, React, Tailwind CSS, Framer Motion.
