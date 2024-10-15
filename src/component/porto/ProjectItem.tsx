import React from "react";

interface ProjectItemProps {
  imageSrc: string;
  altImage: string;
  year: string;
  title: string;
  description: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  imageSrc,
  altImage,
  year,
  title,
  description,
}) => (
  <div className="flex flex-col lg:flex-row gap-x-6 items-center mx-10 lg:ml-20 shadow-md my-10 lg:mx-20">
    <div>
      <img
        className="h-full w-full lg:w-80 lg:h-[260px]"
        src={imageSrc}
        alt={altImage}
      />
    </div>
    <div className="lg:flex-1 px-4 lg:px-0 lg:mt-4 text-left mt-6 lg:mt-10">
      <p className="font-raleway text-lg font-semibold text-pr03">{year}</p>
      <h1 className="font-raleway text-lg font-semibold lg:text-xl text-ne02 pb-4 lg:pb-6">
        {title}
      </h1>
      <p className="font-montserrat text-base lg:text-lg text-ne02 pb-4">
        {description}
      </p>
    </div>
  </div>
);

export default ProjectItem;
