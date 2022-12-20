import React from 'react';
import imagef from '../../../../images/f.jpg';
import tImage1 from '../../../../images/t1.jpg';
import tImage2 from '../../../../images/t2.jpg';
import tImage3 from '../../../../images/t3.jpg';
import tImage4 from '../../../../images/t4.jpg';

const ContactInfo = () => {
    return (
       
        <div className="hero mb-10 mt-12 max-w-[1400px] mx-auto dark:bg-gray-600" style={{ backgroundImage: `url(${imagef})`, height: '640px' }}>
            <div className="hero-overlay bg-opacity-40 max-w-[1400px] mx-auto"></div>
            <div className="hero-content text-neutral-content">
                <div className="grid gap-30 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-80">
                    <div className='mr-20'>
                        <h1 className="mb-5 text-4xl font-bold text-yellow-500">Contact Info </h1>
                        <p className="mb-5 text-xl">1234k Avenue,Block-4,New York City.</p>
                        
                    </div>
                    <div>
                        <h1 className="mb-5 text-4xl font-bold text-yellow-500 ">Services</h1>
                        <p className="mb-2 text-xl">Appliance Repair</p>
                        <p className=" mb-2 text-xl">Home Improvement</p>
                        <p className="text-xl" >Home Maintenance</p>
                       
                    </div>
                    <div>
                        <h1 className="mb-5 text-3xl font-bold text-yellow-500">Legal</h1>
                        <p className="mb-2 text-xl">Privacy Policy</p>
                        <p className="mb-2 text-xl">Licence Info</p>
                        <p className=" text-xl">Terms Of Use</p>
                       
                    </div>
                    <div>
                    <h1 className="mb-5 text-3xl font-bold text-yellow-500">Latest Posts</h1>
                    <div className='grid gap-2 grid-cols-3 lg:grid-cols-3 py-3'>
                       
                       <div>
                        <p><img src={tImage1} alt=''/> </p>
                       </div>
                       <div>
                       <p><img src={tImage2} alt=''/> </p>
                       </div>
                       <div>
                       <p><img src={tImage3} alt=''/> </p>
                       </div>
                       <div>
                       <p><img src={tImage4} alt=''/> </p>
                       </div>
                       <div>
                       <p><img src={tImage2} alt=''/> </p>
                       </div>
                       <div>
                       <p><img src={tImage1} alt=''/> </p>
                       </div>
 
                   </div>
                    </div>
                    
                </div>
            </div>
            <div>
                <div className="justify-end hidden lg:block" style={{ marginTop: '400px' }}>
                    <div className="card bg-neutral text-neutral-content backdrop-saturate-200 bg-black/30 border-x-8 border-yellow-500" style={{width:'600px', height:'240px'}}>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-yellow-500 text-3xl">Stay Upto Date With Our Newsletter</h2>
                            <p>Sign up to receive helpful Q&A, info on upcoming services and more.</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactInfo;