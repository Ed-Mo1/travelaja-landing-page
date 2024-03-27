import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { languages } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const languageSelectorAnimation = {
  initial: {
    opacity: 0,
    top: "-125%",
  },
  animate: {
    opacity: 1,
    top: "125%",
  },
  exit: {
    opacity: 0,
    top: "-125%",
  },
};

const LanguageDropdown = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState("ar");

  const handleLanguageClick = (language) => {
    setIsShowing(false);
    setActiveLanguage(language.code);
  };

  return (
    <div className="relative flex items-center gap-3 ">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={activeLanguage}
        src={languages.find((l) => l.code === activeLanguage).icon}
        className="w-[35px] aspect-square"
      />
      <button
        onClick={() => setIsShowing(!isShowing)}
        className="text-white text-sm flex items-center"
      >
        ID
        <RiArrowDropDownLine className="text-xl" />
      </button>
      <AnimatePresence mode="wait">
        {isShowing && (
          <motion.div
            variants={languageSelectorAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-[125%] rounded right-0 w-[200px] p-2 flex gap-5 flex-col bg-white text-black"
          >
            {languages.map((language) => (
              <button
                key={language.id}
                className="flex gap-3 items-center bg-inherit cursor-pointer hover:opacity-55 transition p-2 rounded"
                onClick={() => handleLanguageClick(language)}
              >
                <img
                  className="w-[32px] aspect-square"
                  src={language.icon}
                  alt="egy"
                />
                <span className="text-sm">{language.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageDropdown;
