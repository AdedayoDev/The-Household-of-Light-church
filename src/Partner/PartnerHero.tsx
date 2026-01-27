import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const PartnerHero = () => {
  const [randomValues] = useState<Array<{ duration: number; delay: number; left: number; top: number }>>(() =>
    [...Array(12)].map(() => ({
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      left: Math.random() * 100,
      top: Math.random() * 100,
    }))
  );

  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-green-900 via-teal-900 to-blue-900"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />
      
      {/* Floating Money/Gift Icons Effect */}
      <div className="absolute inset-0 opacity-20">
        {randomValues.map((values, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            animate={{
              y: [0, -150, 0],
              rotate: [0, 360],
              opacity: [0, 0.6, 0],
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
          >
            💝
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative z-10 w-10/12 mx-auto flex flex-col items-center justify-center gap-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Button className="bg-white/10 backdrop-blur-md uppercase text-white border-2 border-white hover:bg-white hover:text-green-900 transition-all duration-300 px-8 py-6 text-lg font-semibold shadow-2xl">
            give
          </Button>
        </motion.div>

        <motion.h2
          className="font-bold text-6xl text-transparent bg-clip-text bg-linear-to-r from-white via-green-200 to-teal-200 drop-shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Your Giving Fuels Our Mission
        </motion.h2>

        <motion.p
          className="font-medium text-xl w-9/12 mx-auto text-white/90 leading-relaxed drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Your generosity helps us take the message of Christ farther and touch
          more lives. Every gift supports the teaching of the Word, outreach
          efforts, evangelism, and the growth of our ministry. Through your
          giving, you become a vital part of what God is doing—impacting lives,
          strengthening believers, and advancing the gospel. Thank you for
          partnering with us.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="capitalize bg-white text-green-900 hover:bg-green-50 px-10 py-7 text-xl font-bold shadow-2xl hover:shadow-white/50 transition-all duration-300">
            give now
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PartnerHero;
