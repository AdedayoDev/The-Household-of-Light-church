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
    <section className='relative w-full py-16 md:py-24 overflow-hidden bg-white dark:bg-slate-950/50'>
      {/* Background */}
      <div className='absolute inset-0 -z-20' />

      <motion.div
        className='w-10/12 mx-auto flex flex-col items-center justify-center space-y-12'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className='flex flex-col md:flex-row items-start gap-4 justify-center'>
          <div className=''>
            {" "}
            {/* Header */}
            <motion.div
              variants={itemVariants}
              className='text-center md:text-start space-y-4 max-w-2xl'
            >
              <div className='inline-flex gap-2 px-3 py-1 bg-primary/10 dark:bg-accent/10 rounded-full border border-primary/20 dark:border-accent/20'>
                <span className='w-2 h-2 bg-primary dark:bg-accent rounded-full animate-pulse' />
                <span className='text-xs font-normal text-primary dark:text-accent uppercase'>
                  Our Calling
                </span>
              </div>
              <p className=' text-[#00000099]/60 text-3xl  dark:text-white '>
                called to <span className='text-[#9B28B0] dark:text-accent '>
                  PREACH THE GOSPEL </span>
                with simplicity, with <span className='text-[#9B28B0]'>SIGNS </span>and <span className='text-[#9B28B0]'>WONDERS FOLLOWING</span>
              </p>
            </motion.div>
          </div>
          <div className='w-full max-w-4xl'>
            {" "}
            {/* Content Grid */}
            <motion.div
              variants={containerVariants}
              className='w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8'
            >
              {[
                {
                  points: [
                    "The Household Of Light (THOL) is a mission-driven teaching ministry founded in 2020 by Pastor Ipaye Isaac. Our vision is simple yet profound— to raise men by God’s Word and His Spirit. Through sound teaching, genuine discipleship, and the Spirit’s transforming power, we help believers grow in faith, character, and purpose—equipped to live out Christ boldly in everyday life..",
                  ],
                },
                {
                  points: [
                    "We hold Scripture as our ultimate standard for doctrine, and we believe the greatest expression of God’s love is revealed in the redemptive work of Christ. By His grace, we stand blessed, righteous, and empowered to live out the realities of the gospel.",
                  ],
                },
                {
                  points: [
                    "At THOL, we are committed to knowing Christ deeply and making Him known across the world. Through sound teaching, vibrant worship, and Spirit-led gatherings, we nurture believers into spiritual maturity. Our services are marked by the word of God, heartfelt prayer, prophecy, spiritual songs, and the active ministry of the Holy Spirit—all anchored in the truth of God’s Word.",
                  ],
                },
                {
                  points: [
                    "Under Pastor Ipaye Isaac’s leadership, THOL is growing, we are committed to being the hands and feet of Jesus—carrying the message of salvation to the nations, with a vision to dispell darkness from the heart of men through the instrumentality of God’s word and power",
                  ],
                },
              ].map((section) => (
                <motion.div
                  key={section.points[0].slice(0, 30)} // Use a portion of the first point as a key
                  variants={itemVariants}
                  className='p-6 md:p-8 rounded-xl border border-border dark:border-primary/20 bg-background dark:bg-muted hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300'
                >
                  <ul className='space-y-3'>
                    {section.points.map((point) => (
                      <li key={point} className='flex items-start gap-3'>
                        <span className='body-base text-foreground/70 dark:text-accent/80'>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CalledToPreach;
