"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/content";
import { 
  Building2, 
  Home, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  FileText,
  MessageSquare
} from "lucide-react";

export default function Proposals() {
  const [selectedTab, setSelectedTab] = useState<number>(1); // 0: Externa, 1: Mixta, 2: Interna

  const proposalsData = [
    {
      id: "externa",
      title: "Contabilidad Externa",
      badge: "Tercerización 100%",
      badgeColor: "bg-blue-100 text-[#1A2E5A]",
      tagline: "Despreocúpese de la carga operativa. Nos encargamos de todo en nuestras oficinas.",
      icon: Building2,
      isFeatured: false,
      summary: "Ideal para pequeñas y medianas empresas que buscan optimizar costos operativos y delegar al 100% la gestión tributaria a expertos.",
      features: [
        "Procesamiento completo de información contable en oficinas del Estudio.",
        "Liquidación mensual de tributos (PDT) e impuestos en SUNAT.",
        "Emisión de boletas de pago mensuales para sus trabajadores.",
        "Entrega de Balance Situacional y Proyectado a diciembre.",
        "Elaboración de EE.FF. y Declaración Jurada Anual.",
        "Asignación de un asesor especialista en su rubro con visitas periódicas."
      ],
      whatsappMsg: "Hola, me interesa la propuesta de Contabilidad Externa."
    },
    {
      id: "mixta",
      title: "Contabilidad Mixta",
      badge: "Más Solicitada ★",
      badgeColor: "bg-[#A61F1F] text-white font-bold animate-pulse",
      tagline: "El equilibrio perfecto entre presencia in situ y precisión de gabinete.",
      icon: Layers,
      isFeatured: true,
      summary: "Para empresas que necesitan conservar sus documentos en sus instalaciones pero requieren el respaldo tributario y estratégico del Estudio.",
      features: [
        "Etapa 1 (In Situ): Registro y análisis operativo en sus instalaciones.",
        "Etapa 2 (Estudio): Liquidación de PDTs, impuestos y auditoría interna.",
        "Custodia y control documental permanente dentro de su empresa.",
        "Aprobación previa por gerencia antes de envíos a SUNAT.",
        "Entrega de EE.FF. proyectados y balance anual al 31 de diciembre.",
        "Asesor dedicado con diagnóstico situacional y visitas frecuentes."
      ],
      whatsappMsg: "Hola, me interesa la propuesta de Contabilidad Mixta."
    },
    {
      id: "interna",
      title: "Contabilidad Interna",
      badge: "Control In Situ",
      badgeColor: "bg-gray-200 text-gray-800",
      tagline: "Personal calificado operando directamente en sus oficinas corporativas.",
      icon: Home,
      isFeatured: false,
      summary: "Pensada para empresas con alto volumen operativo que exigen gestión contable presencial y supervisión directa.",
      features: [
        "Designación de personal contable calificado en sus oficinas.",
        "Reportes de liquidación tributaria los días 10 de cada mes.",
        "Adaptación total a las políticas internas y sistemas de su empresa.",
        "Procesamiento de planillas, boletas y declaraciones directas.",
        "Revisión y balances situacionales para gerencia y bancas.",
        "Supervisión presencial de un especialista sénior en su sector."
      ],
      whatsappMsg: "Hola, me interesa la propuesta de Contabilidad Interna."
    }
  ];

  return (
    <section id="planes" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Fondo decorativo de marca */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#1A2E5A] blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#A61F1F] blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado con Neuromarketing */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#A61F1F] font-semibold text-sm uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Planes a la medida de su empresa
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A2E5A] mt-4 mb-4">
            Modalidades de Servicio Contable & Tributario
          </h2>
          <p className="text-gray-600 text-lg">
            Elija la modalidad que mejor se adapte a la dinámica operativa de su negocio. Todas incluyen el respaldo de un especialista en su sector.
          </p>
        </div>

        {/* Grid de Propuestas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {proposalsData.map((item, index) => {
            const IconComponent = item.icon;
            const isSelected = item.isFeatured;

            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-300 flex flex-col justify-between relative bg-white ${
                  isSelected
                    ? "ring-2 ring-[#A61F1F] shadow-2xl scale-105 z-20"
                    : "border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 z-10"
                }`}
              >
                {/* Badge Superior */}
                <div className="p-8 pb-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <div className={`p-3 rounded-xl ${isSelected ? "bg-[#1A2E5A] text-white" : "bg-blue-50 text-[#1A2E5A]"}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1A2E5A] mb-2">{item.title}</h3>
                  <p className="text-sm font-medium text-gray-500 mb-4">{item.tagline}</p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                    {item.summary}
                  </p>

                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs font-bold text-[#1A2E5A] uppercase tracking-wider mb-4">
                      ¿Qué incluye esta propuesta?
                    </p>
                    <ul className="space-y-3">
                      {item.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-[#A61F1F] mr-2.5 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call to Action en cada tarjeta */}
                <div className="p-8 pt-4 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl">
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(item.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-semibold flex items-center justify-center transition-all ${
                      isSelected
                        ? "bg-[#A61F1F] hover:bg-[#8B1A1A] text-white shadow-lg shadow-red-900/20"
                        : "bg-[#1A2E5A] hover:bg-[#122040] text-white"
                    }`}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    <span>Solicitar Propuesta</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nota de Valor Añadido de Neuromarketing */}
        <div className="mt-16 bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-red-50 text-[#A61F1F] rounded-2xl shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#1A2E5A]">
                ¿Utiliza un sistema contable propio o prefiere el nuestro?
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                Nos adaptamos al software de su empresa o le proveemos nuestro sistema contable automatizado sin costos ocultos de implementación.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hola,%20quisiera%20recibir%20un%20diagnóstico%20situacional%20para%20elegir%20la%20modalidad%20adecuada.`}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-3 bg-[#1A2E5A] hover:bg-[#122040] text-white rounded-xl font-medium text-sm transition-colors"
          >
            Solicitar Evaluación Situacional
          </a>
        </div>
      </div>
    </section>
  );
}