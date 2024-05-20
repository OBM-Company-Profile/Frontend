import Navbar from "../../../component/Navbar";
import Banner from "../../../component/Banner";
import Footer from "../../../component/Footer";
import Card from "../../../component/Card";
import ImageSlide from "../../../component/ImageSlide";
import Navs from "../../../component/Navs";

export default () => {
  const links = [
    {
      path: "/layanan/marine",
      label: "Offshore Support",
    },
    { path: "/layanan/marine/ship-to-ship", label: "Ship to Ship" },
    { path: "/layanan/marine/ship-operator", label: "Ship Operator" },
    { path: "/layanan/marine/ship-owner", label: "Ship Owner" },
    {
      path: "/layanan/marine/fpso",
      label: "FPSO",
    },
  ];
  const shipOperator = [
    <img
      src="../../img/service/marine/operator/1_sp.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/marine/operator/2_sp.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/marine/operator/3_sp.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/marine/operator/4_sp.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/marine/operator/5_sp.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/marine/operator/6_sp.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/marine/operator/7_sp.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/marine/operator/8_sp.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/marine/operator/9_sp.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/marine/operator/10_sp.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/marine/operator/11_sp.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/marine/operator/12_sp.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/marine/operator/13_sp.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/marine/operator/14_sp.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/marine/operator/15_sp.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/marine/operator/16_sp.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/marine/operator/17_sp.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
  ];
  return (
    <>
      <Navbar />
      <Banner
        bgImage="../../img/service/marine/marine_jumbotron.jpg"
        headCaption="Marine"
        captionSection="Penghubung bisnis intermoda transportasi dan pengelolaan potensi ekonomi sumber daya laut"
        btnAction="none"
      />
      <Navs links={links} />
      <div className="relative mb-20">
        <section className="bg-white overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[400px]">
            <div className="overflow-y-auto relative flex items-center justify-center w-full lg:order-1 lg:w-7/12">
              <div className="relative mx-6 my-10 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:mt-20">
                <p className="font-montserrat text-base lg:text-lg text-ne02 pb-6">
                  Untuk mengelola manajemen pengoperasian dan pemasaran kapal,
                  termasuk perawatan dan perlindungan kapal berdasarkan
                  perjanjian kerjasama dengan pihak pemilik kapal maupun
                  pencharter.
                </p>
                <p className="font-montserrat text-base sm:text-lg text-ne02 pb-6">
                  Persaingan industri pelayaran mendorong semua perusahaan untuk
                  memilih strategi terbaiknya. Monopoli tidak lagi menjadi
                  metode untuk mendominasi namun bermitra adalah pilihan yang
                  sangat realistis untuk bertahan dalam persaingan global maupun
                  regional.
                </p>
                <p className="font-montserrat text-base sm:text-lg text-ne02 pb-6">
                  Sejak berdiri OBM telah menjalin kemitraan dengan beberapa
                  perusahaan Pelayaran dalam bidang Kerjasama ship management
                  yang tidak hanya fokus pada divisi pemasaran namun sampai pada
                  pengadaan crew dan pemeliharaan serta Docking kapal.
                </p>
              </div>
            </div>
            <div className="relative w-full overflow-hidden lg:order-2 h-96 lg:h-auto lg:w-5/12">
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full scale-100"
                  src="../../img/service/marine/operator/caption.JPG"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ImageSlide items={shipOperator} />
      <div className="bg-pr08">
        <Card
          imageContent="../../img/service/offering.JPG"
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
