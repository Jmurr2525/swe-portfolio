import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from './ProjectDetails';

function ProjectCard({ id, title, description, image, technologies }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/project/${id}`} className="flex flex-col">
      <div 
        className="relative overflow-hidden rounded-lg shadow-lg mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-between p-6 transition-opacity duration-300"
             style={{ opacity: isHovered ? 1 : 0 }}>
          <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
      <div className="flex flex-wrap">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="p-[1px] rounded-full overflow-hidden relative mr-2 mb-2"
            whileHover={{ scale: 1.05 }}
            style={{
              background: 'linear-gradient(45deg, rgba(79, 70, 229, 1) 0%, rgba(147, 51, 234, 1) 50%, rgba(236, 72, 153, 1) 100%)',
            }}
          >
            <div className="bg-dark-grey px-3 py-1 rounded-full">
              <span className="text-sm text-white">
                {tech}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Link>
  );
}

function ProjectsGrid() {
  return (
    <section className="min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">
              Projects
            </h2>
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ScrollAnimation key={index}>
              <ProjectCard {...project} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsGrid;