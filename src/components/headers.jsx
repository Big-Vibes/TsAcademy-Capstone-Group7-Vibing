import Logo from '../assets/graphics.png'
import Planet from '../assets/Image.png'

export default function Headers() {
  return (
    <>
      <header className="bg-[#051540] text-white">
        <div className="mx-auto flex max-w-6xl items-center px-6 py-6 lg:px-10">
          <img src={Logo} alt="Planet logo" className="h-12 w-auto" />
        </div>
      </header>

      <section className="bg-[#051540] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-14 lg:grid-cols-2 lg:px-10 lg:py-20">
          <div className="max-w-xl justify-self-center lg:justify-self-start">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight lg:text-6xl">
              Explore Our Solar System Through Data
            </h1>

            <p className="mt-6 text-base leading-7 text-white/78 lg:text-lg">
              Understand the planets not just by name, but by measurable facts.
              From size and mass to gravity and density, this page breaks down
              the solar system in a clear, data-driven way.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-md bg-[#164BAF] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1b5cd4]">
                Explore the Data
              </button>
              <button className="rounded-md border border-white/35 px-5 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#051540]">
                Contact Us
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={Planet}
              alt="Planet illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      
    </>
  )
}
