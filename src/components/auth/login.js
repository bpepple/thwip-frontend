import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { Alert, Button, Container, Form, FormGroup, Label } from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  handleFormSubmit({ username, password }) {
    this.props.loginUser({ username, password });
  }

  renderError() {
    if (this.props.errorMessage) {
      return (
        <Alert
          color="danger"
          isOpen={this.state.visible}
          toggle={this.onDismiss}
        >
          Error: {this.props.errorMessage}
        </Alert>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Container fluid={true}>
        <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <FormGroup>
            <Label>Username:</Label>
            <Field
              className="form-control"
              name="username"
              component="input"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label>Password:</Label>
            <Field
              className="form-control"
              name="password"
              component="input"
              type="password"
            />
          </FormGroup>
          {this.renderError()}
          <Button color="primary" action="submit">
            Login
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { errorMessage: state.auth.error };
};

export default reduxForm({
  form: 'login'
})(
  connect(
    mapStateToProps,
    actions
  )(Login)
);
