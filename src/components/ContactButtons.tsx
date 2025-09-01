"use client";

import appConfig from '@/lib/config';

interface ContactButtonsProps {
  propertyId?: string;
  propertyTitle?: string;
}

export default function ContactButtons({ propertyId, propertyTitle }: ContactButtonsProps) {
  const defaultMessage = propertyTitle 
    ? `Hola, estoy interesado en la propiedad: ${propertyTitle}`
    : 'Hola, estoy interesado en obtener más información';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${appConfig.contact.whatsapp}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${appConfig.contact.phone}`;
  };

  const handleEmailClick = () => {
    if (appConfig.contact.email) {
      window.location.href = `mailto:${appConfig.contact.email}?subject=Consulta sobre propiedad&body=${encodeURIComponent(defaultMessage)}`;
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={handleWhatsAppClick}
        className="flex-1 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center"
      >
        <span className="mr-2">📱</span>
        WhatsApp
      </button>
      <button
        onClick={handlePhoneClick}
        className="flex-1 bg-[#2B3B8C] text-white px-4 py-2 rounded-md hover:bg-[#232f70] transition-colors flex items-center justify-center"
      >
        <span className="mr-2">📞</span>
        Llamar
      </button>
      {appConfig.contact.email && (
        <button
          onClick={handleEmailClick}
          className="flex-1 bg-[#FF6B38] text-white px-4 py-2 rounded-md hover:bg-[#e55a2d] transition-colors flex items-center justify-center"
        >
          <span className="mr-2">✉️</span>
          Email
        </button>
      )}
    </div>
  );
}
