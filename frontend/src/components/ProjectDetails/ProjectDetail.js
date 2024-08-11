import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from './index';

function ImageModal({ src, alt, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
      <div className="max-w-4xl max-h-full p-4">
        <img src={src} alt={alt} className="max-w-full max-h-full object-contain" />
      </div>
    </div>
  );
}

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);
  const [fullViewImage, setFullViewImage] = useState(null);

  if (!project) {
    return <div>Project not found</div>;
  }

  const renderImage = (src, alt, index) => (
    <img 
      key={index}
      src={src} 
      alt={alt} 
      className="w-full h-auto object-contain rounded-lg cursor-pointer"
      onClick={() => setFullViewImage({ src, alt })}
    />
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Projects</Link>
      
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-xl mb-6">{project.longDescription}</p>
      
      {project.FlowChart && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Process Flow</h2>
          <project.FlowChart />
        </div>
      )}
      
      {project.technologies && project.technologies.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
          <div className="flex flex-wrap">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      
      
      {project.features && project.features.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
          <ul className="list-disc list-inside">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
      
      {project.screenshots && project.screenshots.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className="relative">
                {renderImage(screenshot.url, screenshot.caption, index)}
                <p className="mt-2 text-sm text-center">{screenshot.caption}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {project.codeSnippets && project.codeSnippets.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Code Snippets</h2>
          {project.codeSnippets.map((snippet, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold mb-2">{snippet.title}</h3>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{snippet.code}</code>
              </pre>
            </div>
          ))}
        </div>
      )}
      
      {project.processDescription && project.processDescription.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
          <ol className="list-decimal list-inside">
            {project.processDescription.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
      
      {project.services && project.services.length > 0 && (
  <div className="mb-6">
    <h2 className="text-3xl font-semibold mb-6 text-center">Spotify Analysis Tiers</h2>
    {project.services.map((service, index) => (
      <div key={index} className="mb-12 pb-8 border-b border-gray-300 last:border-b-0">
        <h3 className="text-2xl font-bold mb-4 text-blue-600">
          {index === 0 ? "Basic Tier" : index === 1 ? "Pro Tier" : "Extended Tier"}
        </h3>
        <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
        <p className="mb-4 text-lg">{service.description}</p>
        <p className="text-sm text-gray-600 mb-4">File: {service.file}</p>
        {service.features && service.features.length > 0 && (
          <>
            <h5 className="font-semibold mb-2 text-lg">Key Features:</h5>
            <ul className="list-disc list-inside mb-4">
              {service.features.map((feature, idx) => (
                <li key={idx} className="mb-1">{feature}</li>
              ))}
            </ul>
          </>
        )}
        <p className="mb-6">{service.explanation}</p>
        {service.images && service.images.length > 0 && (
          <div>
            <h5 className="font-semibold mb-2 text-lg">Visualizations:</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.images.map((img, imgIndex) => 
                renderImage(img, `${service.title} visualization ${imgIndex + 1}`, imgIndex)
              )}
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
)}
      
      {project.id === 'upark' && project.howItWorks && project.howItWorks.length > 0 && (
  <div className="mb-6">
    <h2 className="text-2xl font-semibold mb-2">UPark Process</h2>
    {project.howItWorks.map((section, index) => (
      <div key={index} className="mb-4">
        <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
        {Array.isArray(section.description) ? (
          <ul className="list-disc list-inside">
            {section.description.map((item, i) => (
              <li key={i} className="mb-1">{item}</li>
            ))}
          </ul>
        ) : (
          <p>{section.description}</p>
        )}
      </div>
    ))}
  </div>
)}

      {project.challenges && project.challenges.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Challenges Faced</h2>
          <ul className="list-disc list-inside">
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>
      )}
      
      {project.futurePlans && project.futurePlans.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Future Plans</h2>
          <ul className="list-disc list-inside">
            {project.futurePlans.map((plan, index) => (
              <li key={index}>{plan}</li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="flex space-x-4">
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            View on GitHub
          </a>
        )}
        {project.liveDemo && (
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
            Live Demo
          </a>
        )}
      </div>

      {fullViewImage && (
        <ImageModal 
          src={fullViewImage.src} 
          alt={fullViewImage.alt} 
          onClose={() => setFullViewImage(null)} 
        />
      )}
    </div>
  );
}

export default ProjectDetail;