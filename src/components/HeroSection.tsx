import { motion } from "framer-motion";
import CRT from "./CRT";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-20">
      <div className="max-w-6xl w-full">
        <CRT className="w-full aspect-video">
          <div className="h-full flex flex-col items-center justify-center bg-black p-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-green-500 mb-6"
            >
              Welcome to the Terminal
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-green-400 mb-8 max-w-2xl"
            >
              &gt; Initializing system...{" "}
              <span className="animate-pulse">_</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex gap-4"
            >
              <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors">
                Get Started
              </button>
              <button className="px-6 py-2 border border-green-500 text-green-500 hover:bg-green-500/10 rounded-md transition-colors">
                Learn More
              </button>
            </motion.div>
          </div>
        </CRT>
      </div>
    </section>
  );
}
