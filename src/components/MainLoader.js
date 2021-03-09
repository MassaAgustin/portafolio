import React from 'react'

import { MainImage } from '../assets/main.js'



const MainLoader = (props) => {

   /*  const logos = document.querySelectorAll("#logo path")
    logos.forEach((logo, index) => {
        console.log("elemento: ",index," tamaño: ", `${Math.round(logo.getTotalLength())}px`)
    }) */
    return (
        <div className="main-loader" onClick={props.onClick} >
            <MainImage />
        </div>
    )
}

export default MainLoader;