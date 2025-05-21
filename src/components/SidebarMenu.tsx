"use client";

import { useTheme } from "next-themes";
import "@theme-toggles/react/css/Around.css";
import { Around } from "@theme-toggles/react";

import { House, User, FileText, Folder, Menu, X } from "lucide-react";
import Image from "next/image";
import { ReactNode, useState, useEffect } from "react";

interface MenuItem {
  icon: ReactNode;
  text: string;
  sectionId: string;
}

const menuItems: MenuItem[] = [
  { icon: <House />, text: "Home", sectionId: "home" },
  { icon: <User />, text: "Profile", sectionId: "profile" },
  { icon: <FileText />, text: "Resume", sectionId: "resume" },
  { icon: <Folder />, text: "Project", sectionId: "project" },
];

const SidebarMenu = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const toggleDarkMode = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      if (window.innerWidth < 768) setIsOpen(false); // auto close on mobile
    }
  };

  useEffect(() => {
    const handleSectionChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail && customEvent.detail !== activeSection) {
        setActiveSection(customEvent.detail);
      }
    };

    window.addEventListener("sectionChange", handleSectionChange);
    return () =>
      window.removeEventListener("sectionChange", handleSectionChange);
  }, [activeSection]);

  return (
    <>
      {/* Toggle menu (mobile) */}
      <button
        className="fixed left-5 top-24 z-50 bg-sky-700 text-white p-2 rounded-full md:hidden shadow-lg hover:scale-110 transition"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Logo */}
      <button
        onClick={() => scrollToSection("home")}
        className="fixed top-2 left-2 z-50 group"
      >
        <Image
          src="/logo.ico"
          alt="Logo"
          width={80}
          height={80}
          className="rounded-md"
        />
      </button>

      {/* Dark Mode Toggle */}
      <div className="fixed top-40 z-50 group">
        <div
          onClick={toggleDarkMode}
          role="button"
          tabIndex={0}
          className="rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer
      backdrop-blur-md transition-all duration-300 ease-in-out shadow-lg
      bg-slate-200 dark:bg-gray-800 text-black dark:text-white hover:text-white
      hover:bg-sky-700 dark:hover:bg-sky-600"
        >
          <Around
            toggled={isDark}
            duration={750}
            className="!text-inherit text-2xl"
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            placeholder=""
          />
          <span className="font-medium">{isDark ? "Dark" : "Light"}</span>
        </div>
        {/* {isDark ? (<span>Dark</span>): (<span>Light</span>)} */}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40 transition-transform duration-500 ease-in-out
        ${
          isOpen ? "translate-x-0 left-5" : "-translate-x-96"
        } md:translate-x-0 md:left-5`}
      >
        {menuItems.map((item, index) => (
          <div key={index} className="group">
            <button
              onClick={() => scrollToSection(item.sectionId)}
              className={`rounded-full p-3 flex items-center backdrop-blur-md overflow-hidden transition-all duration-300 ease-in-out shadow-lg
                ${
                  activeSection === item.sectionId
                    ? "bg-sky-700 text-white"
                    : "bg-slate-200 dark:bg-gray-800 text-black dark:text-white"
                }
                hover:bg-sky-700 dark:hover:bg-sky-600`}
            >
              <div className="transition-transform duration-500 group-hover:scale-125">
                {item.icon}
              </div>
              <p className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 transition-all duration-500 ease-in-out ml-0 group-hover:ml-2">
                {item.text}
              </p>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default SidebarMenu;
