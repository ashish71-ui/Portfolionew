import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import DataSection from "./components/datasection/DataSection";
import HobbyBlog from "./components/HobbyBlog/HobbyBlog";
import { ThemeProvider } from "./context/ThemeContext";

import "./app.scss";

function App() {
  return (
    <ThemeProvider>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>

      <section id="about">
        <DataSection />
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
      <section id="Hobby">
        <HobbyBlog />
      </section>
    </ThemeProvider>
  );
}

export default App;
