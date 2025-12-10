import { Button } from "@/components/ui/button";
import { FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-[90vh] w-full bg-slate-400 
        flex items-center justify-center">
      <div className="w-10/12 mx-auto flex flex-col items-center justify-center space-y-5  py-20">
        <h3 className="capitalize font-semibold text-5xl text-center text-white">welcome to </h3>
        <h2 className="uppercase text-6xl font-semibold text-center text-white">the household of light church</h2>
        <p className="text-center text-white px-42">
          We are a family with the mission to raise men in the knowledge of
          Christ, leading them to a full understanding of God’s completed work
          in Him, and helping them mature into the full stature and likeness of
          Jesus Christ in all things
        </p>
        <div className="space-x-5">
          <Button className="bg-white text-black">
            watch live
            <FaYoutube className="text-red-400" />
          </Button>
          <Button className="capitalize bg-transparent border-2 ">plan a visit</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
