import React, { useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
const items = [
  {
    id:1,
    src:'https://i1.fnp.com/assets/images/custom/new-plants/top-banners/Top-Banner-Desk-17-june-2020.jpg'
  },
  {
    id: 2,
    
    src:'https://i1.fnp.com/assets/images/custom/new-plants/middle-banners/New-Arrivals-Desk-17-june-2020.jpg'
  },
  {
    id: 2,
    
    src:'https://i7.fnp.com/assets/images/custom/new-plants/same-day/same-day.jpg'
  },

 
];
const Carouselpart = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.src}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
          <img src={item.src} width="1100px" height="300px" />
        
      </CarouselItem>
    );
  });
  return (
    <div className="container-fluid">
      
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  ); 
}
export default Carouselpart;