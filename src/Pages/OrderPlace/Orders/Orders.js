import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const{user} = useContext(AuthContext)
    const[orders, setOrders]  = useState({})
    
    

    useEffect( () =>{
        fetch(`https://elete-security-home-services-server.vercel.app/orders?email=${user?.email}`,{
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        }
        )
        .then(res =>res.json())
        .then(data =>setOrders(data))
    },[user?.email])

    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure, You want to cancel this booking')
       if(proceed){
        fetch(`https://elete-security-home-services-server.vercel.app/orders/${id}`,{
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){
                toast.success('deleted Successfully');
                const remaining = orders.filter(odr =>odr._id !== id);
                setOrders(remaining)
                
            }
        
        
        })
       }
    
    }

const handleStatusUpdate = (id) =>{
    fetch(`https://elete-security-home-services-server.vercel.app/orders/${id}`,{
        method: 'PATCH',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify({status:'Approved'})
    })
    .then(res =>res.json())
    .then(data =>{
        console.log(data)
        if(data.modifiedCount >0) {
            const remaining = orders.filter(odr => odr._id !== id);
            const approving = orders.find(odr => odr._id ===id);
            approving.status ='Approved'
            const newOrders = [approving, ...remaining];
            setOrders(newOrders)
            
            
        }
    
    
    })
}

    return (
        <div className='mt-10 dark:bg-gray-700'>
            <div className="overflow-x-auto w-full dark:bg-gray-700">
  <table className="table w-full dark:bg-gray-700">
    
    <thead>
      <tr className='sticky top-0 z-30 dark:bg-gray-700'>
        <th>
        </th>
        <th>Name</th>
        <th>Service</th>
        <th>Email</th>
        <th>Address</th>
        <th>Service Area</th>
        <th>Booking Date</th>
        <th>Delete</th>
        <th>Status</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
     {  Array.isArray(orders)
        ? orders.map(order =><OrderRow key={order._id} order={order}
        handleDelete={handleDelete} handleStatusUpdate={handleStatusUpdate}
    
        
        ></OrderRow>)
     : null
     }
    
    
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default Orders;