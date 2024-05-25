import React from "react";

import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">Loyning Cookbook</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Browse</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/random">
            <Nav.Link>Random</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/search">
            <Nav.Link>Search</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
