export default function Content2({ planets }) { 
  return (
    <>
      <section className="bg-[#F2F7FF]">
        <div className="mx-auto max-w-6xl px-6 py-[4.5rem] lg:px-10 lg:py-24">
          <div className="mx-auto max-w-xl text-center">
            <h3 className="text-3xl font-semibold leading-tight text-[#2154bb] lg:text-[2.2rem]">
              Visualizing The Differences Between Planets
            </h3>
            <p className="mt-5 text-sm leading-7 text-[#2a3d63] lg:text-base">
              Each planet in our system has unique physical characteristics.
              Visual comparisons help highlight how vastly different
              terrestrial planets are from gas giants and ice giants.
            </p>
          </div>

          {/* Planet cards */}
          <div className="mt-12 rounded-[2rem]  p-5 sm:p-7">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {planets.map((planet) => (
                <article
                  key={planet.name}
                  className="overflow-hidden rounded-[1.35rem] bg-white shadow-[0_10px_30px_rgba(17,53,117,0.08)]"
                > 
                  <img
                    src={planet.image}
                    alt={planet.name}
                    className="h-48 w-full object-cover"
                  />

                  <div className="flex flex-col items-center px-4 py-5 text-center">
                    <h2 className="text-[0.95rem] font-semibold text-[#111827]">
                      {planet.name}
                    </h2>
                    <p className="mt-1 text-sm text-[#334155]">
                      {planet.distanceFromSun}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
