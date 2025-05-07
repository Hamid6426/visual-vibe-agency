import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AboutUsPage() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white dark:bg-[#141414]">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-3 sm:px-0 py-12 transition-colors duration-300">
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
            About Our Agency
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We craft bold digital experiences that amplify your brand’s voice
            and drive growth.
          </p>
        </motion.section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {[
            {
              title: "Our Mission",
              text: `To empower businesses with innovative design and technology
              solutions that resonate with their audience and elevate their
              brand identity.`,
            },
            {
              title: "Our Vision",
              text: `To be the leading creative partner for brands seeking bold
              storytelling, seamless user experiences, and measurable impact.`,
            },
          ].map((item, idx) => {
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
            {[
              {
                title: "Creativity",
                desc: "We push boundaries to craft unique and impactful solutions.",
              },
              {
                title: "Collaboration",
                desc: "We work closely with clients to co-create and iterate.",
              },
              {
                title: "Integrity",
                desc: "We uphold transparency and honesty in all we do.",
              },
              {
                title: "Excellence",
                desc: "We strive for the highest quality in design and development.",
              },
              {
                title: "Innovation",
                desc: "We embrace new technologies to stay ahead of the curve.",
              },
              {
                title: "Empathy",
                desc: "We prioritize user needs to create meaningful experiences.",
              },
            ].map((value, idx) => {
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
            {[
              {
                name: "Alice Johnson",
                role: "Creative Director",
                img: "/hamid-profile.png",
              },
              {
                name: "Michael Lee",
                role: "Lead Developer",
                img: "/hamid-profile.png",
              },
              {
                name: "Sara Kim",
                role: "UX/UI Designer",
                img: "/hamid-profile.png",
              },
            ].map((member, idx) => {
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
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-[#141414] dark:text-[#E1E1E1] mb-8 ">
            Ready to elevate your brand?
          </h2>
          <motion.a
            href="/contact"
            className="w-full bg-white dark:bg-black  px-6 hover:bg-gray-400/40 dark:hover:bg-[#141414]  py-3 rounded-lg cursor-pointer text-black dark:text-white font-semibold border border-gray-300 dark:border-gray-600 transition"
          >
            Get in Touch
          </motion.a>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
