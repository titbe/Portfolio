"use client";

import AnimatedCounter from "@/components/AnimatedCounter";
import SkillProgress from "@/components/SkillProgress";
import { CalendarCheck, Clock, Flame, Users } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

const ResumePage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state when section enters or leaves viewport
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full px-6 md:px-20 z-10 flex flex-col justify-center items-center gap-1 h-full mx-auto"
    >
      <h1 className="text-5xl font-bold text-gray-900 dark:text-sky-300 border-b-4 border-sky-500 p-3 mt-12 md:mt-0">
        Resume
      </h1>

      {/* Soft Skills */}
      <div className="grid md:grid-cols-4 grid-cols-2 w-full mt-5">
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-[rgb(5,99,187)] p-5">
            <Users color="white" />
          </div>
          <span className="font-bold text-4xl text-[#272829CC] dark:text-sky-300">
            <AnimatedCounter endValue={95} isVisible={isVisible} />
          </span>
          <p className="text-gray-700 dark:text-white text-center break-words max-w-[150px]">
            Team work
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-[rgb(5,99,187)] p-5">
            <Clock color="white" />
          </div>
          <span className="font-bold text-4xl text-[#272829CC] dark:text-sky-300">
            <AnimatedCounter endValue={85} isVisible={isVisible} />
          </span>
          <p className="text-gray-700 dark:text-white text-center break-words max-w-[150px]">
            Time management
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-[rgb(5,99,187)] p-5">
            <Flame color="white" />
          </div>
          <span className="font-bold text-4xl text-[#272829CC] dark:text-sky-300">
            <AnimatedCounter endValue={80} isVisible={isVisible} />
          </span>
          <p className="text-gray-700 dark:text-white text-center break-words max-w-[150px]">
            Work under high pressure
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-[rgb(5,99,187)] p-5">
            <CalendarCheck color="white" />
          </div>
          <span className="font-bold text-4xl text-[#272829CC] dark:text-sky-300">
            <AnimatedCounter endValue={90} isVisible={isVisible} />
          </span>
          <p className="text-gray-700 dark:text-white text-center break-words max-w-[150px]">
            Arrange work
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 w-full px-3">
        <div className="">
          {/* Summary */}
          <h1 className="my-5 text-gray-900 dark:text-sky-300 text-2xl font-bold uppercase">
            Skills
          </h1>

          <div className="border-[rgb(5,99,187)] border-l-2 pl-5">
            <p className="text-lg font-bold text-gray-500 mb-1">Frontend</p>
            <p className="italic">
              HTML/CSS/Javascript/Typescript/Tailwind
              CSS/ReactJS/NextJS/Mantine/Responsive
            </p>
            {/* <ul className="list-disc ml-5">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>Tailwind CSS</li>
              <li>ReactJS</li>
            </ul> */}

            <p className="text-lg font-bold text-gray-500 mt-4 mb-1">Backend</p>
            <p className="italic">
              NodeJS (Express)/Restful API/Cloud (Firebase, Google)/Database
              (SQL Server , MongoDB)
            </p>

            <p className="text-lg font-bold text-gray-500 mt-4">Other</p>
            <p className="italic">
              Git/GitHub/Deployment (Vercel, Render)/Basic English
            </p>
          </div>

          <h1 className="my-5 text-gray-900 dark:text-sky-300 text-2xl font-bold uppercase">
            Skill proficiency level
          </h1>
          <div className="border-[rgb(5,99,187)] border-l-2 pl-5">
            <SkillProgress
              label="Team work"
              percentage={95}
              color="rgb(5,99,187)"
              isVisible={isVisible}
            />
            <SkillProgress
              label="Time management"
              percentage={85}
              color="rgb(5,99,187)"
              isVisible={isVisible}
            />
            <SkillProgress
              label="Work under high pressure"
              percentage={80}
              color="rgb(5,99,187)"
              isVisible={isVisible}
            />
            <SkillProgress
              label="Arrange work"
              percentage={90}
              color="rgb(5,99,187)"
              isVisible={isVisible}
            />
          </div>
        </div>

        <div className="">
          <h1 className="my-5 text-gray-900 dark:text-sky-300 text-2xl font-bold uppercase">
            Work Experience
          </h1>
          <div className="border-[rgb(5,99,187)] border-l-2 pl-5">
            <p className="font-bold text-gray-500 mb-2">
              MCI CONSULTING AND ANALYTICS JOINT STOCK COMPANY
            </p>
            <p className="text-base italic font-semibold text-gray-900 dark:text-sky-300 mx-3 my-1">
              09/2024 - 12/2024
            </p>

            <p className="mb-1">Intern Frontend-End Developer</p>
            <ul className="list-disc ml-5">
              <li>
                Build high-speed, user-friendly, optimized SEO, and responsive
                websites with Next.js, Tailwindcss, ...
              </li>
              <li>
                The project uses a mono-repo structure to create consistency
                between Frontend and Backend
              </li>
              <li>Use Framer to design interfaces.</li>
              <li>
                Experience working in an Agile/Scrum environment, collaborating
                closely with team members using tools like Plane
              </li>
            </ul>
          </div>

          {/* Education */}
          <h1 className="my-5 text-gray-900 dark:text-sky-300 text-2xl font-bold uppercase">
            Education
          </h1>
          <div className="border-[rgb(5,99,187)] border-l-2 pl-5">
            <p className="text-lg font-bold text-gray-500 mb-2">
              Electric Power University (EPU)
            </p>
            <p className="text-base italic font-semibold text-gray-900 dark:text-sky-300 mx-3 my-1">
              2021 - Present
            </p>
            <p className="mb-1">Faculty of information technology</p>
            <p className="mb-1">GPA: 3.27</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
