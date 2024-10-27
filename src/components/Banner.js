import React from 'react';


import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';

const Banner = () => {
  return (
  <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
    <div className='flex flex-col lg:flex-row '>
      <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='text-4x1 lg:text-[58px] fonts-semibold leading-none mb-6'>
          <span className='text-green-600'>BUY</span> Your Dream House With MSKN
        </h1>
        <p className='max-w-[480px] mb-8'>
        Welcome to MSKN, your trusted partner in finding the perfect home in vibrant Riyadh. The name "MSKN" (مسكن) means "dwelling," symbolizing a place where memories are created and dreams flourish. We believe that a home is more than just a space—it's where life happens. Our mission is to simplify your search for a residence that resonates with you, offering a seamless experience to explore diverse properties tailored to your lifestyle. Whether you're looking for a cozy apartment, a family villa, or a luxurious retreat, MSKN is here to guide you every step of the way. Your ideal home awaits at MSKN, where love and unforgettable moments thrive.
        </p>
      </div>
      <div className='hidden flex-1 lg:flex justify-end items-end'>
        <img src={Image} alt=''/>
      </div>
    </div>
    <Search/>
  </section>);
};

export default Banner;
