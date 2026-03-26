const backgroundImage =
  "https://images.unsplash.com/photo-1528630883280-6d8bbc9f0f1c?auto=format&fit=crop&w=1600&q=80";

export default function MessageHero() {
  return (
    <section className='relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20'>
      {/* Background */}
      <div className='absolute inset-0'>
        <img
          src={backgroundImage}
          alt='Open Bible'
          className='w-full h-full object-cover'
          loading='lazy'
          decoding='async'
        />
        <div className='absolute inset-0 bg-primary/60' />
      </div>

      <div className='container-responsive relative mx-auto py-12 md:py-20 text-center'>
        <div className='mx-auto max-w-3xl space-y-6'>
          <span className='inline-flex items-center justify-center rounded-full border border-white/50 px-5 py-2 text-xs font-semibold tracking-widest text-white'>
            MESSAGES
          </span>
          <h1 className='heading-2 sm:heading-1 text-white'>
            Access to 300+ powerful sermons created to guide your spiritual
            growth
          </h1>
          <p className='text-sm text-white/80 sm:text-base'>
            Stay nourished in the Word with our latest sermons. Each message is
            filled with clarity, revelation, and sound teaching to help you grow
            in the knowledge of Christ. Watch, listen, and be strengthened as
            you continue your journey in Him.
          </p>
        </div>
      </div>
    </section>
  );
}
