import "./AboutContentStyle.css"

import React from 'react'
import { Link } from "react-router-dom"
import ReactImg from "../assets/react.jpg"
import DjangoImg from "../assets/django.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I 🤨</h1>
            <p>Hey, my name is Mihir and I am an undergraduate final year Engineering student at Rajkiya Engineering College Azamgarh. <p>My branch of engineering is Information Technology.</p> <p>I am also a Full Stack Developer. Currently I am just trying my best to master Data Structures and Algorithms. </p> <p>One thing I can assure you about myself is that I am a quick learner and believes in team work.</p></p>
            <Link to="/contact">
                <button className="btn">CONTACT</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={ReactImg} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={DjangoImg} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent