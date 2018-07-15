import React, { Component } from "react";
import PropTypes from "prop-types";

class ComicPageProvider extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired,
    pages: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired
  };

  state = {
    data: [],
    loaded: false,
    placeholder: "Loading..."
  };

  componentDidMount() {
    let i;
    let pageList = [];

    for (i = 0; i < this.props.pages; i++) {
      pageList.push(i);
    }

    const pageImgs = pageList.map(p => {
      return fetch(this.props.endpoint + p + "/").then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        return response.json();
      });
    });

    Promise.all(pageImgs).then(data =>
      this.setState({ data: data, loaded: true })
    );
  }

  render() {
    const { data, loaded, placeholder } = this.state;
    return loaded ? this.props.render(data) : <p>{placeholder}</p>;
  }
}

export default ComicPageProvider;
