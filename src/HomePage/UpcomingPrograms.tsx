import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const leftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 },
  },
};

const rightVariants: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 20, duration: 0.9 },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const UpcomingPrograms: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="w-10/12 mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Left Content */}
          <motion.div variants={leftVariants} className="space-y-8">
            {/* Heading */}
            <motion.div variants={textVariants} className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 dark:bg-primary/10 rounded-full border border-primary/30 dark:border-primary/40">
                <span className="w-2 h-2 bg-primary dark:bg-accent rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-primary dark:text-accent uppercase tracking-wider">
                  Special Event
                </span>
              </div>
              <h2 className="heading-1 heading-gradient dark:text-white leading-tight">
                Upcoming Special Meeting
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={textVariants}
              className="body-lg text-foreground/70 dark:text-accent/80 leading-relaxed max-w-lg"
            >
              Join us for a powerful special meeting designed to stir your faith, deepen your understanding of Christ, and position you for divine alignment. It will be a time of worship, teaching, and impartation—an atmosphere where the Spirit of God brings clarity, strength, and transformation.
            </motion.p>

            {/* Call to Action Text */}
            <motion.p
              variants={textVariants}
              className="text-lg font-semibold text-primary dark:text-accent italic"
            >
              Come expectant. Come ready. Something is about to shift in your life.
            </motion.p>

            {/* Button */}
            <motion.div
              variants={textVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="pt-4"
            >
              <Button className="btn-primary gap-2 px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <span>Register Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={rightVariants}
            className="relative h-72 sm:h-96 lg:h-full min-h-96 flex items-center justify-center"
          >
            {/* Decorative circle background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 dark:from-primary/10 dark:to-accent/10 rounded-3xl blur-2xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Image container */}
            <motion.div
              className="relative z-10 w-full h-full max-w-md"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl dark:shadow-primary/20">
                <img
                  src="/upcoming-event.svg"
                  alt="Upcoming Special Meeting"
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 dark:bg-accent/10 rounded-full blur-xl"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 dark:bg-primary/10 rounded-full blur-xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingPrograms;
