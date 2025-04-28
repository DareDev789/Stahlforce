'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function ProductGallerie({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const url = "https://backend.stahlforce.eu";

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const currentImage = images.length > 0
    ? `${url}${images[currentIndex].url}`
    : "https://tse4.mm.bing.net/th/id/OIP.T-XhERGkQiBX6hWXPvybVgAAAA?rs=1&pid=ImgDetMain";

  return (
    <div className="w-full">
      {/* Image principale */}
      <div className="relative w-full h-96 overflow-hidden rounded-md group mb-4">
        <img
          src={currentImage}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-full object-cover transition duration-300"
        />

        {/* Boutons prev/next */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow hidden group-hover:block cursor-pointer"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow hidden group-hover:block cursor-pointer"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </>
        )}
      </div>

      {/* Miniatures */}
      {images.length > 1 && (
        <div className="flex gap-2 justify-center">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Miniature ${index + 1}`}
              className={`w-16 h-16 object-cover rounded cursor-pointer border-2 transition duration-200 ${
                currentIndex === index ? 'border-blue-500' : 'border-transparent'
              }`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductGallerie;