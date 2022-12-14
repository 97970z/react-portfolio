import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "μ",
  lastName: "νμ€",
  initials: "JS",
  position: "Front-End Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "π",
      text: "live in SEOUL.",
    },
    {
      emoji: "πΌ",
      text: "Inha Technical University",
    },
    {
      emoji: "π§",
      text: "980826han@gmail.com",
    },
    {
      emoji: "π°",
      text: "https://github.com/97970z",
    },
    {
      emoji: "π»",
      text: "https://kmong.com/gig/411092",
    },
  ],
  socials: [],
  bio: "μλνμΈμ 'μ΄μ μ μΈ'κ°λ°μ μνμ€μλλ€. νμ€ν κ°λ°μλ₯Ό κΏκΎΈλ©°, κ°λ°μλ‘μ μ­λμ μκ³  μμ΅λλ€.",
  skills: {
    proficientWith: ["javascript", "react", "python", "html5", "css3"],
    exposedTo: ["nodejs", "django"],
  },
  hobbies: [
    {
      label: "coding",
      emoji: "π»",
    },
    {
      label: "sing",
      emoji: "π€",
    },
    {
      label: "movie",
      emoji: "π₯",
    },
    {
      label: "travel",
      emoji: "βοΈ",
    },
  ],
  portfolio: [
    {
      title: "HanTube - μμ μλ‘λ μ¬μ΄νΈ",
      live: "https://hantube.fly.dev/",
      source: "https://github.com/97970z/wetube",
      image: mock1,
    },
    {
      title: "Joom - μμΌν΅μ  μ±ν μ¬μ΄νΈ",
      live: "https://socketchat.fly.dev/",
      source: "https://github.com/97970z/JOOM",
      image: mock2,
    },
    {
      title: "ν¬λͺ½ - νλ¦¬λμ κ²½ν & κ³΅λΆ",
      live: "https://kmong.com/gig/411092",
      source: "https://kmong.com/gig/411092",
      image: mock3,
    },
  ],
};
