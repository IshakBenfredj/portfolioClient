import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link
      href={"/dashboard"}
      className="text-gray-950 dark:text-white whitespace-nowrap font-bold tracking-widest p-3 text-center text-xl rounded-md block"
    >
      <span className="text-primary">&lt;</span>
      <span className="md:inline hidden">IshakBenfredj</span>
      <span className="md:hidden inline">IB</span>
      <span className="text-primary"> /&gt;</span>
    </Link>
  );
}