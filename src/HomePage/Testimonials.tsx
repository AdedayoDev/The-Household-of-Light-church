import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialItems {
  id: number;
  quote: string;
  image: string;
  name: string;
}

const Items: TestimonialItems[] = [
  {
    id: 1,
    quote:
      "For months I struggled with confusion and spiritual fatigue, feeling disconnected from God’s purpose for my life. But after attending the teachings here, everything changed. The Word became clearer, my prayer life was revived, and I finally understood my identity in Christ.",
    image: "testimony-image-1svg.svg",
    name: "ilesanmi adedayo john",
  },
  {
    id: 2,
    quote:
      "For months I struggled with confusion and spiritual fatigue, feeling disconnected from God’s purpose for my life. But after attending the teachings here, everything changed. The Word became clearer, my prayer life was revived, and I finally understood my identity in Christ.",
    image: "testimony-image-1svg.svg",
    name: "ilesanmi adedayo john",
  },
  {
    id: 3,
    quote:
      "For months I struggled with confusion and spiritual fatigue, feeling disconnected from God’s purpose for my life. But after attending the teachings here, everything changed. The Word became clearer, my prayer life was revived, and I finally understood my identity in Christ.",
    image: "testimony-image-1svg.svg",
    name: "ilesanmi adedayo john",
  },
];

/* ---------------------------------
   Animation Variants
---------------------------------- */

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const headerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const carouselItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18,
    },
  },
};

const quoteVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const profileVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

/* ---------------------------------
   Component
---------------------------------- */

const Testimonials = () => {
  return (
    <section className="relative w-full pb-60 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-50/50 to-transparent dark:via-purple-900/20" />
      
      {/* Header */}
      <motion.div
        className="relative z-10 w-10/12 mx-auto space-y-5"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: false }}
      >
        <motion.h2
          variants={headerItemVariants}
          className="uppercase font-semibold text-4xl text-transparent bg-linear-to-tr from-primary to-black bg-clip-text text-center"
        >
          testimony
        </motion.h2>

        <motion.p
          variants={headerItemVariants}
          className="text-center text-xl text-black/70 font-medium"
        >
          Lives are being transformed through the teaching of God’s Word and the
          fellowship we share. In this space, you’ll find real stories from
          people who have experienced growth, clarity, healing, and renewed
          faith through our ministry.
        </motion.p>
      </motion.div>

      {/* Carousel */}
      <motion.div
        className="relative z-10 w-9/12 mx-auto py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.25, once: false }}
      >
        <motion.div
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-10 shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
        <Carousel>
          <CarouselContent>
            {Items.map((item) => (
              <CarouselItem key={item.id}>
                <motion.div
                  className="space-y-6"
                  variants={carouselItemVariants}
                >
                  {/* Quote */}
                  <motion.p
                    variants={quoteVariants}
                    className="italic font-medium text-2xl text-black/70 text-justify"
                  >
                    {item.quote}
                  </motion.p>

                  {/* Profile */}
                  <motion.div
                    variants={profileVariants}
                    className="flex gap-3 items-center pt-5"
                  >
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-semibold text-lg text-black/70 capitalize">
                      {item.name}
                    </p>
                  </motion.div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation (NO SHADOWS ADDED) */}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;

/**
 * Local fallback declarations to satisfy TypeScript in environments
 * where @types/react or the automatic 'react/jsx-runtime' types are not available.
 * Remove these once @types/react is installed or your tsconfig's jsx/runtime is configured.
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
declare module "react/jsx-runtime" {
  export function jsx(type: any, props?: any, key?: any): any;
  export function jsxs(type: any, props?: any, key?: any): any;
  export function jsxDEV(type: any, props?: any, key?: any): any;
}
