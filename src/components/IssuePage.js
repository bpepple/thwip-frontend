import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IssueCard from './IssueCard';
import MainPagination from './MainPagination';

class IssuePage extends Component {
  constructor(props) {
    super(props);

    this.state = { data: [], loaded: false };
  }

  componentDidMount() {
    fetch(this.props.endpoint)
      .then(response => {
        if (response.status !== 200) {
          console.log('Something went wrong');
        }
        return response.json();
      })
      .then(data => this.setState({ data: data, loaded: true }));
  }

  render() {
    const { data, loaded } = this.state;

    return loaded ? (
      <React.Fragment>
        <IssueCard data={data} />
        <MainPagination totalRecords={data.count} />
      </React.Fragment>
    ) : null;
  }
}

IssuePage.propTypes = {
  endpoint: PropTypes.string.isRequired
};

export default IssuePage;
