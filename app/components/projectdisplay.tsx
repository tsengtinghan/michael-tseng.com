import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg m-2">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={`Project ${title}`}
            width={500}
            height={362}
            className="w-full object-cover rounded-lg"
          />
        )}
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          <p className="text-sm mb-2">{date}</p>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </Link>
    </div>
  );
};

interface ProjectDisplayProps {
  projects: ProjectCardProps[];
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ projects }) => {
  return (
    <div className="p-10 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
