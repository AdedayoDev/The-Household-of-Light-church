import { type FC } from "react";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface LeadPastorProps {
  wrapperClassName?: string;
  titleClassName?: string;
  textClassName?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 70, damping: 20 },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 70, damping: 20 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const LeadPastor: FC<LeadPastorProps> = ({
  wrapperClassName = "",
  textClassName = "",
  titleClassName = "",
}) => {
  return (
    <section className={`relative w-full py-16 md:py-24 overflow-hidden ${wrapperClassName}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="container-responsive grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: false }}
      >
        {/* Image */}
        <motion.div variants={imageVariants} className="relative group order-2 md:order-1">
          {/* Glow Effect */}
          <motion.div
            className="absolute -inset-6 bg-linear-to-br from-primary via-accent to-primary rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-300 -z-10"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Image Container */}
          <div className="relative rounded-2xl border border-border dark:border-primary/20 overflow-hidden shadow-lg dark:shadow-primary/10 hover:shadow-xl dark:hover:shadow-primary/20 transition-shadow">
            <img
              src="/leadPastor.svg"
              alt="Lead Pastor"
              className="w-full h-auto object-cover"
            />
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className={`space-y-6 order-1 md:order-2 ${textClassName}`}
          variants={textVariants}
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 dark:bg-accent/10 rounded-full border border-primary/20 dark:border-accent/20">
              <span className="w-2 h-2 bg-primary dark:bg-accent rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-primary dark:text-accent uppercase">
                Meet our leader
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className={`heading-2 text-foreground dark:text-white ${titleClassName}`}
          >
            Our Lead Pastor
          </motion.h2>

          {/* Description */}
          <motion.div className="space-y-4" variants={containerVariants}>
            <motion.p variants={itemVariants} className="body-lg text-foreground/70 dark:text-accent/80">
              Pastor Ipaye Isaac is a passionate minister of the Gospel, deeply committed to unveiling
              the revelation of Christ in His fullness. With a burning desire to see believers grow beyond
              religion into true spiritual understanding, Pastor Isaac teaches with simplicity, accuracy, and the power of the Holy Spirit.
            </motion.p>

            <motion.p variants={itemVariants} className="body-lg text-foreground/70 dark:text-accent/80">
              His mission is to raise believers into the full stature and likeness of Christ, helping
              them understand God's completed work and walk in the victory that is theirs in Jesus.
            </motion.p>
          </motion.div>

          {/* Key Points */}
          <motion.div variants={containerVariants} className="space-y-3 pt-2">
            {[
              "Teaching with simplicity and clarity",
              "Raising believers in spiritual maturity",
              "Unveiling the full revelation of Christ",
            ].map((point) => (
              <motion.div
                key={point}
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-linear-to-r from-primary to-accent shrink-0" />
                <span className="body-base text-foreground/80 dark:text-accent/80">
                  {point}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="pt-4">
            <Button className="btn-primary gap-2 group">
              Learn More About Pastor
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LeadPastor;
