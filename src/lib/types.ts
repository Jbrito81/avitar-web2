export interface PropertyFilters {
  type?: string;
  location?: string;
  priceMin?: number;
  priceMax?: number;
  bedrooms?: number;
  bathrooms?: number;
  areaMin?: number;
  areaMax?: number;
  propertyStatus?: 'venta' | 'arriendo';
  features?: string[];
}

export interface PriceRange {
  min: number;
  max: number;
  label: string;
}

export const PROPERTY_TYPES = [
  { id: 'casa', label: 'Casa' },
  { id: 'apartamento', label: 'Apartamento' },
  { id: 'local', label: 'Local Comercial' },
  { id: 'oficina', label: 'Oficina' },
  { id: 'bodega', label: 'Bodega' },
  { id: 'lote', label: 'Lote' },
  { id: 'finca', label: 'Finca' },
];

export const PRICE_RANGES_SALE: PriceRange[] = [
  { min: 0, max: 100000000, label: 'Hasta $100.000.000' },
  { min: 100000000, max: 200000000, label: '$100.000.000 - $200.000.000' },
  { min: 200000000, max: 300000000, label: '$200.000.000 - $300.000.000' },
  { min: 300000000, max: 400000000, label: '$300.000.000 - $400.000.000' },
  { min: 400000000, max: 500000000, label: '$400.000.000 - $500.000.000' },
  { min: 500000000, max: Infinity, label: 'Más de $500.000.000' },
];

export const PRICE_RANGES_RENT: PriceRange[] = [
  { min: 0, max: 500000, label: 'Hasta $500.000' },
  { min: 500000, max: 1000000, label: '$500.000 - $1.000.000' },
  { min: 1000000, max: 2000000, label: '$1.000.000 - $2.000.000' },
  { min: 2000000, max: 3000000, label: '$2.000.000 - $3.000.000' },
  { min: 3000000, max: 4000000, label: '$3.000.000 - $4.000.000' },
  { min: 4000000, max: 5000000, label: '$4.000.000 - $5.000.000' },
  { min: 5000000, max: Infinity, label: 'Más de $5.000.000' },
];

export const PROPERTY_FEATURES = [
  { id: 'parking', label: 'Parqueadero' },
  { id: 'storage', label: 'Depósito' },
  { id: 'elevator', label: 'Ascensor' },
  { id: 'security', label: 'Seguridad 24/7' },
  { id: 'pool', label: 'Piscina' },
  { id: 'gym', label: 'Gimnasio' },
  { id: 'garden', label: 'Jardín' },
  { id: 'terrace', label: 'Terraza' },
  { id: 'furnished', label: 'Amoblado' },
];
