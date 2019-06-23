import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Container, Jumbotron } from 'reactstrap';
import * as actions from '../../actions';

class Logout extends PureComponent {
  componentWillMount() {
    this.props.logoutUser();
  }

  render() {
    return (
      <Container fluid className="text-center">
        <Jumbotron>
          <h1 className="display-6">Logged Out</h1>
        </Jumbotron>
      </Container>
    );
  }
}

export default connect(
  null,
  actions,
)(Logout);
