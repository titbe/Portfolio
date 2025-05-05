import ProfilePage from "./profile/page";
import HomePage  from "./home/page";
import ResumePage from "./resume/page";

export default function Home() {
  return (
    <div>
      {/* Home Section */}
      <section id="home" className="relative w-screen h-screen overflow-hidden">
        <HomePage />
      </section>

      {/* Profile Section */}
      <section
        id="profile"
        className="relative w-screen min-h-screen py-16 md:h-screen md:py-0"
      >
        <ProfilePage />
      </section>

      {/* Resume Section */}
      <section
        id="resume"
        className="relative w-screen min-h-screen overflow-hidden my-3"
      >
        <ResumePage/>
      </section>

      {/* Dashboard Section */}
      {/* <section
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
      </section> */}

      {/* Account Section */}
      {/* <section
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
      </section> */}

      {/* Config Section */}
      {/* <section
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
      </section> */}
    </div>
  );
}
