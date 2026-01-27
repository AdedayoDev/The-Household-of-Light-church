import React from "react";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaYoutube } from "react-icons/fa";

/* ---------------------------------
   Animation Variants (Typed)
---------------------------------- */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15, delay: 0.4 },
  },
};

const buttonHover = {
  scale: 1.05,
  y: -3,
  boxShadow: "0px 10px 30px rgba(0,0,0,0.25)",
  transition: { type: "spring", stiffness: 300 },
} as const;

/* ---------------------------------
   Hero Component
---------------------------------- */

const Hero = () => {
  // Generate random values for particles only once using useMemo
  const particles = React.useMemo(
    () =>
      [...Array(20)].map(() => {
        const randomX = Math.random() * 100 - 50;
        const randomDuration = Math.random() * 5 + 5;
        const randomDelay = Math.random() * 5;
        const randomLeft = Math.random() * 100;
        const randomTop = Math.random() * 100;
        return {
          randomX,
          randomDuration,
          randomDelay,
          randomLeft,
          randomTop,
        };
      }),
    []
  );

  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-purple-900 via-blue-900 to-indigo-900"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 opacity-30">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, particle.randomX, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.randomDuration,
              repeat: Infinity,
              delay: particle.randomDelay,
            }}
            style={{ left: `${particle.randomLeft}%`, top: `${particle.randomTop}%` }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 w-10/12 mx-auto flex flex-col items-center justify-center space-y-6 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h3
          variants={itemVariants}
          className="capitalize font-semibold text-5xl text-center text-white drop-shadow-2xl"
        >
          welcome to
        </motion.h3>

        <motion.h2
          variants={itemVariants}
          className="uppercase text-6xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-white via-blue-200 to-purple-200 drop-shadow-2xl"
        >
          the household of light church
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-center text-white/90 max-w-3xl text-lg leading-relaxed drop-shadow-lg"
        >
          We are a family with the mission to raise men in the knowledge of
          Christ, leading them to a full understanding of God’s completed work
          in Him, and helping them mature into the full stature and likeness of
          Jesus Christ in all things.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row gap-5 pt-6">
          <motion.div whileHover={buttonHover} whileTap={{ scale: 0.97 }}>
            <Button className="bg-white text-black flex items-center gap-2 px-8 py-7 text-lg font-semibold shadow-2xl hover:shadow-white/50 transition-shadow duration-300">
              Watch Live
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <FaYoutube className="text-red-500 text-2xl" />
              </motion.div>
            </Button>
          </motion.div>

          <motion.div whileHover={buttonHover} whileTap={{ scale: 0.97 }}>
            <Button
              variant="outline"
              className="border-2 border-white text-white bg-white/10 backdrop-blur-sm px-8 py-7 text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
            >
              Plan a Visit
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;