import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "양",
  lastName: "한준",
  initials: "JS",
  position: "Front-End Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "🌎",
      text: "live in SEOUL.",
    },
    {
      emoji: "💼",
      text: "Inha Technical University",
    },
    {
      emoji: "📧",
      text: "980826han@gmail.com",
    },
    {
      emoji: "📰",
      text: "https://github.com/97970z",
    },
    {
      emoji: "💻",
      text: "https://kmong.com/gig/411092",
    },
  ],
  socials: [],
  bio: "안녕하세요 '열정적인'개발자 양한준입니다. 풀스택 개발자를 꿈꾸며, 개발자로서 역량을 쌓고 있습니다.",
  skills: {
    proficientWith: ["javascript", "react", "python", "html5", "css3"],
    exposedTo: ["nodejs", "mongodb", "github"],
  },
  hobbies: [
    {
      label: "coding",
      emoji: "💻",
    },
    {
      label: "sing",
      emoji: "🎤",
    },
    {
      label: "movie",
      emoji: "🎥",
    },
    {
      label: "travel",
      emoji: "✈️",
    },
  ],
  portfolio: [
    {
      title: "HoH - 과제 해결 사이트",
      live: "https://helper-of-homework.vercel.app/",
      source: "https://github.com/97970z/HoH",
      image: mock4,
    },
    {
      title: "HanTube - 영상 업로드 사이트",
      live: "https://hantube.fly.dev/",
      source: "https://github.com/97970z/wetube",
      image: mock1,
    },
    {
      title: "Joom - 소켓통신 채팅 사이트",
      live: "https://socketchat.fly.dev/",
      source: "https://github.com/97970z/JOOM",
      image: mock2,
    },
    {
      title: "크몽 - 프리랜서 경험 & 공부",
      live: "https://kmong.com/gig/411092",
      source: "https://kmong.com/gig/411092",
      image: mock3,
    },
  ],
};
