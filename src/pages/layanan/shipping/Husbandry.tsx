import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import husbandryData from "../../../json/shipping/husbandryService.json";
import Carousel from "../../../component/Carousel";
import Card from "../../../component/Card";
import Navs from "../../../component/Navs";
import axios from "axios";
import { useState, useEffect } from "react";
import ServiceComponent from "../../../component/ServiceComponent";
import Jumbotron from "../../../component/Jumbotron";
import LoadingAnimation from "../../../component/LoadingAnimation";

interface ImageData {
  id: number;
  imageSrc: string;
  altImage: string;
  category: string;
}

const HusbandryService = () => {
  const links = [
    { path: "/layanan/shipping", label: "Shipping Agency" },
    { path: "/layanan/shipping/husbandry-service", label: "Husbandry Service" },
    {
      path: "/layanan/shipping/protecting-agency",
      label: "Owner Protecting Agent",
    },
    { path: "/layanan/shipping/launch-service", label: "Launch Service" },
    {
      path: "/layanan/shipping/emergency-response",
      label: "Emergency Response",
    },
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
        console.error(err); // Log error for debugging
        setError("Failed to fetch jumbotron images");
      }
    };

    fetchJumbotron();
  }, []);

  const banner = jumbotron[3] || { imageSrc: "", altImage: "" };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://app.orelabahari.co.id/api/images",
          {
            params: { category: "shipping_husbandry" },
          }
        );
        setImages(response.data);
      } catch (err) {
        console.error(err); // Log error for debugging
        setError("Failed to fetch husbandry service images");
      }
    };

    fetchImages();
  }, []);

  const firstImage = images[0] || { imageSrc: "", altImage: "" };

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
        console.error(err); // Log error for debugging
        setError("Failed to fetch service images");
      }
    };

    fetchQuotation();
  }, []);

  const offering = quotation[0] || { imageSrc: "", altImage: "" };

  useEffect(() => {
    const fetchCarousel = async () => {
      try {
        const response = await axios.get(
          "https://app.orelabahari.co.id/api/images",
          {
            params: { category: "shipping_husbandry" },
          }
        );
        const carouselImages = response.data.slice(1); // Exclude the first image
        setCarousel(carouselImages);
      } catch (err) {
        console.error(err); // Log error for debugging
        setError("Failed to fetch carousel images");
      } finally {
        setLoading(false);
      }
    };

    fetchCarousel();
  }, []);

  if (loading) return <LoadingAnimation />;
  if (error) return <p>{error}</p>;

  const carouselItems = carousel.map((item) => (
    <img
      key={item.id}
      src={item.imageSrc}
      alt={item.altImage}
      className="w-full h-full lg:h-[200px] object-cover"
    />
  ));

  return (
    <>
      <Navbar />
      <Jumbotron
        bgImage={banner.imageSrc}
        headCaption="Husbandry Service"
        captionSection="Melayani clearence CIQP dan sebagai mata rantai logistik kebutuhan kapal"
        btnAction="none"
        showButton={false}
      />
      <Navs links={links} />
      <ServiceComponent
        title={husbandryData.title}
        paragraphs={husbandryData.paragraphs}
        imageSrc={firstImage.imageSrc}
        altImage={firstImage.altImage}
      />
      <Carousel items={carouselItems} />
      <div className="bg-pr08">
        <Card
          imageContent={offering.imageSrc}
          contentTitle="Ajukan Permintaan Penawaran"
          captionText="Kami siap 24 jam untuk membantu Anda"
          captionText1="Telp : +62 2974 3107 HP : +628121919822 Mail : enquiries@orelabahari.co.id"
          btnAction="Offering"
        />
      </div>
      <Footer />
    </>
  );
};

export default HusbandryService;
