import Navbar from "./components/Navbar";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  )
}