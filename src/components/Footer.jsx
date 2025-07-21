import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import personalData from '../data/personalData';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a href={`mailto:${personalData.email}`} aria-label="Email" className="hover:text-primary-500">
              <Mail className="h-6 w-6" />
            </a>
            <a href={personalData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary-500">
              <Github className="h-6 w-6" />
            </a>
            <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary-500">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-400">© {year} {personalData.name}. All Rights Reserved.</p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2 flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>

)};

export default Footer;
