interface LocationMapProps {
  address: string;
  lat: number;
  lng: number;
}

export default function LocationMap({ address, lat, lng }: LocationMapProps) {
  // Por ahora, mostraremos un placeholder hasta que obtengamos la API key de Google Maps
  return (
    <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
      <p className="text-gray-500">
        Ubicación: {address}
        <br />
        (Mapa será implementado próximamente)
      </p>
    </div>
  );
}
