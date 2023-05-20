import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/index.css';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item >
          <img
            className="d-block w-100 slider-img"
            src="https://static.vecteezy.com/system/resources/previews/002/453/533/non_2x/big-sale-discount-banner-template-promotion-illustration-free-vector.jpg"
            alt="First slide"
            
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src="https://1.bp.blogspot.com/-LUeqlApUdOA/Xst7LlKjkrI/AAAAAAAAVgM/uaioZ1nvbH4VkVRnXzafj7Qz_y7ZzIx9gCLcBGAsYHQ/w1200-h630-p-k-no-nu/realme-smart-tv.png"
            alt="Second slide"
            
          />
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src="https://img.freepik.com/free-vector/gradient-sale-background_23-2148860977.jpg"
            alt="Third slide"
            
          />
  
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  


export default ControlledCarousel