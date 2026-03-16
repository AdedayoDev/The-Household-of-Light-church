import { FiDownload, FiPlay } from "react-icons/fi";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", damping: 18, stiffness: 140, duration: 0.6 },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 18px 40px rgba(0,0,0,0.16)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  tap: { scale: 0.98 },
};

const buttonHover = { scale: 1.05, boxShadow: "0 8px 24px rgba(99, 102, 241, 0.35)" };
const buttonTap = { scale: 0.95 };

export default function MessageCard({ title, link, date, duration }) {
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover="hover"
      whileTap="tap"
      className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <motion.img
          src="/bible-interpretatioin.png"
          alt={`${title} hero`}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center px-4 text-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-white text-lg font-semibold drop-shadow">{title}</p>
        </motion.div>
      </div>

      <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
          <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-500">
            {duration}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">{date}</p>

          <motion.a
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Play ${title}`}
            className="w-8 h-8 border rounded-full flex items-center justify-center"
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            <FiPlay className="text-gray-700" />
          </motion.a>
        </div>

        <motion.a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 w-fit"
          whileHover={buttonHover}
          whileTap={buttonTap}
        >
          <FiDownload />
          Download
        </motion.a>
      </div>
    </motion.article>
  );
}

