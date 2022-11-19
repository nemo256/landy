import { 
  BsFillTelephoneFill,
  BsPlayCircleFill
} from 'react-icons/bs'

// custom imports
import CallButton from './CallButton'

const Hero = () => {
  return (
    <section className="px-4 sm:-mb-16 bg-wave-1-bottom-mobile sm:bg-wave-1-bottom bg-cover bg-no-repeat sm:mt-4 center h-screen snap-center">
      <div className="pt-20 flex flex-col sm:flex-row sm:space-x-16 space-y-16 sm:space-y-0">
        <div className="w-full px-2">
          <p className="font-bold cursor-pointer text-center text-4xl text-white">
            UI, UX Design
          </p>
          <p className="font-bold text-center text-4xl text-secondary">
            Made easy!
          </p>
          <p className="mt-8 text-xs text-center text-[#B0B0B0]">
            Design can be art. Design can be aesthetics. Design is so simple, thats why it is so complicated.
          </p>
          <div className="mt-8 flex justify-center space-x-4 mx-auto font-bold whitespace-nowrap">
            <a href="tel:+213556842158" className="text-center">
              <CallButton className="px-4 py-2 hover:bg-secondary hover:bg-secondary hover:scale-105 hover:transition hover:ease-out duration-300">
                <BsFillTelephoneFill className="mr-2 -ml-1 w-4 h-4"/>
                Call Us
              </CallButton>
            </a>
            <a href="tel:+213556842158" className="text-center">
              <CallButton className="px-4 py-2 hover:bg-secondary hover:scale-105 hover:transition hover:ease-out duration-300">
                <BsPlayCircleFill className="mr-2 -ml-1 w-4 h-4"/>
                See More
              </CallButton>
            </a>
          </div>
        </div>
        <div className="bg-book bg-cover bg-no-repeat rounded-3xl sm:w-full h-56 sm:h-auto hover:scale-105 hover:rotate-[-1deg] hover:transition hover:ease-out duration-300">
        </div>
      </div>
    </section>
  )
}

export default Hero
