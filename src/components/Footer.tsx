"use client";

import React, { useState, useEffect } from "react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ArrowUp, 
  ShieldCheck, 
  FileText, 
  ChevronRight,
  CheckCircle2
} from "lucide-react";

const WHATSAPP_NUMBER = "+51942902585";
const FACEBOOK_URL = "https://www.facebook.com/EstudioContableSanchezCix";

// Componente SVG nativo para el ícono de Facebook
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

// Componente SVG nativo para el ícono de WhatsApp
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* FOOTER PRINCIPAL */}
      <footer id="contacto" className="bg-[#0D1831] text-slate-300 relative pt-16 pb-12 overflow-hidden">
        {/* Adorno visual de fondo */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Grid de 4 Columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
            
            {/* Columna 1: Marca & Propuesta */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1A2E5A] to-[#A61F1F] flex items-center justify-center font-extrabold text-white text-xl shadow-md">
                  S
                </div>
                <div>
                  <h3 className="text-white font-black text-lg leading-tight tracking-wide">
                    ESTUDIO CONTABLE
                  </h3>
                  <p className="text-white text-xs font-bold tracking-widest uppercase">
                    & Auditoría "Sánchez"
                  </p>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                Asesoría e ingeniería contable, tributaria, legal y financiera de alto impacto. Protegemos la rentabilidad y el cumplimiento normativo de tu empresa.
              </p>

              {/* Sellos de Confianza */}
              <div className="pt-2 flex items-center space-x-4 text-xs font-medium text-slate-400">
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>SUNAT Al Día</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Asesoría Personalizada</span>
                </div>
              </div>
            </div>

            {/* Columna 2: Navegación Rápida */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-slate-800/80 inline-block">
                Navegación Rápida
              </h4>
              <ul className="space-y-2.5 text-sm">
                {[
                  { label: "Inicio", href: "#inicio" },
                  { label: "Planes Contables", href: "#planes" },
                  { label: "Servicios Especializados", href: "#servicios" },
                  { label: "Nuestros Clientes", href: "#clientes" },
                  { label: "Nosotros", href: "#nosotros" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#A61F1F] mr-1.5 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 3: Área de Especialidades */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-slate-800/80 inline-block">
                Especialidades
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center space-x-2">
                  <FileText className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Contabilidades Internas, Externas y Mixtas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FileText className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Planeamiento & Auditoría Tributaria</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FileText className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Constitución y Formalización de Empresas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FileText className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Estados Financieros para Créditos Bancarios</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FileText className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Asesoría Laboral y Contratos de Trabajo</span>
                </li>
              </ul>
            </div>

            {/* Columna 4: Canales Directos & Atención */}
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-slate-800/80 inline-block">
                Contacto & Atención
              </h4>

              <div className="space-y-3 text-sm">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">+51 942 902 585</p>
                    <p className="text-xs text-slate-400">Atención inmediata vía WhatsApp</p>
                  </div>
                </a>

                <div className="flex items-start space-x-3 text-slate-300">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-semibold text-slate-200">Lunes a Viernes: 8:00 am - 6:00 pm</p>
                    <p className="text-slate-400">Sábados: 8:00 am - 1:00 pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-400">
                    Atención presencial en oficina corporativa y servicio virtual a nivel nacional.
                  </p>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="pt-2">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Síguenos en
                </p>
                <div className="flex space-x-3">
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                    aria-label="Facebook Oficial"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#25D366] text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                    aria-label="WhatsApp Oficial"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Sub-Footer Derechos Reservados */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>
              © {currentYear} Estudio Contable & Auditoría "Sánchez". Todos los derechos reservados.
            </p>
            <p className="text-slate-500">
              Desarrollado para máxima conversión y seguridad normativo-tributaria.
            </p>
          </div>

        </div>
      </footer>

      {/* BOTÓN FLOTANTE DE WHATSAPP (CON ANIMACIÓN DE PULSO) */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, visité su página web y deseo coordinar una asesoría contable.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat en WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <WhatsAppIcon className="w-7 h-7" />
        <span className="hidden md:inline-block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-xs font-bold pr-1">
          ¿Consultas? Escríbenos
        </span>
      </a>

      {/* BOTÓN VOLVER ARRIBA (BACK TO TOP) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Volver arriba"
          className="fixed bottom-24 right-6 z-40 bg-slate-800/80 hover:bg-[#1A2E5A] text-white p-2.5 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 border border-slate-700"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}