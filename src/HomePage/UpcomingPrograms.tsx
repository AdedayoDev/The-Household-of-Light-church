

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

/* ---------------------------------
   Animation Variants
---------------------------------- */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const textBlockVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 16,
      delay: 0.5, // 👈 after text settles
    },
  },
};

const buttonHover = {
  scale: 1.05,
  y: -3,
  transition: {
    type: "spring",
    stiffness: 300,
  },
} as const;

/* ---------------------------------
   Component
---------------------------------- */

const UpcomingPrograms = () => {
  return (
    <section className="w-full py-20">
      <motion.div
        className="flex items-center justify-between gap-12 w-10/12 mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }} // 👈 replay on scroll in/out
      >
        {/* Text Content */}
        <motion.div
          className="space-y-6 w-[592px]"
          variants={textBlockVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="uppercase font-bold text-3xl text-transparent bg-linear-to-tl from-purple-600 to-black bg-clip-text"
          >
            upcoming special event
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-justify text-xl text-black/70"
          >
            Join us for a powerful special meeting designed to stir your faith,
            deepen your understanding of Christ, and position you for divine
            alignment. It will be a time of worship, teaching, and
            impartation—an atmosphere where the Spirit of God brings clarity,
            strength, and transformation. Come expectant. Come ready. Something
            is about to shift in your life.
          </motion.p>

          <motion.div
            variants={buttonVariants}
            whileHover={buttonHover}
            whileTap={{ scale: 0.96 }}
          >
            <Button variant="church" className="px-8 py-6 text-lg">
              Register Now
            </Button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={imageVariants}
        >
          <img
            src="upcoming-event.svg"
            alt="Upcoming Event"
            className="w-[358px] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default UpcomingPrograms;
