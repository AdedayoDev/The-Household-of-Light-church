import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

const AboutUsHero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-background to-accent/10 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-950" />
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/5 to-accent/0 dark:via-accent/10"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{ backgroundSize: "200% 200%" }}
        />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="container-responsive relative z-10 flex flex-col items-center justify-center space-y-8 text-center py-12 md:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-accent/10 rounded-full border border-primary/20 dark:border-accent/20">
            <div className="w-2 h-2 bg-primary dark:bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-primary dark:text-accent">
              Our Story & Mission
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="space-y-4 max-w-4xl">
          <h1 className="heading-1 text-foreground dark:text-white">
            About The Household of Light
          </h1>
          <p className="heading-4 text-foreground/70 dark:text-accent/90 font-light">
            Raising Men by God's Word and Spirit
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="body-lg max-w-3xl text-foreground/80 dark:text-accent/80 leading-relaxed"
        >
          We are devoted to raising men by God's Word and His Spirit. Through sound teaching, genuine
          discipleship, and the Spirit's transforming power, we help believers grow in faith, character, and
          purpose—equipped to live out Christ boldly in everyday life.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutUsHero;
