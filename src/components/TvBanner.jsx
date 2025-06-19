const TvBanner = () => {
  return (
    <section className="relative h-[90vh] w-full text-white">
      {/* Background Video */}
      <video
        src="/assets/movie1.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0"></div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 pt-24 sm:pt-36 max-w-xl space-y-4 sm:space-y-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-snug sm:leading-tight drop-shadow-xl">
          Stranger Things
        </h1>
        <p className="text-sm sm:text-base text-gray-200 drop-shadow-md">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-fit">
          <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition text-sm sm:text-base font-semibold">
            ▷ Play
          </button>
          <button className="bg-gray-700 bg-opacity-70 px-6 py-2 rounded-md hover:bg-opacity-50 transition text-sm sm:text-base font-semibold text-white">
            ⓘ More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default TvBanner;
