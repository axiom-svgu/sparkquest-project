import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div className="bg-stone-900 w-screen min-h-screen relative">
      {/* Glassmorphic background elements - moved from HeroSection */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        <NavBar />
        <HeroSection />
        <ProjectsSection />
      </div>
    </div>
  );
}

export default App;
