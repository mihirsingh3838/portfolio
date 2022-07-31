import "./HobbyCardStyle.css"
import logo from "../assets/logo.png"
import viraaj from "../assets/VIRAAJ.png"
import volleyball from "../assets/Volleyball.png"
import badminton from "../assets/Badminton.png"
import tt from "../assets/Table Tennis.png"
import pixel from "../assets/Pixel 3.0.png"
import code from "../assets/Code Monk.png"
import valor from "../assets/Valor arena.png"
import type from "../assets/Play.png"

import React from 'react'

const HobbyCard = () => {
  return (
    <div className="work-container">
        <h1 className="hobby-heading">Little Creativity Corner</h1>
        <div className="hobby-container">


            <div className="hobby-card">
                <img src={logo} alt="logo"/>
                <h2 className="hobby-title">Viraaj logo</h2>
                <div className="hobby-details">
                    <p>This was the logo I prepared for our College Annual Sports Fest.</p>                    
                </div>
            </div>

            <div className="hobby-card">
                <img src={viraaj} alt="viraaj"/>
                <h2 className="hobby-title">Viraaj Banner</h2>
                <div className="hobby-details">
                    
                </div>
            </div>

            <div className="hobby-card">
                <img src={volleyball} alt="volleyball"/>
                <h2 className="hobby-title">Volleyball Poster</h2>
                <div className="hobby-details">
                    <p>Poster designed for Volleyball competition under Viraaj.</p>
                </div>
            </div>

            <div className="hobby-card">
                <img src={badminton} alt="badminton"/>
                <h2 className="hobby-title">Badminton Poster</h2>
                <div className="hobby-details">
                    <p>Poster designed for Badminton competition under Viraaj.</p>
                </div>
            </div>

            <div className="hobby-card">
                <img src={tt} alt="tt"/>
                <h2 className="hobby-title">Table Tennis Poster</h2>
                <div className="hobby-details">
                    <p>Poster designed for Table Tennis competition under Viraaj.</p>
                </div>
            </div>

            <div className="hobby-card">
                <img src={pixel} alt="pixel"/>
                <h2 className="hobby-title">Pixel Poster</h2>
                <div className="hobby-details">
                    <p>Poster designed for IT department Annual Technical Event.</p>
                </div>
            </div>

            <div className="hobby-card">
                <img src={code} alt="code"/>
                <h2 className="hobby-title">Code Monk Poster</h2>
                <div className="hobby-details">
                    <p>Poster designed for Coding competition under PIXEL.</p>
                </div>
            </div>

            <div className="hobby-card">
                <img src={valor} alt="valor"/>
                <h2 className="hobby-title">Valor Arena Poster</h2>
                <div className="hobby-details">
                    <p>Poster designed for Gaming competition under PIXEL.</p>
                </div>
            </div>

            <div className="hobby-card">
                <img src={type} alt="typeedo"/>
                <h2 className="hobby-title">Typeedo Poster</h2>
                <div className="hobby-details">
                    <p>Poster designed for Typing Competition under PIXEL.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HobbyCard