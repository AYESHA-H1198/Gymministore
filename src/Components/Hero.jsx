import React from 'react';
import heroImg from '../assets/HeroImg.png';

const Hero = () => {
  return (
    <section className='w-full h-screen flex flex-col items-center justify-center bg-no-repeat bg-center bg-cover relative overflow-hidden'>
      <div className="absolute inset-0 overflow-hidden z-[-10]">
        <img className='w-full h-full object-cover' src={heroImg} alt='Hero-Image' />
      </div>
      <h1 className='font-Averia text-6xl sm:text-8xl stroke-[rgb(255,215,0)] text-stroke-3 text-transparent font-bold text-[rgb(255,215,0)] md:mt-[140px]'>CHANGE</h1>
      <h1 className='font-Averia text-4xl sm:text-6xl font-semibold text-white mt-5'>YOUR LIFESTYLE</h1>
    </section>
  );
};

export default Hero;
