import Banner from "../../component/Banner";
import Card from "../../component/Card";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import FasilitasCard from "../../component/fasilitas/FasilitasCard";
import Navs from "../../component/Navs";

export default () => {
  const links = [
    { path: "/fasilitas", label: "Kapal" },
    { path: "/fasilitas/mobil", label: "Mobil" },
    { path: "/fasilitas/kantor", label: "Kantor" },
  ];
  const column1 = [
    { header: "Name", accessor: "name" },
    { header: "Col", accessor: "col" },
    { header: "Desc", accessor: "desc" },
  ];
  const data1 = [
    {
      name: "Alamat ",
      col: ":",
      desc: " Jl. Tenggiri No. 103 D, Tanjung Priok Jakarta Utara, 14320 Indonesia",
    },
  ];

  return (
    <>
      <Navbar />
      <Banner
        bgImage="../img/fasilitas_assets/fasilitas_banner.jpg"
        headCaption="Fasilitas"
        captionSection="Armada pendukung"
      />
      <Navs links={links} />
      <FasilitasCard
        imgAsset="../img/fasilitas_assets/kantor.jpeg"
        asstType="Owned"
        asstName="OBM Main Office"
        col={column1}
        data={data1}
      />
      <Card
        imageContent="../img/service/offering.JPG"
        contentTitle="Ajukan Permintaan Penawaran"
        captionText="Kami siap 24 jam untuk membantu Anda"
        captionText1="Telp : +62 2974 3107 HP : +628121919822 Mail :
            enquiries@orelabahari.co.id"
        btnAction="Offering"
      />
      <Footer />
    </>
  );
};
