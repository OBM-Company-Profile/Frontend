import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Jumbotron from "../component/Jumbotron";
import Button from "../component/Button";
import Content from "../component/Content";
import Card from "../component/Card";
import { useEffect, useState } from "react";
import serviceData from "../json/service.json";
import axios from "axios";
import LogoClient from "../component/LogoClient";
interface ImageData {
  id: number;
  imageSrc: string;
  altImage: string;
  category: string;
}

const Home = () => {
  const [jumbotron, setJumbotron] = useState<ImageData[]>([]);
  const [images, setImages] = useState<ImageData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [services, setServices] = useState<any[]>([]);
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

  const banner = jumbotron[0] || { imageSrc: "", altImage: "" };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:3307/api/images", {
          params: { category: "home" },
        });
        setImages(response.data);
      } catch (err) {
        setError("Failed to fetch images");
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Fetching images with category 'home'
        const response = await axios.get("http://localhost:3307/api/images", {
          params: { category: "home" },
        });
        setImages(response.data);

        // Merge the JSON data with the image data based on id
        const combinedData = serviceData.service.map((service, index) => {
          // Find the image that matches the current service index or other logic
          const matchingImage = response.data.find(
            (image: ImageData) => image.id === index + 6 // Adjust matching condition based on your data
          );

          return {
            ...service,
            backgroundImage: matchingImage ? matchingImage.imageSrc : "",
          };
        });

        setServices(combinedData);
      } catch (err) {
        setError("Failed to fetch images");
      }
    };

    fetchImages();
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

  const offer = quotation[1] || { imageSrc: "", altImage: "" };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Navbar />
      <Jumbotron
        bgImage={banner.imageSrc}
        headCaption="Melayani berbagai kebutuhan kapal Anda"
        captionSection="Didukung keahlian serta pengalaman, PT. Orela Bahari Mandiri telah
            menangani berbagai jenis kebutuhan keagenan kapal dan pelayaran yang
            sesuai dengan kebutuhan bisnis pelanggan."
        btnAction="Company Profile"
        showButton={true} // Pass `true` to show the button
      />

      {/* <Jumbotron /> */}

      {/*  */}
      <div className="max-w-[85rem] sm:ms-3 lg:ms-20 mt-20 px-8 sm:px-6 lg:px-10">
        <div className="grid justify-center lg:grid-cols-7 lg:gap-x-10 xl:gap-x-12 lg:content-center lg:items-center">
          <div className="text-pretty lg:col-span-4">
            <h1 className="inline-block text-3xl font-raleway font-medium text-ne02 lg:text-4xl">
              Sekilas Tentang OBM
            </h1>
            <p className="mt-8 font-montserrat text-lg text-ne02">
              PT. Orela Bahari Mandiri (OBM) sebagai perusahaan pelayaran dan
              penyedia jasa keagenan kapal yang profesional telah melayani
              berbagai permintaan kebutuhan dan jenis kapal dalam industri
              maritim di Indonesia.
            </p>
            <p className="my-6 font-montserrat text-lg text-ne02">
              Sejak berdiri tahun 2017, OBM terus berkembang hingga kini menjadi
              salah satu perusahaan agensi perkapalan yang diperhitungkan dan
              direkomendasikan di Indonesia. OBM berkomitmen untuk memberikan
              layanan profesional yang memenuhi standar, berkualitas, dan biaya
              yang terukur secara konsisten untuk kesuksesan bisnis customer
              sebagai mitra usaha.
            </p>
            <a href="/tentang">
              <Button variant="primary">Selengkapnya</Button>
            </a>
          </div>

          <div className="lg:col-span-3 mt-10 lg:mt-0">
            {images.length > 2 && (
              <img
                className="w-auto h-auto lg:hidden"
                src={images[2]?.imageSrc} // First image from the list
                alt={images[2]?.altImage || "sekilas OBM"}
              />
            )}
            {images.length > 1 && (
              <img
                className="hidden lg:inline-block lg:w-auto lg:h-auto"
                src={images[1]?.imageSrc} // First image from the list
                alt={images[1]?.altImage || "sekilas OBM"}
              />
            )}
          </div>
        </div>
      </div>
      <section>
        <div className="lg:ms-20 ms-4 me-4 sm:ms-3 sm:me-0 lg:ms-24 lg:me-2 px-4 mx-10 lg:ml-16 lg:mt-20 lg:mb-32 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 shadow-sm overflow-hidden">
            <div className="bg-pr08 block p-4 md:p-5 relative">
              <div className="flex md:grid lg:flex items-center gap-y-3 gap-x-5">
                <div className="text-white">
                  <img
                    className="w-16 h-auto"
                    src="./img/home_assets/icons/employee.png"
                  />
                  <h1 className="text-raleway font-bold text-4xl">200+</h1>
                  <p className="font-montserrat font-medium text-base lg:text-lg py-2">
                    Employee
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-pr00 block p-4 md:p-5 relative">
              <div className="flex md:grid lg:flex gap-y-3 gap-x-5">
                <div className="">
                  <img
                    className="w-16 h-auto"
                    src="./img/home_assets/icons/branch.png"
                  />
                  <h1 className="text-raleway font-bold text-4xl">30+</h1>
                  <p className="font-montserrat text-base lg:text-lg font-medium py-2">
                    Branch & site in Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-pr03 block p-4 md:p-5 relative">
              <div className="flex md:grid lg:flex gap-y-3 gap-x-5">
                <div className="">
                  <img
                    className="w-16 h-auto"
                    src="./img/home_assets/icons/cargo-ship.png"
                  />
                  <h1 className="text-raleway font-bold text-4xl">1000+</h1>
                  <p className="font-montserrat font-medium text-base lg:text-lg py-2">
                    Ship Handling Per Year
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-sc06 block p-4 md:p-5 relative">
              <div className="flex md:grid lg:flex gap-y-3 gap-x-5">
                <div className="text-white">
                  <img
                    className="w-16 h-auto"
                    src="./img/home_assets/icons/vendor.png"
                  />
                  <h1 className="text-raleway font-bold text-4xl">50+</h1>
                  <p className="font-montserrat font-medium text-base lg:text-lg py-2">
                    Vendors & Share Holder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-20">
        <div className="relative">
          <section className="bg-pr08 overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
              <div className="overflow-y-auto relative flex items-center justify-center w-full lg:order-1 lg:w-7/12">
                <div className="relative mx-6 my-10 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:my-20">
                  <h1 className="pb-8 text-3xl font-raleway text-medium text-ne01 sm:text-4xl">
                    Sambutan Direksi
                  </h1>
                  <p className="font-montserrat font-semibold text-base lg:text-lg text-ne01 pb-6">
                    Terima kasih kepada semua Customer yang berbahagia.
                  </p>
                  <p className="font-montserrat text-base lg:text-lg text-ne01 pb-6">
                    Atas kepercayaan dan dukungan dari customer, OBM mendapatkan
                    pengalaman bahkan bertahan melalui krisis. Kami memberikan
                    pelayanan atas semua permintaan pelanggan secara profesional
                    dan bertanggung jawab, menjadikan tim OBM semakin
                    berpengalaman, solutif, dan inofatif untuk beradaptasi
                    memenuhi kebutuhan dan permintaan pelanggan.
                  </p>
                  <p className="font-montserrat text-base lg:text-lg text-ne01 pb-6">
                    “Ora et Labora” adalah prinsip hidup dan kerja kami untuk
                    mencapai visi dan misi perusahaan. Tujuan utama kami adalah
                    menjadikan pelanggan sebagai mitra kerja untuk pencapaian
                    tujuan yang sama yaitu keberhasilan.
                  </p>
                  <p className="font-montserrat text-lg text-ne01 pb-6">
                    Kekuatan hubungan sosial para Pendiri untuk mengelola dan
                    membimbing karyawan menjadi gaya dan identitas baru untuk
                    melayani Pelanggan sebagai Keluarga.
                  </p>
                </div>
              </div>
              <div className="relative w-full overflow-hidden lg:order-0 h-96 lg:h-auto lg:w-5/12">
                <div className="absolute inset-0">
                  {images.length > 3 && (
                    <img
                      className="object-cover w-full h-full scale-10 lg:object-center brightness-100"
                      src={images[3]?.imageSrc} // First image from the list
                      alt={images[3]?.altImage || "sambutan"}
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="relative">
        <div className="mx-6 my-10 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:mt-20 lg:mb-0">
          <h1 className="my-2 text-3xl font-raleway font-medium text-ne02 sm:text-4xl">
            Layanan
          </h1>
          <p className="my-8 font-montserrat text-base lg:text-lg">
            Memanfaatkan sumber daya, pengalaman, dan keahlian group kami
            menyediakan layanan keagenan dan bisnis pelayaran yang terintegrasi.
          </p>
        </div>
        <div className="flex justify-center items-center min-h-screen px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {services.map((service, index) => (
              <Content
                key={index}
                title={service.title}
                description={service.description}
                backgroundImage={service.backgroundImage}
                desc1={service.desc1}
                desc2={service.desc2}
                desc3={service.desc3}
                desc4={service.desc4}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <section className="mb-10">
          <div className="flex flex-col">
            <div className="relative mx-6 mt-10 mb-6 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:mt-20 lg:mb-4">
              <h2 className="inline-block text-3xl font-raleway font-medium text-ne02 lg:text-4xl pb-10">
                Mitra & Klien Kami
              </h2>
              <div className="px-4 lg:px-0">
                <LogoClient />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Card
        imageContent={offer.imageSrc}
        contentTitle="Quotation"
        captionText="Beritahu kebutuhan Anda melalui email"
        btnAction="Email"
      />
      <Footer />
    </>
  );
};
export default Home;
