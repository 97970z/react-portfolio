import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";

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
  bio: "안녕하세요.'열정적인 개발자'양한준입니다. 프론트엔드 개발자로 취업을 준비중 입니다! 잘부탁드립니다~",
  skills: {
    proficientWith: ["javascript", "react", "html5", "css3"],
    exposedTo: ["nodejs", "python"],
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
      title: "HanTube - 영상 업로드 사이트",
      live: "https://hantube.fly.dev/",
      source: "https://github.com/97970z/wetube",
      image: mock1,
    },
    {
      title: "Joom - 소켓통신 채팅 사이트",
      live: "https://github.com/97970z/JOOM",
      source: "https://github.com/97970z/JOOM",
      image: mock2,
    },
    {
      title: "크몽 - 프로랜서 경험 & 공부",
      live: "https://kmong.com/gig/411092",
      source: "https://kmong.com/gig/411092",
      image: mock3,
    },
  ],
};
