import React from "react";

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/51139346_3652221098203399_627632684885082112_n.jpg?_nc_cat=106&_nc_ht=scontent-gru2-2.xx&oh=a6fb64dadaefdbfe96a9dba083b17b04&oe=5CDE9146',
        altText: 'Slide 3',
        caption: 'Slide 3'
    },
    {
        src: 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/50434683_3619357721489737_9217161320871231488_n.jpg?_nc_cat=111&_nc_ht=scontent-gru2-2.xx&oh=d0a26f0dd25023c78ef938d51de1b6eb&oe=5CF5786F',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/15665731_1597342630357933_3930923588705780458_n.jpg?_nc_cat=109&_nc_ht=scontent-gru2-2.xx&oh=d2681bc8b562e5028bb3b5e521700dff&oe=5CFDBB5F',
        altText: 'Slide 2',
        caption: 'Slide 2'
    }
];

class Banner extends React.Component {
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
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}

export default Banner;