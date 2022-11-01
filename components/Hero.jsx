const Hero = () => {
  return (
    <section className="center bg-black h-screen snap-center">
      <div className="mt-16 flex flex-row justify-between space-x-16 px-8">
        <div className="font-bold w-full justify-center">
          <p className="cursor-pointer text-center text-4xl text-white">
            UI, UX Design
          </p>
          <p className="text-center text-4xl text-secondary">
            Made easy!
          </p>
          <p className="mt-8 text-xs text-[#B0B0B0]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
        <div className="text-center text-white w-full">
          Hero | Second Column
        </div>
      </div>
    </section>
  )
}

export default Hero
