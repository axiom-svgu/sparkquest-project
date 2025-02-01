import { motion } from "framer-motion";
import { FC, useState } from "react";
import { Button } from "@/components/ui/button";

function HeroSection {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const crypticVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        repeat: 2,
        repeatType: "reverse" as const,
        delay: i * 0.1,
      },
    }),
  };

  const headingText = "NOT YOUR AVERAGE STREETWEAR BRAND";
  const brandName = "DRIP CULTURE";

  return (
    <section className="min-h-[90vh] relative flex flex-col items-center justify-center text-center px-4 pt-16 pb-4 text-white overflow-hidden">
      {/* Video Background */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ zIndex: -1 }}
      >
        <source src={metadata.video} type="video/mp4" />
      </video> */}

      {/* Overlay to ensure text readability */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/50"
        style={{ zIndex: -1 }}
      />

      {/* Logo row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 mb-4"
      >
        <div className="overflow-hidden">
          <motion.div className="flex">
            {brandName.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={crypticVariants}
                initial="hidden"
                animate="visible"
                className="text-sm text-neutral-400 inline-block"
                onAnimationComplete={() => {
                  if (index === brandName.length - 1) {
                    // Add a subtle hover effect after the initial animation
                    const element = document.querySelector(".brand-text");
                    if (element) {
                      element.classList.add(
                        "hover:text-neutral-200",
                        "transition-colors"
                      );
                    }
                  }
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Main heading */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-4xl mx-auto mb-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 flex flex-wrap justify-center gap-x-[0.2em] gap-y-2">
          {headingText.split(" ").map((word, wordIndex) => (
            <motion.span key={wordIndex} className="inline-block">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  className="inline-block"
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + wordIndex * 0.1 + charIndex * 0.03,
                  }}
                >
                  {char}
                </motion.span>
              ))}{" "}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-neutral-400 text-lg mb-8"
        >
          Breaking boundaries with limited drops, exclusive collabs, and fits
          that speak louder than words. Join the movement.
        </motion.p>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="flex flex-col items-center gap-4"
      >
        <Button
          size="lg"
          className="bg-white text-black hover:bg-neutral-200 px-8"
        >
          SHOP THE DROP →
        </Button>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-sm text-neutral-500"
        >
          Limited quantities only. Don&apos;t sleep on it.
        </motion.span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
