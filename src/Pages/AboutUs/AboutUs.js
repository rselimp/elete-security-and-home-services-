import React from 'react';
import innerbg from '../../images/inner-bg.png';
import innert6 from '../../images/t5.png';
import About from '../Home/About/About';
import Counter from './Counter';
import Count from './Counter';

const AboutUs = () => {
    return (
        <div className='mt-4'>
            <div className="hero bg-sky-100 dark:bg-gray-500">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={innerbg} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <img src={innert6} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='dark:text-white'>
                        <h1 className="text-5xl font-bold">Best Home and Corporate Services in our Country</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    
                    </div>
                </div>
            </div>
            <div>
                <About></About>
            </div>
            <div className='mt-6'>
                <p className='text-4xl dark:text-white mb-6 text-center'>On time,On budget, with in Scope and with Quality</p>
                <div>
                    <Counter></Counter>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;