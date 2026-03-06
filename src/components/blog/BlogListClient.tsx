"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import BlogContactForm from "@/components/blog/BlogContactForm";
import { BLOG_POSTS } from "@/lib/data";

type BlogPost = (typeof BLOG_POSTS)[number];

interface BlogListClientProps {
  featured: BlogPost;
  rest: BlogPost[];
}

export function BlogListClient({ featured, rest }: BlogListClientProps) {
  const { t, language } = useLanguage();

  function formatDate(dateStr: string) {
    const locale =
      language === "pt" ? "pt-BR" : language === "en" ? "en-US" : "es-ES";
    return new Date(dateStr).toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  function getPostTitle(post: BlogPost) {
    if (language !== "pt" && post.i18n?.[language as "en" | "es"]?.title) {
      return post.i18n[language as "en" | "es"]!.title;
    }
    return post.title;
  }

  function getPostExcerpt(post: BlogPost) {
    if (language !== "pt" && post.i18n?.[language as "en" | "es"]?.excerpt) {
      return post.i18n[language as "en" | "es"]!.excerpt;
    }
    return post.excerpt;
  }

  return (
    <div className="min-h-screen bg-[#F1EADA] pt-20">
      {/* Header Editorial */}
      <section className="border-b border-[#B59E7D]/20 py-16 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Blog
          </p>
          <h1 className="mb-5 font-serif text-5xl font-bold text-[#584738] md:text-6xl lg:text-7xl">
            {t("blog.listTitle")}
          </h1>
          <div className="mx-auto mb-6 h-px w-16 bg-primary" />
          <p className="mx-auto max-w-xl text-base leading-relaxed text-[#584738]/70">
            {t("blog.listDesc")}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Post em destaque */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group mb-12 grid overflow-hidden bg-white shadow-sm transition-all hover:shadow-lg md:grid-cols-5"
        >
          <div className="relative overflow-hidden aspect-[4/3] md:col-span-3 md:aspect-auto">
            <img
              src={featured.image}
              alt={getPostTitle(featured)}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute left-4 top-4 bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#221e10]">
              {t("blog.featured")}
            </span>
          </div>

          <div className="flex flex-col justify-between p-8 md:col-span-2">
            <div>
              <div className="mb-4 flex flex-wrap gap-3">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold uppercase tracking-wider text-[#B59E7D]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mb-4 font-serif text-2xl font-bold leading-snug text-[#584738] transition-colors group-hover:text-primary md:text-3xl">
                {getPostTitle(featured)}
              </h2>
              <p className="text-sm leading-relaxed text-[#584738]/70">
                {getPostExcerpt(featured)}
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-[#B59E7D]/20 pt-6">
              <div className="flex items-center gap-3 text-xs text-[#584738]/50">
                <time>{formatDate(featured.date)}</time>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {featured.readingTime} {t("blog.readMin")}
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-sm font-bold text-primary transition-transform group-hover:translate-x-1">
                {t("blog.readArticle")}
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </Link>

        {/* Grid dos demais posts */}
        <div className="grid gap-8 sm:grid-cols-2">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={post.image}
                  alt={getPostTitle(post)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#B59E7D]/15 px-3 py-1 text-xs font-medium text-[#584738]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mb-2 font-serif text-xl font-bold leading-snug text-[#584738] transition-colors group-hover:text-primary">
                  {getPostTitle(post)}
                </h2>
                <p className="mb-5 text-sm leading-relaxed text-[#584738]/70">
                  {getPostExcerpt(post)}
                </p>
                <div className="flex items-center justify-between border-t border-[#B59E7D]/15 pt-4">
                  <div className="flex items-center gap-2 text-xs text-[#584738]/50">
                    <time>{formatDate(post.date)}</time>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readingTime} {t("blog.readMin")}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-xs font-bold text-primary opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100">
                    {t("blog.read")} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <BlogContactForm />
    </div>
  );
}
