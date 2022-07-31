import React from 'react'

import Navbar from "../components/Navbar"
import Footer  from '../components/Footer'
import ProjectImg from '../components/ProjectImg'
import WorkCard from '../components/WorkCard'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <ProjectImg/>
      <WorkCard/>
      <Footer/>
    </div>
  )
}

export default Project