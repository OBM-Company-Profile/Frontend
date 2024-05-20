import FasilitasContent from "./FasilitasContent";

function FasilitasCard(props: any) {
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-x-6 items-center mx-10 lg:ml-20 shadow-md bg-pr00 my-10 sm:mx-20">
        <div className="">
          <img
            className="h-full w-full sm:h-80 sm:w-screen lg:h-auto lg:w-[650px]"
            src={props.imgAsset}
          />
        </div>
        <div className="sm:flex-1 px-6 pb-8 sm:py-4 lg:px-4 sm:mt-4 mt-6 sm:mt-10 ">
          <p className="font-raleway text-xs sm:text-sm font-semibold text-pr07 sm:pb-2 uppercase">
            {props.asstType}
          </p>
          <h1 className="font-raleway text-xl font-semibold sm:text-3xl text-ne02">
            {props.asstName}
          </h1>
          <FasilitasContent columns={props.col} data={props.data} />
        </div>
      </div>
    </section>
  );
}

export default FasilitasCard;
