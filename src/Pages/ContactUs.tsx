import ContactUsAndForm from "@/components/ContactUs/ContactUsAndForm";
import { motion } from "framer-motion"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
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
      className="pb-96"
    >
      <ContactUsAndForm />
    </motion.section>
  )
}

export default ContactUs
