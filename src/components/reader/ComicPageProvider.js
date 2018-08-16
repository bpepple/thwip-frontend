import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import { Container } from 'reactstrap';
import { authHeader } from '../helpers/auth-header';

const loadingStyle = {
  position: 'fixed',
  zIndex: '1031',
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
    render: PropTypes.func.isRequired
  };

  state = {
    data: [],
    pages: 0,
    leaf: 0,
    slug: '',
    loaded: false
  };

  componentDidMount() {
    document.body.style.backgroundColor = 'black';

    fetch(this.props.endpoint, { method: 'GET', headers: authHeader() })
      .then(response => {
        if (response.status !== 200) {
          throw Error('Network Request Failed');
        }
        return response;
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          pages: d.page_count,
          leaf: d.leaf,
          slug: d.slug
        });

        let pageList = [];

        for (let i = 0; i < this.state.pages; i++) {
          pageList.push(i);
        }

        const pageImgs = pageList.map(p => {
          return fetch(this.props.endpoint + 'get-page/' + p + '/', {
            method: 'GET',
            headers: authHeader()
          }).then(response => {
            if (response.status !== 200) {
              throw Error('Network Request Failed');
            }
            return response.json();
          });
        });

        Promise.all(pageImgs).then(data =>
          this.setState({ data: data, loaded: true })
        );
      });
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }

  getIssue(slug) {
    let url = process.env.REACT_APP_API_URL + '/api/issue/' + slug + '/';

    return fetch(url, { method: 'GET', headers: authHeader() }).then(
      response => {
        return response.json();
      }
    );
  }

  render() {
    const { loaded } = this.state;

    return loaded ? (
      this.props.render(this.state)
    ) : (
      <Container style={loadingStyle}>
        <ReactLoading type="spinningBubbles" color="blue" />
      </Container>
    );
  }
}

export default ComicPageProvider;
