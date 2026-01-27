import React from "react";
import { motion, type Variants } from "framer-motion";

interface Service {
  id: number;
  image: string;
  day: string;
  meeting: string;
  time: number;
  am_pm: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.5, type: "spring", stiffness: 100 },
  }),
};

const services: Service[] = [
  { id: 1, image: "leadPastor.svg", day: "sunday", meeting: "sunday service", time: 9, am_pm: "am" },
  { id: 2, image: "leadPastor.svg", day: "tuesday", meeting: "prayer meeting", time: 5, am_pm: "pm" },
  { id: 3, image: "leadPastor.svg", day: "friday", meeting: "bible study", time: 5, am_pm: "pm" },
  { id: 4, image: "leadPastor.svg", day: "every first tuesday", meeting: "healing & miracle service", time: 5, am_pm: "pm" },
];

const bgForId = (id: number) => {
  switch (id) {
    case 1: return "bg-fuchsia-800 text-white";
    case 2: return "bg-pink-950 text-white";
    case 3: return "bg-yellow-800 text-white";
    case 4: return "bg-slate-900 text-white";
    default: return "bg-gray-800 text-white";
  }
};

const OurServices: React.FC = () => {
  const renderMeeting = (meeting: string) =>
    meeting.split(" ").map((word, i, arr) => (
      <span key={i}>
        {word}
        {i < arr.length - 1 && <br />}
      </span>
    ));

  return (
    <div className="relative w-full py-20 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-white via-purple-50/30 to-white dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900" />

      <motion.div
        className="relative z-10 w-10/12 mx-auto flex flex-col items-center justify-center space-y-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="uppercase bg-clip-text text-5xl font-bold text-transparent bg-linear-to-r from-purple-600 to-blue-600"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ backgroundSize: "200% 200%" }}
        >
          our services
        </motion.h2>

        <motion.p
          className="font-medium text-black dark:text-slate-100 text-center px-6 text-lg max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Our services are centered on worship, the Word, and spiritual growth.
          Each gathering helps believers understand Christ better and walk in
          all God has accomplished for them. Join us to experience clarity,
          fellowship, and transformation in His presence.
        </motion.p>
      </motion.div>

      <div className="relative z-10 w-10/12 mx-auto">
        <motion.div
          className="w-full md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              className="rounded-2xl relative cursor-pointer overflow-hidden"
              custom={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, rotate: [0, -1, 1, 0], boxShadow: "0 20px 60px rgba(0,0,0,0.18)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex h-[150px]">
                <div className="w-1/2 h-full overflow-hidden">
                  <img src={item.image} alt={item.meeting} className="object-cover w-full h-full" />
                </div>

                <div className={`w-1/2 flex flex-col justify-center items-end pr-5 ${bgForId(item.id)}`}>
                  <p className={`${item.id === 4 ? "text-xs uppercase" : "text-lg uppercase"}`}>
                    {item.day}
                  </p>

                  <p className={`${item.id === 4 ? "text-2xl text-end uppercase" : "text-3xl uppercase text-end"}`}>
                    {renderMeeting(item.meeting)}
                  </p>
                </div>
              </div>

              <div
                className={`absolute top-8 -right-12 rounded-xl p-3 shadow-lg ${bgForId(item.id)}`}
                style={{ width: 72 }}
              >
                <p className="font-bold text-3xl leading-none">{item.time}</p>
                <p className="font-medium text-sm leading-none">{item.am_pm}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;