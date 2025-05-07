import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { servicesLeft, servicesRight } from "../data/servicesData";

export default function Services() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const contentRef = useRef(null);

  const leftInView = useInView(leftRef, { once: true, margin: "-100px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-100px" });
  const contentInView = useInView(contentRef, { once: true, margin: "-100px" });

  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-3 lg:px-0 pt-8 sm:pt-16 lg:pt-24 lg:py-24 bg-[#FFFFFF] dark:bg-[#141414] transition-colors duration-300">
      <div className="flex flex-col lg:flex-row justify-center gap-12">
        {/* Text Section */}
        <section className="flex flex-col sm:w-5/12 gap-6 sm:gap-10 w-full">
          <div className="text-4xl sm:text-6xl font-medium text-[#141414] dark:text-[#E1E1E1]">
            Services
          </div>
          <div className="sm:max-w-sm w-full text-[#1B1B1B] dark:text-[#E1E1E1]">
            Can't find the answer you're looking for? Ask your questions and get an answer within 24 hours
          </div>
          <a
            href="/contact"
            className="px-6 py-2 text-center max-w-sm rounded-full font-medium transition-colors duration-300 bg-black text-white dark:bg-[#E1E1E1] dark:text-[#1B1B1B]"
          >
            Ask a question
          </a>
        </section>

        {/* Boxes Section */}
        <section className="flex flex-col lg:flex-row lg:w-7/12 gap-6">
          {/* Left Column */}
          <motion.div
            className="flex flex-col gap-6 w-full"
            ref={leftRef}
            variants={fadeRight}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {servicesLeft.map((item, index) =>
              item.type === "animated" ? (
                <div
                  key={index}
                  ref={contentRef}
                  className="relative rounded-2xl w-full h-80 flex flex-col justify-end p-4 border border-[#E1E1E1] dark:border-gray-700 bg-[#F3F3F3] dark:bg-[#1B1B1B] overflow-hidden transition-colors duration-300"
                >
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={contentInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute top-0 left-0 w-full h-full bg-[#222] text-white origin-top rounded-2xl z-0"
                  />
                  <div className="relative z-10">
                    <h2 className="text-2xl lg:text-4xl font-semibold text-[#E1E1E1]">
                      {item.title}
                    </h2>
                    <p className="text-[#E1E1E1]">{item.text}</p>
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className="rounded-2xl w-full flex flex-col justify-end p-4 border border-[#E1E1E1] dark:border-gray-700 bg-[#F3F3F3] dark:bg-[#1B1B1B] transition-colors duration-300"
                >
                  <h2 className="text-2xl lg:text-4xl font-semibold text-[#141414] dark:text-[#E1E1E1]">
                    {item.title}
                  </h2>
                  <p className="text-[#1B1B1B] dark:text-[#E1E1E1]">
                    {item.text}
                  </p>
                </div>
              )
            )}
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="flex flex-col gap-6 w-full"
            ref={rightRef}
            variants={fadeRight}
            initial="hidden"
            animate={rightInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {servicesRight.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl w-full lg:w-full flex flex-col justify-end p-4 border border-[#E1E1E1] dark:border-gray-700 bg-[#F3F3F3] dark:bg-[#1B1B1B] transition-colors duration-300"
              >
                <h2 className="text-2xl lg:text-4xl font-semibold text-[#141414] dark:text-[#E1E1E1]">
                  {item.title}
                </h2>
                <p className="text-[#1B1B1B] dark:text-[#E1E1E1]">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
        </section>
      </div>
    </main>
  );
}
