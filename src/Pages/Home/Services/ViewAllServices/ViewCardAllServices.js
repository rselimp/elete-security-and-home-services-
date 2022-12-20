import React from 'react';
import { Link } from 'react-router-dom';


const ViewCardAllServices = ({ service}) => {
    const { _id, title,price, img} = service;
    return (
        <div>
            <div className="card w-96 bg-sky-300 dark:bg-gray-600 shadow-xl mt-10 mx-auto">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center dark:text-white">
          <h2 className="card-title">{title}</h2>
          <h2 className="card-title">${price}</h2>

          <div className="card-actions">
            <Link to={`/orderplace/${_id}`}>
            <button className="btn btn-info dark:text-white">Booking Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
         </div>
        </div>
        
    );
};

export default ViewCardAllServices;