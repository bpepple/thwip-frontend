import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactLoading from "react-loading";

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
    document.body.style.backgroundColor = "black";

    let i;
    let pageList = [];

    for (i = 0; i < this.props.pages; i++) {
      pageList.push(i);
    }

    const pageImgs = pageList.map(p => {
      return fetch(this.props.endpoint + p + "/").then(response => {
        if (response.status !== 200) {
          console.log("Something went wrong while loading a comic page.");
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
      <ReactLoading type="spinningBubbles" color="blue" />
    );
  }
}

export default ComicPageProvider;
