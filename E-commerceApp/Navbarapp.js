import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Navbarapp = () => {
    const state = useSelector((state) => state.card.items)
    console.log(state);
    return (
        <>
            <Navbar fixed='top' bg="light" expand="lg">
                <Container>
                    <Link to='/' className='navbar-brand'>CardApp</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/' className='nav-link'>Products</Link>
                            <Link to='/card' className='nav-link'>Card-{state.length}</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbarapp