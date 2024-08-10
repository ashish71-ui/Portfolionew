import Navbar from "./components/navbar/navbar"
import Hero from "./components/hero/Hero"
import "./app.scss"
function App() {
  
  return (
    <>
    <section id="HomePage">
    <Navbar />
    <Hero/>
</section>
<section id="Parallax">Parallax</section>
<section id="Aboutme">About</section>
<section id="Project1">Project1</section>
<section>Project2</section>
<section>Project3</section>
<section id="Contact">Contact</section>
</>
  )
}

export default App
