import Banner from "../component/Banner";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import docsISO from "../assets/docs/OBM_CERTIFICATE_ISO.pdf";
import Accordion from "../component/Accordion";

type AccordionItem = {
  id: number;
  title: string;
  content: string;
  link: string;
  caption: string;
};

const Quality = () => {
  const [items, setItems] = useState<AccordionItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3307/api/management_policy"
        );
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Banner
        bgImage="./img/quality/quality_banner.jpg"
        headCaption="Quality"
        captionSection="Zero delay, zero incident, zero complain"
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
                  <img
                    className="size-full absolute top-0 start-0 object-cover"
                    src="./img/quality/content2.jpg"
                    alt="Image Description"
                  />
                </figure>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                  <figure className="relative w-full h-36 sm:h-60">
                    <img
                      className="size-full absolute top-0 start-0 object-cover object-center"
                      src="./img/quality/content3.jpg"
                      alt="Image Description"
                    />
                  </figure>
                  <figure className="relative w-full h-36 sm:h-60">
                    <img
                      className="size-full absolute top-0 start-0 object-cover object-center"
                      src="./img/quality/content1.jpg"
                      alt="Image Description"
                    />
                  </figure>
                </div>
              </div>
              <figcaption className="text-slate-400 mt-4 font-montserrat text-center">
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
              href={docsISO}
              target="_blank">
              Sertifikat ISO
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
