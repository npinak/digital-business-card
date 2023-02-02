import React from 'react'
import ReactDOM from 'react-dom/client'

export default function About (){
    return(
        <div className="about-div">
            <div className="about-name-div">
                <h3>Pinak Nayak</h3>
                <h4>Frontend Developer</h4>
            </div>
            <div className="about-button-div">
                <a href="mailto:pinak.nayak@gmail.com" className="email-btn">Email</a>
                <a href="https://www.linkedin.com/in/npinak/" className="linkedin-btn">LinkedIn</a>
                {/* <button type="button" className="email-button">
                    Email
                </button>
                <button type="button" className="linkedin-button">
                    LinkedIn
                </button> */}
            </div>
            <div className="about-about-div">
                <h5>About</h5>
                <p>I am a frontend developer who has an interest in making eye-catching designs.
                    I always try to keep-up with the latest developments and am looking for new things to learn. 
                </p>
            </div>
            <div className="about-interest-div">
                <h5>Interests</h5>
                <p>Avid Reader, Guitar Player, and Pencil Art Drawer</p>
            </div>
            {/* need to find a way to add buttons */}
        </div>
    )
}


