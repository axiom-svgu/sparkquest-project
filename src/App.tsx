import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/sections/EducationSection";
import SkillsSection from "./components/sections/SkillsSection";
import HobbiesSection from "./components/sections/HobbiesSection";
import ContactSection from "./components/sections/ContactSection";

function App() {
  return (
    <div className="bg-stone-900 w-screen min-h-screen relative">
      {/* Glassmorphic background elements */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        <NavBar />
        <HeroSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
        <HobbiesSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
