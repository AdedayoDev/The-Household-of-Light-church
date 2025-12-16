import type { FC } from "react";
import { motion } from "framer-motion";


// --------------------
// ANIMATION VARIANTS
// --------------------
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// --------------------
// COMPONENT
// --------------------
const DoctrineVisionMission: FC = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="w-10/12 mx-auto space-y-16">
        {/* ---------------- Top Doctrine Section ---------------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("/code-of-doctrine.svg")' }}
          />

          {/* Content */}
          <div className="relative p-10 flex justify-end items-end">
            <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-8 w-full md:w-7/12 space-y-10">
              <h2 className="uppercase text-4xl font-bold text-center bg-linear-to-r from-black to-primary bg-clip-text text-transparent tracking-wide">
                our code of doctrine
              </h2>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="list-disc flex flex-col gap-4 pl-6 text-lg text-gray-700 leading-relaxed"
              >
                {[
                  "We believe Jesus Christ is the center of God’s redemptive plan. His death, burial, and resurrection provide salvation and eternal life for all who believe.",
                  "We uphold the authority of Scripture as God’s inspired Word and final guide for faith and living.",
                  "We believe in the ministry of the Holy Spirit who empowers believers to live victorious Christian lives.",
                  "We believe in the unity of the Body of Christ and our call to love, serve, and build one another in the faith.",
                ].map((item, index) => (
                  <motion.li key={index} variants={fadeUp}>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </motion.div>

        {/* ---------------- Mission + Vision ---------------- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {/* Mission */}
          <motion.div
            variants={fadeUp}
            className="relative rounded-2xl overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("/code-of-doctrine.svg")' }}
            />

            <div className="relative p-10 flex justify-center items-center">
              <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-8 flex flex-col gap-5 text-center">
                <h2 className="uppercase text-3xl font-bold bg-linear-to-r from-black to-primary bg-clip-text text-transparent">
                  our mission
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg text-justify">
                  We are devoted to raising men by God’s Word and His Spirit.
                  Through sound teaching, genuine discipleship, and the Spirit’s
                  transforming power, we help believers grow in faith, character,
                  and purpose—equipping them to live out Christ boldly in everyday
                  life.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={fadeUp}
            className="relative rounded-2xl overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("/code-of-doctrine.svg")' }}
            />

            <div className="relative p-10 flex justify-center items-center">
              <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-8 flex flex-col gap-5 text-center">
                <h2 className="uppercase text-3xl font-bold bg-gradient-to-r from-black to-primary bg-clip-text text-transparent">
                  our vision
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg text-justify">
                  Our vision is to raise mature, Spirit-filled believers who
                  reveal Christ to the world—walking in wisdom, love, power, and
                  purposeful kingdom living that transforms families,
                  communities, and nations.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctrineVisionMission;
