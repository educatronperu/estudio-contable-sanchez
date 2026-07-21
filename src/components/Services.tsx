"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Calculator, 
  Receipt, 
  Scale, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  FileSpreadsheet
} from "lucide-react";

const WHATSAPP_NUMBER = "+51942902585";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string>("contable");

  const categories = [
    { id: "contable", name: "Área Contable", icon: Calculator },
    { id: "tributario", name: "Área Tributaria", icon: Receipt },
    { id: "legal", name: "Área Legal", icon: Scale },
    { id: "financiero", name: "Área Financiera", icon: TrendingUp },
    { id: "rrhh", name: "Recursos Humanos", icon: Users },
  ];

  const servicesData = {
    contable: {
      title: "Gestión Contable & Gerencial Integral",
      subtitle: "Tome el control absoluto de sus finanzas y garantice estados financieros precisos para la toma de decisiones.",
      image: "/images/4.jpg", // Imagen de referencia según roadmap
      imageAlt: "Gestión Contable Computarizada",
      benefits: [
        "Contabilidades internas, externas y mixtas.",
        "Contabilidad computarizada con reportes al día.",
        "Elaboración, análisis e interpretación de Estados Financieros.",
        "Elaboración de Estados Financieros Proyectados.",
        "Rehacemos contabilidades atrasadas o desorganizadas.",
        "Análisis de costos, gastos y contabilidad gerencial."
      ]
    },
    tributario: {
      title: "Blindaje & Planeamiento Tributario",
      subtitle: "Maximice sus beneficios fiscales legalmente y evite multas o contingencias ante la SUNAT.",
      image: "/images/auditoria_tributaria.webp", // Imagen de referencia según roadmap
      imageAlt: "Auditoría y Planeamiento Tributario",
      benefits: [
        "Planeamiento tributario estratégico de su negocio.",
        "Maximización de beneficios y deducciones fiscales.",
        "Auditorías tributarias preventivas e integrales.",
        "Trámites de devolución de impuestos acumulados.",
        "Recuperación de bienes comisados por la administración.",
        "Determinación y revisión rigurosa de obligaciones tributarias."
      ]
    },
    legal: {
      title: "Asesoría Legal Empresarial & Corporativa",
      subtitle: "Formalice y proteja la estructura jurídica de su empresa con contratos fidedignos y blindaje normativo.",
      image: "/images/4.jpg",
      imageAlt: "Asesoría Legal Empresarial",
      benefits: [
        "Constitución de empresas, fusiones, transformaciones y reorganizaciones.",
        "Obtención y renovación de licencias de funcionamiento.",
        "Disolución, liquidación y extinción formal de empresas.",
        "Formalización integral de negocios y PYMES.",
        "Elaboración y revisión de contratos civiles y empresariales."
      ]
    },
    financiero: {
      title: "Finanzas Estratégicas & Acceso a Créditos",
      subtitle: "Estructure sus estados financieros para calificar con éxito a créditos bancarios, leasing y financiamiento.",
      image: "/images/auditoria_tributaria.webp",
      imageAlt: "Análisis Financiero y Bancario",
      benefits: [
        "Asesoría especializada en créditos financieros y leasing.",
        "Elaboración de EE.FF. auditados para evaluación bancaria.",
        "Análisis, diagnóstico y planeamiento financiero.",
        "Auditorías financieras independientes."
      ]
    },
    rrhh: {
      title: "Gestión Estratégica de Recursos Humanos",
      subtitle: "Administre su capital humano con total cumplimiento laboral, contratos sólidos y planillas al día.",
      image: "/images/4.jpg",
      imageAlt: "Gestión de Recursos Humanos",
      benefits: [
        "Búsqueda y selección de personal calificado por competencias.",
        "Asesoría en liquidación de beneficios sociales de personal.",
        "Elaboración y registro de contratos de trabajo según modalidad.",
        "Emisión de boletas de pago y declaración en PLAME / T-Registro."
      ]
    }
  };

  const currentService = servicesData[activeCategory as keyof typeof servicesData];

  return (
    <section id="servicios" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Principal */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#A61F1F] font-semibold text-sm uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Especialización Multidisciplinaria
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A2E5A] mt-4 mb-4">
            Nuestros Servicios Profesionales
          </h2>
          <p className="text-gray-600 text-lg">
            Ofrecemos soluciones integrales para proteger, formalizar y hacer crecer la rentabilidad de su empresa.
          </p>
        </div>

        {/* NAVEGACIÓN POR CATEGORÍAS (TABS) */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#1A2E5A] text-white shadow-lg shadow-blue-950/20 scale-105"
                    : "bg-slate-100 text-gray-700 hover:bg-slate-200"
                }`}
              >
                <IconComp className={`w-4 h-4 ${isActive ? "text-[#A61F1F]" : "text-gray-500"}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* CONTENIDO DEL SERVICIO SELECCIONADO */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Lista de Beneficios y Servicios */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1A2E5A] mb-3">
                  {currentService.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {currentService.subtitle}
                </p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h4 className="text-xs font-bold text-[#1A2E5A] uppercase tracking-wider mb-4">
                  Alcance del Servicio:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentService.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-2 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#A61F1F] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola, quisiera solicitar asesoría sobre el servicio de ${currentService.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#A61F1F] hover:bg-[#8B1A1A] text-white font-semibold text-sm rounded-xl transition-all shadow-md shadow-red-900/20"
                >
                  <span>Consultar sobre este servicio</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            {/* Portafolio Visual / Imagen de referencia */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group bg-slate-200">
                <img
                  src={currentService.image}
                  alt={currentService.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback visual en caso de que la imagen aún no esté colocada en /public/images/
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                
                {/* Overlay Informativo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E5A]/90 via-[#1A2E5A]/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-white/80 text-xs font-medium uppercase tracking-wider">
                    Estudio Contable & Auditoría Sánchez
                  </span>
                  <p className="text-white font-bold text-lg">
                    {currentService.imageAlt}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Banner de Garantía / Valor Añadido */}
        <div className="mt-12 bg-[#1A2E5A] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-[#A61F1F] rounded-xl shrink-0">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold">¿Necesita rehacer contabilidades o regularizar deudas tributarias?</h4>
              <p className="text-slate-300 text-sm mt-1">
                Atendemos emergencias fiscales ante la SUNAT y reestructuramos la contabilidad de su negocio de inmediato.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20tengo%20una%20urgencia%20tributaria/contable%20y%20necesito%20asesoría%20inmediata.`}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-3 bg-white text-[#1A2E5A] hover:bg-slate-100 rounded-xl font-bold text-sm transition-colors"
          >
            Atención Inmediata por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}