import { motion, type Variants } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SpreadTheGospel = () => {
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
    <section id="giving-section" className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden bg-white dark:bg-slate-950">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="w-10/12 md:w-full md:max-w-7xl md:mx-auto md:px-6 lg:px-8 mx-auto flex flex-col items-center justify-center">
        <motion.div
          className="flex flex-col items-center justify-center space-y-8 w-full max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4 w-full"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/10 rounded-full border border-primary/30 dark:border-primary/40">
              <span className="w-2 h-2 bg-primary dark:bg-accent rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-primary dark:text-accent uppercase tracking-wider">
                Partner With Us
              </span>
            </div>

            <h2 className="heading-2 heading-gradient dark:text-white leading-tight">
              Partner With Us to Spread the Gospel
            </h2>

            <div className="space-y-3 text-gray-600 dark:text-accent/80">
              <p className="body-base leading-relaxed text-sm sm:text-base">
                Your giving efforts help share the gospel and touch more lives with the message of Christ. We give with gratitude, knowing every seed supports God's work through ministry. Thank you for partnering with us.
              </p>
            </div>
          </motion.div>

          {/* Tabs for Giving Options */}
          <motion.div
            variants={itemVariants}
            className="w-full"
          >
            <Tabs defaultValue="offline" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-muted dark:bg-slate-900 p-1 rounded-lg">
                <TabsTrigger 
                  value="offline"
                  className="data-[state=active]:bg-primary dark:data-[state=active]:bg-accent data-[state=active]:text-white dark:data-[state=active]:text-slate-900 rounded-md transition-all text-xs sm:text-sm"
                >
                  Offline Giving
                </TabsTrigger>
                <TabsTrigger 
                  value="online"
                  className="data-[state=active]:bg-primary dark:data-[state=active]:bg-accent data-[state=active]:text-white dark:data-[state=active]:text-slate-900 rounded-md transition-all text-xs sm:text-sm"
                >
                  Online Giving
                </TabsTrigger>
              </TabsList>

              {/* Offline Giving Tab */}
              <TabsContent value="offline" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Policy Paragraph */}
                  <div className="space-y-3">
                    <p className="body-base text-foreground/70 dark:text-accent/80 leading-relaxed">
                      Due to CBN policy on cash deposit and movement, we encourage the use of:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex gap-2 text-sm text-foreground/70 dark:text-accent/80">
                        <span className="font-bold text-primary dark:text-accent min-w-fit">1.</span>
                        <span>Online platform via our website</span>
                      </li>
                      <li className="flex gap-2 text-sm text-foreground/70 dark:text-accent/80">
                        <span className="font-bold text-primary dark:text-accent min-w-fit">2.</span>
                        <span>Checks may also be brought through the church office</span>
                      </li>
                      <li className="flex gap-2 text-sm text-foreground/70 dark:text-accent/80">
                        <span className="font-bold text-primary dark:text-accent min-w-fit">3.</span>
                        <span>Direct debit from any bank to this account number accordingly</span>
                      </li>
                    </ul>
                  </div>

                  {/* Bank Details Section */}
                  <div className="space-y-3">
                    <p className="body-base font-semibold text-foreground dark:text-white">
                      Please see below our bank account details
                    </p>

                    {/* Bank Account Box */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-3 p-5 md:p-6 rounded-xl border border-primary/30 dark:border-accent/30 bg-primary/5 dark:bg-accent/5"
                    >
                      {/* Bank Name and Logo Row */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-primary/20 dark:border-accent/20">
                        <div className="space-y-1">
                          <p className="text-xs font-semibold text-foreground/60 dark:text-accent/60 uppercase">Bank Name</p>
                          <p className="heading-4 text-foreground dark:text-white">MoneyPoint</p>
                        </div>
                        <img 
                          src="https://moneypoint.com.ng/assets/images/moneypoint-logo.png" 
                          alt="MoneyPoint Logo"
                          className="h-12 w-auto"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>

                      {/* Account Number Row */}
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-foreground/60 dark:text-accent/60 uppercase">Account Number</p>
                        <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                          <div className="flex-1 p-3 bg-muted dark:bg-slate-800 rounded-lg border border-border dark:border-slate-700">
                            <p className="heading-4 text-foreground dark:text-white font-mono text-sm">8136621545</p>
                          </div>
                          <motion.button
                            onClick={() => handleCopy("8136621545", "account")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 rounded-lg bg-primary dark:bg-accent hover:shadow-lg transition-all"
                          >
                            {copiedId === "account" ? (
                              <Check className="w-4 h-4 text-white dark:text-slate-900" />
                            ) : (
                              <Copy className="w-4 h-4 text-white dark:text-slate-900" />
                            )}
                          </motion.button>
                        </div>
                      </div>

                      {/* Account Name Row */}
                      <div className="space-y-1 pt-3 border-t border-primary/20 dark:border-accent/20">
                        <p className="text-xs font-semibold text-foreground/60 dark:text-accent/60 uppercase">Account Name</p>
                        <p className="heading-4 text-foreground dark:text-white">House of Light Church</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </TabsContent>

              {/* Online Giving Tab */}
              <TabsContent value="online" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                  {/* PayPal Section */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="p-6 rounded-xl border border-primary/30 dark:border-accent/30 bg-primary/5 dark:bg-accent/5 flex flex-col justify-center items-center text-center space-y-3"
                  >
                    <div className="p-3 bg-primary/10 dark:bg-accent/10 rounded-full">
                      <span className="text-2xl font-bold text-primary dark:text-accent">PayPal</span>
                    </div>
                    <h3 className="heading-4 text-foreground dark:text-white">Give via PayPal</h3>
                    <p className="body-sm text-foreground/70 dark:text-accent/80 text-sm">
                      Secure and fast giving through PayPal
                    </p>
                    <button className="mt-2 px-6 py-2 bg-primary dark:bg-accent text-white dark:text-slate-900 rounded-lg font-semibold text-sm hover:shadow-lg transition-all">
                      Donate with PayPal
                    </button>
                  </motion.div>

                  {/* Credit Card Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="p-6 rounded-xl border border-primary/30 dark:border-accent/30 bg-primary/5 dark:bg-accent/5 space-y-4"
                  >
                    <h3 className="heading-4 text-foreground dark:text-white">Credit Card</h3>

                    {/* Card Preview */}
                    <motion.div
                      className="p-4 rounded-lg bg-gradient-to-br from-primary via-accent to-primary dark:from-accent dark:via-primary dark:to-accent text-white shadow-lg text-sm"
                      animate={{ rotateY: 5 }}
                    >
                      <div className="space-y-4">
                        <p className="text-xs font-semibold opacity-75">CREDIT CARD</p>
                        <p className="font-mono tracking-widest">•••• •••• •••• ••••</p>
                        <div className="flex justify-between items-end">
                          <div className="text-left">
                            <p className="text-xs opacity-75 mb-1">Card Holder</p>
                            <p className="font-semibold text-xs">YOUR NAME</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs opacity-75 mb-1">Expires</p>
                            <p className="font-semibold text-xs">MM/YY</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Form Fields */}
                    <div className="space-y-3">
                      <div>
                        <label className="text-xs font-semibold text-foreground dark:text-white block mb-1">Card Number</label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-3 py-2 rounded-lg border border-border dark:border-slate-700 bg-muted dark:bg-slate-800 text-foreground dark:text-white placeholder-foreground/40 dark:placeholder-accent/40 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-foreground dark:text-white block mb-1">Card Name</label>
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="w-full px-3 py-2 rounded-lg border border-border dark:border-slate-700 bg-muted dark:bg-slate-800 text-foreground dark:text-white placeholder-foreground/40 dark:placeholder-accent/40 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent text-sm"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-semibold text-foreground dark:text-white block mb-1">Expiration</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-3 py-2 rounded-lg border border-border dark:border-slate-700 bg-muted dark:bg-slate-800 text-foreground dark:text-white placeholder-foreground/40 dark:placeholder-accent/40 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent text-sm"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-foreground dark:text-white block mb-1">CVV</label>
                          <input
                            type="text"
                            placeholder="•••"
                            className="w-full px-3 py-2 rounded-lg border border-border dark:border-slate-700 bg-muted dark:bg-slate-800 text-foreground dark:text-white placeholder-foreground/40 dark:placeholder-accent/40 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent text-sm"
                          />
                        </div>
                      </div>
                      <button className="w-full mt-2 px-6 py-2 bg-primary dark:bg-accent text-white dark:text-slate-900 rounded-lg font-semibold text-sm hover:shadow-lg transition-all">
                        Donate Now
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpreadTheGospel;
                