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
  const terminalStevdr = [
    <img
      src="../../img/service/logistic/terminal_stevedoring/1_tst.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/logistic/terminal_stevedoring/2_tst.jpeg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/logistic/terminal_stevedoring/3_tst.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/logistic/terminal_stevedoring/4_tst.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/logistic/terminal_stevedoring/5_tst.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/logistic/terminal_stevedoring/6_tst.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/logistic/terminal_stevedoring/7_tst.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/logistic/terminal_stevedoring/8_tst.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/logistic/terminal_stevedoring/9_tst.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/logistic/terminal_stevedoring/10_tst.JPG"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/logistic/terminal_stevedoring/11_tst.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/logistic/terminal_stevedoring/12_tst.JPG"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/logistic/terminal_stevedoring/13_tst.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/logistic/terminal_stevedoring/14_tst.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/logistic/terminal_stevedoring/15_tst.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/logistic/terminal_stevedoring/16_tst.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
  ];
  return (
    <>
      <Navbar />
      <Banner
        bgImage="../../img/service/logistic/logistic_jumbotron.jpeg"
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
                  Fokus untuk mengoptimalkan layanan keagenan kami dengan
                  menyediakan bongkar muat (stevedore) yang ditangani oleh
                  sister company.
                </p>
                <p className="font-montserrat text-lg text-ne02 pb-6">
                  Untuk pertanyaan dalam istilah liner atau satu paket layanan
                  persyaratan agen dan stevedore kami menawarkan beberapa diskon
                  untuk penanganan agen.
                </p>
              </div>
            </div>
            <div className="relative w-full overflow-hidden lg:order-2 h-96 lg:h-auto lg:w-5/12">
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full scale-100"
                  src="../../img/service/logistic/terminal_stevedoring/caption.JPG"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ImageSlide items={terminalStevdr} />
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
