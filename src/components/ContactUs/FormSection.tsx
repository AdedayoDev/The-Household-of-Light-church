import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Loader2 } from "lucide-react";
import { useState } from "react";

const FormSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    phone: "",
    maritalStatus: "",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
    setFormData({
      name: "",
      email: "",
      gender: "",
      phone: "",
      maritalStatus: "",
      message: "",
    });
    setIsLoading(false);
  };

  return (
    <section className='relative w-full py-16 md:py-24 overflow-hidden bg-white dark:bg-slate-950'>
      {/* Background */}
      <div className='absolute inset-0 -z-20' />

      <motion.div
        className='w-10/12 mx-auto flex flex-col items-center justify-center space-y-12'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className='text-center space-y-4 max-w-2xl'
        >
          <h2 className='heading-2 heading-gradient dark:text-white'>
            MEMBERSHIP FORM
          </h2>
          <p className='body-lg text-gray-600 dark:text-accent/80'>
            Please fill out the form below to help us get to know you better.
            This information allows us to connect with you, support your
            spiritual growth, and welcome you fully into our church family. We
            look forward to walking with you as you grow in Christ
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          variants={itemVariants}
          className='w-full max-w-2xl p-6 md:p-8 rounded-xl border border-border dark:border-primary/20 bg-white dark:bg-slate-900/50'
        >
          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Name */}
            <motion.div variants={itemVariants} className='space-y-2'>
              <Label
                htmlFor='name'
                className='text-foreground dark:text-accent font-semibold'
              >
                Full Name
              </Label>
              <Input
                id='name'
                name='name'
                placeholder='John Doe'
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants} className='space-y-2'>
              <Label
                htmlFor='email'
                className='text-foreground dark:text-accent font-semibold'
              >
                Email Address
              </Label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='john@example.com'
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </motion.div>
           


            {/* Phone */}
            <motion.div variants={itemVariants} className='space-y-2'>
              <Label
                htmlFor='phone'
                className='text-foreground dark:text-accent font-semibold'
              >
                Phone Number
              </Label>
              <Input
                id='phone'
                name='phone'
                type='tel'
                placeholder='(123) 456-7890'
                value={formData.phone}
                onChange={handleInputChange}
              />
            </motion.div>

            {/* Gender */}
            <motion.div variants={itemVariants} className='space-y-2'>
              <Label
                htmlFor='gender'
                className='text-foreground dark:text-accent font-semibold'
              >
                Gender
              </Label>
              <Select
                value={formData.gender}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger id='subject'>
                  <SelectValue placeholder='Select a gender' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='male'>Male</SelectItem>
                  <SelectItem value='female'>Female</SelectItem> 
                </SelectContent>
              </Select> 
            </motion.div>

            {/* Marital Status */}
            <motion.div variants={itemVariants} className='space-y-2'>
              <Label
                htmlFor='maritalStatus'
                className='text-foreground dark:text-accent font-semibold'
              >
                Marital Status
              </Label>
              <Select
                value={formData.maritalStatus}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger id='maritalStatus'>
                  <SelectValue placeholder='Select a marital status ' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='single'>Single</SelectItem>
                  <SelectItem value='married'>Married</SelectItem>
                </SelectContent>
              </Select> 
            </motion.div>


            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <Button
                type='submit'
                size='lg'
                disabled={isLoading}
                className='w-full bg-linear-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg dark:from-accent dark:to-primary/80 dark:text-slate-900'
              >
                {isLoading ? (
                  <>
                    <Loader2 className='w-4 h-4 mr-2 animate-spin' />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className='w-4 h-4 mr-2' />
                    Send Message
                  </>
                )}
              </Button>
            </motion.div>

            {/* Privacy Notice */}
            <motion.p
              variants={itemVariants}
              className='text-xs text-foreground/60 dark:text-accent/70 text-center'
            >
              We'll never share your information. Check out our{" "}
              <a
                href='/privacy'
                className='text-primary dark:text-accent hover:underline'
              >
                Privacy Policy
              </a>
              .
            </motion.p>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FormSection;
