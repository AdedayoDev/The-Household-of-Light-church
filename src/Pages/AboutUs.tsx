import { useEffect } from "react";
import CalledToPreach from "@/AboutUs/CalledToPreach";
import DiscipleshipStructure from "@/AboutUs/DiscipleshipStructure";
import DoctrineVisonMission from "@/AboutUs/DoctrineVisonMission";
import AboutUsHero from "@/AboutUs/Hero";
import LeadPastor from "@/HomePage/LeadPastor";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#lead-pastor") {
      const pastorSection = document.getElementById("lead-pastor");

      if (pastorSection) {
        setTimeout(() => {
          pastorSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <motion.div
      variants={pageVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      className='pb-10 md:pb-72'
    >
      <AboutUsHero />
      <CalledToPreach />
      <DoctrineVisonMission />
      <DiscipleshipStructure />
      <LeadPastor showButton={false} sectionId='lead-pastor' />
    </motion.div>
  );
};

export default AboutUs;
