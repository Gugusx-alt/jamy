/** Arquivos em /public/fotos — nomes originais do WhatsApp */
export const PHOTO_FILES = [
  "WhatsApp Image 2026-05-15 at 21.49.18(1).jpeg",
  "WhatsApp Image 2026-05-15 at 21.49.18(2).jpeg",
  "WhatsApp Image 2026-05-15 at 21.49.18(3).jpeg",
  "WhatsApp Image 2026-05-15 at 21.49.19.jpeg",
  "WhatsApp Image 2026-05-15 at 21.49.19(1).jpeg",
  "WhatsApp Image 2026-05-15 at 21.49.19(2).jpeg",
] as const;

export type PhotoFile = (typeof PHOTO_FILES)[number];

export function photoSrc(file: string): string {
  return `/fotos/${encodeURIComponent(file)}`;
}
