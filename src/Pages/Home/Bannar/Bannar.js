import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const Bannar = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleClick}>
      <Carousel.Item interval={1000}>
        <img
          height={500}
          className="d-block w-100 "
          src="https://tucunoticias24.com/wp-content/uploads/2020/12/Ninos-pequenos-jugando-juntos.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="fw-bolder text-dark">Little Learners (K-5)</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height={500}
          className="d-block w-100"
          src="https://ca-times.brightspotcdn.com/dims4/default/a59c9bb/2147483647/strip/true/crop/5472x3648+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F2e%2Fff%2Fb2d8c60d47928a43326f5b3cb09a%2Fla-photos-1staff-824956-me-lausd-first-day-webster-10-ajs.jpg"
          alt="Second slide"
        />

        <Carousel.Caption interval={1000}>
          <h3 className="fw-bold text-dark">Middle school (6-8)</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          height={520}
          className="d-block w-100"
          src="https://images.thequint.com/thequint%2F2021-02%2F3196040c-cc82-431a-8509-4b1cb2df39b3%2FSisodia.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="fw-bold text-dark">High school (9-12)</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Bannar;
