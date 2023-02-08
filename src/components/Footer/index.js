import * as React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';


function Footer() {

    return (
        <>
            <Navbar bg="light" variant="light" className="p-1 footer" fixed="bottom">
                <Container fluid >

                    <Nav className="justify-content-center flex-grow-1 pe-3">

                        <Nav.Link href="https://www.meherdevs.com/" className="meherdevs">Made with ❤️ by MeherDevs | 2023</Nav.Link>

                    </Nav>

                </Container>
            </Navbar>
        </>
    );
}

export default Footer;