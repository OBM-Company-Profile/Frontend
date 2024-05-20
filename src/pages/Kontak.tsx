import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import { FaEnvelope } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import "../App.css";

export default () => {
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
          <div className="hs-accordion-group">
            <div
              className="hs-accordion"
              id="hs-basic-with-title-and-arrow-stretched-heading-one">
              <button
                className="font-raleway text-sm lg:text-base border-b uppercase hs-accordion-toggle hs-accordion-active:text-sc06 py-3 inline-flex items-start justify-between gap-x-3 w-full font-semibold text-start text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                Kantor Pusat
                <svg
                  className="hs-accordion-active:hidden block size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
                <svg
                  className="hs-accordion-active:block hidden size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                className="flex flex-col sm:flex-row px-4 py-8 border-b hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                <div className="items-start">
                  <div className="font-montserrat">
                    <p className="text-base lg:text-lg font-semibold">
                      Kantor Utama
                    </p>
                    <ul>
                      <li>PT. Orela Bahari Mandiri</li>
                      <li>
                        Jl. Tenggiri No 103 D, Tanjung Priok, Jakarta Utara,
                        14320 Indonesia{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hs-accordion"
              id="hs-basic-with-title-and-arrow-stretched-heading-two">
              <button
                className="font-raleway text-sm lg:text-base border-b uppercase hs-accordion-toggle hs-accordion-active:text-sc06 py-3 inline-flex items-start justify-between gap-x-3 w-full font-semibold text-start text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                Maringgai
                <svg
                  className="hs-accordion-active:hidden block size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
                <svg
                  className="hs-accordion-active:block hidden size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                className="px-4 py-8 border-b hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                <div className="font-montserrat text-base lg:text-lg">
                  <p className="font-semibold">Cabang Maringgai</p>
                  <ul>
                    <li>Jl. Kuala Penet, Dusun 1 Tegal Asri </li>
                    <li>Labuhan Maringgai Lampung Timur,</li>
                    <li>Lampung </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="hs-accordion"
              id="hs-basic-with-title-and-arrow-stretched-heading-three">
              <button
                className="font-raleway text-sm lg:text-base border-b uppercase hs-accordion-toggle hs-accordion-active:text-sc06 py-3 inline-flex items-start justify-between gap-x-3 w-full font-semibold text-start text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                Merak
                <svg
                  className="hs-accordion-active:hidden block size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
                <svg
                  className="hs-accordion-active:block hidden size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                className="px-4 py-8 border-b hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                <div className="font-montserrat text-base lg:text-lg">
                  <p className="font-semibold">Cabang Merak</p>
                  <ul>
                    <li>Jl. Darma Kusuma Link. Pagebangan</li>
                    <li> RT.012/RW. 003</li>
                    <li>Gang Darma Kusuma No. 3</li>
                    <li>Kel. Ketileng, Kec. Cilegon,</li>
                    <li>Kota Cilegon, Banten 42416</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="hs-accordion"
              id="hs-basic-with-title-and-arrow-stretched-heading-four">
              <button
                className="font-raleway text-sm lg:text-base border-b uppercase hs-accordion-toggle hs-accordion-active:text-sc06 py-3 inline-flex items-start justify-between gap-x-3 w-full font-semibold text-start text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
                Samarinda
                <svg
                  className="hs-accordion-active:hidden block size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
                <svg
                  className="hs-accordion-active:block hidden size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                className="px-4 py-8 border-b hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                <div className="font-montserrat text-base lg:text-lg">
                  <p className="font-semibold">Cabang Samarinda</p>
                  <ul>
                    <li>Jl. Marsda A Saleh Gang V, Blok B No. 22</li>
                    <li>Kel. Sidomulyo, Kec. Samarinda Illir</li>
                    <li>Kota Samarinda, Kalimantan Timur, 57116</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="hs-accordion"
              id="hs-basic-with-title-and-arrow-stretched-heading-five">
              <button
                className="font-raleway text-sm lg:text-base border-b uppercase hs-accordion-toggle hs-accordion-active:text-sc06 py-3 inline-flex items-start justify-between gap-x-3 w-full font-semibold text-start text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
                Balikpapan
                <svg
                  className="hs-accordion-active:hidden block size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
                <svg
                  className="hs-accordion-active:block hidden size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                className="px-4 py-8 border-b hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                <div className="font-montserrat text-base lg:text-lg">
                  <p className="font-semibold">Cabang Balikpapan</p>
                  <ul>
                    <li>Jalan Riau No.3A, Rt.15</li>
                    <li>Kel. Prapatan, Kec. Balikpapan Kota,</li>
                    <li>Desa/Kelurahan Prapatan, Kec. Balikpapan Kota,</li>
                    <li>Kota Balikpapan, Provinsi Kalimantan Timur</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="hs-accordion"
              id="hs-basic-with-title-and-arrow-stretched-heading-six">
              <button
                className="font-raleway text-sm lg:text-base border-b uppercase hs-accordion-toggle hs-accordion-active:text-sc06 py-3 inline-flex items-start justify-between gap-x-3 w-full font-semibold text-start text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                Banjarmasin
                <svg
                  className="hs-accordion-active:hidden block size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
                <svg
                  className="hs-accordion-active:block hidden size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-six"
                className="px-4 py-8 border-b hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                <div className="font-montserrat text-base lg:text-lg">
                  <p className="font-semibold">Cabang Banjarmasin</p>
                  <ul>
                    <li>Jl. Purnasakti Komp. Cara Ya Alam Permai II</li>
                    <li>No. 5, Rt 029, RW 002</li>
                    <li>Desa/Kelurahan Basirih, Kec. Banjarmasin Barat,</li>
                    <li>Kota Banjarmasin, Provinsi Kalimantan Selatan</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="hs-accordion"
              id="hs-basic-with-title-and-arrow-stretched-heading-seven">
              <button
                className="font-raleway text-sm lg:text-base border-b uppercase hs-accordion-toggle hs-accordion-active:text-sc06 py-3 inline-flex items-start justify-between gap-x-3 w-full font-semibold text-start text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-seven">
                Batam
                <svg
                  className="hs-accordion-active:hidden block size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
                <svg
                  className="hs-accordion-active:block hidden size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-seven"
                className="px-4 py-8 border-b hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-seven">
                <div className="font-montserrat text-base lg:text-lg">
                  <p className="font-semibold">Cabang Batam</p>
                  <ul>
                    <li>Kawasan Bintang Industri II, Type G No.23 A,</li>
                    <li>Desa/Kelurahan Tanjung Uncang,</li>
                    <li>Kec. Batu Aji,</li>
                    <li>Kota Batam, Provinsi Kepulauan Riau</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="hs-accordion"
              id="hs-basic-with-title-and-arrow-stretched-heading-eight">
              <button
                className="font-raleway text-sm lg:text-base border-b uppercase hs-accordion-toggle hs-accordion-active:text-sc06 py-3 inline-flex items-start justify-between gap-x-3 w-full font-semibold text-start text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-eight">
                Cirebon
                <svg
                  className="hs-accordion-active:hidden block size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
                <svg
                  className="hs-accordion-active:block hidden size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-eight"
                className="px-4 py-8 border-b hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-eight">
                <div className="font-montserrat text-base lg:text-lg">
                  <p className="font-semibold">Cabang Cirebon</p>
                  <ul>
                    <li>Jl. Purnasakti Komp. Cara Ya Alam Permai II</li>
                    <li>No. 5, Rt 029, RW 002</li>
                    <li>Desa/Kelurahan Basirih, Kec. Banjarmasin Barat,</li>
                    <li>Kota Banjarmasin, Provinsi Kalimantan Selatan</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="hs-accordion"
              id="hs-basic-with-title-and-arrow-stretched-heading-nine">
              <button
                className="font-raleway text-sm lg:text-base border-b uppercase hs-accordion-toggle hs-accordion-active:text-sc06 py-3 inline-flex items-start justify-between gap-x-3 w-full font-semibold text-start text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-nine">
                Patimban
                <svg
                  className="hs-accordion-active:hidden block size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
                <svg
                  className="hs-accordion-active:block hidden size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-nine"
                className="px-4 py-8 border-b hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-nine">
                <div className="font-montserrat text-base lg:text-lg">
                  <p className="font-semibold">Cabang Patimban</p>
                  <ul>
                    <li>Dusun Gempol 1 RT001/Rw.001,</li>
                    <li>Desa/Kelurahan Gempol, Kec. Pusakanagara,</li>
                    <li>Kab. Subang, Provinsi Jawa Barat</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
