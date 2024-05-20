import Banner from "../component/Banner";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import docsISO from "../assets/docs/OBM_CERTIFICATE_ISO.pdf";
import corruptAct from "../assets/docs/OBM-POL-01-0007 Corrupt Policy.pdf";
import whistleBlow from "../assets/docs/OBM-POL-01-0008 Whistle Blowing Policy.pdf";
import moneyLaundry from "../assets/docs/OBM-POL-01-0010 Anti-Money Laundering Policy.pdf";
import codePolicy from "../assets/docs/OBM-POL-01-0009 Code of Conduct Policy.pdf";
import sanction from "../assets/docs/OBM-POL-01-0011 Sanction Policy.pdf";

export default () => {
  return (
    <>
      <Navbar />
      <Banner
        bgImage="./img/quality/quality_banner.jpg"
        headCaption="Quality"
        captionSection="Zero delay, zero incident, zero complain"
      />
      <section>
        <div className="relative items-center mx-6 gap-x-8 my-10 sm:my-20 lg:mx-32">
          <div className="px-4 lg:px-0 sm:mt-4 text-left mt-6 sm:mt-10">
            <h1 className="font-raleway text-3xl text-medium sm:text-4xl text-ne02 pb-4 sm:pb-6">
              HSE & ISO
            </h1>
            <p className="font-montserrat text-base sm:text-lg text-ne02 pb-4">
              Perusahaan kami tersertifikasi ISO sejak tahun 2021 membuktikan
              kesadaran dan komitmen kami akan pentingnya manajemen Mutu,
              Kesehatan, Keselamatan dan Lingkungan.
            </p>
            <p className="sm:hidden font-montserrat text-base sm:text-lg text-ne02">
              Kami mengembangkan dan menerapkan prosedur yang ketat di setiap
              divisi untuk mencapai target Zero Complaint, Insident, Accident
              dan Kerusakan demi mencegah kerugian Perusahaan serta Customer dan
              Kerusakan Lingkungan.
            </p>
            <div className="my-6">
              <div className="grid lg:grid-cols-2 gap-3">
                <figure className="relative w-full h-48 sm:h-72 lg:h-full">
                  <img
                    className="size-full absolute top-0 start-0 object-cover"
                    src="./img/quality/content2.jpg"
                    alt="Image Description"
                  />
                </figure>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                  <figure className="relative w-full h-36 sm:h-60">
                    <img
                      className="size-full absolute top-0 start-0 object-cover object-center"
                      src="./img/quality/content3.jpg"
                      alt="Image Description"
                    />
                  </figure>
                  <figure className="relative w-full h-36 sm:h-60">
                    <img
                      className="size-full absolute top-0 start-0 object-cover object-center"
                      src="./img/quality/content1.jpg"
                      alt="Image Description"
                    />
                  </figure>
                </div>
              </div>
              <figcaption className="text-slate-400 mt-4 font-montserrat text-center">
                Manajemen HSE & ISO
              </figcaption>
            </div>
            <p className="hidden sm:inline-block font-montserrat text-base sm:text-lg text-ne02 pb-4">
              Kami mengembangkan dan menerapkan prosedur yang ketat di setiap
              divisi untuk mencapai target Zero Complaint, Insident, Accident
              dan Kerusakan demi mencegah kerugian Perusahaan serta Customer dan
              Kerusakan Lingkungan. KPI HSE kami adalah “nol” yang setara dengan
              pencapaian nilai “ratusan”. Penerapan prosedur HSE bukan jaminan
              mutlak keselamatan namun bertujuan untuk menekan resiko.
            </p>
            <p className="sm:hidden font-montserrat text-base sm:text-lg text-ne02 pb-4">
              KPI HSE kami adalah “nol” yang setara dengan pencapaian nilai
              “ratusan”. Penerapan prosedur HSE bukan jaminan mutlak keselamatan
              namun bertujuan untuk menekan resiko.
            </p>
            <a
              className="font-raleway text-base font-semibold text-pr08 sm:text-lg hover:text-sc06 underline"
              href={docsISO}
              target="_blank">
              Sertifikat ISO
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="relative items-center mx-6 px-4 sm:px-0 my-10 sm:my-20 lg:mx-32">
          <h1 className="font-raleway text-3xl font-medium sm:text-4xl text-ne02 pb-4 sm:pb-6">
            Management Policy
          </h1>
          <p className="font-montserrat text-base sm:text-lg text-ne02 pb-4">
            Kebijakan PT. OBM merujuk pada aturan-aturan pemerintah dan standar
            mutu sesuai dengan ISO 9001:2015, ISO 14001:2015, dan ISO
            45001:2018.
          </p>
          <div className="hs-accordion-group">
            <div
              className="hs-accordion"
              id="hs-basic-with-title-and-arrow-stretched-heading-one">
              <button
                className="font-raleway text-lg sm:text-xl border-b hs-accordion-toggle px-4 hs-accordion-active:bg-pr07 hs-accordion-active:text-ne01 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                Kebijakan Tindakan Korupsi
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
                className="px-4 pb-8 border-b hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                <p className="sm:hidden font-montserrat text-base sm:text-lg text-ne02 pt-4">
                  PT. Orela Bahari Mandiri berkomitmen untuk senantiasa
                  memelihara suatu lingkungan usaha dimana seluruh etika kerja
                  yang baik diterapkan.
                </p>
                <p className="sm:hidden font-montserrat text-base sm:text-lg text-ne02 py-4">
                  Setiap hubungan kerja dengan pihak lain harus dengan cara
                  profesional dan wajar di mana setiap karyawan harus menjunjung
                  tinggi standar kualitas dan intregritas.
                </p>
                <p className="hidden sm:inline-block font-montserrat text-base sm:text-lg text-ne02 py-4">
                  PT. Orela Bahari Mandiri berkomitmen untuk senantiasa
                  memelihara suatu lingkungan usaha dimana seluruh etika kerja
                  yang baik diterapkan. Setiap hubungan kerja dengan pihak lain
                  harus dengan cara profesional dan wajar di mana setiap
                  karyawan harus menjunjung tinggi standar kualitas dan
                  intregritas.
                </p>
                <a
                  className="font-raleway text-base font-semibold text-pr03 sm:text-lg hover:underline"
                  href={corruptAct}
                  target="_blank">
                  — Kebijakan Tindakan Korupsi
                </a>
              </div>
            </div>

            <div
              className="hs-accordion"
              id="hs-basic-with-title-and-arrow-stretched-heading-two">
              <button
                className="font-raleway text-lg sm:text-xl border-b hs-accordion-toggle px-4 hs-accordion-active:bg-pr07 hs-accordion-active:text-ne01 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                Kebijakan Pelaporan Pelanggaran
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
                id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                className="px-4 pb-8 border-b hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                <p className="hidden sm:inline-block font-montserrat text-base sm:text-lg text-ne02 py-4">
                  PT. Orela Bahari Mandiri, mempunyai kebijakan penerapan sistem
                  pelaporan pelanggaran (Whistle Blowing System) sebagai bagian
                  dari pengendalian PT. Orela Bahari Mandiri dalam rangka
                  mencegah adanya kecurangan dalam perusahaan kami. Sesuai
                  dengan standar etika yang berlaku, setiap pelanggaran yang
                  dilakukan oleh karyawan wajib dilaporkan kepada perusahaan.
                </p>
                <p className="sm:hidden font-montserrat text-base sm:text-lg text-ne02 py-4">
                  PT. Orela Bahari Mandiri, mempunyai kebijakan penerapan sistem
                  pelaporan pelanggaran (Whistle Blowing System) sebagai bagian
                  dari pengendalian PT. Orela Bahari Mandiri dalam rangka
                  mencegah adanya kecurangan dalam perusahaan kami.
                </p>
                <p className="sm:hidden font-montserrat text-base sm:text-lg text-ne02 pb-4">
                  Sesuai dengan standar etika yang berlaku, setiap pelanggaran
                  yang dilakukan oleh karyawan wajib dilaporkan kepada
                  perusahaan.
                </p>
                <a
                  className="font-raleway text-base font-semibold text-pr03 sm:text-lg hover:underline"
                  href={whistleBlow}
                  target="_blank">
                  — Kebijakan Pelaporan Pelanggaran
                </a>
              </div>
            </div>

            <div
              className="hs-accordion"
              id="hs-basic-with-title-and-arrow-stretched-heading-three">
              <button
                className="font-raleway text-lg sm:text-xl border-b hs-accordion-toggle px-4 hs-accordion-active:bg-pr07 hs-accordion-active:text-ne01 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                Kebijakan Anti Pencucian Uang
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
                className="px-4 pb-8 border-b hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                <p className="hidden sm:inline-block font-montserrat text-base sm:text-lg text-ne02 py-4">
                  Merupakan kebijakan PT. Orela Bahari Mandiri untuk menjalankan
                  bisnis sesuai dengan norma hukum nasional dan internasional
                  yang relevan yang dirancang untuk memerangi pencucian uang dan
                  pendanaan teroris. Serta merupakan komitmen PT. Orela Bahari
                  Mandiri dalam mencegah layanan kami dari kegiatan pencucian
                  uang
                </p>
                <p className="sm:hidden font-montserrat text-base sm:text-lg text-ne02 py-4">
                  Merupakan kebijakan PT. Orela Bahari Mandiri untuk menjalankan
                  bisnis sesuai dengan norma hukum nasional dan internasional
                  yang relevan yang dirancang untuk memerangi pencucian uang dan
                  pendanaan teroris.
                </p>
                <p className="sm:hidden font-montserrat text-base sm:text-lg text-ne02 pb-4">
                  Serta merupakan komitmen PT. Orela Bahari Mandiri dalam
                  mencegah layanan kami dari kegiatan pencucian uang
                </p>
                <a
                  className="font-raleway text-base font-semibold text-pr03 sm:text-lg hover:underline"
                  href={moneyLaundry}
                  target="_blank">
                  — Kebijakan Anti Pencucian Uang
                </a>
              </div>
            </div>

            <div
              className="hs-accordion"
              id="hs-basic-with-title-and-arrow-stretched-heading-four">
              <button
                className="font-raleway text-lg sm:text-xl border-b hs-accordion-toggle px-4 hs-accordion-active:bg-pr07 hs-accordion-active:text-ne01 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
                Kebijakan Kode Etik
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
                className="px-4 pb-8 border-b hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                <p className="hidden sm:inline-block font-montserrat text-base sm:text-lg text-ne02 py-4">
                  PT. Orela Bahari Mandiri yang bergerak dibidang agensi
                  pelayaran berkomitmen untuk menjalankan bisnis dengan
                  berpegang teguh kepada kode etik bisnis. Setiap individu di
                  dalam organisasi wajib mentaati kode etik yang tertera dalam
                  dokumen kebijakan ini.
                </p>
                <p className="sm:hidden font-montserrat text-base sm:text-lg text-ne02 py-4">
                  PT. Orela Bahari Mandiri yang bergerak dibidang agensi
                  pelayaran berkomitmen untuk menjalankan bisnis dengan
                  berpegang teguh kepada kode etik bisnis.
                </p>
                <p className="sm:hidden font-montserrat text-base sm:text-lg text-ne02 pb-4">
                  Setiap individu di dalam organisasi wajib mentaati kode etik
                  yang tertera dalam dokumen kebijakan ini.
                </p>
                <a
                  className="font-raleway text-base font-semibold text-pr03 sm:text-lg hover:underline"
                  href={codePolicy}
                  target="_blank">
                  — Kebijakan Kode Etik
                </a>
              </div>
            </div>

            <div
              className="hs-accordion"
              id="hs-basic-with-title-and-arrow-stretched-heading-five">
              <button
                className="font-raleway text-lg sm:text-xl border-b hs-accordion-toggle px-4 hs-accordion-active:bg-pr07 hs-accordion-active:text-ne01 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                Kebijakan Sanksi
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
                className="px-4 pb-8 border-b hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                <p className="sm:hidden font-montserrat text-base sm:text-lg text-ne02 py-4">
                  Dalam menjalankan bisnisnya. Dewan direksi dan setiap orang
                  yang bekerja untuk PT. Orela Bahari Mandiri berkomitmen untuk
                  mewujudkan disiplin kerja yang mencerminkan ketaatan,
                  ketertiban, kesadaran dan kesukarelaan.
                </p>
                <p className="sm:hidden font-montserrat text-base sm:text-lg text-ne02 pb-4">
                  Sehingga dewan direksi dan setiap orang yang bekerja dapat
                  melaksanakan pekerjaannya dengan tertib dan bertanggung jawab
                  dalam rangka mencapai yang telah kami tetapkan.
                </p>
                <p className="hidden sm:inline-block font-montserrat text-base sm:text-lg text-ne02 py-4">
                  Dalam menjalankan bisnisnya. Dewan direksi dan setiap orang
                  yang bekerja untuk PT. Orela Bahari Mandiri berkomitmen untuk
                  mewujudkan disiplin kerja yang mencerminkan ketaatan,
                  ketertiban, kesadaran dan kesukarelaan. Sehingga dewan direksi
                  dan setiap orang yang bekerja dapat melaksanakan pekerjaannya
                  dengan tertib dan bertanggung jawab dalam rangka mencapai yang
                  telah kami tetapkan.
                </p>
                <a
                  className="font-raleway text-base font-semibold text-pr03 sm:text-lg hover:underline"
                  href={sanction}
                  target="_blank">
                  — Kebijakan Sanksi
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
