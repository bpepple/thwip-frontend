import React from "react";
import {
  Container,
  NavbarBrand,
  Nav,
  Navbar,
  NavItem,
  NavLink
} from "reactstrap";

const Header = () => (
  <Container fluid={true}>
    <Navbar className="mb-3" color="dark" dark expand="lg">
      <NavbarBrand href="/series">Thwip!</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/series">Series</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/publisher">Publisher</NavLink>
        </NavItem>
      </Nav>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink disabled href="#">
            Login
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </Container>
);

export default Header;
