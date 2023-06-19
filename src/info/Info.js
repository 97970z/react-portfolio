import self from '../img/self.png';
import mock1 from '../img/mock1.png';
import mock2 from '../img/mock2.png';
import mock3 from '../img/mock3.png';
import mock4 from '../img/mock4.png';
import mock5 from '../img/mock5.png';
import mock6 from '../img/mock6.png';

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)'];

export const info = {
  firstName: '양',
  lastName: '한준',
  initials: 'JS',
  position: 'Front-End Developer',
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '🌎',
      text: 'live in SEOUL.',
    },
    {
      emoji: '💼',
      text: 'Inha Technical University',
    },
    {
      emoji: '📧',
      text: '980826han@gmail.com',
    },
    {
      emoji: '📰',
      text: 'https://github.com/97970z',
    },
    {
      emoji: '💻',
      text: 'https://kmong.com/gig/411092',
    },
  ],
  socials: [],
  bio: "안녕하세요 '열정적인'개발자 양한준입니다. 프론트엔드 개발자를 꿈꾸며, 개발자로서 역량을 쌓고 있습니다.",
  skills: {
    proficientWith: ['javascript', 'react', 'python', 'html5', 'css3'],
    exposedTo: ['nodejs', 'mongodb', 'github'],
  },
  hobbies: [
    {
      label: 'coding',
      emoji: '💻',
    },
    {
      label: 'sing',
      emoji: '🎤',
    },
    {
      label: 'movie',
      emoji: '🎥',
    },
    {
      label: 'travel',
      emoji: '✈️',
    },
  ],
  portfolio: [
    {
      title: 'Selody - 일정 공유 및 관리 사이트 [진행 중]',
      description:
        '그룹을 만들어 일정을 공유 및 관리하고, 약속을 쉽게 잡는 것을 도와주는 웹 애플리케이션입니다. 그룹을 생성하고 그룹원을 초대하여 일정을 공유하고, 일정을 관리할 수 있습니다. 또한, 그룹원들과 채팅을 할 수 있습니다.',
      live: 'https://github.com/Selody-project',
      source: 'https://github.com/Selody-project',
      image: mock6,
    },
    {
      title: 'LocationPedia - 성지순례 맵 [진행 중]',
      description:
        'Locationpedia는 React 및 Firebase를 사용하여 구축한 웹 사이트입니다. 사용자는 전세계 다양한 위치에 있는 비 종교적 성지순례 장소를 확인할 수 있습니다. (k-pop 뮤비 촬영지, 일본 애니메이션 실제 배경 등) 사용자는 직접 지도를 클릭하여 새 위치를 추가하고, 국가별로 위치를 필터링하여 내 위치 근처에 어떤 장소가 있는지 확인 가능합니다!',
      live: 'https://map-project-12345-da651.firebaseapp.com/',
      source: 'https://github.com/97970z/Locationpedia',
      image: mock5,
    },
    {
      title: 'HoH - 과제 해결 사이트',
      description:
        '이 프로젝트는 누구든지 궁금한 점을 질문하고, 보고, 답변을 제출하고 검토할 수 있는 커뮤니티를 제공합니다. 질문에 포인트를 부여하고, 질문에 가장 적합한 답변을 선택하여 가장 적합한 답변을 표시하고 포인트를 제공합니다. 또한, ChatGPT를 연동하여 모든 질문에 대한 AI 답변이 제공되어, 사용자가 과제를 수행할 때 추가 지원 서비스를 제공합니다.',
      live: 'http://homeworkhub.site/',
      source: 'https://github.com/97970z/hohClient',
      image: mock4,
    },
    // {
    //   title: 'HanTube - 영상 업로드 사이트',
    //   description:
    //     'JavaScript를 배우고 재밌게 공부할 수 있는 방법으로 현재 서비스되는 사이트를 클론하는 것을 선택하였습니다. JavaScript, nodeJS, MongoDB, Webpack, AWS S3 등 다양한 기술을 사용할 기회였습니다. 프론트엔드와 백엔드를 모두 작업해야 했기 때문에 풀스택 개발 기술을 향상시킬 수 있었습니다.',
    //   live: 'https://hantube.fly.dev/',
    //   source: 'https://github.com/97970z/wetube',
    //   image: mock1,
    // },
    // {
    //   title: 'Joom - 소켓통신 채팅 사이트',
    //   description:
    //     'JavaScript + Socket.IO 라이브러리를 사용해서 만든 실시간 채팅 웹사이트입니다. 주요 목표는 사용자 지연 없이 실시간으로 서로 통신할 수 있는 플랫폼을 만드는 것이었습니다. 웹 개발에 주로 사용되는 JavaScript에 대한 기초를 다지기 위함과 Socket.IO 라이브러리를 사용해보기 위함이 주 목적이었습니다.',
    //   live: 'https://socketchat.fly.dev/',
    //   source: 'https://github.com/97970z/JOOM',
    //   image: mock2,
    // },
    {
      title: '크몽 - 프리랜서 경험 & 공부',
      description:
        '크몽 플랫폼에서 프리랜서로 일한 경험이 있어 다양한 개발 기술을 습득하고 경험해 볼 수 있었습니다. 노력을 통해 고객을 위한 다양한 프로젝트와 과제를 완료하고 고객의 요구 사항을 듣고 해결해 나가는 과정과 일정 기한을 두고 해결하는 경험을 쌓을 수 있었습니다. 이러한 경험의 결과로 개발 분야에서 값진 경험을 쌓을 수 있었습니다.',
      live: 'https://kmong.com/gig/411092',
      source: 'https://kmong.com/gig/411092',
      image: mock3,
    },
  ],
};
