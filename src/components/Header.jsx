import React, { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Install react-icons if not already
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-20 z-50 py-3 px-3 lg:px-0">
      <div className="px-3 max-w-6xl rounded-full bg-gray-400/40 text-black dark:text-white mx-auto flex justify-between items-center h-14">
        <Link to="/">
          <img src="/logo-icon.png" className="rounded-full w-10 h-10" />
        </Link>
        {/* Desktop Menu */}
        <div className="gap-8 font-semibold hidden sm:flex">
          <Link to="/about">About Us</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blogs">Blogs</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden mt-1 mr-2">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>

        <Link
          to="/contact"
          className="px-6 py-2 font-semibold rounded-full text-white bg-black text-sm hidden sm:block"
        >
          Talk To Us
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden absolute text-sm top-20 text-center left-0 pt-2 pb-4 w-full bg-white px-3 gap-2 flex flex-col items-center z-50 shadow-md">
          <Link
            to="/about"
            className="rounded-full w-[200px] px-4 py-2 max-w-40 bg-black text-white border"
          >
            About Us
          </Link>
          <Link
            to="/projects"
            className="rounded-full w-[200px] px-4 py-2 max-w-40 bg-black text-white border"
          >
            Projects
          </Link>
          <Link
            to="/blog"
            className="rounded-full w-[200px] px-4 py-2 max-w-40 bg-black text-white border"
          >
            BlogS
          </Link>

          <Link
            to="/contact"
            className="rounded-full w-[200px] px-4 py-2 max-w-40 bg-black text-white border"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
