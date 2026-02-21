import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Heart } from "lucide-react";

interface PartnerHeroProps {
  givingRef?: React.RefObject<HTMLDivElement>;
}

const PartnerHero = ({ givingRef }: PartnerHeroProps) => {
  const [randomValues] = useState<Array<{ duration: number; delay: number; left: number; top: number }>>(() =>
    [...Array(12)].map(() => ({
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      left: Math.random() * 100,
      top: Math.random() * 100,
    }))
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative h-screen md:h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-linear-to-br from-slate-50 via-background to-muted dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950" />

      {/* Animated Particles */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 -z-10">
        {randomValues.map((values, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-linear-to-r from-primary to-accent"
            animate={{
              y: [0, -200, 0],
              x: [0, Math.sin(i) * 100, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: values.duration,
              repeat: Infinity,
              delay: values.delay,
            }}
            style={{
              left: `${values.left}%`,
              top: `${values.top}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="container-responsive relative z-10 flex flex-col items-center justify-center text-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-accent/10 rounded-full border border-primary/20 dark:border-accent/20">
            <Heart className="w-4 h-4 text-primary dark:text-accent fill-primary dark:fill-accent" />
            <span className="text-sm font-semibold text-primary dark:text-accent uppercase">
              Join Us in Ministry
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div variants={itemVariants} className="space-y-4 max-w-3xl">
          <h1 className="heading-1 text-foreground dark:text-white leading-tight">
            Partner With Us
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 dark:text-accent/80">
            Every contribution—whether financial, prayerful, or time-based—advances the kingdom of God and transforms
            lives in our community and beyond.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => givingRef?.current?.scrollIntoView({ behavior: "smooth" })}
            className="group bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl dark:bg-accent dark:hover:bg-accent/90 dark:text-slate-900"
          >
            Give Online
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            onClick={() => givingRef?.current?.scrollIntoView({ behavior: "smooth" })}
            variant="outline"
            className="group border-primary/30 dark:border-accent/30 hover:bg-primary/10 dark:hover:bg-accent/10"
          >
            Learn About Giving
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-foreground/50 dark:text-accent/50 uppercase tracking-widest">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-primary dark:border-accent rounded-full flex items-center justify-center">
            <motion.div
              className="w-1 h-2 bg-primary dark:bg-accent rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PartnerHero;
