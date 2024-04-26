import React from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const Preview = ({ active, setActive, index }) => {
  return (
    <motion.div
      layoutId={index}
      className="fixed top-0 left-0 w-full h-full p-3 flex justify-center items-center"
      style={{ backgroundColor: "rgba(59, 131, 246, 0.589)" }}
    >
      <div className="bg-white rounded-md max-w-3xl w-full h-[70vh] flex justify-center items-center text-8xl relative">
        <div
          className="absolute top-5 right-5 rounded-full w-10 h-10 flex justify-center items-center"
          style={{ backgroundColor: "rgba(59, 131, 246, 0.137)" }}
        >
          <X
            className="cursor-pointer text-blue-500"
            size={27}
            onClick={() => setActive(null)}
          />
        </div>
        {index}
      </div>
    </motion.div>
  );
};

export default Preview;
