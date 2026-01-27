import ContactUsAndForm from "@/components/ContactUs/ContactUsAndForm"
import ContactUsHero from "@/components/ContactUs/ContactUsHero"
import { motion } from "framer-motion"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const ContactUs = () => {
  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ContactUsHero />
      <ContactUsAndForm />
    </motion.section>
  )
}

export default ContactUs
