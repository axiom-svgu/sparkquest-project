import { motion } from "framer-motion";
import { EvervaultCard } from "./ui/canvas-reveal-effect";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Project Alpha",
    description: "A full-stack application built with Go and React",
    tags: ["Go", "React", "PostgreSQL"],
    link: "https://github.com/yourusername/project-alpha",
    image: "/project-alpha-thumb.jpg", // You'll need to add these images to your public folder
  },
  {
    title: "Beta Dashboard",
    description: "Real-time analytics dashboard with Node.js backend",
    tags: ["TypeScript", "Node.js", "WebSocket"],
    link: "https://github.com/yourusername/beta-dashboard",
    image: "/beta-dashboard-thumb.jpg",
  },
];

export default function ProjectsSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="min-h-screen px-4 py-20 relative overflow-hidden"
    >
      {/* Updated background grid with reduced opacity */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="max-w-7xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-green-500 mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <EvervaultCard>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-full"
                >
                  <div className="relative h-[400px] p-6 rounded-lg overflow-hidden">
                    {/* Holographic effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 group-hover:opacity-20 transition-opacity" />
                    <div className="absolute inset-0 backdrop-blur-sm bg-black/50 border border-green-500/20 rounded-lg group-hover:border-green-500/40 transition-colors" />

                    {/* Project content */}
                    <div className="relative h-full flex flex-col">
                      <div className="h-48 overflow-hidden rounded-md mb-4">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <h3 className="text-xl font-bold text-green-400 mb-2">
                        {project.title}
                      </h3>

                      <p className="text-green-400/80 mb-4 flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded text-green-400 text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-green-400">→</span>
                      </div>
                    </div>
                  </div>
                </a>
              </EvervaultCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
