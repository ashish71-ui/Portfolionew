import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Parallax from "./components/parallax/Parallax"
import Services from "./components/services/Services"
import "./app.scss"
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
function App() {
  
  return (
    <>
    <section id="HomePage">
    <Navbar />
    <Hero/>
</section>
<section id="Parallax"><Parallax type="aboutme"/></section>
<section id="Aboutme"><Services/></section>
<section id="Projects"><Skills/></section>
<section id="Project1"><Projects/></section>

<section id="Contact"><Contact/></section>
</>
  )
}

export default App
