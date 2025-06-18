const Banner = () => {
  return (
    <section className="relative h-[85vh] w-full text-white">
      {/* Background Image */}
      <img
        src="/assets/banner.jpeg" // ✅ direct public path
        alt="Banner"
        className="h-full w-full object-cover absolute top-0 left-0 -z-10"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-0"></div>

      {/* Content */}
      <div className="relative z-10 px-8 pt-40 max-w-xl space-y-6">
        <h1 className="text-5xl font-bold leading-tight">Money Heist</h1>
        <p className="text-sm sm:text-base max-w-md text-gray-200">
          Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition cursor-pointer">▷ Play</button>
          <button className="bg-gray-700 bg-opacity-70 px-6 py-2 rounded hover:bg-gray-900  transition cursor-pointer">ⓘ More Info</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
