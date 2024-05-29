import Banner from "../component/Banner";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import docsISO from "../assets/docs/OBM_CERTIFICATE_ISO.pdf";
import corruptAct from "../assets/docs/OBM-POL-01-0007 Corrupt Policy.pdf";
import whistleBlow from "../assets/docs/OBM-POL-01-0008 Whistle Blowing Policy.pdf";
import moneyLaundry from "../assets/docs/OBM-POL-01-0010 Anti-Money Laundering Policy.pdf";
import codePolicy from "../assets/docs/OBM-POL-01-0009 Code of Conduct Policy.pdf";
import sanction from "../assets/docs/OBM-POL-01-0011 Sanction Policy.pdf";
import Accordion from "../component/Accordion";

export default () => {
  const items = [
    {
      title: "Kebijakan Tindakan Korupsi",
      content:
        "PT. Orela Bahari Mandiri berkomitmen untuk senantiasa memelihara suatu lingkungan usaha dimana seluruh etika kerja yang baik diterapkan. Setiap hubungan kerja dengan pihak lain harus dengan cara profesional dan wajar di mana setiap karyawan harus menjunjung tinggi standar kualitas dan intregritas.",
      link: corruptAct,
      caption: "— Kebijakan Tindakan Korupsi",
    },
    {
      title: "Kebijakan Pelaporan Pelanggaran",
      content:
        "PT. Orela Bahari Mandiri, mempunyai kebijakan penerapan sistem pelaporan pelanggaran (Whistle Blowing System) sebagai bagian dari pengendalian PT. Orela Bahari Mandiri dalam rangka mencegah adanya kecurangan dalam perusahaan kami. Sesuai dengan standar etika yang berlaku, setiap pelanggaran yang dilakukan oleh karyawan wajib dilaporkan kepada perusahaan.",
      link: whistleBlow,
      caption: "— Kebijakan Pelaporan Pelanggaran",
    },
    {
      title: "Kebijakan Anti Pencucian Uang",
      content:
        "Merupakan kebijakan PT. Orela Bahari Mandiri untuk menjalankan bisnis sesuai dengan norma hukum nasional dan internasional yang relevan yang dirancang untuk memerangi pencucian uang dan pendanaan teroris. Serta merupakan komitmen PT. Orela Bahari Mandiri dalam mencegah layanan kami dari kegiatan pencucian uang.",
      link: moneyLaundry,
      caption: "— Kebijakan Anti Pencucian Uang",
    },
    {
      title: "Kebijakan Kode Etik",
      content:
        "PT. Orela Bahari Mandiri yang bergerak dibidang agensi pelayaran berkomitmen untuk menjalankan bisnis dengan berpegang teguh kepada kode etik bisnis. Setiap individu di dalam organisasi wajib mentaati kode etik yang tertera dalam dokumen kebijakan ini.",
      link: codePolicy,
      caption: "— Kebijakan Kode Etik",
    },
    {
      title: "Kebijakan Sanksi",
      content:
        "Dalam menjalankan bisnisnya. Dewan direksi dan setiap orang yang bekerja untuk PT. Orela Bahari Mandiri berkomitmen untuk mewujudkan disiplin kerja yang mencerminkan ketaatan, ketertiban, kesadaran dan kesukarelaan. Sehingga dewan direksi dan setiap orang yang bekerja dapat melaksanakan pekerjaannya dengan tertib dan bertanggung jawab dalam rangka mencapai yang telah kami tetapkan.",
      link: sanction,
      caption: "— Kebijakan Sanksi",
    },
  ];
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
          <Accordion items={items} />
        </div>
      </section>
      <Footer />
    </>
  );
};
