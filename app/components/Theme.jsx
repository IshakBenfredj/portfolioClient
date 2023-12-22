"use client";

import { useEffect, useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { useTheme } from "next-themes";

export default function Theme() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return (
    <div></div>
  )

  if (resolvedTheme === "dark") {
    return (
      <div className="cursor-pointer text-secondary">
        <MdSunny
          size={24}
          className={`hidden dark:inline`}
          onClick={() => setTheme("light")}
        />
      </div>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <div className="cursor-pointer text-secondary">
        <IoMdMoon
          size={24}
          className={`inline dark:hidden`}
          onClick={() => setTheme("dark")}
        />
      </div>
    );
  }
}
