"use client";
import React, { useContext, useEffect, useState } from "react";
import LoadingPage from "../loading";
import Title from "../components/Title";
import { Lang } from "../providers";
import terms from "../terms";

export default function page() {
  const [loadingPage, setLoadingPage] = useState(true);
  const { data, lang } = useContext(Lang);

  useEffect(() => {
    setLoadingPage(false);
  }, []);

//   if (loadingPage) {
//     return <LoadingPage />;
//   }
  return (
    <div className="section min-h-screen pt-20">
      <div className="container md:w-2/3 w-full mx-auto">
        <Title title={data.termsTitle} />
        <div className="space-y-3">
          {terms[lang]?.map((t, index) => (
            <div key={index}>
              <div className="text-primary text-xl font-semibold mb-1">{t.title}:</div>
              <p className="dark:text-white text-lg text-gray-800">{t.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
