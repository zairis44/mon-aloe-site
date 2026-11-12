/**
 * src/lib/imgSize.ts
 * Dimensions réelles des images de /public, lues au build, pour renseigner width/height
 * (évite le décalage de mise en page pendant le chargement, CLS).
 * Aucun effet côté navigateur : tout est résolu à la compilation.
 * Si sharp est indisponible ou si l'image est introuvable : on renvoie undefined (attributs omis).
 */
import { existsSync } from 'node:fs';
import { join } from 'node:path';

export interface Dimensions { width: number; height: number }

const cache = new Map<string, Dimensions | undefined>();

export async function imgSize(src?: string): Promise<Dimensions | undefined> {
  if (!src || !src.startsWith('/')) return undefined;
  if (cache.has(src)) return cache.get(src);
  let result: Dimensions | undefined;
  try {
    const file = join(process.cwd(), 'public', src);
    if (existsSync(file)) {
      const sharp = (await import('sharp')).default;
      const meta = await sharp(file).metadata();
      if (meta.width && meta.height) result = { width: meta.width, height: meta.height };
    }
  } catch {
    result = undefined;
  }
  cache.set(src, result);
  return result;
}

/** Parcourt n'importe quelle donnée (frontmatter) et renvoie les tailles de toutes les images /images/… trouvées. */
export async function sizesIn(data: unknown): Promise<Record<string, Dimensions>> {
  const found = new Set(JSON.stringify(data ?? {}).match(/\/images\/[^"\\]+\.(?:webp|jpe?g|png|avif)/gi) ?? []);
  const out: Record<string, Dimensions> = {};
  for (const src of found) {
    const d = await imgSize(src);
    if (d) out[src] = d;
  }
  return out;
}
