import PartnerHero from "@/Partner/PartnerHero"
import SpreadTheGospel from "@/Partner/SpreadTheGospel";
import { motion } from "framer-motion"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const Partner = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <PartnerHero/>
      <SpreadTheGospel/>
    </motion.div>
  )
}

export default Partner
