import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { personalData } from '../data/personalData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../contexts/ThemeContext';

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="card p-6 hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { darkMode } = useTheme();
  
  const calendarTheme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
  };
  
  return (
    <section id="skills" className="py-20">
      <div 
        ref={elementRef}
        className={`container mx-auto px-4 scroll-section ${isVisible ? 'is-visible' : ''}`}
      >
        <h2 className="section-title">Skills & Contributions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {personalData.skills.map((category, index) => (
            <SkillCategory 
              key={index} 
              title={category.category} 
              skills={category.items} 
            />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">GitHub Contributions</h3>
          <div className="card p-6 overflow-x-auto">
            <div className="min-w-max">
              <GitHubCalendar
                username="zeelpatel"
                theme={calendarTheme}
                dark={darkMode}
                hideColorLegend={false}
                hideMonthLabels={false}
                labels={{
                  totalCount: '{{count}} contributions in the last year',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;