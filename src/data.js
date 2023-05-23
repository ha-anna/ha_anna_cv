const data = [
  {
    cv: 'Download CV',
    cvFile: 'files/HA_ANNA_CV_ENG.pdf',
    name: 'Ha Anna',
    position: 'Front-end Developer',
    location: 'Seoul, South Korea',
    webpage: 'haanna.com',
    email: 'anna@haanna.com',
    phone: '+82 010-2156-5345',
    about:
      'Creative, meticulous and highly motivated front-end developer with a goal to make engaging and practical user experiences. Very passionate about accessibility, aesthetics and UI.',
    skills: {
      id: 'skills',
      list: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Next.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'SQL',
        'PostgreSQL',
        'D3.js',
        'JQuery',
        'Sass',
        'Responsive Design',
        'UX/UI',
        'Illustrator',
      ],
    },
    projects: [
      {
        id: 'projects',
        title: "Photographer's Portfolio page",
        url: 'https://portfolio-hyj.vercel.app/',
        techStack: ['React', 'CSS', 'React Router', 'NPM', 'SEO'],
        description:
          "Designed and built an artist portfolio website using React, CSS, and JavaScript. It's mobile-friendly and visually appealing with optimized image loading, image carousel, and masonry layout.",
      },
      {
        title: 'Quizzical',
        url: 'https://react-quizzical.vercel.app/',
        techStack: ['React', 'CSS', 'API'],
        description:
          'Quizzical, is a single-page application that utilizes the Open Trivia Database API to fetch and display ten questions, with various categories and difficulty levels to choose from. Upon completion, the quiz provides users with their score, displays correct and incorrect answers, and offers a fun way to test knowledge.',
      },
    ],
    experience: [
      {
        id: 'experience',
        name: "Chingu's Voyage 44",
        position: 'Developer, UX/UI Designer',
        start: 'May 2023',
        end: 'Now',
        responsibilities: [
          'Collaborated with other developers to create "Artemis", a crowd-sourced MERN web application aimed at assisting stray animals in reducing their number on the streets. ',
        ],
      },
      {
        name: 'Front-end Developer (freelancer)',
        position: 'Developer',
        start: 'December 2022',
        end: 'Now',
        responsibilities: [
          'Building webpages for private clients.',
          'Managing workflow, keeping in touch with clients',
        ],
      },
      {
        name: 'Itransition',
        position: 'Intern Developer',
        start: 'September 2022',
        end: 'November 2022',
        responsibilities: [
          'Building a full-stack web app similar to Pinterest.',
          'Attending lectures and meetings, learning to use new technologies such as mySQL, Node.js, Express.',
        ],
      },
      {
        name: "Chingu's Voyage 40",
        position: 'Developer, UI Designer',
        start: 'August 2022',
        end: 'October 2022',
        responsibilities: [
          'Worked in a team with other developers and built an app called [Note](me).',
          'Responsible for UX/UI, wireframes and design, and coding (JS, HTML, CSS).',
        ],
      },
      {
        name: 'Studio Siseon',
        position: 'Manager',
        start: 'January 2018',
        end: 'October 2020',
        responsibilities: [
          'Acted as senior liaison between Studio Siseon and the client, always ensuring that all contract requirements were met with complete customer satisfaction.',
          'Prepared materials for documentary interviews and provided translation services for foreign film crews.',
          'One of my key accomplishments is working as a translator (English to Polish) of a video “Peace and Prosperity on the Korean Peninsula – The Audacious Journey” for the Embassy of the Republic of Korea in Poland.',
        ],
      },
    ],
    education: [
      {
        id: 'education',
        name: 'Scrimba',
        area: 'The Frontend Developer Career Path',
        start: 'Mar 2022',
        end: 'Nov 2022',
      },
      {
        name: 'Sogang University',
        area: 'Korean Language Course',
        start: 'March 2021',
        end: 'November 2021',
      },
      {
        name: 'University Of Warsaw',
        area: "Master's Degree in English Studies",
        start: 'October 2018',
        end: 'September 2020',
      },
      {
        name: 'SWPS University',
        area: 'Bachelor’s Degree in English Studies',
        start: 'October 2015',
        end: ' July 2018',
      },
    ],
    certificates: [
      {
        id: 'Certificates',
        name: 'Data Visualization',
        description: 'D3.js, API, JSON',
        institution: 'FreeCodeCamp',
        date: 'February 2023',
        url: 'https://tinyurl.com/hafdv',
      },
      {
        name: 'Back End Development and APIs',
        description: 'Node.js, MongoDB',
        institution: 'FreeCodeCamp',
        date: 'January 2023',
        url: 'https://tinyurl.com/habapi',
      },
      {
        name: 'The Frontend Developer Career Path',
        description: 'HTML, CSS, Git, JavaScript, React, UI design',
        institution: 'Scrimba',
        date: 'November 2022',
        url: 'https://tinyurl.com/hascfe',
      },
      {
        name: 'JavaScript Deep Dive Bootcamp',
        description: 'Essential JS concepts, ES6, Classes, DOM, Async JS',
        institution: 'Scrimba',
        date: 'April 2022 - May 2022',
        url: 'https://tinyurl.com/hasjs',
      },
      {
        name: 'Responsive Web Design',
        description:
          'HTML, HTML5, CSS, Visual Design, Accessibility, Responsive Web Design Principles, CSS Grid, CSS Flexbox',
        institution: 'FreeCodeCamp',
        date: 'May 2021 - June 2021',
        url: 'https://tinyurl.com/harwd',
      },
    ],
    languages: [
      {
        id: 'languages',
        lang: 'Polish',
        level: 'Native proficiency',
      },
      {
        lang: 'English',
        level: 'Full professional proficiency',
      },
      {
        lang: 'Korean',
        level: 'Limited working proficiency',
      },
    ],
    sns: [
      {
        id: 'social media',
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/ha-anna/',
        icon: 'linkedin.png',
      },
      {
        name: 'Github',
        link: 'https://github.com/ha-anna',
        icon: 'github.png',
      },
      {
        name: 'Codepen',
        link: 'https://codepen.io/haanna',
        icon: 'codepen.png',
      },
    ],
    // "clause": "I consent to the processing of my personal data for the purposes necessary for implementation of this process and future recruitment (in accordance with the Act of May 10, 2018 on the protection of personal data (Journal of Laws of 2018, item 1000) and in accordance with the Regulation of the European Parliament and of the Council (EU) 2016/679 of April 27, 2016 on the protection of individuals with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46 / EC (GDPR))."
  },
  {
    cv: '이력서 다운로드',
    cvFile: 'files/HA_ANNA_CV_KR.pdf',
    name: '하안나',
    position: '프론트엔드 개발자',
    location: '서울, 대한민국',
    webpage: 'haanna.com',
    email: 'anna@haanna.com',
    phone: '+82 010-2156-5345',
    about:
      '일에 동기가 확실하고 창의적이며 매사에 꼼꼼한 프론트앤드 개발자입니다. UI, 미학적인 디자인, 개방된 접근성을 중심으로 실용적인 사용자 경험을 추구하고자 합니다.',
    skills: {
      id: '기술',
      list: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Next.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'SQL',
        'PostgreSQL',
        'D3.js',
        'JQuery',
        'Sass',
        'Responsive Design',
        'UX/UI',
        'Illustrator',
      ],
    },
    projects: [
      {
        id: '프로젝트',
        title: '사진작가의 포트폴리오 페이지',
        url: 'https://portfolio-hyj.vercel.app/',
        techStack: ['React', 'CSS', 'React Router', 'NPM', 'SEO'],
        description:
          'React, CSS와 JavaScript를 사용하여 예술가 포트폴리오 웹사이트를 디자인하고 구축했습니다. 모바일 친화적이며 이미지 로딩, 이미지 캐러셀 및 메이슨리 레이아웃이 최적화되어 시각적으로 매력적입니다.',
      },
      {
        title: 'Quizzical',
        url: 'https://react-quizzical.vercel.app/',
        techStack: ['CSS', 'React'],
        description:
          '‘Quizzical은 오픈트라비아 데이터베이스 API를 이용하여 사지선다형 퀴즈를 제공하는 어플리케이션입니다. 사용자는 일반상식, 연예, 과학, 동물 등 다양한 분야에서 질문과 4가지 단계의 난이도를 선택할 수 있습니다. 퀴즈를 풀고 나면 답변이 기록되어 정답과 오답이 보이며, 사용자는 최종점수를 확인할 수 있습니다.',
      },
    ],
    experience: [
      {
        id: '경력사항',
        name: "Chingu's Voyage 44",
        position: '개발자, UX/UI 디자이너',
        start: '5월 2023',
        end: '지금',
        responsibilities: [
          'Collaborated with other developers to create "Artemis", a crowd-sourced MERN web application aimed at assisting stray animals in reducing their number on the streets. ',
        ],
      },
      {
        name: '프론트엔드 개발자 (프리랜서)',
        position: '개발자',
        start: '12월 2022',
        end: '지금',
        responsibilities: [
          'Building webpages for private clients.',
          'Managing workflow, keeping in touch with clients',
        ],
      },
      {
        name: 'Itransition',
        position: '인턴 개발자',
        start: '9월 2022',
        end: '11월 2022',
        responsibilities: [
          'Building a full-stack web app similar to Pinterest.',
          'Attending lectures and meetings, learning to use new technologies such as mySQL, Node.js, Express.',
        ],
      },
      {
        name: "Chingu's Voyage 40",
        position: '개발자, UX/UI 디자이너',
        start: '8월 2022',
        end: '10월 2022',
        responsibilities: [
          'Worked in a team with other developers and built an app called [Note](me).',
          'Responsible for UX/UI, wireframes and design, and coding (JS, HTML, CSS).',
        ],
      },
      {
        name: 'Studio Siseon',
        position: '메니저',
        start: '1월 2018',
        end: '10월 2020',
        responsibilities: [
          'Studio Siseon은 폴란드 바르샤바에 위치한 비주얼아트 프로덕션 및 필름 서비스 에이전시입니다. 유럽에 진출한 한국기관을 대상으로 브랜디드 콘텐츠를 제작합니다. 프로젝트 매니저로서 클라이언트와 커뮤니케이션 업무, 프로젝트 운영 업무를 맡았으며 한-영, 한-폴 번역을 진행하기도 하였습니다.',
          '대표적으로 주폴란드 한국대사관의 <Peace and Prosperity on the Korean Peninsula> 영상에 한/영-폴 번역을 맡았습니다.',
        ],
      },
    ],
    education: [
      {
        id: '학력사항',
        name: '스크림바 (Scrimba)',
        area: '프론트엔드 개발자 부트캠프',
        start: '3월 2022',
        end: '지금',
      },
      {
        name: '서강대학교',
        area: '한국어교육',
        start: '3월 2021',
        end: '11월 2021',
      },
      {
        name: '바르샤바대학원',
        area: '영어학석사',
        start: '10월 2018',
        end: '9월 2020',
      },
      {
        name: 'SWPS대학교',
        area: '영어학학사',
        start: '10월 2015',
        end: ' 7월 2018',
      },
    ],
    certificates: [
      {
        id: '자격증',
        name: '데이터 시각화 (Data Visualization)',
        description: 'D3.js, API, JSON',
        institution: '프리코드캠프 (freeCodeCamp)',
        date: '2월 2023',
        url: 'https://tinyurl.com/hafdv',
      },
      {
        name: '백엔드 개발 및 API (Back End Development and APIs)',
        description: 'Node.js, MongoDB',
        institution: '프리코드캠프 (freeCodeCamp)',
        date: '1월 2023',
        url: 'https://tinyurl.com/habapi',
      },
      {
        name: '프런트엔드 개발자의 진로 (The Frontend Developer Career Path)',
        description: 'HTML, CSS, Git, JavaScript, React, UI design',
        institution: '스크림바 (Scrimba)',
        date: '11월 2022',
        url: 'https://tinyurl.com/hascfe',
      },
      {
        name: '자바 스크립트 심화코스 (JAVASCRIPT DEEP DIVE BOOTCAMP)',
        description: 'Essential JS concepts, ES6, Classes, DOM, Async JS',
        institution: '스크림바 (Scrimba)',
        date: '4월 2022 - 5월 2022',
        url: 'https://tinyurl.com/hasjs',
      },
      {
        name: '반응형 웹 디자인 (RESPONSIVE WEB DESIGN)',
        description:
          'HTML, HTML5, CSS, Visual Design, Accessibility, Responsive Web Design Principles, CSS Grid, CSS Flexbox',
        institution: '프리코드캠프 (freeCodeCamp)',
        date: '5월 2021 - 6월 2021',
        url: 'https://tinyurl.com/harwd',
      },
    ],
    languages: [
      {
        id: '외국어',
        lang: '폴란드어',
        level: '모국어',
      },
      {
        lang: '영어',
        level: '고급',
      },
      {
        lang: '한국어',
        level: '중급',
      },
    ],
    sns: [
      {
        id: '소셜 미디어',
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/ha-anna/',
        icon: 'linkedin.png',
      },
      {
        name: 'Github',
        link: 'https://github.com/ha-anna',
        icon: 'github.png',
      },
      {
        name: 'Codepen',
        link: 'https://codepen.io/haanna',
        icon: 'codepen.png',
      },
    ],
    clause: '',
  },
  {
    cv: 'Pobierz CV',
    cvFile: 'files/HA_ANNA_CV_PL.pdf',
    name: 'Ha Anna',
    position: 'Front-end Developer',
    location: 'Seul, Korea Południowa',
    webpage: 'haanna.com',
    email: 'anna@haanna.com',
    phone: '',
    about:
      'Jestem frontend developerem ze znajomością UI/UX i umiejętnościami w grafice komputerowej. Tworzę strony internetowe, które są unikalne i atrakcyjne wizualnie, spełniając jednocześnie wymagania responsywnego projektowania i dostępności.',
    skills: {
      id: 'UMIEJĘTNOŚCI',
      list: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Next.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'SQL',
        'PostgreSQL',
        'D3.js',
        'JQuery',
        'Sass',
        'Responsive Design',
        'UX/UI',
        'Illustrator',
      ],
    },
    projects: [
      {
        id: 'projects',
        title: 'Portfolio Fotografa',
        url: 'https://portfolio-hyj.vercel.app/',
        techStack: ['React', 'CSS', 'React Router', 'NPM', 'SEO'],
        description:
          'Stworzyłam stronę internetową na zlecenie, której celem było zapewnienie łatwego dostępu do wszystkich zdjęć i informacji o fotografie. Zdjęcia zostały zoptymalizowane przy użyciu narzędzia mozjpeg, aby zapewnić ich jak najlepszą jakość i skrócić czas ładowania.',
      },
      {
        title: 'Quizzical',
        url: 'https://react-quizzical.vercel.app/',
        techStack: ['React', 'CSS', 'API'],
        description:
          'Quizzical to aplikacja SPA z Open Trivia Database API, pozwalająca na krótką grę w quiz w wybranej dziedzinie i poziomie trudności. Generowane są pytania, a użytkownik wybiera jedną z czterech opcji. Po zakończeniu quizu, użytkownik otrzymuje informację o błędach, poprawnych odpowiedziach i zdobytych punktach.',
      },
    ],
    experience: [
      {
        id: 'Doświadczenie zawodowe',
        name: "Chingu's Voyage 44",
        position: 'Developer, UX/UI Designer',
        start: 'Maj 2023',
        end: 'Obecnie',
        responsibilities: [
          'Collaborated with other developers to create "Artemis", a crowd-sourced MERN web application aimed at assisting stray animals in reducing their number on the streets. ',
        ],
      },
      {
        name: 'Front-end Developer (freelancer)',
        position: 'Developer',
        start: 'Grudzień 2022',
        end: 'Obecnie',
        responsibilities: [
          'Tworzenie projektów wg. wymogów klienta.',
          'Organizacja pracy, kontakt z klientem.',
        ],
      },
      {
        name: 'Itransition',
        position: 'Intern Developer',
        start: 'Wrzesień 2022',
        end: 'Listopad 2022',
        responsibilities: [
          'Tworzenie strony internetowej (MERN) podobnej do Pinterest.',
          'Nauka pracy w nowych technologiach (MySQL, Node.js, Express), uczestniczenie w wykładach i spotkaniach.',
        ],
      },
      {
        name: "Chingu's Voyage 40",
        position: 'Developer, UX/UI Designer',
        start: 'Sierpień 2022',
        end: 'Październik 2022',
        responsibilities: [
          'Praca w zespole z innymi developerami w celu stworzenia strony [Note](me).',
          "Byłam odpowiedzialna za UX/UI, wireframe'y, design, i pisanie kodu (JS, HTML, CSS).",
        ],
      },
      {
        name: 'Studio Siseon',
        position: 'Manager',
        start: 'Styczeń 2018',
        end: 'Październik 2020',
        responsibilities: [
          'Nadzorowałam prace administracyjno-biurowe oraz byłam odpowiedzialna za komunikację pomiędzy Studiem a klientami.',
          'Sprawowałam rolę tłumacza ustnego i pisemnego oraz zajmowałam się wyszukiwaniem informacji na temat Polski i Europy na potrzeby produkcji.',
        ],
      },
    ],
    education: [
      {
        id: 'Wykształcenie',
        name: 'Scrimba',
        area: 'The Frontend Developer Career Path',
        start: 'Marzec 2022',
        end: 'Listopad 2022',
      },
      {
        name: 'Uniwersytet Sogang',
        area: 'Kurs Języka Koreańskiego',
        start: 'Marzec 2021',
        end: 'Listopad 2021',
      },
      {
        name: 'Uniwersytet Warszawski',
        area: 'Filologia angielska (magisterka)',
        start: 'Październik 2018',
        end: 'Wrzesień 2020',
      },
      {
        name: 'Uniwersytet SWPS',
        area: 'Filologia angielska (licencjat)',
        start: 'Październik 2015',
        end: 'Lipiec 2018',
      },
    ],
    certificates: [
      {
        id: 'Certyfikaty',
        name: 'Data Visualization',
        description: 'D3.js, API, JSON',
        institution: 'FreeCodeCamp',
        date: 'Luty 2023',
        url: 'https://tinyurl.com/hafdv',
      },
      {
        name: 'Back End Development and APIs',
        description: 'Node.js, MongoDB',
        institution: 'FreeCodeCamp',
        date: 'Styczeń 2023',
        url: 'https://tinyurl.com/habapi',
      },
      {
        name: 'The Frontend Developer Career Path',
        description: 'HTML, CSS, Git, JavaScript, React, UI design',
        institution: 'Scrimba',
        date: 'Listopad 2022',
        url: 'https://tinyurl.com/hascfe',
      },
      {
        name: 'JavaScript Deep Dive Bootcamp',
        description: 'Essential JS concepts, ES6, Classes, DOM, Async JS',
        institution: 'Scrimba',
        date: 'Kwiecień 2022 - Maj 2022',
        url: 'https://tinyurl.com/hasjs',
      },
      {
        name: 'Responsive Web Design',
        description:
          'HTML, HTML5, CSS, Visual Design, Accessibility, Responsive Web Design Principles, CSS Grid, CSS Flexbox',
        institution: 'FreeCodeCamp',
        date: 'Maj 2021 - Czerwiec 2021',
        url: 'https://tinyurl.com/harwd',
      },
    ],
    languages: [
      {
        id: 'języki',
        lang: 'Polski',
        level: 'Ojczysty',
      },
      {
        lang: 'Angielski',
        level: 'Zaawansowany',
      },
      {
        lang: 'Koreański',
        level: 'Średniozaawansowany',
      },
    ],
    sns: [
      {
        id: 'social media',
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/ha-anna/',
        icon: 'linkedin.png',
      },
      {
        name: 'Github',
        link: 'https://github.com/ha-anna',
        icon: 'github.png',
      },
      {
        name: 'Codepen',
        link: 'https://codepen.io/haanna',
        icon: 'codepen.png',
      },
    ],
    clause:
      'Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).',
  },
];

export default data;
