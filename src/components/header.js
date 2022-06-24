import {Navbar, Container, NavbarBrand, NavLink, Nav, NavDropdown} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

export function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <NavbarBrand href="#">React Basics</NavbarBrand>
                    <NavbarToggle aria-controls="basic-navbar-nav"/>
                    <NavbarCollapse id="basic-navbar-nav">
                        <Nav>
                            <NavLink href="#home">Home</NavLink>
                            <NavDropdown title="Jobs">
                                <NavDropdown.Item href="#jobs/3.1">My Jobs</NavDropdown.Item>
                                <NavDropdown.Item href="#jobs/3.2">Jobs Applications</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </div>
    );
}