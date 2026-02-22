import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, type Variants } from "framer-motion";
import { CreditCard, Heart, Shield } from "lucide-react";
import { useState } from "react";

const OnlineGiving = () => {
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("one-time");

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

  const amounts = [25, 50, 100, 250, 500];

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount.toString());
    setCustomAmount("");
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const finalAmount = customAmount || selectedAmount;

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-linear-to-b from-muted to-background dark:from-slate-900 dark:to-slate-950" />

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
            <CreditCard className="w-4 h-4 text-primary dark:text-accent" />
            <span className="text-xs font-semibold text-primary dark:text-accent uppercase">Online Giving</span>
          </div>
          <h2 className="heading-2 text-foreground dark:text-white">
            Support Our Ministry
          </h2>
          <p className="body-lg text-foreground/70 dark:text-accent/80">
            Secure, convenient, and meaningful—give online and be part of transforming lives.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div variants={containerVariants} className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Giving Form */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <h3 className="heading-3 text-foreground dark:text-white">Choose Amount</h3>

              {/* Amount Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountClick(amount)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 font-semibold ${
                      selectedAmount === amount.toString()
                        ? "border-primary dark:border-accent bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent"
                        : "border-border dark:border-primary/20 hover:border-primary/50 dark:hover:border-accent/50 text-foreground dark:text-accent"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="space-y-2">
                <Label htmlFor="custom-amount" className="text-foreground dark:text-accent text-xs sm:text-sm block">
                  Custom Amount
                </Label>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-foreground/50 dark:text-accent/50">$</span>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Enter your amount"
                    value={customAmount}
                    onChange={(e) => handleCustomAmount(e.target.value)}
                    className="text-lg"
                    min="1"
                  />
                </div>
              </div>
            </div>

            {/* Frequency Selection */}
            <div className="space-y-2">
              <Label htmlFor="frequency" className="text-foreground dark:text-accent text-xs sm:text-sm block">
                Giving Frequency
              </Label>
              <Select value={frequency} onValueChange={setFrequency}>
                <SelectTrigger id="frequency">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="one-time">One-Time Gift</SelectItem>
                  <SelectItem value="monthly">Monthly Gift</SelectItem>
                  <SelectItem value="weekly">Weekly Gift</SelectItem>
                  <SelectItem value="annual">Annual Gift</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Donor Info */}
            <div className="space-y-4 pt-4 border-t border-border dark:border-primary/20">
              <h4 className="font-semibold text-foreground dark:text-accent text-base sm:text-lg">Donor Information</h4>

              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground dark:text-accent text-xs sm:text-sm block">
                  Full Name
                </Label>
                <Input id="name" placeholder="John Doe" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground dark:text-accent text-xs sm:text-sm block">
                  Email Address
                </Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground dark:text-accent text-xs sm:text-sm block">
                  Phone Number
                </Label>
                <Input id="phone" type="tel" placeholder="(123) 456-7890" />
              </div>
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="w-full bg-linear-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg dark:text-slate-900 dark:from-accent dark:to-primary/80"
              disabled={!finalAmount}
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Give ${finalAmount || "0"} {frequency !== "one-time" && `(${frequency})`}
            </Button>
          </motion.div>

          {/* Benefits & Info */}
          <motion.div variants={containerVariants} className="space-y-6">
            {/* Why Give */}
            <motion.div
              variants={itemVariants}
              className="p-6 md:p-8 rounded-xl bg-linear-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border border-primary/20 dark:border-accent/20"
            >
              <h3 className="heading-4 text-foreground dark:text-accent mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Why Give?
              </h3>
              <ul className="space-y-3">
                {[
                  "Every dollar advances kingdom work",
                  "Support transformative programs and outreach",
                  "Invest in discipleship and spiritual growth",
                  "Impact your community and beyond",
                  "Tax-deductible giving",
                ].map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-primary to-accent shrink-0 mt-2" />
                    <span className="body-sm text-foreground/70 dark:text-accent/80">{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Security Info */}
            <motion.div
              variants={itemVariants}
              className="p-6 md:p-8 rounded-xl border border-border dark:border-primary/20 bg-background dark:bg-muted"
            >
              <h3 className="heading-4 text-foreground dark:text-accent mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Your Security
              </h3>
              <p className="body-sm text-foreground/70 dark:text-accent/80 mb-4">
                Your donation is processed securely through industry-leading payment systems. We never store your full credit card information.
              </p>
              <div className="space-y-2 text-xs text-foreground/60 dark:text-accent/70">
                <p>✓ SSL Encryption</p>
                <p>✓ PCI DSS Compliant</p>
                <p>✓ Secure Payment Gateway</p>
              </div>
            </motion.div>

            {/* Giving Options */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="heading-4 text-foreground dark:text-accent">Other Giving Methods</h3>
              <div className="space-y-3">
                {[
                  { method: "Bank Transfer", icon: "🏦" },
                  { method: "Wire Transfer", icon: "💸" },
                  { method: "Check by Mail", icon: "📮" },
                ].map((option) => (
                  <div
                    key={option.method}
                    className="p-4 rounded-lg border border-border dark:border-primary/20 hover:bg-muted dark:hover:bg-primary/5 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{option.icon}</span>
                      <p className="body-sm font-medium text-foreground dark:text-accent">{option.method}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OnlineGiving;
