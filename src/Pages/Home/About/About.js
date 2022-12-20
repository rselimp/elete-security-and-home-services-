import React, { useEffect } from 'react';
import imageAbout from '../../../images/about.jpg';
import { FaBook, FaCheck, FaPhotoVideo, FaBriefcase } from "react-icons/fa";
import img1 from '../../../images/a1.png';
import Aos from 'aos';
import "aos/dist/aos.css"

const About = () => {

    useEffect(() =>{
        Aos.init({offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,})
    },[])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-yellow-500 mt-8 dark:bg-gray-600'>
            <div className=''>
                <div className="card image-full" style={{ width: '600px', height: '500px' }}>
                    <figure><img  src={imageAbout} alt="" /></figure>
                    <div className="card-body hero-overlay justify-center opacity-60 bg-yellow-400 items-center dark:bg-gray-600">
                        <div>
                            <h2 className="card-title text-center text-blue-600 text-8xl dark:text-white">Why </h2>
                            <span className='text-6xl text-red-600 bold dark:text-white'>C</span>
                            <span className='text-6xl text-black dark:text-white'>hoose</span>
                            <span className='text-6xl text-red-600 dark:text-white'> U</span><span className='text-6xl text-black dark:text-white'>s?</span>

                        </div>

                    </div>
                </div>
            </div>
            <div className='bg-yellow-500 mt-8 dark:bg-gray-600 dark:text-white'>

                <div>
                    <h1 className='text-2xl mt-6 mb-10'>One Stop Solution for your Complete Home Maintenance</h1>
                </div>
                <div className='flex gap-15'>
                    <div>
                    <div className='flex lg:gap-4 mb-10'>
                        <div>
                            <span><FaCheck style={{ display: 'inline-block', borderRadius: '50%', border: '1px solid indigo', backgroundColor: 'grey', height: '30px', width: '30px' }}></FaCheck></span>
                        </div>
                        <div>

                            <h1>Vission</h1>
                            <p>Your vision is Satisfied</p>
                        </div>
                    </div>
                    <div className='flex gap-4 mb-12'>
                        <div>
                            <span><FaBook style={{ display: 'inline-block', borderRadius: '50%', border: '1px solid indigo', backgroundColor: 'grey', height: '30px', width: '30px' }}></FaBook></span>
                        </div>
                        <div>
                            <h1>Affordable</h1>
                            <p>Your vision is Satisfied</p>
                        </div>
                    </div>
                    <div className='flex gap-4 mb-12'>
                        <div>
                            <span><FaPhotoVideo style={{ display: 'inline-block', borderRadius: '50%', border: '1px solid indigo', backgroundColor: 'grey', height: '30px', width: '30px' }} ></FaPhotoVideo></span>
                        </div>
                        <div>
                            <h1>Quality</h1>
                            <p>Your vision is Satisfied</p>
                        </div>
                    </div>

                    <div className='flex gap-4 mb-12'>
                        <div>
                            <span><FaBriefcase style={{ display: 'inline-block', borderRadius: '50%', border: '1px solid indigo', backgroundColor: 'grey', height: '30px', width: '30px' }}></FaBriefcase></span>
                        </div>
                        <div>
                            <h1>24*7 Support</h1>
                            <p>Your vision is Satisfied</p>
                        </div>
                    </div>
                    </div>
                    <div className='ml-20 -mt-20'>
                    <div>
                        <img data-aos ="fade-left" className='mr-60 mt-40' src={img1} alt='' />
                    </div>
                    </div>
                </div>


            </div>
        </div>



    );
};

export default About;