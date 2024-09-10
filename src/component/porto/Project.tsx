import React from "react";
import ProjectItem from "./ProjectItem";

interface Project {
  imageSrc: string;
  year: string;
  title: string;
  description: string;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          imageSrc={project.imageSrc}
          year={project.year}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  );
};

export default ProjectList;
