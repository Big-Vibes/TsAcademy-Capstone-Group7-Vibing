import { useRef, useState } from 'react'
import Headers from './components/headers.jsx'
import Content1 from './components/content1.jsx'
import FetchPlanets from './components/fetch.jsx'
import Content3 from './components/content3.jsx'
import Content4 from './components/content4.jsx'
import Footers from './components/footer.jsx'

function App() {
  const dataSectionRef = useRef(null)
  const contactSectionRef = useRef(null)
  const activeSectionTimeoutRef = useRef(null)
  const [activeSection, setActiveSection] = useState('')

  function scrollToSection(sectionName) {
    const targetRef =
      sectionName === 'data' ? dataSectionRef : contactSectionRef

    setActiveSection(sectionName)
    targetRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    window.clearTimeout(activeSectionTimeoutRef.current)
    activeSectionTimeoutRef.current = window.setTimeout(() => {
      setActiveSection('')
    }, 1200)
  }

  return (
    <>
      <Headers
        onExploreData={() => scrollToSection('data')}
        onContactUs={() => scrollToSection('contact')}
      />
      <Content1 />
      <div
        ref={dataSectionRef}
        className={`scroll-mt-24 ${
          activeSection === 'data' ? 'section-rolldown' : ''
        }`}
      >
        <FetchPlanets />
      </div>
      <Content3 />
      <div
        ref={contactSectionRef}
        className={`scroll-mt-24 ${
          activeSection === 'contact' ? 'section-rolldown' : ''
        }`}
      >
        <Content4 />
      </div>
      <Footers />
    </>
  )
}

export default App
