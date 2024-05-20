import Navbar from "../../../component/Navbar";
import Banner from "../../../component/Banner";
import Footer from "../../../component/Footer";
import Card from "../../../component/Card";
import ImageSlide from "../../../component/ImageSlide";
import Navs from "../../../component/Navs";

export default () => {
  const links = [
    {
      path: "/layanan/port-service",
      label: "Mooring & Pilotage",
    },
    {
      path: "/layanan/port-service/dry-docking",
      label: "Dry Docking",
    },
  ];
  const mooringPilot = [
    <img
      src="../img/service/port_service/mooring/1_moor.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/port_service/mooring/2_moor.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/port_service/mooring/3_moor.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/port_service/mooring/4_moor.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/port_service/mooring/5_moor.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/port_service/mooring/6_moor.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/port_service/mooring/7_moor.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/port_service/mooring/8_moor.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/port_service/mooring/9_moor.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/port_service/mooring/10_moor.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/port_service/mooring/11_moor.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/port_service/mooring/12_moor.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/port_service/mooring/13_moor.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/port_service/mooring/14_moor.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/port_service/mooring/15_moor.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/port_service/mooring/16_moor.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/port_service/mooring/17_moor.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/port_service/mooring/18_moor.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
  ];
  return (
    <>
      <Navbar />
      <Banner
        bgImage="../img/service/port_service/mooring/mooring_jumbotron.jpg"
        headCaption="Port Service"
        captionSection="Kami melayani kapal anda secara terintegrasi"
        btnAction="none"
      />
      <Navs links={links} />
      <div className="relative mb-20">
        <section className="bg-white overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[400px]">
            <div className="overflow-y-auto relative flex items-center justify-center w-full lg:order-1 lg:w-7/12">
              <div className="relative mx-6 my-10 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:mt-20">
                <p className="font-montserrat text-base lg:text-lg text-ne02 pb-6">
                  OBM memberikan dukungan yang lengkap terhadap kebutuhan bisnis
                  pelayaran termasuk layanan Kepil dan Mooring Master, baik di
                  Pelabuhan, Offshore, dan kegiatan Ship to Ship.
                </p>
                <p className="font-montserrat text-lg text-ne02 pb-6">
                  OBM menyiapkan tenaga kerja mooring yang profesional
                  (tersertifikasi) untuk mencapai visi dan misi PT. Pelabuhan
                  Persero Regional II sebagai mitra kerja.
                </p>
              </div>
            </div>
            <div className="relative w-full overflow-hidden lg:order-2 h-96 lg:h-auto lg:w-5/12">
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full scale-100"
                  src=" ../img/service/port_service/mooring/caption.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ImageSlide items={mooringPilot} />
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
