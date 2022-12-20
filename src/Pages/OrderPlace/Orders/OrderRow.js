import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({order, handleDelete,handleStatusUpdate,accepted}) => {
  
    const{ _id,serviceName,price,customer,email,mobile,address,servicearea, status,date} = order
   
    


    return (
        <tr className='hover  dark:bg-gray-800'>
        <th>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
            </div>
            <div>
              <div className="font-bold">{customer}</div>
              <div className="text-sm opacity-50">{mobile}</div>
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          <br/>
          <span className="badge badge-ghost badge-sm">${price}</span>
        </td>
        <td>{email}</td>
        <th>
          <button className="btn btn-ghost btn-xs">{address}</button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs">{servicearea}</button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs">{date}</button>
        </th>
        <th>
          <button onClick={() =>handleDelete(_id)} className="btn btn-error btn-xs">Delete</button>
        </th>
        <th>
          <button onClick={() =>handleStatusUpdate(_id)} className="btn btn-info btn-xs">{status? status: 'pending'}</button>
        </th>
        <th>
          {
           order.price && !order.paid &&<Link to={`/payment/${order._id}`}><button className='btn btn-primary btn-xs'>Pay</button></Link>
          }
          {
            order.price && order.paid && <span className='text-primary'>Paid</span>
          }
        </th>
      </tr>
    );
};

export default OrderRow;