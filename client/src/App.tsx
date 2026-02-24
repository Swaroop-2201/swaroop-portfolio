import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import SelectedWork from "./sections/SelectedWorks";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SelectedWork />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}

export default App;