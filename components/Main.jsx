// custom imports
import Hero from './Hero'
import Services from './Services'
import About from './About.jsx'
import Contact from './Contact'

const Main = () => {
  return (
    <main className="flex-grow sm:text-l md:text-xl bg-primary text-secondary text-center font-bold">
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  )
}

export default Main
