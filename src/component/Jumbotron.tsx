import Button from "./Button";
import { useEffect, useState } from "react";
import axios from "axios";

interface JumbotronProps {
  bgImage: string;
  headCaption: string;
  captionSection: string;
  btnAction: string;
  showButton?: boolean; // Optional prop to control button visibility
}

interface CompanyProfile {
  link: string;
  caption: string;
}

function Jumbotron({
  bgImage,
  headCaption,
  captionSection,
  btnAction,
  showButton = false,
}: JumbotronProps) {
  const [comprof, setComprof] = useState<CompanyProfile[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComprof = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/management_policy`
        );
        setComprof(response.data);
      } catch (err) {
        setError("Failed to fetch images");
      }
    };

    fetchComprof();
  }, []);

  const links = comprof[6] || { link: "", caption: "" };
  if (error) return <p>{error}</p>;
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
      }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative pl-8 sm:mx-20 max-w-screen-2xl px-4 py-32 sm:px-6 lg:flex lg:basis-full lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-left">
          <h1 className="text-3xl max-w-xl font-medium font-raleway text-ne01 sm:text-4xl/snug lg:text-5xl/snug">
            {headCaption}
          </h1>
          <p className="text-base mt-8 font-montserrat font-medium text-ne01 sm:text-lg/normal">
            {captionSection}
          </p>
          {showButton && (
            <a href={links.link} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">{btnAction}</Button>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
