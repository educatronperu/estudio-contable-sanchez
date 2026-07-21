/**
 * Antepone el basePath (necesario en GitHub Pages, donde el sitio vive en
 * usuario.github.io/nombre-repo en vez de la raíz del dominio) a una ruta
 * de un archivo servido desde /public.
 *
 * <img>, <a>, etc. NO ajustan automáticamente sus rutas absolutas con el
 * basePath de Next.js (a diferencia de <Link> o next/image), así que hay
 * que hacerlo manualmente con esta función para cualquier ruta que empiece
 * con "/" y apunte a /public (logo.png, /images/..., etc.).
 */
export function withBasePath(path?: string | null): string {
  if (!path) return "";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
