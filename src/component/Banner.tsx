import Button from "./Button";

const Banner = (content: any) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${content.bgImage})`,
        backgroundRepeat: "no-repeat",
      }}>
      <div className="absolute inset-0 inset-0 bg-black opacity-35"></div>
      <div className="relative pl-8 sm:mx-20 max-w-screen-2xl px-4 py-32 sm:px-6 lg:flex lg:basis-full sm:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-left">
          <h1 className="text-3xl max-w-xl font-medium font-raleway text-ne01 sm:text-4xl/snug lg:text-5xl/snug">
            {content.headCaption}
          </h1>
          <p className="text-base mt-8 font-montserrat font-medium text-ne01 sm:text-lg/normal">
            {content.captionSection}
          </p>
          <Button variant="none">{content.btnAction}</Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
