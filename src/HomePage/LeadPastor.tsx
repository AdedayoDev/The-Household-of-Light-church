// ...existing code...
"use client";

import React, { type FC } from "react";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

/* Props */
interface LeadPastorProps {
  wrapperClassName?: string;
  titleClassName?: string;
  textClassName?: string;
}

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

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 70, damping: 20 },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 70, damping: 20 },
  },
};

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 16, delay: 0.6 },
  },
};

const buttonHover = {
  scale: 1.05,
  y: -4,
  transition: { type: "spring", stiffness: 300 },
} as const;

/* ---------------------------------
   Component
---------------------------------- */

const LeadPastor: FC<LeadPastorProps> = ({
  wrapperClassName = "",
  textClassName = "",
  titleClassName = "",
}) => {
  return (
    <section className={`relative w-full py-20 overflow-hidden ${wrapperClassName}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 opacity-50" />

      <motion.div
        className="relative z-10 flex items-center justify-between w-10/12 mx-auto gap-14"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: false }}
      >
        {/* Image */}
        <motion.div
          className="w-1/2 relative"
          variants={imageVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.div
            className="absolute -inset-4 bg-linear-to-r from-purple-400 to-blue-500 rounded-lg blur-2xl opacity-30"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <img
            src="leadPastor.svg"
            alt="Our Lead Pastor"
            className="relative w-[481px] h-[483px] object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Text */}
        <motion.div className={`w-1/2 space-y-10 ${textClassName}`} variants={textVariants}>
          <motion.h2
            variants={paragraphVariants}
            className={`uppercase font-semibold text-3xl text-transparent bg-clip-text bg-linear-to-r from-primary to-black ${titleClassName}`}
          >
            our lead pastor
          </motion.h2>

          <motion.div className="flex flex-col space-y-4 pr-20" variants={containerVariants}>
            <motion.p variants={paragraphVariants}>
              Pastor Ipaye Isaac is a passionate minister of the Gospel, committed to unveiling the
              revelation of Christ and raising believers into the full stature of who they are in Him.
            </motion.p>

            <motion.p variants={paragraphVariants}>
              Driven by a burning desire to see believers grow beyond religion into true spiritual
              understanding, Pastor Isaac teaches with simplicity, accuracy, and the power of the Spirit.
            </motion.p>
          </motion.div>

          {/* Button */}
          <motion.div variants={buttonVariants} whileHover={buttonHover} whileTap={{ scale: 0.96 }}>
            <Button className="px-8 py-6 text-lg bg-linear-to-r from-purple-600 to-blue-600 text-white shadow-xl hover:shadow-purple-500/50 transition-shadow duration-300 font-semibold">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LeadPastor;