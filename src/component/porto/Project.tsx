import React from "react";
import ProjectItem from "./ProjectItem";

interface Project {
  id: number;
  imageSrc: string;
  altImage: string;
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
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          imageSrc={project.imageSrc}
          altImage={project.altImage}
          year={project.year}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  );
};

export default ProjectList;
