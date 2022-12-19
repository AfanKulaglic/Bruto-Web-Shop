import React, {useState} from 'react'
import carouselImg from '../imgs/carousel.jpg'
import carouselImg1 from '../imgs/carousel1.jpg'
import carouselImg2 from '../imgs/carousel3.jpg'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'


export const CarouselCtx = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

  return (
    <div className='container'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image
          width='2000ch'
          height='1000ch'
          className="d-block w-100"
          src={carouselImg}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          width='2000ch'
          height='1000ch'
          className="d-block w-100"
          src={carouselImg1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          width='2000ch'
          height='1000ch'
          className="d-block w-100"
          src={carouselImg2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
