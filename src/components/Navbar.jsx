import CartWidget from "./CartWidget"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid style={{backgroundColor: "#4a235a", height: "6em"}}>
        <Navbar.Brand as={Link} to={'/'}>Dunk Shoes</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                <Nav.Link as={Link}to={'/category/beauty'}>Zapatillas</Nav.Link>
                <Nav.Link as={Link}to={'/category/fragrances'}>Indumentaria</Nav.Link>
                <Nav.Link as={Link}to={'category/furniture'}>Accesorios</Nav.Link>
            </Nav>
            <Form className="d-flex">
                <Form.Control type="search" placeholder="Buscar" className="me-2" aria-label="Search"/>
                <Button variant="outline-success">Buscar</Button>
            </Form>
            <CartWidget/>
        </Navbar.Collapse>
        </Container>
    </Navbar>
);
}

export default NavBar;
