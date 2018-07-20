import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';
import ReaderButtonGroup from './ReaderButtonGroup';

const uuid = shortid.generate;

const imgStyle = {
  height: '100vh',
  display: 'block',
  margin: 'auto'
};

class ReaderCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = { activeIndex: 0, showButtons: false };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.showBtnGroup = this.showBtnGroup.bind(this);
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

  showBtnGroup() {
    this.setState({ showButtons: true });
    setTimeout(() => {
      this.setState({ showButtons: false });
    }, 3000);
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
      <div onMouseMove={this.showBtnGroup}>
        {this.state.showButtons ? <ReaderButtonGroup /> : null}
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
