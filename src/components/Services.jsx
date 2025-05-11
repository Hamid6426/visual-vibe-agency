// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { servicesLeft, servicesRight } from "../data/servicesData";
// import { Link } from "react-router-dom";

// export default function Services() {
//   const leftRef = useRef(null);
//   const rightRef = useRef(null);
//   const contentRef = useRef(null);

//   const leftInView = useInView(leftRef, { once: true, margin: "-100px" });
//   const rightInView = useInView(rightRef, { once: true, margin: "-100px" });
//   const contentInView = useInView(contentRef, { once: true, margin: "-100px" });

//   const fadeRight = {
//     hidden: { opacity: 0, x: 100 },
//     visible: { opacity: 1, x: 0 },
//   };

//   return (
//     <main className="mx-auto w-full max-w-6xl px-3 lg:px-0 pt-8 sm:pt-16 lg:pt-24 lg:py-24 bg-[#FFFFFF] dark:bg-[#141414] transition-colors duration-300">
//       <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-12 px-4">
//         {/* Text Section */}
//         <section className="flex flex-col items-center lg:w-5/12 gap-6 w-full">
//           <div className="text-4xl text-center sm:text-5xl lg:text-6xl font-medium text-[#141414] dark:text-[#E1E1E1]">
//             Services
//           </div>
//           <div className="text-center w-full text-[#1B1B1B] dark:text-[#E1E1E1]">
//             Can't find the answer you're looking for? Ask your questions and get
//             an answer within 24 hours
//           </div>
//           <Link
//             to="/contact"
//             className="w-full max-w-sm py-3 text-center max-w-xs rounded-full font-medium transition-colors duration-300 bg-black text-white dark:bg-[#E1E1E1] dark:text-[#1B1B1B]"
//           >
//             Ask a question
//           </Link>
//         </section>

//         {/* Boxes Section */}
//         <section className="flex flex-col lg:flex-row lg:w-7/12 gap-6">

// {/* LEFT COLUMN SMALL SCREENS */}

//     {/* Right Column */}
//           <motion.div
//             className="flex flex-col gap-6 w-full lg:hidden"
//             ref={rightRef}
//             variants={fadeRight}
//             initial="hidden"
//             animate={rightInView ? "visible" : "hidden"}
//             transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
//           >
//             {servicesLeft.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="rounded-2xl w-full lg:w-full flex flex-col justify-end p-4 border border-[#E1E1E1] dark:border-gray-700 bg-[#F3F3F3] dark:bg-[#1B1B1B] transition-colors duration-300"
//               >
//                 <h2 className="text-2xl lg:text-4xl font-semibold text-[#141414] dark:text-[#E1E1E1]">
//                   {item.title}
//                 </h2>
//                 <p className="text-[#1B1B1B] dark:text-[#E1E1E1]">
//                   {item.text}
//                 </p>
//               </div>
//             ))}
//           </motion.div>

//           {/* Left Column */}
//           <motion.div
//             className="hidden lg:flex flex-col gap-6 w-full"
//             ref={leftRef}
//             variants={fadeRight}
//             initial="hidden"
//             animate={leftInView ? "visible" : "hidden"}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//           >
//             {servicesLeft.map((item, index) =>
//               item.type === "animated" ? (
//                 <div
//                   key={index}
//                   ref={contentRef}
//                   className="relative rounded-2xl w-full h-80 flex flex-col justify-end p-4 border border-[#E1E1E1] dark:border-gray-700 bg-[#F3F3F3] dark:bg-[#1B1B1B] overflow-hidden transition-colors duration-300"
//                 >
//                   <motion.div
//                     initial={{ scaleY: 0 }}
//                     animate={contentInView ? { scaleY: 1 } : { scaleY: 0 }}
//                     transition={{ duration: 0.8, ease: "easeOut" }}
//                     className="absolute top-0 left-0 w-full h-full bg-[#222] text-white origin-top rounded-2xl z-0"
//                   />
//                   <div className="relative z-10">
//                     <h2 className="text-2xl lg:text-4xl font-semibold text-[#E1E1E1]">
//                       {item.title}
//                     </h2>
//                     <p className="text-[#E1E1E1]">{item.text}</p>
//                   </div>
//                 </div>
//               ) : (
//                 <div
//                   key={index}
//                   className="rounded-2xl w-full flex flex-col justify-end p-4 border border-[#E1E1E1] dark:border-gray-700 bg-[#F3F3F3] dark:bg-[#1B1B1B] transition-colors duration-300"
//                 >
//                   <h2 className="text-2xl lg:text-4xl font-semibold text-[#141414] dark:text-[#E1E1E1]">
//                     {item.title}
//                   </h2>
//                   <p className="text-[#1B1B1B] dark:text-[#E1E1E1]">
//                     {item.text}
//                   </p>
//                 </div>
//               )
//             )}
//           </motion.div>

