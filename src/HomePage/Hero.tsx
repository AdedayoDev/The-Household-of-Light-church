import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaYoutube } from "react-icons/fa";

/* ---------------------------------
   Animation Variants (Typed)
---------------------------------- */

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
    },
  },
};

const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      delay: 0.4,
    },
  },
};

const buttonHover = {
  scale: 1.05,
  y: -3,
  boxShadow: "0px 10px 30px rgba(0,0,0,0.25)",
  transition: {
    type: "spring",
    stiffness: 300,
  },
} as const;

/* ---------------------------------
   Hero Component
---------------------------------- */

const Hero = () => {
  return (
    <section className="h-[90vh] w-full bg-slate-400 flex items-center justify-center overflow-hidden">
      <motion.div
        className="w-10/12 mx-auto flex flex-col items-center justify-center space-y-6 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h3
          variants={itemVariants}
          className="capitalize font-semibold text-5xl text-center text-white"
        >
          welcome to
        </motion.h3>

        <motion.h2
          variants={itemVariants}
          className="uppercase text-6xl font-semibold text-center text-white"
        >
          the household of light church
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-center text-white max-w-3xl"
        >
          We are a family with the mission to raise men in the knowledge of
          Christ, leading them to a full understanding of God’s completed work
          in Him, and helping them mature into the full stature and likeness of
          Jesus Christ in all things.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={buttonVariants}
          className="flex flex-col sm:flex-row gap-5 pt-6"
        >
          <motion.div whileHover={buttonHover} whileTap={{ scale: 0.97 }}>
            <Button className="bg-white text-black flex items-center gap-2 px-6 py-6 text-lg">
              Watch Live
              <FaYoutube className="text-red-500 text-xl" />
            </Button>
          </motion.div>

          <motion.div whileHover={buttonHover} whileTap={{ scale: 0.97 }}>
            <Button
              variant="outline"
              className="border-white text-white bg-transparent px-6 py-6 text-lg hover:bg-white hover:text-black transition-colors"
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
