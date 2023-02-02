import React from 'react'
import github from '../assets/github.png'

export default function Footer () {
    return(
        <div className="footer-div">
            <a href="https://github.com/npinak" className="github-btn">
                <img src={github} className="github" />
            </a>
            
        </div>
    )
}