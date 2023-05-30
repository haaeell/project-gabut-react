import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutCarousel = () => {
    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="w-80 mx-auto m-10">
      <Slider {...settings}>
        <div>
          <img src="/images/logo.png" alt="Slide 1" className="w-full" />
        </div>
        <div>
          <img src="/images/logo.png" alt="Slide 2" className="w-full" />
        </div>
        <div>
          <img src="/images/logo.png" alt="Slide 3" className="w-full" />
        </div>
      </Slider>
    </div>
  );
};

export default AboutCarousel;
