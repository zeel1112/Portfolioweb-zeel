import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X, Download, Sun, Moon, BookOpen } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import personalData from '../data/personalData';

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      const docH = document.body.scrollHeight - window.innerHeight;
      setProgress((y / docH) * 100);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'experience', label: 'Experience' },
    { to: 'projects', label: 'Projects' },
    { to: 'skills', label: 'Skills' },
    { to: 'blog', label: 'Blog' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <div
        className="fixed top-0 left-0 h-1 bg-primary-500 z-50 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />

      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 py-2 shadow-md backdrop-blur-sm dark:bg-gray-900/95'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <ScrollLink
            to="home" smooth offset={-80} duration={500}
            className="text-2xl font-bold text-primary-500 cursor-pointer"
          >
            ZP
          </ScrollLink>

          <div className="hidden md:flex items-center space-x-6">
            {links.map(({ to, label }) => (
              <ScrollLink
                key={to}
                to={to} spy smooth offset={-80} duration={500}
                activeClass="text-primary-600"
                className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
              >
                {label}
              </ScrollLink>
            ))}

            <a
              href={personalData.resumeLink}
              download
              className="inline-flex items-center space-x-1 btn-primary"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 z-30 transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6 space-y-6">
            {links.map(({ to, label }) => (
              <ScrollLink
                key={to}
                to={to} spy smooth offset={-80} duration={500}
                onClick={() => setIsOpen(false)}
                className="block text-lg text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
              >
                {label}
              </ScrollLink>
            ))}

            <a
              href={personalData.resumeLink}
              download
              className="mt-4 inline-flex items-center space-x-1 btn-primary"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>

            <button
              onClick={() => { toggleTheme(); setIsOpen(false); }}
              className="mt-4 flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
              <span>{darkMode ? 'Light' : 'Dark'} Mode</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
