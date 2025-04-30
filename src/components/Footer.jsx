import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import ThemeDropdown from "./ThemeDropdown";

export default function Footer() {
  return (
    <footer className="w-full bg-black flex flex-col gap-8 justify-center items-center py-10">
      <section className=" flex justify-end items-end">
        <div className="font-bold text-white text-5xl">Visual Vibe</div>
        <div className="text-lg translate-y-1 ml-1">®</div>
      </section>
      <section className="flex gap-6 justify-center">
        <Link to="/contact"></Link>
        <Link to="/contact"></Link>
        <Link to="/contact"></Link>
        <Link to="/contact"></Link>
      </section>
      <section className="flex gap-14">
        <div className="flex gap-6">
          <a href="/">
            <FaFacebookF className="bg-white text-black p-3 w-12 h-12 rounded-full" />
          </a>
          <a href="/">
            <FaInstagram className="bg-white text-black p-3 w-12 h-12 rounded-full" />
          </a>
          <a href="/">
            <FaTwitter className="bg-white text-black p-3 w-12 h-12 rounded-full" />
          </a>
          <a href="/">
            <MdMailOutline className="bg-white text-black p-3 w-12 h-12 rounded-full" />
          </a>
          <a href="/">
            <FaYoutube className="bg-white text-black p-3 w-12 h-12 rounded-full" />
          </a>
        </div>
        <ThemeDropdown />
      </section>
      <section className="mt-4 text-white text-lg font-semibold">Copyright © Visual Vibe Creations. All Rights Reserved.</section>
    </footer>
  );
}
