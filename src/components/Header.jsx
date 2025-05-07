import React, { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Blogs", to: "/blogs" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full h-24 z-50 py-3 px-3 lg:px-0">
      <div className="px-3 max-w-6xl rounded-full bg-gray-400/10 text-black dark:text-white mx-auto flex justify-between items-center h-16">
        <Link to="/">
          <img src="/logo-icon.png" className="rounded-full w-10 h-10" />
        </Link>

        {/* Desktop Menu */}
        <div className="gap-8 hidden sm:flex items-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={isActive(link.to) ? "text-[#333] font-bold hover:text-[#666]" : "hover:text-[#666] "}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden mt-1 mr-2">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>

        <Link
          to="/contact"
          className="px-12 hover:bg-[#333] py-3 font-bold rounded-full text-white bg-black text-sm hidden sm:block"
        >
          Talk To Us
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden absolute text-sm top-20 text-center left-0 pt-2 pb-4 w-full bg-white px-3 gap-2 flex flex-col items-center z-50 shadow-md">
          {[
            ...navLinks,
            { label: "Contact Us", to: "/contact" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-full w-[200px] px-4 py-2 max-w-40 bg-black text-white border ${
                isActive(link.to) ? "font-black" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
