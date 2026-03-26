import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import { useState, memo } from "react";
import { ArrowRight, Heart } from "lucide-react";

interface PartnerHeroProps {
  givingRef?: React.RefObject<HTMLDivElement>;
}

// Memoized particle component for performance
interface ParticleProps {
  values: {
    duration: number;
    delay: number;
    left: number;
    top: number;
  };
  i: number;
}

const AnimatedParticle = memo(({ values, i }: ParticleProps) => (
  <motion.div
    key={i}
    className='absolute w-2 h-2 rounded-full bg-linear-to-r from-primary to-accent'
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
));

AnimatedParticle.displayName = "AnimatedParticle";

const backgroundImage =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80";

const PartnerHero = ({ givingRef }: PartnerHeroProps) => {
  // Use useState to store random values (only generated once)
  const [randomValues] = useState<
    Array<{ duration: number; delay: number; left: number; top: number }>
  >(() =>
    [...Array(8)].map(() => ({
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      left: Math.random() * 100,
      top: Math.random() * 100,
    })),
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
    <section className='relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 '>
      {/* Background */}
      <div className='absolute inset-0'>
        <img
          src={backgroundImage}
          alt='Partnership and giving'
          className='w-full h-full object-cover'
          loading='lazy'
          decoding='async'
        />
        <div className='absolute inset-0 bg-primary/60' />
        <div className='absolute inset-0 -z-20 bg-linear-to-br from-slate-50 via-background to-muted dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950' />
      </div>

      {/* Animated Particles */}
      <div className='absolute inset-0 opacity-10 dark:opacity-20 -z-10'>
        {randomValues.length > 0 &&
          randomValues.map((values, i) => (
            <AnimatedParticle key={i} values={values} i={i} />
          ))}
      </div>

      {/* Content */}
      <motion.div
        className='container-responsive relative z-10 flex flex-col items-center justify-center text-center space-y-8 py-12 md:py-20'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-accent/10 rounded-full border border-white dark:border-accent/20'>
            <Heart className='w-4 h-4 text-white dark:text-accent fill-white dark:fill-white' />
            <span className='text-sm font-semibold text-white dark:text-accent uppercase'>
             Give
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div variants={itemVariants} className='space-y-4 max-w-3xl'>
          <h1 className='heading-1 text-white dark:text-white leading-tight'>
             Your Giving Fuels Our Mission
          </h1>
          <p className='text-lg md:text-xl text-white/90 dark:text-accent/80'>
            Your generosity helps us take the message of Christ farther and touch more lives. Every gift supports the teaching of the Word, outreach efforts, evangelism, and the growth of our ministry. Through your giving, you become a vital part of what God is doing—impacting lives, strengthening believers, and advancing the gospel. Thank you for partnering with us.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className='flex flex-col sm:flex-row gap-4 justify-center'
        >
          <Button
            size='lg'
            onClick={() =>
              givingRef?.current?.scrollIntoView({ behavior: "smooth" })
            }
            className='group bg-white hover:bg-primary/90 text-[#9B28B091] shadow-lg hover:shadow-xl dark:bg-accent dark:hover:bg-accent/90 dark:text-slate-900'
          >
            Give Now
            <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PartnerHero;
