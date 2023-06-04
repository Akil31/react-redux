import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">Shop Now</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <a href="/" className="nav-link">Home</a>
                         <a href='/products' className="nav-link">Products</a>
                        <a href='/add/:productId' className="nav-link">Add Card</a>
                        <a href='/login' className="nav-link">Login</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

