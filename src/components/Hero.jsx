import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { FaApple, FaDribbble, FaDropbox, FaLinkedin } from "react-icons/fa6";

export default function Hero() {
  const { scrollY } = useScroll();
  const [rotateLogo, setRotateLogo] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > 0 && !rotateLogo) {
        setRotateLogo(true);
        document.body.style.overflow = "hidden";
        setTimeout(() => {
          document.body.style.overflow = "";
        }, 1000);
      }
    });

    return () => unsubscribe();
  }, [scrollY, rotateLogo]);

  return (
    <div className="h-dvh md:h-fit md:pb-24 relative flex flex-col justify-center items-center bg-[#FFFFFF] dark:bg-[#141414] transition-colors duration-300">
      {/* Headings */}
      <h2 className="text-5xl font-semibold text-[#141414] dark:text-[#E1E1E1]">
        The loud voice
      </h2>
      <h2 className="text-5xl mb-4 mt-2 font-semibold text-[#141414] dark:text-[#E1E1E1]">
        of your brand
      </h2>

      {/* Logo & Social */}
      <section className="relative mt-8">
        {/* Circle */}
        <div className="relative z-[100] w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#1B1B1B] flex justify-center items-center transition-colors duration-300">
          <motion.img
            src="logo-icon-no-bg.png"
            className="w-32 h-32 sm:w-40 sm:h-40 translate-y-4"
            alt="Logo"
            initial={{ rotate: 0 }}
            animate={rotateLogo ? { rotate: 360 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>

        <div className="">
          {/* DRIBBBLE */}
          <motion.div
            initial={{ x: -200, y: 100, scale: 0.5 }}
            animate={rotateLogo ? { x: 0, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block absolute top-32 -right-40 rounded-full dark:bg-[#1B1B1B] text-[#141414] dark:text-[#E1E1E1] transition-colors duration-300 "
          >
            <FaDribbble className="w-20 h-20 p-4" />
          </motion.div>

          <motion.div
            initial={{ x: -400, y: 100, scale: 0.5 }}
            animate={rotateLogo ? { x: 0, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block absolute top-0 -right-64 rotate-12 rounded-full text-6xl text-[#141414] dark:text-white z-10"
          >
            <FaApple />
          </motion.div>

          <motion.div
            initial={{ x: 200, y: 20, scale: 0.5 }}
            animate={rotateLogo ? { x: 0, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block absolute top-48 -left-24 rotate-12 rounded-full text-6xl z-10 text-[#141414] dark:text-white transition-colors duration-300"
          >
            <FaDropbox />
          </motion.div>

          {/* <FaDropbox className="hidden md:block absolute  rounded-full text-6xl  " /> */}

          {/* circles fill */}
          <div className="hidden md:block rounded-full bg-black absolute top-[21rem] -left-4 dark:bg-white w-5 h-5"></div>

          <motion.div
            initial={{ x: 200, y: 10 }}
            animate={rotateLogo ? { x: 0, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:block rounded-full border border-black w-5 h-5 absolute top-36 -left-44 dark:border-white"
          />

          {/* circles left bottom */}
          <div className="hidden md:block rounded-full border border-black w-5 h-5 absolute top-72 -left-24  dark:border-white"></div>

          {/* circles right-top */}
          <div className="hidden md:block rounded-full border border-black w-5 h-5 dark:border-white absolute top-1 -right-4"></div>

          {/* a icon */}
          <div className="hidden md:flex text-7xl absolute top-8 -left-64 text-white items-center justify-center rounded-full bg-black dark:bg-[#1b1b1b] w-24 h-24">
            <div className="mb-4 font-bold">a</div>
          </div>

          {/* outline star */}
          <svg
            viewBox="0 0 98 96"
            className="w-24 h-24 text-black hidden md:block dark:text-white stroke-current fill-none absolute top-0 -left-32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M56.8018 32.915L56.9482 33.4951L57.4932 33.248L86.4941 20.0986L67.2217 45.4473L66.8594 45.9238L67.3926 46.1953L95.7568 60.6709L63.9199 61.4082L63.3223 61.4219L63.4414 62.0078L69.8076 93.208L49.3838 68.7773L49 68.3184L48.6162 68.7773L28.1914 93.208L34.5586 62.0078L34.6777 61.4219L34.0801 61.4082L2.24219 60.6709L30.6074 46.1953L31.1406 45.9238L30.7783 45.4473L11.5049 20.0986L40.5068 33.248L41.0518 33.4951L41.1982 32.915L49 2.03809L56.8018 32.915Z" />
          </svg>

          {/* linkedin */}
          <svg
            width="62"
            height="57"
            viewBox="0 0 62 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black hidden md:block fill-black dark:fill-white absolute top-2 -right-36 rotate-12 scale-75"
          >
            <path
              d="M46.0076 15.6382C49.0826 15.6382 51.787 16.231 54.1052 17.4351L54.5388 17.6685C56.6704 18.8624 58.3397 20.5348 59.5388 22.6792L59.7751 23.1147C60.917 25.3205 61.4686 27.9361 61.4509 30.9429V56.4946H50.1667V32.3774C50.1667 29.8481 49.4408 27.9321 48.0437 26.562L48.0417 26.5591C46.6619 25.1889 44.7269 24.4761 42.1716 24.4761C40.4404 24.4761 38.9198 24.8213 37.5984 25.4976L37.5964 25.4985C36.2986 26.1559 35.2799 27.1062 34.533 28.3569C33.8121 29.5957 33.4393 31.1163 33.4392 32.9409V56.4946H22.155V16.1509H32.9841V22.2515C34.0373 20.3588 35.5605 18.8258 37.5427 17.6548L37.5447 17.6538L37.9841 17.4077C40.2109 16.2201 42.8925 15.6382 46.0076 15.6382Z"
              stroke="black"
            />
            <path
              d="M12.5791 16.1504V56.4941H1.2959V16.1504H12.5791ZM6.96582 0.5C8.71921 0.5 10.2368 1.02954 11.4893 2.10059L11.7217 2.30273C12.847 3.32611 13.4316 4.58017 13.4316 6.0459C13.4316 7.5937 12.7657 8.91475 11.4932 9.98828L11.4922 9.98926C10.2384 11.0454 8.71975 11.5664 6.96582 11.5664C5.22908 11.5664 3.71267 11.0442 2.44238 9.99121L2.43945 9.98828C1.16662 8.91469 0.5 7.59386 0.5 6.0459C0.500041 4.58022 1.0847 3.32609 2.20996 2.30273L2.44238 2.10059C3.71182 1.03119 5.22833 0.500018 6.96582 0.5Z"
              stroke="black"
            />
          </svg>

          {/* star */}
          <motion.div
            initial={{ x: -100, y: -80, scale: 0.5 }}
            animate={rotateLogo ? { x: 0, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block absolute top-80 -right-16 rotate-12 rounded-full text-6xl z-10 text-[#141414] dark:text-white transition-colors duration-300"
          >
            <svg
              viewBox="0 0 100 100"
              className="w-16 h-16 hidden md:block text-black dark:text-white fill-current"
            >
              <polygon points="50,0 60,35 98,35 66,57 78,95 50,72 22,95 34,57 2,35 40,35" />
            </svg>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
