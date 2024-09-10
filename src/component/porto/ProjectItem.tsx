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
  <div className="flex flex-col sm:flex-row gap-x-6 items-center mx-10 sm:ml-20 shadow-md my-10 sm:mx-20">
    <div>
      <img
        className="h-full w-full sm:w-80 sm:h-[260px]"
        src={imageSrc}
        alt={altImage}
      />
    </div>
    <div className="sm:flex-1 px-4 sm:px-0 sm:mt-4 text-left mt-6 sm:mt-10">
      <p className="font-raleway text-lg font-semibold text-pr03">{year}</p>
      <h1 className="font-raleway text-lg font-semibold sm:text-xl text-ne02 pb-4 sm:pb-6">
        {title}
      </h1>
      <p className="font-montserrat text-base sm:text-lg text-ne02 pb-4">
        {description}
      </p>
    </div>
  </div>
);

export default ProjectItem;
