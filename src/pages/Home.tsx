import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Jumbotron from "../component/Jumbotron";
import Button from "../component/Button";
import Content from "../component/Content";
import Card from "../component/Card";
import { useEffect, useState } from "react";
import axios from "axios";
interface ImageData {
  id: number;
  imageSrc: string;
  altImage: string;
  category: string;
}

const Home = () => {
  const [jumbotron, setJumbotron] = useState<ImageData[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
  const cardsData = [
    {
      title: "Shipping",
      description: "Kami menyediakan kapal untuk berbagai kebutuhan, seperti :",
      backgroundImage: "/img/home_assets/shipping.jpeg",
      desc1: "1. Kapal Cargo",
      desc2: "2. Kapal Tanker",
      desc3: "3. Kapal Tugboat",
      desc4: "4. Kapal Crew Boat",
      link: "/layanan/shipping",
    },
    {
      title: "Agency",
      description:
        "OBM berpengalaman menangani Jasa Keagenan hampir semua jenis kapal, namun tidak terbatas pada kegiatan bongkar muat Ship to Ship di sebagian besar wilayah perairan dan pelabuhan Indonesia.",
      backgroundImage: "/img/home_assets/agency.jpg",
      desc1: "",
      desc2: "",
      desc3: "",
      desc4: "",
      link: "/layanan/shipping",
    },
    {
      title: "Offshore Service",
      description:
        "OBM, tidak hanya fokus pada layanan keagenan kapal liner dan tramper tetapi juga melayani keagenan kapal Offshore yang mampu memberikan layanan satu paket.",
      backgroundImage: "/img/home_assets/offshore.jpg",
      desc1: "",
      desc2: "",
      desc3: "",
      desc4: "",
      link: "/layanan/marine",
    },
    {
      title: "Launch Service",
      description:
        "Kapal anda bisa terus berlayar sambil kami mengirimkan perbekalan, suku cadang, dan penggantian crew lewat laut tanpa harus menghabiskan biaya tunggu di pelabuhan.",
      backgroundImage: "/img/home_assets/launch_service.jpeg",
      desc1: "",
      desc2: "",
      desc3: "",
      desc4: "",
      link: "/layanan/shipping/launch-service",
    },
    {
      title: "Mooring & Pilotage",
      description:
        "OBM memberikan dukungan yang lengkap terhadap kebutuhan bisnis pelayaran termasuk layanan Kepil dan Mooring Master baik di Pelabuhan, Offshore dan kegiatan Ship to Ship.",
      backgroundImage: "/img/home_assets/mooring.jpg",
      desc1: "",
      desc2: "",
      desc3: "",
      desc4: "",
      link: "/layanan/port-service",
    },
    {
      title: "Husbandry Service",
      description:
        "Layanan ini bertujuan untuk meminimalkan biaya operasional kapal, khususnya penanganan awak kapal, pengiriman barang-barang kebutuhan kapal dan crew dengan aman.",
      backgroundImage: "/img/home_assets/husbandry.jpg",
      desc1: "",
      desc2: "",
      desc3: "",
      desc4: "",
      link: "/layanan/shipping/husbandry-service",
    },
  ];
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
            <img
              className="w-auto h-auto lg:hidden"
              src="./img/home_assets/intro_mobile.jpeg"
              alt="Image Description"
            />
            <img
              className="hidden lg:inline-block lg:w-auto lg:h-auto"
              src="./img/home_assets/intro_desktop.jpeg"
              alt="Image Description"
            />
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
                  <img
                    className="object-cover w-full h-full scale-10 lg:object-center brightness-100"
                    src="./img/home_assets/sambutan.jpg"
                    alt=""
                  />
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
            {cardsData.map((card, index) => (
              <Content
                key={index}
                title={card.title}
                description={card.description}
                backgroundImage={card.backgroundImage}
                desc1={card.desc1}
                desc2={card.desc2}
                desc3={card.desc3}
                desc4={card.desc4}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </div>
      <section>
        <div className="flex flex-col justify-center items-center mb-20">
          <div className="relative mx-6 mt-10 mb-6 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:mt-20 lg:mb-4">
            <h2 className="inline-block text-3xl font-raleway font-medium text-ne02 lg:text-4xl pb-10">
              Mitra & Klien Kami
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-4">
              {/* Client logos here */}
              <div className="flex items-center justify-center">
                <img
                  src="./img/klien_logo/pertamina.png"
                  alt="pertamina"
                  className="h-12"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="./img/klien_logo/timah.png"
                  alt="timah"
                  className="h-12"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="./img/klien_logo/shell.png"
                  alt="shell"
                  className="h-20"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="./img/klien_logo/krakatau.png"
                  alt="krakatau"
                  className="h-12"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="./img/klien_logo/sinarmas.png"
                  alt="sinarmas"
                  className="h-auto"
                />
              </div>

              <div className="flex items-center justify-center">
                <img
                  src="./img/klien_logo/interport.png"
                  alt="interport"
                  className="h-16"
                />
              </div>
            </div>
            {isVisible && (
              <div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-4">
                  {/* Client logos here */}
                  <div className="flex items-center justify-center">
                    <img
                      src="./img/klien_logo/hitachi.png"
                      alt="hitachi"
                      className="h-16"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="./img/klien_logo/soechi.png"
                      alt="soechi"
                      className="h-12"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="./img/klien_logo/gac.png"
                      alt="gac"
                      className="sm:mt-4 h-16"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="./img/klien_logo/lintas_samudra.png"
                      alt="lintas"
                      className="h-12"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="./img/klien_logo/pelindo.png"
                      alt="pelindo"
                      className="h-auto"
                    />
                  </div>

                  <div className="flex items-center justify-center">
                    <img
                      src="./img/klien_logo/oceanindo.png"
                      alt="oceanindo"
                      className="h-12"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-4 mb-4 sm:mb-0">
                  {/* Client logos here */}
                  <div className="flex items-center justify-center">
                    <img
                      src="./img/klien_logo/Marunda.png"
                      alt="marunda"
                      className="h-16"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="./img/klien_logo/bahtera.png"
                      alt="bahtera"
                      className="h-20"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="./img/klien_logo/MedcoEnergi.png"
                      alt="medco"
                      className="h-16"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="./img/klien_logo/indika.png"
                      alt="indika"
                      className="h-32"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="./img/klien_logo/apm.png"
                      alt="apm"
                      className="h-auto"
                    />
                  </div>

                  <div className="flex items-center justify-center">
                    <img
                      src="./img/klien_logo/pertama_jaya.png"
                      alt="pertamajaya"
                      className="h-12"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            className="font-semibold font-montserrat uppercase place-items-center px-6 py-3 text-sm my-2 inline-flex place-items-center bg-sc06 text-ne01 hover:bg-pr03"
            onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? "Ciutkan" : "Selengkapnya"}
          </button>
        </div>
      </section>
      <Card
        imageContent="./img/service/quotation.jpg"
        contentTitle="Quotation"
        captionText="Beritahu kebutuhan Anda melalui email"
        btnAction="Email"
      />
      <Footer />
    </>
  );
};
export default Home;
