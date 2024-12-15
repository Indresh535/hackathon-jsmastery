"use client"
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import BallCanvas from '@/components/Canvas/';
import Image from 'next/image';

  const VerticalCarousel = ({Images3D}) => {

    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
      // Update isMobileView state on component mount and resize
      const handleResize = () => {
        setIsMobileView(window.innerWidth <= 768); // Change the breakpoint if needed
      };
  
      handleResize(); // Initial check on component mount
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


    const settings = {
    //dots: true,
    infinite: true,
    vertical:  isMobileView ? false : true,
    verticalSwiping: isMobileView ? false : true,
    slidesToShow: isMobileView ? 1 : 3, // Show only 1 slide on mobile view and 3 slides on other views
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    //arrows: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false, // Horizontal mode for small screens
          horizontal: true,
          verticalSwiping: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 1
        },
      },
    ],
  };
  
  
    return (
      <div style={{ height: isMobileView ? '120px' : '400px' }} className="overflow-x-hidden">
      {/* Adjust the height for small and medium screens */}
      <Slider {...settings} className='bg-white dark:bg-gray-800 dark:border-blue-600'>
        {Images3D.map((item, index) => (
          <div key={index}>
            <BallCanvas icon={item.src} />
            {/*  <Image src={item.src} alt="skills images" className='rounded-full w-24 shadow-md' width={96} height={96}/> */}
          </div>
        ))}
      </Slider>
    </div>
    );
  };

export default VerticalCarousel;
