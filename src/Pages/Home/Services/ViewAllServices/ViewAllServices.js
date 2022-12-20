import React, { useContext, useEffect, useState } from 'react';
import ViewCardAllServices from './ViewCardAllServices';
import serviceImage from '../../../../images/service.jpg';
import ContactInfo from '../../Home/ContactInfo/ContactInfo';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import Spinner from '../../../Spinner/Spinner';


const ViewAllServices = () => {
    const [services, setServices] = useState([])
    const {loading} = useContext(AuthContext);

    useEffect(() => {
        fetch('https://elete-security-home-services-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    if(loading){
        return <Spinner></Spinner>
    }


        return (

                <div>
                    <h1 className='text-5xl text-center mt-2 dark:text-white'>Services Offered</h1>
                    <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        services.map(service => <ViewCardAllServices key={service._id} service={service} ></ViewCardAllServices>)
                    }
                </div> 
                <h1 className='text-5xl text-center mt-5 mb-8 dark:text-white'>Complete Home Service</h1>
                </div>
     
    );
};

export default ViewAllServices;