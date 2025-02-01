import { motion } from "framer-motion";
import { useRef } from "react";

interface SkillCategory {
  name: string;
  skills: Array<{
    name: string;
    level: number; // 0-100
  }>;
}

const technicalSkills: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "Go", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind", level: 90 },
      { name: "Redux", level: 80 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Django", level: 75 },
      { name: "Spring", level: 70 },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Git", level: 90 },
      { name: "K8s", level: 75 },
    ],
  },
];

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="min-h-screen px-4 py-12 md:py-24 relative" id="skills">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(0,255,0,0.05)_50%,transparent_100%)] animate-[scan_4s_ease-in-out_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-green-500 mb-8 md:mb-12 text-center"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {technicalSkills.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-4 md:p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-green-500/20"
            >
              <h3 className="text-lg md:text-xl font-bold text-green-400 mb-4 md:mb-6">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-green-400">{skill.name}</span>
                      <span className="text-green-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-green-500/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-green-500/50 to-green-500/80 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
