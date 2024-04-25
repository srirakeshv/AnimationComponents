import React from "react";
import { X } from "lucide-react";

const Menus = ({ active, setActive }) => {
  return (
    <div className="absolute top-0 right-0 w-full h-[100vh] flex flex-col items-center bg-black p-5">
      <X className="self-end cursor-pointer" onClick={() => setActive(false)} />
      <ul className="flex flex-col gap-4 items-center mt-10">
        <li>About</li>
        <li>Company</li>
        <li>Services</li>
        <li>Industries</li>
        <li>Case Study</li>
      </ul>
    </div>
  );
};

export default Menus;
