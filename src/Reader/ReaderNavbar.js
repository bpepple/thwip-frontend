import React, { Component } from 'react';
import { Button, Nav, Navbar, NavItem } from 'reactstrap';

const navbarStyle = {
  position: 'absolute',
  zIndex: '999'
};

class ReaderNavbar extends Component {
  constructor(props) {
    super(props);

    this.exitReader = this.exitReader.bind(this);
  }

  exitReader() {
    console.log('Exit button clicked.');
  }

  render() {
    return (
      <Navbar style={navbarStyle} color="black" light expand={false}>
        <Nav navbar>
          <NavItem>
            <Button onClick={this.exitReader}>Exit Reader</Button>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default ReaderNavbar;
