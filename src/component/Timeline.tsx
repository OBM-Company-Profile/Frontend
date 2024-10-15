import React, { useState, useEffect } from "react";
import axios from "axios";

interface Timeline {
  year: number;
  content: string;
}

const Timelines: React.FC = () => {
  const [tabs, setTabs] = useState<Timeline[]>([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const fetchTimelines = async () => {
      try {
        const response = await axios.get(
          "https://app.orelabahari.co.id/api/milestone"
        );
        setTabs(response.data);
      } catch (error) {
        console.error("Error fetching timeline data:", error);
      }
    };

    fetchTimelines();
  }, []);

  const splitContent = (content: string) => {
    return content
      .split("]")
      .map((entry) => entry.trim())
      .filter((entry) => entry.length > 0);
  };

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

      <div className="mt-4 p-4 transition-all duration-300">
        <ul className="list-disc pl-6">
          {splitContent(tabs[activeTab]?.content || "").map((item, idx) => (
            <li
              key={idx}
              className="text-base lg:text-lg font-montserrat leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timelines;
