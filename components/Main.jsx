// custom imports
import Hero from './Hero'
import Services from './Services'
import Projects from './Projects'
import Testimonials from './Testimonials'
import Contact from './Contact'

const Main = () => {
  return (
    <main className="flex-grow sm:text-l md:text-xl bg-primary text-secondary text-center p-16 font-bold">
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  )
}

export default Main
