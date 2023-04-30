import React from "react";

import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => (
  <Nav className="flex-column" variant="pills">
    <LinkContainer to="/">
      <Nav.Link>Random</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/search">
      <Nav.Link>Search</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/browse">
      <Nav.Link>Browse</Nav.Link>
    </LinkContainer>
  </Nav>
);

export default Navigation;
