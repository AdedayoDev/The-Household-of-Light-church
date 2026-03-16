import { FiDownload, FiPlay } from "react-icons/fi"

type MessageCardProps = {
  title: string
  link: string
  image?: string
  duration?: string
  date?: string
}

export default function MessageCard({
  title,
  link,
  image,
  duration,
  date,
}: MessageCardProps) {
  const open = () => {
    window.open(link, "_blank", "noreferrer")
  }

  return (
    <article className="flex h-[30rem] flex-col rounded-xl border border-slate-200 bg-white p-2 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="overflow-hidden rounded-xl h-[90%]">
        <img
          src={image ?? "/bible-interpretatioin.png"}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="mt-2 flex flex-1 flex-col justify-between gap-2">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
            {duration ? (
              <span className="whitespace-nowrap text-sm font-semibold text-slate-600">
                {duration}
              </span>
            ) : null}
          </div>

          <div className="mt-1 flex items-center justify-between text-sm text-slate-600">
            <span>{date}</span>
            <button
              type="button"
              onClick={open}
              className="flex items-center justify-center rounded-full bg-primary/10 px-2 py-1 text-primary transition hover:bg-primary/20"
              aria-label="Play message"
            >
              <FiPlay className="h-4 w-4" />
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={open}
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"
        >
          <FiDownload className="h-4 w-4" />
          Download
        </button>
      </div>
    </article>
  )
}
