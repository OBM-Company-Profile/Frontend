import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import "../App.css";
import Accordion from "../component/OperationArea";
import CardContact from "../component/CardContact";

export default () => {
  const contacts = [
    {
      name: "Dharma Kala’ Tiku",
      position: "Direktur",
      phone: 628121919822,
      email: "dharma@orelabahari.co.id",
      emailAlt: "bm.orelatpk@yahoo.com",
    },
    {
      name: "Capt. Alimudin",
      position: "Kepala Cabang Jakarta",
      phone: 62817106338,
      email: "alimudin@orelabahari.co.id",
    },
    {
      name: "Ahyar",
      position: "Operation Manager",
      phone: 6285882553108,
      email: "ahyar@orelabahari.co.id",
    },
    {
      name: "Hastuty",
      position: "Corp Secretary",
      phone: 6285340171732,
      email: "hastuty@orelabahari.co.id",
    },
    {
      name: "Miftahul Haq",
      position: "Cargo Division",
      phone: 6281299751637,
      email: "mifta@orelabahari.co.id",
    },
  ];
  const items = [
    {
      title: "Kantor Pusat",
      caption: "Kantor Utama",
      content: "PT. Orela Bahari Mandiri",
      address:
        "Jl. Tenggiri No 103 D, Tanjung Priok, Jakarta Utara, 14320 Indonesia",
      address1: "",
      address2: "",
    },
    {
      title: "Maringgai",
      caption: "Cahang Maringgai",
      content: "Jl. Kuala Penet, Dusun 1 Tegal Asri",
      address: "Labuhan Maringgai Lampung Timur,",
      address1: "Lampung",
      address2: "",
    },
    {
      title: "Merak",
      caption: "Cabang Merak",
      content: "Jl. Darma Kusuma Link. Pagebangan",
      address: "RT.012/RW.003 Gang Darma Kusuma No. 3",
      address1: "Kel. Ketileng, Kec. Cilegon,",
      address2: "Kota Cilegon, Banten 42416",
    },
    {
      title: "Samarinda",
      caption: "Cabang Samarinda",
      content: "Jl. Marsda A Saleh Gang V, Blok B No. 22",
      address: "Kel. Sidomulyo, Kec. Samarinda Illir",
      address1: "Kota Samarinda, Kalimantan Timur, 57116",
      address2: "",
    },
    {
      title: "Balikpapan",
      caption: "Cabang Balikpapan",
      content: "Jalan Riau No.3A, Rt.1",
      address: "Kel. Prapatan, Kec. Balikpapan Kota,",
      address1: "Desa/Kelurahan Prapatan, Kec. Balikpapan Kota,",
      address2: "Kota Balikpapan, Provinsi Kalimantan Timur",
    },
    {
      title: "Banjarmasin",
      caption: "Cabang Banjarmasin",
      content: "Jl. Purnasakti Komp. Cara Ya Alam Permai II",
      address: "No. 5, Rt 029, RW 002",
      address1: "Desa/Kelurahan Basirih, Kec. Banjarmasin Barat,",
      address2: "Kota Banjarmasin, Provinsi Kalimantan Selatan",
    },
    {
      title: "Batam",
      caption: "Cabang Batam",
      content: "Kawasan Bintang Industri II, Type G No.23 A,",
      address: "Desa/Kelurahan Tanjung Uncang,",
      address1: "Kec. Batu Aji,",
      address2: "Kota Batam, Provinsi Kepulauan Riau",
    },
    {
      title: "Cirebon",
      caption: "Cabang Cirebon",
      content: "Penggung Utara Gang Cendrawasih 4 no.87",
      address: "RT.3/ RW.10, Desa/Kelurahan Harjamukti,",
      address1: "Kec. Harjamukti, Kota Cirebon, Provinsi Jawa Barat",
      address2: "",
    },
    {
      title: "Patimban",
      caption: "Cabang Patimban",
      content: "Dusun Gempol 1 RT001/Rw.001,",
      address: "Desa/Kelurahan Gempol, Kec. Pusakanagara,",
      address1: "Kab. Subang, Provinsi Jawa Barat",
      address2: "",
    },
  ];
  return (
    <>
      <Navbar />
      <Banner
        bgImage="../img/service/consultant/consultant_jumbotron.jpg"
        headCaption="Kontak"
        captionSection="Kami siap untuk membantu segala kebutuhan Anda"
        btnAction="none"
      />

      <section className="mb-20">
        <div className="relative mx-6 my-10 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:my-20">
          <h1 className="text-3xl font-raleway font-medium text-ne02 lg:text-4xl">
            Tim Kontak 24 Jam
          </h1>
        </div>
        <div className="mx-6 mb-10 px-4 lg:px-0 lg:ml-32 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <CardContact key={index} {...contact} />
          ))}
        </div>
      </section>
      <section>
        <div className="relative mx-6 my-10 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:my-20">
          <h1 className="text-3xl font-raleway font-medium text-ne02 lg:text-4xl pb-8">
            Area Operasional
          </h1>
          <div className="map-responsive mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.1433722883917!2d106.88036427478188!3d-6.111391659934747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1f3592fbb0c9%3A0x95a9e16ebb2050e!2sPT.%20Orela%20Bahari%20Mandiri!5e0!3m2!1sid!2sid!4v1714703522319!5m2!1sid!2sid"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div>
            <Accordion items={items} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
