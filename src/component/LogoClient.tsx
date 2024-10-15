import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Logo {
  id: number;
  imageSrc: string;
  altImage: string;
  category: string;
}

const LogoCarousel: React.FC = () => {
  const [logos, setLogos] = useState<Logo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://app.orelabahari.co.id/api/images",
          {
            params: { category: "logo_klien" },
          }
        );
        setLogos(response.data);
      } catch (err) {
        setError("Failed to fetch images");
      }
    };

    fetchImages();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    speed: 2500,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="p-4">
      {error && <div className="text-center mb-4">{error}</div>}
      <Slider {...settings}>
        {logos.map((logo) => (
          <div key={logo.id} className="flex justify-center items-center p-2">
            <img
              className="max-w-full max-h-16 object-contain"
              src={logo.imageSrc}
              alt={logo.altImage}
              onError={(e) => console.error("Image load error:", e)}
              onLoad={() => console.log("Image loaded:", logo.imageSrc)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;
