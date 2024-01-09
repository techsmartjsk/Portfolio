import About from '../components/about'
import ContactButtons from '../components/contact.buttons'
import Experience from '../components/experience'
import Hero from '../components/hero'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ContactButtons />
      <About/>
      <Experience/>
    </>
  )
}
