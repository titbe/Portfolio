import Image from "next/image";
import React from "react";
import portraitPhoto from "../../../public/imgs/portrait-photo.jpg";
import { profileInfo } from "@/data/data";
import { ChevronRight } from "lucide-react";

export const ProfilePage = () => {
  const midIndex = Math.ceil(profileInfo.length / 2);
  const firstHalf = profileInfo.slice(0, midIndex);
  const secondHalf = profileInfo.slice(midIndex);
  return (
    <>
      <div className="absolute inset-0 bg-slate-100/40 z-0"></div>

      <div className="relative z-10 container mx-auto flex flex-col items-center gap-6 h-full">
        <h1 className="text-3xl font-bold text-[rgb(69,80,91)] border-b-4 border-sky-500 p-3 mt-12 md:mt-0">
          Profile
        </h1>
        <p className="text-base text-gray-700 max-w-lg text-center">
          I am passionate about developing modern web applications and aspire to
          be a professional Web Developer. I aim to continually learn new
          technologies to create exceptional user experiences and contribute to
          project success. I seek a creative environment that fosters my growth
          alongside the company.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="flex justify-center">
            <Image
              src={portraitPhoto}
              alt="Portrait Photo"
              height={300}
              width={300}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-col text-left gap-3">
            <h2 className="text-2xl font-bold text-[rgb(69,80,91)]">
              Web developer
            </h2>
            <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
              <ul className="flex-1 flex flex-col gap-2">
                {firstHalf.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ChevronRight color="rgb(5,99,187)" size={20} />
                    <p>
                      <strong>{item.label}:</strong> {item.value}
                    </p>
                  </li>
                ))}
              </ul>

              {secondHalf.length > 0 && (
                <ul className="flex-1 flex flex-col gap-2">
                  {secondHalf.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ChevronRight color="rgb(5,99,187)" size={20} />
                      <p>
                        <strong>{item.label}:</strong> {item.value}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
