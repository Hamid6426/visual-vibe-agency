import React, { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Install react-icons if not already

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-20 z-50 py-3 px-3 lg:px-0">
      <div className="px-3 max-w-6xl rounded-full bg-gray-400/40 text-black dark:text-white mx-auto flex justify-between items-center h-14">
        <a href="/">
          <img src="/logo-icon.png" className="rounded-full w-10 h-10" />
        </a>
        {/* Desktop Menu */}
        <div className="gap-8 font-semibold hidden sm:flex">
          <a href="/about">About Us</a>
          <a href="/projects">Projects</a>
          <a href="/blogs">Blogs</a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden mt-1 mr-2">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>

        <a
          href="/contact"
          className="px-6 py-2 font-semibold rounded-full text-white bg-black text-sm hidden sm:block"
        >
          Talk To Us
        </a>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden absolute text-sm top-20 text-center left-0 pt-2 pb-4 w-full bg-white px-3 gap-2 flex flex-col items-center z-50 shadow-md">
          <a
            href="/about"
            className="rounded-full w-[200px] px-4 py-2 max-w-40 bg-black text-white border"
          >
            About Us
          </a>
          <a
            href="/projects"
            className="rounded-full w-[200px] px-4 py-2 max-w-40 bg-black text-white border"
          >
            Projects
          </a>
          <a
            href="/blog"
            className="rounded-full w-[200px] px-4 py-2 max-w-40 bg-black text-white border"
          >
            BlogS
          </a>

          <a
            href="/contact"
            className="rounded-full w-[200px] px-4 py-2 max-w-40 bg-black text-white border"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
