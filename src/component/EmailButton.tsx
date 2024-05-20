import React from "react";

const EmailButton: React.FC<{ emailAddress: string }> = ({ emailAddress }) => {
  const handleButtonClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <button
      className="font-semibold font-montserrat uppercase place-items-center px-6 py-3 text-sm my-8 inline-flex border border-ne01 text-ne01 bg-transparent hover:bg-ne01 hover:text-pr08"
      onClick={handleButtonClick}>
      Email
    </button>
  );
};

export default EmailButton;
