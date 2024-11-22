import CartWidget from "./CartWidget"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import styles from './Navbar.module.css'


function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className={styles.container}>
        <Navbar.Brand as={Link} to={'/'} className={styles.brandText}>Dunk Shoes</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                <Nav.Link as={Link}to={'/category/zapatillas'}>Zapatillas</Nav.Link>
                <Nav.Link as={Link}to={'/category/indumentaria'}>Indumentaria</Nav.Link>
                <Nav.Link as={Link}to={'/category/accesorios'}>Accesorios</Nav.Link>
            </Nav>
            <CartWidget/>
        </Navbar.Collapse>
        </Container>
    </Navbar>
);
}

export default NavBar;
