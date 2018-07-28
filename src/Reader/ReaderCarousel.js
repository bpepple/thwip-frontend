import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';
import ReaderButtonGroup from './ReaderButtonGroup';

const imgStyle = {
  height: '100vh',
  display: 'block',
  margin: 'auto'
};

const txtStyle = {
  position: 'absolute',
  top: '10px',
  right: '20px'
};

const STATUS = Object.freeze({
  unread: 0,
  partial: 1,
  read: 2
});

class ReaderCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: this.props.leaf,
      showButtons: false,
      readStatus: 0
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.updateLeaf = this.updateLeaf.bind(this);
    this.pageNumber = this.pageNumber.bind(this);
    this.newReadStatus = this.newReadStatus.bind(this);
  }

  componentDidMount() {
    document.body.style.backgroundColor = 'black';
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const { data, slug } = this.props;
    const nextIndex =
      this.state.activeIndex === data.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
    this.updateLeaf(slug, nextIndex);
  }

  previous() {
    if (this.animating) return;
    const { data, slug } = this.props;
    const nextIndex =
      this.state.activeIndex === 0
        ? data.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
    this.updateLeaf(slug, nextIndex);
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  mouseMove() {
    this.setState({ showButtons: true });
    setTimeout(() => {
      this.setState({ showButtons: false });
    }, 3000);
  }

  updateLeaf(slug, page) {
    const formData = new FormData();
    const url = process.env.REACT_APP_API_URL + '/api/issue/' + slug + '/';
    const status = this.newReadStatus();

    formData.append('leaf', page);
    formData.append('status', status);

    fetch(url, { method: 'PUT', body: formData });
  }

  pageNumber() {
    let i = this.state.activeIndex + 1;

    return i;
  }

  newReadStatus() {
    const { activeIndex } = this.state;
    const { data } = this.props;
    let status = STATUS.unread;

    if (activeIndex < 1) {
      status = STATUS.unread;
    } else if (activeIndex === data.length - 1) {
      status = STATUS.read;
    } else {
      status = STATUS.partial;
    }

    return status;
  }

  render() {
    const { activeIndex } = this.state;
    const { data } = this.props;

    const slides = data.map((el, index) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={index}
        >
          <img style={imgStyle} src={el.page} alt="Page" />
        </CarouselItem>
      );
    });

    return (
      <div onMouseMove={this.mouseMove}>
        {this.state.showButtons ? <ReaderButtonGroup /> : null}

        <p className="text-white" style={txtStyle}>
          Page {this.pageNumber()} of {data.length}
        </p>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          interval={false}
        >
          {slides}
          {activeIndex > 0 ? (
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={this.previous}
            />
          ) : null}
          {activeIndex < data.length - 1 ? (
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={this.next}
            />
          ) : null}
        </Carousel>
      </div>
    );
  }
}

ReaderCarousel.propTypes = {
  data: PropTypes.array.isRequired,
  leaf: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired
};

export default ReaderCarousel;
