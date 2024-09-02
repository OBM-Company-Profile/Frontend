import React from "react";

interface UnorderedList {
  type: "unordered" | string;
  items: string[];
}

interface NumberedItem {
  number: string;
  title: string;
  description: string;
}

type Paragraph = string | NumberedItem[] | UnorderedList;

interface ServiceSectionData {
  title: string;
  paragraphs: Paragraph[];
  imageSrc: string;
  altImage: string;
}

const ServiceSection: React.FC<ServiceSectionData> = ({
  title,
  paragraphs,
  imageSrc,
  altImage,
}) => {
  return (
    <div className="relative mb-20">
      <section className="bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[400px]">
          <div className="overflow-y-auto relative flex items-center justify-center w-full lg:order-1 lg:w-7/12">
            <div className="relative mx-6 my-10 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:mt-0">
              <p className="font-montserrat text-base lg:text-lg text-ne02 pb-6">
                {title}
              </p>
              <div className="font-montserrat text-base lg:text-lg text-ne02 pb-6">
                {paragraphs.map((para, index) => {
                  if (typeof para === "string") {
                    return (
                      <p key={index} className="pb-6">
                        {para}
                      </p>
                    );
                  }
                  if (Array.isArray(para)) {
                    return (
                      <div key={index} className="pb-6">
                        {para.map((item, idx) => (
                          <div key={idx} className="pb-4">
                            <span className="font-bold">{item.number} </span>
                            <span className="font-bold">{item.title}</span>
                            <p>{item.description}</p>
                          </div>
                        ))}
                      </div>
                    );
                  }
                  if (para.type === "unordered") {
                    return (
                      <div key={index} className="pb-6">
                        <ul className="list-disc pl-6">
                          {para.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
          <div className="relative w-full overflow-hidden lg:order-2 h-96 lg:h-auto lg:w-5/12">
            <div className="absolute inset-0">
              <img
                className="object-cover w-full h-full scale-100"
                src={imageSrc}
                alt={altImage}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceSection;
