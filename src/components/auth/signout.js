import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Container, Jumbotron } from 'reactstrap';

class Signout extends PureComponent {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return (
      <Container fluid={true} className="text-center">
        <Jumbotron>
          <h1 className="display-6">Signed Out</h1>
        </Jumbotron>
      </Container>
    );
  }
}

export default connect(
  null,
  actions
)(Signout);
