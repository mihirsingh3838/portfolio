import React from 'react'
import Navbar from "../components/Navbar"
import Footer  from '../components/Footer'
import ContactImg from '../components/ContactImg'
import Form from '../components/Form'


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <ContactImg/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact