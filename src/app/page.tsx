import ProfilePage from "./profile/page";
import HomePage from "./home/page";
import ResumePage from "./resume/page";
import ProjectPage from "./project/page";

export default function Home() {
  return (
    <div className="scrollbar-hide h-screen overflow-y-scroll">
      {/* Sections của bạn */}
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
