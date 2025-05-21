"use client";

import SidebarMenu from "@/components/SidebarMenu";
import Typewriter from "@/components/Typewriter";
import { Facebook, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import hanoiBackground from "../../../public/imgs/hanoi-background.jpg";
import portraitPhoto from "../../../public/imgs/portrait-photo.jpg";
import MusicPlayer from "@/components/MusicPlayer";
import useInView from "@/hooks/useInView";

const HomePage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [avatarRef, isAvatarInView] = useInView();
  const [textRef, isTextInView] = useInView();

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <Image
        src={hanoiBackground}
        alt="Hanoi Background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        priority
      />
      <div className="absolute inset-0 bg-slate-100/60 dark:bg-gray-500/90 -z-10" />

      <SidebarMenu />

      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-5 md:px-16 min-h-screen z-10">
        {/* Text */}
        <div
          ref={textRef}
          className={`text-center md:text-right flex flex-col items-center md:items-end gap-4 max-w-[500px]
          ${
            isTextInView
              ? isMobile
                ? "animate-fade-in-up"
                : "animate-fade-in-left"
              : "opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[rgb(69,80,91)] dark:text-sky-700 leading-tight">
            Pham Minh Hieu
          </h1>
          <Typewriter
            texts={["HIEU", "a Web developer", "Fullstack Developer"]}
            speed={200}
          />
          <div className="flex space-x-6 mt-2">
            <a
              href="https://www.facebook.com/pham.minh.hieu.677056"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook
                className="hover:text-[#0866FF] hover:scale-150 active:scale-125 transition-all duration-150"
                size={40}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/minh-hi%E1%BA%BFu-ph%E1%BA%A1m-453602327/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin
                className="hover:text-[#0A66C2] hover:scale-150 active:scale-125 transition-all duration-150"
                size={40}
              />
            </a>
            <a
              href="https://github.com/titbe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github
                className="hover:text-[rgb(69,80,91)] hover:scale-150 active:scale-125 transition-all duration-150"
                size={40}
              />
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div
          ref={avatarRef}
          className={`flex flex-col items-center ${
            isAvatarInView
              ? isMobile
                ? "animate-fade-in-down"
                : "animate-fade-in-right"
              : "opacity-0"
          }`}
        >
          <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-xl">
            <Image
              src={portraitPhoto}
              alt="Portrait Photo"
              fill
              className={`object-cover object-top animate-spin-slow ${
                isPlaying ? "" : "paused-spin"
              } transition-all duration-500`}
              sizes="(max-width: 768px) 200px, 300px"
              priority
            />
          </div>
          <MusicPlayer setIsPlaying={setIsPlaying} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
