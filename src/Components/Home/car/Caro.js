import React from 'react'
import './Caro.css'
import Carousel from 'react-bootstrap/Carousel';


const Caro = () => {
  return (
    <div>
       <Carousel fade className='car'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="1.jpg"
          alt="1.jpg"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="2.jpg"
          alt="2.jpg"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="3.jpg"
          alt="3.jpg"
        />

        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Caro
