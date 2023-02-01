import React from 'react'
import ReactDOM from 'react-dom/client'
import profilePic from '../assets/Profile-Pic.jpg'

export default function Picture (){
    return(
        <div className="picture-div">
            <img src={profilePic} className="profile-pic" />
        </div>
    )
}