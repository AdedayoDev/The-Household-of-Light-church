import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 16 },
  },
};

const DoctrineVisonMission = () => {
  const sections = [
    {
      title: "Our Mission",
      icon: "🎯",
      content:
        "To raise men in the knowledge of Christ, leading them to a full understanding of God's completed work in Him, and helping them mature into the full stature and likeness of Jesus Christ in all things.",
    },
    {
      title: "Our Vision",
      icon: "👁️",
      content:
        "A community of believers transformed by God's Word, living in the reality of their identity in Christ, manifesting His love, and impacting their spheres of influence with the Gospel.",
    },
    {
      title: "Our Doctrine",
      icon: "📖",
      content:
        "We believe in the authority and sufficiency of Scripture, the centrality of Christ, justification by faith, the power of the Holy Spirit, and the transforming grace of God that changes lives.",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="w-10/12 mx-auto flex flex-col items-center justify-center space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 dark:bg-accent/10 rounded-full border border-primary/20 dark:border-accent/20">
            <span className="w-2 h-2 bg-primary dark:bg-accent rounded-full" />
            <span className="text-xs font-semibold text-primary dark:text-accent uppercase">
              Foundation
            </span>
          </div>
          <h2 className="heading-2 heading-gradient dark:text-white">
            Mission, Vision & Doctrine
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {sections.map((section) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="h-full p-8 rounded-xl border border-border dark:border-primary/20 bg-background dark:bg-muted hover:border-primary dark:hover:border-accent shadow-sm hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300 space-y-4">
                {/* Icon */}
                <div className="text-5xl group-hover:scale-110 transition-transform">
                  {section.icon}
                </div>

                {/* Title */}
                <h3 className="heading-4 text-foreground dark:text-accent">
                  {section.title}
                </h3>

                {/* Content */}
                <p className="body-base text-foreground/70 dark:text-accent/80 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DoctrineVisonMission;
