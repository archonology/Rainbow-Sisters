import * as React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';



function Header() {

    return (
        <>
            <Navbar bg="transparent" variant="dark" className="mb-3 p-4" expand="md" id="#top">
                <Container fluid >
                    <Navbar.Brand as={Link} to="/" className="title">the <span className="red">Rainbow</span> Sisters</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md}`}
                        placement="end"
                        className="bg-dark variant-white"
                    >
                        <Offcanvas.Header closeButton>

                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md}`}>
                                the Rainbow Sisters
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">

                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/art">Artwork</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                
                                {/* <Nav.Link href="https://buy.stripe.com/cN26ox1O4eMkf7ifYY" target={'_blank'} rel={'nonreferrer'}>Donate</Nav.Link> */}

                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;