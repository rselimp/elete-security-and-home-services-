import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import Aos from 'aos';
import "aos/dist/aos.css"
import image1 from '../../../../images/t1.jpg'
import image2 from '../../../../images/t5.png'
import { Link } from 'react-router-dom';



const LeftSideContainer = () => {

    useEffect(() =>{
        Aos.init({offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,})
    },[])



    return (
    
        <div className='mr-4 mt-4'>
            <div>
                <div data-aos ="zoom-out-right" className="hero bg-sky-200 dark:bg-gray-500 ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img data-aos="flip-up" src={image1} className="rounded-lg shadow-2xl w-60 h-60" alt='' />
                        <div className='dark:text-white'>
                            <h1 className="text-5xl font-bold">Monthly Offer News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                           <button className='btn btn-info btn-xs '><Link to='/nowviewallservice'>All Services</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div data-aos ="zoom-out-left" className="hero bg-base-200 mt-6 dark:bg-gray-500 ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img data-aos ="flip-down" src={image2} className="rounded-lg shadow-2xl w-60 h-60" alt='' />
                        <div className='dark:text-white'>
                            <h1 className="text-5xl font-bold">Yearly Offer News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className='btn btn-info btn-xs '><Link to='/nowviewallservice'>All Services</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
    );
};

export default LeftSideContainer;