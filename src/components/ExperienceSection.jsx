import React from 'react';
import { Clock, Briefcase } from 'lucide-react';
import personalData from '../data/personalData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ExperienceCard = ({ experience, isLast }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-8 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
      )}
      
      {/* Card */}
      <div className="relative ml-12 card p-6 hover:shadow-lg transition-all duration-300 mb-6">
        {/* Timeline dot */}
        <div className="absolute -left-16 top-6 w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
          <Briefcase className="h-4 w-4 text-white" />
        </div>
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
          <h3 className="text-xl font-semibold">{experience.role}</h3>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
            <Clock className="h-4 w-4 mr-1" />
            <span>{experience.duration}</span>
          </div>
        </div>
        
        <p className="text-lg text-primary-500 mb-4">{experience.company}</p>
        
        <ul className="list-disc list-inside space-y-2 mb-4">
          {experience.description.map((item, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-300">
              {item}
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {experience.skills.map((skill, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section id="experience" className="py-20">
      <div 
        ref={elementRef}
        className={`container mx-auto px-4 scroll-section ${isVisible ? 'is-visible' : ''}`}
      >
        <h2 className="section-title">My Experience</h2>
        
        <div className="mt-12 max-w-3xl mx-auto">
          {personalData.experiences.map((experience, index) => (
            <ExperienceCard 
              key={index} 
              experience={experience} 
              isLast={index === personalData.experiences.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;