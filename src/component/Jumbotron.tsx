import Button from "./Button";
import compro from "../assets/docs/OBM_Company_Profile.pdf";

interface JumbotronProps {
  bgImage: string;
  headCaption: string;
  captionSection: string;
  btnAction: string;
  showButton?: boolean; // Optional prop to control button visibility
}

function Jumbotron({
  bgImage,
  headCaption,
  captionSection,
  btnAction,
  showButton = false,
}: JumbotronProps) {
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
            <a href={compro} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">{btnAction}</Button>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
