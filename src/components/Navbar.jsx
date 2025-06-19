import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/90 to-transparent">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left Logo */}
        <img
          src="/assets/avatar.png"
          alt="Netflix"
          className="w-16 h-16 object-contain"
        />

        {/* Center Nav Links */}
        <nav className="hidden md:flex gap-4 text-white text-sm font-medium">
          <Link to="/home" className="hover:text-gray-300">Home</Link>
          <Link to="/tv-shows" className="hover:text-gray-300">TV Shows</Link>
          <Link to="/movies" className="hover:text-gray-300">Movies</Link>
          <Link to="/new&popular" className="hover:text-gray-300">New & Popular</Link>
          <Link to="/my-list" className="hover:text-gray-300">My List</Link>
        </nav>

        {/* Right Buttons */}
        <div className="hidden md:flex gap-4 items-center text-white">
          <button className="hover:text-gray-300">🔍︎</button>
          <button className="hover:text-gray-300">Kids</button>
          <button className="hover:text-gray-300">⩍</button>
          <img
            src="/assets/Logo.png"
            alt="User"
            className="w-8 h-8 rounded cursor-pointer"
          />
        </div>

        {/* Hamburger Icon for Small Screens */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-6 py-4 space-y-3 text-white text-sm font-medium">
          <Link to="/home" className="block hover:text-gray-300">Home</Link>
          <Link to="/tv-shows" className="block hover:text-gray-300">TV Shows</Link>
          <Link to="/movies" className="block hover:text-gray-300">Movies</Link>
          <Link to="/latest" className="block hover:text-gray-300">New & Popular</Link>
          <Link to="/my-list" className="block hover:text-gray-300">My List</Link>
          <hr className="border-gray-700" />
          <button className="block hover:text-gray-300">🔍︎ Search</button>
          <button className="block hover:text-gray-300">Kids</button>
          <button className="block hover:text-gray-300">⩍ Notifications</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
