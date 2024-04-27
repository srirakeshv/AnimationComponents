import React from "react";
import SideBar from "./SideBar";

const Fullscreen = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 flex justify-center items-center text-5xl font-semibold">
        SideBar Animation
      </div>
    </div>
  );
};

export default Fullscreen;
