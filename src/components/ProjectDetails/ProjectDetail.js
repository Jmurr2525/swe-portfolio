import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from './index';

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Projects</Link>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover mb-4" />
      <p className="mb-4">{project.longDescription || project.shortDescription}</p>
      
      {project.technologies && (
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Technologies Used</h2>
          <ul className="list-disc list-inside">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      )}

      {project.features && (
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Features</h2>
          <ul className="list-disc list-inside">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {project.githubLink && (
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-4">
          View on GitHub
        </a>
      )}

      {project.liveDemo && (
        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Live Demo
        </a>
      )}
    </div>
  );
}

export default ProjectDetail;