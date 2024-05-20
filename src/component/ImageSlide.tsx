import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  items: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="mb-10 lg:mb-20">
      <div className="max-w-screen-2xl mx-6 my-10 lg:my-0 lg:px-0 lg:mx-32">
        <h2 className="text-3xl sm:text-4xl font-medium font-raleway mb-8 sm:mb-14">
          Galeri Kegiatan
        </h2>
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="px-4">
              {item}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
