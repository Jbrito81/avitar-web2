
'use client';

import React, { useState } from 'react';
import Modal from '@/components/Modal';
import ImageSlider from '@/components/ImageSlider';
import PropertyFilters from '@/components/PropertyFilters';
import type { PropertyFilters as FiltersType } from '@/lib/types';
import WhatsAppButton from '@/components/WhatsAppButton';

// Datos de ejemplo para ventas
const VENTAS = [
  {
    id: 'casa',
    titulo: 'Casa Moderna en Venta',
    ubicacion: 'Riohacha, La Guajira',
    tipo: 'casa',
    precio: 320000000,
    habitaciones: 4,
    banos: 3,
    area: 180,
    images: [
      "/images/ventas/casa/hab1.jpg",
      "/images/ventas/casa/hab2.jpg",
      "/images/ventas/casa/bano1.jpg",
      "/images/ventas/casa/bano2.jpg",
      "/images/ventas/casa/cocina1.jpg",
      "/images/ventas/casa/cocina2.jpg",
      "/images/ventas/casa/sala1.jpg",
      "/images/ventas/casa/sala2.jpg",
      "/images/ventas/casa/fachada1.jpg",
      "/images/ventas/casa/fachada2.jpg"
    ],
    destacado: true,
    descripcion: 'Casa moderna de 4 habitaciones, 3 baños, sala amplia, cocina integral y fachada contemporánea en Riohacha, La Guajira.'
  },
  {
    id: 'lote',
    titulo: 'Lote Urbanizable',
    ubicacion: 'Maicao, La Guajira',
    tipo: 'lote',
    precio: 150000000,
    habitaciones: 0,
    banos: 0,
    area: 500,
    images: [
      "/images/ventas/lote/fachada1.jpg",
      "/images/ventas/lote/fachada2.jpg",
      "/images/ventas/lote/area1.jpg",
      "/images/ventas/lote/area2.jpg"
    ],
    destacado: false,
    descripcion: 'Lote urbanizable de 500 m² en Maicao, La Guajira. Ideal para proyectos residenciales o comerciales.'
  }
];


export default function VentasPage() {
  const [activeFilters, setActiveFilters] = useState<FiltersType>({});
  const [modalOpen, setModalOpen] = useState<null | 'casa' | 'lote'>(null);

  const handleFilterChange = (filters: FiltersType) => {
    setActiveFilters(filters);
    console.log('Filtros aplicados:', filters);
  };

  // Filtrado real
  const filtered = VENTAS.filter((item) => {
    if (activeFilters.type && item.tipo !== activeFilters.type) return false;
    if (activeFilters.location && !item.ubicacion.toLowerCase().includes(activeFilters.location.toLowerCase())) return false;
    if (activeFilters.priceMin && item.precio < activeFilters.priceMin) return false;
    if (activeFilters.priceMax && item.precio > activeFilters.priceMax) return false;
    if (activeFilters.bedrooms && item.habitaciones !== activeFilters.bedrooms) return false;
    if (activeFilters.bathrooms && item.banos !== activeFilters.bathrooms) return false;
    if (activeFilters.areaMin && item.area < activeFilters.areaMin) return false;
    if (activeFilters.areaMax && item.area > activeFilters.areaMax) return false;
    return true;
  });

  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-6">
            <a href="/" className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Inicio</a>
          </div>
          <h1 className="text-3xl font-bold text-[#2B3B8C] mb-6">Propiedades en Venta</h1>

          <PropertyFilters isRental={false} onFilterChange={handleFilterChange} className="mb-8" />

          {/* Lista de Propiedades filtradas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filtered.length === 0 && (
              <div className="col-span-full text-center text-gray-500 py-12">No se encontraron propiedades con los filtros seleccionados.</div>
            )}
            {filtered.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative h-48">
                  <ImageSlider images={item.images} large={false} />
                  {item.destacado && (
                    <div className="absolute top-0 right-0 bg-[#FF6B38] text-white px-3 py-1 m-2 rounded">Destacado</div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-[#2B3B8C]">{item.titulo}</h3>
                    <span className="text-[#FF6B38] font-semibold">${item.precio.toLocaleString('es-CO')}</span>
                  </div>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <span className="text-[#FF6B38] mr-2">📍</span> {item.ubicacion}
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center"><span className="text-[#FF6B38] mr-2">🛏️</span> <span>{item.habitaciones} hab.</span></div>
                    <div className="flex items-center"><span className="text-[#FF6B38] mr-2">🛁</span> <span>{item.banos} baños</span></div>
                    <div className="flex items-center"><span className="text-[#FF6B38] mr-2">📐</span> <span>{item.area} m²</span></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="px-4 py-2 bg-[#2B3B8C] text-white rounded-md hover:bg-[#232f70] transition-colors w-full" onClick={() => setModalOpen(item.id as 'casa' | 'lote')}>Ver Detalles</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modales para cada propiedad filtrada */}
          {filtered.map((item) => (
            <Modal key={item.id} open={modalOpen === item.id} onClose={() => setModalOpen(null)}>
              <h2 className="text-2xl font-bold text-[#2B3B8C] mb-2">{item.titulo}</h2>
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
