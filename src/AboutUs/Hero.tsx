import { Button } from "@/components/ui/button"

const AboutUsHero = () => {
  return (
    <div className="h-[90vh] w-full bg-slate-400 
        flex items-center justify-center">

      <div className="w-10/12 mx-auto flex flex-col items-center justify-center gap-6 text-center">
        
        <Button className="bg-transparent uppercase text-white border-2 border-white">
          about us
        </Button>

        <h2 className="font-semibold text-6xl text-white/90">
          Raising men by God’s Word and Spirit
        </h2>

        <p className="font-medium text-xl w-9/12 mx-auto text-white/90">
          We are devoted to raising men by God’s Word and His Spirit. 
          Through sound teaching, genuine discipleship, and the Spirit’s transforming power, 
          we help believers grow in faith, character, and purpose—equipped to live out Christ boldly in everyday life.
        </p>

      </div>
    </div>
  )
}

export default AboutUsHero
