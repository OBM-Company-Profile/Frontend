import Jumbotron from "../component/Jumbotron";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Accordion from "../component/Accordion";

interface ImageData {
  id: number;
  imageSrc: string;
  altImage: string;
  category: string;
}

type AccordionItem = {
  id: number;
  title: string;
  content: string;
  link: string;
  caption: string;
};

const Quality = () => {
  const [jumbotron, setJumbotron] = useState<ImageData[]>([]); //fetching image for jumbotron
  const [images, setImages] = useState<ImageData[]>([]); //fetching image using category "quality"
  const [items, setItems] = useState<AccordionItem[]>([]); //handling Management Policy's Accordion
  const [singleLink, setSingleLink] = useState<{
    link: string;
    caption: string;
  }>({ link: "", caption: "" });
  const [error, setError] = useState<string | null>(null); //setting fetching single link for ISO document

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://app.orelabahari.co.id/api/images",
          {
            params: { category: "quality" },
          }
        );
        setImages(response.data);
      } catch (err) {
        setError("Failed to fetch images");
      }
    };

    fetchImages();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  useEffect(() => {
    const fetchJumbotron = async () => {
      try {
        const response = await axios.get(
          "https://app.orelabahari.co.id/api/images",
          {
            params: { category: "jumbotron" },
          }
        );
        setJumbotron(response.data);
      } catch (err) {
        setError("Failed to fetch image");
      }
    };

    fetchJumbotron();
  }, []);
  const banner = jumbotron[2] || { imageSrc: "", altImage: "" };

  useEffect(() => {
    const fetchAccordionItems = async () => {
      try {
        const response = await axios.get(
          "https://app.orelabahari.co.id/api/management_policy"
        );
        const fetchedItems = response.data;

        // Set the first 5 items for the accordion
        setItems(fetchedItems.slice(0, 5));

        // Set the 6th item for the separate link and caption
        if (fetchedItems.length > 5) {
          const sixthItem = fetchedItems[5];
          setSingleLink({
            link: sixthItem.link,
            caption: sixthItem.caption,
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAccordionItems();
  }, []);

  return (
    <>
      <Navbar />
      <Jumbotron
        bgImage={banner.imageSrc}
        headCaption="Quality"
        captionSection="Zero delay, zero incident, zero complain"
        btnAction="none"
        showButton={false}
      />
      <section>
        <div className="relative items-center mx-6 gap-x-8 my-10 sm:my-20 lg:mx-32">
          <div className="px-4 lg:px-0 sm:mt-4 text-left mt-6 sm:mt-10">
            <h1 className="font-raleway text-3xl text-medium sm:text-4xl text-ne02 pb-4 sm:pb-6">
              HSE & ISO
            </h1>
            <p className="font-montserrat text-base sm:text-lg text-ne02 pb-4">
              Perusahaan kami tersertifikasi ISO sejak tahun 2021 membuktikan
              kesadaran dan komitmen kami akan pentingnya manajemen Mutu,
              Kesehatan, Keselamatan dan Lingkungan.
            </p>
            <p className="sm:hidden font-montserrat text-base sm:text-lg text-ne02">
              Kami mengembangkan dan menerapkan prosedur yang ketat di setiap
              divisi untuk mencapai target Zero Complaint, Insident, Accident
              dan Kerusakan demi mencegah kerugian Perusahaan serta Customer dan
              Kerusakan Lingkungan.
            </p>
            <div className="my-6">
              <div className="grid lg:grid-cols-2 gap-3">
                <figure className="relative w-full h-48 sm:h-72 lg:h-full">
                  {images.length > 1 && (
                    <img
                      className="size-full absolute top-0 start-0 object-cover"
                      src={images[1]?.imageSrc} // First image from the list
                      alt={images[1]?.altImage || "hse"}
                    />
                  )}
                </figure>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                  <figure className="relative w-full h-36 sm:h-60">
                    {images.length > 2 && (
                      <img
                        className="size-full absolute top-0 start-0 object-cover"
                        src={images[2]?.imageSrc} // First image from the list
                        alt={images[2]?.altImage || "hse"}
                      />
                    )}
                  </figure>
                  <figure className="relative w-full h-36 sm:h-60">
                    {images.length > 0 && (
                      <img
                        className="size-full absolute top-0 start-0 object-cover"
                        src={images[0]?.imageSrc} // First image from the list
                        alt={images[0]?.altImage || "hse"}
                      />
                    )}
                  </figure>
                </div>
              </div>
              <figcaption className="text-slate-400 text-sm sm:text-base mt-4 font-montserrat text-center">
                Manajemen HSE & ISO
              </figcaption>
            </div>
            <p className="hidden sm:inline-block font-montserrat text-base sm:text-lg text-ne02 pb-4">
              Kami mengembangkan dan menerapkan prosedur yang ketat di setiap
              divisi untuk mencapai target Zero Complaint, Insident, Accident
              dan Kerusakan demi mencegah kerugian Perusahaan serta Customer dan
              Kerusakan Lingkungan. KPI HSE kami adalah “nol” yang setara dengan
              pencapaian nilai “ratusan”. Penerapan prosedur HSE bukan jaminan
              mutlak keselamatan namun bertujuan untuk menekan resiko.
            </p>
            <p className="sm:hidden font-montserrat text-base sm:text-lg text-ne02 pb-4">
              KPI HSE kami adalah “nol” yang setara dengan pencapaian nilai
              “ratusan”. Penerapan prosedur HSE bukan jaminan mutlak keselamatan
              namun bertujuan untuk menekan resiko.
            </p>
            <a
              className="font-raleway text-base font-semibold text-pr08 sm:text-lg hover:text-sc06 underline"
              href={singleLink.link}
              target="_blank">
              {singleLink.caption}
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="relative items-center mx-6 px-4 sm:px-0 my-10 sm:my-20 lg:mx-32">
          <h1 className="font-raleway text-3xl font-medium sm:text-4xl text-ne02 pb-4 sm:pb-6">
            Management Policy
          </h1>
          <p className="font-montserrat text-base sm:text-lg text-ne02 pb-4">
            Kebijakan PT. OBM merujuk pada aturan-aturan pemerintah dan standar
            mutu sesuai dengan ISO 9001:2015, ISO 14001:2015, dan ISO
            45001:2018.
          </p>
          <Accordion items={items} />
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Quality;
