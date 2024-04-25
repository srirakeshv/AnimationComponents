import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DropDown = () => {
  const [arrow, setArrow] = useState(false);
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
    <div
      className="bg-blue-500 flex justify-center items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-72 h-14 p-2 rounded-md bg-white flex justify-end items-center relative">
        <motion.div
          animate={{ rotate: arrow ? 180 : 0 }}
          onClick={() => setArrow(!arrow)}
          className="cursor-pointer"
        >
          <ChevronDown />
        </motion.div>
        <AnimatePresence>
          {arrow && (
            <motion.ul
              variants={item}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 210, opacity: 1 }}
              transition={{ duration: 0.6 }}
              exit="exit"
              className="absolute top-20 left-0 bg-white p-3 rounded-md w-72 flex flex-col gap-3 text-xl"
            >
              <motion.li
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                exit={{
                  opacity: 0,
                  y: -40,
                  transition: {
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
              >
                Menu1
              </motion.li>
              <motion.li
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                exit={{
                  opacity: 0,
                  y: -40,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.8,
                  },
                }}
              >
                Menu2
              </motion.li>
              <motion.li
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                exit={{
                  opacity: 0,
                  y: -40,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.6,
                  },
                }}
              >
                Menu3
              </motion.li>
              <motion.li
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                exit={{
                  opacity: 0,
                  y: -40,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.4,
                  },
                }}
              >
                Menu4
              </motion.li>
              <motion.li
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                exit={{
                  opacity: 0,
                  y: -40,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.2,
                  },
                }}
              >
                Menu5
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DropDown;
