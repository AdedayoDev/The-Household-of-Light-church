import { motion, type Variants } from "framer-motion";
import { Mail, MapPin, Phone, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const OfflineGiving = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

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

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-background dark:bg-slate-950" />

      <motion.div
        className="container-responsive flex flex-col items-center justify-center space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 dark:bg-accent/10 rounded-full border border-primary/20 dark:border-accent/20">
            <span className="w-2 h-2 bg-primary dark:bg-accent rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-primary dark:text-accent uppercase">Offline Giving</span>
          </div>
          <h2 className="heading-2 text-foreground dark:text-white">
            Other Ways to Give
          </h2>
          <p className="body-lg text-foreground/70 dark:text-accent/80">
            Support our ministry through bank transfer, check, or mail. Choose the method that works best for you.
          </p>
        </motion.div>

        {/* Giving Methods */}
        <motion.div variants={containerVariants} className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Bank Transfer */}
          <motion.div
            variants={itemVariants}
            className="p-6 md:p-8 rounded-xl border border-border dark:border-primary/20 bg-muted dark:bg-slate-900/50 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 dark:bg-accent/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary dark:text-accent" />
                </div>
                <h3 className="heading-4 text-foreground dark:text-white">ACH Bank Transfer</h3>
              </div>

              <p className="body-sm text-foreground/70 dark:text-accent/80">
                Direct transfer from your bank account. Contact us for banking details.
              </p>

              <div className="space-y-3 pt-4 border-t border-border dark:border-primary/20">
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-foreground dark:text-accent/90 uppercase">Contact Info</p>
                  <p className="body-sm text-foreground/70 dark:text-accent/80">
                    Email us at{" "}
                    <span className="font-medium text-primary dark:text-accent">giving@household-of-light.com</span>
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => handleCopy("giving@household-of-light.com", "email")}
                >
                  {copiedId === "email" ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Email
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Check by Mail */}
          <motion.div
            variants={itemVariants}
            className="p-6 md:p-8 rounded-xl border border-border dark:border-primary/20 bg-muted dark:bg-slate-900/50 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 dark:bg-accent/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary dark:text-accent" />
                </div>
                <h3 className="heading-4 text-foreground dark:text-white">Check by Mail</h3>
              </div>

              <p className="body-sm text-foreground/70 dark:text-accent/80">
                Mail your check payable to "Household of Light Church" to our address below.
              </p>

              <div className="space-y-3 pt-4 border-t border-border dark:border-primary/20 bg-linear-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 rounded-lg p-4">
                <p className="text-sm font-semibold text-foreground dark:text-accent">Mailing Address:</p>
                <div className="space-y-1 text-sm text-foreground/70 dark:text-accent/80">
                  <p>Household of Light Church</p>
                  <p>123 Grace Street</p>
                  <p>your-city, ST 12345</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-2"
                  onClick={() =>
                    handleCopy(
                      "Household of Light Church\n123 Grace Street\nyour-city, ST 12345",
                      "address"
                    )
                  }
                >
                  {copiedId === "address" ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Address
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Wire Transfer */}
          <motion.div
            variants={itemVariants}
            className="p-6 md:p-8 rounded-xl border border-border dark:border-primary/20 bg-muted dark:bg-slate-900/50 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 dark:bg-accent/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary dark:text-accent" />
                </div>
                <h3 className="heading-4 text-foreground dark:text-white">Wire Transfer</h3>
              </div>

              <p className="body-sm text-foreground/70 dark:text-accent/80">
                International or domestic wire transfer available upon request.
              </p>

              <div className="space-y-3 pt-4 border-t border-border dark:border-primary/20">
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-foreground dark:text-accent/90 uppercase">Contact</p>
                  <p className="body-sm text-foreground/70 dark:text-accent/80">
                    Call us at{" "}
                    <span className="font-medium text-primary dark:text-accent">(555) 123-4567</span>
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => handleCopy("(555) 123-4567", "phone")}
                >
                  {copiedId === "phone" ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Phone
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Stock/Securities */}
          <motion.div
            variants={itemVariants}
            className="p-6 md:p-8 rounded-xl border border-border dark:border-primary/20 bg-muted dark:bg-slate-900/50 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 dark:bg-accent/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary dark:text-accent" />
                </div>
                <h3 className="heading-4 text-foreground dark:text-white">Stock/Securities</h3>
              </div>

              <p className="body-sm text-foreground/70 dark:text-accent/80">
                Donate stocks or securities for potential tax benefits.
              </p>

              <div className="space-y-3 pt-4 border-t border-border dark:border-primary/20">
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-foreground dark:text-accent/90 uppercase">Learn More</p>
                  <p className="body-sm text-foreground/70 dark:text-accent/80">
                    Contact our development team for details.
                  </p>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Request Information
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-3xl p-8 md:p-10 bg-linear-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border border-primary/20 dark:border-accent/20 rounded-xl"
        >
          <h3 className="heading-4 text-foreground dark:text-accent mb-4">Tax-Deductible Giving</h3>
          <p className="body-base text-foreground/70 dark:text-accent/80 mb-4">
            Household of Light Church is a 501(c)(3) nonprofit organization. Your donations are tax-deductible to the
            extent allowed by law. You will receive a tax receipt for your contribution.
          </p>
          <p className="body-sm text-foreground/60 dark:text-accent/70">
            Tax ID: XX-XXXXXXX | Speak with your tax professional for detailed guidance.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OfflineGiving;
