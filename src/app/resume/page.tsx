"use client";

import AnimatedCounter from "@/components/AnimatedCounter";
import SkillProgress from "@/components/SkillProgress";
import { Smile } from "lucide-react";
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
      <h1 className="text-5xl font-bold text-[rgb(69,80,91)] border-b-4 border-sky-500 p-3 mt-12 md:mt-0">
        Resume
      </h1>
      <p className="text-xl text-gray-700 text-center">
        A passionate and detail-oriented Front-end Developer specializing in
        building responsive, user-friendly web applications using React,
        Next.js, and Tailwind CSS. With a strong foundation in UI/UX principles
        and a commitment to clean, maintainable code, I enjoy transforming ideas
        into intuitive and visually appealing interfaces. I continuously seek to
        improve my skills, stay updated with modern web technologies, and
        contribute effectively to collaborative development environments.
      </p>

      <div className="grid md:grid-cols-2 gap-5 w-full px-3">
        <div className="">
          {/* Summary */}
          <h1 className="my-5 text-[rgb(69,80,91)] text-2xl font-bold uppercase">
            Skills
          </h1>

          <div className="border-[rgb(5,99,187)] border-l-2 pl-5">
            <h4 className="text-lg font-bold text-gray-500 mb-1">Frontend</h4>
            <p className="italic">
              HTML/CSS/Javascript/Typescript/Tailwind CSS/ReactJS
            </p>
            {/* <ul className="list-disc ml-5">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>Tailwind CSS</li>
              <li>ReactJS</li>
            </ul> */}

            <h4 className="text-lg font-bold text-gray-500 mt-4 mb-1">
              Backend
            </h4>
            <p className="italic">
              NodeJS (Express)/Restful API/Cloud (Firebase, Google)/Database
              (SQL Server , MongoDB)
            </p>

            <h4 className="text-lg font-bold text-gray-500 mt-4">Other</h4>
            <p className="italic">Git/GitHub/Basic English</p>
          </div>

          <h1 className="my-5 text-[rgb(69,80,91)] text-2xl font-bold uppercase">
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
          </div>
        </div>

        <div className="">
          <h1 className="my-5 text-[rgb(69,80,91)] text-2xl font-bold uppercase">
            Work Experience
          </h1>
          <div className="border-[rgb(5,99,187)] border-l-2 pl-5">
            <h4 className="font-bold text-gray-500 mb-2">
              MCI CONSULTING AND ANALYTICS JOINT STOCK COMPANY
            </h4>
            <h5 className="text-base italic font-semibold text-[rgb(69,80,91)] mx-3 my-1">
              09/2024 - 12/2024
            </h5>

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
          <h1 className="my-5 text-[rgb(69,80,91)] text-2xl font-bold uppercase">
            Education
          </h1>
          <div className="border-[rgb(5,99,187)] border-l-2 pl-5">
            <h4 className="text-lg font-bold text-gray-500 mb-2">
              Electric Power University (EPU)
            </h4>
            <h5 className="text-base italic font-semibold text-[rgb(69,80,91)] mx-3 my-1">
              2021 - Present
            </h5>
            <p className="mb-1">Faculty of information technology</p>
            <p className="mb-1">GPA: 3.23</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 w-full">
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-[rgb(5,99,187)] p-5">
            <Smile color="white" />
          </div>
          <span className="font-bold text-4xl text-[#272829CC]">
            <AnimatedCounter endValue={95} isVisible={isVisible} />
          </span>
          <p className="text-[#27282980] ">Team work</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-[rgb(5,99,187)] p-5">
            <Smile color="white" />
          </div>
          <span className="font-bold text-4xl text-[#272829CC]">
            <AnimatedCounter endValue={85} isVisible={isVisible} />
          </span>
          <p className="text-[#27282980] ">Time management</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-[rgb(5,99,187)] p-5">
            <Smile color="white" />
          </div>
          <span className="font-bold text-4xl text-[#272829CC]">
            <AnimatedCounter endValue={80} isVisible={isVisible} />
          </span>
          <p className="text-[#27282980] ">Work under high pressure</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-[rgb(5,99,187)] p-5">
            <Smile color="white" />
          </div>
          <span className="font-bold text-4xl text-[#272829CC]">
            <AnimatedCounter endValue={90} isVisible={isVisible} />
          </span>
          <p className="text-[#27282980] ">Arrange work</p>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
