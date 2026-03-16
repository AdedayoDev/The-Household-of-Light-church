import MessageCard from "@/components/MessageCard"

type Sermon = {
  title: string
  link: string
  image?: string
  duration?: string
  date?: string
}

type MessagesGridProps = {
  messages: Sermon[]
}

export default function MessagesGrid({ messages }: MessagesGridProps) {
  return (
    <div className="grid gap-10 px-4 py-6 sm:grid-cols-2 lg:grid-cols-3">
      {messages.map((message) => (
        <MessageCard key={message.title} {...message} />
      ))}
    </div>
  )
}
