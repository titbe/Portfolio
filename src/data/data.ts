import project1 from "../../public/imgs/lms.png";
import project2 from "../../public/imgs/maxius.png";
import project3 from "../../public/imgs/car-showcase.png";

export const profileInfo = [
  { label: "Birthday", value: "01/08/2003" },
  { label: "Location", value: "Tay Ho, Hanoi, Vietnam" },
  { label: "Email", value: "phamminhhieu01082003@gmail.com" },
  { label: "Age", value: "Current year - 2003 => My age" },
  { label: "Website", value: "https://portfolio-hieuhhs-projects.vercel.app" },
];

export const projectsData = [
  {
    img: project1,
    name: "LMS Elearning",
    link: "https://lms-elearning-seven.vercel.app/",
    techStack: [
      "Nextjs",
      "TailwindCSS",
      "Typescript",
      "Shadcn UI",
      "Nodejs",
      "MongoDB",
    ],
  },
  {
    img: project2,
    name: "Maxius",
    link: "https://test-fe-maxius.vercel.app/",
    techStack: ["Nextjs", "TailwindCSS"],
  },
  {
    img: project3,
    name: "Cars Showcase",
    link: "https://cars-showcase-ten-kappa.vercel.app/",
    techStack: ["Nextjs", "TailwindCSS", "Typescript"],
  },
];
