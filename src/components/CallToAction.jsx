import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function CallToAction({
  title = "Ready to elevate your brand?",
  buttonText = "Get in Touch",
  link = "/contact",
}) {
  return (
    <motion.section
      className="text-center flex flex-col mb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-semibold text-[#141414] dark:text-[#E1E1E1] mb-8 ">
        Ready to elevate your brand?
      </h2>
      <div className="flex justify-center">
        <motion.div className="w-full bg-white max-w-40 dark:bg-black  px-6 hover:bg-gray-400/40 dark:hover:bg-[#141414]  py-3 rounded-full cursor-pointer text-black dark:text-white font-semibold border border-gray-300 dark:border-gray-600 transition">
          <Link to="/contact">Get in Touch</Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
