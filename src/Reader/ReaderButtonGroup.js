import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import history from '../History';

const navbarStyle = {
  position: 'absolute',
  zIndex: '999'
};

class ReaderButtonGroup extends Component {
  constructor(props) {
    super(props);

    this.exitReader = this.exitReader.bind(this);
  }

  exitReader() {
    history.goBack();
  }

  render() {
    return (
      <ButtonGroup style={navbarStyle}>
        <Button onClick={this.exitReader} color="dark">
          <FontAwesomeIcon icon="times-circle" size="lg" />
          <span className="ml-2">Exit</span>
        </Button>
      </ButtonGroup>
    );
  }
}

export default ReaderButtonGroup;
