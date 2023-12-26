import { useContext, useEffect, useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { Lang } from "../providers";

export default function Languages({ closeNavFunc }) {
  const [mounted, setMounted] = useState(true);
  const { lang, setLang } = useContext(Lang)

  useEffect(() => {
    setMounted(false);
  }, []);

  const changeLang = () => {
    const newLang = lang === "en" ? "ar" : "en";
    localStorage.setItem("lang", newLang);
    document.body.classList.toggle("ar", newLang === "ar");
    setLang(newLang);
  };

  return (
    <div
      className="flex items-center gap-2 capitalize hover:text-secondary cursor-pointer"
      onClick={changeLang}
    >
      {!mounted && <p>{lang === "en" ? "ar" : "en"}</p>}
      <GrLanguage size={24} onClick={closeNavFunc} />
    </div>
  );
}
