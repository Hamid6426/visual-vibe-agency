import { HiHome, HiOutlinePhone } from "react-icons/hi";
import { FaUserTie, FaRegNewspaper } from "react-icons/fa";
import { TbLayoutDashboard } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { label: "Home", to: "/", icon: <HiHome size={24} /> },
    { label: "About Us", to: "/about", icon: <FaUserTie size={24} /> },
    {
      label: "Projects",
      to: "/projects",
      icon: <TbLayoutDashboard size={24} />,
    },
    { label: "Blogs", to: "/blogs", icon: <FaRegNewspaper size={24} /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full z-50 py-3 px-3 lg:px-0">
      <div className="px-3 hidden h-14 sm:flex max-w-6xl rounded-full bg-gray-400/10 text-black dark:text-white mx-auto justify-between items-center">
        <Link to="/">
          <img src="/logo-icon.png" className="rounded-full w-10 h-10" />
        </Link>

        {/* Desktop Menu */}
        <div className="gap-6 flex items-center text-xs">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={
                isActive(link.to)
                  ? "text-[#333] dark:text-[#999] font-bold hover:text-[#666]"
                  : "hover:text-[#666] "
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/contact"
            className="px-8 hover:bg-[#333] py-2 font-bold rounded-full text-white bg-black text-sm hidden sm:block"
          >
            Talk To Us
          </Link>
        </div>
      </div>
      {/* MOBILE */}
      <div className="sm:hidden fixed text-sm bottom-1 text-center left-0 w-full p-2 z-[1000]">
        <div className="bg-black/70 border border-gray-900 dark:border-gray-400 text-white w-full flex justify-between items-center rounded-full px-6 py-1 shadow-md">
          {[
            ...navLinks,
            {
              label: "Contact Us",
              to: "/contact",
              icon: <HiOutlinePhone size={24} />,
            },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`rounded-full  max-w-40 flex flex-col justify-center items-center  ${
                isActive(link.to)
                  ? "text-white"
                  : "text-gray-400"
              }`}
            >
              <div>{link.icon}</div>
              <div className="text-xs">{link.label}</div>
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
