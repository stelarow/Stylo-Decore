# Spec: Hierarquia Cortinas → Tipos de Pregas

**Data:** 2026-03-13
**Status:** Aprovado pelo usuário

---

## Objetivo

Criar a hierarquia de 3 níveis:

```
/cortinas                                      (existe — CategoryPage)
/cortinas/tipos-de-pregas                      (criar — CategoryPage)
/cortinas/tipos-de-pregas/prega-americana      (criar — SubcategoryPage)
/cortinas/tipos-de-pregas/prega-macho          (criar — SubcategoryPage)
/cortinas/tipos-de-pregas/prega-wave           (criar — SubcategoryPage)
/cortinas/tipos-de-pregas/cortina-franzida     (criar — SubcategoryPage)
```

---

## Arquitetura

### Padrão escolhido: Opção A — Reutilizar componentes existentes

Todos os novos arquivos seguem o padrão já estabelecido no projeto:
- Páginas intermediárias: `CategoryPage` component
- Páginas de produto: `SubcategoryPage` component
- Dados centralizados em `src/lib/data.ts`
- SEO via `Metadata` + `JsonLd`

---

## Dados (`src/lib/data.ts`)

### `CORTINAS_TIPOS_PREGAS` — remover `comingSoon`

Os 3 itens marcados com `comingSoon: true` (prega-macho, prega-wave, cortina-franzida) devem ter esse campo **removido** quando as páginas forem criadas, para que os links do grid funcionem corretamente.

### `CORTINA_PRODUCTS` — adicionar entradas novas

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

> Imagens são placeholder — substituir por fotos reais quando disponíveis.

---

## Páginas

### 1. `/cortinas/tipos-de-pregas`

- **Componente:** `CategoryPage`
- **Dados:** `CORTINAS_TIPOS_PREGAS` (já existe em `data.ts`)
- **Hero:** derivado automaticamente de `subcategories[0].image` pelo `CategoryPage` — o primeiro item aponta para `prega-americana-desktop-01.jpg`. Não existe prop `heroImage` no `CategoryPage`; o hero é implícito.
- **Headline:** "Elegância com Caimento"
- **Description:** "Descubra o tipo de prega ideal para transformar sua cortina em peça de design."
- **FAQ:** passar `CORTINAS_FAQ_KEYS` (array de objetos `{ question, answer }` com chaves i18n — **não** passar `CORTINAS_FAQ` que contém texto literal)
- **JSON-LD FAQ:** incluir `getFaqJsonLd(CORTINAS_FAQ)` para consistência SEO com as demais páginas de categoria
- **Breadcrumb JSON-LD:** Home > Cortinas > Tipos de Pregas

### 2. `/cortinas/tipos-de-pregas/prega-americana`

- **Componente:** `SubcategoryPage`
- **Dados:** `CORTINA_PRODUCTS["prega-americana"]` (existe — 3 fotos)
- **Hero:** `prega-americana-desktop-01.jpg`
- **Description:** "Estilo clássico com pregas elegantes e bem definidas. A cortina com prega americana é perfeita para quem busca requinte e tradição na decoração."
- **Specs customizadas:**
  - Espaçamento uniforme entre pregas
  - Elegância atemporal para qualquer ambiente
  - Compatível com tecidos leves e pesados
- **Video:** `/videos/processo-cortinas.mp4`
- **Breadcrumb:** Home > Cortinas > Tipos de Pregas > Prega Americana

### 3. `/cortinas/tipos-de-pregas/prega-macho`

- **Componente:** `SubcategoryPage`
- **Dados:** `CORTINA_PRODUCTS["prega-macho"]` (placeholder com imagens wave)
- **Hero:** `wave-01.jpg`
- **Description:** "Pregas triplas estruturadas que criam volume e sofisticação. A prega macho transmite elegância robusta e atemporal."
- **Specs:** estrutura tríplice, volume controlado, ideal para ambientes formais
- **Breadcrumb:** Home > Cortinas > Tipos de Pregas > Prega Macho

