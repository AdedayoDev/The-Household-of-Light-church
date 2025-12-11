import CalledToPreach from '@/AboutUs/CalledToPreach'
import DiscipleshipStructure from '@/AboutUs/DiscipleshipStructure'
import DoctrineVisonMission from '@/AboutUs/DoctrineVisonMission'
import AboutUsHero from '@/AboutUs/Hero'
import LeadPastor from '@/HomePage/LeadPastor'



const AboutUs = () => {
  return (
    <div>
     <AboutUsHero/>
     <CalledToPreach />
     <DoctrineVisonMission/>
     <DiscipleshipStructure/>
     <LeadPastor wrapperClassName="pb-72"/>
    </div>
  )
}

export default AboutUs
