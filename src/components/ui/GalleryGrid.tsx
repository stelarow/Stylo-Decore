import Link from "next/link";

interface GalleryItem {
  name: string;
  href: string;
  image: string;
  description?: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group relative overflow-hidden rounded-2xl"
        >
          <div className="aspect-[4/5]">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <h3 className="mb-1 text-xl font-bold text-white">{item.name}</h3>
            {item.description && (
              <p className="text-sm text-gray-300">{item.description}</p>
            )}
            <span className="mt-2 inline-block text-sm font-medium text-accent group-hover:text-white">
              Ver modelos &rarr;
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