### 4. `/cortinas/tipos-de-pregas/prega-wave`

- **Componente:** `SubcategoryPage`
- **Dados:** `CORTINA_PRODUCTS["prega-wave"]` (placeholder com imagens wave)
- **Hero:** `wave-01.jpg`
- **Description:** "Caimento suave em ondas uniformes. Design contemporâneo que flui naturalmente pelo ambiente."
- **Specs:** ondas uniformes, requer trilho especial wave, design minimalista
- **Breadcrumb:** Home > Cortinas > Tipos de Pregas > Prega Wave

### 5. `/cortinas/tipos-de-pregas/cortina-franzida`

- **Componente:** `SubcategoryPage`
- **Dados:** `CORTINA_PRODUCTS["cortina-franzida"]` (placeholder com imagens ilhós)
- **Hero:** `ilhos-01.jpg`
- **Description:** "Franzido clássico com volume e leveza. Uma das técnicas mais tradicionais, que cria texturas ricas e cheias de personalidade."
- **Specs:** volume generoso, textura rica, fácil ajuste de densidade
- **Breadcrumb:** Home > Cortinas > Tipos de Pregas > Cortina Franzida

---

## Redirect

`/cortinas/prega-americana/page.tsx` — substituir conteúdo por **redirect permanente**:

```tsx
import { permanentRedirect } from "next/navigation";
export default function OldPregaAmericana() {
  permanentRedirect("/cortinas/tipos-de-pregas/prega-americana");
}
```

> Usar `permanentRedirect()` (não `redirect()`) pois emite 308 permanente. `redirect()` emite 307 temporário.

---

## Sitemap (`src/app/sitemap.ts`)

**Remover** a entrada antiga:
```
/cortinas/prega-americana   ← remover (agora é redirect)
```

**Adicionar** as novas rotas com `priority: 0.8`:
```
/cortinas/tipos-de-pregas
/cortinas/tipos-de-pregas/prega-americana
/cortinas/tipos-de-pregas/prega-macho
/cortinas/tipos-de-pregas/prega-wave
/cortinas/tipos-de-pregas/cortina-franzida
```

---

## SEO

Cada página recebe `<title>`, `description`, `canonical`, e `openGraph`. `openGraph.images` segue o padrão das subcategorias existentes (omitido, pois não é incluído nas SubcategoryPages do projeto).

| Página | Title |
|--------|-------|
| tipos-de-pregas | "Tipos de Pregas para Cortinas em Florianópolis \| Stylo Decore" |
| prega-americana | "Cortina Prega Americana sob Medida em Florianópolis \| Stylo Decore" |
| prega-macho | "Cortina Prega Macho sob Medida em Florianópolis \| Stylo Decore" |
| prega-wave | "Cortina Wave sob Medida em Florianópolis \| Stylo Decore" |
| cortina-franzida | "Cortina Franzida sob Medida em Florianópolis \| Stylo Decore" |

---

## Arquivos a criar/modificar

| Ação | Arquivo |
|------|---------|
| CRIAR | `src/app/cortinas/tipos-de-pregas/page.tsx` |
| CRIAR | `src/app/cortinas/tipos-de-pregas/prega-americana/page.tsx` |
| CRIAR | `src/app/cortinas/tipos-de-pregas/prega-macho/page.tsx` |
| CRIAR | `src/app/cortinas/tipos-de-pregas/prega-wave/page.tsx` |
| CRIAR | `src/app/cortinas/tipos-de-pregas/cortina-franzida/page.tsx` |
| MODIFICAR | `src/app/cortinas/prega-americana/page.tsx` → `permanentRedirect()` |
| MODIFICAR | `src/lib/data.ts` → remover `comingSoon` + adicionar CORTINA_PRODUCTS |
| MODIFICAR | `src/app/sitemap.ts` → remover entrada antiga + adicionar 5 novas |
