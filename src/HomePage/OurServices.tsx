import React from "react";
import { motion, type Variants } from "framer-motion";

interface ServiceImage {
  id: number;
  title: string;
  image: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: "spring", stiffness: 100 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", stiffness: 100, damping: 15 },
  },
};

const services: ServiceImage[] = [
  {
    id: 1,
    title: "Sunday",
    image: "/1.sunday.png",
  },
  {
    id: 2,
    title: "Tuesday",
    image: "/2.Tuesday.png",
  },
  {
    id: 3,
    title: "Friday",
    image: "/3.Friday.png",
  },
  {
    id: 4,
    title: "HMS",
    image: "/4.HMS.png",
  },
];

const OurServices: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="w-10/12 mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Header */}
          <motion.div
            variants={headerVariants}
            className="text-center space-y-6 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/10 rounded-full border border-primary/30 dark:border-primary/40">
              <span className="w-2 h-2 bg-primary dark:bg-accent rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-primary dark:text-accent uppercase tracking-wider">
                Our Services
              </span>
            </div>

            <h2 className="heading-1 heading-gradient dark:text-white leading-tight">
              Our Services
            </h2>

            <p className="body-lg text-foreground/70 dark:text-accent/80 leading-relaxed">
              Our services are centered on worship, the Word, and spiritual growth. Each gathering helps believers understand Christ better and walk in all God has accomplished for them. Join us to experience clarity, fellowship, and transformation in His presence
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
            variants={containerVariants}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={imageVariants}
                className="group relative overflow-hidden"
              >
                {/* Image Container */}
                <div className="">
                  {/* Image */}
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
