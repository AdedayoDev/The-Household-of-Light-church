import { Button } from "@/components/ui/button"

const ContactUsHero = () => {
  return (
    <section>
          <div className="h-[90vh] w-full bg-slate-400 
        flex items-center justify-center">

      <div className="w-10/12 mx-auto flex flex-col items-center justify-center gap-6 text-center">
        
        <Button className="bg-transparent uppercase text-white border-2 border-white">
          contact us
        </Button>

        <h2 className="font-semibold text-6xl text-white/90">
         Let’s Get In Touch
        </h2>

        <p className="font-medium text-xl w-9/12 mx-auto text-white/90">
          Becoming a member connects you to a family committed to growing in Christ together. It’s a simple step that helps you belong, serve, and thrive within a community shaped by the Word and the Spirit. Join us as we grow in faith, fellowship, and purpose
        </p>

      </div>
    </div>
    </section>
  )
}

export default ContactUsHero
