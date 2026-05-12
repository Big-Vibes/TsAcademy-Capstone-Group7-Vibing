import { useState } from 'react'
import Content2 from './content2.jsx'
import planetsData from '../assets/planet.json'
import earthPage from '../assets/Earth2.htm?raw'
import jupiterPage from '../assets/Jupiter.htm?raw'
import marsPage from '../assets/Mars.htm?raw'
import mercuryPage from '../assets/Mecury2.htm?raw'
import neptunePage from '../assets/Neptune.htm?raw'
import plutoPage from '../assets/Pluto.htm?raw'
import saturnPage from '../assets/Saturn.htm?raw'
import uranusPage from '../assets/Uranus.htm?raw'
import venusPage from '../assets/Venus2.htm?raw'

const imagePagesByFile = {
  'Earth2.htm': earthPage,
  'Jupiter.htm': jupiterPage,
  'Mars.htm': marsPage,
  'Mecury2.htm': mercuryPage,
  'Neptune.htm': neptunePage,
  'Pluto.htm': plutoPage,
  'Saturn.htm': saturnPage,
  'Uranus.htm': uranusPage,
  'Venus2.htm': venusPage,
}

const extractOgImage = (html) => {
  const ogImageMatch =
    html.match(/property="og:image"\s+content="([^"]+)"/i) ??
    html.match(/content="([^"]+)"\s+property="og:image"/i)

  return ogImageMatch?.[1] ?? ''
}

const FetchPlanets = () => {
  const [planets] = useState(() =>
    Array.isArray(planetsData)
      ? planetsData.map((planet) => {
          const imageFile = planet.image.split('/').pop()
          const imagePage = imagePagesByFile[imageFile] ?? ''

          return {
            name: planet.planet,
            distanceFromSun: `${planet.distanceFromSun} million km`,
            image: extractOgImage(imagePage),
          }
        })
      : []
  )

  if (!planets.length) return <p className="mt-10 text-center">Loading...</p>

  return <Content2 planets={planets} />
}

export default FetchPlanets
