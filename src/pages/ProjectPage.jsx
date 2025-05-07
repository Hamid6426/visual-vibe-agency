// pages/projects.jsx (or .tsx if you use TypeScript)

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const projects = [
  {
    id: 1,
    title: "E-commerce Redesign",
    description:
      "A modern online store experience with seamless UI/UX and custom checkout flow.",
    image: "/project-1.png",
  },
  {
    id: 2,
    title: "Startup Landing Page",
    description:
      "Crafted a responsive landing page for a tech startup to increase sign-ups.",
    image: "/project-1.png",
  },
  {
    id: 3,
    title: "Mobile App UI Kit",
    description:
      "Design system and components for a cross-platform mobile productivity app.",
    image: "/project-1.png",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description:
      "Interactive data visualizations for real-time business insights.",
    image: "/project-1.png",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Personal branding site with dynamic gallery and CMS integration.",
    image: "/project-1.png",
  },
  {
    id: 6,
    title: "SaaS Product Landing",
    description:
      "Conversion-focused landing page with lead-gen forms and A/B testing.",
    image: "/project-1.png",
  },
  {
    id: 7,
    title: "Blog & CMS Integration",
    description:
      "Headless CMS-driven blog with markdown support and SEO optimizations.",
    image: "/project-1.png",
  },
  {
    id: 8,
    title: "Interactive Map App",
    description:
      "Custom map markers, clustering, and geolocation features for travel planning.",
    image: "/project-1.png",
  },
  {
    id: 9,
    title: "Real-Time Chat Widget",
    description:
      "Lightweight chat widget with WebSocket backend and theming support.",
    image: "/project-1.png",
  },
];

export default function ProjectsPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white dark:bg-[#141414]">
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-12 py-12 transition-colors duration-300">
        {/* Header */}
        <section className="flex flex-col gap-4 sm:flex-row sm:justify-between mb-12">
          <h1 className="text-4xl sm:text-6xl font-semibold text-[#141414] dark:text-[#E1E1E1]">
            Our Projects
          </h1>
          <p className="max-w-md text-gray-600 dark:text-gray-400 lg:text-lg">
            Here are nine of our standout works—each tailored to drive results
            and delight users.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-100px" });

            return (
              <motion.div
                key={project.id}
                ref={ref}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                className="
                flex flex-col bg-white dark:bg-[#1B1B1B]
                border border-gray-200 dark:border-gray-700
                rounded-2xl shadow-md dark:shadow-lg
                overflow-hidden transition-colors duration-300
              "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold text-[#141414] dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
}
