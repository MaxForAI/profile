import { useState, useEffect, type ReactNode } from 'react';
import AppleStyleIcon from './AppleStyleIcon';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 处理键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // 当菜单打开时禁止滚动
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // 关闭菜单并滚动到目标位置
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackToTop = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'
      }`}
      role="navigation"
      aria-label={language === 'en' ? 'Main navigation' : '主导航'}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            type="button"
            onClick={handleBackToTop}
            className="w-14 h-14 rounded-full hover:scale-110 transition-transform duration-300 ease-out backdrop-blur-md bg-white/10 flex items-center justify-center"
            aria-label={language === 'en' ? 'Back to top' : '返回顶部'}
          >
            <div className="w-11 h-11">
              <AppleStyleIcon />
            </div>
          </button>
          
          {/* 桌面端导航 */}
          <div className="hidden sm:flex space-x-8" role="menubar">
            <NavLink href="#projects">{language === 'en' ? 'Projects' : '过往项目'}</NavLink>
            <NavLink href="#about">{language === 'en' ? 'About' : '关于我'}</NavLink>
            <NavLink href="#contact">{language === 'en' ? 'Contact' : '联系我'}</NavLink>
          </div>

          <div className="flex items-center space-x-4">
            {/* 语言切换按钮 */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md
                       transition-all duration-300 text-white font-medium
                       hover:scale-105 active:scale-95"
              aria-label={language === 'en' ? 'Switch to Chinese' : '切换为英文'}
              title={language === 'en' ? 'Switch to Chinese' : '切换为英文'}
            >
              {language === 'en' ? '中文' : 'EN'}
            </button>

            {/* 移动端菜单按钮 */}
            <button
              className="sm:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 
                (language === 'en' ? 'Close menu' : '关闭菜单') : 
                (language === 'en' ? 'Open menu' : '打开菜单')
              }
            >
              {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        <div
          id="mobile-menu"
          className={`sm:hidden fixed inset-0 top-[72px] bg-black/95 backdrop-blur-lg transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label={language === 'en' ? 'Mobile menu' : '移动端菜单'}
        >
          <div className="flex flex-col items-center pt-8 space-y-8">
            <MobileNavLink href="#projects" onClick={() => handleNavClick('#projects')}>
              {language === 'en' ? 'Projects' : '过往项目'}
            </MobileNavLink>
            <MobileNavLink href="#about" onClick={() => handleNavClick('#about')}>
              {language === 'en' ? 'About' : '关于我'}
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => handleNavClick('#contact')}>
              {language === 'en' ? 'Contact' : '联系我'}
            </MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    className="text-white/80 hover:text-white transition-colors duration-300
               relative after:absolute after:bottom-0 after:left-0 after:right-0
               after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100
               after:transition-transform after:duration-300 after:origin-center"
    role="menuitem"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void; 
  children: ReactNode
}) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className="text-2xl text-white/80 hover:text-white transition-colors duration-300
               relative after:absolute after:bottom-0 after:left-0 after:right-0
               after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100
               after:transition-transform after:duration-300 after:origin-center"
  >
    {children}
  </a>
);

export default NavBar;
