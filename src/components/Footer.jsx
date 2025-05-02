import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import ThemeDropdown from "./ThemeDropdown";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f3f3f3] flex flex-col gap-8 justify-center items-center py-10">
      <section className=" flex justify-end items-end">
        <div className="font-bold text-[#141414] text-3xl md:text-5xl">Visual Vibe</div>
        <div className="text-lg translate-y-1 ml-1">®</div>
      </section>
      <section className="flex gap-6 justify-center font-semibold flex-wrap">
        <Link to="/contact">Contact</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/contact">Contact</Link>
      </section>
      <section className="flex gap-6 flex-col md:flex-row justify-center items-center">
        <div className="flex gap-6 flex-wrap w-full justify-center items-center">
          <div className="flex gap-6">
          <a href="/">
            <FaFacebookF className="bg-[#fff] border p-3 w-12 h-12 rounded-full" />
          </a>
          <a href="/">
            <FaInstagram className="bg-[#fff] border p-3 w-12 h-12 rounded-full" />
          </a>
          </div>
          <div className="flex gap-6">
          <a href="/">
            <FaTwitter className="bg-[#fff] border p-3 w-12 h-12 rounded-full" />
          </a>
          <a href="/">
            <MdMailOutline className="bg-[#fff] border p-3 w-12 h-12 rounded-full" />
          </a>
          </div>
        </div>
        <ThemeDropdown />
      </section>
      <section className="mt-4 text-lg font-semibold text-center px-3">Copyright © Visual Vibe Creations. All Rights Reserved.</section>
    </footer>
  );
}
