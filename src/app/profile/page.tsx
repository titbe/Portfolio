import Image from "next/image";
import React from "react";
import portraitPhoto from "../../../public/imgs/portrait-photo.jpg";
import { ChevronRight } from "lucide-react";

const ProfilePage = () => {
  return (
    <>
      <div className="absolute inset-0 bg-slate-100/40 z-0"></div>

      <div className="relative z-10 container mx-auto flex flex-col items-center gap-6 h-full pl-12">
        <h1 className="text-5xl font-bold text-[rgb(69,80,91)] border-b-4 border-sky-500 p-3 mt-12 md:mt-0">
          {" "}
          Profile
        </h1>
        <p className="text-base text-gray-700 text-center w-full">
          With a passion for building and developing modern web applications, I
          aspire to become a professional Web Developer, where I can leverage my
          knowledge to create exceptional user experiences. My goal is to
          continuously learn and stay updated with new technologies, thereby
          contributing to the success of projects by building optimized,
          user-friendly, and highly secure web products. I am eager to work in a
          creative and challenging environment where I can grow my career and
          achieve great accomplishments with the company.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start md:items-center">
          <div className="flex justify-center md:justify-start">
            <Image
              src={portraitPhoto}
              alt="Portrait Photo"
              height={300}
              width={300}
              className="object-cover rounded-xl shadow-xl"
            />
          </div>

          <div className="md:col-span-2 flex flex-col text-left gap-4">
            <h2 className="text-3xl font-semibold text-gray-800">
              Web Developer
            </h2>

            <div className="flex flex-col lg:flex-row gap-3">
              {/* First column */}
              <ul className="flex-1 flex flex-col gap-3">
                <li className="grid grid-cols-[auto_1fr] items-start gap-2 text-gray-700">
                  <div className="flex items-center gap-2">
                    <ChevronRight color="#0563bb" size={20} />
                    <strong>Birthday:</strong>
                  </div>
                  <p>01/08/2003</p>
                </li>
                <li className="grid grid-cols-[auto_1fr] items-start gap-2 text-gray-700">
                  <div className="flex items-center gap-2">
                    <ChevronRight color="#0563bb" size={20} />
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
                <li className="grid grid-cols-[auto_1fr] items-start gap-2 text-gray-700">
                  <div className="flex items-center gap-2">
                    <ChevronRight color="#0563bb" size={20} />
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
                <li className="grid grid-cols-[auto_1fr] items-start gap-2 text-gray-700">
                  <div className="flex items-center gap-2">
                    <ChevronRight color="#0563bb" size={20} />
                    <strong>Age:</strong>
                  </div>
                  <p>Current year - 2003 = My age</p>
                </li>
                <li className="grid grid-cols-[auto_1fr] items-start gap-2 text-gray-700">
                  <div className="flex items-center gap-2">
                    <ChevronRight color="#0563bb" size={20} />
                    <strong>Phone number:</strong>
                  </div>
                  <a href="tel:0355564823" className="hover:underline">
                    0355564823
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
