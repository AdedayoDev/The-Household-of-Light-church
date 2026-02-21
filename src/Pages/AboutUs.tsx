import CalledToPreach from '@/AboutUs/CalledToPreach'
import DiscipleshipStructure from '@/AboutUs/DiscipleshipStructure'
import DoctrineVisonMission from '@/AboutUs/DoctrineVisonMission'
import AboutUsHero from '@/AboutUs/Hero'
import LeadPastor from '@/HomePage/LeadPastor'
import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const AboutUs = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pb-96"
    >
     <AboutUsHero/>
     <CalledToPreach />
     <DoctrineVisonMission/>
     <DiscipleshipStructure/>
     <LeadPastor/>
    </motion.div>
  )
}

export default AboutUs
