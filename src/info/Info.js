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
      text: "97970x@gmail.com",
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
  bio: "안녕하세요! 양한준입니다. 저는 프론트엔드 개발자가 목표입니다. React & TypeScript를 공부 중 입니다. 취업을 위해 꾸준히 준비중 입니다!",
  skills: {
    proficientWith: ["javascript", "typescript", "react", "html5", "css3"],
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
      live: "https://videotubetest.herokuapp.com/",
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
