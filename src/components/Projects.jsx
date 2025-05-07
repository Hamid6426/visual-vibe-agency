import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "../data/projectsData";

export default function Projects() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-3 sm:px-12 py-8 lg:pb-24 transition-colors duration-300">
      {/* Header */}
      <section className="flex flex-col gap-6 sm:flex-row sm:justify-between w-full mb-12">
        <h2 className="text-4xl sm:text-6xl font-medium text-gray-900 dark:text-[#E1E1E1]">
          Projects
        </h2>
        <p className="max-w-sm w-full lg:text-lg text-gray-600 dark:text-gray-400">
          Check out some of our fantastic works and leverage our services for your brand
        </p>
      </section>

      {/* Project Cards */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-100px" });

            return (
              <motion.div
                key={project.id}
                ref={ref}
                className="rounded overflow-hidden flex flex-col bg-white dark:bg-[#1B1B1B] border border-[#E1E1E1] dark:border-gray-700 shadow-md dark:shadow-lg transition-colors duration-300"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-6 flex flex-col gap-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Button */}
          <a href="/projects" className="text-center mt-4 px-4 py-2 inline-block max-w-sm rounded-full bg-black text-white dark:bg-[#E1E1E1] dark:text-[#1B1B1B] hover:opacity-90 transition-all duration-200">
            Check out more
          </a>
        </div>
      </section>
    </main>
  );
}