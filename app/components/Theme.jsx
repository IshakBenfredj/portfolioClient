"use client";

import { useEffect, useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

export default function Theme({ closeNavFunc }) {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (!theme || theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") localStorage.setItem("theme", "light");
  }, []);

  const changeMode = () => {
    const theme = localStorage.getItem("theme");
    if (!theme || theme === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    if (closeNavFunc) closeNavFunc()
  };

  return (
    <div className="cursor-pointer text-secondary">
      <MdSunny
        size={24}
        className={`hidden dark:inline`}
        onClick={changeMode}
      />
      <IoMdMoon
        size={24}
        className={`inline dark:hidden`}
        onClick={changeMode}
      />
    </div>
  );
}
