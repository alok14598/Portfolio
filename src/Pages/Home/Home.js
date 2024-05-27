import React from 'react'
import Navbar from "../../Components/Navabar/Navbar.js"
import Header from '../../Components/Header/Header.js'
import Experience from "../../Components/Experience/Experience.js"
import Skills from "../../Components/Skills/Skills.js"
import Story from "../../Components/Storys/Story.js"
import Contact from '../../Components/Contact/Contact.js'
import Footer from '../../Components/Footer/Footer.js'

export default function Home() {
  return (
    <div>
       <Navbar />
    <Header />
    <Experience ></Experience>
    <Skills />
    <Story />
    <Contact />
    <Footer />

    </div>
  )
}
