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

const DiscipleshipStructure = () => {
  const levels = [
    {
      level: "01",
      title: "Foundation",
      subtitle: "Getting Started in Christ",
      description: "New believers establish their foundation in Jesus. Learn the basics of salvation, the Holy Spirit's role, and spiritual disciplines.",
      focuses: [
        "Born again experience",
        "Fundamentals of faith",
        "Bible reading habits",
        "Prayer foundation",
      ],
      icon: "🌱",
      color: "from-primary to-primary/70",
    },
    {
      level: "02",
      title: "Growth",
      subtitle: "Becoming Strong in Faith",
      description: "Believers develop spiritual maturity through consistent study, application, and community. Understand Scripture deeper and walk in victory.",
      focuses: [
        "Deep Scripture study",
        "Spiritual gifts discovery",
        "Victory over sin",
        "Christ-like character",
      ],
      icon: "🌿",
      color: "from-primary/80 to-accent",
    },
    {
      level: "03",
      title: "Multiplication",
      subtitle: "Reproducing Christ in Others",
      description: "Mature believers invest in others, serving as mentors and leaders. Equip the next generation to follow Jesus authentically.",
      focuses: [
        "Mentorship capability",
        "Leadership development",
        "Team building",
        "Kingdom impact",
      ],
      icon: "🌳",
      color: "from-accent to-accent/70",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-background dark:bg-slate-950" />

      <motion.div
        className="container-responsive flex flex-col items-center justify-center space-y-16"
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
              Spiritual Growth Path
            </span>
          </div>
          <h2 className="heading-2 text-foreground dark:text-white">
            Our Discipleship Structure
          </h2>
          <p className="body-lg text-foreground/70 dark:text-accent/80">
            Three levels of spiritual maturity and kingdom impact
          </p>
        </motion.div>

        {/* Levels */}
        <motion.div variants={containerVariants} className="w-full space-y-6 md:space-y-8">
          {levels.map((item, index) => (
            <motion.div
              key={item.level}
              variants={itemVariants}
              className="group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center"
            >
              {/* Content */}
              <div
                className={`order-2 ${
                  index % 2 === 1 ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className={`bg-linear-to-br ${item.color} p-4 rounded-lg`}>
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary dark:text-accent uppercase tracking-wider">
                        Level {item.level}
                      </p>
                      <h3 className="heading-3 text-foreground dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-primary/80 dark:text-accent/80">
                    {item.subtitle}
                  </p>

                  <p className="body-base text-foreground/70 dark:text-accent/75">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-semibold text-foreground dark:text-accent/90 uppercase">
                      Key Focus Areas
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {item.focuses.map((focus) => (
                        <li key={focus} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${item.color}`} />
                          <span className="text-sm text-foreground/60 dark:text-accent/70">
                            {focus}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Visual Level Card */}
              <div
                className={`order-1 ${
                  index % 2 === 1 ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="relative">
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${item.color} rounded-2xl opacity-5 blur-2xl`}
                  />
                  <div className="relative p-8 md:p-10 rounded-2xl border border-primary/20 dark:border-accent/20 bg-linear-to-br from-background to-muted dark:from-slate-900 dark:to-slate-800 hover:shadow-xl dark:hover:shadow-primary/10 transition-all duration-300">
                    <div className="space-y-8 text-center">
                      <div className="text-6xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                        {item.level}
                      </div>

                      <div className="space-y-3">
                        <h4 className="heading-4 text-foreground dark:text-white">
                          {item.title}
                        </h4>
                        <p className="body-sm text-foreground/60 dark:text-accent/70">
                          {item.subtitle}
                        </p>
                      </div>

                      <div className="flex items-center justify-center gap-2 text-2xl">
                        {[...Array(3)].map((_, i) => (
                          <span
                            key={i}
                            className={`opacity-${i < parseInt(item.level) ? "100" : "20"}`}
                          >
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Progression Info */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-3xl p-8 md:p-10 bg-linear-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border border-primary/20 dark:border-accent/20 rounded-xl"
        >
          <h3 className="heading-4 text-foreground dark:text-accent mb-4 text-center">
            Your Spiritual Journey
          </h3>
          <p className="body-base text-foreground/70 dark:text-accent/80 text-center">
            Each level builds upon the previous, creating a strong spiritual foundation. There's no timeline—everyone
            grows at their own pace under the Holy Spirit's guidance. We provide mentorship, community, and resources
            at every stage to help you flourish in Christ and become a multiplier of faith.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DiscipleshipStructure;
