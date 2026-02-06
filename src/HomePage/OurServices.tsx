import React from "react";
import { motion, type Variants } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

interface Service {
  id: number;
  day: string;
  meeting: string;
  time: string;
  description: string;
  icon: React.ReactNode;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.5, type: "spring", stiffness: 100 },
  }),
};

const services: Service[] = [
  {
    id: 1,
    day: "Sunday",
    meeting: "Main Service",
    time: "9:00 AM",
    description: "Join us for our main weekly worship and teaching service",
    icon: <div className="w-12 h-12 bg-linear-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white text-xl">🙏</div>,
  },
  {
    id: 2,
    day: "Tuesday",
    meeting: "Prayer Meeting",
    time: "5:00 PM",
    description: "Experience corporate prayer and intercession for our community",
    icon: <div className="w-12 h-12 bg-linear-to-br from-accent to-primary rounded-xl flex items-center justify-center text-white text-xl">🕯️</div>,
  },
  {
    id: 3,
    day: "Friday",
    meeting: "Bible Study",
    time: "5:00 PM",
    description: "Deep dive into Scripture for spiritual growth and understanding",
    icon: <div className="w-12 h-12 bg-linear-to-br from-secondary to-primary rounded-xl flex items-center justify-center text-white text-xl">📖</div>,
  },
  {
    id: 4,
    day: "1st Tuesday",
    meeting: "Healing Service",
    time: "5:00 PM",
    description: "Experience God's healing power and miracles",
    icon: <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white text-xl">⚕️</div>,
  },
];

const OurServices: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="container-responsive flex flex-col items-center justify-center space-y-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 dark:bg-accent/10 rounded-full border border-primary/20 dark:border-accent/20"
          >
            <span className="w-2 h-2 bg-primary dark:bg-accent rounded-full" />
            <span className="text-xs font-semibold text-primary dark:text-accent uppercase">
              Our Schedule
            </span>
          </motion.div>

          <h2 className="heading-2 text-foreground dark:text-white">
            Service Times & Programs
          </h2>
          <p className="body-lg text-foreground/70 dark:text-accent/80">
            Join us for inspiring worship, prayer, and biblical teaching throughout the week
          </p>
        </div>

        {/* Service Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full p-6 rounded-xl border border-border dark:border-primary/20 bg-background dark:bg-muted hover:border-primary dark:hover:border-accent shadow-sm hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300">
                {/* Icon */}
                <div className="mb-4 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="heading-4 text-foreground dark:text-accent mb-2">
                  {service.meeting}
                </h3>

                <p className="text-sm text-foreground/60 dark:text-accent/60 mb-4">
                  {service.day}
                </p>

                {/* Time */}
                <div className="flex items-center gap-2 mb-3 text-primary dark:text-accent font-semibold">
                  <Clock className="w-4 h-4" />
                  {service.time}
                </div>

                {/* Description */}
                <p className="text-sm text-foreground/70 dark:text-accent/70">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full p-6 md:p-8 rounded-xl border border-primary/20 dark:border-accent/20 bg-primary/5 dark:bg-accent/5"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <MapPin className="w-6 h-6 text-primary dark:text-accent shrink-0" />
            <div>
              <p className="font-semibold text-foreground dark:text-accent text-lg">Our Location</p>
              <p className="text-foreground/70 dark:text-accent/70 mt-1">
                Hall 1, Kings Primary School, Aduin Area, Ogbomoso
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurServices;
