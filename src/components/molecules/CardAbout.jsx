import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AboutCarousel = () => {
  

  const CustomNextArrow = ({ onClick }) => (
    <button className="slick-arrow slick-next absolute top-1/2 transform -translate-x-1/2 -right-12 shadow-md top-20 p-4 rounded-full bg-blue-500 text-white shadow-lg shadow-blue-500/50 hover:opacity-75 hover:via-pink-60" onClick={onClick}>
      <FaChevronRight />
    </button>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <button className="slick-arrow slick-prev absolute top-1/2 transform -translate-x-1/2 z-10 top-20 left-0 p-4 rounded-full bg-blue-500 text-white shadow-lg shadow-blue-500/50 hover:opacity-75 hover:via-pink-60" onClick={onClick}>
      <FaChevronLeft />
    </button>
  );

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="w-80 mx-auto m-10  ">
      <Slider {...settings} >
        <div>
          <img src="/images/iri1.jpg" alt="Slide 1" className="w-full " />
        </div>
        <div>
          <img src="/images/iri1.jpg" alt="Slide 2" className="w-full " />
        </div>
        <div>
          <img src="/images/iri1.jpg" alt="Slide 3" className="w-full rounded-tl-[10px] rounded-tr-[20px] rounded-br-[30px] rounded-bl-[40px]" />
        </div>
      </Slider>
    </div>
  );
};

export default AboutCarousel;
