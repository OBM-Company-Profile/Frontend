import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import Card from "../../../component/Card";
import travelData from "../../../json/logistics/travel.json";
import Navs from "../../../component/Navs";
import axios from "axios";
import { useState, useEffect } from "react";
import ServiceComponent from "../../../component/ServiceComponent";
import Carousel from "../../../component/Carousel";
import Jumbotron from "../../../component/Jumbotron";
import LoadingAnimation from "../../../component/LoadingAnimation";

interface ImageData {
  id: number;
  imageSrc: string;
  altImage: string;
  category: string;
}

const Travel = () => {
  const links = [
    { path: "/layanan/logistik", label: "Logistics & Transportation" },
    {
      path: "/layanan/logistik/terminal-stevedoring",
      label: "Terminal Stevedoring",
    },
    { path: "/layanan/logistik/trucking", label: "Trucking" },
    { path: "/layanan/logistik/travel", label: "Travel" },
  ];

  const [jumbotron, setJumbotron] = useState<ImageData[]>([]);
  const [images, setImages] = useState<ImageData[]>([]);
  const [carousel, setCarousel] = useState<ImageData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [quotation, setQuotation] = useState<ImageData[]>([]);

  useEffect(() => {
    const fetchJumbotron = async () => {
      try {
        const response = await axios.get(
          "https://app.orelabahari.co.id/api/images",
          {
            params: { category: "jumbotron" },
          }
        );
        setJumbotron(response.data);
      } catch (err) {
        setError("Failed to fetch image");
      }
    };

    fetchJumbotron();
  }, []);
  const banner = jumbotron[7] || { imageSrc: "", altImage: "" };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://app.orelabahari.co.id/api/images",
          {
            params: { category: "fasilitas_mobil" },
          }
        );
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
        const response = await axios.get(
          "https://app.orelabahari.co.id/api/images",
          {
            params: { category: "logistics_travel" }, // Specify category
          }
        );
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

  useEffect(() => {
    const fetchQuotation = async () => {
      try {
        const response = await axios.get(
          "https://app.orelabahari.co.id/api/images",
          {
            params: { category: "service" },
          }
        );
        setQuotation(response.data);
      } catch (err) {
        setError("Failed to fetch images");
      }
    };

    fetchQuotation();
  }, []);

  const offering = quotation[0] || { imageSrc: "", altImage: "" };

  if (loading) return <LoadingAnimation />;
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
      <Jumbotron
        bgImage={banner.imageSrc}
        headCaption="Logistic"
        captionSection="Kami menghadirkan layanan satu pintu untuk berbagai jenis kebutuhan transportasi"
        btnAction="none"
        showButton={false}
      />
      <Navs links={links} />
      <ServiceComponent
        title={travelData.title}
        paragraphs={travelData.paragraphs}
        imageSrc={firstImage.imageSrc}
        altImage={firstImage.altImage}
      />
      <Carousel items={carouselItems} />
      <div className="bg-pr08">
        <Card
          imageContent={offering.imageSrc}
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
export default Travel;
