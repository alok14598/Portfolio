import React from 'react'
import "./ContactPage.css"

import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import ContactForm from '../../Components/ContactForm/ContactForm'
import Navbar from '../../Components/Navabar/Navbar'

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <ContactForm />
      <Contact />
      <Footer />
    </div>
  )
}
