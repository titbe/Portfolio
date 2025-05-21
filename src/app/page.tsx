"use client";

import { useRef, useEffect } from "react";
import SidebarMenu from "@/components/SidebarMenu";
import ProfilePage from "./profile/page";
import HomePage from "./home/page";
import ResumePage from "./resume/page";
import ProjectPage from "./project/page";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const sections = ["home", "profile", "resume", "project"].map((id) =>
        document.getElementById(id)
      );

      let currentSection = "";
      let maxVisible = 0;

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const visibility =
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

        if (visibility > maxVisible) {
          maxVisible = visibility;
          currentSection = section.id;
        }
      });

      const event = new CustomEvent("sectionChange", {
        detail: currentSection,
      });
      window.dispatchEvent(event);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="scrollbar-hide h-screen overflow-y-scroll"
      ref={scrollContainerRef}
    >
      <SidebarMenu />
      <section id="home" className="relative h-screen">
        <HomePage />
      </section>
      <section id="profile" className="relative min-h-screen py-16">
        <ProfilePage />
      </section>
      <section id="resume" className="relative min-h-screen my-3">
        <ResumePage />
      </section>
      <section id="project" className="relative min-h-screen my-3">
        <ProjectPage />
      </section>
    </div>
  );
}
