import React, { useState } from 'react'

import './NavBar.css'

export const NavBar = () => {

    const [open, setOpen] = useState(false)

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
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}
