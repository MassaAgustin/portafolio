import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import './NavBar.css'

export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)


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
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}