//           {/* Right Column */}
//           <motion.div
//             className="flex flex-col gap-6 w-full"
//             ref={rightRef}
//             variants={fadeRight}
//             initial="hidden"
//             animate={rightInView ? "visible" : "hidden"}
//             transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
//           >
//             {servicesRight.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="rounded-2xl w-full lg:w-full flex flex-col justify-end p-4 border border-[#E1E1E1] dark:border-gray-700 bg-[#F3F3F3] dark:bg-[#1B1B1B] transition-colors duration-300"
//               >
//                 <h2 className="text-2xl lg:text-4xl font-semibold text-[#141414] dark:text-[#E1E1E1]">
//                   {item.title}
//                 </h2>
//                 <p className="text-[#1B1B1B] dark:text-[#E1E1E1]">
//                   {item.text}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </section>
//       </div>
//     </main>
//   );
// }

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { servicesLeft, servicesRight } from "../data/servicesData";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";

export default function Services() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const contentRef = useRef(null);

  const leftInView = useInView(leftRef, { once: true, margin: "-100px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-100px" });

  const [startReveal, setStartReveal] = useState(false);

  useEffect(() => {
    if (leftInView) {
      const timer = setTimeout(() => setStartReveal(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [leftInView]);

  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const ulVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const liVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1 },
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-3 lg:px-0 lg:pb-24 bg-[#FFFFFF] dark:bg-[#141414] transition-colors duration-300">
      <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-12 px-4">
        {/* Text Section */}
        <section className="flex flex-col items-center lg:w-5/12 gap-6 w-full">
          <div className="text-center text-5xl lg:text-6xl font-medium text-[#141414] dark:text-[#E1E1E1]">
            Services
          </div>
          <div className="text-center w-full text-[#1B1B1B] dark:text-[#E1E1E1]">
            Can't find the answer you're looking for? Ask your questions and get
            an answer within 24 hours
          </div>
          <Link
            to="/contact"
            className="w-full max-w-sm py-3 text-center  rounded-full font-medium transition-colors duration-300 bg-black text-white dark:bg-[#E1E1E1] dark:text-[#1B1B1B]"
          >
            Ask a question
          </Link>
        </section>

        {/* Boxes Section */}
        <section className="flex flex-col lg:flex-row lg:w-7/12 gap-6">
          {/* LEFT COLUMN SMALL SCREENS */}

          {/* Right Column */}
          <motion.div
            className="flex flex-col gap-6 w-full lg:hidden"
            ref={rightRef}
            variants={fadeRight}
            initial="hidden"
            animate={rightInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {servicesLeft.map((item, idx) => (
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

          {/* Left Column */}
          <motion.div
            className="hidden lg:flex flex-col gap-6 w-full"
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
                  className="relative rounded-2xl w-full fit lg:h-80 flex flex-col justify-end p-4 border border-[#E1E1E1] dark:border-gray-700 bg-[#F3F3F3] dark:bg-[#1B1B1B] overflow-hidden transition-colors duration-300"
                >
                  {/* 2nd Box */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={startReveal ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="bg-[#222] absolute top-0 left-0 w-full h-full text-white origin-top rounded-2xl z-0"
                  >
                    {/* Icon + Circle, fades in at t=1.3s */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={startReveal ? { opacity: 1 } : { opacity: 0 }}
                      transition={{
                        delay: 0.4, // 0.5s (curtain) + 0.8s pause
                        duration: 0.2, // fade-in over 0.3s
                        ease: "easeIn", // smooth ease-in
                      }}
                    >
                      <MdEdit className="w-24 h-24 transform scale-x-[-1] absolute top-5 left-[25%]" />
                      <div className="w-40 h-40 absolute -right-[25%] top-8 rounded-full bg-[#111]"></div>
                    </motion.div>

                    {/* Lines, stagger-start at t=1.6s */}
                    <motion.ul
                      initial="hidden"
                      animate={startReveal ? "visible" : "hidden"}
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            delayChildren: 1, // 1.3s + 0.3s
                            staggerChildren: 0.1, // each line 0.1s apart
                          },
                        },
                      }}
                      className="flex flex-col gap-4 top-16 absolute right-[14%]"
                    >
                      <motion.li
                        variants={{
                          hidden: { scaleX: 0 },
                          visible: { scaleX: 1 },
                        }}
                        className="bg-white w-10 h-[0.5px]"
                      />
                      <motion.li
                        variants={{
                          hidden: { scaleX: 0 },
                          visible: { scaleX: 1 },
                        }}
                        className="bg-white w-12 h-[0.5px]"
                      />
                      <motion.li
                        variants={{
                          hidden: { scaleX: 0 },
                          visible: { scaleX: 1 },
                        }}
                        className="bg-white w-14 h-[0.5px]"
                      />
                      <motion.li
                        variants={{
                          hidden: { scaleX: 0 },
                          visible: { scaleX: 1 },
                        }}
                        className="bg-white w-16 h-[0.5px]"
                      />
                    </motion.ul>
                  </motion.div>

                  <div className="relative z-10">
                    <h2 className="text-2xl lg:text-4xl mb-3 font-semibold text-[#E1E1E1]">
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
