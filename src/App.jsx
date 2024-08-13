import Navbar from "./components/navbar/navbar"
import Hero from "./components/hero/Hero"
import Parallax from "./components/parallax/parallax"
import Services from "./components/services/Services"
import "./app.scss"
function App() {
  
  return (
    <>
    <section id="HomePage">
    <Navbar />
    <Hero/>
</section>
<section id="Parallax"><Parallax type="aboutme"/></section>
<section id="Aboutme"><Services/></section>
<section id="Projects"><Parallax type="projects"/></section>
<section id="Project1">Project1</section>
<section>Project2</section>
<section>Project3</section>
<section id="Contact">Contact</section>
</>
  )
}

export default App
