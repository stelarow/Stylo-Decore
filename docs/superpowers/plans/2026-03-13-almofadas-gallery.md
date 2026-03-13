# Almofadas Gallery Page Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current Almofadas category page (with subcategory cards) with a flat gallery page showing 3 photo sections — Kits de Almofadas, Combinação para Sofá, Combinação para Cama — and remove the nav dropdown.

**Architecture:** New `AlmofadasGalleryPage` component modeled on `TapetesGalleryPage`. The `/almofadas/page.tsx` route uses this component directly. Navigation constant loses its `children` array, making Almofadas a direct link.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS v4, ScrollReveal (Intersection Observer), Playfair Display + Manrope fonts.

---

## Chunk 1: Nav & Component

### Task 1: Remove Almofadas dropdown from navigation

**Files:**
- Modify: `src/lib/constants.ts`

- [ ] **Step 1: Open `src/lib/constants.ts` and locate the Almofadas nav entry**

Find the block:
```ts
{
  label: "Almofadas",
  href: "/almofadas",
  children: [
    { label: "Decorativas", href: "/almofadas/decorativas" },
  ],
},
```

- [ ] **Step 2: Remove the `children` array**

Replace with:
```ts
{ label: "Almofadas", href: "/almofadas" },
```

- [ ] **Step 3: Verify the app builds without errors**

Run: `cd "C:/Stylo Decore/stylo-decore" && npm run build 2>&1 | tail -20`
Expected: build succeeds (or only pre-existing warnings)

- [ ] **Step 4: Commit**

```bash
cd "C:/Stylo Decore/stylo-decore"
git add src/lib/constants.ts
git commit -m "feat(nav): remove almofadas dropdown — direct link"
```

---

### Task 2: Create AlmofadasGalleryPage component

**Files:**
- Create: `src/components/sections/AlmofadasGalleryPage.tsx`

This component is structured identically to `TapetesGalleryPage.tsx` (see that file for reference). It renders:
1. Hero with image, gradient overlay, "100% Personalizáveis" tag, h1 "Almofadas Personalizadas"
2. Intro paragraph
3. Section "Kits de Almofadas" — PhotoCard grid
4. Section "Combinação para Sofá" — PhotoCard grid
5. Section "Combinação para Cama" — PhotoCard grid
6. CTA WhatsApp card (brushed-gold button)
7. FAQ accordion (`ALMOFADAS_FAQ_KEYS` from `@/lib/seo`)

PhotoCard component (local, same as TapetesGalleryPage):
- `aspect-[3/4]`, `rounded-xl`, hover scale
- Gradient overlay `from-black/55`
- Name label: `absolute bottom-3 left-3 rounded-full bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm`

Photo data (placeholder — client replaces with real images later):
```ts
const KITS = [
  { name: "Kit Sala Clássico",    image: "/images/almofadas/decorativa-1.jpeg" },
  { name: "Kit Sala Moderno",     image: "/images/almofadas/decorativa-2.jpeg" },
  { name: "Kit Sala Boho",        image: "/images/almofadas/decorativa-3.jpeg" },
  { name: "Kit Sala Natural",     image: "/images/almofadas/decorativa-4.jpeg" },
];

const SOFA = [
  { name: "Sofá 2 Lugares",       image: "/images/almofadas/decorativa-2.jpeg" },
  { name: "Sofá 3 Lugares",       image: "/images/almofadas/decorativa-1.jpeg" },
  { name: "Sofá Chaise",          image: "/images/almofadas/decorativa-4.jpeg" },
  { name: "Sofá Canto",           image: "/images/almofadas/decorativa-3.jpeg" },
];

const CAMA = [
  { name: "Cama Casal",           image: "/images/almofadas/decorativa-3.jpeg" },
  { name: "Cama Queen",           image: "/images/almofadas/decorativa-4.jpeg" },
  { name: "Cama King",            image: "/images/almofadas/decorativa-1.jpeg" },
  { name: "Cama Solteiro",        image: "/images/almofadas/decorativa-2.jpeg" },
];
```

