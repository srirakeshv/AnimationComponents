import React, { useState } from "react";
import { Menu } from "lucide-react";
import Menus from "./Menus";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className="flex justify-center bg-blue-500 text-white p-3 relative">
      <div className="max-w-6xl w-full flex justify-between items-center">
        <h1 className="text-3xl">Logo</h1>
        <Menu className="cursor-pointer" onClick={() => setActive(true)} />
      </div>
      <AnimatePresence>
        {active && <Menus active={active} setActive={setActive} />}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
