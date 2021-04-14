import React, { useState, useContext } from 'react'

import { MainImage } from '../assets/main.js'
import me from '../assets/images/test1.jpg'

import EmailContext from '../context/Context'

import './MainLoader.scss'

const MainLoader = (props) => {

    const [rotate, setRotate] = useState(false)

    const { labels } = useContext(EmailContext)

    const toggleRotate = () => {
        return setRotate(!rotate)
    }

    const getClassImg = () => {
        return rotate ? "rotate" : ""
    }

    return (
            <div className="container-loader" id="main">
            {rotate && <h2 className="appear-text">Desliza!</h2>}
                <a href="#learning">
                    <div className="main-loader" onClick={props.onClick} >
                        <MainImage />
                    </div>
                </a>
                <pre id="typewriter" className="container-text">
                    <span className="var-highlight">var </span>
                    {labels.person} = {"{\n"}
                    {'\n'}    {labels.name}: <span className="string-highlight">{`'Agustin'`}</span>,
                        {'\n'}    {labels.lastName}: <span className="string-highlight">{`'Massa'`}</span>,
                        {'\n'}    {labels.age}: <span className="string-highlight">23</span>,
                        {'\n'}    {labels.like}:[{'\n'}<span className="string-highlight">        '{labels.food}'</span>,
                                    {'\n'}<span className="string-highlight">        'Mate'</span>,
                                    {'\n'}<span className="string-highlight">        '{labels.cat}'{'\n'}    </span>],
                        {'\n'}    avatar:
            </pre>
                <div className="container-img">
                    <img className={getClassImg()} src={me} alt="imagen de Agustin Massa" onClick={toggleRotate} />
                </div >
            </div>
    )
}

export default MainLoader;