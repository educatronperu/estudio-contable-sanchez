import type { NextConfig } from "next";

// Cuando corre en GitHub Actions, el repo se sirve en
// usuario.github.io/NOMBRE_DEL_REPO (no en la raíz), así que Next.js
// necesita saber ese sub-path para que los enlaces, el CSS y el JS
// carguen bien. GITHUB_REPOSITORY viene automáticamente en Actions
// con el formato "usuario/nombre-repo".
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath = isGithubActions ? `/${repo}` : "";

const nextConfig: NextConfig = {
  // GitHub Pages solo sirve archivos estáticos (HTML/CSS/JS), no corre
  // un servidor Node. output:"export" hace que "next build" genere una
  // carpeta /out con el sitio ya pre-renderizado, sin necesidad de servidor.
  output: "export",
  basePath,
  assetPrefix: basePath,

  // Expone el basePath al código de cliente (Navbar, Clients, etc.) para
  // poder anteponerlo manualmente en los <img src="/..."> que no lo hacen
  // solos. Ver src/lib/basePath.ts.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  // La optimización de imágenes de next/image (usada en Services.tsx)
  // requiere un servidor corriendo. Como GitHub Pages no lo tiene,
  // hay que desactivarla y servir las imágenes tal cual.
  images: {
    unoptimized: true,
  },

  // Next.js 16 bloquea por defecto las peticiones cross-origin al dev server
  // (bundle JS, HMR/websocket, /_next/*). Sin esto, el celular (que accede
  // por IP de LAN en vez de localhost) recibe 403 en el JS y todo lo
  // interactivo deja de funcionar, aunque el HTML se vea bien.
  // (Esto SOLO aplica en desarrollo local, no afecta el sitio publicado).
  allowedDevOrigins: ["192.168.1.10", "192.168.1.8", "localhost"],
};

export default nextConfig;
