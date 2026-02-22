import { motion, type Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  quote: string;
  image: string;
  name: string;
  role: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "For months I struggled with confusion and spiritual fatigue, feeling disconnected from God's purpose. After attending the teachings here, everything changed. The Word became clearer, my prayer life was revived, and I finally understood my identity in Christ.",
    image: "/testimony-image-1.svg",
    name: "Adedayo John",
    role: "Member",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The ministry here has been transformative. The biblical teaching is clear, practical, and deeply rooted in Scripture. I've grown more in my faith in the last year than in the previous decade. This is truly a place where lives are changed.",
    image: "/testimony-image-1.svg",
    name: "Grace Okafor",
    role: "Member",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Coming here has restored my hope and relationship with God. The community is loving, the teaching is rich, and the atmosphere is filled with the presence of the Holy Spirit. I finally found a place where I truly belong.",
    image: "/testimony-image-1.svg",
    name: "Samuel Olaleye",
    role: "Member",
    rating: 5,
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const carouselVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

const Testimonials = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="container-responsive flex flex-col items-center justify-center space-y-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div
          variants={headerVariants}
          className="text-center space-y-4 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 dark:bg-accent/10 rounded-full border border-primary/20 dark:border-accent/20">
            <Star className="w-3 h-3 text-primary dark:text-accent fill-primary dark:fill-accent" />
            <span className="text-xs font-semibold text-primary dark:text-accent uppercase">
              Real Stories
            </span>
          </div>

          <h2 className="heading-2 text-foreground dark:text-white">
            Member Testimonies
          </h2>
          <p className="body-lg text-foreground/70 dark:text-accent/80">
            Hear from those whose lives have been transformed through faith, community, and the Word of God
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          variants={carouselVariants}
          className="w-full max-w-4xl"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="p-8 md:p-12"
                  >
                    {/* Testimonial Card */}
                    <div className="bg-linear-to-br from-background to-muted dark:from-muted dark:to-primary/10 border border-border dark:border-primary/20 rounded-2xl p-8 md:p-10 space-y-6 shadow-lg dark:shadow-primary/10">
                      {/* Quote Icon */}
                      <div className="w-12 h-12 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                        <Quote className="w-6 h-6 text-white" />
                      </div>

                      {/* Quote */}
                      <p className="text-lg md:text-xl leading-relaxed text-foreground/80 dark:text-accent/90 italic">
                        "{testimonial.quote}"
                      </p>

                      {/* Rating */}
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-primary dark:fill-accent text-primary dark:text-accent"
                          />
                        ))}
                      </div>

                      {/* Profile */}
                      <div className="flex items-center gap-4 pt-4 border-t border-border dark:border-primary/10">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary dark:border-accent shrink-0">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground dark:text-accent text-lg">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-foreground/60 dark:text-accent/60">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="h-10 w-10" />
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-border dark:bg-primary/20"
                  />
                ))}
              </div>
              <CarouselNext className="h-10 w-10" />
            </div>
          </Carousel>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={headerVariants}
          className="text-center pt-6"
        >
          <p className="body-base text-foreground/70 dark:text-accent/80 mb-4">
            Have a testimony to share? We'd love to hear your story!
          </p>
          <button className="text-primary dark:text-accent font-semibold hover:underline underline-offset-4 transition-all">
            Share Your Testimony →
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
