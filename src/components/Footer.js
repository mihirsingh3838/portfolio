import "./FooterStyle.css"

import React from 'react'
import  { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <p>
                        <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                        Naini, Prayagraj
                    </p>
                </div>

                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />
                        8303064007
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />
                        mihir3838singh@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <div className="social">
                    <a href="https://www.facebook.com/mihir.singh.9678067">
                        <FaFacebook size={20} style={{color: "#fff", marginRight: "1rem"}} />
                    </a>
                    
                    <a href="https://www.instagram.com/mihir_3838/">
                        <FaInstagram size={20} style={{color: "#fff", marginRight: "1rem"}} />
                    </a>

                    <a href="https://www.linkedin.com/in/mihirSingh38/">
                        <FaLinkedin size={20} style={{color: "#fff", marginRight: "1rem"}} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer