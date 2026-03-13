# Cortinas Reestruturação — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reestruturar a seção Cortinas de hierarquia plana (2 níveis) para 3 níveis, criando a página mãe com 4 grupos, a subpágina "Tipos de Pregas" e a sub-subpágina "Prega Americana", com redirect 301 da URL antiga.

**Architecture:** Reutilização dos componentes `CategoryPage` e `SubcategoryPage` existentes. A única alteração de componente é a adição da prop `comingSoon` em `CategoryPage`. Novos dados em `data.ts`, nav atualizada em `constants.ts`, redirect em `next.config.ts`.

**Tech Stack:** Next.js 16.1.6, React 19, TypeScript, Tailwind CSS v4. Sem biblioteca de testes — verificação via `npx tsc --noEmit` e `npm run build`.

**Spec:** `docs/superpowers/specs/2026-03-13-cortinas-reestruturacao-design.md`

---

## Chunk 1: Dados, Navegação e Redirect

### Task 1: Atualizar dados em `data.ts`

**Files:**
- Modify: `src/lib/data.ts`

- [ ] **Step 1: Substituir `CORTINAS_SUBCATEGORIES`**

Localizar o array `CORTINAS_SUBCATEGORIES` em `src/lib/data.ts` (começa na linha 72) e substituir por:

```ts
export const CORTINAS_SUBCATEGORIES = [
  {
    name: "Tipos de Pregas",
    href: "/cortinas/tipos-de-pregas",
    image: "/images/cortinas/cortina-prega-hero-desktop.png",
    description: "Prega Americana, Prega Macho, Wave e Franzida",
    descriptionKey: "card.cortinas.tipos-de-pregas",
  },
  {
    name: "Tipos de Acabamento",
    href: "/cortinas/tipos-de-acabamento",
    image: "/images/cortinas/blackout-01.jpg",
    description: "Barra larga, forro e blackout em diversas porcentagens",
    descriptionKey: "card.cortinas.tipos-de-acabamento",
  },
  {
    name: "Suportes e Ferragens",
    href: "/cortinas/suportes-e-ferragens",
    image: "/images/cortinas/cortina-26.jpg",
    description: "Varão, trilho suíço e trilho motorizado",
    descriptionKey: "card.cortinas.suportes-e-ferragens",
  },
  {
    name: "Modelos",
    href: "/cortinas/modelos",
    image: "/images/cortinas/wave-01.jpg",
    description: "Tradicional, com forro, dupla e piso-teto",
    descriptionKey: "card.cortinas.modelos",
  },
];
```

- [ ] **Step 2: Adicionar `CORTINAS_TIPOS_PREGAS` logo após `CORTINAS_SUBCATEGORIES`**

```ts
export const CORTINAS_TIPOS_PREGAS = [
  {
    name: "Prega Americana",
    href: "/cortinas/tipos-de-pregas/prega-americana",
    image: "/images/cortinas/prega-americana-desktop-01.jpg",
    description: "Estilo clássico com pregas elegantes e bem definidas",
    descriptionKey: "card.cortinas.prega-americana",
  },
  {
    name: "Prega Macho",
    href: "/cortinas/tipos-de-pregas/prega-macho",
    image: "/images/cortinas-prega-americana.jpg",
    description: "Pregas triplas estruturadas para um visual sofisticado",
    descriptionKey: "card.cortinas.prega-macho",
    comingSoon: true,
  },
  {
    name: "Prega Wave",
    href: "/cortinas/tipos-de-pregas/prega-wave",
    image: "/images/cortinas-wave.jpg",
    description: "Caimento suave em ondas uniformes e contemporâneas",
    descriptionKey: "card.cortinas.prega-wave",
    comingSoon: true,
  },
  {
    name: "Cortina Franzida",
    href: "/cortinas/tipos-de-pregas/cortina-franzida",
    image: "/images/cortinas/wave-02.jpg",
    description: "Franzido clássico com volume e leveza",
    descriptionKey: "card.cortinas.cortina-franzida",
    comingSoon: true,
  },
];
```

- [ ] **Step 3: Verificar tipagem**

```bash
cd "C:/Stylo Decore/stylo-decore" && npx tsc --noEmit
```

Esperado: sem erros relacionados a `data.ts`.

- [ ] **Step 4: Commit**

```bash
cd "C:/Stylo Decore/stylo-decore"
git add src/lib/data.ts
git commit -m "feat(cortinas): restructure data — 4 groups + tipos-de-pregas array"
```

---

### Task 2: Atualizar navegação em `constants.ts`

