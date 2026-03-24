import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Experiences from './Sections/Experiences'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="work">
        <Projects />
      </section>

      <Experiences />

      <section id="contact">
        <Contact/>
      </section>

      <Footer />
    </div>
  )
}

export default App