import { Link } from "react-router-dom"
import MessagesGrid from "@/components/MessagesGrid"
import messages from "@/data/messages"

export default function HomepageMessages() {
  const previewMessages = messages.slice(0, 3)

  return (
    <section className="container-responsive mx-auto py-20">
      <div className="flex flex-col gap-6">
        <div className="space-y-2 text-center">
          <h2 className="heading-2">Latest Messages</h2>
          <p className="text-muted-foreground">
           Stay nourished in the Word with our latest sermon. Each message is filled with clarity, revelation, and sound teaching to help you grow in the knowledge of Christ. Watch, listen, and be strengthened as you continue your journey in Him.
          </p>
        </div>

        <MessagesGrid messages={previewMessages} />

        <div className="flex justify-center">
          <Link
            to="/messages"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary/90"
          >
            View More Messages
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
