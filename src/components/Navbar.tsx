"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { withBasePath } from "@/lib/basePath";

const WHATSAPP_NUMBER = "+51942902585";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Planes Contables", href: "#planes" },
  { name: "Clientes", href: "#clientes" },
  { name: "Nosotros", href: "#nosotros" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Función para cerrar el menú móvil al hacer clic en un enlace
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Principal */}
          <Link 
            href="#inicio" 
            className="flex items-center space-x-3 group"
            onClick={handleLinkClick}
          >
            <img 
              src={withBasePath("/logo.png")} 
              alt="Estudio Contable Sánchez" 
              className="h-10 md:h-12 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-[#1A2E5A] text-base md:text-lg leading-tight group-hover:text-[#A61F1F] transition-colors">
                ESTUDIO CONTABLE
              </span>
              <span className="text-[10px] md:text-xs font-bold text-[#A61F1F] tracking-widest uppercase">
                & Auditoría &quot;Sánchez&quot;
              </span>
            </div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-[#1A2E5A] font-semibold text-sm transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Botón CTA Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, deseo solicitar una consulta contable gratuita.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#A61F1F] rounded-full shadow-md hover:bg-[#8B1A1A] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Consulta Gratuita
            </a>
          </div>

          {/* Botón Menú Hamburguesa (Mobile) */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-[#1A2E5A] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1A2E5A] transition-colors"
              aria-expanded={isOpen}
              aria-label="Abrir menú de navegación"
            >
              {isOpen ? (
                <X className="block h-7 w-7 text-[#A61F1F]" />
              ) : (
                <Menu className="block h-7 w-7 text-[#1A2E5A]" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl transition-all duration-300 animate-fadeIn">
          <div className="px-4 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:text-[#1A2E5A] hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-100">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, deseo solicitar una consulta contable gratuita.")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex items-center justify-center w-full px-5 py-3 text-sm font-bold text-white bg-[#A61F1F] rounded-xl shadow-md hover:bg-[#8B1A1A] transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Consulta Gratuita por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}