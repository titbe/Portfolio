"use client";

import Image from "next/image";
import React, { useState } from "react";
import portraitPhoto from "../../../public/imgs/avaProfile.jpg";
import { ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { getAge } from "@/utils/common";
import { PdfModal } from "@/components/PdfModal";

const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="absolute inset-0 bg-slate-100/40 z-0"></div>

      <div className="relative z-10 container mx-auto flex flex-col items-center gap-3 h-full px-5">
        <h1 className="text-5xl font-bold text-[rgb(69,80,91)] dark:text-sky-500 border-b-4 border-sky-500 p-3 mt-12 md:mt-0">
          Profile
        </h1>
        <div className="flex gap-5 w-full items-center justify-center md:justify-end">
          <ChevronsRight className="animate-move-right" />
          <button
            onClick={() => setIsOpen(true)}
            className="animate-zoom transition-transform duration-500 text-blue-600 dark:text-blue-300 text-xl font-bold"
          >
            Click here to see my CV
          </button>
          <ChevronsLeft className="animate-move-left" />
        </div>

        <PdfModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          fileUrl="/files/CV-PhamMinhHieu.pdf"
        />

        <p className="text-base text-center w-full dark:text-white">
          A passionate and detail-oriented Front-end Developer with a strong
          foundation in UI/UX principles, specializing in building responsive
          and user-friendly web applications using React, Next.js, and Tailwind
          CSS. I strive to write clean, maintainable code and continuously
          improve my skills to stay updated with modern web technologies. My
          goal is to create exceptional user experiences and contribute to the
          success of projects in collaborative, creative, and challenging
          environments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-center md:items-start">
          <div className="flex justify-center md:justify-start">
            <Image
              src={portraitPhoto}
              alt="Portrait Photo"
              height={220}
              width={220}
              className="object-cover rounded-xl shadow-xl"
            />
          </div>
          <div className="md:col-span-2 flex flex-col items-center md:items-start gap-4">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-sky-500">
              Web Developer
            </h2>

            <div className="flex flex-col lg:flex-row gap-3">
              {/* First column */}
              <ul className="flex-1 flex flex-col gap-3">
                <li className="grid grid-cols-[auto_1fr] items-start gap-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="text-sky-500" size={20} />
                    <strong>Birthday:</strong>
                  </div>
                  <p>01/08/2003</p>
                </li>
                <li className="grid grid-cols-[auto_1fr] items-start gap-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="text-sky-500" size={20} />
                    <strong>Location:</strong>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/search/?api=1&query=Tay+Ho,+Hanoi,+Vietnam"
                    className="hover:underline"
                  >
                    Tay Ho, Hanoi, Vietnam
                  </a>
                </li>
                <li className="grid grid-cols-[auto_1fr] items-start gap-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="text-sky-500" size={20} />
                    <strong>Email:</strong>
                  </div>
                  <a
                    href="mailto:phamminhhieu01082003@gmail.com"
                    className="hover:underline"
                  >
                    phamminhhieu01082003@gmail.com
                  </a>
                </li>
              </ul>

              {/* Second column */}
              <ul className="flex-1 flex flex-col gap-3">
                <li className="grid grid-cols-[auto_1fr] items-start gap-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="text-sky-500" size={20} />
                    <strong>Age:</strong>
                  </div>
                  <p>{getAge(2003)}</p>
                </li>
                <li className="grid grid-cols-[auto_1fr] items-start gap-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="text-sky-500" size={20} />
                    <strong>Phone number:</strong>
                  </div>
                  <a href="tel:0835556482" className="hover:underline">
                    0835556482
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
