import Navbar from "../../../component/Navbar";
import Banner from "../../../component/Banner";
import Footer from "../../../component/Footer";
import ImageSlide from "../../../component/ImageSlide";
import Card from "../../../component/Card";
import Navs from "../../../component/Navs";

export default () => {
  const links = [
    {
      path: "/layanan/shipping",
      label: "Shipping Agency",
    },
    { path: "/layanan/shipping/husbandry-service", label: "Husbandry Service" },
    {
      path: "/layanan/shipping/protecting-agency",
      label: "Owner Protecting Agent",
    },
    { path: "/layanan/shipping/launch-service", label: "Launch Service" },
    {
      path: "/layanan/shipping/emergency-response",
      label: "Emergency Response",
    },
  ];
  const launchService = [
    <img
      src="../../img/service/shipping/launch/1_l.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/launch/2_l.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/launch/3_l.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/launch/4_l.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/launch/5_l.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/launch/6_l.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/launch/7_l.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/launch/8_l.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/launch/9_l.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/launch/10_l.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/launch/11_l.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/launch/12_l.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/launch/13_l.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/launch/14_l.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
  ];
  return (
    <>
      <Navbar />
      <Banner
        bgImage="../../img/service/shipping/shipping_agency/Shipping_Agency_Jumbotron.jpg"
        headCaption="Shipping"
        captionSection="Melayani clearence CIQP dan sebagai mata rantai logistik kebutuhan kapal"
        btnAction="none"
      />

      <div className="relative mb-20">
        <section className="bg-white overflow-hidden">
          <Navs links={links} />
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[400px]">
            <div className="overflow-y-auto relative flex items-center justify-center w-full lg:order-1 lg:w-7/12">
              <div className="relative mx-6 my-10 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:mt-0">
                <p className="font-montserrat text-base lg:text-lg text-ne02 pb-6">
                  Kapal anda akan terus berlayar sambil kami mengirimkan
                  perbekalan, suku cadang, dan penggantian crew lewat laut tanpa
                  harus menghabiskan biaya dan waktu menunggu di Pelabuhan.
                </p>
                <p className="font-montserrat text-base lg:text-lg text-ne02 pb-6">
                  OBM akan melaksanakan pengawasan operasi dan perlindungan
                  kepentingan owner dan memberikan saran terhadap FDA,
                  Pembayaran, status kegiatan Operasional, Pemeriksaan dokumen
                  dan melaksanakan Tindakan hukum yang diperlukan jika ada
                  perselisihan.
                </p>
              </div>
            </div>
            <div className="relative w-full overflow-hidden lg:order-2 h-96 lg:h-auto lg:w-5/12">
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full scale-100"
                  src="../../img/service/shipping/launch/caption.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ImageSlide items={launchService} />
      {/* <ImageSlide /> */}
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
