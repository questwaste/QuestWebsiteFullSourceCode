import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to handle asset paths with basePath
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/questwasteWebsite' : '';
  return `${basePath}${path}`;
}
