import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import ThemeDropdown from "./ThemeDropdown";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-400/40 dark:bg-[#000000] flex flex-col gap-8 justify-center items-center py-10 transition-colors duration-300">
      {/* Brand */}
      <section className="flex justify-end items-end">
        <div className="font-bold text-[#141414] dark:text-[#E1E1E1] text-3xl md:text-5xl">
          Visual Vibe
        </div>
        <div className="text-lg translate-y-1 ml-1 dark:text-[#E1E1E1]">®</div>
      </section>

      {/* Nav Links */}
      <section className="flex gap-6 justify-center font-semibold flex-wrap">
        <Link to="/about" className="text-[#141414] dark:text-[#E1E1E1] transition-colors duration-200">About Us</Link>
        <Link to="/projects" className="text-[#141414] dark:text-[#E1E1E1] transition-colors duration-200">Projects</Link>
        <Link to="/blogs" className="text-[#141414] dark:text-[#E1E1E1] transition-colors duration-200">Blogs</Link>
        <Link to="/contact" className="text-[#141414] dark:text-[#E1E1E1] transition-colors duration-200">Contact Us</Link>
      </section>

      {/* Social + Theme */}
      <section className="flex gap-6 flex-col md:flex-row justify-center items-center">
        <div className="flex gap-6 flex-wrap w-full justify-center items-center">
          <a
            href="https://facebook.com/visual-vibes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="bg-[#fff] dark:bg-[#1B1B1B] text-black dark:text-[#E1E1E1] border p-3 w-12 h-12 rounded-full transition-all duration-300" />
          </a>
          <a
            href="https://instagram.com/visual-vibes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="bg-[#fff] dark:bg-[#1B1B1B] text-black dark:text-[#E1E1E1] border p-3 w-12 h-12 rounded-full transition-all duration-300" />
          </a>
          <a
            href="https://twitter.com/visual-vibes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="bg-[#fff] dark:bg-[#1B1B1B] text-black dark:text-[#E1E1E1] border p-3 w-12 h-12 rounded-full transition-all duration-300" />
          </a>
          <a
            href="mailto:hello@visualvibe.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdMailOutline className="bg-[#fff] dark:bg-[#1B1B1B] text-black dark:text-[#E1E1E1] border p-3 w-12 h-12 rounded-full transition-all duration-300" />
          </a>
        </div>
        <ThemeDropdown />
      </section>

      {/* Footer Notice */}
      <section className="mt-4 text-lg font-semibold text-center px-3 text-[#141414] dark:text-[#E1E1E1] transition-colors duration-300">
        Copyright © Visual Vibe Creations. All Rights Reserved.
      </section>
    </footer>
  );
}
