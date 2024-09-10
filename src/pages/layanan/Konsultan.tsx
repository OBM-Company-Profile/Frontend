import { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import Banner from "../../component/Banner";
import Footer from "../../component/Footer";
import Card from "../../component/Card";
import konsultanData from "../../json/konsultan/konsultan.json";
import axios from "axios";
import Carousel from "../../component/Carousel";
import ServiceComponent from "../../component/ServiceComponent";

interface ImageData {
  id: number;
  imageSrc: string;
  altImage: string;
  category: string;
}

const Konsultan = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [carousel, setCarousel] = useState<ImageData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:3307/api/images", {
          params: { category: "konsultan" },
        });
        setImages(response.data);
      } catch (err) {
        setError("Failed to fetch image");
      }
    };

    fetchImages();
  }, []);

  // Using the first image from category
  const firstImage = images[0] || { imageSrc: "", altImage: "" };

  useEffect(() => {
    const fetchCarousel = async () => {
      try {
        const response = await axios.get("http://localhost:3307/api/images", {
          params: { category: "konsultan" }, // Specify category
        });
        // Exclude the first image
        const carousel = response.data;
        setCarousel(carousel.slice(1)); // Exclude the first image
      } catch (err) {
        setError("Failed to fetch images");
      } finally {
        setLoading(false);
      }
    };

    fetchCarousel();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Prepare items for Carousel component
  const carouselItems = carousel.map((carousel) => (
    <img
      key={carousel.id}
      src={carousel.imageSrc}
      alt={carousel.altImage}
      className="w-full h-full lg:h-[200px] object-cover"
    />
  ));
  return (
    <>
      <Navbar />
      <Banner
        bgImage="../img/service/consultant/consultant_jumbotron.jpg"
        headCaption="Konsultan & Marine Correspondent"
        captionSection="Menjangkau pengurusan legalitas, administrasi, dan teknis operasional kapal dan perusahaan"
        btnAction="none"
      />
      <section className="overflow-hidden lg:py-20">
        <ServiceComponent
          title={konsultanData.title}
          paragraphs={konsultanData.paragraphs}
          imageSrc={firstImage.imageSrc}
          altImage={firstImage.altImage}
        />
      </section>

      <Carousel items={carouselItems} />
      <div className="bg-pr08">
        <Card
          imageContent="../img/service/offering.jpg"
          contentTitle="Ajukan Permintaan Penawaran"
          captionText="Kami siap 24 jam untuk membantu Anda"
          captionText1="Telp : +62 2974 3107 HP : +628121919822 Mail :
            enquiries@orelabahari.co.id"
          btnAction="Offering"
        />
      </div>
      <Footer />
    </>
  );
};
export default Konsultan;
