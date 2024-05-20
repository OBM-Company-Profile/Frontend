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
  const dryDocking = [
    <img
      src="../../img/service/port_service/docking/1_doc.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/port_service/docking/2_doc.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/port_service/docking/3_doc.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/port_service/docking/4_doc.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/port_service/docking/5_doc.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/port_service/docking/6_doc.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/port_service/docking/7_doc.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/port_service/docking/8_doc.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/port_service/docking/9_doc.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/port_service/docking/10_doc.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/port_service/docking/11_doc.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/port_service/docking/12_doc.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/port_service/docking/13_doc.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/port_service/docking/14_doc.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/port_service/docking/15_doc.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/port_service/docking/16_doc.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/port_service/docking/17_doc.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/port_service/docking/18_doc.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/port_service/docking/19_doc.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
  ];
  return (
    <>
      <Navbar />
      <Banner
        bgImage="../../../img/service/port_service/docking/jumbotron.jpg"
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
                  OBM melayani jasa keagenan kapal docking mulai dari In/Out
                  Clearance, sertifikasi, penanganan akomodasi dan perizinan
                  crew, superintenden dan teknisi, manajemen dan pengiriman
                  perlengkapan suku cadang.
                </p>
                <p className="font-montserrat text-lg text-ne02 pb-6">
                  OBM juga menyediakan shipyard melalui kemitraan dengan sister
                  company di wilayah Lamongan, Jawa Timur.
                </p>
              </div>
            </div>
            <div className="relative w-full overflow-hidden lg:order-2 h-96 lg:h-auto lg:w-5/12">
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full scale-100"
                  src="../../img/service/port_service/docking/caption.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ImageSlide items={dryDocking} />
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
