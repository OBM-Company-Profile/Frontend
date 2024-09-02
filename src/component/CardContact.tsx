import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

interface CardContactProps {
  name: string;
  position: string;
  phone: number;
  email: string;
  emailAlt?: string;
}

const CardContact: React.FC<CardContactProps> = ({
  name,
  position,
  phone,
  email,
  emailAlt,
}) => {
  return (
    <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-pr00">
      <div className="flex items-center gap-x-4 pb-4 sm:pb-6">
        <div className="grow">
          <h3 className="text-xl font-medium text-pr07 pb-2">{name}</h3>
          <p className="text-xs font-montserrat text-pr08 uppercase">
            {position}
          </p>
        </div>
      </div>
      <div className="mt-2 lg:mt-0 space-y-2">
        <div className="flex gap-x-2">
          <a
            className="inline-flex justify-center items-center size-8 text-sm font-medium text-pr08 disabled:opacity-50 disabled:pointer-events-none"
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noopener noreferrer">
            <FaWhatsapp className="size-6" />
          </a>
          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noopener noreferrer">
            {phone}
          </a>
        </div>
        <div className="flex gap-x-2 font-montserrat">
          <a
            className="inline-flex justify-center items-center size-8 text-sm font-medium text-pr08 disabled:opacity-50 disabled:pointer-events-none"
            href={`mailto:${email}`}>
            <FaEnvelope className="size-6" />
          </a>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        {emailAlt && (
          <div className="flex gap-x-2 font-montserrat">
            <a
              className="inline-flex justify-center items-center size-8 text-sm font-medium text-pr08 disabled:opacity-50 disabled:pointer-events-none"
              href={`mailto:${emailAlt}`}>
              <FaEnvelope className="size-6 hidden" />
            </a>
            <a href={`mailto:${emailAlt}`}>{emailAlt}</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardContact;
