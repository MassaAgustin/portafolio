import React from 'react'

import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <li className="nav-item">Home</li>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link className="navbar-brand" to="/aboutme">
                            <li className="nav-item">AboutMe</li>
                        </Link>
                        <Link className="navbar-brand" to="/contact">
                            <li className="nav-item">Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
