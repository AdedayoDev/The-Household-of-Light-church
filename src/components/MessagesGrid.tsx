import MessageCard from "@/components/MessageCard";

type Sermon = {
  title: string;
  link: string;
  image?: string;
  duration?: string;
  date?: string;
};

type MessagesGridProps = {
  messages: Sermon[];
};

export default function MessagesGrid({ messages }: MessagesGridProps) {
  if (!messages || messages.length === 0) {
    return (
      <div className='px-4 py-6 text-center text-sm text-slate-500'>
        No messages found.
      </div>
    );
  }

  return (
    <div className='grid gap-10 md:pb-44 px-4 py-6 sm:grid-cols-2 lg:grid-cols-3'>
      {messages.map((message) => (
        <MessageCard key={message.title} {...message} />
      ))}
    </div>
  );
}
