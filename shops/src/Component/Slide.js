import { Button, Carousel } from 'react-bootstrap'
import React, { Fragment } from 'react'

export const Slide = () => {
  return (
    <Fragment>
      <Carousel vaiant="dark">
        <Carousel.Item>
          <img
            class="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src='../img/w1.jpg'
          ></img>
          <Carousel.Caption className='bg-white text-dark'>
            <h5>Discover and shop latest products with LIVE video shopping.
              Shop the latest trends with your favourite influencers! Watch now.</h5>
            <div className='mb-3'>
              <Button variant='dark'>Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src='../img/OSC.jpg'
          ></img>
          <Carousel.Caption className='bg-white text-dark'>
            <h5>Discover and shop latest products with LIVE video shopping.
              Shop the latest trends with your favourite influencers! Watch now.</h5>
            <div className='mb-3'>
              <Button variant='dark'>Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>

  )
}
