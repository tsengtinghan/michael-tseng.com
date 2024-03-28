import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  imageUrl: string;
  date: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  href,
  imageUrl,
  date,
}) => {
  return (
    <div className="flex flex-col items-center bg-white p-4 shadow-lg rounded-lg m-2">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Project ${title}`}
            className="w-full h-64 mb-4 object-cover rounded-lg"
          />
        )}
      </a>
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm">{date}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

interface ProjectDisplayProps {
  projects: ProjectCardProps[]; 
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ projects }) => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
