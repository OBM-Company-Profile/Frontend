import Navbar from "../../../component/Navbar";
import Banner from "../../../component/Banner";
import Footer from "../../../component/Footer";
import Card from "../../../component/Card";
import ImageSlide from "../../../component/ImageSlide";
import Navs from "../../../component/Navs";

export default () => {
  const links = [
    { path: "/logistik", label: "Logistics & Transportation" },
    {
      path: "/layanan/logistik/terminal-stevedoring",
      label: "Terminal Stevedoring",
    },
    { path: "/layanan/logistik/trucking", label: "Trucking" },
    { path: "/layanan/logistik/travel", label: "Travel" },
  ];
  const logisTransport = [
    <img
      src="../img/service/logistic/logicstic_transport/1_log.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/logistic/logicstic_transport/2_log.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/logistic/logicstic_transport/3_log.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/logistic/logicstic_transport/4_log.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/logistic/logicstic_transport/5_log.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/logistic/logicstic_transport/6_log.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/logistic/logicstic_transport/7_log.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/logistic/logicstic_transport/8_log.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/logistic/logicstic_transport/9_log.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/logistic/logicstic_transport/10_log.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/logistic/logicstic_transport/11_log.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/logistic/logicstic_transport/12_log.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/logistic/logicstic_transport/13_log.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/logistic/logicstic_transport/14_log.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/logistic/logicstic_transport/15_log.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
  ];
  return (
    <>
      <Navbar />
      <Banner
        bgImage="../img/service/logistic/logistic_jumbotron.jpeg"
        headCaption="Logistic"
        captionSection="Kami menghadirkan layanan satu pintu untuk berbagai jenis kebutuhan transportasi"
        btnAction="none"
      />
      <Navs links={links} />
      <div className="relative mb-20">
        <section className="bg-white overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[400px]">
            <div className="overflow-y-auto relative flex items-center justify-center w-full lg:order-1 lg:w-7/12">
              <div className="relative mx-6 my-10 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:mt-20">
                <p className="font-montserrat text-base lg:text-lg text-ne02 pb-6">
                  Untuk melakukan pengantaran barang dari bandara ke pelabuhan
                  atau ke kapal atau ke alamat penerima barang.
                </p>
                <p className="font-montserrat text-lg text-ne02 pb-6">
                  Mencakup kegiatan pengiriman barang antar pulau atau antar
                  daerah dengan transportasi laut, udara, dan darat, namun tidak
                  terbatas pada kegiatan bongkar muat barang di pelabuhan maupun
                  gudang.
                </p>
              </div>
            </div>
            <div className="relative w-full overflow-hidden lg:order-2 h-96 lg:h-auto lg:w-5/12">
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full scale-100"
                  src="../img/service/logistic/logicstic_transport/caption.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ImageSlide items={logisTransport} />
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