**Files:**
- Modify: `src/lib/constants.ts`

- [ ] **Step 1: Substituir children do item Cortinas no array `NAVIGATION`**

Localizar o bloco `label: "Cortinas"` em `src/lib/constants.ts` (linhas 43–51) e substituir os `children` por:

```ts
{
  label: "Cortinas",
  href: "/cortinas",
  children: [
    { label: "Tipos de Pregas", href: "/cortinas/tipos-de-pregas" },
    { label: "Tipos de Acabamento", href: "/cortinas/tipos-de-acabamento" },
    { label: "Suportes e Ferragens", href: "/cortinas/suportes-e-ferragens" },
    { label: "Modelos", href: "/cortinas/modelos" },
  ],
},
```

> Isso remove `/cortinas/tecido` (link morto) e os 4 itens antigos diretos.

- [ ] **Step 2: Verificar tipagem**

```bash
cd "C:/Stylo Decore/stylo-decore" && npx tsc --noEmit
```

Esperado: sem erros.

- [ ] **Step 3: Commit**

```bash
cd "C:/Stylo Decore/stylo-decore"
git add src/lib/constants.ts
git commit -m "feat(nav): update Cortinas dropdown to 4 group structure"
```

---

### Task 3: Adicionar redirect permanente em `next.config.ts`

**Files:**
- Modify: `next.config.ts`

- [ ] **Step 1: Adicionar função `redirects` no config**

