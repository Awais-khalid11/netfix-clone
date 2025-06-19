import Navbar from "../components/Navbar";
import MovieBanner from "../components/MovieBanner";
import MovieRow from "../components/MovieRow";
import Footer from "../components/Footer";
import { trending } from "../components/data/movies";

const Home = () => {
  return (
    <>
      <Navbar />
      <MovieBanner />
      <MovieRow title="Movies  on Trend " movies={trending} />
      <MovieRow title="Continue Watching" movies={trending} />
      <MovieRow title="New Released" movies={trending} />
      <Footer />
    </>
  );
};

export default Home;    
