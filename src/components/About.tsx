"use client";

import React from "react";
import { CheckCircle2, Target, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda: Texto */}
          <div>
            <span className="text-[#A61F1F] font-bold text-sm uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-100">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A2E5A] mt-4 mb-6">
              Experiencia y Compromiso que Respaldan su Rentabilidad
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              En el <strong>Estudio Contable & Auditoría "Sánchez"</strong>, no solo procesamos datos; somos su socio estratégico. Nos especializamos en brindar asesoría integral en las áreas Contable, Tributaria, Legal y Financiera, diseñando soluciones a la medida para empresas de múltiples sectores económicos.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-[#1A2E5A] mr-3 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800">Protección Tributaria</h4>
                  <p className="text-sm text-gray-600">Prevención de contingencias ante SUNAT y auditorías estrictas.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Target className="w-6 h-6 text-[#1A2E5A] mr-3 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800">Enfoque Gerencial</h4>
                  <p className="text-sm text-gray-600">Información financiera clara para una toma de decisiones inteligente y oportuna.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna Derecha: Imagen / Métrica */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1A2E5A] to-[#A61F1F] rounded-3xl transform rotate-3 scale-105 opacity-10"></div>
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 relative z-10 shadow-xl">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
                  <img src="/logo.png" alt="Sello de Garantía Sánchez" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-2xl font-black text-[#1A2E5A]">Más de 18 Corporaciones</h3>
                <p className="text-gray-600">
                  Confían su contabilidad y finanzas en nuestras manos, abarcando desde Gastronomía hasta Sector Transporte y Tecnología.
                </p>
                <div className="w-full h-px bg-gray-200 my-4"></div>
                <div className="flex items-center text-[#A61F1F] font-bold">
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  <span>Soporte Multisectorial Garantizado</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}