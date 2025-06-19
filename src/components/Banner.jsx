const Banner = () => {
  return (
    <section className="relative h-[85vh] w-full text-white">
      {/* Background Image */}
      <img
        src="/assets/banner.jpeg"
        alt="Banner"
        className="h-full w-full object-cover absolute top-0 left-0 -z-10"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-0"></div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 pt-24 sm:pt-40 max-w-xl space-y-4 sm:space-y-6">
        <h1 className="text-3xl sm:text-5xl font-bold leading-snug sm:leading-tight">
          Money Heist
        </h1>
        <p className="text-sm sm:text-base max-w-md text-gray-200">
          Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-fit">
          <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition cursor-pointer">
            ▷ Play
          </button>
          <button className="bg-gray-700 bg-opacity-70 px-6 py-2 rounded hover:bg-gray-900 transition cursor-pointer">
            ⓘ More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
