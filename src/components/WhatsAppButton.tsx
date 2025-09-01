"use client";

import appConfig from '@/lib/config';

export default function WhatsAppButton() {
  const phoneNumber = appConfig.contact.whatsapp;
  const message = 'Hola, estoy interesado en obtener más información sobre las propiedades.';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    if (typeof window !== 'undefined') window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
  className="fixed right-3 sm:right-4 md:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
  style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 0.75rem)' }}
      aria-label="Contactar por WhatsApp"
    >
      {/* Inline WhatsApp SVG (simple) */}
  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M20.52 3.48A11.92 11.92 0 0 0 12 0C5.372 0 .002 5.372.002 12c0 2.116.556 4.184 1.612 6.01L0 24l6.238-1.623A11.942 11.942 0 0 0 12 24c6.628 0 12-5.372 12-12 0-1.9-.44-3.7-1.48-5.4z" fill="#fff" opacity="0.08" />
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.149-.198.297-.768.966-.942 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.884-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.672-1.612-.922-2.208-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.064 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487  .709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#fff" />
      </svg>
    </button>
  );
}
