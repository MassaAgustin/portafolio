import React from 'react'

import { Link } from 'react-router-dom'

import './NavBar.css'

export const NavBar = () => {

    const openForm = () => {

        const navLinks = document.querySelector(".nav-links")
        const links = document.querySelectorAll(".nav-links li")

        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade")
        })
    }

    return (
        <nav>
            <div className="menu" onClick={() => openForm()}>
                <div className="line" />
                <div className="line" />
                <div className="line" />
            </div>
            <ul className="nav-links">
                <li className="link-left">Agustin Massa</li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}
