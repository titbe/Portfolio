"use client";

import AnimatedCounter from "@/components/AnimatedCounter";
import React, { useRef, useState, useEffect } from "react";

const ResumePage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
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
      className="w-full px-6 md:px-20 z-10 flex flex-col justify-center items-center gap-6 py-10 md:py-0 h-full mx-auto"
    >
      <h1 className="text-5xl font-bold z-20 text-[rgb(69,80,91)]">Resume</h1>
      <p className="text-xl text-gray-700 text-center">
        I am a passionate Front-end Developer specialized in building responsive
        and interactive web applications using React, Next.js, and Tailwind CSS.
        I enjoy turning ideas into beautiful, user-friendly interfaces and
        always strive to write clean code that delivers a great user experience.
      </p>
      <div className="grid md:grid-cols-2 gap-5 w-full px-3">
        <div className="">
          {/* Sumary */}
          <h1 className="my-5 text-[rgb(69,80,91)] text-2xl font-bold">
            Sumary
          </h1>

          <div className="border-[rgb(5,99,187)] border-l-2 pl-5">
            <h4 className="text-lg font-semibold text-gray-500 mb-2">
              Phạm Minh Hiếu
            </h4>
            <p className="mb-1 italic">
              A detail-oriented and creative Front-end Developer with a strong
              passion for building responsive, user-centric web applications.
              Proficient in modern technologies like React, Next.js, and
              Tailwind CSS, with a solid understanding of UI/UX principles.
              Committed to writing clean, maintainable code and continuously
              learning to stay up-to-date with the latest trends in web
              development. Strong team player with effective communication and
              problem-solving skills.
            </p>
            <ul className="list-disc ml-5">
              <li>Hanoi</li>
              <li>0355564823</li>
              <li>phamminhhieu01082003@gmail.com</li>
            </ul>
          </div>
          {/* Education */}
          <h1 className="my-5 text-[rgb(69,80,91)] text-2xl font-bold">
            Education
          </h1>
          <div className="border-[rgb(5,99,187)] border-l-2 pl-5">
            <h4 className="text-lg font-semibold text-gray-500 mb-2">
              Electric Power University (EPU)
            </h4>
            <h5 className="text-base font-semibold text-[rgb(69,80,91)] mx-3 my-1">
              2021 - Present
            </h5>
            <p className="mb-1">Faculty of information technology</p>
            <p className="mb-1">GPA: 3.23</p>
          </div>
        </div>

        <div className="">
          <h1 className="my-5 text-[rgb(69,80,91)] text-2xl font-bold">
            Project
          </h1>
          <div className="border-[rgb(5,99,187)] border-l-2 pl-5">
            <h4 className="text-lg font-semibold text-gray-500 mb-2">
              Phạm Minh Hiếu
            </h4>
            <p className="mb-1 italic">
              Innovative and deadline-driven Graphic Designer with 3+ years of
              experience designing and developing user-centered digital/print
              marketing material from initial concept to final, polished
              deliverable.
            </p>
            <ul className="list-disc ml-5">
              <li>Hanoi</li>
              <li>0355564823</li>
              <li>phamminhhieu01082003@gmail.com</li>
            </ul>
          </div>

          <h1 className="my-5 text-[rgb(69,80,91)] text-2xl font-bold uppercase">
            Soft skills
          </h1>
          <div className="border-[rgb(5,99,187)] border-l-2 pl-5">
            {/* HTML */}
            <div className="flex justify-between items-center mb-1">
              <span>Team work</span>
              <AnimatedCounter target={95} isVisible={isVisible} />
            </div>
            <div className="w-full bg-[#ddd] rounded-full mb-4">
              <div className="h-4 w-[95%] bg-[#4CAF50] rounded-full"></div>
            </div>

            {/* Time management
             */}
            <div className="flex justify-between items-center mb-1">
              <span>Time management</span>
              <AnimatedCounter target={85} isVisible={isVisible} />
            </div>
            <div className="w-full bg-[#ddd] rounded-full mb-4">
              <div className="h-4 w-[85%] bg-[#2196F3] rounded-full"></div>
            </div>

            {/* Work under high pressure*/}
            <div className="flex justify-between items-center mb-1">
              <span>Work under high pressure</span>
              <AnimatedCounter target={80} isVisible={isVisible} />
            </div>
            <div className="w-full bg-[#ddd] rounded-full mb-4">
              <div className="h-4 w-[80%] bg-[#f44336] rounded-full"></div>
            </div>

            {/* Arrange work*/}
            <div className="flex justify-between items-center mb-1">
              <span>Arrange work</span>
              <AnimatedCounter target={90} isVisible={isVisible} />
            </div>
            <div className="w-full bg-[#ddd] rounded-full mb-4">
              <div className="h-4 w-[90%] bg-[#808080] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
