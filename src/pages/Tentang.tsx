import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Card from "../component/Card";
import Timelines from "../component/Timeline";
import "../App.css";
import Jumbotron from "../component/Jumbotron";
import { useEffect, useState } from "react";
import axios from "axios";
import ValueCard from "../component/valueCard";
interface ImageData {
  id: number;
  imageSrc: string;
  altImage: string;
  category: string;
}

interface CardData {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const Tentang = () => {
  const [jumbotron, setJumbotron] = useState<ImageData[]>([]);
  const [images, setImages] = useState<ImageData[]>([]);
  const [cards, setCards] = useState<CardData[]>([]);
  const [quotation, setQuotation] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJumbotron = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/images`,
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
  const banner = jumbotron[1] || { imageSrc: "", altImage: "" };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/images`,
          {
            params: { category: "tentang" },
          }
        );
        setImages(response.data);
      } catch (err) {
        setError("Failed to fetch images");
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const fetchQuotation = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/images`,
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

  const offer = quotation[1] || { imageSrc: "", altImage: "" };

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/company_value`
        );
        setCards(response.data);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Navbar />
      <Jumbotron
        bgImage={banner.imageSrc}
        headCaption="Tentang OBM"
        captionSection="OBM didirikan dan melewati masa-masa sulit sejak tahun 2017, 
        namun mampu bertahan melalui krisis & pandemi COVID-19 di tahun 2019 dan terus 
        sampai saat ini."
        btnAction="none"
        showButton={false}
      />
      <div className="relative">
        <section className="bg-pr09 overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
            <div className="overflow-y-auto relative flex items-center justify-center w-full lg:order-1 lg:w-7/12">
              <div className="relative mx-6 my-10 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:my-20">
                <h1 className="pb-8 text-3xl font-raleway text-medium text-ne01 sm:text-4xl">
                  Profil Perusahaan
                </h1>
                <p className="font-montserrat text-base lg:text-lg text-ne01 pb-6">
                  PT. Orela Bahari Mandiri (OBM) merupakan perusahaan Pelayaran
                  dan Jasa Keagenan Kapal yang didirikan tahun 2017.
                </p>
                <p className="font-montserrat text-base lg:text-lg text-ne01 pb-6">
                  Latar belakang yang sama di antara para pendiri telah
                  mendorong Dharma Kala’ Tiku sebagai inisiator bersama para
                  koleganya untuk mendirikan OBM, dimulai dari jasa keagenan
                  kapal, hingga kini bertumbuh sebagai satu perusahaan Pelayaran
                  yang profesional serta diperhitungkan dalam industri maritim
                  Indonesia dengan pengembangan di bidang terkait.
                </p>
                <p className="font-montserrat text-base lg:text-lg text-ne01 pb-6">
                  Sejak didirikan di 2017, PT. OBM melewati masa-masa sulit,
                  namun mampu bertahan, bahkan melalui pandemi COVID-19 di tahun
                  2019 dan terus berkembang sampai saat ini. Krisis selalu
                  membawa perubahan dan kami belajar dari masa lalu untuk
                  menghadirkan layanan yang beradaptasi dengan kebutuhan
                  pelanggan.
                </p>
                <p className="font-montserrat text-base lg:text-lg text-ne01 pb-6">
                  OBM berkomitmen untuk memberikan yang terbaik dalam mendukung
                  kesuksesan customer sebagai mitra usaha. Dengan semangat
                  kemitraan dan tujuan yang sederhana yaitu menjadi perusahaan
                  yang berkarakter, OBM telah mampu melayani kebutuhan hampir
                  semua jenis kapal di berbagai wilayah Negara Indonesia.
                </p>
              </div>
            </div>
            <div className="relative w-full overflow-hidden lg:order-2 h-96 lg:h-auto lg:w-5/12">
              <div className="absolute inset-0">
                {images.length > 0 && (
                  <img
                    className="object-cover w-full h-full scale-100 brightness-50"
                    src={images[0]?.imageSrc} // First image from the list
                    alt={images[0]?.altImage || "tentang"}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div className="mx-6 py-10 px-4 lg:mx-32 lg:mb-24">
          <h1 className="font-raleway text-3xl sm:text-4xl text-ne02 py-4 sm:py-8">
            Milestone
          </h1>
          <div className="items-center justify-center">
            <Timelines />
          </div>
        </div>
      </section>

      <section>
        <div
          className="relative bg-cover bg-centerlg:h-[550px] w-full flex justify-center"
          style={{
            backgroundImage:
              images.length > 1 ? `url(${images[1]?.imageSrc})` : "none",
          }}>
          <div className="px-10 py-20 lg:px-0 lg:pl-32 lg:pr-20 lg:py-20py-8 bg-ne02 w-screen items-center h-full bg-opacity-75">
            <div className="flex flex-col lg:flex-row gap-x-10">
              <div className="mb-10 mx-0">
                <h2 className="font-raleway text-3xl font-semibold text-ne01 mb-6">
                  Visi
                </h2>
                <p className="font-montserrat text-base lg:text-lg text-ne01">
                  Menjadi prioritas pelanggan, sebagai penyedia jasa terpilih
                  untuk keagenan kapal yang bermutu, berkualitas, terpercaya,
                  dan handal.
                </p>
              </div>
              <div className="">
                <h2 className="font-raleway text-3xl font-semibold text-ne01 mb-6">
                  Misi
                </h2>
                <div className="font-montserrat text-base lg:text-lg text-ne01">
                  <ul className="list-disc">
                    <li>
                      Bekerja dengan semangat excellent di dalam semua proses
                      dan fokus pada kepuasan pelanggan tanpa mengabaikan K3L
                      serta perbaikan berkelanjutan untuk membangun kepercayaan
                      pelanggan.
                    </li>
                    <li>
                      Berusaha kompetitif dengan mempersempit jarak antara
                      persyaratan pelanggan dengan kemampuan perusahaan
                      Membangun solusi inovatif, tepat mutu, tepat waktu, dan
                      tepat anggaran.
                    </li>
                    <li>
                      Mencegah terjadinya accident maupun incident yang
                      mengakibatkan kerugian fisik maupun materi dan hilangnya
                      waktu kerja.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <section className="bg-ne01 overflow-hidden">
          <div className="mx-6 my-10 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:my-20">
            <div>
              <h1 className="pb-8 text-3xl font-raleway text-medium text-ne02 sm:text-4xl">
                Value
              </h1>
              <div className="mb-10">
                <p className="hidden lg:inline-block font-montserrat text-base lg:text-lg text-ne02 pb-6">
                  OBM tidak mengambil keuntungan semata dari customer, namun
                  mengundang mereka sebagai mitra atau partner untuk
                  keberhasilan bersama. Kinerja professional sebagai niat yang
                  baik akan menguntungkan semua pihak dan membawa perusahaan
                  berjalan pada jalur yang sesuai untuk pencapaian nilai sosial
                  tertinggi, yaitu budaya berbagi dimulai dari kesejahteraan
                  karyawan dan pertumbuhan mitra usaha.
                </p>
                <p className="lg:hidden lg:inline-block font-montserrat text-base text-ne02 pb-6">
                  OBM tidak mengambil keuntungan semata dari customer, namun
                  mengundang mereka sebagai mitra atau partner untuk
                  keberhasilan bersama.
                </p>
                <p className="lg:hidden lg:inline-block font-montserrat text-base text-ne02 pb-6">
                  Kinerja professional sebagai niat yang baik akan menguntungkan
                  semua pihak dan membawa perusahaan berjalan pada jalur yang
                  sesuai untuk pencapaian nilai sosial tertinggi, yaitu budaya
                  berbagi dimulai dari kesejahteraan karyawan dan pertumbuhan
                  mitra usaha.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
                {cards.map((card) => (
                  <ValueCard
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                  />
                ))}
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

export default Tentang;
