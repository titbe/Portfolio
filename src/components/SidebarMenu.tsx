"use client";
import { House, Settings, User, Menu, X, FileText } from "lucide-react";
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
  { icon: <House />, text: "Dashboard", sectionId: "dashboard" },
  { icon: <User />, text: "Account", sectionId: "account" },
  { icon: <Settings />, text: "Config", sectionId: "config" },
];

const SidebarMenu = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // mobile mặc định đóng

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) =>
        document.getElementById(item.sectionId)
      );

      let currentSection = activeSection;
      let maxVisibility = 0;

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const visibility =
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          currentSection = section.id;
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <>
      {/* Toggle Button chỉ hiện ở mobile */}
      <button
        className="fixed left-5 top-5 z-50 bg-sky-700 text-white p-2 rounded-full md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-1/2 -translate-y-1/2 flex flex-col gap-4 text-white z-40 transition-all duration-500 ease-in-out
        ${isOpen ? "left-5" : "-left-64"} 
        md:left-5`}
      >
        {menuItems.map((item, index) => (
          <div key={index} className="group">
            <button
              onClick={() => scrollToSection(item.sectionId)}
              className={`rounded-full p-3 flex items-center overflow-hidden transition-all duration-300 ease-in-out ${
                activeSection === item.sectionId ? "bg-sky-700" : "bg-slate-300"
              } hover:bg-sky-700`}
            >
              <div className="transition-transform duration-500">
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
