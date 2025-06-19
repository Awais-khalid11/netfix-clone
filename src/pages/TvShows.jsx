import Navbar from "../components/Navbar";
import TvBanner from "../components/TvBanner";
import MovieRow from "../components/MovieRow";
import Footer from "../components/Footer";
import { trending } from "../components/data/movies";

const Home = () => {
  return (
    <>
      <Navbar />
      <TvBanner />
      <MovieRow title="Western Tv Show " movies={trending} />
      <MovieRow title="Top Picks For You" movies={trending} />
      <MovieRow title="New Releases" movies={trending} />
      <Footer />
    </>
  );
};

export default Home;    
