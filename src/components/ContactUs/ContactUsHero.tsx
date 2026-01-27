import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const ContactUsHero = () => {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-cyan-900 via-blue-900 to-indigo-900"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Floating Contact Icons */}
      <div className="absolute inset-0 opacity-20">
        {["📧", "📱", "💬", "🤝"].map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-5xl"
            animate={{
              y: [0, -100, 0],
              rotate: [0, 180, 360],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 7 + 5,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative z-10 w-10/12 mx-auto flex flex-col items-center justify-center gap-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
          <Button className="bg-white/10 backdrop-blur-md uppercase text-white border-2 border-white hover:bg-white hover:text-cyan-900 transition-all duration-300 px-8 py-6 text-lg font-semibold shadow-2xl">
            contact us
          </Button>
        </motion.div>

        <motion.h2
          className="font-bold text-6xl text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-200 to-blue-200 drop-shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
         Let’s Get In Touch
        </motion.h2>

        <motion.p
          className="font-medium text-xl w-9/12 mx-auto text-white/90 leading-relaxed drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Becoming a member connects you to a family committed to growing in Christ together. It’s a simple step that helps you belong, serve, and thrive within a community shaped by the Word and the Spirit. Join us as we grow in faith, fellowship, and purpose
        </motion.p>

      </motion.div>
    </section>
  )
}

export default ContactUsHero
