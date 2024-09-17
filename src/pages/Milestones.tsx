import React, { useState, useEffect } from "react";
import axios from "axios";
import Timelines from "../component/Timeline";

// Define the Milestone interface
interface Milestone {
  id: number;
  year: number;
  content: string;
}

const MilestoneComponent: React.FC = () => {
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMilestones = async () => {
      try {
        const response = await axios.get<Milestone[]>("/api/milestone");
        console.log(response.data); // Debugging line to check response format
        if (Array.isArray(response.data)) {
          setMilestones(response.data);
        } else {
          console.error("Unexpected data format:", response.data);
          setError("Unexpected data format");
        }
      } catch (err) {
        console.error("Failed to fetch data", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchMilestones();
  }, []);

  const tabs = milestones.map((milestone) => ({
    year: milestone.year,
    content: <p>{milestone.content}</p>,
  }));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {tabs.map((tab, index) => (
        <div key={index}>
          <h3>{tab.year}</h3>
          {tab.content}
        </div>
      ))}
      <Timelines tabs={tabs} />
    </div>
  );
};

export default MilestoneComponent;
