import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const AboutUsHero = () => {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-blue-900 via-purple-900 to-pink-900"
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
      
      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white rounded-full"
            animate={{
              y: [0, -120, 0],
              x: [0, Math.random() * 80 - 40, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
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
          <Button className="bg-white/10 backdrop-blur-md uppercase text-white border-2 border-white hover:bg-white hover:text-purple-900 transition-all duration-300 px-8 py-6 text-lg font-semibold shadow-2xl">
            about us
          </Button>
        </motion.div>

        <motion.h2
          className="font-bold text-6xl text-transparent bg-clip-text bg-linear-to-r from-white via-blue-200 to-pink-200 drop-shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Raising men by God's Word and Spirit
        </motion.h2>

        <motion.p
          className="font-medium text-xl w-9/12 mx-auto text-white/90 leading-relaxed drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          We are devoted to raising men by God's Word and His Spirit. 
          Through sound teaching, genuine discipleship, and the Spirit's transforming power, 
          we help believers grow in faith, character, and purpose—equipped to live out Christ boldly in everyday life.
        </motion.p>

      </motion.div>
    </section>
  )
}

export default AboutUsHero
