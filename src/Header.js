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
  <Container>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/series">Thwip!</NavbarBrand>
      <Nav navbar>
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
