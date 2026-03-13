import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // Home
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },

    // Categorias
    { url: `${SITE_URL}/cortinas`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/persianas`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/papeis-de-parede`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/tapetes`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },

    // Cortinas - Tipos de Pregas
    { url: `${SITE_URL}/cortinas/tipos-de-pregas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cortinas/tipos-de-pregas/prega-americana`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cortinas/tipos-de-pregas/prega-macho`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cortinas/tipos-de-pregas/prega-wave`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cortinas/tipos-de-pregas/cortina-franzida`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Cortinas - Tipos de Acabamento
    { url: `${SITE_URL}/cortinas/tipos-de-acabamento`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cortinas/tipos-de-acabamento/barra-larga`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cortinas/tipos-de-acabamento/forro-blackout`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Cortinas - Suportes e Ferragens
    { url: `${SITE_URL}/cortinas/suportes-e-ferragens`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cortinas/suportes-e-ferragens/varao`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cortinas/suportes-e-ferragens/trilho-suico`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cortinas/suportes-e-ferragens/trilho-motorizado`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Cortinas - Modelos
    { url: `${SITE_URL}/cortinas/modelos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cortinas/modelos/cortina-tradicional`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cortinas/modelos/cortina-com-forro`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cortinas/modelos/cortina-dupla`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cortinas/modelos/cortina-piso-teto`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Cortinas - subcategorias diretas
    { url: `${SITE_URL}/cortinas/tecido`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cortinas/ilhos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cortinas/wave`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cortinas/blackout-acusticas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Persianas - subcategorias
    { url: `${SITE_URL}/persianas/horizontais`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/persianas/verticais`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/persianas/rolo-double-vision`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Papéis de Parede - subcategorias
    { url: `${SITE_URL}/papeis-de-parede/artesania`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/papeis-de-parede/geometricos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/papeis-de-parede/floral`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/papeis-de-parede/texturas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/papeis-de-parede/classico`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/papeis-de-parede/moderno`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/papeis-de-parede/natural-botanico`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/papeis-de-parede/minimalista`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
{ url: `${SITE_URL}/papeis-de-parede/dali`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/papeis-de-parede/ecletic`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/papeis-de-parede/elegant`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Tapetes - subcategorias
    { url: `${SITE_URL}/tapetes/moderno`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tapetes/classico`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tapetes/minimalista`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tapetes/boho`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tapetes/natural`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Almofadas
    { url: `${SITE_URL}/almofadas`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/almofadas/decorativas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Móveis Sob Medida
    { url: `${SITE_URL}/moveis-sob-medida`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/moveis-sob-medida/sala`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/moveis-sob-medida/quarto`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/moveis-sob-medida/cozinha`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/moveis-sob-medida/home-office`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/moveis-sob-medida/closet`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Blog
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/blog/como-escolher-tecido-cortina`, lastModified: new Date("2026-02-01"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/blog/motorizacao-persianas-vale-a-pena`, lastModified: new Date("2026-01-20"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/blog/tendencias-decoracao-2026`, lastModified: new Date("2026-01-10"), changeFrequency: "monthly", priority: 0.6 },

    // Contato
    { url: `${SITE_URL}/contato`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
