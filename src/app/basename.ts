/**
 * Converts Vite's BASE_URL ("/" or "/repo/") into a React Router basename
 * ("/" or "/repo"), so routes work under a GitHub Pages project path.
 */
export function toBasename(baseUrl: string): string {
  return baseUrl === '/' ? '/' : baseUrl.replace(/\/+$/, '')
}
