"use client";
import { useState } from "react";

export default function InputField({ label, type, id, value, set }) {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className="relative">
      {id === "message" ? (
        <textarea
          className={`w-full outline-none border-2 border-white py-2 px-5 rounded-3xl bg-transparent text-white md:text-lg h-32`}
          type={type}
          id={id}
          value={value}
          onChange={(e) => set(e.target.value)}
          onBlur={() => setIsFocus(false)}
          onFocus={() => setIsFocus(true)}
          required
        ></textarea>
      ) : (
        <input
          className={`w-full outline-none border-2 border-white py-2 px-5 rounded-3xl bg-transparent text-white md:text-lg`}
          type={type}
          id={id}
          value={value}
          onChange={(e) => set(e.target.value)}
          onBlur={() => setIsFocus(false)}
          onFocus={() => setIsFocus(true)}
          required
        />
      )}
      <label
        className={`absolute text-white capitalize font-normal pointer-events-none left-4 px-1 transition-all opacity-70  ${
          value || isFocus
            ? "-top-[6px] text-[10px] dark:bg-[#2f90bd] bg-primary flex opacity-100"
            : id === "message"
            ? "top-3 -translate-y-0"
            : "top-1/2 -translate-y-1/2"
        }`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}
