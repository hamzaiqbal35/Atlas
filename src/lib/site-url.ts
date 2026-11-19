/**
 * Resolves the active site base URL.
 * - In local dev (http://localhost:3000), matches localhost so local audits pass with 100%.
 * - In production, canonicalizes strictly to https://atlas-rho-tan.vercel.app (or NEXT_PUBLIC_SITE_URL)
 *   so search engines never index preview or staging domains.
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, "");
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`.replace(/\/+$/, "");
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  return "https://atlas-rho-tan.vercel.app";
}
