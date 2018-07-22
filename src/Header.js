import React, { Component } from 'react';
import {
  Button,
  Container,
  NavbarBrand,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  UncontrolledAlert
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { success: false, color: 'info', placeholder: '' };

    this.importComics = this.importComics.bind(this);
  }

  importComics() {
    let url = process.env.REACT_APP_API_URL + '/api/issue/import_comics/';

    fetch(url).then(response => {
      if (response.status !== 200) {
        return this.setState({
          success: true,
          color: 'danger',
          placeholder: 'Something went wrong with the import.'
        });
      } else {
        return this.setState({
          success: true,
          color: 'info',
          placeholder: 'Started Comic Import.'
        });
      }
    });
  }

  render() {
    return (
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
            <Button onClick={this.importComics}>Import</Button>
            <NavItem>
              <NavLink disabled href="#">
                Login
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        {this.state.success ? (
          <UncontrolledAlert color={this.state.color}>
            {this.state.placeholder}
          </UncontrolledAlert>
        ) : null}
      </Container>
    );
  }
}

export default Header;
