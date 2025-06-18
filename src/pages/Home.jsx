// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MovieRow from "../components/MovieRow";
import Footer from "../components/Footer";
import { trending } from "../components/data/movies";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <MovieRow title="Trending Now" movies={trending} />
      <MovieRow title="Top Picks For You" movies={trending} />
      <MovieRow title="New Releases" movies={trending} />
      <Footer />
    </>
  );
};

export default Home;    
