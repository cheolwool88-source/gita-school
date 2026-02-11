
import { Guitarist, Course, BlogPost, Review } from './types';

export const GUITARISTS: Guitarist[] = [
  {
    id: 'rick-beato',
    name: 'Rick Beato',
    style: 'Music Theory & Production',
    description: '음악 이론과 연주를 함께 아우르는 유튜브 스타일 콘텐츠의 대명사.',
    imageUrl: 'https://picsum.photos/seed/rick/600/400'
  },
  {
    id: 'sungha-jung',
    name: '정성하 (Sungha Jung)',
    style: 'Fingerstyle',
    description: '섬세한 어쿠스틱·핑거스타일 연주로 전 세계적인 사랑을 받는 연주자.',
    imageUrl: 'https://picsum.photos/seed/sungha/600/400'
  },
  {
    id: 'john-mayer',
    name: 'John Mayer',
    style: 'Blues & Pop',
    description: '블루스와 팝을 넘나드는 감성적인 기타 솔로와 보컬의 조화.',
    imageUrl: 'https://picsum.photos/seed/mayer/600/400'
  },
  {
    id: 'tommy-emmanuel',
    name: 'Tommy Emmanuel',
    style: 'High-Tech Fingerstyle',
    description: '전설적인 테크닉과 리듬감을 보유한 어쿠스틱 기타의 거장.',
    imageUrl: 'https://picsum.photos/seed/tommy/600/400'
  },
  {
    id: 'eric-clapton',
    name: 'Eric Clapton',
    style: 'Blues & Rock',
    description: '기타의 신으로 불리는 전설적인 블루스 록 연주자.',
    imageUrl: 'https://picsum.photos/seed/clapton/600/400'
  }
];

export const COURSES: Course[] = [
  {
    id: 'basic',
    title: '입문 레슨',
    target: '기타를 처음 배우는 분',
    description: '기초 코드 잡는 법부터 기본 8비트 리듬까지 차근차근 배웁니다.',
    level: '입문'
  },
  {
    id: 'rhythm',
    title: '리듬 마스터',
    target: '코드 전환은 가능하나 박자가 어려운 분',
    description: '고고, 셔플, 칼립소 등 다양한 스트로크 패턴을 마스터합니다.',
    level: '초급'
  },
  {
    id: 'fingerstyle',
    title: '핑거스타일 코스',
    target: '어쿠스틱 연주곡을 치고 싶은 분',
    description: '퍼커시브, 해머링, 풀링오프 등 고급 핑거스타일 테크닉을 익힙니다.',
    level: '중급'
  },
  {
    id: 'electric',
    title: '기타 집중반',
    target: '락, 블루스 솔로 연주가 목표인 분',
    description: '앰프 활용법, 이펙터 세팅, 스케일 이론 및 솔로 연주를 배웁니다.',
    level: '중급'
  },
  {
    id: 'project',
    title: '곡 완성 프로젝트',
    target: '한 곡을 완벽하게 마스터하고 싶은 분',
    description: '본인이 좋아하는 곡을 선정하여 디테일한 표현력까지 완성합니다.',
    level: '고급'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: '김민준 수강생',
    content: '막연하게 어렵게만 느껴졌던 코드 전환이 한 달 만에 부드러워졌어요! 선생님의 설명이 정말 명쾌합니다.',
    date: '2024.03.15',
    image: 'https://picsum.photos/seed/p1/200/200'
  },
  {
    id: 'r2',
    author: '이서연 수강생',
    content: '핑거스타일 정성하 곡을 연주하는 게 꿈이었는데, 이제 첫 곡을 완주했어요. 체계적인 커리큘럼 덕분입니다.',
    date: '2024.04.10',
    image: 'https://picsum.photos/seed/p2/200/200'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: '초보자가 가장 어려워하는 F코드 쉽게 잡는 팁',
    excerpt: '손가락 힘이 문제가 아닙니다. 각도와 무게 중심이 핵심입니다.',
    date: '2024.05.01',
    category: 'Tip'
  },
  {
    id: 'b2',
    title: '매일 20분 효율적인 연습 플랜 짜기',
    excerpt: '짧은 시간이라도 매일 하는 연습이 실력을 바꿉니다.',
    date: '2024.05.05',
    category: 'Guide'
  }
];
