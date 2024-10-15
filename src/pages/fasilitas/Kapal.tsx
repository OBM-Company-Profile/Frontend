import Jumbotron from "../../component/Jumbotron";
import Card from "../../component/Card";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import FasilitasCard from "../../component/fasilitas/FasilitasCard";
import Navs from "../../component/Navs";
import axios from "axios";
import { useState, useEffect } from "react";
import LoadingAnimation from "../../component/LoadingAnimation";

interface ImageData {
  id: number;
  imageSrc: string;
  altImage: string;
  category: string;
}

interface KapalData {
  id: number;
  type: string;
  name: string;
  class_: string;
  speed: string;
  capacity: string;
  loa: string;
  draft: string;
  freeDeck: string;
  accomodation: string;
  crew: string;
  lsa: string;
  navEquip: string;
  me: string;
  ae: string;
}

const Kapal = () => {
  const links = [
    { path: "/fasilitas", label: "Kapal" },
    { path: "/fasilitas/mobil", label: "Mobil" },
    { path: "/fasilitas/kantor", label: "Kantor" },
  ];

  const [jumbotron, setJumbotron] = useState<ImageData[]>([]);
  const [images, setImages] = useState<ImageData[]>([]);
  const [kapalList, setKapalList] = useState<KapalData[]>([]);
  const [quotation, setQuotation] = useState<ImageData[]>([]);
  const [error, setError] = useState<string | null>(null);

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
      } catch (error) {
        setError("Failed to fetch image");
      }
    };

    fetchJumbotron();
  }, []);
  const banner = jumbotron[10] || { imageSrc: "", altImage: "" };

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

  const offer = quotation[0] || { imageSrc: "", altImage: "" };

  useEffect(() => {
    const fetchKapalData = async () => {
      try {
        const response = await axios.get<KapalData[]>(
          "https://app.orelabahari.co.id/api/kapal_list"
        );
        setKapalList(response.data);
      } catch (error) {
        console.error("Error fetching kapal data:", error);
      }
    };

    fetchKapalData();
  }, []);

  const formatData = (kapal: KapalData) => {
    const formattedData = [
      { label: "Class", value: kapal.class_ || "N/A" },
      { label: "Speed", value: kapal.speed || "N/A" },
      { label: "Capacity", value: kapal.capacity || "N/A" },
      { label: "LOA", value: kapal.loa || "N/A" },
      { label: "Free Deck Space", value: kapal.freeDeck || "N/A" },
      { label: "Accomodation", value: kapal.accomodation || "N/A" },
      { label: "Crew", value: kapal.crew || "N/A" },
      { label: "LSA", value: kapal.lsa || "N/A" },
      { label: "Navigation Equip", value: kapal.navEquip || "N/A" },
      { label: "ME", value: kapal.me || "N/A" },
      { label: "AE", value: kapal.ae || "N/A" },
    ].filter((item) => item.value !== "N/A"); // Filter out items with default 'N/A' value if needed
    return formattedData;
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://app.orelabahari.co.id/api/images",
          {
            params: { category: "fasilitas_kapal" },
          }
        );
        setImages(response.data);
      } catch (err) {
        setError("Failed to fetch images");
      }
    };

    fetchImages();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!kapalList.length || !images.length) {
    return <LoadingAnimation />; // Loading state while data is fetched
  }

  return (
    <>
      <Navbar />
      <Jumbotron
        bgImage={banner.imageSrc}
        headCaption="Fasilitas"
        captionSection="Armada pendukung"
        showButton={false}
        btnAction="none"
      />
      <Navs links={links} />
      {kapalList.map((kapal, index) => {
        // Safely accessing the image from the images array
        const image = images[index] || { imageSrc: "" };
        return (
          <FasilitasCard
            key={kapal.id}
            imgAsset={image.imageSrc} // Safely access imageSrc
            asstType={kapal.type}
            asstName={kapal.name}
            col={[]} // No need to pass columns now
            data={formatData(kapal)} // Pass formatted data
          />
        );
      })}
      <Card
        imageContent={offer.imageSrc}
        contentTitle="Ajukan Permintaan Penawaran"
        captionText="Kami siap 24 jam untuk membantu Anda"
        captionText1="Telp : +62 2974 3107 HP : +628121919822 Mail :
            enquiries@orelabahari.co.id"
        btnAction="Offering"
      />
      <Footer />
    </>
  );
};

export default Kapal;
