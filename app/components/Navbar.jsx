"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { IoBookOutline, IoMailUnreadOutline } from "react-icons/io5";
import Theme from "./Theme";
import Languages from "./Languages";
import { Lang } from "../providers";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const { data } = useContext(Lang);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const closeNavOnOutsideClick = (event) => {
      if (openNav && navRef.current && !navRef.current.contains(event.target)) {
        closeNavFunc();
      }
    };

    document.body.addEventListener("click", closeNavOnOutsideClick);

    return () => {
      document.body.removeEventListener("click", closeNavOnOutsideClick);
    };
  }, [openNav]);

  const openNavFunc = () => {
    setOpenNav(true);
    document.body.classList.add("openNav");
  };
  const closeNavFunc = () => {
    if (openNav) {
      setOpenNav(false);
      document.body.classList.remove("openNav");
    }
  };

  return (
    <div
      ref={navRef}
      className={`z-50 fixed right-0 left-0 ${scrolled && " backdrop-blur"}`}
    >
      <div className="container flex md:justify-around justify-between items-center z-50">
        <Logo />
        {!openNav ? (
          <AiOutlineAppstore
            onClick={openNavFunc}
            className="text-gray-950 cursor-pointer dark:text-white md:hidden"
            size={34}
          />
        ) : (
          <MdOutlineClose
            onClick={closeNavFunc}
            className="text-gray-950 cursor-pointer dark:text-white md:hidden"
            size={34}
          />
        )}
        <nav className={`resNav ${openNav && "open"}`}>
          <div className="nav">
            <Link
              href="/"
              onClick={closeNavFunc}
              className={`px-2 py-1 rounded-lg font-semibold transition-all ${
                pathname === "/" || pathname === "/ar"
                  ? "text-gray-100 dark:text-gray-900 bg-gray-950 dark:bg-white font-semibold"
                  : "hover:text-secondary"
              }`}
            >
              <GoHome className="md:hidden mx-auto mb-2" size={24} />
              {data.navbar.home}
            </Link>
            <Link
              href="/lessons"
              onClick={closeNavFunc}
              className={`px-2 py-1 rounded-lg font-semibold transition-all ${
                pathname === "/lessons" || pathname === "/ar/lessons"
                  ? "text-gray-100 dark:text-gray-900 bg-gray-950 dark:bg-white font-semibold"
                  : "hover:text-secondary"
              }`}
            >
              <IoBookOutline className="md:hidden mx-auto mb-2" size={24} />
              {data.navbar.lessons}
            </Link>
            <Link
              href="/contact"
              onClick={closeNavFunc}
              className={`px-2 py-1 rounded-lg font-semibold transition-all ${
                pathname === "/contact" || pathname === "/ar/contact"
                  ? "text-gray-100 dark:text-gray-900 bg-gray-950 dark:bg-white font-semibold"
                  : "hover:text-secondary"
              }`}
            >
              <IoMailUnreadOutline
                className="md:hidden mx-auto mb-2"
                size={24}
              />
              {data.navbar.contact}
            </Link>
          </div>
          <div className="md:hidden nav">
            <Languages closeNavFunc={closeNavFunc} />
            <Theme closeNavFunc={closeNavFunc} />
          </div>
        </nav>
        <div className="text-gray-950 dark:text-white items-center gap-4 md:flex hidden">
          <Languages closeNavFunc={closeNavFunc} />
          <Theme />
        </div>
      </div>
    </div>
  );
}
