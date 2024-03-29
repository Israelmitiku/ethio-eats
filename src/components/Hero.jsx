import React from 'react';
import HeroBackground from '../images/HeroBackground.jpg';

const Hero = () => {
  return (
    <div className='md:container md:px-14 mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/* overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center'>
            <h1 className = 'px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ' >The <span className='text-orange-500'>Best</span></h1>
            <h1 className = 'px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '><span className='text-orange-500'> Foods</span> Delivery</h1>
        </div>
        <img className='w-full max-h-[500px] object-cover' src={HeroBackground} alt="hero image" />
      </div>
    </div>
  )
}

export default Hero
