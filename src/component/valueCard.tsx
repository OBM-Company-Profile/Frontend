import React from "react";

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon }) => {
  return (
    <div className="size-full bg-white border border-pr00 rounded-lg p-5">
      <div className="flex items-center gap-x-4 mb-3">
        <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-ne01 bg-pr00">
          <img className="h-10" src={icon} alt={title} />
        </div>
        <div className="flex-shrink-0">
          <h3 className="block font-raleway text-base lg:text-lg font-semibold text-pr08">
            {title}
          </h3>
        </div>
      </div>
      <p className="font-montserrat text-sm lg:text-base text-ne02">
        {description}
      </p>
    </div>
  );
};

export default ValueCard;
