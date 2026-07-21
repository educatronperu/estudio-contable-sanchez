import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Estudio Contable & Auditoría Sánchez",
  description:
    "Asesoría e ingeniería contable, tributaria, legal y financiera de alto impacto en Perú.",
};

// Sin este export, Next.js NO agrega el meta tag <viewport> en móvil.
// Eso hace que el navegador renderice la página como si fuera de escritorio
// (~980px) y la reduzca para que quepa en pantalla: todo se ve bien pero
// los taps (hamburguesa, links del navbar, filtros de Clientes) quedan
// minúsculos en términos reales y el navegador prioriza el gesto de zoom
// sobre el clic, por lo que dejan de "responder" al tacto.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
