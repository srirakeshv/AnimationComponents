import React, { useState } from "react";
import {
  Home,
  MessageCircle,
  HandCoins,
  UserRound,
  Settings2,
  LogOut,
  Info,
  CircleChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SideBar = () => {
  const [active, setActive] = useState(false);

  const menus = [
    {
      icon: <Home size={30} className="text-white" />,
      menuname: "Home",
    },
    {
      icon: <MessageCircle size={30} className="text-white" />,
      menuname: "Chat",
    },
    {
      icon: <HandCoins size={30} className="text-white" />,
      menuname: "Finanace",
    },
    {
      icon: <Info size={30} className="text-white" />,
      menuname: "Help",
    },
    {
      icon: <Settings2 size={30} className="text-white" />,
      menuname: "Settings",
    },
  ];
  return (
    <motion.aside
      initial={{ width: 80 }}
      animate={{ width: active ? 200 : 80 }}
      transition={{ duration: 1 }}
      exit={{
        width: 80,
        transition: {
          ease: "easeInOut",
          delay: 0.6,
        },
      }}
      className={`${
        active ? "w-44 items-start" : "w-20 items-center"
      } bg-blue-500 rounded-r-md p-4 px-5 flex flex-col  justify-between relative`}
      style={{ height: "100vh" }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: active ? 180 : 0 }}
        className="absolute top-10 -right-3"
      >
        <CircleChevronRight
          className=" bg-slate-100 rounded-full text-blue-500"
          onClick={() => setActive(!active)}
        />
      </motion.div>
      <div>
        <UserRound size={30} className="text-white" />
        {active && (
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            exit={{
              y: 20,
              opacity: 0,
              transition: {
                ease: "easeInOut",
                delay: 0.2,
              },
            }}
            className="text-white font-semibold flex flex-col gap-2"
          >
            Sri Rakesh V
          </motion.span>
        )}
      </div>
      <ul
        className={`flex flex-col gap-8 ${
          active ? "items-start" : "items-center"
        }`}
      >
        {menus.map((menu, index) => (
          <li className="flex gap-4 items-center" key={index}>
            {menu.icon}
            <AnimatePresence>
              {active && (
                <motion.span
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  exit={{
                    x: 20,
                    opacity: 0,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.2,
                    },
                  }}
                  className="text-white"
                >
                  {menu.menuname}
                </motion.span>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
      <div>
        <LogOut size={30} className="text-white" />
      </div>
    </motion.aside>
  );
};

export default SideBar;
