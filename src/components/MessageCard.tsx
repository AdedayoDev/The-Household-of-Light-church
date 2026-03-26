import { FiDownload, FiPlay } from "react-icons/fi";
import { motion } from "framer-motion";

type MessageCardProps = {
  title: string;
  link: string;
  image?: string;
  duration?: string;
  date?: string;
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      damping: 25,
      stiffness: 120,
      duration: 0.8,
    },
  },
} as const;

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
} as const;

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 25px rgba(99, 102, 241, 0.3)",
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
} as const;

export default function MessageCard({
  title,
  link,
  image,
  duration,
  date,
}: MessageCardProps) {
  const open = () => {
    window.open(link, "_blank", "noreferrer");
  };

  const imageSrc = image && image.trim() ? image : "/bible-interpretatioin.png";

  return (
    <motion.article
      variants={cardVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.98 }}
      className='flex h-[30rem] flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm cursor-pointer'
    >
      <div className='overflow-hidden rounded-xl h-[90%]'>
        <motion.img
          src={imageSrc}
          alt={title ?? "Message cover"}
          className='h-full w-full object-cover'
          loading='lazy'
          decoding='async'
          variants={imageVariants}
          whileHover='hover'
        />
      </div>

      <div className='mt-2 flex flex-1 flex-col justify-between gap-2'>
        <div>
          <div className='flex items-center justify-between gap-2'>
            <h3 className='text-sm font-semibold text-slate-900'>{title}</h3>
            {duration ? (
              <span className='whitespace-nowrap text-sm font-semibold text-slate-600'>
                {duration}
              </span>
            ) : null}
          </div>

          <div className='mt-1 flex items-center justify-between text-sm text-slate-600'>
            <span>{date}</span>
            <motion.button
              type='button'
              onClick={open}
              className='flex items-center justify-center rounded-full bg-primary/10 px-2 py-1 text-primary transition hover:bg-primary/20'
              aria-label='Play message'
              variants={buttonVariants}
              whileHover='hover'
              whileTap='tap'
            >
              <FiPlay className='h-4 w-4' />
            </motion.button>
          </div>
        </div>

        <motion.button
          type='button'
          onClick={open}
          className='mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90'
          variants={buttonVariants}
          whileHover='hover'
          whileTap='tap'
        >
          <FiDownload className='h-4 w-4' />
          Download
        </motion.button>
      </div>
    </motion.article>
  );
}
