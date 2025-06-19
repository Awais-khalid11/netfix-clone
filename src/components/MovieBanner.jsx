const MovieBanner = () => {
    return (
        <section className="relative h-[90vh] w-full text-white">
            {/* Background Video */}
            <video
                src="/assets/movie2.mp4"
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                autoPlay
                muted
                loop
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0"></div>

            {/* Content */}
            <div className="relative z-10 px-10 pt-36 max-w-2xl space-y-6">
                <h1 className="text-5xl font-extrabold leading-tight drop-shadow-xl">
                    MANIFEST
                </h1>
                <p className="text-base text-gray-200 drop-shadow-md">
                    Manifesting for 5 years then get to back to real life some sort of shocking.        </p>
                <div className="flex gap-4">
                    <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition"><b>▷  Play</b></button>
                    <button className="bg-gray-700 bg-opacity-70 px-6 py-2 rounded-md hover:bg-opacity-50 transition"><b>ⓘ More Info</b></button>
                </div>
            </div>
        </section>
    );
};


export default MovieBanner;