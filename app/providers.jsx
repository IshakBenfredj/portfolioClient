"use client";
import { ThemeProvider } from "next-themes";
import { createContext, useEffect, useState } from "react";
import en from "../messages/en.js";
import ar from "../messages/ar.js";

export const Lang = createContext();

export function Providers({ children }) {
  const [lang, setLang] = useState("");
  const [data, setData] = useState(en);

  useEffect(() => {
    if (
      !localStorage.getItem("lang") ||
      localStorage.getItem("lang") === "en"
    ) {
      setLang("en");
      setData(en);
    } else {
      setLang("ar");
      setData(ar);
    }
    document.body.classList.toggle("ar", lang === "ar");
  }, [lang]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Lang.Provider value={{ lang, setLang, data }}>{children}</Lang.Provider>
    </ThemeProvider>
  );
}
