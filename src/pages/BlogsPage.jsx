import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Sample blog data - replace with real data or fetch dynamically
const blogs = [
  {
    id: 1,
    title: "How to Design a User-Friendly Interface",
    description:
      "Explore best practices and tips to create intuitive and engaging UI designs that keep users coming back.",
    image: "/project-1.png",
  },
  {
    id: 2,
    title: "Optimizing Web Performance in 2025",
    description:
      "Learn about the latest techniques and tools to make your web apps blazing fast and SEO friendly.",
    image: "/project-1.png",
  },
  {
    id: 3,
    title: "Tailwind CSS: Beyond the Basics",
    description:
      "Deep dive into advanced Tailwind patterns, custom utilities, and theming for large-scale projects.",
    image: "/project-1.png",
  },
  {
    id: 4,
    title: "Accessibility Tips for React Apps",
    description:
      "Ensure your React applications are inclusive by following these accessibility guidelines and tools.",
    image: "/project-1.png",
  },
  {
    id: 5,
    title: "State Management: Context vs Zustand vs Redux",
    description:
      "Compare popular state management libraries and choose the right one for your next React project.",
    image: "/project-1.png",
  },
];

export default function BlogsPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <div className="bg-white dark:bg-[#141414]">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-3 lg:px-0 py-12 transition-colors duration-300">
        {/* Header */}
        <section className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#141414] dark:text-[#E1E1E1]">
            Our Blog
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400 lg:text-lg">
            Insights, tutorials, and updates from our team.
          </p>
        </section>

        {/* Blog List */}
        <section className="flex flex-col gap-10">
          {blogs.map((post, idx) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-100px" });

            return (
              <motion.article
                key={post.id}
                ref={ref}
                className="flex flex-col sm:flex-row bg-white dark:bg-[#1B1B1B] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md dark:shadow-lg transition-colors duration-300"
                variants={fadeIn}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
              >
                {/* Left: Image */}
                <div className="w-full sm:w-1/3 h-48 sm:h-auto relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right: Text */}
                <div className="p-6 flex flex-col sm:w-2/3">
                  <h2 className="text-2xl font-semibold mb-2 text-[#141414] dark:text-white">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {post.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
}
