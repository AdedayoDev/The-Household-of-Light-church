import { Button } from "@/components/ui/button";

const PartnerHero = () => {
  return (
    <div
      className="h-[90vh] w-full bg-slate-400 
        flex items-center justify-center"
    >
      <div className="w-10/12 mx-auto flex flex-col items-center justify-center gap-6 text-center">
        <Button className="bg-transparent uppercase text-white border-2 border-white">
          give
        </Button>

        <h2 className="font-semibold text-6xl text-white/90">
          Your Giving Fuels Our Mission
        </h2>

        <p className="font-medium text-xl w-9/12 mx-auto text-white/90">
          Your generosity helps us take the message of Christ farther and touch
          more lives. Every gift supports the teaching of the Word, outreach
          efforts, evangelism, and the growth of our ministry. Through your
          giving, you become a vital part of what God is doing—impacting lives,
          strengthening believers, and advancing the gospel. Thank you for
          partnering with us.
        </p>
         <Button className=" capitalize bg-white text-primary px-6 py-2">
          give now
        </Button>
      </div>
    </div>
  );
};

export default PartnerHero;
