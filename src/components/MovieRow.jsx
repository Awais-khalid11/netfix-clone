const MovieRow = ({ title, movies }) => {
  return (
    <div className="px-4 sm:px-6 py-6 bg-black">
      <h2 className="text-white text-xl sm:text-2xl font-semibold mb-4">{title}</h2>

      <div className="flex overflow-x-auto no-scrollbar gap-4">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[140px] sm:w-[200px] md:w-[240px] lg:w-[280px] rounded overflow-hidden hover:scale-105 transition duration-300"
          >
            {movie.video ? (
              <video
                src={movie.video}
                className="w-full h-[180px] sm:h-[200px] md:h-[240px] lg:h-[280px] object-cover rounded"
                controls
              />
            ) : (
              <img
                src={movie.image}
                alt={movie.name}
                className="w-full h-[180px] sm:h-[200px] md:h-[240px] lg:h-[280px] object-cover rounded"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
