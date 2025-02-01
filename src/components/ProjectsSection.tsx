import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  size: "sm" | "md" | "lg";
  longDescription: string;
  timeline: string;
  challenge: string;
  solution: string;
}

const projects: Project[] = [
  {
    title: "Cyber Threat Intelligence Platform",
    description:
      "Advanced threat detection and analysis platform for defense organizations",
    tags: ["React", "Node.js", "Python", "ElasticSearch", "Machine Learning"],
    link: "https://github.com/yourusername/threat-intel",
    image:
      "https://media.discordapp.net/attachments/1322638124517556368/1335127480608100483/cyber-security-istock.png?ex=679f09dc&is=679db85c&hm=9edf83e4e4b1d4fc90c046a60b0c249eaa2cebb85b02bcda3053c646b267466f&=&format=webp&quality=lossless",
    size: "lg",
    timeline: "8 months",
    challenge:
      "Defense organizations needed a centralized platform to collect, analyze, and respond to cyber threats in real-time while managing massive amounts of security data.",
    solution:
      "Developed a scalable platform using ElasticSearch for data ingestion, Python for threat analysis, and React for real-time visualization. Implemented machine learning models for anomaly detection and automated threat classification.",
    longDescription:
      "A comprehensive cyber threat intelligence platform that helps defense organizations stay ahead of emerging threats. The system processes terabytes of security logs, network traffic, and threat feeds to provide actionable intelligence. Features include real-time alerts, threat hunting capabilities, and automated response playbooks.",
  },
  {
    title: "Quantum-Resistant Encryption System",
    description:
      "Post-quantum cryptography implementation for military communications",
    tags: ["Rust", "C++", "Quantum", "Cryptography"],
    link: "https://github.com/yourusername/quantum-crypto",
    image:
      "https://media.discordapp.net/attachments/1322638124517556368/1335130547445436426/quantum-resistant-vs-post-quantum-cryptography-700x441.png?ex=679f0cb8&is=679dbb38&hm=1c175e7181851026ee7a38049e1dcc59a9130a353ced5f6eb47b56b297bb5577&=&format=webp&quality=lossless&width=550&height=347",
    size: "sm",
    timeline: "14 months",
    challenge:
      "Developing encryption systems that can withstand attacks from future quantum computers while maintaining performance.",
    solution:
      "Implemented lattice-based cryptography algorithms in Rust with C++ bindings for optimal performance. Created a hybrid system that combines traditional and post-quantum methods.",
    longDescription:
      "A forward-looking encryption system designed to protect against quantum computing threats. Implements latest post-quantum cryptography standards with a focus on military-grade security and performance.",
  },
  {
    title: "Autonomous Drone Management",
    description: "Fleet management system for autonomous surveillance drones",
    tags: ["TypeScript", "Python", "ROS", "MongoDB", "WebGL"],
    link: "https://github.com/yourusername/drone-fleet",
    image:
      "https://media.discordapp.net/attachments/1322638124517556368/1335128281757913179/001_552_IMG_Outilpulvrisateur-H20-DRONEVOLT3-848x565.png?ex=679f0a9b&is=679db91b&hm=23dd2924236f51787e4483e1e62ff739e6efd8ae85f2c4129e4a11bab1ea54d6&=&format=webp&quality=lossless",
    size: "md",
    timeline: "12 months",
    challenge:
      "Coordinating multiple autonomous drones for surveillance missions while ensuring reliable communication and fail-safe operations.",
    solution:
      "Created a distributed system using ROS for drone control, MongoDB for mission data, and WebGL for 3D visualization of drone operations.",
    longDescription:
      "An advanced drone fleet management system that enables autonomous surveillance missions. The platform handles mission planning, real-time tracking, and emergency protocols. It includes features like geofencing, obstacle avoidance, and AI-powered target recognition.",
  },
  {
    title: "Neural Warfare Simulator",
    description: "AI-powered military strategy simulation platform",
    tags: ["Python", "TensorFlow", "Unity3D", "CUDA"],
    link: "https://github.com/yourusername/neural-warfare",
    image:
      "https://media.discordapp.net/attachments/1322638124517556368/1335130610594746408/neural-network-8684318_1280.png?ex=679f0cc7&is=679dbb47&hm=a3472f9f28e37f2f7287c1e482e211b0328c8b3f24be8353758250ed6a3d2d0f&=&format=webp&quality=lossless&width=888&height=666",
    size: "lg",
    timeline: "18 months",
    challenge:
      "Creating realistic military strategy simulations that can adapt to emerging threats and tactics.",
    solution:
      "Built a deep learning system that learns from historical battles and real-time simulations. Integrated with Unity3D for visualization.",
    longDescription:
      "A cutting-edge military simulation platform that combines neural networks with traditional warfare doctrine to create adaptive training scenarios.",
  },
  {
    title: "Secure Communications Hub",
    description: "End-to-end encrypted communication system",
    tags: ["Go", "WebRTC", "React", "PostgreSQL"],
    link: "https://github.com/yourusername/secure-comms",
    image:
      "https://media.discordapp.net/attachments/1322638124517556368/1335130011052671029/shutterstock_1644649453_1600x900.png?ex=679f0c38&is=679dbab8&hm=78d7b89c7de4e500b3e7cf4eae51114a0c30365f4332521d980b693d735ab96f&=&format=webp&quality=lossless&width=1183&height=665",
    size: "sm",
    timeline: "6 months",
    challenge:
      "Military units needed a reliable, secure communication system that works in low-bandwidth environments.",
    solution:
      "Built a WebRTC-based system with Go backend for optimal performance. Implemented end-to-end encryption.",
    longDescription:
      "A military-grade communications platform that enables secure video calls, messaging, and file sharing.",
  },
  {
    title: "Radar Signal Processing Engine",
    description: "Advanced radar signal analysis and processing system",
    tags: ["C++", "CUDA", "DSP", "Python"],
    link: "https://github.com/yourusername/radar-engine",
    image:
      "https://media.discordapp.net/attachments/1322638124517556368/1335128489078292533/case-study-image-footer.png?ex=679f0acd&is=679db94d&hm=5c08686b94c1b3e5785a798a5e0424acdd4d038a2bfae5e4935f022875f49b09&=&format=webp&quality=lossless&width=550&height=148",
    size: "md",
    timeline: "10 months",
    challenge:
      "Processing massive amounts of radar data in real-time while detecting and classifying targets accurately.",
    solution:
      "Developed a GPU-accelerated signal processing pipeline using CUDA and C++. Implemented advanced DSP algorithms.",
    longDescription:
      "A high-performance radar signal processing engine that enables real-time target detection and classification.",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen px-4 py-12 md:py-24 relative"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-green-500 mb-8 md:mb-12 text-center"
        >
          Defense Tech Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(250px,auto)] md:auto-rows-[minmax(180px,auto)] gap-4">
          {/* First Row */}
          <motion.div
            className="md:col-span-2 md:row-span-2"
            {...fadeInAnimationProps(0)}
          >
            <ProjectCard
              project={projects[0]}
              onClick={() => setSelectedProject(projects[0])}
            />
          </motion.div>
          <motion.div
            className="md:col-span-1 md:row-span-1"
            {...fadeInAnimationProps(1)}
          >
            <ProjectCard
              project={projects[1]}
              onClick={() => setSelectedProject(projects[1])}
            />
          </motion.div>
          <motion.div
            className="md:col-span-1 md:row-span-2"
            {...fadeInAnimationProps(2)}
          >
            <ProjectCard
              project={projects[2]}
              onClick={() => setSelectedProject(projects[2])}
            />
          </motion.div>

          {/* Second Row */}
          <motion.div className="md:col-span-1" {...fadeInAnimationProps(3)}>
            <ProjectCard
              project={projects[3]}
              onClick={() => setSelectedProject(projects[3])}
            />
          </motion.div>
          <motion.div className="md:col-span-1" {...fadeInAnimationProps(4)}>
            <ProjectCard
              project={projects[4]}
              onClick={() => setSelectedProject(projects[4])}
            />
          </motion.div>

          {/* Third Row */}
          <motion.div
            className="md:col-span-2 md:row-span-2"
            {...fadeInAnimationProps(5)}
          >
            <ProjectCard
              project={projects[5]}
              onClick={() => setSelectedProject(projects[5])}
            />
          </motion.div>
        </div>

        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="w-[calc(100vw-2rem)] md:max-w-3xl bg-black/90 border-green-500/20 max-h-[90vh] overflow-y-auto p-4 md:p-6">
            {selectedProject && (
              <>
                <DialogHeader className="mb-4">
                  <DialogTitle className="text-xl md:text-2xl font-bold text-green-400 break-words">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="relative w-full h-[180px] sm:h-[200px] md:h-[300px] rounded-lg overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-green-400 mb-1 md:mb-2">
                        Overview
                      </h4>
                      <p className="text-sm md:text-base text-green-400/80">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-green-400 mb-1 md:mb-2">
                        Challenge
                      </h4>
                      <p className="text-sm md:text-base text-green-400/80">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-green-400 mb-1 md:mb-2">
                        Solution
                      </h4>
                      <p className="text-sm md:text-base text-green-400/80">
                        {selectedProject.solution}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 md:px-3 py-0.5 md:py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs md:text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4">
                      <span className="text-sm md:text-base text-green-400/80">
                        Timeline: {selectedProject.timeline}
                      </span>
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 md:px-6 py-1.5 md:py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-full transition-colors border border-green-500/20 text-sm md:text-base"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

// Helper component for project cards
function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <Card
      className="h-full group relative overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <CardContent className="p-0 h-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-sm flex flex-col justify-end p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold text-green-400 mb-2">
            {project.title}
          </h3>
          <p className="text-green-400/80 text-sm md:text-base line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 2 && (
              <span className="px-2 py-1 text-green-400 text-xs">
                +{project.tags.length - 2} more
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Animation helper
const fadeInAnimationProps = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay: delay * 0.1 },
});
