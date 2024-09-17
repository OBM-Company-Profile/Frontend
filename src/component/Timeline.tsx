import React, { useState } from "react";

interface Timeline {
  year: number;
  content: React.ReactNode;
}

interface TimelinesProps {
  tabs: Timeline[];
}

const Timelines: React.FC<TimelinesProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row border-y border-pr00">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              index === activeTab
                ? "border-sc06 text-pr08"
                : "border-transparent text-pr00 hover:text-pr02 hover:border-pr07"
            } flex-grow py-4 px-6 border-b-2 text-xl font-montserrat font-medium`}
            onClick={() => setActiveTab(index)}>
            {tab.year}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Timelines;
