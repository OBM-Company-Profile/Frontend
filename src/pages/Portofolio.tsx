import Navbar from "../component/Navbar";
import Gallery from "../component/porto/Gallery";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import Project from "../component/porto/Project";

const Portofolio = () => {
  return (
    <>
      <Navbar />
      <Banner
        bgImage="./img/portofolio/banner_porto.jpg"
        headCaption="Portofolio"
        captionSection="Sekilas tentang proyek dan galeri foto kami"
      />
      <Project />
      <Gallery />
      <Footer />
    </>
  );
};
export default Portofolio;
