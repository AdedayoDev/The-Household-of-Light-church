import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Loader2 } from "lucide-react";
import { useState } from "react";

const FormSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", subject: "general", message: "" });
    setIsLoading(false);
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
          <h2 className="heading-2 text-foreground dark:text-white">
            Send Us a Message
          </h2>
          <p className="body-lg text-foreground/70 dark:text-accent/80">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-2xl p-8 md:p-10 rounded-xl border border-border dark:border-primary/20 bg-muted dark:bg-slate-900/50"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <motion.div variants={itemVariants} className="space-y-2">
              <Label htmlFor="name" className="text-foreground dark:text-accent font-semibold">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants} className="space-y-2">
              <Label htmlFor="email" className="text-foreground dark:text-accent font-semibold">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </motion.div>

            {/* Phone */}
            <motion.div variants={itemVariants} className="space-y-2">
              <Label htmlFor="phone" className="text-foreground dark:text-accent font-semibold">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(123) 456-7890"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </motion.div>

            {/* Subject */}
            <motion.div variants={itemVariants} className="space-y-2">
              <Label htmlFor="subject" className="text-foreground dark:text-accent font-semibold">
                Subject
              </Label>
              <Select value={formData.subject} onValueChange={handleSelectChange}>
                <SelectTrigger id="subject">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="prayer">Prayer Request</SelectItem>
                  <SelectItem value="membership">Membership Question</SelectItem>
                  <SelectItem value="event">Event Inquiry</SelectItem>
                  <SelectItem value="volunteer">Volunteer Opportunity</SelectItem>
                  <SelectItem value="giving">Giving Question</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            {/* Message */}
            <motion.div variants={itemVariants} className="space-y-2">
              <Label htmlFor="message" className="text-foreground dark:text-accent font-semibold">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us what's on your mind..."
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                required
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full bg-linear-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg dark:from-accent dark:to-primary/80 dark:text-slate-900"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </motion.div>

            {/* Privacy Notice */}
            <motion.p
              variants={itemVariants}
              className="text-xs text-foreground/60 dark:text-accent/70 text-center"
            >
              We'll never share your information. Check out our{" "}
              <a href="/privacy" className="text-primary dark:text-accent hover:underline">
                Privacy Policy
              </a>
              .
            </motion.p>
          </form>
        </motion.div>

        {/* Additional Support */}
        <motion.div
          variants={containerVariants}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            {
              title: "Fast Response",
              description: "We typically respond within 24 hours.",
            },
            {
              title: "Multiple Channels",
              description: "Contact us via email, phone, or in person.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="p-6 rounded-lg bg-primary/5 dark:bg-accent/5 border border-primary/10 dark:border-accent/10 text-center"
            >
              <h4 className="heading-4 text-foreground dark:text-accent mb-2">
                {item.title}
              </h4>
              <p className="body-sm text-foreground/70 dark:text-accent/75">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FormSection;
