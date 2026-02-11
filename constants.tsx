
import { Guitarist, Course, BlogPost, Review, Instructor, Language } from './types';

export const I18N_DATA: Record<Language, any> = {
  ko: {
    nav: {
      home: '메인',
      intro: '학원 소개',
      curriculum: '커리큘럼',
      instructors: '강사진',
      reviews: '수강 후기',
      blog: '블로그',
      contact: '상담 문의'
    },
    hero: {
      title: '이진우기타음악교습소',
      subtitle: '“초보에서 완주까지, 당신의 기타 여정을 함께합니다.”',
      cta1: '레슨 둘러보기',
      cta2: '무료 체험 상담'
    },
    sections: {
      styleTitle: '당신이 꿈꾸는 연주 스타일은?',
      styleSub: '위대한 기타리스트들처럼 연주해보세요.',
      currTitle: '체계적인 커리큘럼',
      currSub: '당신의 수준에 딱 맞는 클래스를 선택하세요.'
    },
    footer: {
      desc: '초보에서 완주까지, 당신의 기타 여정을 함께합니다. 체계적인 커리큘럼과 1:1 맞춤 레슨으로 음악의 즐거움을 더해드립니다.',
      contactTitle: '연락처 및 위치',
      address: '📍 경기도 동두천시 중앙로 116, 604-1 (지행동, 두손프라자)',
      parking: '두손프라자 지하 주차장을 무료로 이용하실 수 있습니다.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      intro: 'About',
      curriculum: 'Curriculum',
      instructors: 'Instructors',
      reviews: 'Reviews',
      blog: 'Blog',
      contact: 'Contact'
    },
    hero: {
      title: 'Lee Jin-woo Guitar Academy',
      subtitle: '“From beginner to completion, we join you on your guitar journey.”',
      cta1: 'Explore Lessons',
      cta2: 'Free Consultation'
    },
    sections: {
      styleTitle: 'What is your dream playing style?',
      styleSub: 'Learn to play like the world\'s greatest guitarists.',
      currTitle: 'Systematic Curriculum',
      currSub: 'Choose the class that perfectly fits your level.'
    },
    footer: {
      desc: 'From beginners to advanced players, we are with you every step of the way. We bring the joy of music through systematic curriculum and 1:1 lessons.',
      contactTitle: 'Contact & Location',
      address: '📍 604-1, 116 Jungang-ro, Dongducheon-si, Gyeonggi-do (Duson Plaza)',
      parking: 'Free parking is available at the Duson Plaza basement.'
    }
  }
};

