import React from 'react'

import { MainImage } from '../assets/main.js'



const MainLoader = (props) => {

    return (
        <div className="main-loader" onClick={props.onClick} >
            <MainImage />
        </div>
    )
}

export default MainLoader;