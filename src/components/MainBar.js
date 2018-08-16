import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authHeader } from './helpers/auth-header';
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

class MainBar extends Component {
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
    let url = process.env.REACT_APP_API_URL + '/api/issue/import-comics/';

    fetch(url, { method: 'GET', headers: authHeader() }).then(response => {
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

  renderLinks() {
    if (this.props.authenticated) {
      return <NavLink href="/logout">Logout</NavLink>;
    } else {
      return <NavLink href="/login">Login</NavLink>;
    }
  }

  render() {
    return (
      <Container fluid={true}>
        <Navbar className="mb-3" color="dark" dark expand="lg">
          <NavbarBrand href="/series">Thwip!</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/series/page/1">Series</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/publisher/page/1">Publisher</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/issues/recent/page/1">Recently Added</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <Button onClick={this.importComics}>Import</Button>
            <NavItem>{this.renderLinks()}</NavItem>
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

const mapStateToProps = state => {
  return { authenticated: state.auth.authenticated };
};

export default connect(mapStateToProps)(MainBar);
