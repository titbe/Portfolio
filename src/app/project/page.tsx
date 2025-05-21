import { Card } from "@/components/Card";
import { projectsData } from "@/data/data";
import useInView from "@/hooks/useInView";
import React from "react";

const ProjectPage = () => {
  const [projectRef, isProjectInView] = useInView();

  return (
    <>
      <div className="absolute inset-0 z-0 bg-[#1A2A59]"></div>
      <div className="relative z-10 container mx-auto flex flex-col items-center gap-3 h-full px-5">
        <h1 className="relative text-5xl font-bold text-[rgb(69,80,91)] dark:text-sky-500 border-b-4 border-sky-500 p-3 mt-12 md:mt-0">
          Project
        </h1>
        <div className="relative container mx-auto flex flex-col items-center gap-6 h-full px-10">
          <div
            ref={projectRef}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-full
            ${isProjectInView ? "animate-fade-in-up" : "opacity-0"}
            `}
          >
            {projectsData.map((item, index) => (
              <Card
                key={index}
                img={item.img}
                name={item.name}
                link={item.link}
                techStack={item.techStack}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
