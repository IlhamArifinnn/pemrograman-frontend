import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav
      className="bg-blue-400 text-white p-4 flex flex-col sm:flex-row items-center justify-between md:justify-around sticky top-0 right-0 left-0 z-100"
      aria-label="Main Navigation"
    >
      <div className="flex items-center justify-between w-full sm:w-auto mb-2 sm:mb-0">
        <a href="#hero" className="flex items-center gap-2">
          <img src="/coronavirus.png" alt="Corona Virus" className="w-10" />
          <h1 className="text-2xl font-bold">Covid ID</h1>
        </a>
        {/* Toggle button for small screens */}
        <button
          className="sm:hidden text-white focus:outline-none mr-4"
          onClick={toogleMenu}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navigation links */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row gap-4 sm:gap-6 items-center`}
      >
        <li>
          <Link to="/" className="hover:underline">
            Global
          </Link>
        </li>
        <li>
          <Link to="/indonesia" className="hover:underline">
            Indonesia
          </Link>
        </li>
        <li>
          <Link to="/provinsi" className="hover:underline">
            Provinsi
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">
            Tentang Kami
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
