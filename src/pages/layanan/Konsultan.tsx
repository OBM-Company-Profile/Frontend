import Navbar from "../../component/Navbar";
import Banner from "../../component/Banner";
import Footer from "../../component/Footer";
import Card from "../../component/Card";
import ImageSlide from "../../component/ImageSlide";

export default () => {
  const consulTant = [
    <img
      src="../img/service/consultant/1_k.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/consultant/2_k.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/consultant/3_k.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/consultant/4_k.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/consultant/5_k.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/consultant/6_k.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/consultant/7_k.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/consultant/8_k.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/consultant/9_k.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/consultant/10_k.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/consultant/11_k.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/consultant/12_k.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/consultant/13_k.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/consultant/14_k.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/consultant/15_k.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/consultant/16_k.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/consultant/17_k.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../img/service/consultant/consultant_jumbotron.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
  ];
  return (
    <>
      <Navbar />
      <Banner
        bgImage="../img/service/consultant/consultant_jumbotron.jpg"
        headCaption="Konsultan & Marine Correspondent"
        captionSection="Menjangkau pengurusan legalitas, administrasi, dan teknis operasional kapal dan perusahaan"
        btnAction="none"
      />
      <section className="overflow-hidden lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[300px]">
          <div className="overflow-y-auto relative flex items-start justify-center w-full lg:order-1 lg:w-7/12">
            <div className="relative mx-6 my-10 lg:my-0 px-4 lg:px-0 lg:ml-32 lg:mr-20">
              <p className="font-montserrat text-base sm:text-lg text-ne02 pb-6">
                Kami menyelesaikan bagian tersulit dari sisi teknis dan
                administrasi, khususnya pada proses sertifikasi dan pemenuhan
                syarat teknis yang dibutuhkan untuk kelaik lautan kapal.
              </p>
              <p className="font-montserrat text-lg text-ne02 lg:pb-6">
                Kami berperan sebagai biro penghubung antara departemen atau
                vendor terkait pada setiap proses penerbitan atau pengurusan
                sertifikat, namun tidak terbatas pada pekerjaan yang bersifat
                teknis, seperti perbaikan, pengiriman suku cadang, serta
                pengadaan tenaga ahli.
              </p>
            </div>
          </div>
          <div className="relative w-full overflow-hidden lg:order-2 h-96 lg:h-auto lg:w-5/12">
            <div className="absolute inset-0">
              <img
                className="object-cover w-full h-full scale-100"
                src="../img/service/consultant/caption.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <ImageSlide items={consulTant} />

      <div className="bg-pr08">
        <Card
          imageContent="../img/service/offering.JPG"
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
