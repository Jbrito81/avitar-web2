import { useState, useCallback } from 'react';
import type { PropertyFilters } from '@/lib/types';

interface UsePropertyFiltersResult {
  filters: PropertyFilters;
  setFilter: (key: keyof PropertyFilters, value: any) => void;
  clearFilters: () => void;
  applyFilters: (properties: any[]) => any[];
}

export function usePropertyFilters(): UsePropertyFiltersResult {
  const [filters, setFilters] = useState<PropertyFilters>({});

  const setFilter = useCallback((key: keyof PropertyFilters, value: any) => {
    setFilters(prev => {
      if (value === undefined || value === '' || value === null) {
        const { [key]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [key]: value };
    });
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({});
  }, []);

  const applyFilters = useCallback((properties: any[]) => {
    return properties.filter(property => {
      // Filtro por tipo de propiedad
      if (filters.type && property.type !== filters.type) {
        return false;
      }

      // Filtro por ubicación
      if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }

      // Filtro por precio
      if (filters.priceMin && property.price < filters.priceMin) {
        return false;
      }
      if (filters.priceMax && property.price > filters.priceMax) {
        return false;
      }

      // Filtro por habitaciones
      if (filters.bedrooms && property.bedrooms < filters.bedrooms) {
        return false;
      }

      // Filtro por baños
      if (filters.bathrooms && property.bathrooms < filters.bathrooms) {
        return false;
      }

      // Filtro por área
      if (filters.areaMin && property.area < filters.areaMin) {
        return false;
      }
      if (filters.areaMax && property.area > filters.areaMax) {
        return false;
      }

      // Filtro por características
      if (filters.features && filters.features.length > 0) {
        const propertyFeatures = property.features || [];
        const hasAllFeatures = filters.features.every(feature => 
          propertyFeatures.includes(feature)
        );
        if (!hasAllFeatures) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  return {
    filters,
    setFilter,
    clearFilters,
    applyFilters,
  };
}
