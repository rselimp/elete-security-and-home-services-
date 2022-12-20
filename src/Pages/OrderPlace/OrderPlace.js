import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import fImages from '../../images/f1.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const OrderPlace = () => {
    const {user} = useContext(AuthContext)
    const { _id,title,price} = useLoaderData();

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const mobile = form.mobile.value;
        const address = form.address.value;
        const servicearea = form.servicearea.value;
        const date = form.date.value;

        const order ={
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            mobile,
            address,
            servicearea,
            date
        }

        fetch('https://elete-security-home-services-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
                toast.success('Order Submit Successfully',{position:"bottom-center"})
                form.reset()
                toast.info('Order Submit Successfully',{position:"top-center"})
                form.reset()
                
            }
            
        
        })
        .catch(error =>console.error(error))


    }




    return (
        <div className='mt-10 mx-auto max-w-max md:max-w-max dark:bg-gray-700'>
            <form onSubmit={handlePlaceOrder}>
                <div className="hero dark:bg-gray-700" style={{ backgroundColor: '#031f9a' }}>

                    <div className="hero-content dark:bg-gray-700" style={{ backgroundColor: '#031f9a' }}>
                        <div className="card w-full dark:bg-gray-700" style={{backgroundColor: '031f9a' }}>
                            <div className="card-body dark:bg-gray-700">
                                <div className='flex'>
                                    <div>
                                        <h1 className='text-3xl text-orange-300'>Looking for a Handyman?</h1>
                                        <h2 className='text-xl text-white'>We solve your Home repair needs</h2>
                                        <h2 className='text-xl text-white'>{title}</h2>
                                        <h2 className='text-xl text-white'>${price}</h2>
                                    </div>
                                    <div>
                                        <img style={{ width: '100px' }} src={fImages} alt='' />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-teal-400 text-xl">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered " />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-teal-400 text-xl">Email</span>
                                    </label>
                                    <input type="email" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered" readOnly />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-teal-400 text-xl">Mobile no.</span>
                                    </label>
                                    <input type="text" name='mobile' placeholder="Mobile" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-teal-400 text-xl">Address</span>
                                    </label>
                                    <input type="text" name='address' placeholder="Address" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-teal-400 text-xl">Service Area</span>
                                    </label>
                                    <textarea name='servicearea' className="textarea textarea-bordered" placeholder="Service Area"></textarea>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-teal-400 text-xl">Booking Date</span>
                                    </label>
                                    <input name='date' type="date" />
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn btn-info' type="submit" value="Order" />
                                    <ToastContainer />
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );

};

export default OrderPlace;