const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/90 to-transparent">
      <div className="flex items-center justify-between px-6 py-4">
        <img
          src="/assets/avatar.png"
          alt="Netflix"
          className="w-18 h-18 object-contain"
        />

        <nav className="flex gap-4 text-white text-sm font-medium">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">TV Shows</a>
          <a href="#" className="hover:text-gray-300">Movies</a>
          <a href="#" className="hover:text-gray-300">Latest</a>
          <a href="#" className="hover:text-gray-300">My List</a>
        </nav>

        <div className="flex gap-4 items-center text-white">
          <button className="hover:text-gray-300">🔍︎ Search</button>
          <button className="hover:text-gray-300">Kids</button>
          <button className="hover:text-gray-300">• Notifications</button>
          <img
            src="/assets/Logo.png"
            alt="User"
            className="w-8 h-8 rounded cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
