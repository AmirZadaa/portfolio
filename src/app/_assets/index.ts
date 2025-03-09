// import { store1, store2, store3, store4, store5 } from "./images";
import { StaticImageData } from 'next/image';

import {
  css, html,bootstrap, nextjs, react, nodjs,  git,tailwindcss,js, TypeScript, shadcn,care1,care2,care3,
  care4,store1,store2,store3,store4,store5,kfc1,kfc2,kfc3,q1,q2,q3,

} from "./images/index";

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
   title: "Doctor Appointment App",
    description: "A frontend-only doctor appointment booking application. The home page displays a list of doctors with a filtering option. Users can click on a doctor to view their available time slots. Upon selecting a time slot, they are redirected to a booking page where they fill out a form and choose a payment method. A success page confirms the appointment.",
    gitHub_repo: "https://github.com/AmirZadaa/DocApp",
    liveLink: "https://amir-healthcare-app.vercel.app/",
    images: [care2, care1, care3,care4],
    stack: ["NextJs", "Tailwind", "Shadcn", "React"]
  },
  {
    title: "Modern eCommerce UI",
     description: "A modern eCommerce store frontend with a homepage featuring a large image carousel, categorized product sections, and product cards. Users can view product details, add items to the cart, and navigate through checkout and cart review pages.",
     gitHub_repo: "https://github.com/AmirZadaa/eCommerceStoreTemplate",
     liveLink: "https://amirzada-store.vercel.app/",
     images: [store1, store2, store3,store4,store5],
     stack: ["NextJs", "Tailwind", "Shadcn"]
   },
   {
    title: "KFC UI clone",
     description: "A fast and responsive KFC UI clone with a sleek design, smooth navigation, and optimized performance. It replicates KFC’s storefront with menu items, store locations, and essential ordering features. ",
     gitHub_repo: "https://github.com/AmirZadaa/foodStore",
     liveLink: "https://food-store-beta.vercel.app/",
     images: [kfc1,kfc2,kfc3],
     stack: ["NextJs", "Tailwind", "Shadcn"]
   },
   {
    title: "Quiz & Food Card App",
    description: "A React-based app featuring an interactive quiz and a food card system where users can add items to their cart.",
    gitHub_repo: "https://github.com/AmirZadaa/QuizApp-cards",
    liveLink: "https://quiz-app-cards.vercel.app/",
    images: [q1, q2, q3],
    stack: ["React", "Bootstrap"]
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