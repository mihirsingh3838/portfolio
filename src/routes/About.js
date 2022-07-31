import React from 'react'
import Navbar from "../components/Navbar"
import Footer  from '../components/Footer'
import AboutImg from '../components/AboutImg'
import AboutContent from '../components/AboutContent'


const About = () => {
  return (
    <div>
      <Navbar/>
      <AboutImg/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About