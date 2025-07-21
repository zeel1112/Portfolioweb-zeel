import React from 'react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, FileText, Send } from 'lucide-react';
import { personalData } from '../data/personalData';

const HeroSection = () => {
  // Create typing sequence from roles
  const typingSequence = personalData.roles.flatMap((role) => [role, 1500]).slice(0, -1);

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
          <h1 className="font-bold mb-4 animate-slideDown">
            <span className="text-gray-800 dark:text-white">Hi, I'm </span>
            <span className="text-primary-500">{personalData.name}</span>
          </h1>

          <div className="flex items-center mb-6 text-lg sm:text-xl md:text-2xl animate-slideDown animation-delay-200">
            <span className="mr-2">I'm a</span>
            <TypeAnimation
              sequence={typingSequence}
              wrapper="span"
              speed={50}
              className="text-primary-500 font-semibold"
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mb-8 animate-slideDown animation-delay-300">
            {personalData.profileSummary}
          </p>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 animate-slideDown animation-delay-400">
            Based in <span className="font-medium">{personalData.location}</span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slideDown animation-delay-500">
            <a
              href={personalData.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FileText className="w-5 h-5 mr-2" />
              View Resume
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn btn-secondary cursor-pointer"
            >
              <Send className="w-5 h-5 mr-2" />
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer"
        >
          <ArrowDown className="h-8 w-8 text-primary-500" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;