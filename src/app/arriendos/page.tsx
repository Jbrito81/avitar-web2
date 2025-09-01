'use client';

import React, { useState } from 'react';
import Modal from '@/components/Modal';
import PropertyFilters from '@/components/PropertyFilters';
import type { PropertyFilters as FiltersType } from '@/lib/types';

import WhatsAppButton from '@/components/WhatsAppButton';
import ImageSlider from '@/components/ImageSlider';



// Datos de ejemplo para arriendos
const ARRIENDOS = [
  {
    id: 'centro',
    titulo: 'Apartamento en Centro',
    ubicacion: 'Centro',
    tipo: 'apartamento',
    precio: 1500000,
    habitaciones: 3,
    banos: 2,
    area: 80,
    images: [
      "/images/arriendos/centro/hab1.jpg",
      "/images/arriendos/centro/hab2.jpg",
      "/images/arriendos/centro/bano1.jpg",
      "/images/arriendos/centro/bano2.jpg",
      "/images/arriendos/centro/cocina1.jpg",
      "/images/arriendos/centro/cocina2.jpg",
      "/images/arriendos/centro/labores1.jpg",
      "/images/arriendos/centro/labores2.jpg",
      "/images/arriendos/centro/sala1.jpg",
      "/images/arriendos/centro/sala2.jpg",
      "/images/arriendos/centro/fachada1.jpg",
      "/images/arriendos/centro/fachada2.jpg"
    ],
    destacado: true,
    descripcion: 'Apartamento en el centro de la ciudad. 3 habitaciones, 2 baños, sala-comedor, cocina, área de labores y fachada moderna.'
  },
  {
    id: 'alto-prado',
    titulo: 'Apartamento barrio Alto Prado',
    ubicacion: 'Alto Prado',
    tipo: 'apartamento',
    precio: 750000,
    habitaciones: 2,
    banos: 1,
    area: 60,
    images: [
      "/images/arriendos/alto-prado/hab1.jpg",
      "/images/arriendos/alto-prado/hab2.jpg",
      "/images/arriendos/alto-prado/bano1.jpg",
      "/images/arriendos/alto-prado/bano2.jpg",
      "/images/arriendos/alto-prado/cocina1.jpg",
      "/images/arriendos/alto-prado/cocina2.jpg",
      "/images/arriendos/alto-prado/labores1.jpg",
      "/images/arriendos/alto-prado/labores2.jpg",
      "/images/arriendos/alto-prado/sala1.jpg",
      "/images/arriendos/alto-prado/sala2.jpg",
      "/images/arriendos/alto-prado/fachada1.jpg",
      "/images/arriendos/alto-prado/fachada2.jpg"
    ],
    destacado: false,
    descripcion: 'Apartamento con un baño, dos habitaciones, sala-comedor, cocina, área de labores y fachada renovada.'
  }
];

export default function ArriendosPage() {
  const [activeFilters, setActiveFilters] = useState<FiltersType>({});
  const [modalOpen, setModalOpen] = useState<null | string>(null);

  const handleFilterChange = (filters: FiltersType) => {
    setActiveFilters(filters);
  };

  // Filtrado real
  const filtered = ARRIENDOS.filter((item) => {
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
          <h1 className="text-3xl font-bold text-[#2B3B8C] mb-6">Propiedades en Arriendo</h1>

          <PropertyFilters isRental={true} onFilterChange={handleFilterChange} className="mb-8" />

          {/* Lista de Propiedades filtradas y modales en un solo fragmento */}
          <React.Fragment>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.length === 0 && (
                <div className="col-span-full text-center text-gray-500 py-12">No se encontraron propiedades con los filtros seleccionados.</div>
              )}
              {filtered.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative">
                    {item.destacado && (
                      <div className="absolute top-0 right-0 bg-[#FF6B38] text-white px-3 py-1 m-2 rounded z-10">Destacado</div>
                    )}
                    {!item.destacado && (
                      <div className="absolute top-0 right-0 bg-[#FF6B38] text-white px-3 py-1 m-2 rounded z-10">Nuevo</div>
                    )}
                    <ImageSlider images={item.images} large={false} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#2B3B8C] mb-2">{item.titulo}</h3>
                    <p className="text-gray-600 mb-4">{item.ubicacion}</p>
                    <div className="flex justify-between mb-4">
                      <div className="flex items-center">
                        <span className="text-[#FF6B38] mr-1">🛏️</span>
                        <span>{item.habitaciones} hab.</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-[#FF6B38] mr-1">🛁</span>
                        <span>{item.banos} baño{item.banos > 1 ? 's' : ''}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-[#FF6B38] mr-1">📐</span>
                        <span>{item.area} m²</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-[#2B3B8C]">${item.precio.toLocaleString('es-CO')}</span>
                      <button className="px-4 py-2 bg-[#2B3B8C] text-white rounded-md hover:bg-[#232f70] transition-colors" onClick={() => setModalOpen(item.id)}>Ver detalles</button>
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
          </React.Fragment>
          {/* Modal para detalles */}
          <Modal open={modalOpen === 'centro'} onClose={() => setModalOpen(null)}>
            <h2 className="text-2xl font-bold text-[#2B3B8C] mb-2">Apartamento en Centro</h2>
            <ImageSlider
              images={[
                "/images/arriendos/centro/hab1.jpg",
                "/images/arriendos/centro/hab2.jpg",
                "/images/arriendos/centro/bano1.jpg",
                "/images/arriendos/centro/bano2.jpg",
                "/images/arriendos/centro/cocina1.jpg",
                "/images/arriendos/centro/cocina2.jpg",
                "/images/arriendos/centro/labores1.jpg",
                "/images/arriendos/centro/labores2.jpg",
                "/images/arriendos/centro/sala1.jpg",
                "/images/arriendos/centro/sala2.jpg",
                "/images/arriendos/centro/fachada1.jpg",
                "/images/arriendos/centro/fachada2.jpg"
              ]}
              large={true}
            />
            <p className="mt-4 text-gray-700 text-center">Apartamento en el centro de la ciudad. 3 habitaciones, 2 baños, sala-comedor, cocina, área de labores y fachada moderna.</p>
          </Modal>
          <Modal open={modalOpen === 'alto-prado'} onClose={() => setModalOpen(null)}>
            <h2 className="text-2xl font-bold text-[#2B3B8C] mb-2">Apartamento barrio Alto Prado</h2>
            <ImageSlider
              images={[
                "/images/arriendos/alto-prado/hab1.jpg",
                "/images/arriendos/alto-prado/hab2.jpg",
                "/images/arriendos/alto-prado/bano1.jpg",
                "/images/arriendos/alto-prado/bano2.jpg",
                "/images/arriendos/alto-prado/cocina1.jpg",
                "/images/arriendos/alto-prado/cocina2.jpg",
                "/images/arriendos/alto-prado/labores1.jpg",
                "/images/arriendos/alto-prado/labores2.jpg",
                "/images/arriendos/alto-prado/sala1.jpg",
                "/images/arriendos/alto-prado/sala2.jpg",
                "/images/arriendos/alto-prado/fachada1.jpg",
                "/images/arriendos/alto-prado/fachada2.jpg"
              ]}
              large={true}
            />
            <p className="mt-4 text-gray-700 text-center">Apartamento con un baño, dos habitaciones, sala-comedor, cocina, área de labores y fachada renovada.</p>
          </Modal>
        </div>
      </div>
      <WhatsAppButton />
    </>
  );
}
