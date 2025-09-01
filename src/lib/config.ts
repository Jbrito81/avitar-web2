// Configuración de la aplicación
// Export renamed to avoid Next.js treating `config` as a route/page config.
export const appConfig = {
  // Información de contacto
  contact: {
    whatsapp: '573185479250', // Número de WhatsApp de la inmobiliaria (formato internacional sin +)
    email: '', // Agregar el email de contacto
    phone: '+57 318 5479250', // Teléfono de contacto (formato de visualización)
    address: '', // Agregar la dirección física de la inmobiliaria
  },
  
  // Configuración de Google Maps
  maps: {
    apiKey: '', // Agregar la API key de Google Maps
  },

  // Colores de la marca
  brand: {
    primary: '#2B3B8C', // Azul marino del logo
    secondary: '#FF6B38', // Naranja del logo
    accent: '#FF6B38', // Naranja para acentos y llamados a la acción
    text: '#2B3B8C', // Color principal para textos
    textLight: '#4A5568', // Color para textos secundarios
  },

  // Configuración de subsidios
  subsidios: {
    topesPrecio: {
      viviendaNueva: 0, // Agregar el tope para vivienda nueva
      mejoramiento: 0, // Agregar el tope para mejoramiento
    },
  },
};

export default appConfig;
