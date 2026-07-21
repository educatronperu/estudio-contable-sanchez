'use client';

import { ArrowRight, Shield, Calculator, CheckCircle2 } from 'lucide-react';
import { companyData } from '@/data/content';

export default function Hero() {
  return (    
    <section id="inicio" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden min-h-[85vh] flex items-center">  
      {/* Fondo con los colores corporativos del Estudio Contable */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1C3F] via-[#1A2E5A] to-[#122144] z-0" />

      {/* Patrón sutil para darle textura profesional */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Etiqueta de Confianza (Trust Badge) */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 transition-transform hover:scale-105 cursor-default">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span className="text-xs sm:text-sm font-semibold text-emerald-50 tracking-wide uppercase">
            {companyData.tagline}
          </span>
        </div>

        {/* Título Principal - Atacando el dolor del cliente */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl tracking-tight">
          {companyData.heroTitle}
        </h1>

        {/* Subtítulo descriptivo */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
          {companyData.heroSubtitle}
        </p>

        {/* Botones de Llamada a la Acción (CTA) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Botón Primario (Rojo Empresarial) */}
          <a
            href={`https://wa.me/${companyData.whatsapp}?text=Hola%20Estudio%20Sánchez,%20deseo%20una%20evaluación%20tributaria%20gratuita`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#A61F1F] hover:bg-red-800 text-white font-bold px-8 py-4 rounded-lg shadow-[0_0_20px_rgba(166,31,31,0.3)] hover:shadow-[0_0_30px_rgba(166,31,31,0.5)] transition-all flex items-center justify-center gap-2 group"
          >
            <Calculator className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Solicitar Evaluación Gratuita
          </a>
          
          {/* Botón Secundario */}
          <a
            href="#servicios"
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/20 font-semibold px-8 py-4 rounded-lg backdrop-blur-sm transition-all flex items-center justify-center gap-2 group"
          >
            Ver Servicios Especializados
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Indicadores de Prueba Social / Confianza */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10 max-w-3xl mx-auto w-full text-center">
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl font-black text-white flex items-center gap-2">
              100% <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            </span>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Confidencialidad</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl font-black text-white">+18</span>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Empresas Respaldadas</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl font-black text-emerald-400">Cero</span>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Multas con SUNAT</span>
          </div>
        </div>

      </div>
    </section>
  );
}