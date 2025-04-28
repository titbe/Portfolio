import { SidebarMenu } from "@/components/SidebarMenu";
import Image from "next/image";
import hanoiBackground from "../../public/imgs/hanoi-background.jpg";
import { ChevronRight, Facebook, Github, Linkedin } from "lucide-react";
import Typewriter from "@/components/Typewriter";
import portraitPhoto from "../../public/imgs/portrait-photo.jpg";

const profileInfo = [
  { label: "Birthday", value: "01/08/2003" },
  { label: "Location", value: "Hanoi, Vietnam" },
  { label: "Email", value: "phamminhhieu01082003@gmail.com" },
  { label: "Age", value: "22" },
  { label: "Website", value: "hi" },
];

export default function Home() {
  const midIndex = Math.ceil(profileInfo.length / 2);
  const firstHalf = profileInfo.slice(0, midIndex);
  const secondHalf = profileInfo.slice(midIndex);
  return (
    <div>
      {/* Home Section */}
      <section id="home" className="relative w-screen h-screen overflow-hidden">
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
            Phạm Minh Hiếu
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
      </section>

      {/* Profile Section - Made responsive with auto height on mobile */}
      <section
        id="profile"
        className="relative w-screen min-h-screen py-16 md:h-screen md:py-0"
      >
        <div className="absolute inset-0 bg-slate-100/40 z-0"></div>

        <div className="relative z-10 container mx-auto md:px-20 flex flex-col items-center gap-6 h-full">
          <h1 className="text-3xl font-bold text-[rgb(69,80,91)] border-b-4 border-sky-500 p-3 mt-12 md:mt-0">
            Profile
          </h1>
          <p className="text-base text-gray-700 max-w-lg text-center">
            I am passionate about developing modern web applications and aspire
            to be a professional Web Developer. I aim to continually learn new
            technologies to create exceptional user experiences and contribute
            to project success. I seek a creative environment that fosters my
            growth alongside the company.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
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
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
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
      </section>

      {/* Settings Section */}
      <section
        id="settings"
        className="relative w-screen h-screen overflow-hidden"
      >
        <Image
          src={hanoiBackground}
          alt="Hanoi Background"
          className="object-cover w-full h-full"
          priority
        />

        <div className="absolute inset-0 bg-slate-100/40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-20 z-10 flex flex-col items-center gap-2">
          <h1 className="text-5xl font-bold z-20 text-[rgb(69,80,91)]">
            Settings
          </h1>
          <p className="text-xl text-gray-700 max-w-lg text-center">
            This is the settings section of the portfolio.
          </p>
        </div>
      </section>

      {/* Dashboard Section */}
      <section
        id="dashboard"
        className="relative w-screen h-screen overflow-hidden"
      >
        <Image
          src={hanoiBackground}
          alt="Hanoi Background"
          className="object-cover w-full h-full"
          priority
        />

        <div className="absolute inset-0 bg-slate-100/40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-20 text-right z-10 flex flex-col items-end gap-2">
          <h1 className="text-5xl font-bold z-20 text-[rgb(69,80,91)]">
            Dashboard
          </h1>
          <p className="text-xl text-gray-700 max-w-lg">
            View my latest projects and statistics.
          </p>
        </div>
      </section>

      {/* Account Section */}
      <section
        id="account"
        className="relative w-screen h-screen overflow-hidden"
      >
        <Image
          src={hanoiBackground}
          alt="Hanoi Background"
          className="object-cover w-full h-full"
          priority
        />

        <div className="absolute inset-0 bg-slate-100/40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-20 text-left z-10 flex flex-col items-start gap-2">
          <h1 className="text-5xl font-bold z-20 text-[rgb(69,80,91)]">
            Account
          </h1>
          <p className="text-xl text-gray-700 max-w-lg">
            Contact information and professional details.
          </p>
        </div>
      </section>

      {/* Config Section */}
      <section
        id="config"
        className="relative w-screen h-screen overflow-hidden"
      >
        <Image
          src={hanoiBackground}
          alt="Hanoi Background"
          className="object-cover w-full h-full"
          priority
        />

        <div className="absolute inset-0 bg-slate-100/40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-20 text-center z-10 flex flex-col items-center gap-2">
          <h1 className="text-5xl font-bold z-20 text-[rgb(69,80,91)]">
            Config
          </h1>
          <p className="text-xl text-gray-700 max-w-lg">
            Additional configuration options and preferences.
          </p>
        </div>
      </section>
    </div>
  );
}
