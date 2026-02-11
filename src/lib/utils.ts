import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utilitário para combinar classes Tailwind de forma inteligente
 * Combina clsx (para condicionais) com tailwind-merge (para resolver conflitos)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
