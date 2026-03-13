# Design Spec: Reestruturação Cortinas — 3 Níveis de Hierarquia

**Data:** 2026-03-13
**Projeto:** Stylo Decore
**Stack:** Next.js 16.1.6, React 19, TypeScript, Tailwind CSS v4

---

## Objetivo

Reestruturar a seção Cortinas de hierarquia plana (2 níveis) para 3 níveis, organizando em 4 grupos: Tipos de Pregas, Tipos de Acabamento, Suportes e Ferragens, e Modelos.

**Escopo desta entrega:** Página mãe atualizada + subpágina "Tipos de Pregas" + sub-subpágina "Prega Americana".

---

## Estrutura de URLs

### Antes
```
/cortinas
  /cortinas/prega-americana
  /cortinas/ilhos
  /cortinas/wave
  /cortinas/blackout-acusticas
  /cortinas/varao
  /cortinas/tecido  ← no nav atual mas sem página criada
```

### Depois (esta entrega)
```
/cortinas                                         ← atualizada (4 grupos)
  /cortinas/tipos-de-pregas                       ← nova
    /cortinas/tipos-de-pregas/prega-americana     ← movida de /cortinas/prega-americana
  /cortinas/tipos-de-acabamento                   ← link no nav (futuro)
  /cortinas/suportes-e-ferragens                  ← link no nav (futuro)
  /cortinas/modelos                               ← link no nav (futuro)
```

---

## Redirects

Mecanismo: **`next.config.ts` apenas** (edge-level, antes de qualquer avaliação de página).

| De | Para | Código |
|----|------|--------|
| `/cortinas/prega-americana` | `/cortinas/tipos-de-pregas/prega-americana` | 301 |

O arquivo `src/app/cortinas/prega-americana/page.tsx` será **deletado** (não substituído por redirect no código).

Rotas `/cortinas/ilhos`, `/cortinas/wave`, `/cortinas/blackout-acusticas`, `/cortinas/varao` permanecem intactas. Nenhuma delas referencia `CORTINAS_SUBCATEGORIES` para resolver dados de produto — cada uma passa seus produtos diretamente via `CORTINA_PRODUCTS["ilhos"]` etc., portanto a substituição de `CORTINAS_SUBCATEGORIES` não as afeta.

---

## Navegação (Header — `constants.ts`)

Dropdown Cortinas substituído por 4 grupos. `/cortinas/tecido` (item atual sem página correspondente) é removido:

```
Tipos de Pregas        → /cortinas/tipos-de-pregas
Tipos de Acabamento    → /cortinas/tipos-de-acabamento
Suportes e Ferragens   → /cortinas/suportes-e-ferragens
Modelos                → /cortinas/modelos
```

---

## Dados (`src/lib/data.ts`)

### `CORTINAS_SUBCATEGORIES` — substituído

4 grupos com todos os campos obrigatórios de `SubcategoryItem`:

```ts
[
  {
    name: "Tipos de Pregas",
    href: "/cortinas/tipos-de-pregas",
    image: "/images/cortinas/cortina-prega-hero-desktop.png",  // hero da CategoryPage
    description: "Prega Americana, Prega Macho, Wave e Franzida",
  },
  {
    name: "Tipos de Acabamento",
    href: "/cortinas/tipos-de-acabamento",
    image: "/images/cortinas/blackout-01.jpg",
    description: "Barra larga, forro e blackout em diversas porcentagens",
  },
  {
    name: "Suportes e Ferragens",
    href: "/cortinas/suportes-e-ferragens",
    image: "/images/cortinas/cortina-26.jpg",
    description: "Varão, trilho suíço e trilho motorizado",
  },
  {
    name: "Modelos",
    href: "/cortinas/modelos",
    image: "/images/cortinas/wave-01.jpg",
    description: "Tradicional, com forro, dupla e piso-teto",
  },
]
```

> As imagens reutilizam fotos já existentes no projeto. A primeira entrada (`tipos-de-pregas`) determina a imagem do hero da `CategoryPage`.

### `CORTINAS_TIPOS_PREGAS` — novo

