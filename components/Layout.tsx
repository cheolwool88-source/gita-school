
import React, { useState, useRef, useEffect } from 'react';
import { NavigationTab, Language } from '../types';
import { I18N_DATA } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  activeTab, 
  setActiveTab, 
  language, 
  setLanguage 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const t = I18N_DATA[language];

  const navItems = [
    { id: NavigationTab.HOME, label: t.nav.home },
    { id: NavigationTab.INTRO, label: t.nav.intro },
    { id: NavigationTab.CURRICULUM, label: t.nav.curriculum },
    { id: NavigationTab.INSTRUCTORS, label: t.nav.instructors },
    { id: NavigationTab.REVIEWS, label: t.nav.reviews },
    { id: NavigationTab.BLOG, label: t.nav.blog },
    { id: NavigationTab.CONTACT, label: t.nav.contact },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languageNames = {
    ko: '한국어',
    en: 'English'
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => setActiveTab(NavigationTab.HOME)}
            >
              <span className="text-3xl mr-2">🎸</span>
              <h1 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                {t.hero.title}
              </h1>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6 items-center">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                    activeTab === item.id ? 'text-amber-600 border-b-2 border-amber-600' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Language Dropdown */}
              <div className="relative ml-4" ref={langRef}>
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center space-x-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full text-sm font-medium text-slate-700 transition-all shadow-sm"
                >
                  <span className="text-lg">🌐</span>
                  <span>{languageNames[language]}</span>
                  <svg className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                    <button 
                      onClick={() => { setLanguage('ko'); setIsLangOpen(false); }}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-slate-50 transition-colors ${language === 'ko' ? 'text-amber-600 font-bold' : 'text-slate-700'}`}
                    >
                      한국어 (KR)
                    </button>
                    <button 
                      onClick={() => { setLanguage('en'); setIsLangOpen(false); }}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-slate-50 transition-colors border-t border-slate-50 ${language === 'en' ? 'text-amber-600 font-bold' : 'text-slate-700'}`}
                    >
                      English (EN)
                    </button>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center space-x-2">
              <button 
                onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
                className="flex items-center space-x-1 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full text-xs font-bold text-amber-600 shadow-sm"
              >
                <span>🌐</span>
                <span>{language.toUpperCase()}</span>
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600 hover:text-amber-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-base font-medium rounded-md ${
                  activeTab === item.id ? 'bg-amber-50 text-amber-600' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">{t.hero.title}</h2>
              <p className="text-sm leading-relaxed">
                {t.footer.desc}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">{t.footer.contactTitle}</h3>
              <p className="text-sm">{t.footer.address}</p>
              <p className="text-sm mt-2">📞 031-845-2760</p>
              <p className="text-sm mt-2">📧 guitarlee@example.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">SNS</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.youtube.com/watch?v=qw_3F_BmCvU&list=PL58m3BZLnsJvDD8r0-KI482vBoTJyZ-ft" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  YouTube
                </a>
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Blog</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
            © 2024 {language === 'ko' ? '이진우기타음악교습소' : 'Lee Jin-woo Guitar Academy'}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
