import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import { Container } from 'reactstrap';

const loadingStyle = {
  position: 'fixed',
  zindex: '1031',
  height: '2em',
  width: '2em',
  margin: 'auto',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0'
};

class ComicPageProvider extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired,
    pages: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired
  };

  state = {
    data: [],
    loaded: false
  };

  componentDidMount() {
    document.body.style.backgroundColor = 'black';

    let i;
    let pageList = [];

    for (i = 0; i < this.props.pages; i++) {
      pageList.push(i);
    }

    const pageImgs = pageList.map(p => {
      return fetch(this.props.endpoint + p + '/').then(response => {
        if (response.status !== 200) {
          console.log('Something went wrong while loading a comic page.');
        }
        return response.json();
      });
    });

    Promise.all(pageImgs).then(data =>
      this.setState({ data: data, loaded: true })
    );
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }

  render() {
    const { data, loaded } = this.state;
    return loaded ? (
      this.props.render(data)
    ) : (
      <Container style={loadingStyle}>
        <ReactLoading type="spinningBubbles" color="blue" />
      </Container>
    );
  }
}

export default ComicPageProvider;