export const getLocalizedData = (lang: Language) => ({
  GUITARISTS: [
    {
      id: 'rick-beato',
      name: 'Rick Beato',
      style: lang === 'ko' ? '음악 이론 & 프로듀싱' : 'Music Theory & Production',
      description: lang === 'ko' ? '음악 이론과 연주를 함께 아우르는 유튜브 스타일 콘텐츠의 대명사.' : 'A legend of music content covering theory and performance together.',
      imageUrl: 'https://picsum.photos/seed/rick/600/400'
    },
    {
      id: 'sungha-jung',
      name: lang === 'ko' ? '정성하' : 'Sungha Jung',
      style: 'Fingerstyle',
      description: lang === 'ko' ? '섬세한 어쿠스틱·핑거스타일 연주로 전 세계적인 사랑을 받는 연주자.' : 'A fingerstyle guitarist loved worldwide for his delicate performance.',
      imageUrl: 'https://picsum.photos/seed/sungha/600/400'
    },
    {
      id: 'john-mayer',
      name: 'John Mayer',
      style: 'Blues & Pop',
      description: lang === 'ko' ? '블루스와 팝을 넘나드는 감성적인 기타 솔로와 보컬의 조화.' : 'Harmony of emotional guitar solos and vocals crossing blues and pop.',
      imageUrl: 'https://picsum.photos/seed/mayer/600/400'
    },
    {
      id: 'tommy-emmanuel',
      name: 'Tommy Emmanuel',
      style: 'High-Tech Fingerstyle',
      description: lang === 'ko' ? '전설적인 테크닉과 리듬감을 보유한 어쿠스틱 기타의 거장.' : 'A master of acoustic guitar with legendary technique and rhythm.',
      imageUrl: 'https://picsum.photos/seed/tommy/600/400'
    },
    {
      id: 'eric-clapton',
      name: 'Eric Clapton',
      style: 'Blues & Rock',
      description: lang === 'ko' ? '기타의 신으로 불리는 전설적인 블루스 록 연주자.' : 'A legendary blues-rock player known as the god of guitar.',
      imageUrl: 'https://picsum.photos/seed/clapton/600/400'
    }
  ],
  INSTRUCTORS: [
    {
      id: 'lee-jin-woo',
      name: lang === 'ko' ? '이진우' : 'Jin-woo Lee',
      position: lang === 'ko' ? '한국기타협회 동두천 지부장' : 'Head of Dongducheon Branch, Korea Guitar Association',
      specialty: lang === 'ko' ? '클래식 기타, 어쿠스틱/핑거스타일, 일렉 기타 전반' : 'Classic Guitar, Acoustic/Fingerstyle, Electric Guitar',
      experience: lang === 'ko' ? [
        '한국기타협회 정회원 및 지부장',
        '다수의 개인 레슨 및 단체 강의 경력',
        '전문 연주자 양성 및 입시 지도',
        '지역 문화 예술 공연 기획 및 참여'
      ] : [
        'Member and Branch Head of Korea Guitar Association',
        'Extensive experience in individual and group lessons',
        'Professional performer training and entrance exam guidance',
        'Local cultural arts performance planning'
      ],
      imageUrl: 'https://picsum.photos/seed/leejinwoo/600/800'
    }
  ],
  COURSES: [
    {
      id: 'basic',
      title: lang === 'ko' ? '입문 레슨' : 'Introductory Lesson',
      target: lang === 'ko' ? '기타를 처음 배우는 분' : 'Complete Beginners',
      description: lang === 'ko' ? '기초 코드 잡는 법부터 기본 8비트 리듬까지 차근차근 배웁니다.' : 'Learn step-by-step from holding basic chords to 8-beat rhythms.',
      level: lang === 'ko' ? '입문' : 'Intro'
    },
    {
      id: 'rhythm',
      title: lang === 'ko' ? '리듬 마스터' : 'Rhythm Master',
      target: lang === 'ko' ? '코드 전환은 가능하나 박자가 어려운 분' : 'Intermediate Beginners struggling with rhythm',
      description: lang === 'ko' ? '고고, 셔플, 칼립소 등 다양한 스트로크 패턴을 마스터합니다.' : 'Master various stroke patterns like Go-go, Shuffle, and Calypso.',
      level: lang === 'ko' ? '초급' : 'Beginner'
    },
    {
      id: 'fingerstyle',
      title: lang === 'ko' ? '핑거스타일 코스' : 'Fingerstyle Course',
      target: lang === 'ko' ? '어쿠스틱 연주곡을 치고 싶은 분' : 'Those who want to play acoustic pieces',
      description: lang === 'ko' ? '퍼커시브, 해머링, 풀링오프 등 고급 핑거스타일 테크닉을 익힙니다.' : 'Learn advanced fingerstyle techniques like percussive, hammering, and pull-offs.',
      level: lang === 'ko' ? '중급' : 'Intermediate'
    },
    {
      id: 'electric',
      title: lang === 'ko' ? '일렉 기타 집중반' : 'Electric Guitar Intensive',
      target: lang === 'ko' ? '락, 블루스 솔로 연주가 목표인 분' : 'Targeting rock and blues solo playing',
      description: lang === 'ko' ? '앰프 활용법, 이펙터 세팅, 스케일 이론 및 솔로 연주를 배웁니다.' : 'Learn amp usage, effector settings, scale theory, and soloing.',
      level: lang === 'ko' ? '중급' : 'Intermediate'
    },
    {
      id: 'project',
      title: lang === 'ko' ? '곡 완성 프로젝트' : 'Song Completion Project',
      target: lang === 'ko' ? '한 곡을 완벽하게 마스터하고 싶은 분' : 'Wanting to master a specific song perfectly',
      description: lang === 'ko' ? '본인이 좋아하는 곡을 선정하여 디테일한 표현력까지 완성합니다.' : 'Select your favorite song and complete it with detailed expression.',
      level: lang === 'ko' ? '고급' : 'Advanced'
    }
  ],
  REVIEWS: [
    {
      id: 'r1',
      author: lang === 'ko' ? '김민준 수강생' : 'Student Min-jun Kim',
      content: lang === 'ko' ? '막연하게 어렵게만 느껴졌던 코드 전환이 한 달 만에 부드러워졌어요! 선생님의 설명이 정말 명쾌합니다.' : 'Chord changes that felt impossible became smooth in just one month! The teacher\'s explanations are so clear.',
      date: '2024.03.15',
      image: 'https://picsum.photos/seed/p1/200/200'
    },
    {
      id: 'r2',
      author: lang === 'ko' ? '이서연 수강생' : 'Student Seo-yeon Lee',
      content: lang === 'ko' ? '핑거스타일 정성하 곡을 연주하는 게 꿈이었는데, 이제 첫 곡을 완주했어요. 체계적인 커리큘럼 덕분입니다.' : 'It was my dream to play Sungha Jung\'s fingerstyle songs, and I\'ve finished my first one. Thanks to the curriculum.',
      date: '2024.04.10',
      image: 'https://picsum.photos/seed/p2/200/200'
    }
  ],
  BLOG_POSTS: [
    {
      id: 'b1',
      title: lang === 'ko' ? '초보자가 가장 어려워하는 F코드 쉽게 잡는 팁' : 'Tips for mastering the difficult F chord for beginners',
      excerpt: lang === 'ko' ? '손가락 힘이 문제가 아닙니다. 각도와 무게 중심이 핵심입니다.' : 'It\'s not about finger strength. Angles and center of gravity are key.',
      date: '2024.05.01',
      category: 'Tip'
    },
    {
      id: 'b2',
      title: lang === 'ko' ? '매일 20분 효율적인 연습 플랜 짜기' : 'Creating an efficient 20-minute daily practice plan',
      excerpt: lang === 'ko' ? '짧은 시간이라도 매일 하는 연습이 실력을 바꿉니다.' : 'Consistency, even for a short time, changes your skills.',
      date: '2024.05.05',
      category: 'Guide'
    }
  ]
});
