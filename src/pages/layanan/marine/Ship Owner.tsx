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
  const shipOwner = [
    <img
      src="../../img/service/marine/owner/1_own.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/marine/owner/2_own.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/marine/owner/3_own.JPG"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/marine/owner/4_own.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/marine/owner/5_own.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/marine/owner/caption.jpg"
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
                  Kami memulai usaha sebagai agent pelayaran dan berkembang
                  menjadi perusahaan pelayaran.
                </p>
                <p className="font-montserrat text-base sm:text-lg text-ne02 pb-6">
                  Saat ini OBM telah memiliki armada Harbor Tug, Crew Boat, dan
                  patrol boat sebagai wujud komitmen untuk menghadirkan layanan
                  terintegrasi pada operasi pengeboran lepas pantai dan
                  penyandaran kapal ship to ship maupun penyandaran di pelabuhan
                  serta layanan Husbandry agent.
                </p>
                <p className="font-montserrat text-base sm:text-lg text-ne02 pb-6">
                  Kami terus meningkatkan kemampuan diberbagai sektor untuk
                  mendukung kesuksesan Customer diberbagai wilayah pelabuhan dan
                  perairan di Indonesia.
                </p>
              </div>
            </div>
            <div className="relative w-full overflow-hidden lg:order-2 h-96 lg:h-auto lg:w-5/12">
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full scale-100"
                  src="../../img/service/marine/owner/caption.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ImageSlide items={shipOwner} />
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
