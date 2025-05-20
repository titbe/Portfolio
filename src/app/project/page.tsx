import { Card } from "@/components/Card";
import { projectsData } from "@/data/data";
import React from "react";

const ProjectPage = () => {
  return (
    <>
      <div className="absolute inset-0 bg-[#1A2A59] z-0"></div>

      <div className="relative container mx-auto flex flex-col items-center gap-6 h-full px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-full">
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
    </>
  );
};

export default ProjectPage;
