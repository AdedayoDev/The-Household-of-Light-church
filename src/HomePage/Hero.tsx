import { memo } from "react";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.2, staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.5 },
  },
};

interface ParticleType {
  x: number;
  y: number;
  duration: number;
  delay: number;
  size: number;
}

// Memoized particle component to prevent unnecessary re-renders
const Particle = memo(
  ({ particle, index }: { particle: ParticleType; index: number }) => (
    <motion.div
      key={index}
      className='absolute rounded-full bg-linear-to-br from-primary to-accent'
      animate={{
        y: [particle.y, particle.y - 100, particle.y],
        x: [particle.x, particle.x + 50, particle.x],
        opacity: [0, 0.6, 0],
      }}
      transition={{
        duration: particle.duration,
        repeat: Infinity,
        delay: particle.delay,
      }}
      style={{
        width: particle.size,
        height: particle.size,
        left: `${particle.x}%`,
        top: `${particle.y}%`,
      }}
    />
  ),
);

Particle.displayName = "Particle";

import { useState } from "react";

const backgroundImage =
  "https://images.unsplash.com/photo-1507692049790-de58290a4354?auto=format&fit=crop&w=1600&q=80";

const Hero = () => {
  // Store particles in state, generate once on mount
  const [particles] = useState<ParticleType[]>(() =>
    [...Array(15)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 2,
      size: Math.random() * 2 + 1,
    })),
  );

  return (
    <section className='relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20'>
      {/* Background */}
      <div className='absolute inset-0'>
        <img
          src={backgroundImage}
          alt='Church building'
          className='w-full h-full object-cover'
          loading='lazy'
          decoding='async'
        />
        {/* Animated Gradient Background */}
        <div className='absolute inset-0 bg-linear-to-br from-primary/20 via-background to-accent/10 dark:from-slate-900 dark:via-purple-900/30 dark:to-slate-950' />
        <motion.div
          className='absolute inset-0 bg-linear-to-r from-primary/0 via-primary/5 to-accent/0 dark:via-accent/10'
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{ backgroundSize: "200% 200%" }}
        />
      </div>

      {/* Floating Particles */}
      <div className='absolute inset-0 -z-10 opacity-20 dark:opacity-30'>
        {particles.map((particle, i) => (
          <Particle key={i} particle={particle} index={i} />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className='container-responsive relative z-10 flex flex-col items-center justify-center space-y-8 text-center py-12 md:py-20'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-accent/10 rounded-full border border-primary/20 dark:border-accent/20'>
            <div className='w-2 h-2 bg-primary dark:bg-accent rounded-full animate-pulse' />
            <span className='text-sm font-semibold text-primary dark:text-accent'>
              Welcome to our church
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className='space-y-4 max-w-4xl'>
          <h1 className='heading-1 text-foreground dark:text-white'>
            The Household of Light Church
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className='body-lg max-w-3xl text-foreground/80 dark:text-accent/80 leading-relaxed'
        >
          We are a family with the mission to raise men in the knowledge of
          Christ, leading them to a full understanding of God’s completed work
          in Him, and helping them mature into the full stature and likeness of
          Jesus Christ in all things
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={buttonVariants}
          className='flex flex-col sm:flex-row gap-4 pt-8'
        >
          <Button className='btn-primary gap-2 h-12 px-8 text-base group'>
            <Play className='w-5 h-5 group-hover:scale-110 transition-transform' />
            Watch Live Service
          </Button>
          <Button
            variant='outline'
            className='btn-outline h-12 px-8 text-base border-primary dark:border-accent'
          >
            Plan a Visit
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
