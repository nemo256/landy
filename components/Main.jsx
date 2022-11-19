// custom imports
import Hero from './Hero'
import Features from './Features'
import About from './About.jsx'
import Contact from './Contact'

const Main = () => {
  return (
    <main className="flex-grow sm:text-l md:text-xl bg-primary text-secondary">
      <Hero />
      <Features />
      <About />
      <Contact />
    </main>
  )
}

export default Main
