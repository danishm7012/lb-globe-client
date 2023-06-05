import React from 'react'
import { Carousel } from 'react-bootstrap'
import './carouselbackmain.css'
function carousel() {
  return (
    <div>
      <Carousel style={{ zIndex: 0 }} className='sliders'>
        <Carousel.Item style={{ zIndex: 1 }}>
          <img
            className='d-block w-100'
            src='/images/slide1.jpg'
            alt='First slide'
          />
        </Carousel.Item>
        <Carousel.Item style={{ zIndex: 1 }}>
          <img
            className='d-block w-100'
            src='/images/slide2.jpg'
            alt='Second slide'
          />
        </Carousel.Item>
        <Carousel.Item style={{ zIndex: 1 }}>
          <img
            className='d-block w-100'
            src='/images/slide3.jpg'
            alt='Third slide'
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default carousel
