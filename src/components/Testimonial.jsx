import React from "react";
import { testimonials } from "../data/testimonialsData";

export default function Testimonial() {
  return (
    <main className="overflow-hidden bg-white dark:bg-[#141414] transition-colors duration-300 py-12">
      <div className="flex animate-scroll-left">
        {[...testimonials, ...testimonials].map((t, i) => (
          <div
            key={i}
            className="flex border-l-4 border-l-gray-200 dark:border-l-gray-700 pl-6 min-w-[22rem] sm:min-w-[32rem] py-12 bg-white dark:bg-[#1B1B1B] transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              fill="currentColor"
              viewBox="0 0 96 96"
              className="text-gray-300 dark:text-gray-600"
            >
              <text x="0" y="64" fontSize="96" fontFamily="serif">
                “
              </text>
            </svg>
            <div className="flex flex-col justify-between gap-8 pr-6 w-full">
              <p className="text-2xl sm:text-4xl font-semibold text-gray-900 dark:text-[#E1E1E1]">
                {t.headline}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-justify">
                {t.description}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                />
                <div>
                  <p className="font-medium text-lg text-gray-900 dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}