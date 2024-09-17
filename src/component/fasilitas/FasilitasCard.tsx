import React from "react";
import FasilitasContent from "./FasilitasContent";

interface TableColumn {
  header: string;
  accessor: string;
}

interface FasilitasCardProps {
  imgAsset: string;
  asstType: string;
  asstName: string;
  col: TableColumn[];
  data: any[];
}

const FasilitasCard: React.FC<FasilitasCardProps> = ({
  imgAsset,
  asstType,
  asstName,
  col,
  data,
}) => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-x-6 items-center mx-10 lg:ml-20 shadow-md bg-pr00 my-10 sm:mx-20 mb-10">
        <div className="flex-none">
          <img
            className="h-full w-full sm:h-80 sm:w-screen lg:h-auto lg:w-[650px]"
            src={imgAsset}
            alt={asstName}
          />
        </div>
        <div className="sm:flex-1 px-6 pb-8 sm:py-4 lg:px-4 sm:mt-4 mt-6 sm:mt-10">
          <p className="font-raleway text-xs sm:text-sm font-semibold text-pr07 sm:pb-2 uppercase">
            {asstType}
          </p>
          <h1 className="font-raleway text-xl font-semibold sm:text-3xl text-ne02">
            {asstName}
          </h1>
          <div className="pt-8">
            <FasilitasContent columns={col} data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FasilitasCard;
