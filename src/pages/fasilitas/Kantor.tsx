import Card from "../../component/Card";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import FasilitasCard from "../../component/fasilitas/FasilitasCard";
import Navs from "../../component/Navs";
import Jumbotron from "../../component/Jumbotron";
import axios from "axios";
import { useState, useEffect } from "react";

interface ImageData {
  id: number;
  imageSrc: string;
  altImage: string;
  category: string;
}

interface KantorData {
  id: number;
  type: string;
  name: string;
  address: string;
}

const Kantor = () => {
  const links = [
    { path: "/fasilitas", label: "Kapal" },
    { path: "/fasilitas/mobil", label: "Mobil" },
    { path: "/fasilitas/kantor", label: "Kantor" },
  ];

  const [jumbotron, setJumbotron] = useState<ImageData[]>([]);
  const [images, setImages] = useState<ImageData[]>([]);
  const [kantorList, setKantorList] = useState<KantorData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [quotation, setQuotation] = useState<ImageData[]>([]);

  useEffect(() => {
    const fetchJumbotron = async () => {
      try {
        const response = await axios.get("http://localhost:3307/api/images", {
          params: { category: "jumbotron" },
        });
        setJumbotron(response.data);
      } catch (error) {
        setError("Failed to fetch image");
      }
    };

    fetchJumbotron();
  }, []);
  const banner = jumbotron[10] || { imageSrc: "", altImage: "" };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:3307/api/images", {
          params: { category: "fasilitas_kantor" },
        });
        setImages(response.data);
      } catch (err) {
        setError("Failed to fetch images");
      }
    };

    fetchImages();
  }, []);

  const image = images[0] || { imageSrc: "", altImage: "" };

  useEffect(() => {
    const fetchKantorData = async () => {
      try {
        const response = await axios.get<KantorData[]>(
          "http://localhost:3307/api/kantor_list"
        );
        setKantorList(response.data);
      } catch (error) {
        console.error("Error fetching kantor data", error);
      }
    };

    fetchKantorData();
  }, []);

  const columns = [
    { header: "Caption", accessor: "caption" },
    { header: "Col", accessor: "col" },
    { header: "Address", accessor: "address" },
  ];

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
      {kantorList.map((kantor, index) => {
        const image = images[index];
        return (
          <FasilitasCard
            key={kantor.id}
            imgAsset={image.imageSrc}
            asstType={kantor.type}
            asstName={kantor.name}
            col={columns}
            data={[kantor]} // Passing individual kantor data
          />
        );
      })}
      <Card
        imageContent={offering.imageSrc}
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
export default Kantor;
