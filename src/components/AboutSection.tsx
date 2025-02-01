import { motion } from "framer-motion";
import CRT from "./CRT";

interface SkillCategory {
  name: string;
  skills: string[];
}

const technicalSkills: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Go", "TypeScript", "JavaScript", "Python", "Java", "SQL"],
  },
  {
    name: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Material-UI", "Redux"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Django", "Spring Boot"],
  },
  {
    name: "DevOps & Tools",
    skills: ["Docker", "AWS", "Git", "Jenkins", "Kubernetes"],
  },
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    year: "2020-2022",
    details: "Specialization in Machine Learning and Distributed Systems",
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "University of Mumbai",
    year: "2016-2020",
    details: "First Class with Distinction",
  },
];

export default function AboutSection() {
  return (
    <section className="min-h-screen px-4 py-24 relative">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Education Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-green-500 mb-12 text-center"
          >
            Education
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <CRT className="h-full">
                  <div className="p-6 bg-black/90 h-full">
                    <h3 className="text-xl font-bold text-green-400 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-green-400/80">{edu.school}</p>
                    <p className="text-green-400/60 text-sm">{edu.year}</p>
                    <p className="text-green-400/70 mt-2">{edu.details}</p>
                  </div>
                </CRT>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Skills Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-green-500 mb-12 text-center"
          >
            Technical Skills
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {technicalSkills.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <CRT className="h-full">
                  <div className="p-6 bg-black/90 h-full">
                    <h3 className="text-xl font-bold text-green-400 mb-4">
                      {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CRT>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hobbies & Interests */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-green-500 mb-12 text-center"
          >
            Hobbies & Interests
          </motion.h2>
          <CRT>
            <div className="p-8 bg-black/90">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    hobby: "Open Source Contributing",
                    description:
                      "Active contributor to various open-source projects",
                  },
                  {
                    hobby: "Tech Blogging",
                    description:
                      "Writing technical articles and tutorials on Medium",
                  },
                  {
                    hobby: "Photography",
                    description: "Capturing moments through street photography",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.hobby}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center"
                  >
                    <h3 className="text-xl font-bold text-green-400 mb-2">
                      {item.hobby}
                    </h3>
                    <p className="text-green-400/70">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </CRT>
        </div>

        {/* Contact Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-green-500 mb-12 text-center"
          >
            Contact
          </motion.h2>
          <CRT>
            <div className="p-8 bg-black/90">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-green-400">
                    <span className="text-green-500">Email:</span>{" "}
                    vaidehi.shah@example.com
                  </p>
                  <p className="text-green-400">
                    <span className="text-green-500">Phone:</span> +1 (555)
                    123-4567
                  </p>
                  <p className="text-green-400">
                    <span className="text-green-500">Location:</span> San
                    Francisco, CA
                  </p>
                  <div className="flex justify-center gap-4 mt-6">
                    {[
                      { name: "GitHub", url: "#" },
                      { name: "LinkedIn", url: "#" },
                      { name: "Twitter", url: "#" },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-full transition-colors border border-green-500/20"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CRT>
        </div>
      </div>
    </section>
  );
}
