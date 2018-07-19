import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';
import ReaderNavbar from './ReaderNavbar';

const uuid = shortid.generate;

const imgStyle = {
  height: '100vh',
  display: 'block',
  margin: 'auto'
};

class ReaderCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = { activeIndex: 0, showNav: false };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.showNavbar = this.showNavbar.bind(this);
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
    const nextIndex =
      this.state.activeIndex === this.props.data.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.data.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  showNavbar() {
    this.setState({ showNav: true });
    setTimeout(() => {
      this.setState({ showNav: false });
    }, 2500);
  }

  render() {
    const { activeIndex } = this.state;
    const { data } = this.props;

    const slides = data.map(el => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={uuid()}
        >
          <img style={imgStyle} src={el.page} alt="Page" />
        </CarouselItem>
      );
    });

    return (
      <div onMouseMove={this.showNavbar}>
        {this.state.showNav ? <ReaderNavbar /> : null}
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          interval={false}
        >
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </div>
    );
  }
}

ReaderCarousel.propTypes = {
  data: PropTypes.array.isRequired
};

export default ReaderCarousel;
