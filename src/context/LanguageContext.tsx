import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface LanguageContextProps {
  language: string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// 获取初始语言
const getInitialLanguage = (): string => {
  // 1. 首先检查本地存储
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage && ['en', 'zh'].includes(savedLanguage)) {
    return savedLanguage;
  }

  // 2. 检查浏览器语言
  const browserLanguage = navigator.language.toLowerCase();
  if (browserLanguage.startsWith('zh')) {
    return 'zh';
  }

  // 3. 默认返回英文
  return 'en';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  // 当语言改变时，保存到本地存储
  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
    // 更新 HTML lang 属性
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    // 更新 meta 描述
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        language === 'en' 
          ? "Max Liu's portfolio - AI Developer, Community Builder, and Tech Enthusiast. Founder of AdventureX and HackathonWeekly."
          : "Max Liu的个人网站 - AI开发者、社区建设者和技术爱好者。AdventureX创始人，HackathonWeekly联合创始人。"
      );
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'zh' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
