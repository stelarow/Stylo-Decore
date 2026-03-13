"use client";

import { useState } from "react";
import { Expand } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

interface ProductCardProps {
  name: string;
  image: string;
  category: string;
}

export default function ProductCard({ name, image, category }: ProductCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="group overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-md">
        <button
          className="relative block w-full cursor-zoom-in overflow-hidden aspect-[4/3]"
          onClick={() => setOpen(true)}
          aria-label={`Ver imagem de ${name}`}
        >
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="absolute right-4 bottom-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-background-dark opacity-0 transition-all duration-300 group-hover:opacity-100">
            <Expand className="h-4 w-4" />
          </div>
        </button>
        <div className="px-4 py-3">
          <h3 className="text-base font-semibold text-foreground">{name}</h3>
        </div>
      </div>

      {open && (
        <ImageLightbox
          src={image}
          alt={name}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
