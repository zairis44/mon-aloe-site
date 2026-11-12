/**
 * src/lib/forever.ts
 * Liens sortants vers la boutique Forever Living (lien distributeur).
 *
 * - foreverHref() force le https sur les liens foreverliving.fr. Les `lienCommande`
 *   restés en http:// dans le frontmatter des fiches sont corrigés au rendu,
 *   sans toucher aux fichiers .md.
 * - FOREVER_REL : un lien distributeur est un lien d'affiliation. Google demande
 *   rel="sponsored" pour ce type de lien. Le suivi GA4 `click_lien_forever`
 *   (AnalyticsConsent.astro) repose sur le nom de domaine, pas sur rel : il n'est
 *   pas affecté.
 */

export const FOREVER_REL = 'sponsored noopener noreferrer';

function estForever(hostname: string): boolean {
  return hostname === 'foreverliving.fr' || hostname.endsWith('.foreverliving.fr');
}

export function foreverHref(url: string | undefined): string | undefined {
  if (!url) return url;
  try {
    const u = new URL(url);
    if (estForever(u.hostname) && u.protocol === 'http:') {
      u.protocol = 'https:';
      return u.toString();
    }
  } catch {
    // URL relative ou invalide : on la laisse telle quelle.
  }
  return url;
}
