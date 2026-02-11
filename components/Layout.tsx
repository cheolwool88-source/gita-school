
import React, { useState } from 'react';
import { NavigationTab } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: NavigationTab.HOME, label: '메인' },
    { id: NavigationTab.INTRO, label: '학원 소개' },
    { id: NavigationTab.CURRICULUM, label: '커리큘럼' },
    { id: NavigationTab.INSTRUCTORS, label: '강사진' },
    { id: NavigationTab.REVIEWS, label: '수강 후기' },
    { id: NavigationTab.BLOG, label: '블로그' },
    { id: NavigationTab.CONTACT, label: '상담 문의' },
  ];

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
              <h1 className="text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                이진우 기타교실
              </h1>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
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
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
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
              <h2 className="text-xl font-bold text-white mb-4">이진우 기타교실</h2>
              <p className="text-sm leading-relaxed">
                초보에서 완주까지, 당신의 기타 여정을 함께합니다.<br />
                체계적인 커리큘럼과 1:1 맞춤 레슨으로<br />
                음악의 즐거움을 더해드립니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">연락처 및 위치</h3>
              <p className="text-sm">📍 경기도 동두천시 중앙로 116, 604-1 (지행동, 두손프라자)</p>
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
            © 2024 Lee Jin-woo Guitar Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
