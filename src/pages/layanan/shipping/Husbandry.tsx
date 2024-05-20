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
  const husbandry = [
    <img
      src="../../img/service/shipping/husbandry/1_h.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/husbandry/2_h.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/husbandry/3_h.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/husbandry/4_h.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/husbandry/5_h.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/husbandry/6_h.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/husbandry/7_h.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/husbandry/8_h.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/husbandry/9_h.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/husbandry/10_h.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/husbandry/11_h.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/husbandry/12_h.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/husbandry/13_h.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/husbandry/14_h.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/husbandry/15_h.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/husbandry/16_h.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/husbandry/17_h.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/husbandry/18_h.jpg"
      className="object-cover w-screen sm:w-80 h-64 sm:h-52"
    />,
    <img
      src="../../img/service/shipping/husbandry/19_h.jpg"
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
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
            <div className="overflow-y-auto relative flex items-center justify-center w-full lg:order-1 lg:w-7/12">
              <div className="relative mx-6 my-10 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:mt-0">
                <p className="font-montserrat text-base lg:text-lg text-ne02 pb-6">
                  Hindari biaya yang tinggi dan maksimalkan operasional kapal
                  anda dengan melakukan pelayaran tanpa harus berlabuh hanya
                  untuk menunggu pergantian crew, pengiriman suku cadang atau
                  perbekalan.
                </p>
                <p className="font-montserrat text-lg text-ne02 pb-6">
                  OBM menyediakan layanan transportasi terintegrasi mulai
                  penjemputan dari bandara ke pelabuhan sampai di kapal, di
                  antaranya kebutuhan suku cadang, perbekalan, pergantian crew,
                  pengantaran superintendent dan teknisi, termasuk pengurusan
                  izin, dimana kapal tidak harus menunggu di suatu Pelabuhan.
                  Layanan tersebut termasuk diantaranya sebagai berikut :
                </p>
                <p className="font-montserrat text-lg text-ne01 pb-6">
                  <p className="pl-6 font-montserrat text-lg text-ne02">
                    <ul className="list-disc">
                      <li>
                        {" "}
                        Pengurusan Klaim Bagasi dan Barang, Akomodasi hotel,
                        izin pendaratan, mobilisasi darat dan laut, perizinan,
                        perobatan dan lain-lain. Biro komunikasi dengan petugas
                        daerah.
                      </li>
                      <li>
                        Pengiriman uang tunai dan Dokumen, izin supply suku
                        cadang kapal di wilayah perairan atau pelabuhan
                        Indonesia.
                      </li>
                      <li>
                        Penanganan tanggap darurat, pengisian bahan bakar,
                        pelumas, dan bahan kimia tertentu.
                      </li>
                      <li>
                        Pengisian Air Bersih, perlengkapan crew, dan bahan baku
                        makanan.
                      </li>
                      <li>
                        Pengiriman kontraktor dan teknisi untuk dukungan
                        perbaikan.
                      </li>
                      <li>Tenaga Pengamanan.</li>
                    </ul>
                  </p>
                </p>
                <p className="font-montserrat text-lg text-ne02 pb-6">
                  Untuk layanan tersebut kami didukung dengan armada dan SDM :
                  <ul className="pl-6 list-disc">
                    <li>
                      MPV Kapasitas 4 hingga 36 Penumpang Kelas Bisnis dan
                      Eksekutif
                    </li>
                    <li>MPV Kapasitas 8 Penumpang kelas Eksekutif</li>
                    <li>
                      Truck dan trailer dengan berbagai ukuran dan kapasitas
                      standar maupun ukuran Ekstra
                    </li>
                    <li>
                      Speed Boat Kapasitas 4 Hingga 50 Penumpang Kelas Bisnis
                      dan Eksekutif
                    </li>
                    <li>
                      Mitra bisnis yang memiliki kemampuan sebagai pemasok
                      kebutuhan sesuai permintaan mulai dari pengadaan kapal
                      pendukung dan teknisi hingga dukungan logistik retail suku
                      cadang
                    </li>
                    <li>Penyediaan Tenaga Security berpengalaman</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="relative w-full overflow-hidden lg:order-2 h-96 lg:h-auto lg:w-5/12">
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full scale-100"
                  src="../../img/service/shipping/husbandry/caption.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ImageSlide items={husbandry} />
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
