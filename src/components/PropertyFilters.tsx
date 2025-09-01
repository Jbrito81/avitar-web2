"use client";

import { useState } from 'react';
import { PropertyFilters, PROPERTY_TYPES, PRICE_RANGES_RENT, PRICE_RANGES_SALE, PROPERTY_FEATURES } from '@/lib/types';

interface PropertyFiltersProps {
  isRental?: boolean;
  onFilterChange: (filters: PropertyFilters) => void;
  className?: string;
}

export default function PropertyFiltersComponent({ isRental = false, onFilterChange, className = '' }: PropertyFiltersProps) {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [filters, setFilters] = useState<PropertyFilters>({});
  const priceRanges = isRental ? PRICE_RANGES_RENT : PRICE_RANGES_SALE;

  const handleFilterChange = (key: keyof PropertyFilters, value: any) => {
    const newFilters = { ...filters, [key]: value };
    if (!value) {
      delete newFilters[key];
    }
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    setFilters({});
    onFilterChange({});
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {/* Filtros básicos */}
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Propiedad
          </label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B3B8C]"
            value={filters.type || ''}
            onChange={(e) => handleFilterChange('type', e.target.value)}
          >
            <option value="">Todos los tipos</option>
            {PROPERTY_TYPES.map((type) => (
              <option key={type.id} value={type.id}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ubicación
          </label>
          <input
            type="text"
            placeholder="Barrio o sector..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B3B8C]"
            value={filters.location || ''}
            onChange={(e) => handleFilterChange('location', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rango de Precio
          </label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B3B8C]"
            value={`${filters.priceMin}-${filters.priceMax}`}
            onChange={(e) => {
              const [min, max] = e.target.value.split('-').map(Number);
              handleFilterChange('priceMin', min);
              handleFilterChange('priceMax', max);
            }}
          >
            <option value="">Cualquier precio</option>
            {priceRanges.map((range, index) => (
              <option key={index} value={`${range.min}-${range.max}`}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Toggle filtros avanzados */}
      <button
        className="text-[#2B3B8C] hover:text-[#FF6B38] mb-4 flex items-center"
        onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
      >
        {isAdvancedOpen ? 'Ocultar filtros avanzados' : 'Mostrar filtros avanzados'}
      </button>

      {/* Filtros avanzados */}
      {isAdvancedOpen && (
        <div className="grid md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Habitaciones
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B3B8C]"
              value={filters.bedrooms || ''}
              onChange={(e) => handleFilterChange('bedrooms', Number(e.target.value))}
            >
              <option value="">Cualquiera</option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 5 ? 'o más' : ''}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Baños
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B3B8C]"
              value={filters.bathrooms || ''}
              onChange={(e) => handleFilterChange('bathrooms', Number(e.target.value))}
            >
              <option value="">Cualquiera</option>
              {[1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 4 ? 'o más' : ''}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Área mínima (m²)
            </label>
            <input
              type="number"
              placeholder="Ej: 60"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B3B8C]"
              value={filters.areaMin || ''}
              onChange={(e) => handleFilterChange('areaMin', Number(e.target.value))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Área máxima (m²)
            </label>
            <input
              type="number"
              placeholder="Ej: 120"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B3B8C]"
              value={filters.areaMax || ''}
              onChange={(e) => handleFilterChange('areaMax', Number(e.target.value))}
            />
          </div>
        </div>
      )}

      {/* Características adicionales */}
      {isAdvancedOpen && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Características
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {PROPERTY_FEATURES.map((feature) => (
              <label key={feature.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-[#2B3B8C] focus:ring-[#2B3B8C]"
                  checked={filters.features?.includes(feature.id) || false}
                  onChange={(e) => {
                    const currentFeatures = filters.features || [];
                    const newFeatures = e.target.checked
                      ? [...currentFeatures, feature.id]
                      : currentFeatures.filter((f) => f !== feature.id);
                    handleFilterChange('features', newFeatures);
                  }}
                />
                <span>{feature.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Botones de acción */}
      <div className="flex justify-between items-center">
        <button
          onClick={clearFilters}
          className="text-gray-600 hover:text-[#FF6B38] flex items-center"
        >
          <span className="mr-1">✖</span>
          Limpiar filtros
        </button>
        <button
          onClick={() => onFilterChange(filters)}
          className="px-6 py-2 bg-[#FF6B38] text-white rounded-md hover:bg-[#e55a2d] transition-colors flex items-center"
        >
          <span className="mr-2">🔍</span>
          Aplicar filtros
        </button>
      </div>
    </div>
  );
}
