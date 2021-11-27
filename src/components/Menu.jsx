import React, { useState, useContext } from 'react';
import {
   Navbar, Nav, Container
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const navstyle = {
    backgroundColor: "#040e27",
}

const linkstyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '5px',

    ":hover": {
        backgroundColor: "white",
        color: "#040e27",
    }
}

function Menu() {
    return (
        <Navbar variant="dark" expand="lg" style={navstyle}>
            <Container>
                <Navbar.Brand href="/">My Profile</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/" style={linkstyle}>Home</NavLink>
                    <NavLink to="/about" style={linkstyle}>About</NavLink>
                    <NavLink to="/contact" style={linkstyle}>Contact</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu
