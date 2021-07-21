import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import "./_Carousel.scss";
import firstPic from "./../../../static/img/laptop-and-code.jpg";
import secondPic from "./../../../static/img/keyboard.jpg";
import thirdPic from "./../../../static/img/lightbulb.jpg";

const items = [
  {
    src: firstPic,
    altText: "First Slide of laptop and coffee",
    title: `Josh Schoenfeld`,
    description: `
    Analytical | Passionate | Innovative`,
    clas: "first-slide"
  },
  {
    src: secondPic,
    altText: "Second Slide of a keyboard",
    title: "Full-stack developer based in ATL.",
    description: `Helping with all your web service needs.`,
    clas: "second-slide"
  },
  {
    src: thirdPic,
    altText: "Third Slide of lightbulb",
    title: "Projects below: ",
    description: `They're sorted by themes.`,
    clas: "third-slide"
  }
];

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
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
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }
  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }
  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render(props) {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            className={`floatingtext ${item.clas}`}
            captionHeader={item.title}
            captionText={item.description}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText=" "
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText=" "
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}
