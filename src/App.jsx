import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./app.scss";

function App() {
  return (
    <>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section id="Aboutme">
        <Parallax type="aboutme" />
      </section>
      <section id="About">
        <Services />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
