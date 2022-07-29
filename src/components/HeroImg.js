import "./HeroImgStyle.css"

import React from 'react'

import IntroImg from "../assets/bg_img.jpg"

import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Hi, My name is Mihir Singh</p>
            <h1>Full Stack Developer</h1>
            <div>
                <Link to="/about" className="btn">About</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg