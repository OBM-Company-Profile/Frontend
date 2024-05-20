import EmailButton from "./EmailButton";

function Card(props: any) {
  return (
    <div className="bg-pr08">
      <div className="flex flex-col lg:flex-row flex-wrap lg:py-14 sm:gap-x-12 content-center items-center justify-center mx-10 sm:mx-20">
        <div className="mt-10 lg:mt-0">
          <img
            className="object-cover h-full w-full sm:w-[500px] sm:h-[300px]"
            src={props.imageContent}
          />
        </div>
        <div className="sm:flex-1 sm:shrink sm:mt-4">
          <h1 className="font-raleway text-3xl sm:text-4xl text-ne01 py-4 sm:py-8">
            {props.contentTitle}
          </h1>
          <p className="font-montserrat text-lg text-ne01 pb-4">
            {props.captionText}
          </p>
          <p className="font-montserrat text-lg text-ne01 pb-4">
            {props.captionText1}
          </p>
          <EmailButton emailAddress="enquiries@orelabahari.co.id" />
        </div>
      </div>
    </div>
  );
}

export default Card;
