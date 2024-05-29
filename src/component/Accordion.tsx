import React, { useState } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

type AccordionItemProps = {
  title: string;
  content: string;
  link: string;
  caption: string;
  isOpen: boolean;
  onClick: () => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  link,
  caption,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b">
      <button
        className={`w-full text-left font-semibold font-raleway text-lg sm:text-xl p-4 flex justify-between items-center transition-colors duration-200 ${
          isOpen ? "bg-pr08 text-ne01" : "bg-white text-pr08"
        }`}
        onClick={onClick}>
        <span>{title}</span>
        <span>{isOpen ? <VscChevronDown /> : <VscChevronUp />}</span>
      </button>
      {isOpen && (
        <div className="p-4 font-montserrat text-base sm:text-lg text-ne02">
          <p className="pb-4">{content}</p>
          <a
            className="font-raleway text-base font-semibold text-pr03 sm:text-lg hover:underline"
            target="_blank"
            href={link}
            rel="noopener noreferrer">
            {caption}
          </a>
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
