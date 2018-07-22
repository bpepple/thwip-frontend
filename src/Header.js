import React, { Component } from 'react';
import {
  Alert,
  Button,
  Container,
  NavbarBrand,
  Nav,
  Navbar,
  NavItem,
  NavLink
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, color: 'info', placeholder: '' };

    this.onDismiss = this.onDismiss.bind(this);
    this.importComics = this.importComics.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  importComics() {
    let url = process.env.REACT_APP_API_URL + '/api/issue/import_comics/';

    fetch(url).then(response => {
      if (response.status !== 200) {
        return this.setState({
          visible: true,
          color: 'danger',
          placeholder: 'Something went wrong with the import.'
        });
      } else {
        return this.setState({
          visible: true,
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
        {this.state.visible ? (
          <Alert
            color={this.state.color}
            isOpen={this.state.visible}
            toggle={this.onDismiss}
          >
            {this.state.placeholder}
          </Alert>
        ) : null}
      </Container>
    );
  }
}

export default Header;
