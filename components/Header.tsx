import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 80; // Offset to account for fixed header
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      // Handle header background change on scroll
      setIsScrolled(window.scrollY > 10);

      // Handle active navigation link
      let currentSection = '';
      navLinks.forEach(link => {
        const section = document.querySelector(link.href);
        if (section) {
          // 88px offset for header height to ensure section title is visible
          if ((section as HTMLElement).offsetTop <= window.scrollY + 88) {
            currentSection = link.href.substring(1);
          }
        }
      });
      
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
        currentSection = 'contact';
      } else if (currentSection === '') {
        currentSection = 'home';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={handleLinkClick} className="text-2xl font-bold text-teal-500 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors">
          GNO
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={`text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 relative group ${
                activeSection === link.href.substring(1) ? 'text-teal-500 dark:text-teal-400 font-semibold' : ''
              }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 dark:bg-teal-400 transition-all duration-300 group-hover:w-full ${
                activeSection === link.href.substring(1) ? 'w-full' : ''
              }`}></span>
            </a>
          ))}
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-50 h-8 w-8 text-gray-600 dark:text-gray-300 focus:outline-none"
                aria-label="Toggle menu"
            >
                <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-6 transform bg-current transition duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-45' : '-translate-y-2'
                    }`}
                ></span>
                <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-6 transform bg-current transition duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : ''
                    }`}
                ></span>
                <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-6 transform bg-current transition duration-300 ease-in-out ${
                    isMenuOpen ? '-rotate-45' : 'translate-y-2'
                    }`}
                ></span>
                </div>
            </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 text-lg ${
                  activeSection === link.href.substring(1) ? 'text-teal-500 dark:text-teal-400 font-semibold' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;