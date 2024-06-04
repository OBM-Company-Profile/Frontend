import React, { useState } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

type AccordionItemProps = {
  title: string;
  caption: string;
  content: string;
  address: string;
  address1: string;
  address2: string;
  isOpen: boolean;
  onClick: () => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  caption,
  content,
  address,
  address1,
  address2,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b">
      <button
        className={`w-full text-left font-semibold font-raleway text-sm sm:text-base p-4 flex justify-between items-center transition-colors duration-200 ${
          isOpen ? "bg-pr08 text-ne01" : "bg-white text-pr08"
        }`}
        onClick={onClick}>
        <span className="uppercase">{title}</span>
        <span>{isOpen ? <VscChevronDown /> : <VscChevronUp />}</span>
      </button>
      {isOpen && (
        <div className="px-4 py-8 font-montserrat text-base sm:text-lg text-ne02">
          <p className="text-base lg:text-lg font-semibold">{caption}</p>
          <ul>
            <li>{content}</li>
            <li>{address}</li>
            <li>{address1}</li>
            <li>{address2}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

type AccordionProps = {
  items: Omit<AccordionItemProps, "isOpen" | "onClick">[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          {...item}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
