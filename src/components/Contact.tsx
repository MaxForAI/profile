import { type ReactNode } from 'react';
import Section from './Section';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, Mail, Send, Twitter } from 'lucide-react';
import { SiXiaohongshu } from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const { language } = useLanguage();

  return (
    <Section 
      title={language === 'en' ? 'Get in Touch' : '联系我'} 
      id="contact"
      className="bg-black"
      titleClassName="text-4xl font-bold mb-12 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
    >
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xl text-gray-300 mb-8">
          {language === 'en' 
            ? "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."
            : "我随时欢迎讨论新项目、创意想法，或成为您愿景的一部分。"
          }
        </p>

        <a
          href="mailto:liudeze1999@gmail.com"
          className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors mb-12 group"
        >
          <Send className="mr-2 group-hover:translate-x-1 transition-transform" />
          <span>{language === 'en' ? 'Send me an email' : '给我发邮件'}</span>
        </a>

        <div className="space-y-4">
          <p className="text-gray-400 text-lg">
            {language === 'en' ? 'Or find me on social media' : '或者在社交媒体上找到我'}
          </p>
          
          <div className="flex justify-center space-x-6">
            <SocialLink 
              href="https://github.com/MaxLiu199909" 
              icon={<FaGithub className="w-8 h-8 text-blue-400 hover:text-blue-300" />} 
              label="GitHub"
            />
            <SocialLink 
              href="https://www.linkedin.com/in/max-liu-645814138/" 
              icon={<FaLinkedin className="w-8 h-8 text-blue-500 hover:text-blue-400" />} 
              label="LinkedIn"
            />
            <SocialLink 
              href="https://x.com/Max939566737067" 
              icon={<Twitter className="w-8 h-8 text-sky-400 hover:text-sky-300" />} 
              label="X"
            />
            <SocialButton
              onClick={() => window.open('weixin://')}
              icon={<MessageCircle className="w-8 h-8 text-green-500 hover:text-green-400" />}
              label="WeChat"
            />
            <SocialLink 
              href="mailto:liudeze1999@gmail.com" 
              icon={<Mail className="w-8 h-8 text-amber-400 hover:text-amber-300" />} 
              label="Email"
            />
            <SocialLink 
              href="https://www.xiaohongshu.com/user/profile/64867045000000001c029874" 
              icon={<SiXiaohongshu className="w-8 h-8 text-red-500 hover:text-red-400" />} 
              label="小红书"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: ReactNode; label: string }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white hover:scale-110 transition-all duration-300"
    title={label}
  >
    {icon}
  </a>
);

const SocialButton = ({ onClick, icon, label }: { onClick: () => void; icon: ReactNode; label: string }) => (
  <button
    onClick={onClick}
    className="hover:text-white hover:scale-110 transition-all duration-300"
    title={label}
  >
    {icon}
  </button>
);

export default Contact;