Hero image: `/images/almofadas/almofadas-hero.png` (desktop), same for mobile fallback until real images are provided.

WhatsApp CTA message: `"Olá! Tenho interesse em almofadas personalizadas e gostaria de um orçamento."`

- [ ] **Step 1: Write the full component**

```tsx
"use client";

import { getWhatsAppUrl } from "@/lib/constants";
import { ALMOFADAS_FAQ_KEYS } from "@/lib/seo";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const KITS = [
  { name: "Kit Sala Clássico",  image: "/images/almofadas/decorativa-1.jpeg" },
  { name: "Kit Sala Moderno",   image: "/images/almofadas/decorativa-2.jpeg" },
  { name: "Kit Sala Boho",      image: "/images/almofadas/decorativa-3.jpeg" },
  { name: "Kit Sala Natural",   image: "/images/almofadas/decorativa-4.jpeg" },
];

const SOFA = [
  { name: "Sofá 2 Lugares",    image: "/images/almofadas/decorativa-2.jpeg" },
  { name: "Sofá 3 Lugares",    image: "/images/almofadas/decorativa-1.jpeg" },
  { name: "Sofá Chaise",       image: "/images/almofadas/decorativa-4.jpeg" },
  { name: "Sofá Canto",        image: "/images/almofadas/decorativa-3.jpeg" },
];

const CAMA = [
  { name: "Cama Casal",        image: "/images/almofadas/decorativa-3.jpeg" },
  { name: "Cama Queen",        image: "/images/almofadas/decorativa-4.jpeg" },
  { name: "Cama King",         image: "/images/almofadas/decorativa-1.jpeg" },
  { name: "Cama Solteiro",     image: "/images/almofadas/decorativa-2.jpeg" },
];

function PhotoCard({ name, image }: { name: string; image: string }) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <div className="aspect-[3/4]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      <span className="absolute bottom-3 left-3 rounded-full bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
        {name}
      </span>
    </div>
  );
}

export default function AlmofadasGalleryPage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative w-full min-h-[50vh] md:min-h-[65vh] lg:min-h-[70vh] overflow-hidden">
        <img
          src="/images/almofadas/almofadas-hero.png"
          alt="Almofadas Personalizadas"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative flex h-full min-h-[50vh] md:min-h-[65vh] lg:min-h-[70vh] items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-12 md:pb-16 lg:pb-20">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              100% Personalizáveis
            </p>
            <h1 className="mb-3 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Almofadas Personalizadas
            </h1>
            <p className="max-w-xl text-lg text-white/80 lg:text-2xl">
              Combinações sob medida para cada ambiente da sua casa.
            </p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <ScrollReveal animation="up">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-mahogany-light md:text-2xl">
            Almofadas são detalhes que fazem toda a diferença — trazendo cor, textura e conforto. Criamos combinações únicas, 100% personalizadas em tecido, tamanho e acabamento para o seu espaço.
          </p>
        </div>
      </ScrollReveal>

      {/* Kits de Almofadas */}
      <ScrollReveal animation="up" threshold={0.05}>
        <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
          <h2 className="mb-8 font-serif text-3xl font-bold text-mahogany md:text-4xl">
            Kits de Almofadas
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 md:gap-4">
            {KITS.map((item) => (
              <PhotoCard key={item.name} {...item} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Combinação para Sofá */}
      <ScrollReveal animation="up" threshold={0.05}>
        <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
          <h2 className="mb-8 font-serif text-3xl font-bold text-mahogany md:text-4xl">
            Combinação para Sofá
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 md:gap-4">
            {SOFA.map((item) => (
              <PhotoCard key={item.name} {...item} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Combinação para Cama */}
      <ScrollReveal animation="up" threshold={0.05}>
        <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
          <h2 className="mb-8 font-serif text-3xl font-bold text-mahogany md:text-4xl">
            Combinação para Cama
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 md:gap-4">
            {CAMA.map((item) => (
              <PhotoCard key={item.name} {...item} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* CTA WhatsApp */}
      <ScrollReveal animation="up">
        <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
          <div className="rounded-2xl bg-foreground p-10 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Atendimento Personalizado
            </p>
            <h3 className="mb-4 font-serif text-2xl font-bold text-white md:text-3xl">
              Monte o kit perfeito para o seu ambiente
            </h3>
            <p className="mx-auto mb-8 max-w-md text-white/70">
              Nossa especialista ajuda a escolher tecidos, cores e combinações ideais para o seu sofá ou cama.
            </p>
            <a
              href={getWhatsAppUrl("Olá! Tenho interesse em almofadas personalizadas e gostaria de um orçamento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="brushed-gold inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold text-background-dark transition-all hover:shadow-lg active:scale-95"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal animation="up">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <FAQAccordion items={ALMOFADAS_FAQ_KEYS} />
        </div>
      </ScrollReveal>
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `cd "C:/Stylo Decore/stylo-decore" && npx tsc --noEmit 2>&1 | head -30`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
cd "C:/Stylo Decore/stylo-decore"
git add src/components/sections/AlmofadasGalleryPage.tsx
git commit -m "feat(almofadas): add AlmofadasGalleryPage component"
```

