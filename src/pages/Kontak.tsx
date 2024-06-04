import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import { FaEnvelope } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import "../App.css";
import { link } from "fs";
import Accordion from "../component/OperationArea";

export default () => {
  const items = [
    {
      title: "Kantor Pusat",
      caption: "Kantor Utama",
      content: "PT. Orela Bahari Mandiri",
      address:
        "Jl. Tenggiri No 103 D, Tanjung Priok, Jakarta Utara, 14320 Indonesia",
      address1: "",
      address2: "",
    },
    {
      title: "Maringgai",
      caption: "Cahang Maringgai",
      content: "Jl. Kuala Penet, Dusun 1 Tegal Asri",
      address: "Labuhan Maringgai Lampung Timur,",
      address1: "Lampung",
      address2: "",
    },
    {
      title: "Merak",
      caption: "Cabang Merak",
      content: "Jl. Darma Kusuma Link. Pagebangan",
      address: "RT.012/RW.003 Gang Darma Kusuma No. 3",
      address1: "Kel. Ketileng, Kec. Cilegon,",
      address2: "Kota Cilegon, Banten 42416",
    },
    {
      title: "Samarinda",
      caption: "Cabang Samarinda",
      content: "Jl. Marsda A Saleh Gang V, Blok B No. 22",
      address: "Kel. Sidomulyo, Kec. Samarinda Illir",
      address1: "Kota Samarinda, Kalimantan Timur, 57116",
      address2: "",
    },
    {
      title: "Balikpapan",
      caption: "Cabang Balikpapan",
      content: "Jalan Riau No.3A, Rt.1",
      address: "Kel. Prapatan, Kec. Balikpapan Kota,",
      address1: "Desa/Kelurahan Prapatan, Kec. Balikpapan Kota,",
      address2: "Kota Balikpapan, Provinsi Kalimantan Timur",
    },
    {
      title: "Banjarmasin",
      caption: "Cabang Banjarmasin",
      content: "Jl. Purnasakti Komp. Cara Ya Alam Permai II",
      address: "No. 5, Rt 029, RW 002",
      address1: "Desa/Kelurahan Basirih, Kec. Banjarmasin Barat,",
      address2: "Kota Banjarmasin, Provinsi Kalimantan Selatan",
    },
    {
      title: "Batam",
      caption: "Cabang Batam",
      content: "Kawasan Bintang Industri II, Type G No.23 A,",
      address: "Desa/Kelurahan Tanjung Uncang,",
      address1: "Kec. Batu Aji,",
      address2: "Kota Batam, Provinsi Kepulauan Riau",
    },
    {
      title: "Cirebon",
      caption: "Cabang Cirebon",
      content: "Penggung Utara Gang Cendrawasih 4 no.87",
      address: "RT.3/ RW.10, Desa/Kelurahan Harjamukti,",
      address1: "Kec. Harjamukti, Kota Cirebon, Provinsi Jawa Barat",
      address2: "",
    },
    {
      title: "Patimban",
      caption: "Cabang Patimban",
      content: "Dusun Gempol 1 RT001/Rw.001,",
      address: "Desa/Kelurahan Gempol, Kec. Pusakanagara,",
      address1: "Kab. Subang, Provinsi Jawa Barat",
      address2: "",
    },
  ];
  return (
    <>
      <Navbar />
      <Banner
        bgImage="../img/service/consultant/consultant_jumbotron.jpg"
        headCaption="Kontak"
        captionSection="Kami siap untuk membantu segala kebutuhan Anda"
        btnAction="none"
      />

      <section className="mb-20">
        <div className="relative mx-6 my-10 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:my-20">
          <h1 className="text-3xl font-raleway font-medium text-ne02 lg:text-4xl">
            Tim Kontak 24 Jam
          </h1>
        </div>

        <div className="mx-6 mb-10 px-4 lg:px-0 lg:ml-32 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-pr00">
            <div className="flex items-center gap-x-4 pb-4 sm:pb-6">
              <div className="grow">
                <h3 className="text-xl font-medium text-pr07 pb-2">
                  Dharma Kala’ Tiku
                </h3>
                <p className="text-xs font-montserrat text-pr08 uppercase">
                  Direktur
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex gap-x-2">
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-medium text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                  href="https://wa.me/628121919822"
                  target="_blank">
                  <FaWhatsapp className="size-6" />
                </a>
                <a href="https://wa.me/628121919822" target="_blank">
                  +62 812-1919-822
                </a>
              </div>
              <div className="flex gap-x-2 font-montserrat">
                <a
                  className="inline-flex justify-center mt-2 items-center size-8 text-sm font-medium text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                  href="#">
                  <FaEnvelope className="size-6" />
                </a>
                <ul>
                  <li>dharma@orelabahari.co.id</li>
                  <li>bm.orelatpk@yahoo.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-pr00">
            <div className="flex items-center gap-x-4 pb-4 sm:pb-6">
              <div className="grow">
                <h3 className="text-xl font-medium text-pr07 pb-2">
                  Capt. Alimudin
                </h3>
                <p className="text-xs font-montserrat text-pr08 uppercase">
                  Kepala Cabang Jakarta
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex gap-x-2">
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-medium text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                  href="https://wa.me/628121919822"
                  target="_blank">
                  <FaWhatsapp className="size-6" />
                </a>
                <a href="https://wa.me/62817106338" target="_blank">
                  +62 817-106-338
                </a>
              </div>
              <div className="flex gap-x-2 font-montserrat">
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-medium text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                  href="#">
                  <FaEnvelope className="size-6" />
                </a>
                <p>alimudin@orelabahari.co.id</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-pr00">
            <div className="flex items-center gap-x-4 pb-4 sm:pb-6">
              <div className="grow">
                <h3 className="text-xl font-medium text-pr07 pb-2">Ahyar</h3>
                <p className="text-xs font-montserrat text-pr08 uppercase">
                  Operation Manager
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex gap-x-2">
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-medium text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                  href="#">
                  <FaWhatsapp className="size-6" />
                </a>
                <p>+62-858-8255-3108</p>
              </div>
              <div className="flex gap-x-2 font-montserrat">
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-medium text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                  href="#">
                  <FaEnvelope className="size-6" />
                </a>
                <p>ahyar@orelabahari.co.id</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-pr00">
            <div className="flex items-center gap-x-4 pb-4 sm:pb-6">
              <div className="grow">
                <h3 className="text-xl font-medium text-pr07 pb-2">Hastuty</h3>
                <p className="text-xs font-montserrat text-pr08 uppercase">
                  Corp Secretary
                </p>
              </div>
            </div>

            <div className="mt-3 space-y-2">
              <div className="flex gap-x-2">
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-medium text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                  href="https://wa.me/6285340171732"
                  target="_blank">
                  <FaWhatsapp className="size-6" />
                </a>
                <a href="https://wa.me/6285340171732" target="_blank">
                  +62 853-4017-1732
                </a>
              </div>
              <div className="flex gap-x-2 font-montserrat">
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-medium text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                  href="#">
                  <FaEnvelope className="size-6" />
                </a>
                <p>hastuty@orelabahari.co.id</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-pr00">
            <div className="flex items-center gap-x-4 pb-4 sm:pb-6">
              <div className="grow">
                <h3 className="text-xl font-medium text-pr07 pb-2">
                  Miftahul Haq
                </h3>
                <p className="text-xs font-montserrat text-pr08 uppercase">
                  Cargo Division
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex gap-x-2">
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-medium text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                  href="#">
                  <FaWhatsapp className="size-6" />
                </a>
                <p>+62-812-9975-1637</p>
              </div>
              <div className="flex gap-x-2 font-montserrat">
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-medium text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                  href="mailto:miftah@orelabahari.co.id">
                  <FaEnvelope className="size-6" />
                </a>
                <a href="mailto:miftah@orelabahari.co.id">
                  miftah@orelabahari.co.id
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative mx-6 my-10 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:my-20">
          <h1 className="text-3xl font-raleway font-medium text-ne02 lg:text-4xl pb-8">
            Area Operasional
          </h1>
          <div className="map-responsive mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.1433722883917!2d106.88036427478188!3d-6.111391659934747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1f3592fbb0c9%3A0x95a9e16ebb2050e!2sPT.%20Orela%20Bahari%20Mandiri!5e0!3m2!1sid!2sid!4v1714703522319!5m2!1sid!2sid"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div>
            <Accordion items={items} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
