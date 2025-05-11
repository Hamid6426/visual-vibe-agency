import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aboutPageData } from "../data/aboutPageData";
import { Link } from "react-router-dom";

export default function AboutUsPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white w-full dark:bg-[#141414]">
      <main className="mx-auto w-full max-w-6xl px-3 sm:px-0 py-6 md:py-12 transition-colors duration-300">
        {/* Hero Section */}
        <motion.section
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-[#141414] dark:text-[#E1E1E1]">
            {aboutPageData.hero.title}
          </h1>
          <p className="text-lg max-w-sm mt-8 text-gray-600 dark:text-gray-400 mx-auto">
            {aboutPageData.hero.description}
          </p>
        </motion.section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {aboutPageData.missionVision.map((item, idx) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-100px" });
            return (
              <motion.div
                key={idx}
                ref={ref}
                className="p-4"
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <h2 className="text-3xl font-semibold text-[#141414] dark:text-[#E1E1E1] mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-[#141414] dark:text-[#E1E1E1] mb-8 text-center">
            Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutPageData.coreValues.map((value, idx) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: "-100px" });
              return (
                <motion.div
                  key={idx}
                  ref={ref}
                  className="p-6 bg-white dark:bg-[#1B1B1B] rounded-2xl border border-gray-200 dark:border-gray-700 shadow transition-colors duration-300"
                  variants={fadeInUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-[#141414] dark:text-[#E1E1E1] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-[#141414] dark:text-[#E1E1E1] mb-8 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {aboutPageData.team.map((member, idx) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: "-100px" });
              return (
                <motion.div
                  key={idx}
                  ref={ref}
                  className="text-center p-6 bg-white dark:bg-[#1B1B1B] rounded-2xl border border-gray-200 dark:border-gray-700 shadow transition-colors duration-300"
                  variants={fadeInUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                  />
                  <h4 className="text-xl font-semibold text-[#141414] dark:text-[#E1E1E1]">
                    {member.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {member.role}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <motion.section
          className="text-center w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-[#141414] dark:text-[#E1E1E1] mb-8 ">
            {aboutPageData.cta.text}
          </h2>
          <motion.div className="w-full flex items-center text-center justify-center">
            <Link
              className="max-w-40 py-3 w-full  bg-white dark:bg-black  px-6 hover:bg-gray-400/40 dark:hover:bg-[#141414]  rounded-lg cursor-pointer text-black dark:text-white font-semibold border border-gray-300 dark:border-gray-600 transition"
              to={aboutPageData.cta.link}
            >
              {aboutPageData.cta.buttonLabel}
            </Link>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}
