import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, InputGroup, InputGroupAddon, Input } from 'reactstrap';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: '' };

    this.searchClick = this.searchClick.bind(this);
  }

  searchClick() {
    this.setState({ searchValue: '' });
  }

  updateSearchValue(evt) {
    this.setState({
      searchValue: evt.target.value
    });
  }

  render() {
    return (
      <Form inline onSubmit={e => e.preventDefault()}>
        <InputGroup className="mr-2">
          <Input
            placeholder="Series..."
            type="text"
            value={this.state.searchValue}
            onChange={evt => this.updateSearchValue(evt)}
          />
          <InputGroupAddon addonType="append">
            <Button onClick={this.searchClick}>
              <FontAwesomeIcon icon="search" />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    );
  }
}

export default SearchInput;
