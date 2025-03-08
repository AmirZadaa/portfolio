import { calc, calc2, amir2 } from "../images";
import { StaticImageData } from 'next/image';

import {
  css,
  html,
  bootstrap,
  nextjs,
  react,
  nodjs,
  git,
  tailwindcss,
  js,
  TypeScript,
  mongodb, shadcn
} from "../images";

interface headerLinks {
  label: string;
  href: string;
}

export const headerLinks: headerLinks[] = [
  {
    label: "Home",
    href: "/#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },


  {
    label: "Resume",
    href: "#resume",
  },

  {
    label: "Contact",
    href: "#contact",
  },

]





type projectsData = {
  title: string,
  description: string,
  gitHub_repo: string,
  liveLink: string,
  images: StaticImageData[],
  stack: string[],

}[]
export const projectsData: projectsData = [
  {
    title: "Calculator",
    description: "this is respoves in websites lerljlqwf  aopfjoqowkeroqwje  askfoqjwoerjoqwkeodrjqwejrd  wpjkeroqwkoejoqwjefoqjwjero pwkprjoqwjerojqwoejojo  qpjroqjwojokdpq   q  ojqdkoqjoj",
    gitHub_repo: "liks",
    liveLink: "https://vercel.com/amir-zadas-projects/simple-calculator-reactjs",
    images: [calc, calc2, amir2],
    stack: ["NextJs", "Tailwind", "Shadcn", "React"]
  }
]

type skills = {
  title: string,
  img: StaticImageData

}[]

export const skills: skills = [
  {
    title: "Next JS",
    img: nextjs
  },
  {
    title: "React",
    img: react
  },
  {
    title: "Tailwind",
    img: tailwindcss
  },
  {
    title: "Shadcn",
    img: shadcn
  },
  {
    title: "Git",
    img: git
  },
  {
    title: "MongoDB",
    img: mongodb
  },
  {
    title: "Node JS",
    img: nodjs
  },
  {
    title: "Typecript",
    img: TypeScript
  },
  {
    title: "Javascript",
    img: js
  },
  {
    title: "HTML",
    img: html
  },
  {
    title: "CSS",
    img: css
  },
  {
    title: "Bootstrap",
    img: bootstrap
  }

]