// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TvShows from "./pages/TvShows"
import Movie from "./pages/Movie"
import NewPopular from "./pages/NewPopular"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tv-Shows" element={<TvShows />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/new&popular" element={<NewPopular />} />

      </Routes>
    </Router>
  );
};

export default App;
