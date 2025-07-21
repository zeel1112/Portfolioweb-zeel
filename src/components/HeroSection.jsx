import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, FileText, Send } from 'lucide-react';
import personalData from '../data/personalData';

export default function HeroSection() {
  const roles = personalData.roles;

  return (
    <section
      id="home"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-4 pt-24 scroll-section"
    >
      <div className="space-y-6 text-center lg:text-left">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
          Hi, I’m <span className="text-primary-500">{personalData.name}</span>
        </h1>

        <TypeAnimation
          sequence={[...roles.flatMap(r => [r, 2000]), () => {}]}
          wrapper="h2"
          cursor
          repeat={Infinity}
          className="text-2xl text-gray-700 dark:text-gray-300"
        />

        <p className="max-w-xl mx-auto lg:mx-0 text-lg leading-relaxed">
          {personalData.profileSummary}
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
          <a href={personalData.resumeLink} download className="btn btn-primary">
            <FileText className="w-5 h-5 mr-2" />
            Download CV
          </a>
          <a href="#contact" className="btn btn-secondary">
            <Send className="w-5 h-5 mr-2" />
            Let’s Talk
          </a>
        </div>

        <div className="mt-10 animate-bounce">
          <ArrowDown className="w-8 h-8 text-primary-500 mx-auto lg:mx-0" />
        </div>
      </div>

      <div className="relative flex justify-center lg:justify-end">
        <div className="w-72 h-72 rounded-xl overflow-hidden shadow-xl">
          <img
            src="/me.jpg"
            alt="Zeel Patel"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -top-8 -left-8 w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-sm rotate-45 animate-fadeIn opacity-60"></div>
      </div>
    </section>
  );
}
