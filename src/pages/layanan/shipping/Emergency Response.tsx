import Navbar from "../../../component/Navbar";
import Jumbotron from "../../../component/Jumbotron";
import Footer from "../../../component/Footer";
import Carousel from "../../../component/Carousel";
import ServiceComponent from "../../../component/ServiceComponent";
import axios from "axios";
import emergencyData from "../../../json/shipping/emergencyResponse.json";
import Card from "../../../component/Card";
import Navs from "../../../component/Navs";
import { useState, useEffect } from "react";
import LoadingAnimation from "../../../component/LoadingAnimation";

interface ImageData {
  id: number;
  imageSrc: string;
  altImage: string;
  category: string;
}

const EmergencyResponse = () => {
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

  // Fetch Jumbotron images
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
        console.error(err);
        setError("Failed to fetch jumbotron images");
      }
    };

    fetchJumbotron();
  }, []);

  const banner = jumbotron[3] || { imageSrc: "", altImage: "" };

  // Fetch emergency images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://app.orelabahari.co.id/api/images",
          {
            params: { category: "shipping_emergency" },
          }
        );
        setImages(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch emergency images");
      }
    };

    fetchImages();
  }, []);

  const firstImage = images[0] || { imageSrc: "", altImage: "" };

  // Fetch quotation images
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
        console.error(err);
        setError("Failed to fetch quotation images");
      }
    };

    fetchQuotation();
  }, []);

  const offering = quotation[0] || { imageSrc: "", altImage: "" };

  // Fetch carousel images
  useEffect(() => {
    const fetchCarousel = async () => {
      try {
        const response = await axios.get(
          "https://app.orelabahari.co.id/api/images",
          {
            params: { category: "shipping_emergency" }, // Specify category
          }
        );
        setCarousel(response.data.slice(1)); // Exclude the first image
      } catch (err) {
        console.error(err);
        setError("Failed to fetch carousel images");
      } finally {
        setLoading(false);
      }
    };

    fetchCarousel();
  }, []);

  if (loading) return <LoadingAnimation />;
  if (error) return <p>{error}</p>;

  // Prepare items for Carousel component
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
        headCaption="Emergency Response"
        captionSection="Melayani clearence CIQP dan sebagai mata rantai logistik kebutuhan kapal"
        btnAction="none"
        showButton={false}
      />
      <Navs links={links} />
      <ServiceComponent
        title={emergencyData.title}
        paragraphs={emergencyData.paragraphs}
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

export default EmergencyResponse;
