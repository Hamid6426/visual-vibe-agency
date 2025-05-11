import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { blogs } from "../data/blogsData";

export default function BlogsPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white dark:bg-[#141414]">
      <main className="mx-auto w-full max-w-6xl px-3 lg:px-0 py-6 md:py-12 transition-colors duration-300">
        {/* Header */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#141414] dark:text-[#E1E1E1]">
            Our Blog
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 lg:text-lg">
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
    </div>
  );
}
