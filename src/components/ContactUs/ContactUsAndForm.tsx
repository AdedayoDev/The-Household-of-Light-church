import { motion, type Variants } from "framer-motion";
import ContactUsHero from "./ContactUsHero";
import FormSection from "./FormSection";
import ContactInfo from "./ContactInfo";

const ContactUsAndForm = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <ContactUsHero />
      <FormSection />
      <ContactInfo />
    </motion.div>
  );
};

export default ContactUsAndForm;
