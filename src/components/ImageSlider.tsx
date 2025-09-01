import React, { useState } from 'react';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps & { large?: boolean }> = ({ images, large }) => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className={`relative w-full ${large ? 'h-52 md:h-[80vh]' : 'h-40 md:h-48'} bg-gray-200 flex items-center justify-center`}>
      <img
        src={images[current]}
        alt="Foto inmueble"
        className="object-contain w-full h-full rounded"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100 text-2xl"
            aria-label="Anterior"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100 text-2xl"
            aria-label="Siguiente"
          >
            ▶
          </button>
        </>
      )}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <span
            key={i}
            className={`inline-block w-2 h-2 rounded-full ${i === current ? 'bg-[#FF6B38]' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
