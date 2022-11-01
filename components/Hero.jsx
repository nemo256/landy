import { 
  BsFillTelephoneFill,
  BsPlayCircleFill
} from 'react-icons/bs'

// custom imports
import CallButton from './CallButton'

const Hero = () => {
  return (
    <section className="center bg-black h-screen snap-center">
      <div className="mt-20 flex flex-col sm:flex-row sm:space-x-16 md:space-x-16 xs:space-y-16">
        <div className="w-full p-2">
          <p className="font-bold cursor-pointer text-center text-4xl text-white">
            UI, UX Design
          </p>
          <p className="font-bold text-center text-4xl text-secondary">
            Made easy!
          </p>
          <p className="mt-8 text-xs xs:text-center text-[#B0B0B0]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="mt-8 flex justify-center space-x-4 mx-auto font-bold whitespace-nowrap">
            <a href="tel:+213556842158" className="text-center">
              <CallButton className="px-4 py-2 hover:bg-secondary">
                <BsFillTelephoneFill className="mr-2 -ml-1 w-4 h-4"/>
                Call Us
              </CallButton>
            </a>
            <a href="tel:+213556842158" className="text-center">
              <CallButton className="px-4 py-2 hover:bg-secondary">
                <BsPlayCircleFill className="mr-2 -ml-1 w-4 h-4"/>
                See More
              </CallButton>
            </a>
          </div>
        </div>
        <div className="bg-background bg-cover rounded-3xl sm:w-full h-48">
        </div>
      </div>
    </section>
  )
}

export default Hero
