import { useState } from 'react'
import Content2 from './content2.jsx'
import planetsData from '../assets/planet.json'
import earthImage from '../assets/EARTH-1024_web.png'
import jupiterImage from '../assets/jupiter-v2.jpg'
import marsImage from '../assets/mars-v2.jpg'
import mercuryImage from '../assets/Mercury.jpg'
import neptuneImage from '../assets/neptune-v2.jpg'
import plutoImage from '../assets/pluto.jpg'
import saturnImage from '../assets/saturn-v2.jpg'
import uranusImage from '../assets/uranus-v2.jpg'
import venusImage from '../assets/venus.jpg'

const imageUrlsByPath = {
  './assets/Mercury.jpg': mercuryImage,
  './assets/venus.jpg': venusImage,
  './assets/EARTH-1024_web.png': earthImage,
  './assets/mars-v2.jpg': marsImage,
  './assets/jupiter-v2.jpg': jupiterImage,
  './assets/saturn-v2.jpg': saturnImage,
  './assets/uranus-v2.jpg': uranusImage,
  './assets/neptune-v2.jpg': neptuneImage,
  './assets/pluto.jpg': plutoImage,
}

const FetchPlanets = () => {
  const [planets] = useState(() =>
    Array.isArray(planetsData)
      ? planetsData.map((planet) => ({
          name: planet.planet,
          distanceFromSun: `${planet.distanceFromSun} million km`,
          image: imageUrlsByPath[planet.image] ?? '',
        }))
      : []
  )

  if (!planets.length) return <p className="mt-10 text-center">Loading...</p>

  return <Content2 planets={planets} />
}

export default FetchPlanets
