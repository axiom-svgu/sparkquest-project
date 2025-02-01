import React, { useState, useEffect, useCallback, memo, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

type AudioContextType = typeof AudioContext;

interface CRTProps {
  children: React.ReactNode;
  className?: string;
}

const CRT: React.FC<CRTProps> = memo(({ children, className = "" }) => {
  const [isPowered, setIsPowered] = useState(true);
  const [leftKnobRotation, setLeftKnobRotation] = useState(0);
  const [staticLevel, setStaticLevel] = useState(0);
  const [brightnessLevel, setBrightnessLevel] = useState(1);
  const [easterEggCount, setEasterEggCount] = useState(0);

  // Memoize handlers
  const handleLeftKnobClick = useCallback(() => {
    setLeftKnobRotation((prev) => {
      const newRotation = prev + 90;
      if (newRotation >= 720) {
        setEasterEggCount((count) => count + 1);
        return 0;
      }
      return newRotation;
    });
    setStaticLevel((prev) => (prev + 0.1) % 0.5);
  }, []);

  const handleBrightnessSlider = useCallback((index: number) => {
    setBrightnessLevel((prev) => {
      const newValue = index === 0 ? prev + 0.1 : prev - 0.1;
      return Math.min(Math.max(newValue, 0.5), 1.5);
    });
  }, []);

  const togglePower = useCallback(() => {
    setIsPowered((prev) => !prev);
  }, []);

  // Memoize sound effect creation
  const createPowerSound = useCallback(() => {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: AudioContextType })
        .webkitAudioContext;

    const audioContext = new AudioContextClass();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = "sine";
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);

    if (isPowered) {
      oscillator.frequency.setValueAtTime(100, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(
        1000,
        audioContext.currentTime + 0.1
      );
    } else {
      oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(
        100,
        audioContext.currentTime + 0.1
      );
    }

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.1);

    return audioContext;
  }, [isPowered]);

  // Optimize sound effect cleanup
  useEffect(() => {
    let isCleanedUp = false;
    const audioContext = createPowerSound();
    const cleanupTimeout = setTimeout(() => {
      if (!isCleanedUp) {
        audioContext.close();
        isCleanedUp = true;
      }
    }, 200);

    return () => {
      clearTimeout(cleanupTimeout);
      if (!isCleanedUp) {
        audioContext.close();
        isCleanedUp = true;
      }
    };
  }, [isPowered, createPowerSound]);

  // Memoize animation variants
  const screenVariants = useMemo(
    () => ({
      off: {
        opacity: 0,
        scale: 0.96,
        filter: "brightness(0)",
      },
      on: {
        opacity: 1,
        scale: 1,
        filter: `brightness(${brightnessLevel})`,
        transition: {
          duration: 0.4,
          type: "spring",
          stiffness: 200,
          damping: 20,
        },
      },
    }),
    [brightnessLevel]
  );

  const knobVariants = useMemo(
    () => ({
      hover: {
        scale: 1.1,
        transition: {
          duration: 0.2,
          type: "spring",
          stiffness: 400,
        },
      },
      tap: {
        scale: 0.95,
      },
    }),
    []
  );

  // Memoize display text
  const displayText = useMemo(() => {
    if (easterEggCount >= 3) {
      return (
        <>
          <span className="hidden sm:inline">PARTY MODE</span>
          <span className="sm:hidden">PM</span>
        </>
      );
    }
    return (
      <>
        <span className="hidden sm:inline">{`CRT-OS v${
          2 + easterEggCount
        }.0`}</span>
        <span className="sm:hidden">{`CRT v${2 + easterEggCount}`}</span>
      </>
    );
  }, [easterEggCount]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative p-8 rounded-3xl bg-gradient-to-b from-[#1a1a1a] to-[#000000] shadow-[inset_0_0_0_8px_#1a1a1a,inset_0_0_0_10px_#000000,0_5px_25px_rgba(0,0,0,0.7)] transform perspective-[1000px] rotate-x-1 will-change-transform ${className}`}
    >
      <AnimatePresence>
        <motion.div
          variants={screenVariants}
          initial="off"
          animate={isPowered ? "on" : "off"}
          className={`relative rounded-[20px] perspective-[1000px] preserve-3d h-full will-change-[transform,opacity] ${
            !isPowered ? "animate-[turnOff_0.2s_ease-out_forwards]" : ""
          }`}
        >
          <div className="relative overflow-hidden rounded-[15px] h-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: isPowered ? 1 : 0,
                filter: `brightness(${brightnessLevel}) blur(${staticLevel}px)`,
              }}
              transition={{ delay: 0.2 }}
              className="relative z-10 h-full"
            >
              {children}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* TV Control Panel */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-16 bg-[#1a1a1a] rounded-b-3xl flex items-center justify-between px-8"
      >
        {/* Left side controls */}
        <div className="flex items-center space-x-4">
          <motion.div
            variants={knobVariants}
            whileHover="hover"
            whileTap="tap"
            animate={{ rotate: leftKnobRotation }}
            onClick={handleLeftKnobClick}
            className="w-8 h-8 bg-[#333] rounded-full border-2 border-[#222] shadow-inner cursor-pointer transform origin-center"
          >
            <div className="w-1 h-4 bg-[#666] mx-auto mt-1.5" />
          </motion.div>
        </div>

        {/* Center display */}
        <motion.div
          animate={{
            boxShadow: isPowered
              ? ["0 0 5px #00ff00", "0 0 10px #00ff00"]
              : "none",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="bg-[#001100] px-4 py-1 rounded font-mono text-[#00ff00] text-xs tracking-wider"
        >
          <motion.span
            animate={{
              opacity: isPowered ? [1, 0.5, 1] : 0.2,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            {displayText}
          </motion.span>
        </motion.div>

        {/* Right side controls */}
        <div className="flex items-center space-x-4">
          <div className="flex flex-col space-y-2">
            {[0, 1].map((index) => (
              <motion.div
                key={index}
                variants={knobVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => handleBrightnessSlider(index)}
                className="w-6 h-2 bg-[#333] rounded-sm cursor-pointer"
              />
            ))}
          </div>
          {/* Power button and LED */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePower}
            animate={{
              rotate: isPowered ? [0, 5, -5, 0] : 0,
            }}
            transition={{
              duration: 0.5,
              repeat: isPowered ? Infinity : 0,
              repeatDelay: 5,
            }}
            className="w-4 h-4 bg-[#333] rounded-full border-2 border-[#222] shadow-md cursor-pointer"
          />
          <motion.div
            animate={{
              opacity: isPowered ? [1, 0.5] : 0.2,
              boxShadow: isPowered
                ? ["0 0 5px #00ff00", "0 0 10px #00ff00"]
                : "none",
              scale: isPowered ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-2 h-2 bg-[#00ff00] rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
});

CRT.displayName = "CRT";

export default CRT;
