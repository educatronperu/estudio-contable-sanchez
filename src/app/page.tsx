import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About"; // <-- Importamos la nueva sección
import Proposals from "@/components/Proposals";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#A61F1F] selection:text-white">
      {/* 1. Header & Navegación Principal */}
      <Navbar />

      {/* 2. Hero Section - Propuesta de Valor & Conversión */}
      <Hero />
      
      {/* <-- La colocamos justo debajo del Hero */}
      <About />   

      {/* 3. Sección Propuestas de Contabilidad (Externa, Interna, Mixta) */}
      <Proposals />

      {/* 4. Sección Servicios Especializados (Contable, Tributario, Legal, Financiero, RRHH) */}
      <Services />

      {/* 5. Sección Clientes & Prueba Social (Filtros dinámicos) */}
      <Clients />

      {/* 6. Footer, Botón Flotante de WhatsApp y Volver Arriba */}
      <Footer />
    </main>
  );
}