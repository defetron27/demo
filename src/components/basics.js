import {Button, Row, Col, Navbar, Container, NavbarBrand, NavLink, Nav, NavDropdown, NavItem} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {useState} from "react";

export function Header() {
    const [count, setCount] = useState(0);

    function addCount() {
        setCount(count + 1);
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <NavbarBrand>React Basics</NavbarBrand>
                    <NavbarToggle aria-controls="basic-navbar-nav"/>
                    <NavbarCollapse id="basic-navbar-nav">
                        <Nav>
                            <NavLink href="https://www.google.com">Hello</NavLink>
                            <NavDropdown title="Dummy">
                                <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav1" />
                    <Navbar.Collapse id="basic-navbar-nav1">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <p>Hello</p>
            <Button variant='secondary'>Hello</Button>
            <Button variant='outline-secondary'>Hello</Button>
            <Row className="mx-0">
                <Button as={Col} variant="primary">Button #1</Button>
                <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
                <Button as={Col} variant="success" onClick={addCount}>Button #3 {count}</Button>
            </Row>
        </div>
    );
}