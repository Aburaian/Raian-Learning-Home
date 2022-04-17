import React from "react";
import logo from "../../../images/logo/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img height={30} src={logo} alt="" />
            <span className="p-2">Raian Learning Home</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto fw-bold text-uppercase">
              <Nav.Link href="home#services" as={Link} to="services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="reviews">
                Reviews
              </Nav.Link>
            </Nav>
            <Nav className="fw-bold text-uppercase">
              <Nav.Link as={Link} to="about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
