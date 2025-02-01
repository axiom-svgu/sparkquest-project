import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section height (viewport height)
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Show navbar after scrolling past 80% of hero section
      setIsVisible(scrollPosition > heroHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-500/20"
        >
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            {/* Logo/Name */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-500 font-mono text-lg"
            >
              vinesh.dev
            </motion.div>

            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              {["About", "Projects", "Skills", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1 },
                  }}
                  className="text-green-400/80 hover:text-green-400 transition-colors font-mono text-sm"
                >
                  &gt; {item}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
