
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const CalledToPreach = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />
      
      <motion.div
        className="relative z-10 w-10/12 mx-auto grid grid-cols-3 items-start gap-10 justify-between"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
      
        <h3 className="font-medium text-4xl w-[432px]">
          called to{" "}
          <span className="text-primary uppercase font-semibold text-4xl">
            PREACH THE GOSPEL{" "}
          </span>{" "}
          with simplicity, with{" "}
          <span className="text-primary uppercase font-semibold text-4xl">
            SIGNS{" "}
          </span>
          and{" "}
          <span className="text-primary uppercase font-semibold text-4xl">
            WONDERS FOLLOWING
          </span>
        </h3>

        <p className="font-bold text-black/70 text-[22px] flex flex-col gap-4 text-justify">
          <span>
            At THOL, we are committed to knowing Christ deeply and making Him
            known across the world. Through sound teaching, vibrant worship, and
            Spirit-led gatherings, we nurture believers into spiritual maturity.
            Our services are marked by the word of God, heartfelt prayer,
            prophecy, spiritual songs, and the active ministry of the Holy
            Spirit—all anchored in the truth of God’s Word.
          </span>
          <span>
            At THOL, we are committed to knowing Christ deeply and making Him
            known across the world. Through sound teaching, vibrant worship, and
            Spirit-led gatherings, we nurture believers into spiritual maturity.
            Our services are marked by the word of God, heartfelt prayer,
            prophecy, spiritual songs, and the active ministry of the Holy
            Spirit—all anchored in the truth of God’s Word.
          </span>
        </p>

        <motion.p className="font-bold text-black/70 text-[22px] flex flex-col gap-4 text-justify">
          <span>
            We hold Scripture as our ultimate standard for doctrine, and we
            believe the greatest expression of God’s love is revealed in the
            redemptive work of Christ. By His grace, we stand blessed,
            righteous, and empowered to live out the realities of the gospel.
          </span>
          <span>
            Under Pastor Ipaye Isaac’s leadership, THOL is growing, we are
            committed to being the hands and feet of Jesus—carrying the message
            of salvation to the nations, with a vision to dispell darkness from
            the heart of men through the instrumentality of God’s word and power
          </span>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default CalledToPreach;
