import React from 'react'

import Navbar from "../components/Navbar"
import Footer  from '../components/Footer'
import ProjectImg from '../components/ProjectImg'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <ProjectImg heading="PROJECTS" text="Some of my most recent works"/>
      <Footer/>
    </div>
  )
}

export default Project