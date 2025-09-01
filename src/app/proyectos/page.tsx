"use client";

import React, { useState } from "react";
import Modal from "@/components/Modal";
import ImageSlider from "@/components/ImageSlider";
import WhatsAppButton from "@/components/WhatsAppButton";

// Datos de ejemplo para proyectos de vivienda
// Ajusta rutas de imágenes si es necesario
const PROYECTOS = [
  {
    id: "palmas",
    titulo: "Conjunto Residencial Las Palmas",
    ubicacion: "Riohacha, La Guajira",
    tipo: "apartamento",
    precio: 220000000,
    habitaciones: 3,
    banos: 2,
    area: 85,
    estado: "en_construccion" as const,
    images: [
      "/images/proyectos/palmas/1.jpg",
      "/images/proyectos/palmas/2.jpg",
      "/images/proyectos/palmas/3.jpg",
    ],
    descripcion:
      "Proyecto en construcción con apartamentos de 3 habitaciones, zonas comunes y excelente ubicación.",
  },
  {
    id: "altos",
    titulo: "Altos de la Sierra",
    ubicacion: "Maicao, La Guajira",
    tipo: "casa",
    precio: 180000000,
    habitaciones: 2,
    banos: 2,
    area: 70,
    estado: "en_planos" as const,
    images: [
      "/images/proyectos/altos/1.jpg",
      "/images/proyectos/altos/2.jpg",
      "/images/proyectos/altos/3.jpg",
    ],
    descripcion:
      "Conjunto de viviendas unifamiliares en planos, con diseño moderno y zonas verdes.",
  },
];

export default function ProyectosPage() {
  const [modalOpen, setModalOpen] = useState<null | "palmas" | "altos">(null);
  const [filters, setFilters] = useState({ estado: "", ubicacion: "", tipo: "" });

  const filtered = PROYECTOS.filter((item) => {
    if (filters.estado && item.estado !== filters.estado) return false;
    if (
      filters.ubicacion &&
      !item.ubicacion.toLowerCase().includes(filters.ubicacion.toLowerCase())
    )
      return false;
    if (filters.tipo && item.tipo !== filters.tipo) return false;
    return true;
  });

  const estadoBadge = (estado: string) => {
    const base = "absolute top-0 left-0 px-3 py-1 m-2 rounded text-white";
    if (estado === "en_construccion") return `${base} bg-[#FF6B38]`;
    if (estado === "en_planos") return `${base} bg-green-500`;
    return `${base} bg-gray-400`;
  };

  const estadoLabel = (estado: string) => {
    if (estado === "en_construccion") return "En Construcción";
    if (estado === "en_planos") return "En Planos";
    return "Terminado";
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-6">
            <a
              href="/"
              className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              Inicio
            </a>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B3B8C] mb-8">
            Proyectos de Vivienda
          </h1>

          {/* Filtros */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="estadoProyecto"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Estado del Proyecto
                </label>
                <select
                  id="estadoProyecto"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B3B8C]"
                  value={filters.estado}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, estado: e.target.value }))
                  }
                >
                  <option value="">Todos</option>
                  <option value="en_planos">En Planos</option>
                  <option value="en_construccion">En Construcción</option>
                  <option value="terminado">Terminado</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ubicación
                </label>
                <input
                  type="text"
                  placeholder="Ciudad o sector..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B3B8C]"
                  value={filters.ubicacion}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, ubicacion: e.target.value }))
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="tipoVivienda"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tipo de Vivienda
                </label>
                <select
                  id="tipoVivienda"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B3B8C]"
                  value={filters.tipo}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, tipo: e.target.value }))
                  }
                >
                  <option value="">Todos</option>
                  <option value="casa">Casas</option>
                  <option value="apartamento">Apartamentos</option>
                </select>
              </div>
            </div>
          </div>

          {/* Lista de Proyectos filtrados */}
          <div className="space-y-8">
            {filtered.length === 0 && (
              <div className="col-span-full text-center text-gray-500 py-12">
                No se encontraron proyectos con los filtros seleccionados.
              </div>
            )}

            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="grid md:grid-cols-3">
                  <div className="relative h-64 md:h-full">
                    <ImageSlider images={item.images} large={false} />
                    <div className={estadoBadge(item.estado)}>
                      {estadoLabel(item.estado)}
                    </div>
                  </div>
                  <div className="col-span-2 p-6">
                    <h2 className="text-2xl font-semibold text-[#2B3B8C] mb-3">
                      {item.titulo}
                    </h2>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center">
                        <span className="text-[#FF6B38] mr-2">📍</span>
                        <span>{item.ubicacion}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-[#FF6B38] mr-2">🗓️</span>
                        <span>
                          {item.estado === "en_construccion"
                            ? "Entrega: Diciembre 2025"
                            : item.estado === "en_planos"
                            ? "Entrega: Junio 2026"
                            : "Entrega: Inmediata"}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{item.descripcion}</p>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {item.habitaciones} Habitaciones
                      </span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {item.banos} Baños
                      </span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {item.area} m²
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm text-gray-500">Desde</span>
                        <p className="text-2xl font-bold text-[#2B3B8C]">
                          ${""}
                          {item.precio.toLocaleString("es-CO")}
                        </p>
                      </div>
                      <button
                        className="px-6 py-3 bg-[#FF6B38] text-white rounded-md hover:bg-[#e55a2d] transition-colors"
                        onClick={() =>
                          setModalOpen(item.id as "palmas" | "altos")
                        }
                      >
                        Ver Proyecto
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modales para cada proyecto filtrado */}
          {filtered.map((item) => (
            <Modal
              key={item.id}
              open={modalOpen === item.id}
              onClose={() => setModalOpen(null)}
            >
              <h2 className="text-2xl font-bold text-[#2B3B8C] mb-2">
                {item.titulo}
              </h2>
              <ImageSlider images={item.images} large={true} />
              <p className="mt-4 text-gray-700 text-center">{item.descripcion}</p>
            </Modal>
          ))}
        </div>
      </div>
      <WhatsAppButton />
    </>
  );
}

