import "./WorkCardStyle.css"
import portfolio from "../assets/portfolio.jpg"
import lifestyle from "../assets/lifestyle.jpg"
import sih from "../assets/sih.jpg"

import React from 'react'

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">


            <div className="project-card">
                <img src={portfolio} alt="portfolio_project"/>
                <h2 className="project-title">My Personal Portfolio</h2>
                <div className="project-details">
                    <p>This is my personal portfolio, and I have created it in order to display my previous work my skills and overall in order to provide basic details about me anyone who wants to know across the web.</p>
                    <p>List of technologies I have used for preparing this project is as follow:</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React JS</li>
                    </ul>
                    <div className="pro-btns">
                        <a href="#under_progress" target="_blank" rel="noreferrer" className="btn">VIEW</a>
                        <a href="https://github.com/mihirsingh3838/portfolio.git" target="_blank" rel="noreferrer" className="btn">SOURCE</a>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <img src={lifestyle} alt="lifestyle_project"/>
                <h2 className="project-title">LifeStyle Store</h2>
                <div className="project-details">
                    <p>This was my first web development project. In this project I have created an user interface for a sample shopping website. Currently I am trying to implement backend on this project as well using Django and Python.</p>
                    <p>List of technologies I have used for preparing this project is as follow:</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                    </ul>
                    <div className="pro-btns">
                        <a href="https://mihirsingh3838.github.io/Lifestyle_Store/" target="_blank" rel="noreferrer" className="btn">VIEW</a>
                        <a href="https://github.com/mihirsingh3838/Lifestyle_Store.git" target="_blank" rel="noreferrer" className="btn">SOURCE</a>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <img src={sih} alt="sih"/>
                <h2 className="project-title">SIH Garuna</h2>
                <div className="project-details">
                    <p>Our team Garuna qualified for the finals of Smart India Hackathon 2022. This project is a web portal for event management system for AICTE. Currently my role in this project is of Backend Development and this project is still under progress. List of technologies I have used for preparing this project is as follow:</p>
                    <ul>
                        <li>Django</li>
                        <li>Python</li>
                    </ul>
                    <div className="pro-btns">
                        <a href="#under_progress" target="_blank" rel="noreferrer" className="btn">VIEW</a>
                        <a href="https://github.com/SIH22-Team-Garuna/ems.git" target="_blank" rel="noreferrer" className="btn">SOURCE</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default WorkCard