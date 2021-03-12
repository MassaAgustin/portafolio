import React, { useState } from 'react'

import './NavBar.css'

export const NavBar = () => {

    const [open, setOpen] = useState(false)

    const getClassLink = () => {
        if(open)
            return "nav-links open"
        else
            return "nav-links"
    }

    const getClassLi = () => {
        return open ? "fade" : ""
    }

    return (
        <nav>
            <div className="menu" onClick={() => setOpen(!open)}>
                <div className="line" />
                <div className="line" />
                <div className="line" />
            </div>
            <ul className={getClassLink()}>
                <li className={getClassLi()}><a href="">About</a></li>
                <li className={getClassLi()}><a href="">Projects</a></li>
                <li className={getClassLi()}><a href="">Contact</a></li>
            </ul>
        </nav>
    )
}
