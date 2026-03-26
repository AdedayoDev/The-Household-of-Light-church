import { useMemo, useState } from "react";
import { FiChevronRight, FiSearch } from "react-icons/fi";
import MessageHero from "@/components/MessageHero";
import MessagesGrid from "@/components/MessagesGrid";
import messages from "@/data/messages";

export default function Messages() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMessages = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return messages;

    return messages.filter((message) => {
      const normalizedTitle = message.title.toLowerCase();
      const keywords = normalizedTitle.split(/\s+/);

      return (
        normalizedTitle.includes(query) ||
        keywords.some((word) => word.includes(query))
      );
    });
  }, [searchTerm]);

  return (
    <main className='pb-16 md:pb-24'>
      <MessageHero />

      <section className='container mx-auto px-4'>
        <div className='mx-auto mt-10 max-w-4xl rounded-3xl bg-background/80 dark:bg-muted/80 border border-border dark:border-primary/20 shadow-sm backdrop-blur'>
          <div className='flex flex-col gap-6 px-6 py-8 md:px-10 md:py-10'>

            <div className='flex items-center gap-2 rounded-2xl border border-border bg-background/60 px-4 py-3 shadow-sm'>
              <FiSearch className='h-5 w-5 text-muted-foreground' />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder='Search sermons by title or keywords'
                className='flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground'
              />
              <FiChevronRight className='h-5 w-5 text-primary' />
            </div>
          </div>
        </div>

        <div className='mt-10'>
          <div className='flex items-center justify-between'>
            <h2 className='heading-3'>All Messages</h2>
            <p className='text-sm text-muted-foreground'>
              Showing {filteredMessages.length} of {messages.length} sermons
            </p>
          </div>

          <div className='mt-8'>
            <MessagesGrid messages={filteredMessages} />
          </div>
        </div>
      </section>
    </main>
  );
}