---

### Task 3: Wire AlmofadasGalleryPage into the route

**Files:**
- Modify: `src/app/almofadas/page.tsx`

Replace the entire file content — remove `CategoryPage`, `ALMOFADAS_SUBCATEGORIES`, and the FAQ import, use `AlmofadasGalleryPage` instead.

- [ ] **Step 1: Rewrite `src/app/almofadas/page.tsx`**

```tsx
import type { Metadata } from "next";
import AlmofadasGalleryPage from "@/components/sections/AlmofadasGalleryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Almofadas Personalizadas em Florianópolis | Stylo Decore",
  description:
    "Almofadas 100% personalizáveis em Florianópolis e Região. Kits para sofá e cama, combinações sob medida com tecidos nobres e acabamento artesanal.",
  keywords: ["almofadas personalizadas Florianópolis", "kits de almofadas", "almofadas sob medida", "almofadas decorativas Florianópolis"],
  alternates: { canonical: "/almofadas" },
  openGraph: {
    title: "Almofadas Personalizadas em Florianópolis | Stylo Decore",
    description: "Almofadas 100% personalizáveis. Kits para sofá e cama com tecidos nobres em Florianópolis e Região.",
    url: "/almofadas",
    images: [{ url: "/images/almofadas/almofadas-hero.png", width: 1200, height: 630, alt: "Almofadas Personalizadas - Stylo Decore" }],
  },
};

export default function AlmofadasPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Almofadas", href: "/almofadas" },
      ])} />
      <AlmofadasGalleryPage />
    </>
  );
}
```

- [ ] **Step 2: Run full build to confirm no errors**

Run: `cd "C:/Stylo Decore/stylo-decore" && npm run build 2>&1 | tail -30`
Expected: build succeeds, route `/almofadas` listed

- [ ] **Step 3: Commit**

```bash
cd "C:/Stylo Decore/stylo-decore"
git add src/app/almofadas/page.tsx
git commit -m "feat(almofadas): replace category page with gallery page"
```

---

## Notes

- Image paths `/images/almofadas/decorativa-*.jpeg` are placeholders; replace with real photos when available.
- `/almofadas/decorativas` route still exists but is no longer linked from nav or the gallery page.
- Hero uses `/images/almofadas/almofadas-hero.png` — same placeholder until a real hero is provided.
- `ALMOFADAS_SUBCATEGORIES` in `data.ts` is no longer used after this change but can remain until cleaned up.
