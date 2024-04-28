import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Snackbar = () => {
  const [snackbarActive, setSnackbarActive] = useState(false); //setting active status

  const handleClick = () => {
    setSnackbarActive(true);
    setTimeout(() => {
      setSnackbarActive(false);
    }, 6000);
  };
  return (
    <div
      className="relative flex justify-center items-center overflow-hidden"
      style={{ height: "100vh" }}
    >
      <button
        className="rounded-md w-32 p-2 bg-blue-500 text-white cursor-pointer"
        onClick={handleClick}
      >
        Click me
      </button>
      <AnimatePresence>
        {snackbarActive && (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{
              y: 40,
              opacity: 0,
              transition: {
                ease: "easeInOut",
                delay: 0.2,
              },
            }}
            className="absolute bottom-4 left-4 flex justify-between items-center p-3 rounded-md bg-slate-950 text-violet-500 w-72"
          >
            <p>Snackbar</p>
            <X
              className="cursor-pointer"
              onClick={() => setSnackbarActive(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Snackbar;
