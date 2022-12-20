import React, { useEffect } from 'react';
import imageg7 from '../../../images/g7.jpg';
import Aos from 'aos';
import "aos/dist/aos.css"

const Services = () => {
  useEffect(() =>{
    Aos.init({offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,})
},[])

    return (

 <div className="bg-base-300 mt-10 dark:bg-gray-600">
<div className="hero-content flex-col lg:flex-row">
  <img data-aos="fade-right" src={imageg7} className="rounded-lg shadow-2xl"alt='' />
  <div data-aos="fade-left" className='ml-6 dark:text-white'>
    <h1 className="text-5xl font-bold text-blue-600 dark:text-white">Service You Can Trust</h1>
    <p className="py-6 text-xl">Protect All Your Home Appliances & Systems</p>
    
  </div>
</div>
</div> 
    );
};

export default Services;