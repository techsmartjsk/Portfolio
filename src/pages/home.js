import About from '../components/about'
import Contact from '../components/contact'
import ContactButtons from '../components/contact.buttons'
import Experience from '../components/experience'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import Projects from '../components/projects'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ContactButtons />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}
