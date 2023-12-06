"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { GrLanguage } from "react-icons/gr";
import { AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineClose, MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { IoBookOutline, IoMailUnreadOutline } from "react-icons/io5";

export default function Navbar() {
  const [lang, setLang] = useState("ar");
  const [darkMode, setDarkMode] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
      setDarkMode(true);
    } else if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-950 border-b-[1px] border-black relative z-50">
      <div className="container flex justify-around items-center z-50">
        <Logo />
        {!openNav ? (
          <AiOutlineAppstore
          onClick={()=>setOpenNav(true)}  
          className="text-gray-950 cursor-pointer dark:text-white md:hidden"
            size={34}
          />
        ) : (
          <MdOutlineClose
          onClick={()=>setOpenNav(false)}
          className="text-gray-950 cursor-pointer dark:text-white md:hidden"
            size={34}
          />
        )}
        <div className={`resNav ${openNav && 'open'}`}>
          <div className="nav">
            <Link
              href="/"
              className={`px-2 py-1 rounded-lg transition-all ${
                pathname === "/"
                  ? "text-gray-100 dark:text-gray-900 bg-gray-950 dark:bg-white font-semibold"
                  : "hover:text-secondary"
              }`}
            >
              <GoHome className="md:hidden mx-auto mb-2" size={24} />
              Home
            </Link>
            <Link
              href="/lessons"
              className={`px-2 py-1 rounded-lg transition-all ${
                pathname === "/lessons"
                  ? "text-gray-100 dark:text-gray-900 bg-gray-950 dark:bg-white font-semibold"
                  : "hover:text-secondary"
              }`}
            >
              <IoBookOutline className="md:hidden mx-auto mb-2" size={24} />
              Lessons
            </Link>
            <Link
              href="/contact"
              className={`px-2 py-1 rounded-lg transition-all ${
                pathname === "/contact"
                  ? "text-gray-100 dark:text-gray-900 bg-gray-950 dark:bg-white font-semibold"
                  : "hover:text-secondary"
              }`}
            >
              <IoMailUnreadOutline
                className="md:hidden mx-auto mb-2"
                size={24}
              />
              Contact Me
            </Link>
          </div>
          <div className="md:hidden nav">
            <div className="flex items-center gap-3 capitalize hover:text-secondary cursor-pointer">
              <p>{lang}</p>
              <GrLanguage size={24} />
            </div>
            <div className="cursor-pointer hover:text-secondary ">
              <MdSunny
                size={24}
                className={`hidden dark:inline`}
                onClick={() => setDarkMode(false)}
              />
              <IoMdMoon
                size={24}
                className={`inline dark:hidden`}
                onClick={() => setDarkMode(true)}
              />
            </div>
          </div>
        </div>
        <div className="text-gray-950 dark:text-white items-center gap-4 md:flex hidden">
          <div className="flex items-center gap-3 capitalize">
            <p>{lang}</p>
            <GrLanguage size={24} />
          </div>
          <div>
            <MdSunny
              size={24}
              className={`cursor-pointer hidden dark:inline hover:text-secondary`}
              onClick={() => setDarkMode(false)}
            />
            <IoMdMoon
              size={24}
              className={`cursor-pointer inline dark:hidden hover:text-secondary`}
              onClick={() => setDarkMode(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
