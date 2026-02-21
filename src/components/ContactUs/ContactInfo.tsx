import { motion, type Variants } from "framer-motion";
import { Mail, MapPin, Phone, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactInfo = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const contacts = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["Main: (234) 813-662 1545", "Prayer Line: (234) 813-662 1545"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["General: thehouseholdoflight@gmail.com", "Prayer: thehouseholdoflight@gmail.com"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Kings International Primary School", "Adunin Ogbomoso"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      title: "Service Times",
      details: ["Sunday: 9:00 AM & 11:00 AM", "Tuesday: 5:00 PM, Friday: 5:00 PM"],
      color: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-white dark:bg-slate-900/50">
      {/* Background */}
      <div className="absolute inset-0 -z-20" />

      <motion.div
        className="w-10/12 mx-auto flex flex-col items-center justify-center space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center space-y-4 max-w-2xl">
          <h2 className="heading-2 heading-gradient dark:text-white">
            Contact Information
          </h2>
          <p className="body-lg text-gray-600 dark:text-accent/80">
            Reach out to us through any of these channels. We're always happy to connect with you.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div variants={containerVariants} className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={contact.title}
                variants={itemVariants}
                className="group p-6 md:p-8 rounded-xl border border-border dark:border-primary/20 bg-background dark:bg-slate-900/50 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`p-4 bg-gradient-to-br ${contact.color} w-fit rounded-lg shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="heading-4 text-foreground dark:text-white">
                      {contact.title}
                    </h3>
                    {contact.details.map((detail, i) => (
                      <p key={i} className="body-sm text-foreground/70 dark:text-accent/80">
                        {detail}
                      </p>
                    ))}
                  </div>

                  {/* Action */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-2 group/btn"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Reach Out
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          variants={itemVariants}
          className="w-full h-80 rounded-xl border border-border dark:border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 overflow-hidden"
        >
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00601692346036!3d40.71284097138067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27aad927a7%3A0x56b26d40af7b1d10!2sChurch!5e0!3m2!1sen!2sus!4v1234567890"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactInfo;
