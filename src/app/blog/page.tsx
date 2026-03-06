import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { BLOG_POSTS } from "@/lib/data";
import { BlogListClient } from "@/components/blog/BlogListClient";

export const metadata: Metadata = {
  title: "Blog - Dicas de Decoração em Florianópolis",
  description:
    "Dicas de decoração, tendências e inspirações para cortinas, persianas, papéis de parede e tapetes em Florianópolis. Blog da Stylo Decore.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog - Dicas da Especialista | Stylo Decore",
    description:
      "Dicas de decoração, tendências e inspirações para transformar seus ambientes em Florianópolis.",
    url: "/blog",
  },
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ])}
      />
      <BlogListClient featured={featured} rest={rest} />
    </>
  );
}
