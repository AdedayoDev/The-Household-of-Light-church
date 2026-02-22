import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { NavLink } from "react-router";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

const Footer = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // handle email here
  }

  //   copyright year
  const theDate = new Date();

  const year = theDate.getFullYear();

  return (
    <footer className='w-full  '>
      <div>
        {/* Donate */}
        <div className='md:hidden w-11/12 mx-auto mb-10'>
          <div className='bg-[#FADEFF] flex flex-col lg:flex-row items-center justify-between px-6 py-8 rounded-2xl shadow-xl gap-8'>
            <div className='w-full lg:w-9/12 mx-auto space-y-8'>
              <h2 className='upppercase font-semibold text-2xl md:text-4xl text-black text-center lg:text-left'>
                PARTNER WITH US TO SPREAD THE GOSPEL
              </h2>
              <p className='font-semibold text-lg md:text-xl text-black/70 text-center lg:text-left'>
                Your giving helps us share the gospel and touch more lives with
                the message of Christ. We give with gratitude, knowing every
                seed supports God's work through this ministry. Thank you for
                partnering with us.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button className='capitalize' variant='church'>
                  Give now
                </Button>
                <Button className='font-medium text-lg md:text-xl bg-white text-primary hover:bg-slate-100'>
                  Radio Program Partnership
                </Button>
              </div>
            </div>

            <div className='w-full lg:w-auto flex justify-center lg:justify-end'>
              <img
                src='donate.svg'
                alt='donate'
                className='w-40 h-40 md:w-auto md:h-auto'
                loading='lazy'
              />
            </div>
          </div>

          <div className='bg-primary'></div>
        </div>
      </div>

      <div className='w-full bg-primary'>
        <div className='hidden md:block w-11/12 md:w-10/12 mx-auto relative'>
          <div className='bg-[#FADEFF] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-8 rounded-2xl absolute left-1/2 -translate-x-1/2 -top-40 md:-top-48 w-[90%] md:w-[85%] lg:w-[90%] shadow-xl gap-8'>
            <div className='w-full lg:w-9/12 mx-auto space-y-8'>
              <h2 className='upppercase font-semibold text-2xl md:text-4xl text-black text-center lg:text-left'>
                PARTNER WITH US TO SPREAD THE GOSPEL
              </h2>
              <p className='font-semibold text-lg md:text-xl text-black/70 text-center lg:text-left'>
                Your giving helps us share the gospel and touch more lives with
                the message of Christ. We give with gratitude, knowing every
                seed supports God's work through this ministry. Thank you for
                partnering with us.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button className='capitalize' variant='church'>
                  Give now
                </Button>
                <Button className='font-medium text-lg md:text-xl bg-white text-primary hover:bg-slate-100'>
                  Radio Program Partnership
                </Button>
              </div>
            </div>

            <div className='w-full lg:w-auto flex justify-center lg:justify-end'>
              <img
                src='donate.svg'
                alt='donate'
                className='w-40 h-40 md:w-auto md:h-auto'
                loading='lazy'
              />
            </div>
          </div>

          <div className='bg-primary'></div>
        </div>

        {/* Mailing List */}
        <div className='w-full border-b border-white'>
          <div className='w-11/12 md:w-10/12 mx-auto pt-40 md:pt-72 py-12 md:py-16 flex flex-col items-center justify-center space-y-10'>
            <div className='space-y-5 px-4'>
              <h2 className='uppercase text-white text-semibold text-2xl md:text-4xl text-center'>
                JOIN OUR MAILING LIST
              </h2>
              <p className='font-medium text-base md:text-xl text-white/80 text-center'>
                We promise not to spam you, but send you edifying and amazing
                content regularly from The Household Of Light Church
              </p>
            </div>

            {/* form */}
            <div className='w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 mx-auto'>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-4 w-full '
                >
                  {/* EMAIL FIELD */}
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-white capitalize'>
                          Enter your Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            type='email'
                            placeholder='Enter your email'
                            {...field}
                            className='placeholder:text-white/80 text-white'
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* SUBMIT BUTTON */}
                  <Button
                    type='submit'
                    className='w-full bg-white text-primary hover:bg-slate-100'
                  >
                    Submit
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>

        {/* Our Mandate, Nav */}
        <div className='border-b border-white py-12'>
          <div className='w-11/12 md:w-10/12 mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-4'>
            {/* Our mandate */}
            <div className='text-white/80 font-semibold text-base md:text-xl w-full lg:w-5/12 space-y-4'>
              <img
                src='logo-on-footer.svg'
                alt='church logo'
                className='w-24 md:w-32'
                loading='lazy'
              />
              <h2 className='uppercase text-sm md:text-base'>our mandate</h2>
              <p className='text-sm md:text-base leading-relaxed'>
                "To raise men in the knowledge of Christ, leading them to a full
                understanding of God's completed work in Him, and helping them
                mature into the full stature and likeness of Jesus Christ in all
                things"
              </p>
            </div>

            {/* Address */}
            <div className='text-white space-y-4 text-sm md:text-base w-full sm:w-auto'>
              <p className='capitalize font-semibold'>address</p>
              <p className='flex flex-col'>
                {" "}
                <span> Hall 1, Kings Primary School,</span>{" "}
                <span> Aduin Area, Ogbomoso.</span>{" "}
              </p>
              <p className='flex flex-col'>
                {" "}
                <span>+2348136621545 </span>{" "}
                <span>thehouseholdoflight@gmail.com</span>
              </p>
            </div>

            {/* Quick links */}
            <div className='text-white flex flex-col gap-4 text-sm md:text-base w-full sm:w-auto'>
              <h2 className='text-white/80 font-semibold'>Quick Links</h2>
              <NavLink
                to='/about-us'
                className='capitalize hover:text-primary transition'
              >
                About us
              </NavLink>
              <NavLink
                to='/sermons'
                className='capitalize hover:text-primary transition'
              >
                sermons
              </NavLink>
              <NavLink
                to='/partner'
                className='capitalize hover:text-primary transition'
              >
                give
              </NavLink>
            </div>

            {/* Service times */}
            <div className='text-white flex flex-col gap-4 text-sm md:text-base w-full sm:w-auto'>
              <h2 className='capitalize text-white/80 font-semibold'>
                service times
              </h2>
              <p>Sundays: 9am</p>
              <p>Tuesdays: 5pm</p>
              <p>Firdays: 5pm</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='w-11/12 md:w-10/12 mx-auto flex flex-col sm:flex-row py-8 items-center justify-between gap-4 text-center sm:text-left'>
          <div className='capitalize font-medium text-xs md:text-base text-white'>
            &copy; Copyright {year} the household of light church all right
            reserved
          </div>

          {/* socials */}
          <div className='flex items-center justify-center gap-6'>
            <NavLink
              to=''
              className='text-2xl md:text-4xl text-white hover:text-primary/80 transition'
            >
              <FaYoutube />
            </NavLink>
            <NavLink
              to=''
              className='text-2xl md:text-4xl text-white hover:text-primary/80 transition'
            >
              <FaFacebook />
            </NavLink>
            <NavLink
              to=''
              className='text-2xl md:text-4xl text-white hover:text-primary/80 transition'
            >
              <FaInstagramSquare />
            </NavLink>
            <NavLink
              to=''
              className='text-2xl md:text-4xl text-white hover:text-primary/80 transition'
            >
              <IoLogoWhatsapp />
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
