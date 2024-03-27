import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/Brand.svg";
import { pages } from "../constants";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import LanguageDropdown from "./LanguageDropdown";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navAnimation = {
  initial: {
    opacity: 0,
    top: "-110%",
  },
  animate: {
    opacity: 1,
    top: "110%",
  },
  exit: {
    opacity: 0,
    top: "-110%",
  },
};

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  return (
    <motion.header
      initial={{ top: 0, opacity: 0 }}
      animate={{ top: "1rem", opacity: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        damping: 100,
        stiffness: 600,
        delay: 0.5,
      }}
      className=" z-40 top-4 absolute w-full"
    >
      <div className="container relative flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="flex items-center gap-8 max-lg:hidden">
          {pages.map((page) => (
            <NavLink
              key={page.id}
              to={page.path}
              className={`
                text-base ${page.id === 1 && "font-bold"} ${
                location.pathname !== "home" ? "text-white" : "text-black"
              } `}
            >
              {page.name}
            </NavLink>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <LanguageDropdown />
          <button
            className="text-white text-3xl"
            onClick={() => setShowNav(!showNav)}
          >
            <HiMiniBars3BottomRight className="text-3xl text-white lg:hidden" />
          </button>
        </div>

        <AnimatePresence>
          {showNav && (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={navAnimation}
              className="lg:hidden absolute top-[110%] left-[2.5%] w-[95%] bg-white p-5 z-50 shadow-2xl rounded"
            >
              <ul className="flex items-center flex-col gap-8">
                {pages.map((page) => (
                  <NavLink
                    key={page.id}
                    to={page.path}
                    onClick={() => setShowNav(false)}
                    className={({ isActive }) => `
                    text-base 
                      text-title
                    ${isActive && "font-bold"}`}
                  >
                    {page.name}
                  </NavLink>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Nav;
