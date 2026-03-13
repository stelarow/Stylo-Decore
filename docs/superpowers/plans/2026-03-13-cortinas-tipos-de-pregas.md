# Cortinas – Tipos de Pregas Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create the 3-level page hierarchy Cortinas → Tipos de Pregas → individual pleat type pages, replacing the flat old route with a properly nested structure.

**Architecture:** The intermediate page `/cortinas/tipos-de-pregas` uses the existing `CategoryPage` component fed by `CORTINAS_TIPOS_PREGAS` data. Each pleat type gets its own `SubcategoryPage`, following the same pattern as existing subcategory pages. The old `/cortinas/prega-americana` route is converted to a `permanentRedirect`.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS v4. No unit test framework — verification via `npx tsc --noEmit` and `npm run build`.

**Working directory for all commands:** `C:\Stylo Decore\stylo-decore`

---

## Chunk 1: Data layer

**Files:**
- Modify: `src/lib/data.ts`

---

### Task 1: Remove `comingSoon` flags and add product data for new pleat pages

**Files:**
- Modify: `src/lib/data.ts`

- [ ] **Step 1: Remove `comingSoon: true` from the three entries in `CORTINAS_TIPOS_PREGAS`**

  Find the block starting at the `CORTINAS_TIPOS_PREGAS` export. Remove the `comingSoon: true` line from `prega-macho`, `prega-wave`, and `cortina-franzida` entries. Result should look like:

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
      image: "/images/cortinas/prega-americana-desktop-02.jpg",
      description: "Pregas triplas estruturadas para um visual sofisticado",
      descriptionKey: "card.cortinas.prega-macho",
    },
    {
      name: "Prega Wave",
      href: "/cortinas/tipos-de-pregas/prega-wave",
      image: "/images/cortinas/wave-01.jpg",
      description: "Caimento suave em ondas uniformes e contemporâneas",
      descriptionKey: "card.cortinas.prega-wave",
    },
    {
      name: "Cortina Franzida",
      href: "/cortinas/tipos-de-pregas/cortina-franzida",
      image: "/images/cortinas/wave-02.jpg",
      description: "Franzido clássico com volume e leveza",
      descriptionKey: "card.cortinas.cortina-franzida",
    },
  ];
  ```

- [ ] **Step 2: Add `CORTINA_PRODUCTS` entries for the 3 new pleat types**

  Inside the `CORTINA_PRODUCTS` Record (after the existing `"blackout-acusticas"` entry), add:

  ```ts
  "prega-macho": [
    { name: "Prega Macho - Modelo 1", image: "/images/cortinas/wave-01.jpg", desktopImage: "/images/cortinas/wave-01.jpg", category: "Cortinas" },
    { name: "Prega Macho - Modelo 2", image: "/images/cortinas/wave-02.jpg", desktopImage: "/images/cortinas/wave-02.jpg", category: "Cortinas" },
    { name: "Prega Macho - Modelo 3", image: "/images/cortinas/wave-03.jpg", desktopImage: "/images/cortinas/wave-03.jpg", category: "Cortinas" },
  ],
  "prega-wave": [
    { name: "Prega Wave - Modelo 1", image: "/images/cortinas/wave-01.jpg", desktopImage: "/images/cortinas/wave-01.jpg", category: "Cortinas" },
    { name: "Prega Wave - Modelo 2", image: "/images/cortinas/wave-02.jpg", desktopImage: "/images/cortinas/wave-02.jpg", category: "Cortinas" },
    { name: "Prega Wave - Modelo 3", image: "/images/cortinas/wave-03.jpg", desktopImage: "/images/cortinas/wave-03.jpg", category: "Cortinas" },
  ],
  "cortina-franzida": [
    { name: "Cortina Franzida - Modelo 1", image: "/images/cortinas/ilhos-01.jpg", desktopImage: "/images/cortinas/ilhos-01.jpg", category: "Cortinas" },
    { name: "Cortina Franzida - Modelo 2", image: "/images/cortinas/ilhos-02.jpg", desktopImage: "/images/cortinas/ilhos-02.jpg", category: "Cortinas" },
    { name: "Cortina Franzida - Modelo 3", image: "/images/cortinas/ilhos-03.jpg", desktopImage: "/images/cortinas/ilhos-03.jpg", category: "Cortinas" },
  ],
  ```

- [ ] **Step 3: Verify TypeScript compiles**

  Run: `npx tsc --noEmit`
  Expected: no errors

- [ ] **Step 4: Commit**

  ```bash
  git add src/lib/data.ts
  git commit -m "feat(data): add prega-macho, prega-wave, cortina-franzida products; remove comingSoon flags"
  ```

---

## Chunk 2: Intermediate page and sub-pages

**Files:**
- Create: `src/app/cortinas/tipos-de-pregas/page.tsx`
- Create: `src/app/cortinas/tipos-de-pregas/prega-americana/page.tsx`
- Create: `src/app/cortinas/tipos-de-pregas/prega-macho/page.tsx`
- Create: `src/app/cortinas/tipos-de-pregas/prega-wave/page.tsx`
- Create: `src/app/cortinas/tipos-de-pregas/cortina-franzida/page.tsx`

---

### Task 2: Create `/cortinas/tipos-de-pregas` (intermediate CategoryPage)

**Files:**
- Create: `src/app/cortinas/tipos-de-pregas/page.tsx`

- [ ] **Step 1: Create the directory and page file**

  Create `src/app/cortinas/tipos-de-pregas/page.tsx` with this content:

  ```tsx
  import type { Metadata } from "next";
  import CategoryPage from "@/components/sections/CategoryPage";
  import JsonLd from "@/components/seo/JsonLd";
  import { getBreadcrumbJsonLd, getFaqJsonLd, CORTINAS_FAQ, CORTINAS_FAQ_KEYS } from "@/lib/seo";
  import { CORTINAS_TIPOS_PREGAS } from "@/lib/data";

  export const metadata: Metadata = {
    title: "Tipos de Pregas para Cortinas em Florianópolis | Stylo Decore",
    description:
      "Conheça os tipos de pregas para cortinas: Prega Americana, Prega Macho, Wave e Franzida. Cortinas sob medida em Florianópolis e Região.",
    keywords: ["tipos de pregas cortina", "prega americana", "cortina wave", "prega macho", "cortina franzida Florianópolis"],
    alternates: { canonical: "/cortinas/tipos-de-pregas" },
    openGraph: {
      title: "Tipos de Pregas para Cortinas | Stylo Decore",
      description: "Prega Americana, Prega Macho, Wave e Franzida. Cortinas sob medida em Florianópolis.",
      url: "/cortinas/tipos-de-pregas",
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
          headline="Elegância com Caimento"
          description="Descubra o tipo de prega ideal para transformar sua cortina em peça de design."
          intro="A escolha da prega define o caráter de toda a cortina — do clássico ao contemporâneo. Cada tipo oferece um caimento e uma personalidade únicas para o seu ambiente."
          subcategories={CORTINAS_TIPOS_PREGAS}
          faqItems={CORTINAS_FAQ_KEYS}
        />
      </>
    );
  }
  ```

- [ ] **Step 2: Verify TypeScript**

  Run: `npx tsc --noEmit`
  Expected: no errors

---

### Task 3: Create `/cortinas/tipos-de-pregas/prega-americana`

**Files:**
- Create: `src/app/cortinas/tipos-de-pregas/prega-americana/page.tsx`

- [ ] **Step 1: Create the page file**

  Create `src/app/cortinas/tipos-de-pregas/prega-americana/page.tsx`:

  ```tsx
  import type { Metadata } from "next";
  import SubcategoryPage from "@/components/sections/SubcategoryPage";
  import JsonLd from "@/components/seo/JsonLd";
  import { getBreadcrumbJsonLd } from "@/lib/seo";
  import { CORTINA_PRODUCTS } from "@/lib/data";

  export const metadata: Metadata = {
    title: "Cortina Prega Americana sob Medida em Florianópolis | Stylo Decore",
    description:
      "Cortina Prega Americana sob medida com pregas elegantes em Florianópolis e Região. Estilo clássico atemporal para qualquer ambiente.",
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
          titleKey="/cortinas/tipos-de-pregas/prega-americana"
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
          specs={[
            { title: "Espaçamento uniforme", description: "Pregas simétricas e bem distribuídas ao longo de toda a cortina." },
            { title: "Elegância atemporal", description: "Visual clássico que complementa qualquer estilo de decoração." },
            { title: "Versatilidade de tecidos", description: "Compatível com tecidos leves, médios e pesados." },
          ]}
        />
      </>
    );
  }
  ```

- [ ] **Step 2: Verify TypeScript**

  Run: `npx tsc --noEmit`
  Expected: no errors

---

### Task 4: Create `/cortinas/tipos-de-pregas/prega-macho`

**Files:**
- Create: `src/app/cortinas/tipos-de-pregas/prega-macho/page.tsx`

- [ ] **Step 1: Create the page file**

  Create `src/app/cortinas/tipos-de-pregas/prega-macho/page.tsx`:

  ```tsx
  import type { Metadata } from "next";
  import SubcategoryPage from "@/components/sections/SubcategoryPage";
  import JsonLd from "@/components/seo/JsonLd";
  import { getBreadcrumbJsonLd } from "@/lib/seo";
  import { CORTINA_PRODUCTS } from "@/lib/data";

  export const metadata: Metadata = {
    title: "Cortina Prega Macho sob Medida em Florianópolis | Stylo Decore",
    description:
      "Cortina Prega Macho sob medida em Florianópolis e Região. Pregas triplas estruturadas que criam volume e sofisticação atemporal.",
    alternates: { canonical: "/cortinas/tipos-de-pregas/prega-macho" },
    openGraph: {
      title: "Cortina Prega Macho sob Medida | Stylo Decore",
      description: "Cortina Prega Macho com pregas triplas. Elegância robusta e atemporal em Florianópolis.",
      url: "/cortinas/tipos-de-pregas/prega-macho",
    },
  };

  export default function PregaMachoPage() {
    return (
      <>
        <JsonLd data={getBreadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Cortinas", href: "/cortinas" },
          { name: "Tipos de Pregas", href: "/cortinas/tipos-de-pregas" },
          { name: "Prega Macho", href: "/cortinas/tipos-de-pregas/prega-macho" },
        ])} />
        <SubcategoryPage
          title="Prega Macho"
          category="Cortinas"
          titleKey="/cortinas/tipos-de-pregas/prega-macho"
          categoryKey="/cortinas"
          description="Pregas triplas estruturadas que criam volume e sofisticação. A prega macho transmite elegância robusta e atemporal, ideal para ambientes formais e salas de destaque."
          heroImage="/images/cortinas/wave-01.jpg"
          products={CORTINA_PRODUCTS["prega-macho"]}
          videoSrc="/videos/processo-cortinas.mp4"
          videoTitle="video.processo.title"
          videoCaption="video.processo.caption"
          videoFeatures={[
            { icon: "ruler", label: "video.processo.feat.medicao" },
            { icon: "scissors", label: "video.processo.feat.pontos" },
            { icon: "shirt", label: "video.processo.feat.caimento" },
          ]}
          specs={[
            { title: "Estrutura tríplice", description: "Três camadas de tecido por prega, criando volume e definição únicos." },
            { title: "Volume controlado", description: "Caimento estruturado que mantém a forma mesmo com tecidos mais pesados." },
            { title: "Ambientes formais", description: "Visual imponente ideal para salas de jantar, escritórios e suítes master." },
          ]}
        />
      </>
    );
  }
  ```

- [ ] **Step 2: Verify TypeScript**

  Run: `npx tsc --noEmit`
  Expected: no errors

---

### Task 5: Create `/cortinas/tipos-de-pregas/prega-wave`

**Files:**
- Create: `src/app/cortinas/tipos-de-pregas/prega-wave/page.tsx`

- [ ] **Step 1: Create the page file**

  Create `src/app/cortinas/tipos-de-pregas/prega-wave/page.tsx`:

  ```tsx
  import type { Metadata } from "next";
  import SubcategoryPage from "@/components/sections/SubcategoryPage";
  import JsonLd from "@/components/seo/JsonLd";
  import { getBreadcrumbJsonLd } from "@/lib/seo";
  import { CORTINA_PRODUCTS } from "@/lib/data";

  export const metadata: Metadata = {
    title: "Cortina Wave sob Medida em Florianópolis | Stylo Decore",
    description:
      "Cortina Wave sob medida com caimento suave em ondas uniformes. Design contemporâneo e minimalista em Florianópolis e Região.",
    alternates: { canonical: "/cortinas/tipos-de-pregas/prega-wave" },
    openGraph: {
      title: "Cortina Wave sob Medida | Stylo Decore",
      description: "Cortina Wave com ondas suaves e uniformes. Design contemporâneo em Florianópolis.",
      url: "/cortinas/tipos-de-pregas/prega-wave",
    },
  };

  export default function PregaWavePage() {
    return (
      <>
        <JsonLd data={getBreadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Cortinas", href: "/cortinas" },
          { name: "Tipos de Pregas", href: "/cortinas/tipos-de-pregas" },
          { name: "Prega Wave", href: "/cortinas/tipos-de-pregas/prega-wave" },
        ])} />
        <SubcategoryPage
          title="Prega Wave"
          category="Cortinas"
          titleKey="/cortinas/tipos-de-pregas/prega-wave"
          categoryKey="/cortinas"
          description="Caimento suave em ondas uniformes e contínuas. A prega wave é o estilo contemporâneo por excelência — linhas fluidas que trazem leveza e modernidade a qualquer ambiente."
          heroImage="/images/cortinas/wave-01.jpg"
          products={CORTINA_PRODUCTS["prega-wave"]}
          videoSrc="/videos/processo-cortinas.mp4"
          videoTitle="video.processo.title"
          videoCaption="video.processo.caption"
          videoFeatures={[
            { icon: "ruler", label: "video.processo.feat.medicao" },
            { icon: "wind", label: "video.processo.feat.caimento" },
            { icon: "shirt", label: "video.processo.feat.pontos" },
          ]}
          specs={[
            { title: "Ondas uniformes", description: "Trilho especial wave garante curvas perfeitas e regulares." },
            { title: "Design minimalista", description: "Visual limpo e contemporâneo, sem pregas excessivas." },
            { title: "Trilho dedicado", description: "Requer trilho wave específico incluído no projeto." },
          ]}
        />
      </>
    );
  }
  ```

- [ ] **Step 2: Verify TypeScript**

  Run: `npx tsc --noEmit`
  Expected: no errors

---

### Task 6: Create `/cortinas/tipos-de-pregas/cortina-franzida`

**Files:**
- Create: `src/app/cortinas/tipos-de-pregas/cortina-franzida/page.tsx`

- [ ] **Step 1: Create the page file**

  Create `src/app/cortinas/tipos-de-pregas/cortina-franzida/page.tsx`:

  ```tsx
  import type { Metadata } from "next";
  import SubcategoryPage from "@/components/sections/SubcategoryPage";
  import JsonLd from "@/components/seo/JsonLd";
  import { getBreadcrumbJsonLd } from "@/lib/seo";
  import { CORTINA_PRODUCTS } from "@/lib/data";

  export const metadata: Metadata = {
    title: "Cortina Franzida sob Medida em Florianópolis | Stylo Decore",
    description:
      "Cortina Franzida sob medida em Florianópolis e Região. Franzido clássico com volume, leveza e texturas ricas que encantam qualquer ambiente.",
    alternates: { canonical: "/cortinas/tipos-de-pregas/cortina-franzida" },
    openGraph: {
      title: "Cortina Franzida sob Medida | Stylo Decore",
      description: "Cortina Franzida com volume e leveza. Técnica clássica que cria texturas ricas em Florianópolis.",
      url: "/cortinas/tipos-de-pregas/cortina-franzida",
    },
  };

  export default function CortinaFranzidaPage() {
    return (
      <>
        <JsonLd data={getBreadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Cortinas", href: "/cortinas" },
          { name: "Tipos de Pregas", href: "/cortinas/tipos-de-pregas" },
          { name: "Cortina Franzida", href: "/cortinas/tipos-de-pregas/cortina-franzida" },
        ])} />
        <SubcategoryPage
          title="Cortina Franzida"
          category="Cortinas"
          titleKey="/cortinas/tipos-de-pregas/cortina-franzida"
          categoryKey="/cortinas"
          description="Franzido clássico com volume e leveza. Uma das técnicas mais tradicionais da costura de cortinas — cria texturas ricas e cheias de personalidade que transformam qualquer ambiente."
          heroImage="/images/cortinas/ilhos-01.jpg"
          products={CORTINA_PRODUCTS["cortina-franzida"]}
          videoSrc="/videos/processo-cortinas.mp4"
          videoTitle="video.processo.title"
          videoCaption="video.processo.caption"
          videoFeatures={[
            { icon: "ruler", label: "video.processo.feat.medicao" },
            { icon: "scissors", label: "video.processo.feat.pontos" },
            { icon: "shirt", label: "video.processo.feat.caimento" },
          ]}
          specs={[
            { title: "Volume generoso", description: "Franzido amplo que preenche o ambiente com presença e charme." },
            { title: "Textura rica", description: "Dobras naturais criam padrões de luz e sombra únicos." },
            { title: "Densidade ajustável", description: "Grau de franzimento adaptado ao tecido e à preferência do cliente." },
          ]}
        />
      </>
    );
  }
  ```

- [ ] **Step 2: Verify TypeScript**

  Run: `npx tsc --noEmit`
  Expected: no errors

- [ ] **Step 3: Commit all new pages**

  ```bash
  git add src/app/cortinas/tipos-de-pregas/
  git commit -m "feat(pages): add tipos-de-pregas intermediate page and 4 pleat type sub-pages"
  ```

---

## Chunk 3: Redirect and sitemap

**Files:**
- Modify: `src/app/cortinas/prega-americana/page.tsx`
- Modify: `src/app/sitemap.ts`

---

### Task 7: Convert old prega-americana route to permanent redirect

**Files:**
- Modify: `src/app/cortinas/prega-americana/page.tsx`

- [ ] **Step 1: Replace the page content with a permanent redirect**

  **Overwrite the entire file** — remove all existing content including the `metadata` export, all imports (`Metadata`, `SubcategoryPage`, `JsonLd`, etc.), and the old page component. The replacement must contain **only** these two lines:

  ```tsx
  import { permanentRedirect } from "next/navigation";

  export default function OldPregaAmericana() {
    permanentRedirect("/cortinas/tipos-de-pregas/prega-americana");
  }
  ```

  > `permanentRedirect()` from `next/navigation` emits a 308 permanent redirect, which search engines treat as a 301 for SEO purposes. No `metadata` export should remain — the canonical URL for this content is now `/cortinas/tipos-de-pregas/prega-americana`.

- [ ] **Step 2: Verify TypeScript**

  Run: `npx tsc --noEmit`
  Expected: no errors

---

### Task 8: Update sitemap

**Files:**
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Remove the old `/cortinas/prega-americana` entry**

  Find and delete this line from `sitemap.ts`:

  ```ts
  { url: `${SITE_URL}/cortinas/prega-americana`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ```

- [ ] **Step 2: Add the new routes in the Cortinas section**

  Insert the new block **immediately above** the `// Cortinas - subcategorias` comment line. Use that comment as the insertion anchor — do not insert after the `/cortinas` category line, which has other categories between it and the comment.

  ```ts
  // Cortinas - Tipos de Pregas
  { url: `${SITE_URL}/cortinas/tipos-de-pregas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/cortinas/tipos-de-pregas/prega-americana`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/cortinas/tipos-de-pregas/prega-macho`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/cortinas/tipos-de-pregas/prega-wave`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/cortinas/tipos-de-pregas/cortina-franzida`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ```

  Also rename the existing `// Cortinas - subcategorias` comment to `// Cortinas - subcategorias diretas` so the groupings remain self-documenting.

- [ ] **Step 3: Verify TypeScript**

  Run: `npx tsc --noEmit`
  Expected: no errors

- [ ] **Step 4: Final build verification**

  Run: `npm run build`
  Expected: build completes with 0 errors. The output should list the new routes among the generated pages (look for `/cortinas/tipos-de-pregas` and its 4 sub-pages).

- [ ] **Step 5: Commit**

  ```bash
  git add src/app/cortinas/prega-americana/page.tsx src/app/sitemap.ts
  git commit -m "feat(routing): redirect old prega-americana route; update sitemap with tipos-de-pregas hierarchy"
  ```

---

## Summary

| Task | Files | Action |
|------|-------|--------|
| 1 | `src/lib/data.ts` | Remove comingSoon, add product entries |
| 2 | `src/app/cortinas/tipos-de-pregas/page.tsx` | Create CategoryPage |
| 3 | `src/app/cortinas/tipos-de-pregas/prega-americana/page.tsx` | Create SubcategoryPage |
| 4 | `src/app/cortinas/tipos-de-pregas/prega-macho/page.tsx` | Create SubcategoryPage |
| 5 | `src/app/cortinas/tipos-de-pregas/prega-wave/page.tsx` | Create SubcategoryPage |
| 6 | `src/app/cortinas/tipos-de-pregas/cortina-franzida/page.tsx` | Create SubcategoryPage |
| 7 | `src/app/cortinas/prega-americana/page.tsx` | Convert to permanentRedirect |
| 8 | `src/app/sitemap.ts` | Remove old entry, add 5 new routes |
