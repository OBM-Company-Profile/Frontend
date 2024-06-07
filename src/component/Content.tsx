import React from "react";

interface CardProps {
  title: string;
  description: string;
  backgroundImage: string;
  desc1: string;
  desc2: string;
  desc3: string;
  desc4: string;
  link: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  backgroundImage,
  desc1,
  desc2,
  desc3,
  desc4,
  link,
}) => {
  return (
    <a href={link}>
      <div
        className="m-4 max-w-xs h-[480px] overflow-hidden shadow-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="px-10 text-white font-montserrat px-6 pb-4 h-full bg-gray-900 bg-opacity-50 hover:bg-opacity-75 flex flex-col justify-center">
          <h1 className="text-left font-semibold text-lg mb-2">{title}</h1>
          <p className="text-sm lg:text-base">{description}</p>
          <ul className="text-sm">
            <li>{desc1}</li>
            <li>{desc2}</li>
            <li>{desc3}</li>
            <li>{desc4}</li>
          </ul>
        </div>
      </div>
    </a>
  );
};

export default Card;
