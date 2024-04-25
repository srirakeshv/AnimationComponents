import React from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const Preview = ({ active, setActive, index }) => {
  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      exit={{
        opacity: 0,
        x: 0,
        transition: {
          ease: "easeInOut",
          delay: 0.8,
        },
      }}
      className="fixed top-0 left-0 w-full h-full bg-slate-900 p-3"
    >
      <X
        color="white"
        className="cursor-pointer"
        size={40}
        onClick={() => setActive(null)}
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 }}
        exit={{
          opacity: 0,
          scale: 0,
          transition: {
            ease: "easeInOut",
            delay: 0.5,
          },
        }}
        className="bg-white rounded-md w-full h-[85vh] flex justify-center items-center text-8xl"
      >
        {index}
      </motion.div>
    </motion.div>
  );
};

export default Preview;
