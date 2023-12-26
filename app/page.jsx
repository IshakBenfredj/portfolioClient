"use client";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Comments from "./sections/Comments";
import { useEffect, useState } from "react";
import LoadingPage from "./loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <>
      <Landing />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Comments />
    </>
  );
}
