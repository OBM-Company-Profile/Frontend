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
    { name: "Brand ", col: ":", desc: "Toyota " },
    { name: "Capacity", col: ":", desc: "16 pax" },
    { name: "Year ", col: ":", desc: "2019" },
    { name: "Total unit", col: ":", desc: "10 units" },
  ];
  const column2 = [
    { header: "Name", accessor: "name" },
    { header: "Col", accessor: "col" },
    { header: "Desc", accessor: "desc" },
  ];
  const data2 = [
    { name: "Brand ", col: ":", desc: "Isuzu " },
    { name: "Capacity", col: ":", desc: "4 persons" },
    { name: "Year ", col: ":", desc: "2015" },
    { name: "Total unit", col: ":", desc: "4 units" },
  ];
  const column3 = [
    { header: "Name", accessor: "name" },
    { header: "Col", accessor: "col" },
    { header: "Desc", accessor: "desc" },
  ];
  const data3 = [
    { name: "Brand", col: ":", desc: "Daihatsu" },
    { name: "Year", col: ":", desc: "2023" },
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
        imgAsset="../img/fasilitas_assets/mvp.jpg"
        asstType="MVP Operation Cars"
        asstName="Luxury Mini Bus"
        col={column1}
        data={data1}
      />
      <FasilitasCard
        imgAsset="../img/fasilitas_assets/double_cabin.jpg"
        asstType="Double Cabin"
        asstName="Boarding Operation Vehicle"
        col={column2}
        data={data2}
      />
      <FasilitasCard
        imgAsset="../img/fasilitas_assets/pickup.jpeg"
        asstType="Pick Up Car"
        asstName="Tactical & Technical Supporting"
        col={column3}
        data={data3}
      />
      <Card
        imageContent="../img/service/offering.JPG"
        contentTitle="Ajukan Permintaan Penawaran"
        captionText="Kami siap 24 jam untuk membantu Anda"
        captionText1="Telp : +62-2974-3107 HP : +628121919822 Mail :
            enquiries@orelabahari.co.id"
        btnAction="Offering"
      />
      <Footer />
    </>
  );
};
