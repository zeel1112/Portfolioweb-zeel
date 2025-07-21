import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import personalData from '../data/personalData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProjectCard = ({ project }) => {
  return (
    <div className="card group overflow-hidden hover:-translate-y-2 transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <h3 className="text-white font-semibold">{project.title}</h3>
          <div className="flex space-x-2">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-black/60 hover:bg-primary-500 rounded-full text-white transition-colors"
              aria-label={`View ${project.title} code on GitHub`}
            >
              <Github className="h-4 w-4" />
            </a>
            {project.demoLink && (
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-black/60 hover:bg-primary-500 rounded-full text-white transition-colors"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-5">
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [visibleProjects, setVisibleProjects] = useState(3);
  const showAllProjects = visibleProjects >= personalData.projects.length;

  const handleShowMore = () => {
    setVisibleProjects(prevCount => 
      prevCount + 3 > personalData.projects.length ? personalData.projects.length : prevCount + 3
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div 
        ref={elementRef}
        className={`container mx-auto px-4 scroll-section ${isVisible ? 'is-visible' : ''}`}
      >
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {personalData.projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        {!showAllProjects && (
          <div className="flex justify-center mt-10">
            <button 
              onClick={handleShowMore}
              className="btn btn-primary"
            >
              Show More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;