Abrir `next.config.ts` e substituir pelo seguinte:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
    inlineCss: true,
  },
  compress: true,
  async redirects() {
    return [
      {
        source: "/cortinas/prega-americana",
        destination: "/cortinas/tipos-de-pregas/prega-americana",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
```

- [ ] **Step 2: Verificar build**

```bash
cd "C:/Stylo Decore/stylo-decore" && npm run build
```

Esperado: build concluído sem erros. O redirect deve aparecer na saída como rota de tipo `redirect`.

- [ ] **Step 3: Commit**

```bash
cd "C:/Stylo Decore/stylo-decore"
git add next.config.ts
git commit -m "feat(seo): add 301 redirect /cortinas/prega-americana → /cortinas/tipos-de-pregas/prega-americana"
```

---

## Chunk 2: Componente CategoryPage — suporte a `comingSoon`

### Task 4: Adicionar prop `comingSoon` e renderização correta

**Files:**
- Modify: `src/components/sections/CategoryPage.tsx`

- [ ] **Step 1: Adicionar `comingSoon?: boolean` à interface `SubcategoryItem`**

Localizar a interface `SubcategoryItem` (linhas 11–19) e adicionar o campo opcional:

```ts
interface SubcategoryItem {
  name: string;
  href: string;
  image: string;
  desktopImage?: string;
  cardImage?: string;
  description: string;
  descriptionKey?: string;
  comingSoon?: boolean;
}
```

- [ ] **Step 2: Substituir o render dos cards menores para tratar `comingSoon`**

Localizar o bloco `{subcategories.slice(1).map((item) => (` (linhas 166–190) e substituir por:

```tsx
{subcategories.slice(1).map((item) => (
  item.comingSoon ? (
    <div
      key={item.href}
      className="group relative overflow-hidden opacity-70 cursor-default"
    >
      <div className="aspect-[3/4]">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="mb-1 text-xl font-bold text-white">
          {t(item.href) || item.name}
        </h3>
        <p className="text-sm text-white/70">{item.descriptionKey ? t(item.descriptionKey) : item.description}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-background-dark">
          Em breve
        </span>
      </div>
    </div>
  ) : (
    <Link
      key={item.href}
      href={item.href}
      className="group relative overflow-hidden"
    >
      <div className="aspect-[3/4]">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="mb-1 text-xl font-bold text-white">
          {t(item.href) || item.name}
        </h3>
        <p className="text-sm text-white/70">{item.descriptionKey ? t(item.descriptionKey) : item.description}</p>
        <div className="mt-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-background-dark opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  )
))}
```

> Nota: o `key` foi movido para o elemento raiz em ambos os branches (`<div key>` e `<Link key>`). Remover o `key` do map externo se existia.

- [ ] **Step 3: Verificar tipagem**

```bash
cd "C:/Stylo Decore/stylo-decore" && npx tsc --noEmit
```

Esperado: sem erros.

- [ ] **Step 4: Build para confirmar renderização**

```bash
cd "C:/Stylo Decore/stylo-decore" && npm run build
```

Esperado: build limpo.

- [ ] **Step 5: Commit**

```bash
cd "C:/Stylo Decore/stylo-decore"
git add src/components/sections/CategoryPage.tsx
git commit -m "feat(CategoryPage): add comingSoon prop — renders div overlay instead of Link"
```

---

## Chunk 3: Páginas

### Task 5: Criar `/cortinas/tipos-de-pregas/page.tsx`

**Files:**
- Create: `src/app/cortinas/tipos-de-pregas/page.tsx`

- [ ] **Step 1: Criar o diretório**

```bash
mkdir -p "C:/Stylo Decore/stylo-decore/src/app/cortinas/tipos-de-pregas"
```

- [ ] **Step 2: Criar o arquivo**

```tsx
import type { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, getFaqJsonLd, CORTINAS_FAQ, CORTINAS_FAQ_KEYS } from "@/lib/seo";
import { CORTINAS_TIPOS_PREGAS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tipos de Pregas para Cortinas em Florianópolis | Stylo Decore",
  description:
    "Conheça os tipos de pregas para cortinas: Prega Americana, Prega Macho, Wave e Franzida. Soluções sob medida em Florianópolis e Região.",
  keywords: [
    "tipos de pregas para cortina",
    "prega americana",
    "prega macho",
    "cortina wave",
    "cortina franzida",
    "cortinas sob medida Florianópolis",
  ],
  alternates: { canonical: "/cortinas/tipos-de-pregas" },
  openGraph: {
    title: "Tipos de Pregas para Cortinas | Stylo Decore",
    description: "Prega Americana, Macho, Wave e Franzida sob medida em Florianópolis.",
    url: "/cortinas/tipos-de-pregas",
    images: [{ url: "/images/cortinas/cortina-prega-hero-desktop.png", width: 1200, height: 630, alt: "Tipos de Pregas - Stylo Decore" }],
  },
};

export default function TiposDePregasPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Tipos de Pregas", href: "/cortinas/tipos-de-pregas" },
      ])} />
      <JsonLd data={getFaqJsonLd(CORTINAS_FAQ)} />
      <CategoryPage
        title="Tipos de Pregas"
        titleKey="/cortinas/tipos-de-pregas"
        headline="Elegância no Detalhe"
        description="O tipo de prega define o caimento, o volume e a personalidade da cortina. Escolha o modelo ideal para o seu espaço."
        intro="Cada tipo de prega tem sua identidade: da formalidade clássica da Prega Americana à fluidez contemporânea da Wave. Na Stylo Decore ajudamos você a escolher o caimento perfeito para cada ambiente."
        subcategories={CORTINAS_TIPOS_PREGAS}
        faqItems={CORTINAS_FAQ_KEYS}
      />
    </>
  );
}
```

- [ ] **Step 3: Verificar tipagem**

```bash
cd "C:/Stylo Decore/stylo-decore" && npx tsc --noEmit
```

Esperado: sem erros.

- [ ] **Step 4: Commit**

```bash
cd "C:/Stylo Decore/stylo-decore"
git add src/app/cortinas/tipos-de-pregas/page.tsx
git commit -m "feat(cortinas): add /cortinas/tipos-de-pregas page"
```

---

### Task 6: Criar `/cortinas/tipos-de-pregas/prega-americana/page.tsx`

**Files:**
- Create: `src/app/cortinas/tipos-de-pregas/prega-americana/page.tsx`

- [ ] **Step 1: Criar o diretório**

```bash
mkdir -p "C:/Stylo Decore/stylo-decore/src/app/cortinas/tipos-de-pregas/prega-americana"
```

- [ ] **Step 2: Criar o arquivo**

Conteúdo baseado na página existente em `/cortinas/prega-americana`, com canonical e breadcrumb atualizados:

```tsx
import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina Prega Americana sob Medida em Florianópolis",
  description: "Cortina Prega Americana sob medida com pregas elegantes em Florianópolis e Região. Estilo clássico atemporal.",
  alternates: { canonical: "/cortinas/tipos-de-pregas/prega-americana" },
  openGraph: {
    title: "Cortina Prega Americana sob Medida | Stylo Decore",
    description: "Cortina Prega Americana sob medida. Estilo clássico e atemporal em Florianópolis.",
    url: "/cortinas/tipos-de-pregas/prega-americana",
  },
};

export default function PregaAmericanaPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Tipos de Pregas", href: "/cortinas/tipos-de-pregas" },
        { name: "Prega Americana", href: "/cortinas/tipos-de-pregas/prega-americana" },
      ])} />
      <SubcategoryPage
        title="Prega Americana"
        category="Cortinas"
        titleKey="/cortinas/prega-americana"
        categoryKey="/cortinas"
        description="Estilo clássico com pregas elegantes e bem definidas. A cortina com prega americana é perfeita para quem busca requinte e tradição na decoração."
        heroImage="/images/cortinas/cortina-prega-hero-desktop.png"
        products={CORTINA_PRODUCTS["prega-americana"]}
        desktopImageClass="hidden lg:block w-full aspect-[3/4] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        mobileImageClass="lg:hidden w-full aspect-[3/4] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        videoSrc="/videos/processo-cortinas.mp4"
        videoTitle="video.processo.title"
        videoCaption="video.processo.caption"
        videoFeatures={[
          { icon: "ruler", label: "video.processo.feat.medicao" },
          { icon: "scissors", label: "video.processo.feat.pontos" },
          { icon: "shirt", label: "video.processo.feat.caimento" },
        ]}
      />
    </>
  );
}
```

- [ ] **Step 3: Verificar tipagem**

```bash
cd "C:/Stylo Decore/stylo-decore" && npx tsc --noEmit
```

Esperado: sem erros.

- [ ] **Step 4: Commit**

```bash
cd "C:/Stylo Decore/stylo-decore"
git add src/app/cortinas/tipos-de-pregas/prega-americana/page.tsx
git commit -m "feat(cortinas): add /cortinas/tipos-de-pregas/prega-americana page"
```

---

### Task 7: Deletar `/cortinas/prega-americana/page.tsx`

**Files:**
- Delete: `src/app/cortinas/prega-americana/page.tsx`

> O redirect em `next.config.ts` (Task 3) substitui esta página. Manter o arquivo criaria uma rota Next.js que compete com o redirect.

- [ ] **Step 1: Deletar o arquivo**

```bash
rm "C:/Stylo Decore/stylo-decore/src/app/cortinas/prega-americana/page.tsx"
```

- [ ] **Step 2: Verificar que o diretório ficou vazio e remover**

```bash
rmdir "C:/Stylo Decore/stylo-decore/src/app/cortinas/prega-americana"
```

- [ ] **Step 3: Build final — verifica redirect, nova rota e ausência de conflito**

```bash
cd "C:/Stylo Decore/stylo-decore" && npm run build
```

Esperado: build limpo. Rota `/cortinas/prega-americana` deve aparecer como `redirect` na saída, e `/cortinas/tipos-de-pregas/prega-americana` como página estática.

- [ ] **Step 4: Commit**

```bash
cd "C:/Stylo Decore/stylo-decore"
git add -A
git commit -m "feat(cortinas): delete old prega-americana page — replaced by 301 redirect"
```

---

### Task 8: Atualizar `/cortinas/page.tsx`

**Files:**
- Modify: `src/app/cortinas/page.tsx`

> A página mãe já usa `CORTINAS_SUBCATEGORIES` via import. Como o array foi substituído na Task 1, a página passa a exibir automaticamente os 4 grupos. Apenas verificar que não há referências hardcoded ao conteúdo antigo.

- [ ] **Step 1: Abrir e inspecionar `src/app/cortinas/page.tsx`**

Confirmar que o único dado de subcategorias vem de `CORTINAS_SUBCATEGORIES` (import de `@/lib/data`). Nenhum dado hardcoded deve existir.

- [ ] **Step 2: Build final completo**

```bash
cd "C:/Stylo Decore/stylo-decore" && npm run build
```

Esperado: build limpo, 0 erros de TypeScript, rotas esperadas presentes.

- [ ] **Step 3: Commit (apenas se houver mudanças)**

```bash
cd "C:/Stylo Decore/stylo-decore"
git add src/app/cortinas/page.tsx
git commit -m "feat(cortinas): page.tsx now shows 4 group structure via updated CORTINAS_SUBCATEGORIES"
```

---

## Verificação Final

Após todas as tasks, confirmar:

| URL | Comportamento esperado |
|-----|----------------------|
| `/cortinas` | Página com 4 cards de grupos |
| `/cortinas/tipos-de-pregas` | Página com 4 cards de pregas (3 com "Em breve") |
| `/cortinas/tipos-de-pregas/prega-americana` | SubcategoryPage com fotos da prega americana |
| `/cortinas/prega-americana` | Redirect 301 → `/cortinas/tipos-de-pregas/prega-americana` |
| `/cortinas/ilhos` | Sem alteração — funciona normalmente |
| `/cortinas/wave` | Sem alteração — funciona normalmente |
| Header dropdown Cortinas | Exibe 4 grupos |
