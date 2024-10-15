import React, { useState, useEffect } from "react";
import axios from "axios";

interface ImageData {
  id: number;
  imageSrc: string;
  altImage: string;
  category: string;
}

const Gallery: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://app.orelabahari.co.id/api/images",
          {
            params: { category: "porto_galeri" },
          }
        );
        setImages(response.data);
      } catch (err) {
        setError("Failed to fetch gallery images");
      }
    };

    fetchImages();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="m-10 text-center">
      <h1 className="font-raleway text-3xl sm:text-4xl my-6 font-medium text-center">
        Galeri Foto
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <div className="space-y-2">
          {images.slice(0, 4).map((image) => (
            <img
              key={image.id}
              className="w-full h-auto object-cover"
              src={image.imageSrc}
              alt={image.altImage}
            />
          ))}
        </div>

        <div className="space-y-2">
          {images.slice(4, 6).map((image) => (
            <img
              key={image.id}
              className="w-full h-auto object-cover"
              src={image.imageSrc}
              alt={image.altImage}
            />
          ))}
        </div>

        <div className="space-y-2">
          {images.slice(6, 10).map((image, index) => (
            <img
              key={image.id}
              className={`w-full h-auto object-cover ${
                index === 3 ? "h-[124px] sm:h-44 lg:h-64" : ""
              }`}
              src={image.imageSrc}
              alt={image.altImage}
            />
          ))}
        </div>

        <div className="md:hidden lg:block space-y-2">
          {images.slice(10, 12).map((image) => (
            <img
              key={image.id}
              className="w-full h-auto object-cover"
              src={image.imageSrc}
              alt={image.altImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
