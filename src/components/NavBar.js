import React from 'react'

import { Navbar, Nav, OverlayTrigger, Popover } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const DetailsMe = (
    <Popover id="popoverDetailMe" className="bg-secondary">
        <Popover.Title as="h3" className="bg-dark text-light">Hey there! I want improve</Popover.Title>
        <Popover.Content className="text-light">
            <ul>
                <li><strong>Soft</strong> skills</li>
                <li>English</li>
                <li>Hard skills</li>
                <li>Mobile tech</li>
            </ul>
        </Popover.Content>
    </Popover>
);

export const NavBar = () => {

    return (
        <Navbar collapseOnSelect={true} expand="lg" bg="dark" variant="dark" >
            <Navbar.Brand as={Link} to="/" >Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/aboutme">About Me</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
                <Nav>
                    <OverlayTrigger trigger="hover" placement="bottom" overlay={DetailsMe}  >
                        <Nav.Link href="">Agustin Massa, Software Developer</Nav.Link>
                    </OverlayTrigger>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
