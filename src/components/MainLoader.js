import React, { Fragment } from 'react'

import { MainImage } from '../assets/main.js'

import './MainLoader.css'



const MainLoader = (props) => {

    return (
        <Fragment>
            <div className="main-loader" onClick={props.onClick} >
                {/* <MainImage /> */}
                <div className="group-writter">
                    <div className="typewritter">
                        <h3>{"{"}</h3>
                        <h3>name: "Agustin"</h3>
                        <h3>lastName: "Massa"</h3>
                    </div>
                    <h3>{"}"}</h3>
                </div>
            </div>
        </Fragment >
    )
}

export default MainLoader;