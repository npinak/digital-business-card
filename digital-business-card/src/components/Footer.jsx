import React from 'react'
import github from '../assets/github.png'

export default function Footer () {
    return(
        <div className="footer-div">
            <img src={github} className="github"/>
        </div>
    )
}