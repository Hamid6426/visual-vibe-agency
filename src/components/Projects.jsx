import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "../data/projectsData";
import { Link } from "react-router-dom";

export default function Projects() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Destructure first two projects
  const [firstProject, secondProject] = projects;

  // Refs and inView checks for animations
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" });

  return (
    <main className="mx-auto w-full max-w-6xl px-3 sm:px-12 py-24 transition-colors duration-300">
      {/* Header */}
      <section className="flex flex-col items-center justify-center gap-6 w-full mb-12">
        <div className="text-center text-5xl lg:text-6xl font-medium text-[#141414] dark:text-[#E1E1E1]">
          Projects
        </div>
        <p className="text-center w-full text-[#1B1B1B] dark:text-[#E1E1E1]">
          F Check out some of our fantastic works and leverage our services for
          your brand
        </p>
      </section>

      {/* Project Cards */}
      <section>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Project */}
          <motion.div
            ref={ref1}
            className="rounded overflow-hidden flex flex-col bg-white dark:bg-[#1B1B1B] border border-[#E1E1E1] dark:border-gray-700 shadow-md dark:shadow-lg transition-colors duration-300"
            variants={fadeUp}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <img
              src={firstProject.image}
              alt={firstProject.title}
              className="w-full aspect-video object-cover"
            />
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {firstProject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {firstProject.description}
              </p>
            </div>
          </motion.div>

          {/* Second Project */}
          <motion.div
            ref={ref2}
            className="rounded overflow-hidden flex flex-col bg-white dark:bg-[#1B1B1B] border border-[#E1E1E1] dark:border-gray-700 shadow-md dark:shadow-lg transition-colors duration-300"
            variants={fadeUp}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <img
              src={secondProject.image}
              alt={secondProject.title}
              className="w-full aspect-video object-cover"
            />
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {secondProject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {secondProject.description}
              </p>
            </div>
          </motion.div>
        </div>
        {/* Button */}
        <div className="w-full flex justify-center mt-4">
          <Link
            to="/projects"
            className="text-center mt-4 px-24 py-3 rounded-full bg-black text-white dark:bg-[#E1E1E1] dark:text-[#1B1B1B] hover:opacity-90 transition-all duration-200"
          >
            Check out more
          </Link>
        </div>
      </section>
    </main>
  );
}
