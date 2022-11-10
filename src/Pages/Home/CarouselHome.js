import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselHome = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 450 }}
          src="https://i.postimg.cc/5yMxPKDj/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="text-danger font-weight-bold">
          <h3>Count The Memories not The Calories </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://i.postimg.cc/V6sTz3p3/2.jpg"
          style={{ height: 450 }}
          alt="Second slide"
        />

        <Carousel.Caption className="text-success font-weight-bold">
          <h3>Life is too Short to skip Dessert</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 font-weight-bold"
          src="https://i.postimg.cc/L5nb1jHD/3.jpg"
          style={{ height: 450 }}
          alt="Third slide"
        />

        <Carousel.Caption className="text-light font-weight-bold">
          <h3>GOOD FOOD is all the sweeter when shared with GOOD FRIENDS</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/QxZzt92Q/4.jpg"
          style={{ height: 450 }}
          alt="Third slide"
        />

        <Carousel.Caption className="text-info font-weight-bold">
          <h3>EAT GOOD FEEL GOOD</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/5N5RF9JZ/7.jpg"
          style={{ height: 450 }}
          alt="Third slide"
        />

        <Carousel.Caption className="text-danger font-weight-bold">
          <h3>Good food is the foundation of genuine happiness.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/gkqGkPT0/5.jpg"
          style={{ height: 450 }}
          alt="Third slide"
        />

        <Carousel.Caption className="text-danger font-weight-bold">
          <h3>GooD FooD is GooD MooD</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/tC7z9XT3/Italian-Beef-Steak.jpg"
          style={{ height: 450 }}
          alt="Third slide"
        />

        <Carousel.Caption className="text-info font-weight-bold">
          <h3> "Food tastes better when you eat it with your family"</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;
