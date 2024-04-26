import React, { useState } from "react";
import Preview from "./Preview";
import { motion, AnimatePresence } from "framer-motion";

const ImagePreview = () => {
  const [active, setActive] = useState(false); //setting preview active
  const [index, setIndex] = useState(null); //passing index as props
  const elements = [];

  for (let i = 1; i <= 20; i++) {
    elements.push(
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 200, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex-1 basis-72 h-48 rounded-lg bg-gray-200 cursor-pointer"
        onClick={() => {
          setActive(i + "a");
          setIndex(i + "a");
        }}
        layoutId={i + "a"}
        key={i + "a"}
      ></motion.div>
    );
  }

  return (
    <div
      className="bg-blue-500 p-5 flex gap-4 flex-wrap"
      style={{ minHeight: "100vh" }}
    >
      {elements}
      <AnimatePresence>
        {active === index && (
          <Preview active={active} index={index} setActive={setActive} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImagePreview;
