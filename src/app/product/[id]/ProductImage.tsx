"use client";

import React, { useState } from "react";
import Image from "next/image";

type ProductImageProps = {
  image: string;
  images: string[];
};

const ProductImage: React.FC<ProductImageProps> = ({ image, images }) => {
  const allImages = Array.from(new Set([image, ...images]));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : allImages.length - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < allImages.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="w-full">
      <div className="relative w-full mb-4">
        <Image
          src={allImages[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          width={800}
          height={600}
          className="w-full h-auto rounded shadow"
        />
      </div>

      <div className="relative flex items-center justify-center">
        <button
          onClick={handlePrevImage}
          className="absolute left-0 z-10 p-2 bg-gray-900 bg-opacity-50 text-white rounded-md cursor-pointer"
        >
          {"<"}
        </button>

        <div className="flex gap-2 overflow-x-auto px-10">
          {allImages.map((img, index) => (
            <div key={index} className="relative">
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                width={80}
                height={80}
                onClick={() => handleThumbnailClick(index)}
                className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                  index === currentImageIndex
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleNextImage}
          className="absolute right-0 z-10 p-2 bg-gray-900 bg-opacity-50 text-white rounded-md cursor-pointer"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ProductImage;
