import Navbar from "./components/Navbar";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Services />
      <Portfolio />
    </>
  )
}