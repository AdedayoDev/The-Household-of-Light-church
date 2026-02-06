import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Sparkles } from "lucide-react";

interface Program {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  category: string;
  icon: React.ReactNode;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

const programs: Program[] = [
  {
    id: 1,
    title: "Weekly Life Group Meetings",
    date: "Every Thursday",
    time: "6:30 PM",
    description: "Connect with believers in smaller groups for fellowship, prayer, and discussion",
    category: "Fellowship",
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Youth & Young Adults",
    date: "2nd & 4th Saturdays",
    time: "3:00 PM",
    description: "Special programs designed for young believers to grow spiritually and socially",
    category: "Youth Ministry",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Children's Sunday School",
    date: "Every Sunday",
    time: "10:30 AM",
    description: "Age-appropriate biblical teaching and activities for children in our community",
    category: "Children's Ministry",
    icon: <Calendar className="w-6 h-6" />,
  },
];

const UpcomingPrograms: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl" />
      </div>

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
            <span className="text-xs font-semibold text-primary dark:text-accent uppercase">
              Coming Soon
            </span>
          </div>

          <h2 className="heading-2 text-foreground dark:text-white">
            Upcoming Programs & Events
          </h2>
          <p className="body-lg text-foreground/70 dark:text-accent/80">
            Discover our exciting programs designed to nurture your spiritual growth and strengthen community bonds
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          variants={containerVariants}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {programs.map((program) => (
            <motion.div
              key={program.id}
              variants={itemVariants}
              className="group relative overflow-hidden"
            >
              {/* Card */}
              <div className="h-full p-6 rounded-xl border border-border dark:border-primary/20 bg-background dark:bg-muted hover:border-primary dark:hover:border-accent shadow-sm hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300">
                {/* Icon with background */}
                <div className="mb-4 w-12 h-12 rounded-lg bg-linear-to-br from-primary/20 to-accent/20 dark:from-primary/30 dark:to-accent/30 flex items-center justify-center text-primary dark:text-accent group-hover:scale-110 transition-transform">
                  {program.icon}
                </div>

                {/* Category Badge */}
                <div className="inline-block mb-3 px-2 py-1 text-xs font-semibold rounded-md bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent">
                  {program.category}
                </div>

                {/* Title */}
                <h3 className="heading-4 text-foreground dark:text-accent mb-3">
                  {program.title}
                </h3>

                {/* Meta Information */}
                <div className="space-y-2 mb-4 text-sm">
                  <p className="text-foreground/60 dark:text-accent/60">
                    📅 {program.date}
                  </p>
                  <p className="text-foreground/60 dark:text-accent/60">
                    🕐 {program.time}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-foreground/70 dark:text-accent/70 mb-4">
                  {program.description}
                </p>

                {/* CTA */}
                <Button variant="ghost" className="text-primary dark:text-accent hover:bg-primary/10 dark:hover:bg-accent/10 w-full justify-start">
                  Learn More →
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="w-full text-center space-y-6 pt-6"
        >
          <p className="body-lg text-foreground/70 dark:text-accent/80 max-w-2xl mx-auto">
            Can't find what you're looking for? We have many more programs and ministries available.
          </p>
          <Button className="btn-primary gap-2">
            Explore All Programs
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default UpcomingPrograms;
