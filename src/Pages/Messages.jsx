import { useMemo, useState } from "react";
import { FiChevronRight, FiSearch } from "react-icons/fi";
import MessageHero from "@/components/MessageHero";
import MessagesGrid from "@/components/MessagesGrid";
import messages from "@/data/messages";

const ITEMS_PER_PAGE = 50;

export default function Messages() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalPages = Math.ceil(filteredMessages.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedMessages = filteredMessages.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Reset to page 1 when search term changes
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <main className='pb-16 '>
      <MessageHero />

      <section className='container mx-auto px-4'>
        <div className='mx-auto mt-10 max-w-4xl rounded-3xl bg-background/80 dark:bg-muted/80 border border-border dark:border-primary/20 shadow-sm backdrop-blur'>
          <div className='flex flex-col gap-6 px-6 py-8 md:px-10 md:py-10'>
            <div className='flex items-center gap-2 rounded-2xl border border-border bg-background/60 px-4 py-3 shadow-sm'>
              <FiSearch className='h-5 w-5 text-muted-foreground' />
              <input
                value={searchTerm}
                onChange={handleSearchChange}
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
              Showing {startIndex + 1}-
              {Math.min(endIndex, filteredMessages.length)} of{" "}
              {filteredMessages.length} sermons
            </p>
          </div>

          <div className='mt-8'>
            <MessagesGrid messages={paginatedMessages} />
          </div>

          <div className='mt-8 md:pb-44 flex items-center justify-between'>
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className='px-4 py-2 rounded-lg border border-border bg-background text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition'
            >
              Previous
            </button>
            <p className='text-sm text-muted-foreground'>
              Page {currentPage} of {totalPages}
            </p>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className='px-4 py-2 rounded-lg border border-border bg-background text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition'
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
