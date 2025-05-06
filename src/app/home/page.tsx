import SidebarMenu from "@/components/SidebarMenu";
import Typewriter from "@/components/Typewriter";
import { Facebook, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";
import hanoiBackground from "../../../public/imgs/hanoi-background.jpg";

const HomePage = () => {
  return (
    <>
      <Image
        src={hanoiBackground}
        alt="Hanoi Background"
        className="object-cover w-full h-full"
        priority
      />

      <div className="absolute inset-0 bg-slate-100/40"></div>

      <SidebarMenu />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-20 text-right z-10 flex flex-col items-end gap-2">
        <h1 className="w-full text-7xl font-bold z-20 text-[rgb(69,80,91)]">
          Pham Minh Hieu
        </h1>
        <Typewriter
          texts={["Hiếu", "a Web developer", "Fullstack Developer"]}
          speed={100}
        />
        <div className="flex space-x-6 justify-end">
          <a
            href="https://www.facebook.com/pham.minh.hieu.677056"
            target="_blank"
          >
            <Facebook className="hover:text-[#0866FF] hover:scale-150 transition-all duration-150" />
          </a>
          <a
            href="https://www.linkedin.com/in/minh-hi%E1%BA%BFu-ph%E1%BA%A1m-453602327/"
            target="_blank"
          >
            <Linkedin className="hover:text-[#0A66C2] hover:scale-150 transition-all duration-150" />
          </a>
          <a href="https://github.com/titbe" target="_blank">
            <Github className="hover:scale-150 transition-all duration-150" />
          </a>
        </div>
      </div>
    </>
  );
};
export default HomePage;
