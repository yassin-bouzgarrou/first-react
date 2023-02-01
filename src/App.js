
import './App.css';
import React from "react"
import Main from "./compon/Main"
import About from "./compon/About"
import Inter from './compon/Interst';
import Fotter from './compon/Fotter';

export default function App() {
    return (
        <div className="container">
            <Main />
            <About />
            <Inter/>
            <Fotter/>
        </div>
    )
}