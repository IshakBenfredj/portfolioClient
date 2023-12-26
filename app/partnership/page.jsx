"use client";
import { useEffect, useState } from "react";
import LoadingPage from "../loading";

export default function page() {
  const [loadingPage, setLoadingPage] = useState(true);
  useEffect(() => {
    setLoadingPage(false);
  }, []);

  if (loadingPage) {
    return <LoadingPage />;
  }
  return <div className="section pt-20 text-gray-800 dark:text-gray-200">
    
  </div>;
}