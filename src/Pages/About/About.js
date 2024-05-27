import React from 'react'
import Navbar from '../../Components/Navabar/Navbar'
import Story from '../../Components/Storys/Story'
import Experience from '../../Components/Experience/Experience'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import AboutComponents from '../../Components/AboutComponent/AboutComponents'
import Skills from '../../Components/Skills/Skills'

export default function About() {
  return (
    <div>
      <Navbar />
      <AboutComponents />
      <Skills />
      <Story />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
