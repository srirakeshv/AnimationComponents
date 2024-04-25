import React from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const Menus = ({ active, setActive }) => {
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.9,
      },
    },
  };

  return (
    <motion.div
      variants={item}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "100vh", opacity: 1 }}
      transition={{ duration: 0.6 }}
      exit="exit"
      className="absolute top-0 right-0 w-full h-[100vh] flex flex-col items-center bg-black p-5"
    >
      <X className="self-end cursor-pointer" onClick={() => setActive(false)} />
      <ul className="flex flex-col gap-4 items-center mt-10">
        <motion.li
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          exit={{
            opacity: 0,
            y: 80,
            transition: {
              ease: "easeInOut",
              delay: 1,
            },
          }}
        >
          About
        </motion.li>
        <motion.li
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          exit={{
            opacity: 0,
            y: 80,
            transition: {
              ease: "easeInOut",
              delay: 0.8,
            },
          }}
        >
          Company
        </motion.li>
        <motion.li
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          exit={{
            opacity: 0,
            y: 80,
            transition: {
              ease: "easeInOut",
              delay: 0.6,
            },
          }}
        >
          Services
        </motion.li>
        <motion.li
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          exit={{
            opacity: 0,
            y: 80,
            transition: {
              ease: "easeInOut",
              delay: 0.4,
            },
          }}
        >
          Industries
        </motion.li>
        <motion.li
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          exit={{
            opacity: 0,
            y: 80,
            transition: {
              ease: "easeInOut",
              delay: 0.2,
            },
          }}
        >
          Case Study
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default Menus;
