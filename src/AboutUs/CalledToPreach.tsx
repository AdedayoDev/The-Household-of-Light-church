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
    transition: { duration: 0.5 },
  },
};

const CalledToPreach = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-white dark:bg-slate-950/50">
      {/* Background */}
      <div className="absolute inset-0 -z-20" />

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
            <span className="w-2 h-2 bg-primary dark:bg-accent rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-primary dark:text-accent uppercase">
              Our Calling
            </span>
          </div>
          <h2 className="heading-2 heading-gradient dark:text-white">
            Called to Preach
          </h2>
          <p className="body-lg text-gray-600 dark:text-accent/80">
            Understanding our purpose and mandate
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div variants={containerVariants} className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "The Gospel Message",
              points: [
                "Christ crucified, risen, and glorified",
                "Redemption through His finished work",
                "Salvation by grace through faith",
                "Life found in His name",
              ],
            },
            {
              title: "Our Proclamation",
              points: [
                "Clear teaching of Scripture",
                "Unveiling Christ in all of God's Word",
                "The sufficiency of Jesus Christ",
                "Transformation through the Spirit",
              ],
            },
            {
              title: "Our Focus",
              points: [
                "Men and boys discipleship",
                "Raising the next generation",
                "Building strong believers",
                "Establishing kingdom principles",
              ],
            },
            {
              title: "Our Method",
              points: [
                "Sound biblical teaching",
                "Genuine relational discipleship",
                "Practical application of Scripture",
                "Empowerment by the Holy Spirit",
              ],
            },
          ].map((section) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              className="p-6 md:p-8 rounded-xl border border-border dark:border-primary/20 bg-background dark:bg-muted hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300"
            >
              <h3 className="heading-4 text-foreground dark:text-accent mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-linear-to-r from-primary to-accent shrink-0 mt-2" />
                    <span className="body-base text-foreground/70 dark:text-accent/80">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Message */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-3xl p-8 md:p-10 bg-linear-to-br from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 border border-primary/20 dark:border-accent/20 rounded-xl text-center"
        >
          <p className="text-lg md:text-xl font-semibold text-foreground dark:text-accent">
            "We are committed to preaching Christ in His fullness, demonstrating His power, and raising
            believers who understand their authority and identity in Him—equipped to transform their
            communities and impact eternity."
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CalledToPreach;
