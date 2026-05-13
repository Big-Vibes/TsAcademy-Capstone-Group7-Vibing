const terrestrialPlanets = [
  { name: 'Mercury', mass: '0.330', diameter: '4,879', density: '5427', gravity: '3.7' },
  { name: 'Venus', mass: '4.87', diameter: '12,104', density: '5243', gravity: '8.9' },
  { name: 'Earth', mass: '5.97', diameter: '12,756', density: '5514', gravity: '9.8' },
  { name: 'Mars', mass: '0.642', diameter: '6,792', density: '3933', gravity: '3.7' },
]

const jovianPlanets = [
  { subgroup: 'Gas Giants', name: 'Jupiter', mass: '1898', diameter: '142,984', density: '1326', gravity: '23.1' },
  { subgroup: 'Gas Giants', name: 'Saturn', mass: '568', diameter: '120,536', density: '687', gravity: '9.0' },
  { subgroup: 'Ice Giants', name: 'Uranus', mass: '86.8', diameter: '51,118', density: '1271', gravity: '8.7' },
  { subgroup: 'Ice Giants', name: 'Neptune', mass: '102', diameter: '49,528', density: '1638', gravity: '11.0' },
]

const dwarfPlanets = [
  { name: 'Pluto', mass: '0.0146', diameter: '2,370', density: '2095', gravity: '0.7' },
]

export default function Content3() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20 hidden sm:block">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-[#2154bb]">
            Planetary Facts at a Glance
            
          </h2>
          
          <p className="mt-4 text-sm leading-7 text-[#4a5d7e] sm:text-base">
            Below is a comparative table of major planets in our solar system.
            The arrangement groups similar planets together so the differences
            in mass, diameter, density, and gravity are easier to scan.
          </p>
          <p className="mt-3 text-sm font-medium text-[#2d4678]">
            Data about the planets of our solar system (planetary facts styled
            for quick comparison).
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-[1.5rem] border border-[#d7e3f8] bg-white shadow-[0_18px_40px_rgba(33,84,187,0.08)]">
          <table className="min-w-[980px] w-full border-collapse text-sm text-[#1f2f4f]">
            <thead>
              <tr className="bg-[#2154bb] text-center text-white">
                <th className="border border-white/35 px-4 py-4 font-semibold" colSpan="2">
                  Classification
                </th>
                <th className="border border-white/35 px-4 py-4 font-semibold">
                  Name
                </th>
                <th className="border border-white/35 px-4 py-4 font-semibold">
                  Mass (10 24kg)
                </th>
                <th className="border border-white/35 px-4 py-4 font-semibold">
                  Diameter (km)
                </th>
                <th className="border border-white/35 px-4 py-4 font-semibold">
                  Density (kg/m3)
                </th>
                <th className="border border-white/35 px-4 py-4 font-semibold">
                  Gravity (m/s2)
                </th>
              </tr>
            </thead>

            <tbody>
              {/* Grouped terrestrial rows to match the left-side merged cell layout from the reference UI. */}
              {terrestrialPlanets.map((planet, index) => (
                <tr key={planet.name} className="bg-[#edf4ff] text-center">
                  {index === 0 && (
                    <td
                      rowSpan={terrestrialPlanets.length}
                      colSpan={2}
                      className="border border-white/60 px-6 py-6 align-middle font-semibold text-[#22345c]"
                    >
                      Terrestrial Planets
                    </td>
                  )}
                  <td className="border border-white/60 px-5 py-5 font-medium">
                    {planet.name}
                  </td>
                  <td className="border border-white/60 px-5 py-5">{planet.mass}</td>
                  <td className="border border-white/60 px-5 py-5">{planet.diameter}</td>
                  <td className="border border-white/60 px-5 py-5">{planet.density}</td>
                  <td className="border border-white/60 px-5 py-5">{planet.gravity}</td>
                </tr>
              ))}

              {/* Split the Jovian section into merged parent and subgroup cells for a cleaner arrangement. */}
              {jovianPlanets.map((planet, index) => (
                <tr key={planet.name} className="bg-[#e7f0ff] text-center">
                  {index === 0 && (
                    <td
                      rowSpan={jovianPlanets.length}
                      className="border border-white/60 px-5 py-6 align-middle font-semibold text-[#22345c]"
                    >
                      Jovian Planets
                    </td>
                  )}
                  {(index === 0 || index === 2) && (
                    <td
                      rowSpan={2}
                      className="border border-white/60 px-5 py-6 align-middle font-semibold text-[#22345c]"
                    >
                      {planet.subgroup}
                    </td>
                  )}
                  <td className="border border-white/60 px-5 py-5 font-medium">
                    {planet.name}
                  </td>
                  <td className="border border-white/60 px-5 py-5">{planet.mass}</td>
                  <td className="border border-white/60 px-5 py-5">{planet.diameter}</td>
                  <td className="border border-white/60 px-5 py-5">{planet.density}</td>
                  <td className="border border-white/60 px-5 py-5">{planet.gravity}</td>
                </tr>
              ))}

              {/* Keep dwarf planets compact with a merged classification cell, similar to the reference footer row. */}
              {dwarfPlanets.map((planet) => (
                <tr key={planet.name} className="bg-[#edf4ff] text-center">
                  <td
                    colSpan={2}
                    className="border border-white/60 px-6 py-5 font-semibold text-[#22345c]"
                  >
                    Dwarf Planets
                  </td>
                  <td className="border border-white/60 px-5 py-5 font-medium">
                    {planet.name}
                  </td>
                  <td className="border border-white/60 px-5 py-5">{planet.mass}</td>
                  <td className="border border-white/60 px-5 py-5">{planet.diameter}</td>
                  <td className="border border-white/60 px-5 py-5">{planet.density}</td>
                  <td className="border border-white/60 px-5 py-5">{planet.gravity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
