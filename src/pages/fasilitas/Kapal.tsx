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
    { name: "Class ", col: ":", desc: "NA" },
    { name: "Speed ", col: ":", desc: "20 Knots" },
    { name: "LOA ", col: ":", desc: "30 m" },
    { name: "Draft ", col: ":", desc: "1,5 m" },
    { name: "Free Deck Space", col: ":", desc: "62 m²" },
    { name: "Accomodation ", col: ":", desc: "40 pax" },
    { name: "Crew ", col: ":", desc: "8 person" },
    { name: "ME ", col: ":", desc: "3 x Catepillar" },
    { name: "AE ", col: ":", desc: "2 x Cummins" },
  ];
  const column2 = [
    { header: "Name", accessor: "name" },
    { header: "Col", accessor: "col" },
    { header: "Desc", accessor: "desc" },
  ];
  const data2 = [
    { name: "Class ", col: ":", desc: "NA" },
    { name: "Speed ", col: ":", desc: "30 Knots" },
    { name: "Capacity ", col: ":", desc: "5-100 passengers" },
    { name: "Free Deck Space ", col: ":", desc: "4x3 m² (load maximum 3 mt)" },
    {
      name: "Accomodation ",
      col: ":",
      desc: "AC, toilet, entertainment device, etc.",
    },
    { name: "LSA ", col: ":", desc: "Yes (min standard)" },
    {
      name: "Navigation equip ",
      col: ":",
      desc: "Yes (radio, GPS, compass, etc.) ",
    },
    {
      name: "ME ",
      col: ":",
      desc: "4 x 150 outboard eng (variable depend  on capacity)",
    },
    { name: "AE ", col: ":", desc: "2 x Yanmar 10 portable" },
  ];
  const column3 = [
    { header: "Name", accessor: "name" },
    { header: "Col", accessor: "col" },
    { header: "Desc", accessor: "desc" },
  ];
  const data3 = [
    { name: "Class ", col: ":", desc: "NA" },
    { name: "Speed", col: ":", desc: "30 Knots " },
    { name: "Capacity", col: ":", desc: "5-100 passengers" },
    { name: "Free Deck Space", col: ":", desc: "4x3 m² (load maximum 3 mt)" },
    {
      name: "Accomodation",
      col: ":",
      desc: "AC, toilet, entertainment device, etc.",
    },
    { name: "LSA", col: ":", desc: "Yes (min standard)" },
    {
      name: "Nav equip ",
      col: ":",
      desc: "Yes (radio, GPS, compass, etc.)",
    },
    {
      name: "ME",
      col: ":",
      desc: "4 x 150 outboard eng (variable depend on capacity)",
    },
    { name: "AE", col: ":", desc: "2 x Yanmar 10 portable" },
  ];
  const column4 = [
    { header: "Name", accessor: "name" },
    { header: "Col", accessor: "col" },
    { header: "Desc", accessor: "desc" },
  ];
  const data4 = [
    { name: "Class ", col: ":", desc: "NA" },
    { name: "Speed ", col: ":", desc: "20 Knots" },
    { name: "LOA ", col: ":", desc: "5 m" },
    { name: "Draft ", col: ":", desc: "NA" },
    { name: "Free Deck Space ", col: ":", desc: "NA" },
    { name: "Accomodation ", col: ":", desc: "4 persons" },
    { name: "Crew", col: ":", desc: "1 person" },
    { name: "ME ", col: ":", desc: "1 x 40 outboard eng" },
    { name: "AE ", col: ":", desc: "NA" },
    { name: "Propeller ", col: ":", desc: "NA" },
  ];
  return (
    <>
      <Navbar />
      <Banner
        bgImage="./img/fasilitas_assets/fasilitas_banner.jpg"
        headCaption="Fasilitas"
        captionSection="Armada pendukung"
      />
      <Navs links={links} />
      <FasilitasCard
        imgAsset="./img/fasilitas_assets/offshore_crew.jpg"
        asstType="Aluminium Crew Boat"
        asstName="Offshore Crew Boat"
        col={column1}
        data={data1}
      />
      <FasilitasCard
        imgAsset="./img/fasilitas_assets/luxury_boat.jpg"
        asstType="Fiber Boat"
        asstName="Luxury Passengers Boat"
        col={column2}
        data={data2}
      />
      <FasilitasCard
        imgAsset="./img/fasilitas_assets/pilot.jpeg"
        asstType="Aluminium Patrol/Pilot Boat"
        asstName="High Speed Crew Boat"
        col={column3}
        data={data3}
      />
      <FasilitasCard
        imgAsset="./img/fasilitas_assets/fiber_speedboat.png"
        asstType="Fiber Speed Boat"
        asstName="Fast Boarding Boat"
        col={column4}
        data={data4}
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
