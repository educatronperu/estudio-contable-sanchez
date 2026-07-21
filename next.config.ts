import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16 bloquea por defecto las peticiones cross-origin al dev server
  // (bundle JS, HMR/websocket, /_next/*). Sin esto, el celular (que accede
  // por IP de LAN en vez de localhost) recibe 403 en el JS y todo lo
  // interactivo deja de funcionar, aunque el HTML se vea bien.
  allowedDevOrigins: ["192.168.1.10", "192.168.1.8", "localhost"],
};

export default nextConfig;
