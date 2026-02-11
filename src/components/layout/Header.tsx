"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAVIGATION } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/95 shadow-sm backdrop-blur-md"
            : "bg-background"
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl lg:text-3xl font-bold tracking-wide text-foreground">
            Stylo <span className="text-primary">Decore</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 xl:gap-3 lg:flex">
            {NAVIGATION.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="group relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 px-4 py-2 text-sm lg:text-base font-medium uppercase tracking-wider text-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                    </Link>

                    <div
                      className={cn(
                        "absolute left-0 top-full min-w-[220px] rounded-xl bg-background py-2 shadow-lg ring-1 ring-border transition-all",
                        openDropdown === item.label
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-2 opacity-0"
                      )}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-mahogany-light transition-colors hover:bg-tobacco-light hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm lg:text-base font-medium uppercase tracking-wider text-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="relative z-50 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Backdrop Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-80 max-w-full bg-background shadow-2xl transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-20 items-center justify-end px-6">
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6 text-foreground" />
          </button>
        </div>
        <nav className="h-full overflow-y-auto px-6 pb-8">
          {NAVIGATION.map((item) => {
            if (item.children) {
              return (
                <div key={item.label} className="border-b border-tobacco-light">
                  <button
                    className="flex w-full items-center justify-between py-4 text-left text-base font-medium uppercase tracking-wider text-foreground"
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform",
                        openDropdown === item.label && "rotate-180"
                      )}
                    />
                  </button>

                  {openDropdown === item.label && (
                    <div className="pb-4 pl-4">
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2.5 text-sm font-medium text-primary transition-colors"
                      >
                        Ver todos
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2.5 text-sm text-mahogany-light transition-colors hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <div key={item.label} className="border-b border-tobacco-light">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 text-base font-medium uppercase tracking-wider text-foreground"
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
}
