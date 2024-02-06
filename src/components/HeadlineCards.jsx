import React from 'react';
import p1 from '../images/p1.jpg';
import p2 from '../images/p2.jpg';
import p3 from '../images/p3.jpg';

const HeadlineCards = () => {
  return (
    <div className='md:container md:px-14 mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 '>
        { /* card */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:font-bold'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-[200px] w-full object-cover rounded-xl' src={p1} alt="" />
        </div>
        { /* card */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>New Restorants</p>
                <p className='px-2'>Added Daily</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:font-bold'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-[200px] w-full object-cover rounded-xl' src={p2} alt="" />
        </div>
        { /* card */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
                <p className='px-2'>Tasty Treats</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:font-bold'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-[200px] w-full object-cover rounded-xl' src={p3} alt="" />
        </div>
    </div>
  )
}

export default HeadlineCards
