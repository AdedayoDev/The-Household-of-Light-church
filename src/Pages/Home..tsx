import LeadPastor from "@/HomePage/LeadPastor";
import OurServices from "@/HomePage/OurServices";
import UpcomingPrograms from "@/HomePage/UpcomingPrograms";
import Testimonials from "@/HomePage/Testimonials";
import Hero from "@/HomePage/Hero";

const Home = () => {
  return (
    <div>
     <Hero/>
      <LeadPastor />
      <OurServices />
      <UpcomingPrograms />
      <Testimonials />
    </div>
  );
};

export default Home;
