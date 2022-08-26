const Hero = () => {
  return (
    <section className="center bg-secondary text-primary h-screen snap-center">
      <p className="mb-8 underline">Two Column</p>
      <div className="flex flex-row justify-between">
        <div className="text-center w-full">
          Hero | First Column
        </div>
        <div className="text-center w-full">
          Hero | Second Column
        </div>
      </div>
    </section>
  )
}

export default Hero
