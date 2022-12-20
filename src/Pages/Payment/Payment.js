import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51M6GGgLEil00zfkwukAhfa8j8lqqgbeofFJm0jbG6Co65ZTcGKww02SZFu4FEVr0gMGCO3eJoYbrdIcsEKT2J2tE00aef6UXL8');


const Payment = () => {
    const order = useLoaderData();
    const navigation = useNavigation();
    const { price, date, serviceName } = order;

    if(navigation.state === "loading"){
        return<Spinner></Spinner>
    }

    return (
        <div className='dark:text-white'>
            <h3 className="text-3xl"> Advanced Payment for {serviceName}</h3>
            <p>Please pay <strong>${price}</strong> for your order on Date {date}</p>
            <div className='w-96 my-6 dark:text-white'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm order={order} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;