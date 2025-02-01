import { motion } from "framer-motion";
import CRT from "./CRT";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-stone-900 px-4 py-20 relative overflow-hidden">
      {/* Glassmorphic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl w-full relative">
        <CRT className="w-full aspect-video">
          <div className="h-full flex flex-col bg-black/90 p-8 relative font-mono">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 1 }}
              className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,255,109,0.1)_50%,transparent_75%)] bg-[length:4px_4px]"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-green-500/50 text-sm mb-4"
            >
              Last login: {new Date().toLocaleString()} on terminal
            </motion.div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-1"
              >
                <p className="text-green-500">$ whoami</p>
                <div className="pl-4 text-green-400">
                  <p className="text-2xl font-bold">Vinesh Rajpurohit</p>
                  <p className="text-green-400/80">Full Stack Developer</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="space-y-1"
              >
                <p className="text-green-500">$ skills.list --primary</p>
                <div className="pl-4 flex flex-wrap gap-2">
                  {[
                    "Go",
                    "React.js",
                    "TypeScript",
                    "Node.js",
                    "Docker",
                    "AWS",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded text-green-400 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="space-y-1"
              >
                <p className="text-green-500">$ cat about.txt</p>
                <p className="pl-4 text-green-400/90 max-w-2xl">
                  Building robust and scalable solutions with Go & React.js.
                  Passionate about clean code and exceptional user experiences.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="space-y-1"
              >
                <p className="text-green-500">$ ./get-started.sh</p>
                <div className="pl-4 flex gap-4">
                  <button className="group px-4 py-1.5 bg-green-600/20 hover:bg-green-600 text-green-400 hover:text-white rounded transition-all duration-300 border border-green-500/30 hover:border-green-500 text-sm">
                    View Projects{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                  <button className="px-4 py-1.5 border border-green-500/30 text-green-400 hover:bg-green-500/10 rounded transition-all duration-300 hover:border-green-500 text-sm">
                    Contact Me
                  </button>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 }}
              className="mt-4 flex items-center text-green-500"
            >
              <span className="animate-pulse">▋</span>
            </motion.div>
          </div>
        </CRT>
      </div>
    </section>
  );
}
