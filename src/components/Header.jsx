import React from "react";

export default function Header() {
  return (
    <header className="w-full h-16">
      <div className="px-12 flex justify-between items-center h-16">
        <img src="/logo-icon.png" className="rounded-full w-14 h-14" />
        <div className="gap-8 flex font-semibold ">
          <a href="/Services">Services</a>
          <a href="/About">About Us</a>
          <a href="/Blog">Blog</a>
        </div>
        <div className="px-12 py-2 font-semibold rounded-full text-white bg-black text-sm">Talk To Us</div>
      </div>
    </header>
  );
}
