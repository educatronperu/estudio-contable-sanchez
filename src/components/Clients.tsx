"use client";

import React, { useState, useMemo } from "react";
import { clientsData } from "@/data/content";
import { ClientItem } from "@/types";
import { withBasePath } from "@/lib/basePath";

// Normalización automática de categorías de acuerdo con la consolidación requerida
const normalizeCategory = (rawCategory?: string): string => {
  if (!rawCategory) return "Otros";
  const cat = rawCategory.toLowerCase().trim();

  // 1. Gastronomía & Coctelería (Alimentos, Bebidas, Alicorp, Caña de azúcar, etc.)
  if (
    cat.includes("gastronom") ||
    cat.includes("coctel") ||
    cat.includes("alimento") ||
    cat.includes("bebida") ||
    cat.includes("alicorp") ||
    cat.includes("caña") ||
    cat.includes("azucar") ||
    cat.includes("azúcar")
  ) {
    return "Gastronomía & Coctelería";
  }

  // 2. Confecciones (Fábrica Textil, Bordados, Tejidos, Uniformes)
  if (
    cat.includes("confeccion") ||
    cat.includes("textil") ||
    cat.includes("bordado") ||
    cat.includes("tejido")
  ) {
    return "Confecciones";
  }

  // 3. Insumos Agrícolas
  if (
    cat.includes("insumo") ||
    cat.includes("agrícol") ||
    cat.includes("agricol")
  ) {
    return "Insumos Agrícolas";
  }

  // 4. Estación de Servicios
  if (cat.includes("estación") || cat.includes("estacion")) {
    return "Estación de Servicios";
  }

  // 5. Agua y Gas (Agua tratada, Distribuidor Agua y Gas)
  if (
    cat.includes("agua") ||
    cat.includes("gas") ||
    cat.includes("tratada")
  ) {
    return "Agua y Gas";
  }

  // 6. Laboratorio Clínico
  if (
    cat.includes("laboratorio") ||
    cat.includes("clínico") ||
    cat.includes("clinico")
  ) {
    return "Laboratorio Clínico";
  }

  // 7. Empresa de Transporte (Carrocerías, Mototaxis, etc.)
  if (
    cat.includes("transporte") ||
    cat.includes("carrocería") ||
    cat.includes("carroceria") ||
    cat.includes("mototaxi")
  ) {
    return "Empresa de Transporte";
  }

  // 8. Servicios Tecnológicos (Eventos, Luces LED, etc.)
  if (
    cat.includes("tecnológic") ||
    cat.includes("tecnologic") ||
    cat.includes("led") ||
    cat.includes("evento")
  ) {
    return "Servicios Tecnológicos";
  }

  return rawCategory;
};

// Las 8 Categorías Principales fijas para la barra de botones
const CATEGORIES = [
  "Todos",
  "Gastronomía & Coctelería",
  "Confecciones",
  "Insumos Agrícolas",
  "Estación de Servicios",
  "Agua y Gas",
  "Laboratorio Clínico",
  "Empresa de Transporte",
  "Servicios Tecnológicos",
];

// Tarjeta Individual de Cliente
const ClientCard = ({ name, category, logo }: ClientItem) => {
  const [imgError, setImgError] = useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  // Corrige condición de carrera con SSR/hidratación: si la imagen falla muy
  // rápido (404 local), el evento "error" puede ocurrir antes de que React
  // termine de hidratar y enganchar el onError, perdiéndose ese evento.
  // Este chequeo post-montaje detecta el fallo igual, revisando el estado
  // real del <img> ya cargado en el DOM.
  React.useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth === 0) {
      setImgError(true);
    }
  }, [logo]);

  const getInitials = (str: string) => {
    if (!str) return "?";
    const words = str
      .trim()
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .split(" ")
      .filter(Boolean);

    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return str.slice(0, 2).toUpperCase();
  };

  const initials = getInitials(name);
  const hasLogo = logo && logo.trim() !== "" && !imgError;
  //const displayCategory = normalizeCategory(category);

  return (
    <div className="flex flex-col items-center justify-center p-5 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group text-center h-full">
      {/* Círculo contenedor de logo o iniciales */}
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center overflow-hidden mb-3 bg-slate-50 border-2 border-slate-200 group-hover:border-[#1A2E5A] transition-all duration-300 relative shadow-sm shrink-0">
        {hasLogo ? (
          <img
            ref={imgRef}
            src={withBasePath(logo)}
            alt={name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1A2E5A] to-[#2B4885] text-white font-extrabold text-xl md:text-2xl tracking-wider shadow-inner group-hover:from-[#A61F1F] group-hover:to-[#C82A2A] transition-all duration-500">
            {initials}
          </div>
        )}
      </div>

      {/* Nombre de la empresa */}
      <h4 className="font-bold text-slate-800 text-sm md:text-base group-hover:text-[#1A2E5A] transition-colors line-clamp-2">
        {name}
      </h4>

      {/* Categoría Normalizada */}
      {category && (
        <span className="text-xs text-slate-500 font-medium mt-1">
          {category}
        </span>
      )}
    </div>
  );
};

export default function Clients() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  // Filtrado según el botón activo
  const filteredClients = useMemo(() => {
    if (selectedCategory === "Todos") return clientsData;
    return clientsData.filter(
      (client) => normalizeCategory(client.category) === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <section id="clientes" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#A61F1F] mb-3">
            Respaldo Empresarial
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#1A2E5A]">
            Empresas que confían en nuestra gestión
          </h3>
          <p className="mt-4 text-slate-600 text-base md:text-lg">
            Brindamos asesoría contable, tributaria y financiera a diversos sectores clave del mercado peruano.
          </p>
        </div>

        {/* Botones de Filtro por Categoría */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12 max-w-5xl mx-auto">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 shadow-sm ${
                  isActive
                    ? "bg-[#1A2E5A] text-white shadow-md scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-100 hover:text-[#1A2E5A] border border-slate-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grilla de Clientes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {filteredClients.map((client) => (
            <ClientCard
              key={client.id}
              id={client.id}
              name={client.name}
              category={client.category}
              logo={client.logo}
            />
          ))}
        </div>

        {/* Mensaje de apoyo si no hay coincidencia */}
        {filteredClients.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">
            No se encontraron empresas en esta categoría.
          </div>
        )}

      </div>
    </section>
  );
}