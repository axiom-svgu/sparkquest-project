import { motion } from "framer-motion";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    year: "2020-2022",
    details: "Specialization in Machine Learning and Distributed Systems",
    courses: [
      "Advanced Algorithms",
      "Machine Learning",
      "Distributed Systems",
      "Cloud Computing",
    ],
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "University of Mumbai",
    year: "2016-2020",
    details: "First Class with Distinction",
    courses: [
      "Data Structures",
      "Operating Systems",
      "Database Management",
      "Web Development",
    ],
  },
];

export default function EducationSection() {
  return (
    <section className="min-h-screen px-4 py-24 relative" id="education">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 top-1/4 w-96 h-96 bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-green-500 mb-12 text-center"
        >
          Education Timeline
        </motion.h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-green-500/20" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative grid grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "text-right" : "text-left"
                }`}
              >
                <div className={index % 2 === 0 ? "block" : "col-start-2"}>
                  <div className="p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-green-500/20 hover:border-green-500/40 transition-colors group">
                    <h3 className="text-xl font-bold text-green-400 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-green-400/80">{edu.school}</p>
                    <p className="text-green-400/60 text-sm">{edu.year}</p>
                    <p className="text-green-400/70 mt-2">{edu.details}</p>

                    {/* Courses list that appears on hover */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-green-500 text-sm mb-2">
                        Key Courses:
                      </p>
                      <div className="flex flex-wrap gap-2 justify-end">
                        {edu.courses.map((course) => (
                          <span
                            key={course}
                            className="text-green-400/60 text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-green-500/20 border border-green-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
