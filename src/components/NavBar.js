import React, { useState, useContext } from 'react'

import { Link } from 'react-router-dom'

import EmailContext from '../context/Context'

import './NavBar.css'

export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const { labels } = useContext(EmailContext)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    const getClassLink = () => {
        return isOpen ? "nav-links open":"nav-links"
    }

    return (
        <nav id="navbar">
            <div className={"menu"} onClick={toggleOpen}>
                <div className="line" />
                <div className="line" />
                <div className="line" />
            </div>
            <ul className={getClassLink()} onClick={toggleOpen}>
                {/* <li className="link-left">Agustin Massa</li> */}
                <li><Link to="/about">{labels.about}</Link></li>
                <li><Link to="/projects">{labels.projects}</Link></li>
                <li><Link to="/contact">{labels.contact}</Link></li>
            </ul>
        </nav>
    )
}
