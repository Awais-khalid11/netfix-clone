import Navbar from "../components/Navbar";
import MovieRow from "../components/MovieRow";
import Footer from "../components/Footer";
import { trending } from "../components/data/movies";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20 ">
      <MovieRow title="Movies  on Trend " movies={trending} />
      <MovieRow title="Continue Watching" movies={trending} />
      <MovieRow title="New Released" movies={trending} />
      </div>
      <Footer />
    </>
  );
};

export default Home;    
