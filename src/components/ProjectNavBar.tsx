import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Home } from 'lucide-react';
import AppleStyleIcon from './AppleStyleIcon';

const ProjectNavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="w-14 h-14 rounded-full hover:scale-110 transition-transform duration-300 ease-out backdrop-blur-md bg-white/10 flex items-center justify-center"
          >
            <div className="w-11 h-11">
              <AppleStyleIcon />
            </div>
          </Link>
          
          <Link 
            to="/"
            className="text-white hover:text-gray-300 transition-colors flex items-center space-x-2"
          >
            <Home size={20} />
            <span>{language === 'en' ? 'Back to Home' : '返回主页'}</span>
          </Link>

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            {language === 'en' ? '中文' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default ProjectNavBar;
