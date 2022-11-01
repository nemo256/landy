import { 
  BsFillTelephoneFill,
  BsFillPlayFill
} from 'react-icons/bs'

// custom imports
import CallButton from './CallButton'

const Hero = () => {
  return (
    <section className="center bg-black h-screen snap-center">
      <div className="mt-20 flex flex-row justify-between space-x-16 px-6">
        <div className="w-full">
          <p className="font-bold cursor-pointer text-center text-4xl text-white">
            UI, UX Design
          </p>
          <p className="font-bold text-center text-4xl text-secondary">
            Made easy!
          </p>
          <p className="mt-8 text-xs text-[#B0B0B0]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="mt-8 flex mx-auto font-bold justify-between space-x-4 px-16 whitespace-nowrap">
            <a href="tel:+213556842158" className="text-center">
              <CallButton>
                <BsFillTelephoneFill className="mr-2 -ml-1 w-4 h-4"/>
                Call Us
              </CallButton>
            </a>
            <a href="tel:+213556842158" className="text-center">
              <CallButton>
                See More
              </CallButton>
            </a>
          </div>
        </div>
        <div className="text-center text-white w-full">
          Hero | Second Column
        </div>
      </div>
    </section>
  )
}

export default Hero
