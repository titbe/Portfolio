import { Card } from "@/components/Card";
import { projectsData } from "@/data/data";
import React from "react";

export const ProjectPage = () => {
  return (
    <>
      <div className="absolute inset-0 bg-[#1A2A59] z-0"></div>

      <div className="relative z-10 container mx-auto flex flex-col items-center gap-6 h-full pl-12">
        <div className="grid grid-cols-3 gap-5 mt-10">
          {projectsData.map((item, index) => (
            <Card
              key={index}
              img={item.img}
              name={item.name}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};
