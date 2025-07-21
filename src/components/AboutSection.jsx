import React from 'react';
import { Briefcase, GraduationCap, Heart } from 'lucide-react';
import { personalData } from '../data/personalData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div 
        ref={elementRef}
        className={`container mx-auto px-4 scroll-section ${isVisible ? 'is-visible' : ''}`}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="space-y-6">
            <p className="text-lg">{personalData.aboutMe}</p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center">
                <Heart className="h-5 w-5 mr-2 text-primary-500" /> 
                My Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalData.interests.map((interest, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-primary-500" /> 
                Education
              </h3>
              <div className="space-y-6">
                {personalData.education.map((edu, index) => (
                  <div key={index} className="card p-5 hover:border-l-4 hover:border-primary-500 transition-all">
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                    <div className="flex justify-between mt-2 text-sm">
                      <span className="text-gray-500 dark:text-gray-400">{edu.duration}</span>
                      <span className="text-primary-500">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-primary-500" /> 
                Certifications
              </h3>
              <div className="space-y-3">
                {personalData.certifications.map((cert, index) => (
                  <div key={index} className="card p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700">
                    <div>
                      <h5 className="font-medium">{cert.title}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;