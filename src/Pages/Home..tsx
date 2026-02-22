import LeadPastor from "@/HomePage/LeadPastor";
import OurServices from "@/HomePage/OurServices";
import UpcomingPrograms from "@/HomePage/UpcomingPrograms";
import Testimonials from "@/HomePage/Testimonials";
import Hero from "@/HomePage/Hero";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

const Home = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pb-10 md:pb-72"
    >
     <Hero/>
      <LeadPastor />
      <OurServices />
      <UpcomingPrograms />
      <Testimonials />
    </motion.div>
  );
};

export default Home;
