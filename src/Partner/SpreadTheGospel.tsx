import { motion, type Variants } from "framer-motion";
import { Heart, Users, BookOpen, Megaphone, Lightbulb, Hand } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpreadTheGospel = () => {
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

  const ways = [
    {
      title: "Partner in Prayer",
      description: "Intercede for our ministry, leaders, and the communities we serve. Prayer is our greatest strength.",
      icon: Heart,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Volunteer Your Time",
      description: "Use your gifts and talents in our community outreach, events, and ministry programs.",
      icon: Hand,
      color: "from-orange-500 to-amber-500",
    },
    {
      title: "Share Your Testimony",
      description: "Tell your story of transformation. Your testimony is a powerful witness to Christ's power.",
      icon: Megaphone,
      color: "from-yellow-500 to-lime-500",
    },
    {
      title: "Invite Others",
      description: "Invite friends, family, and colleagues to experience God's love at our church.",
      icon: Users,
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Support Missions",
      description: "Partner with missionaries and mission organizations to expand God's kingdom globally.",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Mentor & Disciple",
      description: "Help others grow in faith through mentoring, small groups, and spiritual guidance.",
      icon: Lightbulb,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-linear-to-b from-background to-muted dark:from-slate-950 dark:to-slate-900/50" />

      <motion.div
        className="container-responsive flex flex-col items-center justify-center space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 dark:bg-accent/10 rounded-full border border-primary/20 dark:border-accent/20">
            <span className="w-2 h-2 bg-primary dark:bg-accent rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-primary dark:text-accent uppercase">Ways to Partner</span>
          </div>
          <h2 className="heading-2 text-foreground dark:text-white">
            Spread the Gospel
          </h2>
          <p className="body-lg text-foreground/70 dark:text-accent/80">
            Partnership isn't limited to financial giving. There are many ways to be part of God's work through Household of Light.
          </p>
        </motion.div>

        {/* Ways Grid */}
        <motion.div variants={containerVariants} className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ways.map((way) => {
            const Icon = way.icon;
            return (
              <motion.div
                key={way.title}
                variants={itemVariants}
                className="group p-6 md:p-8 rounded-xl border border-border dark:border-primary/20 bg-muted dark:bg-slate-900/50 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`p-4 bg-linear-to-br ${way.color} w-fit rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="heading-4 text-foreground dark:text-white">
                      {way.title}
                    </h3>
                    <p className="body-sm text-foreground/70 dark:text-accent/80">
                      {way.description}
                    </p>
                  </div>

                  {/* Accent Line */}
                  <div className={`h-1 w-8 bg-linear-to-r ${way.color} rounded-full`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-3xl p-8 md:p-10 bg-linear-to-r from-primary via-accent to-primary dark:from-accent dark:via-primary dark:to-accent bg-opacity-10 dark:bg-opacity-5 border border-primary/30 dark:border-accent/30 rounded-xl text-center"
        >
          <h3 className="heading-3 text-foreground dark:text-white mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="body-lg text-foreground/70 dark:text-accent/80 mb-6">
            Whether through prayer, service, or financial support—your partnership matters. Let's grow God's kingdom together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white dark:bg-accent dark:hover:bg-accent/90 dark:text-slate-900 shadow-lg"
            >
              Get Involved
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 dark:border-accent/30 hover:bg-primary/10 dark:hover:bg-accent/10"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Intentional",
              description: "Every partnership is purposeful and aligned with God's mission.",
            },
            {
              title: "Transparent",
              description: "We share how resources are used and the impact they create.",
            },
            {
              title: "Transformative",
              description: "Together, we see lives changed and communities impacted.",
            },
          ].map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="p-6 rounded-lg bg-primary/5 dark:bg-accent/5 border border-primary/10 dark:border-accent/10 text-center"
            >
              <h4 className="heading-4 text-foreground dark:text-accent mb-2">
                {value.title}
              </h4>
              <p className="body-sm text-foreground/70 dark:text-accent/75">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SpreadTheGospel;
