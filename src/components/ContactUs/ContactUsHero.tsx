import { motion, type Variants } from "framer-motion";
import {Phone } from "lucide-react";
import { useState } from "react";

const backgroundImage =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80";

const ContactUsHero = () => {
  const [randomValues] = useState<
    Array<{ duration: number; delay: number; left: number; top: number }>
  >(() =>
    [...Array(12)].map(() => ({
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
    <section className='relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20'>
      {/* Background */}
      <div className='absolute inset-0'>
        <img
          src={backgroundImage}
          alt='Contact and communication'
          className='w-full h-full object-cover'
          loading='lazy'
          decoding='async'
        />
        <div className='absolute inset-0 bg-primary/60' />
        <div className='absolute inset-0 -z-20 bg-linear-to-br from-slate-50 via-background to-muted dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950' />
      </div>

      {/* Animated Particles */}
      <div className='absolute inset-0 opacity-10 dark:opacity-20 -z-10'>
        {randomValues.map((values, i) => (
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
            <Phone className='w-4 h-4 text-white dark:text-accent' />
            <span className='text-sm font-semibold text-white dark:text-accent uppercase'>
              Become a member
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div variants={itemVariants} className='space-y-4 max-w-5xl'>
          <h1 className='heading-1 text-white dark:text-white leading-tight'>
            We Are Glad To Have You Become One Of Us Today
          </h1>
          <p className='text-lg md:text-xl text-white dark:text-accent/80'>
            Becoming a member connects you to a family committed to growing in Christ together. It’s a simple step that helps you belong, serve, and thrive within a community shaped by the Word and the Spirit. Join us as we grow in faith, fellowship, and purpose
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default ContactUsHero;
