
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { GuitaristCard } from './components/GuitaristCard';
import { AIAdvisor } from './components/AIAdvisor';
import { NavigationTab, Language } from './types';
import { I18N_DATA, getLocalizedData } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavigationTab>(NavigationTab.HOME);
  const [language, setLanguage] = useState<Language>('ko');

  const t = I18N_DATA[language];
  const { GUITARISTS, COURSES, REVIEWS, BLOG_POSTS, INSTRUCTORS } = getLocalizedData(language);

  const renderContent = () => {
    switch (activeTab) {
      case NavigationTab.HOME:
        return (
          <>
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center overflow-hidden">
              <div className="absolute inset-0">
                <img 
                  src="https://picsum.photos/seed/guitar-hero/1920/1080" 
                  className="w-full h-full object-cover brightness-[0.4]"
                  alt="Guitar background"
                />
              </div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 animate-in fade-in slide-in-from-left duration-1000">
                  {t.hero.title}
                </h1>
                <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl text-slate-200">
                  {t.hero.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setActiveTab(NavigationTab.CURRICULUM)}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl"
                  >
                    {t.hero.cta1}
                  </button>
                  <button 
                    onClick={() => setActiveTab(NavigationTab.CONTACT)}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold transition-all"
                  >
                    {t.hero.cta2}
                  </button>
                </div>
              </div>
            </section>

            {/* Featured Guitarists Section */}
            <section className="py-20 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">{t.sections.styleTitle}</h2>
                    <p className="text-slate-600">{t.sections.styleSub}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  {GUITARISTS.map((g) => (
                    <GuitaristCard key={g.id} guitarist={g} />
                  ))}
                </div>
              </div>
            </section>

            {/* AI section */}
            <section className="py-12 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AIAdvisor language={language} />
              </div>
            </section>

            {/* Quick Curriculum Preview */}
            <section className="py-20 bg-slate-900 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">{t.sections.currTitle}</h2>
                  <p className="text-slate-400">{t.sections.currSub}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {COURSES.slice(0, 3).map(course => (
                    <div key={course.id} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-amber-500 transition-colors">
                      <span className="text-amber-500 text-sm font-bold block mb-4">{course.level}</span>
                      <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                      <p className="text-slate-400 text-sm mb-6 leading-relaxed">{course.description}</p>
                      <button 
                        onClick={() => setActiveTab(NavigationTab.CURRICULUM)}
                        className="text-amber-400 font-semibold flex items-center hover:translate-x-2 transition-transform"
                      >
                        {language === 'ko' ? '자세히 보기' : 'View More'} <span className="ml-2">→</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        );

      case NavigationTab.INSTRUCTORS:
        return (
          <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-12 text-center">{language === 'ko' ? '실력 있는 강사진' : 'Professional Instructors'}</h1>
            <div className="max-w-4xl mx-auto">
              {INSTRUCTORS.map(instructor => (
                <div key={instructor.id} className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                  <div className="md:w-2/5 relative">
                    <img 
                      src={instructor.imageUrl} 
                      alt={instructor.name} 
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent md:hidden" />
                    <div className="absolute bottom-6 left-6 text-white md:hidden">
                      <h2 className="text-3xl font-bold">{instructor.name}</h2>
                      <p className="text-amber-400 font-medium">{instructor.position}</p>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-10 flex flex-col justify-center">
                    <div className="hidden md:block mb-6">
                      <h2 className="text-4xl font-bold text-slate-900 mb-2">{instructor.name}</h2>
                      <p className="text-xl text-amber-600 font-semibold">{instructor.position}</p>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-2">{language === 'ko' ? '전문 분야' : 'Specialty'}</h3>
                        <p className="text-slate-700 font-medium">{instructor.specialty}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-2">{language === 'ko' ? '주요 약력' : 'Key Experience'}</h3>
                        <ul className="space-y-2">
                          {instructor.experience.map((exp, idx) => (
                            <li key={idx} className="flex items-start text-slate-600">
                              <span className="text-amber-500 mr-2">✦</span>
                              {exp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setActiveTab(NavigationTab.CONTACT)}
                      className="mt-10 bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-amber-600 transition-colors self-start"
                    >
                      {language === 'ko' ? '강사님께 상담 신청하기' : 'Request Consultation'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case NavigationTab.CURRICULUM:
        return (
          <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-8 border-l-4 border-amber-600 pl-4">{language === 'ko' ? '상세 커리큘럼' : 'Detailed Curriculum'}</h1>
            <div className="grid grid-cols-1 gap-6">
              {COURSES.map((course, idx) => (
                <div key={course.id} className="flex flex-col md:flex-row bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="md:w-1/4 bg-slate-50 flex items-center justify-center p-8 border-r border-slate-100">
                    <div className="text-center">
                       <span className="text-4xl font-serif font-bold text-amber-600">0{idx + 1}</span>
                       <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">{course.level}</p>
                    </div>
                  </div>
                  <div className="flex-grow p-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">{course.title}</h2>
                    <p className="text-amber-700 font-medium mb-4">{language === 'ko' ? '대상' : 'Target'}: {course.target}</p>
                    <p className="text-slate-600 leading-relaxed">{course.description}</p>
                  </div>
                  <div className="p-8 flex items-center">
                    <button 
                      onClick={() => setActiveTab(NavigationTab.CONTACT)}
                      className="whitespace-nowrap bg-slate-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-amber-600 transition-colors"
                    >
                      {language === 'ko' ? '상담 예약' : 'Book Now'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case NavigationTab.INTRO:
        return (
          <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-8">{language === 'ko' ? '학원 소개' : 'About Our Academy'}</h1>
            <div className="bg-amber-50 rounded-3xl p-12 text-left mb-12 shadow-inner">
              <h2 className="text-2xl font-bold mb-6 text-amber-900">{language === 'ko' ? '이진우기타음악교습소의 철학' : 'Our Philosophy'}</h2>
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🎵</span>
                  <p><strong>{language === 'ko' ? '초보자 친화적' : 'Beginner Friendly'}:</strong> {language === 'ko' ? '악기를 처음 잡아보는 분들도 당황하지 않도록 아주 기초적인 부분부터 천천히, 즐겁게 알려드립니다.' : 'We teach slowly and enjoyably from the very basics so that even those who pick up an instrument for the first time will not be flustered.'}</p>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📖</span>
                  <p><strong>{language === 'ko' ? '이론과 실습의 균형' : 'Theory & Practice Balance'}:</strong> {language === 'ko' ? '단순히 손가락만 움직이는 것이 아니라, 왜 그런 소리가 나는지 음악적 원리를 함께 깨닫도록 돕습니다.' : 'We don\'t just move fingers; we help you understand the musical principles behind why those sounds are made.'}</p>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🎯</span>
                  <p><strong>{language === 'ko' ? '개인별 맞춤' : 'Personalized'}:</strong> {language === 'ko' ? '사람마다 손의 모양과 좋아하는 음악 취향이 다릅니다. 각자에게 최적화된 연습 방법을 제시합니다.' : 'Everyone has different hand shapes and musical tastes. We suggest practice methods optimized for each individual.'}</p>
                </div>
              </div>
            </div>
            <img 
              src="https://picsum.photos/seed/academy/1200/600" 
              className="rounded-3xl shadow-2xl mb-12" 
              alt="Academy interior" 
            />
          </div>
        );

      case NavigationTab.REVIEWS:
        return (
          <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-12 text-center">{language === 'ko' ? '수강생 생생 후기' : 'Student Reviews'}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {REVIEWS.map(review => (
                <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex items-center mb-6">
                    <img src={review.image} className="w-16 h-16 rounded-full mr-4 border-2 border-amber-100" alt={review.author} />
                    <div>
                      <h3 className="font-bold text-slate-900">{review.author}</h3>
                      <p className="text-xs text-slate-400">{review.date}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 italic leading-relaxed">"{review.content}"</p>
                </div>
              ))}
            </div>
          </div>
        );

      case NavigationTab.CONTACT:
        return (
          <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 space-y-8 animate-in fade-in slide-in-from-left duration-700">
                <div>
                  <h1 className="text-4xl font-bold text-slate-900 mb-4">{language === 'ko' ? '찾아오시는 길' : 'Visit Us'}</h1>
                  <p className="text-slate-600">{language === 'ko' ? '이진우기타음악교습소는 여러분의 방문을 언제나 환영합니다.' : 'We always welcome your visit to the Lee Jin-woo Guitar Academy.'}</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-xl mr-4">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{language === 'ko' ? '학원 주소' : 'Address'}</h3>
                      <p className="text-slate-600 leading-relaxed">
                        {t.footer.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-xl mr-4">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{language === 'ko' ? '전화번호' : 'Phone'}</h3>
                      <p className="text-slate-600">031-845-2760</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-xl mr-4">
                      <span className="text-2xl">⏰</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{language === 'ko' ? '운영 시간' : 'Hours'}</h3>
                      <p className="text-slate-600 text-sm">{language === 'ko' ? '평일: 13:00 - 22:00' : 'Weekdays: 13:00 - 22:00'}</p>
                      <p className="text-slate-600 text-sm">{language === 'ko' ? '토요일: 10:00 - 18:00' : 'Saturdays: 10:00 - 18:00'}</p>
                      <p className="text-slate-600 text-sm">{language === 'ko' ? '일요일 및 공휴일 휴무' : 'Closed on Sundays/Holidays'}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-slate-900 rounded-3xl text-white">
                  <h3 className="font-bold mb-2">{language === 'ko' ? '무료 주차 안내' : 'Free Parking'}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {t.footer.parking}
                  </p>
                </div>

                {/* Interactive Map with specific marker */}
                <div className="rounded-3xl overflow-hidden h-72 shadow-xl border border-slate-200 mt-6 relative group">
                  <iframe 
                    title="Academy Location"
                    src="https://maps.google.com/maps?q=%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EB%8F%99%EB%91%90%EC%B2%9C%EC%8B%9C%20%EC%A4%91%EC%95%99%EB%A1%9C%20116&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                  ></iframe>
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 pointer-events-none transition-colors"></div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-right duration-700">
                  <div className="bg-amber-600 p-8 text-center">
                    <h2 className="text-2xl font-bold text-white mb-2">{language === 'ko' ? '상담 문의 메시지' : 'Inquiry Message'}</h2>
                    <p className="text-amber-100">{language === 'ko' ? '궁금한 점이 있다면 무엇이든 물어보세요.' : 'Feel free to ask us anything.'}</p>
                  </div>
                  <form className="p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">{language === 'ko' ? '성함' : 'Name'}</label>
                        <input type="text" className="w-full rounded-lg border-slate-300 focus:ring-amber-500 focus:border-amber-500 py-3" placeholder={language === 'ko' ? '홍길동' : 'Full Name'} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">{language === 'ko' ? '연락처' : 'Phone'}</label>
                        <input type="tel" className="w-full rounded-lg border-slate-300 focus:ring-amber-500 focus:border-amber-500 py-3" placeholder="010-0000-0000" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">{language === 'ko' ? '희망 레슨 코스' : 'Preferred Course'}</label>
                      <select className="w-full rounded-lg border-slate-300 focus:ring-amber-500 focus:border-amber-500 py-3">
                        {COURSES.map(c => <option key={c.id}>{c.title}</option>)}
                        <option>{language === 'ko' ? '기타 스타일 문의' : 'Other'}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">{language === 'ko' ? '문의 내용' : 'Message'}</label>
                      <textarea rows={4} className="w-full rounded-lg border-slate-300 focus:ring-amber-500 focus:border-amber-500" placeholder={language === 'ko' ? '상담받고 싶은 내용을 적어주세요.' : 'How can we help you?'}></textarea>
                    </div>
                    <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-amber-600 transition-colors shadow-lg transform hover:-translate-y-1">
                      {language === 'ko' ? '상담 신청하기' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
      
      case NavigationTab.BLOG:
        return (
          <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-12">{language === 'ko' ? '기타 꿀팁 & 소식' : 'Guitar Tips & News'}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BLOG_POSTS.map(post => (
                <div key={post.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl aspect-video mb-4 shadow-sm">
                    <img src={`https://picsum.photos/seed/${post.id}/800/450`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-amber-700 shadow-sm">{post.category}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">{post.title}</h3>
                  <p className="text-slate-500 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center text-slate-400 text-sm">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{language === 'ko' ? 'By 이진우 강사' : 'By Instructor Lee'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return <div className="py-20 text-center">Under construction</div>;
    }
  };

  return (
    <Layout 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      language={language} 
      setLanguage={setLanguage}
    >
      {renderContent()}
    </Layout>
  );
};

export default App;
