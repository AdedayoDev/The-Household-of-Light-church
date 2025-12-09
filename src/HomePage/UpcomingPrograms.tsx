import { Button } from "@/components/ui/button";

const UpcomingPrograms = () => {
  return (
    <div className="w-full py-12">
      <div className="flex items-center  justify-between gap-10 w-10/12 mx-auto">
        <div className="space-y-6 w-[592px] ">
          <h2 className="uppercase font-bold text-3xl text-transparent bg-linear-to-tl from-purple-600 to-black bg-clip-text">upcoming special event</h2>
          <p className="text-justify text-xl text-black/70">
            Join us for a powerful special meeting designed to stir your faith,
            deepen your understanding of Christ, and position you for divine
            alignment. It will be a time of worship, teaching, and
            impartation—an atmosphere where the Spirit of God brings clarity,
            strength, and transformation. Come expectant. Come ready. Something
            is about to shift in your life.
          </p>
          <Button variant="church">Register Now</Button>
        </div>
        <div className="">
          <img src="upcoming-event.svg" alt="Upcoming Event" className="w-[358px]"/>
        </div>
      </div>
    </div>
  );
};

export default UpcomingPrograms;
