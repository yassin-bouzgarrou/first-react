import React from "react"
import logo from '../images/Face1.JPG'


export default function Main() {
    return (
        <div className="dival">
            <img className="logo" src={logo} />
            <h1 className="title">Yassin bouzgarrou</h1>
            <p> Frontend Developer</p>
            <button> Email</button>
        </div>
    )
}