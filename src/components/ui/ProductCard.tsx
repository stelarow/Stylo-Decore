"use client";

import { ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

interface ProductCardProps {
  name: string;
  image: string;
  category: string;
}

export default function ProductCard({ name, image, category }: ProductCardProps) {
  const message = `Olá! Tenho interesse neste modelo de ${category}: ${name}. Gostaria de mais informações.`;

  return (
    <div className="group overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute right-4 bottom-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-background-dark opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowRight className="h-5 w-5" />
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-3 text-lg font-semibold text-foreground">{name}</h3>
        <a
          href={getWhatsAppUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="brushed-gold inline-flex w-full items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-background-dark transition-all hover:shadow-lg active:scale-95"
        >
          Tenho interesse neste modelo
        </a>
      </div>
    </div>
  );
}
