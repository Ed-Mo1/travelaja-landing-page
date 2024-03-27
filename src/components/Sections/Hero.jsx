import { IoLocationSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";
import React from "react";
const Video = React.lazy(() => import("../Lazy"));

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const form = {
  hidden: { width: 0, opacity: 0 },
  show: { width: "100%", opacity: 1 },
};

const Hero = () => {
  return (
    <motion.section className="relative grid place-content-center min-h-screen ">
      <Video />
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="container max-md:pt-20 text-white w-full max-w-[1000px] text-center  "
      >
        <motion.h1 variants={item} className="big-title">
          Explore the world with a smile
        </motion.h1>
        <motion.p variants={item} className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo,
        </motion.p>

        <motion.form
          variants={form}
          className="flex items-center max-md:flex-col  mx-auto mt-5 bg-white shadow-xl rounded p-3"
        >
          <IoLocationSharp className="text-3xl text-primary hidden md:block" />
          <div className="w-full md:flex-1 flex max-md:flex-col max-md:divide-y-2 md:divide-x-2 items-center">
            <fieldset className="ps-2  max-md:w-full md:flex-1">
              <input
                type="text"
                placeholder="City or Destination"
                className="w-full py-4 px-3 text-base text-gray-700 placeholder-gray-500 border border-transparent focus:ring-0"
              />
            </fieldset>
            <fieldset className="ps-2 max-md:w-full md:flex-1">
              <input
                type="string"
                placeholder="Date of stay"
                className="w-full py-4 px-3 text-base text-gray-700 placeholder-gray-500 border border-transparent focus:ring-0"
              />
            </fieldset>
            <fieldset className="ps-2  max-md:w-full md:flex-1">
              <input
                type="text"
                placeholder="City or Destination"
                className="w-full py-4 px-3 text-base text-gray-700 placeholder-gray-500 border border-transparent focus:ring-0"
              />
            </fieldset>
          </div>
          <button className="w-40 hover:opacity-70 transition bg-primary flex  gap-2 items-center justify-center text-white rounded py-4 ">
            <span>Find Trip Now</span> <CiSearch className="text-2xl" />
          </button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
