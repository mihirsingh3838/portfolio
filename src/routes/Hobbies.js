import React from 'react'
import Navbar from "../components/Navbar"
import Footer  from '../components/Footer'
import HobbiesImg from '../components/HobbiesImg'
import HobbyCard from '../components/HobbyCard'

const Hobbies = () => {
  return (
    <div>
      <Navbar/>
      <HobbiesImg/>
      <HobbyCard/>
      <Footer/>
    </div>
  )
}

export default Hobbies