```ts
[
  {
    name: "Prega Americana",
    href: "/cortinas/tipos-de-pregas/prega-americana",
    image: "/images/cortinas/prega-americana-desktop-01.jpg",
    description: "Estilo clássico com pregas elegantes e bem definidas",
  },
  {
    name: "Prega Macho",
    href: "/cortinas/tipos-de-pregas/prega-macho",
    image: "/images/cortinas-prega-americana.jpg",  // placeholder até foto específica
    description: "Pregas triplas estruturadas para um visual sofisticado",
    comingSoon: true,  // ver tratamento abaixo
  },
  {
    name: "Prega Wave",
    href: "/cortinas/tipos-de-pregas/prega-wave",
    image: "/images/cortinas-wave.jpg",
    description: "Caimento suave em ondas uniformes e contemporâneas",
    comingSoon: true,
  },
  {
    name: "Cortina Franzida",
    href: "/cortinas/tipos-de-pregas/cortina-franzida",
    image: "/images/cortinas/wave-02.jpg",  // placeholder
    description: "Franzido clássico com volume e leveza",
    comingSoon: true,
  },
]
```

**Tratamento de cards "em breve"** (Prega Macho, Wave, Franzida): os cards na página `/cortinas/tipos-de-pregas` devem renderizar como `<div>` (não `<Link>`) quando `comingSoon: true`, com overlay `"Em breve"`. Usar `<Link>` com `pointer-events-none` deixaria a URL morta acessível via DOM e crawlável. A prop `comingSoon?: boolean` é adicionada à interface `SubcategoryItem` **local de `CategoryPage.tsx`** (linhas 11–19) — não em `src/types/index.ts`, que tem uma interface `Subcategory` diferente e não unificada.

---

## Componentes Reutilizados

| Componente | Usado em |
|------------|----------|
| `CategoryPage` | `/cortinas` e `/cortinas/tipos-de-pregas` |
| `SubcategoryPage` | `/cortinas/tipos-de-pregas/prega-americana` |

`CategoryPage` recebe a nova prop `comingSoon` nos items via `SubcategoryItem` e renderiza `<div>` com overlay "Em breve" quando `true` (em vez de `<Link>`).

---

## Arquivos

### Criar
- `src/app/cortinas/tipos-de-pregas/page.tsx` — CategoryPage com `CORTINAS_TIPOS_PREGAS`
- `src/app/cortinas/tipos-de-pregas/prega-americana/page.tsx` — SubcategoryPage com canonical `/cortinas/tipos-de-pregas/prega-americana` e breadcrumb de 4 níveis

### Deletar
- `src/app/cortinas/prega-americana/page.tsx` — substituído pelo redirect em `next.config.ts`

### Modificar
- `src/lib/data.ts` — substituir `CORTINAS_SUBCATEGORIES`, adicionar `CORTINAS_TIPOS_PREGAS`
- `src/lib/constants.ts` — atualizar NAVIGATION Cortinas
- `src/app/cortinas/page.tsx` — usar novo `CORTINAS_SUBCATEGORIES`
- `next.config.ts` — adicionar redirect permanente
- `src/components/sections/CategoryPage.tsx` — adicionar `comingSoon?: boolean` em `SubcategoryItem` e overlay visual

---

## SEO

- **Canonical:** `/cortinas/tipos-de-pregas/prega-americana` (não `/cortinas/prega-americana`)
- **Breadcrumb JSON-LD:** 4 níveis — `Home > Cortinas > Tipos de Pregas > Prega Americana`
  - `getBreadcrumbJsonLd` já aceita array variável, apenas passar 4 itens
- **Redirect 301:** preserva link equity da URL antiga
- **Nav `/cortinas/tecido`:** removido (item sem página correspondente, link morto)

### FAQ
- `/cortinas` — continua usando `CORTINAS_FAQ_KEYS`
- `/cortinas/tipos-de-pregas` — usa `CORTINAS_FAQ_KEYS` (mesmo array, reutilização adequada)

---

## Fora do Escopo

- Páginas de Prega Macho, Prega Wave, Cortina Franzida
- Grupos Acabamentos, Suportes, Modelos e seus itens internos
- Redirects de `/cortinas/wave` → `/cortinas/tipos-de-pregas/prega-wave` (futuro, quando a página existir)
- Alterações em outras categorias
