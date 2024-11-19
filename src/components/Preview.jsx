import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { book1,book2 } from "../img/book";

function Slider() {
  return (
    <div className="h-96 mt-2">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={book1}  // Use the imported image here
            alt="First slide"
            style={{ objectFit: "cover", height: "400px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={book2}
            alt="Second slide"
            style={{ objectFit: "cover", height: "400px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={book1}
            alt="Third slide"
            style={{ objectFit: "cover", height: "400px" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
