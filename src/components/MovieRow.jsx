const MovieRow = ({ title, movies }) => {
  return (
    <div className="px-6 py-4 bg-black">
      <h2 className="text-white text-lg font-semibold mb-2">{title}</h2>
      <div className="flex  no-scrollbar gap-3">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="w-[150px] sm:w-[300px] rounded overflow-hidden hover:scale-105 transition duration-300"
          >
            {movie.video ? (
              <video
                src={movie.video}
                className="w-full h-[225px] object-cover rounded"
                controls
              />
            ) : (
              <img
                src={movie.image}
                alt={movie.name}
                className="w-full h-[225px] object-cover rounded"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
