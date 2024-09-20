import { useState, useEffect } from "react";
import Navbar from "../../../component/Navbar";
import Jumbotron from "../../../component/Jumbotron";
import Footer from "../../../component/Footer";
import axios from "axios";
import stevedoringData from "../../../json/logistics/terminalStevedoring.json";
import Card from "../../../component/Card";
import Navs from "../../../component/Navs";
import ServiceComponent from "../../../component/ServiceComponent";
import Carousel from "../../../component/Carousel";

interface ImageData {
  id: number;
  imageSrc: string;
  altImage: string;
  category: string;
}

const TerminalStevedoring = () => {
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
        const response = await axios.get("http://localhost:3307/api/images", {
          params: { category: "jumbotron" },
        });
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
        const response = await axios.get("http://localhost:3307/api/images", {
          params: { category: "logistics_stevedoring" },
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
          params: { category: "logistics_stevedoring" }, // Specify category
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

  useEffect(() => {
    const fetchQuotation = async () => {
      try {
        const response = await axios.get("http://localhost:3307/api/images", {
          params: { category: "service" },
        });
        setQuotation(response.data);
      } catch (err) {
        setError("Failed to fetch images");
      }
    };

    fetchQuotation();
  }, []);

  const offering = quotation[0] || { imageSrc: "", altImage: "" };

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
      <Jumbotron
        bgImage={banner.imageSrc}
        headCaption="Logistic"
        captionSection="Kami menghadirkan layanan satu pintu untuk berbagai jenis kebutuhan transportasi"
        btnAction="none"
        showButton={false}
      />
      <Navs links={links} />
      <ServiceComponent
        title={stevedoringData.title}
        paragraphs={stevedoringData.paragraphs}
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
export default TerminalStevedoring;
