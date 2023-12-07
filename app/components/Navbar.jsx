"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { GrLanguage } from "react-icons/gr";
import { AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { IoBookOutline, IoMailUnreadOutline } from "react-icons/io5";
import Theme from "./Theme";

export default function Navbar() {
  const [lang, setLang] = useState("ar");
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);

  useEffect(() => {
    const closeNavOnOutsideClick = (event) => {
      if (openNav && navRef.current && !navRef.current.contains(event.target)) {
        setOpenNav(false);
      }
    };

    document.body.addEventListener("click", closeNavOnOutsideClick);

    return () => {
      document.body.removeEventListener("click", closeNavOnOutsideClick);
    };
  }, [openNav]);

  return (
    <div
      ref={navRef}
      className="z-50 fixed right-0 left-0"
    >
      <div className="container flex md:justify-around justify-between items-center z-50">
        <Logo />
        {!openNav ? (
          <AiOutlineAppstore
            onClick={() => setOpenNav(true)}
            className="text-gray-950 cursor-pointer dark:text-white md:hidden"
            size={34}
          />
        ) : (
          <MdOutlineClose
            onClick={() => setOpenNav(false)}
            className="text-gray-950 cursor-pointer dark:text-white md:hidden"
            size={34}
          />
        )}
        <nav className={`resNav ${openNav && "open"}`}>
          <div className="nav">
            <Link
              href="/"
              className={`px-2 py-1 rounded-lg font-semibold transition-all ${
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
              className={`px-2 py-1 rounded-lg font-semibold transition-all ${
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
              className={`px-2 py-1 rounded-lg font-semibold transition-all ${
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
            <Theme />
          </div>
        </nav>
        <div className="text-gray-950 dark:text-white items-center gap-4 md:flex hidden">
          <div className="flex items-center gap-3 capitalize hover:text-secondary cursor-pointer">
            <p>{lang}</p>
            <GrLanguage size={24} />
          </div>
          <Theme />
        </div>
      </div>
    </div>
  );
}